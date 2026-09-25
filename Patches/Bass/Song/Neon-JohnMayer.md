# Neon — John Mayer

From *Room for Squares* (2001). About 104 BPM, est.
Bass: Harley Benton P/J, 5-string, passive. GP-5 only.
A syncopated, funky pocket that locks with the guitar's thumb-slapped bass notes. Punchy and articulate, clean.
Built from the song's overall sound. I haven't verified the exact bass rig on the record.
Fingers, J-forward blend for articulation. Tone knob around 60%.

## Module chain

**NR — Gate**, always on.
THRE: 12.
Low. Ghost notes need to pass.

**PRE — COMP4 (Keeley C4)**, always on.
Sustain: 45, Attack: 50, Clip: 40, VOL: 58.
Even, punchy.

**DST — off.** No grit.

**AMP/CAB — NAM SnapTone, slot 54: FullB15** (always on)
- Built from the `Ampeg B18 - Head DI - Bass Chan - Vol 5 (B-18N)` NAM and the Apg115410 IR, combined into one snaptone.
- Real Ampeg B-18N at volume 5, warmer and fuller than the clean capture, into the Apg115410 (1x15 + 4x10) IR.
- Mayer-trio style bass: warm and round, a little tube bloom.
- Gain: 48, VOL: 50, Bass: 55, Middle: 52, Treble: 55
- Gain 48: a little under default. This part wants less push than the other FullB15 patches.
- Bass 55: a touch more low end.
- Middle 52: a touch more midrange.
- Treble 55: a touch more top end.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 54 directly.

**EQ — Bass EQ 2**, always on.
50Hz: 0, 120Hz: +2, 400Hz: -2, 800Hz: +2, 4.5kHz: 0, VOL: 52.
A mud cut and 800Hz for syncopated definition.

**MOD — off.**

**DLY — off.**

**RVB — Room**, on CTL.
Mix: 10, Decay: 25, Trail: on.
A small room lift for the choruses.

## CTL footswitch

On CTL: RVB (Room).

- **CTL off** — Verses. Dry, articulate, syncopated. This is the resting state the patch loads into.
- **CTL on** — Choruses. A small room opens it up.

Engage at the choruses.
