# Higher — Creed

Bass: Harley Benton P/J, 5-string, passive. Full board.
From *Human Clay* (1999), ~85 BPM.
Brian Marshall's part here follows the classic late-90s post-grunge shape — moody, restrained verses building into a huge, driven "can you take me higher" chorus. Structurally this is close cousins with "Everlong" (same quiet-verse/huge-chorus alt-rock DNA), so this patch leans on the same AMP/DST/CAB recipe that build uses, rather than reinventing the wheel for a genuinely similar job.

CTL off = the restrained verse. CTL on = the big chorus.

## GP-5 settings

Module order: NR → PRE → DST → AMP → CAB → EQ → MOD → DLY → RVB.

**NR — Gate**
- THRE: 24
- Always on. Moderate-high threshold — the NAM below carries real grind, needs cleanup between notes.

**PRE — Micro Boost — On CTL**
- Gain: 58
- CTL off: bypassed (verse). CTL on: engaged (chorus).
- Verse stays restrained on its own. Chorus gets a clean push to match the song's own explosion in energy.

**DST — Bass OD**, always on. Gain 63, Blend 75, VOL 62, Bass 55, Treble 58.
**AMP — Classic Bass**, always on. Gain 45, Bass 55, Middle 60, MidFreq 800Hz, Treble 60, VOL 65.
**CAB — User IR 3 (Apg810)**, always on. VOL 62.
- Bass OD plus Classic Bass together reproduce the grit this part needs.

**EQ — Bass EQ 1**
- 33Hz: +3, 150Hz: 0, 600Hz: -2, 2kHz: +5, 8kHz: +3, VOL: 56
- Always on, same for both CTL states.
- +5 at 2kHz and +3 at 8kHz keep this bright and present — post-grunge choruses like this one are guitar-heavy and loud, this part needs real cut to stay heard. -2 at 600Hz keeps it from getting boxy under all that upper-mid push.

**MOD — Off**
- No modulation. Straight-ahead post-grunge rock tone.

**DLY — Off**
- Not used.

**RVB — Room — On CTL**
- Mix: 22, Decay: 36, Trail: On
- CTL off: bypassed (verse). CTL on: engaged (chorus).
- Verse stays tight and close. Chorus opens up with a touch of room to match the bigger, more anthemic space that section lives in.

## AMP + DST: Classic Bass + Bass OD, CAB: Apg810 IR (User IR 3)

Rebuilt 2026-09-18 off the GP-5's own AMP/DST + a loaded IR — NAMs are off for now (Valeton N->S volume issue, device-side). The old NAM was a Darkglass B7K Ultra (Gain 60) — modern, punchy drive/preamp character, exactly the territory late-90s post-grunge choruses live in, same reasoning that made it the right call for "Everlong." Classic Bass + an always-on Bass OD reproduce that grind; Apg810 is the direct SVT-family cab pairing. Middle and Treble kept up on both stages to keep the part cutting through the guitars.

## CTL summary

- **CTL Off — Verse.** Restrained, moody, dry. Sitting back with the vocal.
- **CTL On — Chorus.** Boost and room reverb engage together. Bigger, more open, matching the song's own explosion in energy.
- Engage CTL right as the "can you take me higher" chorus hits, disengage back into the next verse.

## Full pedalboard (signal chain order)

**1. Flamma FS-08 Octave — Bypassed**
- Footswitch off. No octave layering — this part tracks the song's dynamics directly, an octave stack would clutter that.

**2. Donner Ultimate Comp — Engaged**
- COMP: 52
- TONE: 60
- LEVEL: 58
- Mode: TREBLE
- Keeps the verse-to-chorus dynamics consistent within each section. TREBLE mode keeps pick/finger attack bright and audible before it hits the NAM's own drive stage.

**3. Donner Stylish Fuzz — Bypassed**
- Footswitch off. The NAM's own drive already covers the grit this song needs — a fuzz stacked on top would just mud things out.

**4. Joyo Tidal Wave — Bypassed**
- Footswitch off, Drive/Blend not engaged. Same reasoning — one drive source (the NAM) is enough.

**5. Joyo Narcissus — Bypassed**
- Footswitch off. No chorus — matches the MOD-off call on the GP-5. Straight-ahead rock tone throughout.

**6. Valeton GP-5** — see settings above.
