# Your Body is a Wonderland — John Mayer (Room for Squares)

GP-5 only build, no pedalboard. HSS Stratocaster.
Mid-tempo, around 82 BPM.
The whole song lives on one tone: warm, clean, compressed, lightly chorused.
No hard lead break — the chorus/outro sections just get a little bigger, not dirtier.
This patch uses a NAM capture for the amp/cab instead of the GP-5's built-in AMP/CAB modules — see below.

## GP-5 Settings

Module order: NR → PRE → DST → AMP → CAB → EQ → MOD → DLY → RVB

**AMP/CAB — NAM SnapTone, slot 66: MayerDumble** (always on)
- Built from the `SLAMMIN_DUMBLE_FORD_CLN_BALANCED_S (Dumble ODS #102)` NAM and the Bogner 2x12 EVM12L - SM57 1 - Cap Edge IR, combined into one snaptone.
- Dumble ODS #102 (the Robben Ford amp) clean channel, into a Bogner 2x12 with EVM12L speakers.
- Warm, clean, Dumble-style Mayer tone. Replaces the old Two-Rock NAM, which is no longer loaded.
- Gain: 50, VOL: 50, Bass: 50, Middle: 50, Treble: 50
- Gain 50: the capture as built.
- Bass 50: flat.
- Middle 50: flat.
- Treble 50: flat.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 66 directly.

**NR — Gate**
- THRE: 20
- Always on. Single coils plus a boost stage need a floor, but 20 is light enough not to chop the fingerstyle note decay.

**PRE — COMP** (Ross Compressor)
- Sustain: 35, VOL: 55
- Always on, both CTL states. This is the backbone of the tone — evens out pick/finger attack for the smooth, consistent clean dynamic the record is built on.

**DST — Green OD** (Tube Screamer / TS-808), very light
- Gain: 25, Tone: 55, VOL: 60
- **CTL switch.** Off = bypassed, On = engaged.
- Not distortion at Gain 25 — a gentle push that lifts presence for the fuller chorus/outro sections without ever crossing into dirty.

**EQ — Guitar EQ 2**
- 100Hz: 0, 500Hz: +2, 1kHz: +1, 3kHz: +3, 6kHz: +2, VOL: 50
- Always on. Modest lift through the upper-mids and treble for single-coil sparkle/quack on top of the warm Dumble-style low end.

**MOD — A-Chorus** (Arion SCH-1)
- Depth: 30, Rate: 1.0Hz, Tone: 55
- Always on, both CTL states. This song's clean tone has a subtle chorus shimmer baked into its identity throughout, not just one section — light enough to sit underneath, present enough to be felt.

**DLY — Off**
Not used. The record's rhythm tone is close and dry; delay isn't part of the signature sound here.

**RVB — Room**
- Mix: 30, Decay: 40, Trail: On
- **CTL switch.** Off = bypassed (dry, tight verses), On = engaged (a touch of room air for the fuller chorus/outro swells).

### CTL Summary
- **CTL Off — Verse/main tone:** Dry, compressed, chorused clean. This is the patch's default — reach for this most of the time.
- **CTL On — Chorus/outro lift:** Same amp, same chorus, with the light Green OD push and Room reverb both kicked in for size. A subtle shift by design — this song doesn't have a hard guitar solo, so "lead" here means bigger, not dirtier.

## Pedalboard

None. Full Board = False — this patch is GP-5 only.
