"""Run the actual repository tools, then inspect every output and render QA sheets."""
from pathlib import Path
import hashlib
import json
import struct
import subprocess
import sys
import zipfile

ROOT = Path(__file__).resolve().parents[2]
HERE = Path(__file__).resolve().parent
sys.path.insert(0, str(ROOT / "Tools"))
from gp5_prst_encoder import build_patch_spec, build_prst, load_catalog, crc8, ValidationError
from gp5_prst_decoder import decode_prst
from gp5_patch_pdf import render_patch_pdf
import pymupdf
from PIL import Image, ImageDraw

original = json.loads((HERE / "inventory.json").read_text(encoding="utf-8"))
manifest = json.loads((HERE / "implementation-manifest.json").read_text(encoding="utf-8"))
details = json.loads((HERE / "implementation-details.json").read_text(encoding="utf-8"))
runtime = ROOT / ".runtime"
runtime.mkdir(exist_ok=True)

def backup():
    target = runtime / "before-approved-audit.zip"
    if target.exists():
        print("Existing pre-revision archive preserved.")
        return
    for r in original:
        actual = json.loads((ROOT / r["file"]).read_text(encoding="utf-8"))
        if actual != r["j"]:
            raise RuntimeError("Source changed since audit: " + r["file"])
    with zipfile.ZipFile(target, "w", zipfile.ZIP_DEFLATED) as z:
        for r in original:
            for ext in (".json", ".md", ".prst", ".pdf"):
                p = (ROOT / r["file"]).with_suffix(ext)
                z.write(p, p.relative_to(ROOT).as_posix())
        z.write(ROOT / "Patches/README.md", "Patches/README.md")
    print("Archived 780 original patch files and index.")

def regression_checks():
    cat = load_catalog()
    # The old omitted EQ volume must now resolve to the catalog's 50.
    metro = build_patch_spec(original[78]["j"], cat)
    assert metro.blocks["EQ"].params[5] == 50
    try:
        build_patch_spec(original[154]["j"], cat)
    except ValidationError as e:
        assert "Time" in str(e) and "300" in str(e)
    else:
        raise AssertionError("Out-of-range Slapback accepted")
    # Defaults/range handling must not alter already complete valid specs.
    stable = 0
    for r in original:
        if r["file"] in (original[78]["file"], original[154]["file"]):
            continue
        expected = build_prst(build_patch_spec(r["j"], cat))
        archive = runtime / "before-approved-audit.zip"
        with zipfile.ZipFile(archive) as z:
            previous = z.read(str(Path(r["file"]).with_suffix(".prst")).replace("\\", "/"))
        assert expected == previous, r["file"]
        stable += 1
    print(f"Encoder regression checks passed; {stable} existing valid presets remain byte-identical.")

def build():
    for i, r in enumerate(manifest, 1):
        p = ROOT / r["file"]
        for script, src, dst in (("gp5_prst_encoder.py", p, p.with_suffix(".prst")),
                                 ("gp5_patch_pdf.py", p.with_suffix(".md"), p.with_suffix(".pdf"))):
            out = subprocess.run([sys.executable, str(ROOT / "Tools" / script), str(src), str(dst)],
                                 capture_output=True, text=True, check=True)
            if "wrote " not in out.stdout:
                raise RuntimeError("Missing tool confirmation " + str(p))
        if i % 20 == 0 or i == len(manifest):
            print(f"Encoded and rendered {i}/{len(manifest)} patches.", flush=True)

def refresh_pdfs():
    total = 0
    for r in manifest:
        p = (ROOT / r["file"]).with_suffix(".md")
        target = render_patch_pdf(str(p), str(p.with_suffix(".pdf")))
        total += Path(target).stat().st_size
    print(f"Rendered all {len(manifest)} final PDFs with gp5_patch_pdf.py; wrote {total} bytes.", flush=True)

def verify():
    cat = load_catalog()
    results = []
    pages_total = 0
    screen_names = set()
    qa = runtime / "pdf-qa"
    qa.mkdir(exist_ok=True)
    thumbnails = []
    for r, d in zip(manifest, details):
        p = ROOT / r["file"]
        j = json.loads(p.read_text(encoding="utf-8"))
        assert j == r["j"]
        b = p.with_suffix(".prst").read_bytes()
        assert len(b) == 507 and crc8(b[21:]) == b[20]
        assert b == build_prst(build_patch_spec(j, cat))
        decoded = decode_prst(b)
        assert decoded["patch_vol"] == j.get("patch_vol", 50)
        display = j["patch_name"][:10]
        assert display not in screen_names, "Screen-name collision: " + display
        screen_names.add(display)
        assert j.get("patch_vol", 50) == original[r["number"]-1]["j"].get("patch_vol", 50)
        previous_nam = original[r["number"]-1]["j"].get("nam")
        if j.get("nam") and previous_nam and j["nam"]["slot"] == previous_nam["slot"]:
            assert j["nam"]["settings"]["VOL"] == previous_nam["settings"]["VOL"]
        md = p.with_suffix(".md").read_text(encoding="utf-8")
        for k, m in j["modules"].items():
            assert "## " + k + (" - " + m["model"] if m["model"] else " - Module off") in md
        with pymupdf.open(p.with_suffix(".pdf")) as pdf:
            assert len(pdf) > 0
            for page_no, page in enumerate(pdf):
                # Check every text block for horizontal/vertical clipping.
                for block in page.get_text("blocks"):
                    x0, y0, x1, y1 = block[:4]
                    assert x0 >= 20 and x1 <= page.rect.width-15, (p, page_no, block)
                    assert y0 >= 0 and y1 <= page.rect.height-10, (p, page_no, block)
                image = page.get_pixmap(matrix=pymupdf.Matrix(0.42, 0.42), alpha=False)
                im = Image.frombytes("RGB", [image.width, image.height], image.samples)
                thumbnails.append((r["number"], page_no+1, im))
            pages_total += len(pdf)
            text = "\n".join(page.get_text() for page in pdf)
            assert "Switching and section map" in text
            assert "Revision record" in text
            results.append({"number":r["number"],"file":r["file"],"prst_bytes":len(b),
                            "pdf_bytes":p.with_suffix(".pdf").stat().st_size,"pages":len(pdf),
                            "prst_sha256":hashlib.sha256(b).hexdigest(),
                            "pdf_sha256":hashlib.sha256(p.with_suffix(".pdf").read_bytes()).hexdigest(),
                            "md_sha256":hashlib.sha256(p.with_suffix(".md").read_bytes()).hexdigest()})
    # Contact sheets include every page, for visual inspection after text-box checks.
    for start in range(0, len(thumbnails), 24):
        group = thumbnails[start:start+24]
        sheet = Image.new("RGB", (6*285, 4*365), "#dddddd")
        draw = ImageDraw.Draw(sheet)
        for ix, (num, page, im) in enumerate(group):
            x, y = (ix%6)*285, (ix//6)*365
            draw.text((x+8,y+4), f"Patch {num} - page {page}",fill="black")
            sheet.paste(im,(x+8,y+22))
        sheet.save(qa / f"sheet-{start//24+1:02d}.jpg", quality=85)
    (HERE / "build-results.json").write_text(json.dumps({"patches":len(results),"total_pages":pages_total,
        "contact_sheets":(len(thumbnails)+23)//24,"results":results}, indent=2)+"\n",encoding="utf-8")
    print(f"Verified {len(results)} presets/PDFs; {pages_total} pages; all display names unique.")

if __name__ == "__main__":
    if "--backup" in sys.argv:
        backup()
    elif "--check-encoder" in sys.argv:
        regression_checks()
    elif "--verify" in sys.argv:
        verify()
    elif "--refresh-pdfs" in sys.argv:
        refresh_pdfs()
        verify()
    else:
        build()
        verify()
