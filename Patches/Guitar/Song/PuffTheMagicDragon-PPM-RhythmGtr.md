# Puff the Magic Dragon (Rhythm Guitar) — Peter, Paul and Mary

From *Moving* (1963). About 110 BPM, est.
An acoustic folk record: interlocking fingerpicked and strummed acoustic guitars under three-part harmony.
There's no electric part, so the Strat plays the acoustic role: bright, compressed, and dry-ish, with a Travis-picked or light-strum feel. CTL is for playing the melody.
Instrument: Stratocaster (HSS). Position 4 (neck+middle) for a hollow, acoustic-ish quack. Neck for the melody.
GP-5 only, Stratocaster (HSS), no pedalboard.

## Module chain

**NR — Gate**, always on.
THRE: 10.
Minimal.

**PRE — COMP (Ross)**, always on.
Sustain: 45, VOL: 55.
Sustain 45 flattens the pick attack into an acoustic-like even pluck.

**DST — Green OD (TS-808)**, on CTL.
Gain: 10, Tone: 52, VOL: 68.
A level lift at Gain 10, with no real drive, so the melody sits over the picking.

**AMP/CAB — NAM SnapTone, slot 64: BrightTwin** (always on)
- Built from the `Tim R Fender TwinVerb Vibrato Bright (Twin Reverb)` NAM and the TWIN REVERB __ BALANCED (vulturized Twin) IR, combined into one snaptone.
- Real Twin Reverb, Vibrato channel with Bright on, into the Twin cab IR (balanced blend).
- Acoustic stand-in: a warm, round, clean Twin keeps the strum soft.
- Gain: 50, VOL: 50, Bass: 50, Middle: 42, Treble: 55
- Gain 50: the capture as built.
- Bass 50: flat.
- Middle 42: midrange pulled back noticeably.
- Treble 55: a touch more top end.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 64 directly.

**EQ — Guitar EQ 2**, always on.
100Hz: 0, 500Hz: -3, 1kHz: -1, 3kHz: +2, 6kHz: +2, VOL: 50.
The 500Hz cut removes electric box. The 3kHz and 6kHz lift adds string air. The lows stay flat, since an acoustic has body.

**MOD — off.** No modulation. Folk stays pure.

**DLY — off.** No delay.

**RVB — Room**, always on.
Mix: 16, Decay: 30, Trail: on.
A natural room, like 60s folk in a studio.

## CTL footswitch

On CTL: DST (Green OD, level lift).

- **CTL off** — Rhythm. Bright, compressed, acoustic-ish fingerpicking and strum. This is the resting state the patch loads into.
- **CTL on** — Lead. A level lift for picking out the melody.

Engage CTL to play the melody line. Off to accompany.
