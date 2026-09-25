# Stairway to Heaven — Led Zeppelin

Led Zeppelin IV, 1971. Starts ~72 BPM and speeds up toward the end.
GP-5 only, P/J bass, no pedalboard.
John Paul Jones is on keys and recorders early on. The bass doesn't come in until the full band enters in the middle section.
Two sounds matter: a warm, round, supportive tone for the build, and a pushed, growly hard-rock tone for the solo and "And as we wind on down the road" ending.

## Module chain

**NR — Gate**, always on.
THRE: 15.

**PRE — Micro Boost**, on CTL.
Gain: 45.
Level push for the ending. The band gets much louder and the bass has to move up with it.

**DST — Bass OD**, on CTL.
Gain: 35, Blend: 40, VOL: 60, Bass: 52, Treble: 52.
Adds the grind for the hard-rock section. Blend at 40 keeps the clean DI foundation under it.
The boost hits the OD first, so together they stack into a bigger sound than either one alone.

**AMP/CAB — NAM SnapTone, slot 52: AvalonAD2022** (always on)
- Built from the `Avalon - 38 dB - Chan 1 (Avalon AD2022)` NAM and no cab IR (straight DI), combined into one snaptone.
- Avalon AD2022 Class A preamp at 38 dB. A studio DI, not an amp: no speaker coloration.
- JPJ's bass comes in late, clean and supportive. A DI-style tone fits.
- Gain: 51, VOL: 50, Bass: 60, Middle: 55, Treble: 50
- Gain 51: a little over default. This part wants more push than the other AvalonAD2022 patches.
- Bass 60: more low end.
- Middle 55: a touch more midrange.
- Treble 50: flat.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 52 directly.

**EQ — Bass EQ 1**, always on.
33Hz: +2, 150Hz: +2, 600Hz: +1, 2kHz: +2, 8kHz: -1, VOL: 54.
Full lows, a bit of low-mid body, and 2kHz for definition when things get loud. Top slightly tamed.

**MOD — off.**

**DLY — off.**

**RVB — Room**, always on.
Mix: 12, Decay: 25, Trail: on.
A little room around the bass fits the live-room feel of the record in both states.

## CTL footswitch

Two modules on CTL: PRE (Micro Boost) and DST (Bass OD).

- **CTL off**: the middle-section build, from when the band enters up to the solo. Warm, round, supportive. This is the resting state.
- **CTL on**: guitar solo and the hard-rock ending. Boost plus OD stack for a pushed, growly tone.

Engage at the drum fill into the solo. Leave it on through the end, then kill it for the quiet "And she's buying a stairway to heaven" tag.
