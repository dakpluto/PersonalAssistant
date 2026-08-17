# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repository is

This is not a codebase — it's a personal-assistant knowledge base for Michael Harrison. There is no build, lint, or test tooling; the "content" is markdown reference material that future Claude sessions should read for context before acting, not code to compile or execute.

## Structure

- `Data/` — Facts about the user and their work, meant to be loaded as background context for any assistant task.
  - `me.md` — who Michael is, his role, timezone, interests, goals, and preferred communication style (technical, direct, relaxed).
  - `business.md` — details of his day job (Lockheed Martin, C2BMC program, Systems Administrator) and the specific tools/applications he works with.
- `Context/` — Writing-style samples, one file per medium (`mail.md`, `reddit.md`, `tweet.md`, `article.md`). These capture Michael's actual voice/tone in each format so that any writing done on his behalf can match his style. Treat these as tone references, not facts to cite.
- `Prompts/` — Reusable prompt templates for recurring tasks.
  - `gp5_prompt.md` — a full workflow for generating guitar/bass patches for the Valeton GP-5 multi-effects pedal. It's self-contained: it directs the assistant to read `Data/`, `Context/`, and `Modules/` itself, then generate a patch based on inputs (Type: Artist/Song/Album/Style; Instrument Type; Instrument; Full Board true/false). Two hard constraints on every patch: (1) module order is fixed — NR, PRE, DST, AMP, CAB, EQ, MOD, DLY, RVB; (2) the CTL footswitch can only toggle up to 3 modules fully on/off — it cannot change a module's settings between the two CTL states (a patch needing two distinct settings on the same module, e.g. rhythm-mix vs lead-mix delay, has to use two module slots or accept one fixed setting, not a CTL-conditional value). It also defines fixed pedalboard chains ("Guitar Full Board" / "Bass Full Board") to include when Full Board = True.
- `Modules/` — One file per GP-5 effect module (`AMP.md`, `CAB.md`, `DLY.md`, `DST.md`, `EQ.md`, `MOD.md`, `NR.md`, `PRE.md`, `RVB.md`), each listing every model/algorithm available in that module along with its parameters and value ranges (e.g. `AMP.md` covers amp sims like "UK 800" (Marshall JCM800) or "Solo100 LD" (Soldano SLO100), with knobs like Gain/Bass/Middle/Treble/PRES). This is the reference the GP-5 prompt draws on to pick real modules and valid settings.

`Context/article.md` currently exists but is an empty placeholder — Michael intends to fill it in later.

## Working in this repo

- Before drafting anything in Michael's voice, check the relevant `Context/` file for the target medium to match tone.
- Before answering questions about Michael's work or background, check `Data/` rather than asking him to repeat himself.
- When asked to build a GP-5 patch, follow `Prompts/gp5_prompt.md` exactly — it defines the required inputs, per-instrument conventions (Stratocaster, 12-String Acoustic, P/J bass, Sire fretless), the fixed NR→PRE→DST→AMP→CAB→EQ→MOD→DLY→RVB module order, the 3-module CTL on/off-only constraint, and the exact output format expected. Use `Modules/*.md` to look up real module names, models, and parameter ranges.
- New reference material should go in `Modules/` (GP-5 module data) or `Documents/` (other source material); new reusable instructions/templates go in `Prompts/`.
