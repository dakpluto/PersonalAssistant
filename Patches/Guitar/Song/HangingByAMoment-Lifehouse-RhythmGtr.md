# Hanging by a Moment (Rhythm Guitar) — Lifehouse

From *No Name Face* (2000). About 124 BPM, est.
Driving 2000-era radio rock. A mid-gain riff and chugging verse rhythm, then bigger, wider chords in the chorus.
Mid-gain, not high-gain. The guitars crunch but never get Rectifier-heavy.
Built from the song's overall sound. I haven't verified Jason Wade's exact guitars, amps or tuning on this track. Check your tuning against the record.
Instrument: Stratocaster (HSS). Bridge humbucker throughout. Roll the guitar volume to about 8 for the verses if they get too thick.
GP-5 only, Stratocaster (HSS), no pedalboard.

## Module chain

**NR — Gate**, always on.
THRE: 28.
Tight stops on the chugging verse. Stacked with the SD-1 in the chorus it needs a little more than a clean patch.

**PRE — off.** A crunch Marshall compresses enough on its own.

**DST — Super OD (SD-1)**, on CTL.
Gain: 35, Tone: 55, VOL: 68.
The chorus lift. An SD-1 into a crunchy JCM800 gives a thicker, louder wall without going metal. VOL 68 adds level so the chorus jumps.

**AMP/CAB — NAM SnapTone, slot 68: ClassicMarshall** (always on)
- Built from the `JCM800 2203 - P5 B5 M5 T5 MV5 G4 - AZG - 700` NAM and the V7X_dc (Marshall 1960AV) IR, combined into one snaptone.
- Real JCM800 2203 at Gain 4, classic crunch, into a Marshall 4x12.
- Same combo as December. The right mid-gain crunch for 2000-era post-grunge radio rock.
- Gain: 48, VOL: 50, Bass: 50, Middle: 58, Treble: 56
- Gain 48: just under the capture. The verse riff stays articulate.
- Bass 50: flat. The bass guitar owns the low end.
- Middle 58: more midrange. Keeps the riff forward in a dense mix.
- Treble 56: a touch more bite for the picked parts.
- VOL 50: the level Michael set for this snaptone in the 2026-10-01 VOL audit. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 68 directly.

**EQ — Guitar EQ 2**, always on.
100Hz: -2, 500Hz: -1, 1kHz: +1, 3kHz: +2, 6kHz: -1, VOL: 50.
Low cut keeps the chugs tight. +2 at 3kHz for pick attack. -1 at 6kHz trims the SD-1 fizz.

**MOD — off.** No modulation on this one.

**DLY — Analog**, on CTL.
Mix: 16, Time: 363ms, Feedback: 20, Trail: on.
A dotted eighth at 124 BPM. Widens the chorus chords and fills behind the lead lines. Mix 16 stays under the wall.

**RVB — Room**, always on.
Mix: 14, Decay: 30, Trail: on.
A small room. Driving rock doesn't want much space.

## CTL footswitch

On CTL: DST (Super OD), DLY (Analog).

- **CTL off** — Rhythm. Mid-gain Marshall crunch for the intro riff and the verses. This is the resting state the patch loads into.
- **CTL on** — Lead. SD-1-pushed Marshall plus dotted-eighth delay for the choruses and lead lines.

Engage CTL at the chorus. Drop back for the verses.
