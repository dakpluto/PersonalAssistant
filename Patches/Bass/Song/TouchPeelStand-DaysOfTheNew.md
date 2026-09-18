# Touch, Peel, and Stand — Days of the New

Bass: Harley Benton P/J, 5-string, passive. Full board.
From *Days of the New* (1997), ~83 BPM.
Days of the New's whole identity is a strange, effective hybrid — Travis Meeks's 12-string acoustic up front, but underneath it a heavy, doomy, drop-tuned alt-metal low end and dark, grungy vocal harmonies. This song is moody and brooding in the verses, then drops into a heavier, driven chorus/hook. Unlike some of the brighter quiet/loud builds in this set, the whole song stays dark and atmospheric — the chorus gets heavier and more pushed, not bigger and washier.

CTL off = the moody, restrained verse. CTL on = the heavier, driven chorus.

## GP-5 settings

Module order: NR → PRE → DST → AMP → CAB → EQ → MOD → DLY → RVB.

**NR — Gate**
- THRE: 26
- Always on. Higher threshold — the NAM below carries real grind and low-end weight, needs solid cleanup between notes.

**PRE — Micro Boost — On CTL**
- Gain: 55
- CTL off: bypassed (verse). CTL on: engaged (chorus).
- Verse stays restrained and moody. Chorus gets a push to match the heavier, more driven hook.

**DST — Bass OD**, always on. Gain 62, Blend 75, VOL 60, Bass 58, Treble 42.
**AMP — Classic Bass**, always on. Gain 40, Bass 60, Middle 55, MidFreq 800Hz, Treble 45, VOL 62.
**CAB — User IR 8 (Sunn215)**, always on. VOL 60.
- This song's darker, heavier drive character comes from the Bass OD + Classic Bass pairing, kept dark (low Treble on both stages) rather than bright.

**EQ — Bass EQ 1**
- 33Hz: +4, 150Hz: +1, 600Hz: -1, 2kHz: +3, 8kHz: +1, VOL: 55
- Always on, same for both CTL states.
- +4 at 33Hz leans into the doomy, drop-tuned low-end weight this band is known for. 8kHz kept low on purpose — this tone stays dark and heavy, not bright, so there's no reason to chase top-end sparkle here.

**MOD — Off**
- No modulation. Dark and direct.

**DLY — Off**
- Not used.

**RVB — Room**
- Mix: 18, Decay: 32, Trail: On
- Always on, same for both CTL states.
- Unlike most of the "quiet verse/big chorus" patches in this set, the reverb doesn't grow for the chorus here — it's a constant, moderate atmosphere that matches the acoustic-driven verses' natural sense of space, and the chorus gets heavier through the boost instead of getting washier through more reverb.

## AMP + DST: Classic Bass + Bass OD, CAB: Sunn215 IR (User IR 8)

Rebuilt 2026-09-18 off the GP-5's own AMP/DST + a loaded IR — NAMs are off for now (Valeton N->S volume issue, device-side). The old NAM was the Omega/fuzz side of the Darkglass Alpha Omega — darker, murkier gain character than the Alpha/distortion side, a better match for this song's moody, doomy alt-metal weight than a brighter distortion voicing. Classic Bass + always-on Bass OD (both dialed with Treble held back to stay dark) reproduce that; Sunn215 is ir.md's own named pick for driven/fuzz bass tones.

## CTL summary

- **CTL Off — Verse.** Moody, restrained, dark. A constant, moderate room ambience underneath.
- **CTL On — Chorus.** A boost pushes the same dark, heavy tone harder for the driven hook — this song gets heavier, not bigger and washier.
- Engage CTL right as the chorus/hook hits, disengage back into the next verse.

## Full pedalboard (signal chain order)

**1. Flamma FS-08 Octave — Bypassed**
- Footswitch off. No octave layering needed for this part.

**2. Donner Ultimate Comp — Engaged**
- COMP: 50
- TONE: 52
- LEVEL: 58
- Mode: NORMAL
- Moderate compression keeps this consistent across the dynamic. NORMAL mode over TREBLE — this tone stays dark and warm rather than bright, matching the song's moody, doomy character.

**3. Donner Stylish Fuzz — Bypassed**
- Footswitch off. The NAM's own fuzz-voiced distortion already covers all the grit this song needs.

**4. Joyo Tidal Wave — Bypassed**
- Footswitch off, Drive/Blend not engaged. Same reasoning — one drive source (the NAM) is enough.

**5. Joyo Narcissus — Bypassed**
- Footswitch off. No chorus — matches the MOD-off call on the GP-5. Dark, direct tone throughout.

**6. Valeton GP-5** — see settings above.
