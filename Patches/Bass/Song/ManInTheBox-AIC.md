# Man in the Box — Alice In Chains

From *Facelift* (1990). About 108 BPM, est. Eb tuning, matching the guitar. On the 5-string, stay in standard and read the riff down a half step.
Bass: Harley Benton P/J, 5-string, passive. GP-5 only.
Thick, gritty, and heavy. The bass doubles the grinding riff and fills out the sludge underneath the guitar.
Built from the song's overall sound. I haven't verified the exact bass rig on the record.
A pick for the grind. Both pickups up. Tone knob around 60%.

## Module chain

**NR — Gate**, always on.
THRE: 25.
The gain is up. 25 keeps the stops tight.

**PRE — COMP (Ross)**, always on.
Sustain: 40, VOL: 58.
Evens the picked grind.

**DST — Bass OD**, always on.
Gain: 50, Blend: 45, VOL: 55, Bass: 55, Treble: 50.
Always-on grit is part of the core tone here. Blend 45 keeps the fundamental.

**AMP/CAB — NAM SnapTone, slot 58: HairySVT** (always on)
- Built from the `SVT SANS HAIRY DRIVE (SVT-CL)` NAM and the Sunn215 IR, combined into one snaptone.
- Real Ampeg SVT-CL with the hairy drive setting, into the Sunn215 2x15 IR.
- Mike Starr's sludgy tone. Hairy SVT drive into the Sunn 2x15.
- Gain: 48, VOL: 50, Bass: 58, Middle: 58, Treble: 48
- Gain 48: a little under default. This part wants less push than the other HairySVT patches.
- Bass 58: more low end.
- Middle 58: more midrange.
- Treble 48: top end pulled back a little.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 58 directly.

**EQ — Bass EQ 2**, on CTL.
50Hz: +1, 120Hz: +1, 400Hz: +2, 800Hz: +3, 4.5kHz: 0, VOL: 56.
On CTL. It adds a 400Hz and 800Hz growl plus level for the choruses and the solo, so the bass cuts through the densest parts.

**MOD — off.**

**DLY — off.**

**RVB — off.** Dry and heavy.

## CTL footswitch

On CTL: EQ (Bass EQ 2, growl boost).

- **CTL off** — Riff and verses. Thick, gritty, heavy. This is the resting state the patch loads into.
- **CTL on** — Choruses and the solo. Extra midrange growl and level to cut through the wall.

Engage at the choruses and under the solo.
