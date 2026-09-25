# The Bread Has Been Broken — Jeff Deyo

Bass: Harley Benton P/J, 5-string, passive. Full board.
Part of a 5-song worship set. The board ahead of the GP-5 is fixed across all 5 songs — see "Full Pedalboard" below. Only this GP-5 patch changes song to song.

A communion song — slow and reverent, in E, roughly 72 BPM (no published tempo found; built to feel like a quiet, unhurried ballad). This is the stillest moment in the set. The bass needs to all but disappear into the background: dark, warm, minimal presence, nothing that draws attention to itself. No CTL — a footswitch change during a communion moment would be a distraction, not a feature. One tone, held the whole song.

## GP-5 Settings

Module order: NR → PRE → DST → AMP → CAB → EQ → MOD → DLY → RVB

**NR — Gate**
- THRE: 18
- Always on. Very light — this patch runs almost no gain, so there's not much noise to clean up in the first place.

**PRE — COMP** (Ross Compressor)
- Sustain: 35, VOL: 52
- Always on. Barely-there compression — just keeps notes even at the very quiet, restrained playing this song calls for.

**DST — Off**
Not used.

**AMP/CAB — NAM SnapTone, slot 59: WorshipSVT** (always on)
- Built from the `SVT CLEAN PUSHED (SVT-CL)` NAM and the Ampeg SVT Bright Beta52 IR, combined into one snaptone.
- Real Ampeg SVT-CL on the clean-pushed setting, into a bright, Beta 52-miked SVT 4x10 IR.
- Modern worship bass: full, slightly pushed, clear top from a bright 4x10.
- Gain: 50, VOL: 50, Bass: 58, Middle: 45, Treble: 42
- Gain 50: the capture as built.
- Bass 58: more low end.
- Middle 45: midrange pulled back a little.
- Treble 42: top end pulled back noticeably.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 59 directly.

**EQ — Bass EQ 2**
- 50Hz: +5, 120Hz: +2, 400Hz: -3, 800Hz: -3, 4.5kHz: -5, VOL: 48
- Always on. Low end kept for warmth and foundation, everything from 400Hz up rolled back — dark and soft, no edge or bite anywhere in the tone.

**MOD — Off**
Not used. Nothing to distract from the stillness of the moment.

**DLY — Off**
Not used.

**RVB — Church**
- Mix: 20, Decay: 60, Trail: On
- Always on. A long, soft decay gives the part air and reverence without adding rhythmic complexity — fits a slow communion moment where space matters more than definition.

No CTL on this patch — one still, reverent tone for the whole song.

## Full Pedalboard — Fixed For This Set

This patch is one of 5 built for one worship set (Unstoppable God, Giving It All to You, Your Love Changes Everything, The Bread Has Been Broken, Thrive). Every pedal ahead of the GP-5 is dialed in once and left untouched for the whole set — only the GP-5 patch changes between songs. Don't touch these knobs between songs; that's the point.

**1. Flamma FS-08 Octave — Bypassed, entire set.**
All four octave knobs at 0, Dry at 100, so nothing surprises you if the footswitch gets bumped. None of these five songs call for octave layering.

**2. Donner Ultimate Comp — Engaged, entire set.**
- COMP: 42
- TONE: 50
- LEVEL: 55
- Mode: NORMAL
First in the chain — evens out finger-attack dynamics before anything else touches the signal. Moderate COMP glues the sound together across a set that spans near-silence (this song) to full push (Unstoppable God, Thrive) without squashing quiet sections. NORMAL mode stays neutral — voicing is handled per-song downstream.

**3. Donner Stylish Fuzz — Bypassed, entire set.**
No fuzz texture anywhere in this set. True bypass throughout.

**4. Joyo Tidal Wave — Engaged, entire set.**
- Drive: 25
- Blend: 35
- Presence: 55
- Level: 55
- Treble: 55, Middle: 58, Bass: 55
- Mid-Frequency toggle: 500Hz
- Bass-Shift toggle: 80Hz (tight, keeps a full band mix from turning to mud)
- Cab-Sim (DI out): On
- Ground Lift: Off (only flip on if a specific room throws hum)
The constant foundation stage for the whole set. Drive is low and Blend under half — this adds harmonic warmth and preamp glue, not an audible overdrive. On this song specifically, that warmth is doing quiet, unglamorous work: keeping the tone full at very low playing volume. Actual tone character per song comes from the GP-5 patch downstream, not from this pedal.

**5. Joyo Narcissus — Bypassed, entire set.**
This song's GP-5 patch runs no modulation at all, so this pedal simply stays out of the way, same as every other song. True bypass throughout.

**6. Valeton GP-5 — as detailed above.**

## Footswitch Choreography

None needed for this song. GP-5 loads its one patch state and stays there for the whole communion moment — no CTL, no changes on the rest of the board.
