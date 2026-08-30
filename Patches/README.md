# Patch index

One row per patch in this directory. Built by hand from each `<Name>.json` / `<Name>.md` — update it whenever a patch is added, renamed, or removed (see `Prompts/gp5_prompt.md` step 9).

| File | Song / Reference | Instrument | Full Board | AMP/CAB substitute | Notes |
|---|---|---|---|---|---|
| `Creep-RH` | Creep — Radiohead | Guitar (Strat) | Yes | — | Clean/dirty split, CTL on PRE boost + DST |
| `December-CS` | December — Collective Soul | Guitar (Strat) | — | — | *No `.md`/`.pdf` write-up yet — backfill needed* |
| `Egan-Fretless` | Mark Egan style | Bass (Sire fretless) | Yes | — | Chorus + always-on delay for fretless glide |
| `EverydayBlues-JM` | Everyday I Have the Blues — John Mayer | Guitar (Strat) | Yes | — | Full pedalboard chain |
| `KissMeSNTR` | Kiss Me — Sixpence None the Richer | Guitar (Strat) | — | — | *No `.md`/`.pdf` write-up yet — backfill needed* |
| `Lion-EW` | Lion — Elevation Worship | Guitar (Strat) | Yes | IR: American Twin 2x12 Medium Mix | CAB null, real AMP (Dark Twin) |
| `SisterChristian-NR` | Sister Christian — Night Ranger | Guitar (Strat) | Yes | — | CTL on DST + EQ + DLY (3-module max) |
| `Wonderland-JM` | Wonderland — John Mayer | Guitar (Strat) | No | NAM: Two-Rock JM Sig #83 + Dumble SSS cab | AMP + CAB both null |
| `Yes-Squire` | Yes-style (Chris Squire) | Bass (P/J) | — | — | CTL on PRE boost + DST (inverted: on by default, CTL kills them) |

## Backfill needed

`December-CS`, `KissMeSNTR`, and `Yes-Squire` have `.json`/`.prst` but no `.md`/`.pdf` write-up, which CLAUDE.md requires for every patch. Run each back through the `build_patch` workflow (or at minimum `Tools/gp5_patch_pdf.py`) to produce the missing write-up before treating them as done.
