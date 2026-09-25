# River Down Below — Riverside

Riverside. BPM est. Epic, dynamic, slow-building. The bass has to be deep and full when the song swells, and gritty when it hits. Built from the band's general sound; exact rig on the recording not verified.
GP-5 only, P/J bass, no pedalboard.

## Module chain

**NR — Gate**, always on.
THRE: 18.
Moderate gain. 18 is enough for the rests.

**PRE — COMP**, always on.
Sustain: 48, VOL: 58.
Steady level for a long dynamic song.

**DST — Bass OD**, on CTL.
Gain: 35, Blend: 45, VOL: 60, Bass: 52, Treble: 48.
Grit for the payoff sections.

**AMP/CAB — NAM SnapTone, slot 56: ProgSVT** (always on)
- Built from the `SVT CLEAN PUSHED (SVT-CL)` NAM and the Mesa215 IR, combined into one snaptone.
- Real Ampeg SVT-CL on the clean-pushed setting, into the Mesa215 2x15 IR.
- Moody prog build. Pushed SVT gives body with a bit of edge.
- Gain: 47, VOL: 50, Bass: 60, Middle: 55, Treble: 45
- Gain 47: a little under default. This part wants less push than the other ProgSVT patches.
- Bass 60: more low end.
- Middle 55: a touch more midrange.
- Treble 45: top end pulled back a little.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 56 directly.

**EQ — Bass EQ 1**, always on.
33Hz: +2, 150Hz: +2, 600Hz: -1, 2kHz: +2, 8kHz: 0, VOL: 50.
Bass EQ 1 reaches lower. Sub lift at 33Hz, mid dip at 600Hz, some 2kHz for note definition.

**MOD — off.** No modulation.

**DLY — off.** No delay.

**RVB — Hall**, on CTL.
Mix: 18, Decay: 40, Trail: off.
Sized for the swells. Mix 18 stays out of the way of the low end.

## CTL footswitch

On CTL: DST (Bass OD), RVB (Hall).

- **CTL off** — Verses and build-up. ProgSVT at moderate gain, full low end, dry. This is the resting state the patch loads into.
- **CTL on** — Big sections. Bass OD adds grit and a hall reverb adds size.

Engage CTL for the swells and heavy payoffs. Back off for the quiet build.
