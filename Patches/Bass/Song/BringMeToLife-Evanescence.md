# Bring Me to Life — Evanescence

From *Fallen* (2003). About 95 BPM, est.
Bass: Harley Benton P/J, 5-string, passive. GP-5 only.
Sparse, deep notes under the piano verses. Then heavy, locked-in low end doubling the guitars' chugs in the choruses.
Built from the song's overall sound. I haven't verified who played bass on the record or their rig. It's tuned low. The low B covers it. Check your tuning against the record.
A pick suits the heavy parts. Both pickups up. Tone knob around 70%.

## Module chain

**NR — Gate**, always on.
THRE: 20.
Stops between the chugs, locked with the guitar gate.

**PRE — COMP (Ross)**, always on.
Sustain: 50, VOL: 58.
Holds the low notes at one level. Low tunings get floppy without it.

**DST — Bass OD**, on CTL.
Gain: 50, Blend: 55, VOL: 56, Bass: 56, Treble: 58.
The chorus grind. Blend 55 gives real growl while keeping the clean sub under it.

**AMP/CAB — NAM SnapTone, slot 57: GrittySVT** (always on)
- Built from the `SVT PUSHED` NAM (SVT-CL) and the Apg810 IR, combined into one snaptone.
- Real Ampeg SVT-CL pushed into grit, into an SVT 8x10.
- Gritty SVT rock. Some hair on its own for the verses. The Bass OD makes it heavy.
- Gain: 50, VOL: 55, Bass: 56, Middle: 55, Treble: 56
- Gain 50: the capture as built.
- Bass 56: more low end for the low tuning.
- Middle 55: a small lift, so it cuts through the guitars.
- Treble 56: more top for pick attack.
- VOL 55: the level Michael set for this snaptone in the 2026-10-02 VOL audit. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 57 directly.

**EQ — Bass EQ 1**, always on.
33Hz: +3, 150Hz: 0, 600Hz: -3, 2kHz: +3, 8kHz: +1, VOL: 54.
Sub weight for the low tuning. -3 at 600Hz keeps it from going boxy. +3 at 2kHz gives the growl against the wall of guitars.

**MOD — off.**

**DLY — off.**

**RVB — Room**, on CTL.
Mix: 10, Decay: 28, Trail: on.
A small room for the chorus lift.

## CTL footswitch

On CTL: DST (Bass OD), RVB (Room).

- **CTL off** — Verses. Deep, slightly gritty SVT under the piano. This is the resting state the patch loads into.
- **CTL on** — Choruses and bridge. Heavy grind and a small room.

Engage at the chorus. Off for the verses.
