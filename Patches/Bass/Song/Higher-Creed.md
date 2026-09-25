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
**AMP/CAB — NAM SnapTone, slot 57: GrittySVT** (always on)
- Built from the `SVT PUSHED (SVT-CL)` NAM and the Apg810 IR, combined into one snaptone.
- Real Ampeg SVT-CL pushed into grit, into the Apg810 8x10 IR.
- Post-grunge: moody verses, huge driven choruses. The pushed SVT is the base. DST adds the chorus weight.
- Gain: 50, VOL: 50, Bass: 55, Middle: 60, Treble: 60
- Gain 50: the capture as built.
- Bass 55: a touch more low end.
- Middle 60: more midrange.
- Treble 60: more top end.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 57 directly.

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
