# Hoedown — Emerson, Lake & Palmer

ELP, an arrangement of Copland's Hoedown. BPM est., very fast. Lake's bass here is driving, bright, and articulate, with some natural grit. Written for a fast ensemble piece. Exact recording rig not verified, so this is built from the band's general sound.
GP-5 only, P/J bass, no pedalboard.

## Module chain

**NR — Gate**, always on.
THRE: 20.
Driven, fast tone. 20 keeps gaps clean.

**PRE — COMP**, always on.
Sustain: 45, VOL: 58.
Evens out fast runs.

**DST — Bass OD**, always on.
Gain: 30, Blend: 50, VOL: 62, Bass: 50, Treble: 58.
Always on. Natural grit, bright top. Blend 50 keeps the low end.

**AMP/CAB — NAM SnapTone, slot 53: CleanSVT** (always on)
- Built from the `SVT CLEAN (SVT-CL)` NAM and the Apg810 IR, combined into one snaptone.
- Real Ampeg SVT-CL preamp on its clean setting, into the Apg810 8x10 IR.
- Greg Lake's bass is clean and punchy under the organ. Clean SVT gives it the weight.
- Gain: 52, VOL: 50, Bass: 50, Middle: 60, Treble: 58
- Gain 52: a little over default. This part wants more push than the other CleanSVT patches.
- Bass 50: flat.
- Middle 60: more midrange.
- Treble 58: more top end.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 53 directly.

**EQ — Bass EQ 2**, on CTL.
50Hz: -2, 120Hz: 0, 400Hz: +2, 800Hz: +6, 4.5kHz: +4, VOL: 52.
On CTL. Mid boost of +6 at 800Hz, +4 at 4.5kHz. Pushes the bass forward for solos and unison lines.

**MOD — off.** No modulation.

**DLY — off.** No delay. Too fast for it.

**RVB — off.** No reverb.

## CTL footswitch

On CTL: EQ (Bass EQ 2).

- **CTL off** — Main body. Bright, driven, compressed, even. This is the resting state the patch loads into.
- **CTL on** — Solos and unison lines. EQ mid boost pushes the bass forward.

Engage CTL when the bass needs to cut through a solo or unison line. Back off for the rest.
