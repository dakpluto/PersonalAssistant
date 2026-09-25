# Sweet Leaf — Black Sabbath

From *Master of Reality* (1971). About 94 BPM for the main riff, est.
Bass: Harley Benton P/J, 5-string, passive. GP-5 only.
Tuning: as far as I know the record is down a step and a half, in C#. On the 5-string you can stay in standard and play the riff off the low B, reading everything down a step and a half. Or detune to match the guitarist.
Geezer Butler's part doubles and thickens the riff. It's fat, fuzzy, and loud, part of the wall rather than underneath it.
I haven't verified the exact bass rig on the record.
Fingers, dug in hard. Both pickups up, P forward. Tone knob around 60%.

## Module chain

**NR — Gate**, always on.
THRE: 25.
The gain is up. 25 keeps the riff stops tight.

**PRE — Micro Boost (MXR M133)**, on CTL.
Gain: 40.
On CTL. Pushes the whole drive chain harder, with more level and fuzz, for the up-tempo middle jam.

**DST — Bass OD**, always on.
Gain: 55, Blend: 50, VOL: 55, Bass: 58, Treble: 48.
Always on, and a core part of the tone. Gain 55 at Blend 50 is a fuzzy growl that still keeps the fundamental solid.

**AMP/CAB — NAM SnapTone, slot 58: HairySVT** (always on)
- Built from the `SVT SANS HAIRY DRIVE (SVT-CL)` NAM and the Sunn215 IR, combined into one snaptone.
- Real Ampeg SVT-CL with the hairy drive setting, into the Sunn215 2x15 IR.
- Geezer's doom tone: fuzzy, heavy, huge. Hairy SVT into the Sunn 2x15.
- Gain: 50, VOL: 50, Bass: 60, Middle: 58, Treble: 45
- Gain 50: the capture as built.
- Bass 60: more low end.
- Middle 58: more midrange.
- Treble 45: top end pulled back a little.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 58 directly.

**EQ — Bass EQ 2**, always on.
50Hz: +1, 120Hz: +2, 400Hz: +2, 800Hz: +1, 4.5kHz: -3, VOL: 52.
+2 at 400Hz for wool and grind. The top is trimmed so the fuzz doesn't sizzle.

**MOD — off.**

**DLY — off.**

**RVB — off.** Dry. The wall is loud enough.

## CTL footswitch

On CTL: PRE (Micro Boost).

- **CTL off** — Main riff and verses. A fat, fuzzy riff-double. This is the resting state the patch loads into.
- **CTL on** — Middle jam. Micro Boost drives everything harder for the faster section.

Engage when the band kicks into the jam. Drop back for the return of the main riff.
