"""Renders a patch write-up (simple Markdown) into a PDF.

Used for Full Board = True GP-5 patches: the .prst only encodes the GP-5's
own 9 modules, so the rest of the pedalboard (and the reasoning behind every
setting, including what rides the CTL footswitch and when) has to live
somewhere else. This turns the write-up into a PDF that sits next to the
.json/.prst in Patches/.

Supports a small Markdown subset, matching what Prompts/gp5_prompt.md's
write-ups already look like:
    # Title              -> title
    ## Heading            -> section heading
    - text / 1. text      -> list item (bullets or numbered, either marker kept)
    **bold**               -> inline bold (anywhere in a line)
    blank line             -> paragraph spacing
    anything else          -> body paragraph

Usage:
    python Tools/gp5_patch_pdf.py Patches/<Guitar|Bass>/<Type>/<PatchName>.md Patches/<Guitar|Bass>/<Type>/<PatchName>.pdf
"""

from __future__ import annotations

import re
import sys
from pathlib import Path

from fpdf import FPDF

LIST_RE = re.compile(r"^(\s*)([-*]|\d+\.)\s+(.*)$")
BOLD_RE = re.compile(r"\*\*(.+?)\*\*")

# Core PDF fonts (Helvetica) are latin-1 only. Sanitize the handful of
# non-latin-1 characters these write-ups actually use rather than pulling in
# a TTF font just for an arrow and some dashes.
CHAR_MAP = {
    "→": "->",  # →
    "–": "-",  # –
    "—": "--",  # —
    "‘": "'",  # '
    "’": "'",  # '
    "“": '"',  # "
    "”": '"',  # "
    "…": "...",  # …
}


def _sanitize(text: str) -> str:
    for src, dst in CHAR_MAP.items():
        text = text.replace(src, dst)
    return text.encode("latin-1", "replace").decode("latin-1")


def _write_runs(pdf: FPDF, text: str, line_height: float, bold_by_default: bool = False) -> None:
    """Write a line with **bold** runs inline, wrapping at the page margin."""
    parts = BOLD_RE.split(_sanitize(text))
    for i, part in enumerate(parts):
        if not part:
            continue
        is_bold = bold_by_default or (i % 2 == 1)
        pdf.set_font(style="B" if is_bold else "")
        pdf.write(line_height, part)
    pdf.ln(line_height)


def render_markdown_to_pdf(md_text: str, out_path: str) -> str:
    pdf = FPDF(format="Letter")
    pdf.set_auto_page_break(auto=True, margin=15)
    pdf.set_font("Helvetica", size=11)
    pdf.add_page()

    body_h = 6.0

    for raw_line in md_text.splitlines():
        line = raw_line.rstrip()

        if not line:
            pdf.ln(body_h * 0.5)
            continue

        if line.startswith("# "):
            pdf.set_font("Helvetica", "B", 18)
            pdf.multi_cell(0, 10, _sanitize(line[2:]))
            pdf.set_font("Helvetica", size=11)
            pdf.ln(2)
            continue

        if line.startswith("## "):
            pdf.ln(3)
            pdf.set_font("Helvetica", "B", 13)
            pdf.multi_cell(0, 8, _sanitize(line[3:]))
            pdf.set_font("Helvetica", size=11)
            pdf.ln(1)
            continue

        m = LIST_RE.match(line)
        if m:
            indent, marker, rest = m.groups()
            depth = len(indent) // 2
            left = pdf.l_margin + 6 + depth * 6
            pdf.set_left_margin(left)
            pdf.set_x(left)
            bullet = marker if marker[0].isdigit() else "-"
            pdf.set_font("Helvetica", size=11)
            pdf.write(body_h, f"{bullet} ")
            _write_runs(pdf, rest, body_h)
            pdf.set_left_margin(10)
            continue

        pdf.set_x(pdf.l_margin)
        pdf.set_font("Helvetica", size=11)
        _write_runs(pdf, line, body_h)

    pdf.output(out_path)
    return out_path


def render_patch_pdf(md_path: str, out_path: str | None = None) -> str:
    md_text = Path(md_path).read_text(encoding="utf-8")
    if not out_path:
        out_path = str(Path(md_path).with_suffix(".pdf"))
    return render_markdown_to_pdf(md_text, out_path)


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print(f"usage: {sys.argv[0]} <patch.md> [output.pdf]", file=sys.stderr)
        sys.exit(1)

    md_arg = sys.argv[1]
    out_arg = sys.argv[2] if len(sys.argv) > 2 else None
    written = render_patch_pdf(md_arg, out_arg)
    print(f"wrote {Path(written).stat().st_size} bytes to {written}")
