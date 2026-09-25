# Rainbow Connection (Rhythm Guitar) — Kenny Loggins

Kenny Loggins' version, from *Return to Pooh Corner* (1994). The song is by Paul Williams and Kenneth Ascher, and Kermit sang it first in 1979. About 72 BPM, est.
A gentle, acoustic-leaning lullaby. There's no real electric guitar part to copy, so this patch gives the Strat an acoustic-adjacent role: soft, fingerpicked, warm, and lightly shimmering.
Instrument: Stratocaster (HSS). Neck pickup, fingers, guitar tone knob around 6. Fingerpick the arpeggios. The patch is built to feel like a nylon or steel-string stand-in.
GP-5 only, Stratocaster (HSS), no pedalboard.

## Module chain

**NR — Gate**, always on.
THRE: 10.
Very low. Fingerpicked notes need to fade naturally.

**PRE — COMP (Ross)**, always on.
Sustain: 42, VOL: 55.
Compression evens out fingerpicking and adds an acoustic-like sustain bloom.

**DST — Green OD (TS-808)**, on CTL.
Gain: 12, Tone: 50, VOL: 68.
Almost no drive at Gain 12. It's a level and warmth lift so the melody sings over the arpeggios.

**AMP/CAB — NAM SnapTone, slot 64: BrightTwin** (always on)
- Built from the `Tim R Fender TwinVerb Vibrato Bright (Twin Reverb)` NAM and the TWIN REVERB __ BALANCED (vulturized Twin) IR, combined into one snaptone.
- Real Twin Reverb, Vibrato channel with Bright on, into the Twin cab IR (balanced blend).
- Acoustic stand-in: warm, round, clean Twin.
- Gain: 50, VOL: 50, Bass: 50, Middle: 45, Treble: 52
- Gain 50: the capture as built.
- Bass 50: flat.
- Middle 45: midrange pulled back a little.
- Treble 52: a touch more top end.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 64 directly.

**EQ — Guitar EQ 2**, always on.
100Hz: -1, 500Hz: -2, 1kHz: 0, 3kHz: +2, 6kHz: +1, VOL: 50.
A 500Hz dip removes electric boxiness. The 3kHz and 6kHz lift adds acoustic-like air and string detail.

**MOD — A-Chorus**, always on.
Depth: 14, Rate: 0.5, Tone: 55.
A light chorus, Depth 14. A soft shimmer that hints at a doubled acoustic.

**DLY — Tape**, on CTL.
Mix: 16, Time: 420ms, F.Back: 22, Trail: on.
Soft tape echo behind the melody.

**RVB — Hall**, always on.
Mix: 24, Decay: 50, Trail: on.
A warm hall for the dreamy lullaby space.

## CTL footswitch

On CTL: DST (Green OD, level lift), DLY (Tape).

- **CTL off** — Rhythm. Soft fingerpicked arpeggios. Warm, airy, lightly shimmering. This is the resting state the patch loads into.
- **CTL on** — Lead. A slight lift plus tape echo for playing the vocal melody on guitar.

Engage CTL to take the melody. Off to accompany.
