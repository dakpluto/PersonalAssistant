# What About Now — Daughtry

From *Daughtry* (2006). About 74 BPM, est.
Bass: Harley Benton P/J, 5-string, passive. GP-5 only.
A power ballad. Long, sustained roots under the verses, then a fuller, pushing part in the chorus.
Built from the song's overall sound. I haven't verified the bassist's exact rig.
Fingers. Both pickups up, P a little forward. Tone knob around 60%.

## Module chain

**NR — Gate**, always on.
THRE: 12.
Low. Long ballad notes need to decay naturally.

**PRE — COMP (Ross)**, always on.
Sustain: 45, VOL: 58.
Holds the long whole notes up so they don't fade under the band.

**DST — Bass OD**, on CTL.
Gain: 30, Blend: 35, VOL: 56, Bass: 52, Treble: 52.
Light grit for the chorus. Blend 35 keeps most of the clean low end.

**AMP/CAB — NAM SnapTone, slot 53: CleanSVT** (always on)
- Built from the `SVT CLEAN` NAM (SVT-CL) and the Apg810 IR, combined into one snaptone.
- Real Ampeg SVT-CL clean, into an SVT 8x10.
- Clean SVT is the default modern-rock bass voice. Round under the verses, solid under the chorus.
- Gain: 50, VOL: 65, Bass: 55, Middle: 50, Treble: 48
- Gain 50: the capture as built.
- Bass 55: a touch more low end for the ballad.
- Middle 50: flat.
- Treble 48: top end pulled back a little. Keeps finger noise down on long notes.
- VOL 65: the level Michael set for this snaptone in the 2026-10-02 VOL audit. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 53 directly.

**EQ — Bass EQ 2**, always on.
50Hz: +1, 120Hz: +2, 400Hz: -2, 800Hz: +1, 4.5kHz: 0, VOL: 52.
Warm lows, a mud cut at 400Hz, and 800Hz so the notes read on small speakers.

**MOD — off.**

**DLY — off.**

**RVB — Room**, on CTL.
Mix: 12, Decay: 32, Trail: on.
A small room to open up the chorus.

## CTL footswitch

On CTL: DST (Bass OD), RVB (Room).

- **CTL off** — Verses. Clean, round, sustained. This is the resting state the patch loads into.
- **CTL on** — Choruses. Light grit and a small room for the lift.

Engage at the chorus. Off for the verses.
