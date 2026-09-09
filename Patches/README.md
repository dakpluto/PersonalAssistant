# Patch index

One row per patch in this directory. Built by hand from each `<Name>.json` / `<Name>.md` — update it whenever a patch is added, renamed, or removed (see `Prompts/gp5_prompt.md` step 9).

Patches are split first by Instrument Type (`Patches/Guitar/`, `Patches/Bass/`), then by Type (`Song/`, `Artist/`, `Album/`, `Style/`) — the same two fields `gp5_prompt.md` asks for up front when building a patch. A patch's four files (`.json`, `.prst`, `.md`, `.pdf`) live together in that `<Guitar|Bass>/<Type>/` folder. A Type subfolder only exists once a patch needs it.

## Guitar/

### Song/

| File | Song / Reference | Instrument | Full Board | AMP/CAB substitute | Notes |
|---|---|---|---|---|---|
| `Cassie-Flyleaf` | Cassie — Flyleaf (original studio version) | Strat | Yes | IR: American Twin 2x12 Medium Mix | CTL on DST + DLY (inverted): clean ambient verse vs. heavy chorus wall |
| `ClickClickBoom-Sal` | Click Click Boom — Saliva (100 BPM) | Strat | Yes | IR: British Checkerboard 4x12 Medium Mix | CTL on DST + DLY + RVB: tight verse riff vs. boosted/wet solo lead |
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

### Song/

Set of 5 for one worship set — full board (Flamma octave, Donner comp, Donner fuzz, Joyo Tidal Wave, Joyo Narcissus) is identical/fixed across all 5; only the GP-5 patch changes song to song. See any patch's "Full Pedalboard" section for the shared board config.

| File | Song / Reference | Instrument | Full Board | AMP/CAB substitute | Notes |
|---|---|---|---|---|---|
| `UnstopGod-EW` | Unstoppable God — Elevation Worship (132 BPM, B) | P/J | Yes | — | CTL on PRE Boost + DST: verse vs. driven chorus/bridge |
| `GivingAll-MG` | Giving It All to You — Michael Gungor (100 BPM, C) | P/J | Yes | — | No CTL — warm, one-sound indie-folk tone throughout |
| `YourLove-UP` | Your Love Changes Everything — United Pursuit (71 BPM, A) | P/J | Yes | — | CTL on PRE Micro Boost + RVB Hall: intimate verse vs. chorus swell |
| `BreadBroken-JD` | The Bread Has Been Broken — Jeff Deyo (~72 BPM, E) | P/J | Yes | — | No CTL — dark, minimal communion tone throughout |
| `Thrive-CC` | Thrive — Casting Crowns (115 BPM, F#) | P/J | Yes | — | CTL on DST: punchy verse vs. driven chorus |
| `DYFAM-SM` | Don't You Forget About Me — Simple Minds (114 BPM) | P/J | Yes | — | Clean 80s pulse; CTL on PRE Boost (+FS-08 octave): verse/chorus vs. outro hook |
| `LoveShack-B52` | Love Shack — The B-52's (134 BPM) | P/J | Yes | — | Bouncy dance-punk groove; CTL on PRE Boost + Bass OD: verse vs. chorus hook |
| `YourWaysBetter-FF` | Your Ways Better — Forrest Frank (~92 BPM, est.) | P/J | Yes | — | Chill lo-fi worship-pop; CTL on DST (Bass OD) + RVB: subtle verse-to-chorus lift, deliberately understated |
| `IWantToKnow-Foreigner` | I Want to Know What Love Is — Foreigner (~67 BPM, est.) | P/J | Yes | NAM: Darkglass B7K Ultra (clean), Slot 64 | CTL on PRE Micro Boost + RVB Hall: intimate verse vs. big choir/chorus swell |

### Artist/

| File | Song / Reference | Instrument | Full Board | AMP/CAB substitute | Notes |
|---|---|---|---|---|---|
| `Egan-Fretless` | Mark Egan signature style | Sire fretless | Yes | — | Chorus + always-on delay for fretless glide |
| `Yes-Squire` | Chris Squire signature style (Yes) | P/J | Yes | — | CTL on PRE boost + DST (inverted: on by default, CTL kills them) |
| `SNTR-Bass` | Sixpence None the Richer signature style | P/J | Yes | — | CTL on MOD (B-Chorus) + RVB: dry pop-bounce vs. chorus/reverb dream-pop |

### Style/

| File | Song / Reference | Instrument | Full Board | AMP/CAB substitute | Notes |
|---|---|---|---|---|---|
| `RammGrind` | Industrial metal (Rammstein — Ollie Riedel) | P/J | Yes | NAM: Darkglass Alpha Omega (Distortion), Slot 62 | Fuzz + Tidal Wave feed the NAM's own distortion; CTL on PRE Micro Boost: base grind vs. pushed chorus/breakdown |
