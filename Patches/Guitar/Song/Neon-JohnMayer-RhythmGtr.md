# Neon (Rhythm Guitar) — John Mayer

From *Room for Squares* (2001). About 104 BPM, est.
The studio track is built on Mayer's percussive, syncopated acoustic part: thumb-slapped bass notes, snappy chord stabs, and melody fragments.
On a Strat, the patch keeps that percussive energy. It's a tight, compressed, glassy clean that makes the thumb slaps and chord pops snap. CTL gives a lead voice.
Instrument: Stratocaster (HSS). Position 4 (neck+middle). Thumb for the bass notes, fingers popping the chords.
GP-5 only, Stratocaster (HSS), no pedalboard.

## Module chain

**NR — Gate**, always on.
THRE: 14.
Keeps the muted percussive hits clean.

**PRE — COMP4 (Keeley C4)**, always on.
Sustain: 48, Attack: 55, Clip: 40, VOL: 58.
COMP4 with a slow-ish Attack 55 lets the slap transient punch through, then evens the sustain. That's the key to the percussive feel.

**DST — Green OD (TS-808)**, on CTL.
Gain: 26, Tone: 52, VOL: 66.
A light TS for Mayer-style lead lines.

**AMP/CAB — NAM SnapTone, slot 64: BrightTwin** (always on)
- Built from the `Tim R Fender TwinVerb Vibrato Bright (Twin Reverb)` NAM and the TWIN REVERB __ BALANCED (vulturized Twin) IR, combined into one snaptone.
- Real Twin Reverb, Vibrato channel with Bright on, into the Twin cab IR (balanced blend).
- Mayer's percussive clean: warm, round, with headroom. Twin Vibrato channel.
- Gain: 52, VOL: 50, Bass: 52, Middle: 45, Treble: 55
- Gain 52: a little over default. This part wants more push than the other BrightTwin patches.
- Bass 52: a touch more low end.
- Middle 45: midrange pulled back a little.
- Treble 55: a touch more top end.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 64 directly.

**EQ — Guitar EQ 2**, always on.
100Hz: +1, 500Hz: -2, 1kHz: 0, 3kHz: +2, 6kHz: 0, VOL: 50.
+1 at 100Hz keeps thumb-note body, standing in for the acoustic's bass. The 500Hz cut removes box. 3kHz for snap.

**MOD — off.**

**DLY — Analog**, on CTL.
Mix: 12, Time: 290ms, F.Back: 15, Trail: on.
A subtle tail for the lead.

**RVB — Room**, always on.
Mix: 12, Decay: 25, Trail: on.
A small room, close and intimate.

## CTL footswitch

On CTL: DST (Green OD), DLY (Analog).

- **CTL off** — Rhythm. Tight, snappy, compressed clean for the percussive thumb-and-pop part. This is the resting state the patch loads into.
- **CTL on** — Lead. A light TS plus a short tail for melodic fills and a solo.

Engage CTL for the fills and any solo. Off for the main part.
