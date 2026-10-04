# Sweet Leaf (Rhythm Guitar) — Black Sabbath

From *Master of Reality* (1971). About 94 BPM for the main riff, est. The middle jam speeds up.
The prototype stoner-doom riff: a huge, thick, woolly power-chord grind after the famous looped cough, and a long solo jam in the middle.
Tuning: as far as I know, *Master of Reality* was tuned down a step and a half, to C#. Tune down to match the record.
Iommi's early-70s rig is widely described as a Laney stack with a Dallas Rangemaster treble booster in front. This patch is built around that idea. I haven't verified the exact gear on this track.
Instrument: Stratocaster (HSS). Bridge humbucker throughout. Heavier strings help with the down-tuning.
GP-5 only, Stratocaster (HSS), no pedalboard.

## Module chain

**NR — Gate**, always on.
THRE: 35.
A boosted, cranked amp hisses. 35 keeps the gaps in the riff dead. Keep it below the level where held chords get cut off.

**PRE — Boost (EP Booster)**, always on.
Gain: 35, +3dB: off, Bright: on.
The Rangemaster stand-in. The capture already has a clean boost in front of the amp, so this one only adds the treble-booster edge.
Bright on gives the treble-heavy push. Gain 35 and +3dB off keep it from stacking into mush. It's always on because it's part of the core Iommi sound.

**DST — Sora Fuzz (Tone Bender)**, on CTL.
Fuzz: 55, VOL: 62.
A germanium Tone Bender-style fuzz for the solo jam. It adds hairy sustain on top of the boosted amp. Fuzz 55 keeps notes defined.

**AMP/CAB — NAM SnapTone, slot 74: CleanPlexi** (always on)
- A Marshall JTM45 with a clean boost in front, into a Matchless ES212 2x12 loaded with Celestion G12M-25 Greenbacks.
- No Laney capture on hand. A boosted JTM45 is the closest thing to Iommi's boosted Laney, and the boost is already part of the capture. Michael checked it 2026-10-04: "very nice", "great lead sound".
- Gain: 50, VOL: 70, Bass: 55, Middle: 60, Treble: 48
- Gain 50: the capture as built. It's already boosted, so it needs no extra push.
- Bass 55: a touch more low end for the down-tuned riff.
- Middle 60: more midrange.
- Treble 48: slightly under flat, since the Bright boost adds top.
- VOL 70: the level Michael set for this snaptone on 2026-10-04. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 74 directly.

**EQ — Guitar EQ 2**, always on.
100Hz: +1, 500Hz: +2, 1kHz: +1, 3kHz: -1, 6kHz: -3, VOL: 50.
+1 at 100Hz and +2 at 500Hz add weight and woolly mids to the down-tuned riff. -3 at 6kHz tames the treble booster's fizz on the amp's back end.

**MOD — off.**

**DLY — Tape**, on CTL.
Mix: 16, Time: 380ms, F.Back: 22, Trail: on.
Warm tape echo behind the solo, early-70s style.

**RVB — Room**, always on.
Mix: 10, Decay: 25, Trail: on.
Mostly dry. It's a 1971 room.

## CTL footswitch

On CTL: DST (Sora Fuzz), DLY (Tape).

- **CTL off** — Rhythm. A treble-boosted, cranked plexi grind for the main riff and the verses. This is the resting state the patch loads into.
- **CTL on** — Lead. The Tone Bender fuzz stacks on top, plus tape echo, for the solo jam.

Engage CTL for the middle jam and the solo. Drop back for the riff.

## Previous version (BritishCrunch, before 2026-10-04)

Moved to CleanPlexi on 2026-10-04. To go back, restore these values:
- N->S: slot 69, BritishCrunch (`Marshall JTM45 I Crunch BAL DI` + Origin Effects British Straight 4x12 Medium Mix). Gain 55, VOL 67, Bass 55, Middle 62, Treble 50.
- PRE Boost: Gain 60, +3dB on, Bright on.
- Everything else is unchanged.
