"""Scrape a Tone3000 tone page into JSON: pack metadata + every listed model's name and ESRs.

Usage: python Tools/t3k_scrape.py <tone3000 tone URL> [out.json] [--meta]

--meta downloads each file. For a .nam it reads NAM's own gain (0-1) and loudness
estimates, useful for ordering packs whose file names carry no settings. For an IR .wav
it reads the header (sample rate, bit depth, channels, length) and, if numpy is
installed, the IR's average level in low/mid/high bands (dB relative to its loudest band;
a flat response reads 0 everywhere), a rough objective picture of each IR's voicing.

Tone3000 pages are Next.js; the pack record and description live in the embedded
`self.__next_f.push` flight data, and the per-model ESR badges only in the rendered
model cards. Decoding a creator's file-naming scheme into knob settings is per-pack
and done by hand in the NAMs/ or IRs/ pack file, not here.
"""
import html
import json
import re
import struct
import sys
import urllib.request


def fetch_bytes(url):
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=60) as r:
        return r.read()


def fetch(url):
    return fetch_bytes(url).decode("utf-8")


# Band edges in Hz for the IR voicing summary.
IR_BANDS = [("low", 20, 250), ("low_mid", 250, 800), ("mid", 800, 2500), ("high_mid", 2500, 5000), ("high", 5000, 12000)]


def wav_info(data):
    """Header fields + per-band average level (dB relative to the loudest band) of a RIFF WAV IR."""
    if data[:4] != b"RIFF" or data[8:12] != b"WAVE":
        return {"error": "not a RIFF/WAVE file"}
    pos, fmt, samples = 12, None, None
    while pos + 8 <= len(data):
        cid, size = data[pos:pos + 4], struct.unpack("<I", data[pos + 4:pos + 8])[0]
        body = data[pos + 8:pos + 8 + size]
        if cid == b"fmt ":
            tag, ch, rate, _, _, bits = struct.unpack("<HHIIHH", body[:16])
            if tag == 0xFFFE and len(body) >= 26:  # WAVE_FORMAT_EXTENSIBLE: real tag leads the subformat GUID
                tag = struct.unpack("<H", body[24:26])[0]
            fmt = {"format": "float" if tag == 3 else "pcm", "channels": ch, "sample_rate": rate, "bits": bits}
        elif cid == b"data":
            samples = body
        pos += 8 + size + (size & 1)
    if not fmt or samples is None:
        return {"error": "missing fmt or data chunk"}
    frame = fmt["channels"] * fmt["bits"] // 8
    info = dict(fmt, length_ms=round(1000 * len(samples) / frame / fmt["sample_rate"], 1))
    try:
        import numpy as np
    except ImportError:
        return info
    b = fmt["bits"]
    if fmt["format"] == "float":
        x = np.frombuffer(samples, dtype="<f4" if b == 32 else "<f8").astype(float)
    elif b == 24:
        raw = np.frombuffer(samples[:len(samples) // 3 * 3], dtype=np.uint8).reshape(-1, 3)
        x = (raw[:, 0].astype(np.int32) | (raw[:, 1].astype(np.int32) << 8) | (raw[:, 2].astype(np.int32) << 16))
        x = np.where(x >= 1 << 23, x - (1 << 24), x).astype(float)
    else:
        x = np.frombuffer(samples, dtype={16: "<i2", 32: "<i4", 8: "u1"}[b]).astype(float)
    x = x[: len(x) // fmt["channels"] * fmt["channels"]].reshape(-1, fmt["channels"])[:, 0]
    spec = np.abs(np.fft.rfft(x, n=max(len(x), 8192))) ** 2
    freqs = np.fft.rfftfreq(max(len(x), 8192), 1 / fmt["sample_rate"])
    # Mean power per FFT bin, so a flat response reads equal in every band regardless of band width.
    energy = {n: spec[(freqs >= lo) & (freqs < hi)].mean() for n, lo, hi in IR_BANDS}
    peak = max(energy.values()) or 1
    info["bands_db"] = {n: round(10 * np.log10(e / peak), 1) if e else None for n, e in energy.items()}
    return info


def flight_data(page):
    chunks = re.findall(r'self\.__next_f\.push\(\[1,"(.*?)"\]\)</script>', page, re.S)
    return "".join(json.loads('"' + c + '"') for c in chunks)


def refs(flight):
    out = {}
    for line in flight.split("\n"):
        m = re.match(r"^([0-9a-f]+):(\{.*|\[.*)$", line)
        if m:
            try:
                out[m.group(1)] = json.loads(m.group(2))
            except ValueError:
                pass
    return out


def text_ref(flight, key):
    # Long strings are emitted as `<key>:T<hexlen>,<text>` with no terminator;
    # hexlen counts UTF-8 bytes, not characters.
    m = re.search(r"(?:^|\n)" + re.escape(key) + r":T([0-9a-f]+),", flight)
    if not m:
        return None
    rest = flight[m.end():].encode("utf-8")
    return rest[:int(m.group(1), 16)].decode("utf-8", errors="replace")


def resolve(r, v):
    return r.get(v[1:]) if isinstance(v, str) and v.startswith("$") else v


def main():
    url = [a for a in sys.argv[1:] if not a.startswith("--")][0]
    tone_id = int(re.search(r"-(\d+)/?$", url).group(1))
    page = fetch(url)
    flight = flight_data(page)
    r = refs(flight)

    pack = next(v for v in r.values() if isinstance(v, dict) and v.get("id") == tone_id and "gear" in v)
    desc = pack.get("description")
    if isinstance(desc, str) and desc.startswith("$"):
        desc = text_ref(flight, desc[1:]) or resolve(r, desc)

    def names(key):
        items = resolve(r, pack.get(key)) or []
        return [(resolve(r, i) or {}).get("name") for i in items]

    user = resolve(r, pack.get("user")) or {}
    # Matched straight off the flight text: the first model record often shares a line
    # with the previous one, so refs() (line-anchored) misses it.
    urls = {}
    for name, murl in re.findall(r'"name":("(?:[^"\\]|\\.)*"),"model_url":"([^"]+)"', flight):
        urls.setdefault(json.loads(name).strip(), murl)
    models = []
    for card in re.split(r'<h4 class="font-semibold line-clamp-2">', page)[1:]:
        name = html.unescape(card.split("</h4>")[0]).strip()
        esrs = re.findall(r'<span class="text-white">([^<]+)</span><span>ESR: ([0-9.]+)</span>', card[:6000])
        model = {"name": name, "esr": {k: float(v) for k, v in esrs}, "url": urls.get(name)}
        if "--meta" in sys.argv and model["url"] and model["url"].endswith(".nam"):
            # NAM's own estimates: gain 0-1 (how driven the capture is), loudness in dB.
            meta = json.loads(fetch(model["url"])).get("metadata") or {}
            model["gain"] = meta.get("gain")
            model["loudness"] = meta.get("loudness")
        elif "--meta" in sys.argv and model["url"] and model["url"].lower().endswith(".wav"):
            model["wav"] = wav_info(fetch_bytes(model["url"]))
        models.append(model)

    result = {
        "url": url,
        "title": pack.get("title"),
        "creator": user.get("username"),
        "platform": pack.get("platform"),
        "gear": pack.get("gear"),
        "makes": names("makes"),
        "tags": names("tags"),
        "license": pack.get("license"),
        "downloads": pack.get("downloads_count"),
        "favorites": pack.get("favorites_count"),
        "published_at": pack.get("published_at"),
        "models_count_total": pack.get("models_count"),
        "a1_models_count": pack.get("a1_models_count"),
        "a2_models_count": pack.get("a2_models_count"),
        "custom_models_count": pack.get("custom_models_count"),
        "irs_count": pack.get("irs_count"),
        "description": desc,
        "models_listed": models,
    }
    out = json.dumps(result, indent=2, ensure_ascii=False)
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    if len(args) > 1:
        with open(args[1], "w", encoding="utf-8") as f:
            f.write(out)
        print(f"{len(models)} models -> {args[1]}")
    else:
        print(out)


if __name__ == "__main__":
    main()
