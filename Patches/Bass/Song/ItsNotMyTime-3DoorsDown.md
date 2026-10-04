# It's Not My Time — 3 Doors Down

From *3 Doors Down* (2008). About 100 BPM, est.
Bass: Harley Benton P/J, 5-string, passive. GP-5 only.
Driving post-grunge eighths that lock to the palm-muted guitars, then open up in the chorus.
Built from the song's overall sound. I haven't verified the exact rig on this track.
A pick suits this. Both pickups up. Tone knob around 70%.

## Module chain

**NR — Gate**, always on.
THRE: 22.
The always-on drive needs cleanup between the muted notes.

**PRE — Micro Boost**, on CTL.
Gain: 55.
A clean level push for the chorus.

**DST — Bass OD**, always on.
Gain: 45, Blend: 60, VOL: 58, Bass: 55, Treble: 56.
Grit is part of the core sound here, the same as the guitars. Blend 60 keeps a clean low end under it.

**AMP/CAB — NAM SnapTone, slot 57: GrittySVT** (always on)
- Built from the `SVT PUSHED` NAM (SVT-CL) and the Apg810 IR, combined into one snaptone.
- Real Ampeg SVT-CL pushed into grit, into an SVT 8x10.
- Gritty SVT rock. Same family as the Higher patch.
- Gain: 50, VOL: 55, Bass: 55, Middle: 58, Treble: 58
- Gain 50: the capture as built.
- Bass 55: a touch more low end.
- Middle 58: more midrange, so it cuts through the guitars.
- Treble 58: more top end for pick attack.
- VOL 55: the level Michael set for this snaptone in the 2026-10-02 VOL audit. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 57 directly.

**EQ — Bass EQ 1**, always on.
33Hz: +2, 150Hz: 0, 600Hz: -2, 2kHz: +4, 8kHz: +2, VOL: 54.
+4 at 2kHz gives the growl against loud guitars. -2 at 600Hz keeps it from going boxy.

**MOD — off.**

**DLY — off.**

**RVB — Room**, on CTL.
Mix: 14, Decay: 30, Trail: on.
A small room for the chorus.

## CTL footswitch

On CTL: PRE (Micro Boost), RVB (Room).

- **CTL off** — Verses. Tight, gritty, driving. This is the resting state the patch loads into.
- **CTL on** — Choruses. A level push and a small room.

Engage at the chorus. Off for the verses.
