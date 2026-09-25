# Believe — Brooks & Dunn

From *Hillbilly Deluxe* (2005). About 66 BPM, est.
Bass: Harley Benton P/J, 5-string, passive. GP-5 only.
Sparse and warm under the piano in the verses. Big, deep, sustained under the gospel climax. The 5-string low B earns its keep at the end.
Built from the song's overall sound. I haven't verified the session bassist's exact rig.
Fingers over the neck. P forward. Tone knob around 45%.

## Module chain

**NR — Gate**, always on.
THRE: 10.
Barely there.

**PRE — COMP4 (Keeley C4)**, always on.
Sustain: 42, Attack: 40, Clip: 40, VOL: 58.
Holds long notes steady.

**DST — Bass OD**, on CTL.
Gain: 22, Blend: 22, VOL: 55, Bass: 55, Treble: 45.
A hint of harmonic push for the climax. Blend 22 keeps it essentially clean.

**AMP/CAB — NAM SnapTone, slot 51: CleanB15** (always on)
- Built from the `Ampeg B18 - Head DI - Bass Chan - Vol 2.5 (B-18N)` NAM and the Apg115 IR, combined into one snaptone.
- Real Ampeg B-18N fliptop (the B-15 preamp circuit), captured clean at volume 2.5, into the Apg115 B-15 cab IR.
- A slow country ballad wants warm, clean, round low end. The B-15 does that with no tricks.
- Gain: 49, VOL: 50, Bass: 60, Middle: 48, Treble: 42
- Gain 49: a little under default. This part wants less push than the other CleanB15 patches.
- Bass 60: more low end.
- Middle 48: midrange pulled back a little.
- Treble 42: top end pulled back noticeably.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 51 directly.

**EQ — Bass EQ 1**, always on.
33Hz: +2, 150Hz: +1, 600Hz: -2, 2kHz: 0, 8kHz: -3, VOL: 52.
Sub weight at 33Hz for the low B. A mud cut at 600Hz. The top is rolled off.

**MOD — off.**

**DLY — off.**

**RVB — Hall**, on CTL.
Mix: 12, Decay: 40, Trail: on.
A touch of hall to join the climax.

## CTL footswitch

On CTL: DST (Bass OD), RVB (Hall).

- **CTL off** — Verses and the build. Warm, deep, sustained. This is the resting state the patch loads into.
- **CTL on** — The gospel climax. A hint of drive plus hall. The bass swells with the choir.

Engage at the final big section. Off before that.
