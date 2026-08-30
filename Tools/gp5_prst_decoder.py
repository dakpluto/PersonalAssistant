"""GP-5 .prst decoder.

Reads a 507-byte GP-5 preset file back into the patch-design JSON shape
Tools/gp5_prst_encoder.py consumes (see that script's docstring for the
schema). Round-trip tool: confirms an encode was faithful, or captures a
patch built by hand in Valeton Suite into this repo's Patches/ library.

Format reference: Documents/gp5-prst-format.md.

Usage:
    python Tools/gp5_prst_decoder.py <patch.prst> [output.json]

Known lossy spots (inherent to the file format, not decoder bugs):
- `ctl_on_state` isn't stored anywhere in the file (only one resting bypass
  bit per module) — the decoder guesses the opposite of `ctl_off_state`,
  which matches every patch this repo's own encoder has produced so far.
  Check it by ear if the patch came from Valeton Suite instead.
- A param that was left unset in the original JSON and a param explicitly
  set to 0 both read back as 0.0 — the decoder can't tell them apart, so it
  reports every param the model defines, not just the ones someone chose.
- If FS1 != FS2 in the trailer, that's a real, useful signal (see the
  "biggest real mismatch" note in the format doc) — the decoder prints a
  warning rather than silently picking one.
"""

from __future__ import annotations

import json
import struct
import sys
from pathlib import Path

from gp5_prst_encoder import (
    MODULE_BLOCK_NAMES,
    NAME_LEN,
    load_catalog,
    crc8,
)

HEADER_LEN = 0x15  # header (20 bytes) + CRC byte, not covered by the CRC itself


def _find_subrecord(payload: bytes, magic: bytes, length: int) -> bytes:
    i = payload.find(magic)
    if i < 0:
        raise ValueError(f"tone block sub-record {magic.hex()} not found")
    start = i + len(magic)
    return payload[start : start + length]


def _parse_tlvs(body: bytes) -> dict:
    tlvs = {}
    offset = 0
    while offset < len(body):
        tag, length = struct.unpack_from("<HH", body, offset)
        offset += 4
        tlvs[tag] = body[offset : offset + length]
        offset += length
    return tlvs


def decode_prst(data: bytes) -> dict:
    if len(data) != 507:
        raise ValueError(f"expected a 507-byte GP-5 .prst file, got {len(data)} bytes")

    computed_crc = crc8(data[0x15:])
    stored_crc = data[0x14]
    if computed_crc != stored_crc:
        print(
            f"warning: CRC mismatch (stored {stored_crc:#04x}, computed {computed_crc:#04x}) "
            "— file may be corrupt or from an unsupported variant",
            file=sys.stderr,
        )

    name = data[0x19 : 0x19 + NAME_LEN].split(b"\x00", 1)[0].decode("latin1", "replace")

    tlvs = _parse_tlvs(data[0x29:])
    settings = tlvs[0x0001]
    _, _, _, patch_vol = struct.unpack_from("<BBHi", settings, 0)
    _, _, _, bpm = struct.unpack_from("<BBHi", settings, 8)

    tone = tlvs[0x0002]
    bypass_mask = struct.unpack("<I", _find_subrecord(tone, bytes.fromhex("01300400"), 4))[0]
    model_records = _find_subrecord(tone, bytes.fromhex("03302800"), 40)
    param_floats = struct.unpack(
        "<80f", _find_subrecord(tone, bytes.fromhex("04304001"), 320)
    )

    trailer = tlvs[0x0003]
    fs1, fs2 = struct.unpack("<II", trailer)
    if fs1 != fs2:
        print(
            f"warning: FS1 ({fs1:#x}) != FS2 ({fs2:#x}) — this patch actually exercises "
            "the open FS1/FS2 question in Documents/gp5-prst-format.md §2.5; worth noting "
            "which physical footswitch/behavior produced it",
            file=sys.stderr,
        )

    catalog = load_catalog()
    modules_out = {}
    for idx, block in enumerate(MODULE_BLOCK_NAMES):
        rec = model_records[idx * 4 : idx * 4 + 4]
        fxlow = rec[0] | (rec[1] << 8) | (rec[2] << 16)
        category = rec[3]
        fxid = (category << 24) | fxlow

        bit_set = bool(bypass_mask & (1 << idx))
        is_ctl = bool(fs1 & (1 << idx))

        if not is_ctl and not bit_set:
            modules_out[block] = {"model": None}
            continue

        entry = catalog["by_id"].get(str(fxid))
        if entry is None:
            print(
                f"warning: {block} slot has unknown fxid {fxid} (not in catalog) — "
                "leaving settings empty",
                file=sys.stderr,
            )
            modules_out[block] = {"model": f"<unknown fxid {fxid}>"}
            continue

        mod = {"model": entry["name"].strip()}
        if is_ctl:
            ctl_off_state = "on" if bit_set else "off"
            ctl_on_state = "off" if ctl_off_state == "on" else "on"
            mod["ctl"] = True
            mod["ctl_off_state"] = ctl_off_state
            mod["ctl_on_state"] = ctl_on_state
        else:
            mod["always_on"] = True

        param_settings = {}
        base = idx * 8
        for p in entry["params"]:
            value = param_floats[base + p["algId"]]
            if p["toggle"]:
                param_settings[p["name"].strip()] = value >= 0.5
            else:
                param_settings[p["name"].strip()] = (
                    int(value) if float(value).is_integer() else round(value, 3)
                )
        mod["settings"] = param_settings
        modules_out[block] = mod

    return {
        "patch_name": name,
        "patch_vol": patch_vol,
        "bpm": bpm,
        "modules": modules_out,
    }


def decode_patch_file(prst_path: str, output_path: str | None = None) -> str:
    with open(prst_path, "rb") as f:
        data = f.read()

    patch_json = decode_prst(data)

    if not output_path:
        output_path = str(Path(prst_path).with_suffix(".decoded.json"))

    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(patch_json, f, indent=2)
        f.write("\n")
    return output_path


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print(f"usage: {sys.argv[0]} <patch.prst> [output.json]", file=sys.stderr)
        sys.exit(1)

    prst_path = sys.argv[1]
    out_path = sys.argv[2] if len(sys.argv) > 2 else None
    written = decode_patch_file(prst_path, out_path)
    print(f"wrote {written}")
