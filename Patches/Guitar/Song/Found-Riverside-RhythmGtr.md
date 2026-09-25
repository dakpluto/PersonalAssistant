# Found (The Unexpected Flaw of Searching) (Rhythm Guitar) — Riverside

Riverside, from Love, Fear and the Time Machine. BPM est. Open, art-rock rhythm guitar: clean, chorused arpeggios and chords for the verses, thicker crunch for the choruses. Built from the band's general sound; the exact rig on the recording is not verified.
Instrument: Stratocaster (HSS). Use the neck or middle pickup for verses, bridge pickup for choruses.
GP-5 only, Stratocaster (HSS), no pedalboard.

## Module chain

**NR — Gate**, always on.
THRE: 12.
Clean tone. 12 is enough for single-coil hum in the rests.

**PRE — COMP**, always on.
Sustain: 30, VOL: 55.
Light leveling for even arpeggios.

**DST — Green OD**, on CTL.
Gain: 25, Tone: 50, VOL: 62.
On CTL. Mild crunch for the chorus. Gain 25 stays open and does not fill up the space.

**AMP/CAB — NAM SnapTone, slot 68: ClassicMarshall** (always on)
- Built from the `JCM800 2203 - P5 B5 M5 T5 MV5 G4 - AZG - 700` NAM and the V7X_dc (Marshall 1960AV) IR, combined into one snaptone.
- Real JCM800 2203 at Gain 4, Master 5: classic edge-of-crunch Marshall. Into a 1960AV 4x12.
- No Mesa Mark capture on hand. A JCM800 at low gain gives the edge the part needs.
- Gain: 50, VOL: 50, Bass: 50, Middle: 50, Treble: 45
- Gain 50: the capture as built.
- Bass 50: flat.
- Middle 50: flat.
- Treble 45: top end pulled back a little.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 68 directly.

**EQ — Guitar EQ 2**, always on.
100Hz: -2, 500Hz: -1, 1kHz: 0, 3kHz: +1, 6kHz: +1, VOL: 50.
Low cut leaves room for the bass. Small lift at 3kHz and 6kHz for chime.

**MOD — A-Chorus**, always on.
Depth: 20, Rate: 0.6, Tone: 50.
Light hand. Depth 20 and a slow 0.6Hz rate add width to the arpeggios without seasick movement.

**DLY — off.** No delay. Keeps the rhythm clean and rhythmic.

**RVB — Hall**, on CTL.
Mix: 15, Decay: 40, Trail: off.
On CTL. Opens the chorus. Mix 15 gives lift without washing out chords.

## CTL footswitch

On CTL: DST (Green OD), RVB (Hall).

- **CTL off** — Verse rhythm. Clean, lightly chorused, close to dry. Arpeggios and open chords. This is the resting state the patch loads into.
- **CTL on** — Chorus rhythm. Green OD adds a mild crunch and a hall reverb opens the space.

Engage CTL for the chorus. Back off for the verse.
