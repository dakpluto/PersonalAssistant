# Hanging by a Moment — Lifehouse

From *No Name Face* (2000). About 124 BPM, est.
Bass: Harley Benton P/J, 5-string, passive. GP-5 only.
Driving eighth notes locked to the kick. Steady and punchy under the verses, a little more grit in the chorus.
Built from the song's overall sound. I haven't verified the exact rig or tuning on this track. Check your tuning against the record.
A pick suits the driving eighths. Both pickups up, P a little forward. Tone knob around 65%.

## Module chain

**NR — Gate**, always on.
THRE: 14.
Low. Just catches noise when the Bass OD is on.

**PRE — COMP (Ross)**, always on.
Sustain: 45, VOL: 58.
Keeps the eighth notes at one level.

**DST — Bass OD**, on CTL.
Gain: 35, Blend: 40, VOL: 56, Bass: 54, Treble: 55.
Chorus grit to match the guitars' lift. Blend 40 keeps the clean low end under it.

**AMP/CAB — NAM SnapTone, slot 53: CleanSVT** (always on)
- Built from the `SVT CLEAN` NAM (SVT-CL) and the Apg810 IR, combined into one snaptone.
- Real Ampeg SVT-CL clean, into an SVT 8x10.
- Clean SVT is the default modern-rock bass voice. The Bass OD adds the chorus edge.
- Gain: 50, VOL: 65, Bass: 54, Middle: 54, Treble: 54
- Gain 50: the capture as built.
- Bass 54: a touch more low end.
- Middle 54: a small lift so the eighths read.
- Treble 54: a little more top for pick attack.
- VOL 65: the level Michael set for this snaptone in the 2026-10-02 VOL audit. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 53 directly.

**EQ — Bass EQ 2**, always on.
50Hz: +1, 120Hz: +2, 400Hz: -2, 800Hz: +2, 4.5kHz: +1, VOL: 52.
Punch at 120Hz, a mud cut at 400Hz, and 800Hz so the notes read against the guitars.

**MOD — off.**

**DLY — off.**

**RVB — Room**, on CTL.
Mix: 10, Decay: 28, Trail: on.
A small room for the chorus lift.

## CTL footswitch

On CTL: DST (Bass OD), RVB (Room).

- **CTL off** — Verses. Clean, punchy, driving. This is the resting state the patch loads into.
- **CTL on** — Choruses. Grit and a small room.

Engage at the chorus. Off for the verses.
