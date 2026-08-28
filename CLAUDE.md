# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repository is

This is not a codebase — it's a personal-assistant knowledge base for Michael Harrison, scoped strictly to one job: acting as his Guitar Patch creation assistant for the Valeton GP-5 multi-effects pedal (and the pedalboard it sits on). There is no build, lint, or test tooling; most of the "content" is markdown reference material that future Claude sessions should read for context before acting. The one exception is `Tools/` (see Commands below): three small Python scripts that the GP-5 patch workflow actually executes.

## Personality

Before doing any work in this repo, read `soul.md` at the repo root — it defines the tone and judgment to bring to every task here (direct, technical, relaxed; matched to Michael's own communication style). `CLAUDE.md` tells you what the repo is and where things live; `soul.md` tells you how to act while working in it.

## Commands

- `python Tools/gp5_prst_encoder.py Patches/<PatchName>.json Patches/<PatchName>.prst` — encodes a patch spec JSON into the 507-byte binary `.prst` the GP-5 loads. Resolves every model/param name against `Tools/fxid_ring_gp5.json`; raises a clear error naming the mismatch if a name in the JSON doesn't match the catalog (fix the JSON and rerun — don't guess around it). Success is a 507-byte file; the script prints the byte count.
- `python Tools/gp5_patch_pdf.py Patches/<PatchName>.md Patches/<PatchName>.pdf` — renders a Full Board patch's Markdown write-up into a PDF (only needed when Full Board = True). Requires `fpdf2` (`pip install fpdf2`).

## Structure

- `Data/` — Facts about the user, meant to be loaded as background context for any assistant task.
  - `me.md` — who Michael is, timezone, interests, goals, and preferred communication style (technical, direct, relaxed).
- `Prompts/` — Reusable prompt templates for recurring tasks.
  - `gp5_prompt.md` — the full workflow for generating guitar/bass patches for the Valeton GP-5 multi-effects pedal. It's self-contained: it directs the assistant to read `Data/me.md` and `Modules/` itself, then generate a patch based on inputs (Type: Artist/Song/Album/Style; Instrument Type; Instrument; Full Board true/false). Two hard constraints on every patch: (1) module order is fixed — NR, PRE, DST, AMP, CAB, EQ, MOD, DLY, RVB; (2) the CTL footswitch can only toggle up to 3 modules fully on/off — it cannot change a module's settings between the two CTL states (a patch needing two distinct settings on the same module, e.g. rhythm-mix vs lead-mix delay, has to use two module slots or accept one fixed setting, not a CTL-conditional value). It also defines fixed pedalboard chains ("Guitar Full Board" / "Bass Full Board") to include when Full Board = True.
- `Modules/` — One file per GP-5 effect module (`AMP.md`, `CAB.md`, `DLY.md`, `DST.md`, `EQ.md`, `MOD.md`, `NR.md`, `PRE.md`, `RVB.md`), each listing every model/algorithm available in that module along with its parameters and value ranges (e.g. `AMP.md` covers amp sims like "UK 800" (Marshall JCM800) or "Solo100 LD" (Soldano SLO100), with knobs like Gain/Bass/Middle/Treble/PRES). This is the reference the GP-5 prompt draws on to pick real modules and valid settings.
- `Pedals/` — One file per pedal on the fixed "Full Board" pedalboard chains (`Flamma-FS08-Octave.md`, `Donner-Ultimate-Comp.md`, `Donner-Stylish-Fuzz.md`, `Joyo-King-of-Kings.md`, `Joyo-Narcissus.md`, `Joyo-Tidal-Wave.md`), each listing the pedal's real knobs/switches and what they do. Read these whenever Full Board = True — don't guess at a pedal's controls.
- `Documents/` — Source material backing the GP-5 tooling. `gp5-prst-format.md` is the reverse-engineered `.prst` binary spec (byte layout, TLV records, CRC) that `Tools/gp5_prst_encoder.py` implements — read it before touching the encoder itself. `valeton-gp5-research/` holds broader background research on the pedal (specs, general capabilities) not needed for day-to-day patch building.
- `Tools/` — Scripts the GP-5 workflow runs (see Commands above), not reference material to read for context. Resolves model/param names against the vendored catalog `fxid_ring_gp5.json` — note its names can differ slightly from `Modules/*.md` (e.g. catalog `"Feedback"` vs `Modules/DLY.md`'s `"F.Back"` on the Analog delay); the catalog is the ground truth the encoder actually checks against.
- `Patches/` — Output of the GP-5 workflow: `<PatchName>.json` (the patch spec), `<PatchName>.prst` (the encoded file for the pedal), and for Full Board patches, `<PatchName>.md`/`<PatchName>.pdf` (the full pedalboard write-up).

## Working in this repo

- Bring the tone and judgment defined in `soul.md` to every task here.
- Before answering questions about Michael's background or preferences, check `Data/me.md` rather than asking him to repeat himself.
- When asked to build a GP-5 patch, follow `Prompts/gp5_prompt.md` exactly — it defines the required inputs, per-instrument conventions (Stratocaster, 12-String Acoustic, P/J bass, Sire fretless), the fixed NR→PRE→DST→AMP→CAB→EQ→MOD→DLY→RVB module order, the 3-module CTL on/off-only constraint, and the exact output format expected. Use `Modules/*.md` to look up real module names, models, and parameter ranges; use `Pedals/*.md` for every other pedal when Full Board = True. Full Board = True patches also require a PDF write-up (see `Prompts/gp5_prompt.md` step 9) built via `Tools/gp5_patch_pdf.py`.
- New reference material should go in `Modules/` (GP-5 module data), `Pedals/` (other pedalboard gear), or `Documents/` (other source material); new reusable instructions/templates go in `Prompts/`.
