# Patch index

One row per patch in this directory. Built by hand from each `<Name>.json` / `<Name>.md` — update it whenever a patch is added, renamed, or removed (see `Prompts/gp5_prompt.md` step 9).

Patches are split first by Instrument Type (`Patches/Guitar/`, `Patches/Bass/`), then by Type (`Song/`, `Artist/`, `Album/`, `Style/`) — the same two fields `gp5_prompt.md` asks for up front when building a patch. A patch's four files (`.json`, `.prst`, `.md`, `.pdf`) live together in that `<Guitar|Bass>/<Type>/` folder. A Type subfolder only exists once a patch needs it.

## Guitar/

### Song/

| File | Song / Reference | Instrument | Full Board | AMP/CAB substitute | Notes |
|---|---|---|---|---|---|
| `Creep-RH` | Creep — Radiohead | Strat | Yes | — | Clean/dirty split, CTL on PRE boost + DST |
| `December-CS` | December — Collective Soul | Strat | No | — | CTL on DST + MOD (inverted) + DLY: clean vibe intro vs. driven riff |
| `EverydayBlues-JM` | Everyday I Have the Blues — John Mayer (*Where the Light Is*) | Strat | Yes | — | Full pedalboard chain |
| `KissMeSNTR` | Kiss Me — Sixpence None the Richer | Strat | No | — | CTL on DST + DLY + RVB: dry verse strum vs. lifted hook/bridge |
| `SisterChristian-NR` | Sister Christian — Night Ranger | Strat | Yes | — | CTL on DST + EQ + DLY (3-module max) |
| `Wonderland-JM` | Your Body is a Wonderland — John Mayer (*Room for Squares*) | Strat | No | NAM: Two-Rock JM Sig #83 + Dumble SSS cab | AMP + CAB both null |

### Album/

| File | Song / Reference | Instrument | Full Board | AMP/CAB substitute | Notes |
|---|---|---|---|---|---|
| `Lion-EW` | *Lion* — Elevation Worship (CCM / modern worship, whole-album build) | Strat | Yes | IR: American Twin 2x12 Medium Mix | CAB null, real AMP (Dark Twin) |

## Bass/

### Artist/

| File | Song / Reference | Instrument | Full Board | AMP/CAB substitute | Notes |
|---|---|---|---|---|---|
| `Egan-Fretless` | Mark Egan signature style | Sire fretless | Yes | — | Chorus + always-on delay for fretless glide |
| `Yes-Squire` | Chris Squire signature style (Yes) | P/J | Yes | — | CTL on PRE boost + DST (inverted: on by default, CTL kills them) |
