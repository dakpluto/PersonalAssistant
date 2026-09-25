# Bright Size Life (Guitar) — Pat Metheny

Pat Metheny, 1976. BPM est., brisk swing. Metheny is known for a warm, round, dark clean tone on a hollowbody, neck pickup, with a fluid, slightly compressed legato feel on the head and solos. The exact amp and studio chain on this record are not verified, so this is built from his general sound.
Instrument: Stratocaster (HSS). A Strat is much brighter and snappier than a hollowbody, so the patch pulls the highs down hard. Use the neck pickup, tone knob around 4-5, and pick with the fleshy part of the pick or thumb-side to soften the attack.
GP-5 only, Stratocaster (HSS), no pedalboard.

## Module chain

**NR — Gate**, always on.
THRE: 10.
Clean tone with single-coil hum risk. 10 is gentle and will not cut note decay.

**PRE — COMP**, always on.
Sustain: 30, VOL: 55.
Light Ross-style leveling. 30 evens the chord and single-note attack and adds a little sustain, but keeps the dynamics.

**DST — Green OD**, on CTL.
Gain: 12, Tone: 40, VOL: 65.
On CTL. Gain 12 is a warm push, not overdrive. Tone 40 keeps it dark. VOL 65 gives a small lead lift.

**AMP/CAB — NAM SnapTone, slot 64: BrightTwin** (always on)
- Built from the `Tim R Fender TwinVerb Vibrato Bright (Twin Reverb)` NAM and the TWIN REVERB __ BALANCED (vulturized Twin) IR, combined into one snaptone.
- Real Twin Reverb, Vibrato channel with Bright on, into the Twin cab IR (balanced blend).
- Warm, round jazz clean. The Twin Vibrato channel is rounder than the Normal.
- Gain: 50, VOL: 50, Bass: 55, Middle: 50, Treble: 35
- Gain 50: the capture as built.
- Bass 55: a touch more low end.
- Middle 50: flat.
- Treble 35: top end pulled back noticeably.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 64 directly.

**EQ — Guitar EQ 1**, always on.
125Hz: 0, 400Hz: +2, 800Hz: 0, 1.6kHz: -2, 4kHz: -5, VOL: +50.
Hollowbody voicing. +2 at 400Hz for woody warmth, -2 at 1.6kHz and -5 at 4kHz to remove the Strat's bite and quack.

**MOD — off.** No modulation. The record is dry and natural.

**DLY — Tape**, on CTL.
Mix: 14, Time: 320, F.Back: 22, Trail: on.
On CTL. Soft, dark repeats for lead lines. Mix 14 and F.Back 22 keep it in the background. Trail on so repeats ring out when CTL turns off.

**RVB — Room**, always on.
Mix: 12, Decay: 25, Trail: off.
Always on. A small natural room. Mix 12 gives some space without washing out chords.

## CTL footswitch

On CTL: DST (Green OD), DLY (Tape).

- **CTL off** — Comping and chordal parts. Warm, dark, clean, close to dry with a small room. This is the resting state. This is the resting state the patch loads into.
- **CTL on** — Head melody and solos. A mild push adds sustain and a little bloom, and a tape delay adds a soft trailing ambience.

Engage CTL for the melodic head and solos. Back off for chords and comping.
