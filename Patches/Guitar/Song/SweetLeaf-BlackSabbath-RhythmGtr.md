# Sweet Leaf (Rhythm Guitar) — Black Sabbath

From *Master of Reality* (1971). About 94 BPM for the main riff, est. The middle jam speeds up.
The prototype stoner-doom riff: a huge, thick, woolly power-chord grind after the famous looped cough, and a long solo jam in the middle.
Tuning: as far as I know, *Master of Reality* was tuned down a step and a half, to C#. Tune down to match the record.
Iommi's early-70s rig is widely described as a Laney stack with a Dallas Rangemaster treble booster in front. This patch is built around that idea. I haven't verified the exact gear on this track.
Instrument: Stratocaster (HSS). Bridge humbucker throughout. Heavier strings help with the down-tuning.
GP-5 only, Stratocaster (HSS), no pedalboard.

## AMP: UK 50JP (Marshall JMP50) + CAB: V30112 IR (User IR 10)

There's no Laney model on the GP-5. A JMP50 is the nearest early-70s British plexi-style voicing: loud, raw, mid-heavy, and loose.
The treble-booster trick is the always-on EP Boost with Bright on. It hits the front of a cranked amp with extra top and gain, which is exactly what a Rangemaster did.
V30112 is the loaded guitar cab with enough upper-mid bark for a crunch tone. EVM112 would thin out once the amp breaks up.

## Module chain

**NR — Gate**, always on.
THRE: 35.
A boosted, cranked amp hisses. 35 keeps the gaps in the riff dead. Keep it below the level where held chords get cut off.

**PRE — Boost (EP Booster)**, always on.
Gain: 60, +3dB: on, Bright: on.
The Rangemaster stand-in. Bright on plus Gain 60 slams the amp with treble-heavy gain. It's always on because it's part of the core Iommi sound.

**DST — Sora Fuzz (Tone Bender)**, on CTL.
Fuzz: 55, VOL: 62.
A germanium Tone Bender-style fuzz for the solo jam. It adds hairy sustain on top of the boosted amp. Fuzz 55 keeps notes defined.

**AMP — UK 50JP**, always on.
Gain 1: 65, Gain 2: 60, PRES: 50, VOL: 58, Bass: 55, Middle: 62, Treble: 50.
Both gain stages high for a raw, woolly early-70s crunch. Middle 62, because this sound lives in the mids. Down-tuned, it isn't scooped.

**CAB — User IR 10 (V30112)**, always on.
VOL: 60.

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
