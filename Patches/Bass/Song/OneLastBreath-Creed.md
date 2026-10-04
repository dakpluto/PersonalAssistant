# One Last Breath — Creed

From *Weathered* (2001). About 62 BPM, est.
Bass: Harley Benton P/J, 5-string, passive. GP-5 only.
Brian Marshall holds back under the clean verses, then the chorus drops in heavy and slow.
Built from the band's general sound. I haven't verified the exact rig or tuning on this track. Check your tuning against the record. The low B covers any drop tuning.
Fingers for the verses. A pick works for the heavy chorus if you want more attack.

## Module chain

**NR — Gate**, always on.
THRE: 16.
A little higher than a clean patch. The Bass OD adds noise in the chorus.

**PRE — COMP (Ross)**, always on.
Sustain: 45, VOL: 58.
Keeps the slow whole notes even.

**DST — Bass OD**, on CTL.
Gain: 50, Blend: 55, VOL: 58, Bass: 55, Treble: 56.
The heavy chorus. Blend 55 gives real grind but keeps the clean low end under it.

**AMP/CAB — NAM SnapTone, slot 53: CleanSVT** (always on)
- Built from the `SVT CLEAN` NAM (SVT-CL) and the Apg810 IR, combined into one snaptone.
- Real Ampeg SVT-CL clean, into an SVT 8x10.
- A clean SVT for the restrained verses. The Bass OD does the heavy lifting in the chorus.
- Gain: 50, VOL: 65, Bass: 56, Middle: 54, Treble: 52
- Gain 50: the capture as built.
- Bass 56: more low end for a slow, heavy song.
- Middle 54: a small lift so the driven chorus cuts.
- Treble 52: a touch more top end.
- VOL 65: the level Michael set for this snaptone in the 2026-10-02 VOL audit. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 53 directly.

**EQ — Bass EQ 1**, always on.
33Hz: +2, 150Hz: 0, 600Hz: -2, 2kHz: +3, 8kHz: +1, VOL: 54.
Sub weight for the slow chorus. +3 at 2kHz gives the driven notes edge against the heavy guitars. -2 at 600Hz keeps it from going boxy.

**MOD — off.**

**DLY — off.**

**RVB — Room**, on CTL.
Mix: 14, Decay: 34, Trail: on.
A small room to make the chorus feel bigger.

## CTL footswitch

On CTL: DST (Bass OD), RVB (Room).

- **CTL off** — Verses. Clean, restrained SVT. This is the resting state the patch loads into.
- **CTL on** — Choruses. Heavy grind plus a small room.

Engage at the chorus. Off for the verses.
