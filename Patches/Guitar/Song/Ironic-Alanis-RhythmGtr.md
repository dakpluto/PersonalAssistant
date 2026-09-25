# Ironic (Rhythm Guitar) — Alanis Morissette

From *Jagged Little Pill* (1995). About 116 BPM, est.
Quiet, acoustic-led verses that slam into a big, distorted mid-90s alt-rock chorus.
On a Strat, CTL off plays the verse role as a clean, compressed acoustic stand-in. CTL on is the featured electric sound: the distorted chorus wall and any lead lines.
Built from the song's overall sound. I haven't verified the exact guitars and amps on the record.
Instrument: Stratocaster (HSS). Neck or position 4 for the verses. Bridge humbucker for the chorus.
GP-5 only, Stratocaster (HSS), no pedalboard.

## Module chain

**NR — Gate**, always on.
THRE: 25.
The Rat is noisy. 25 cleans up the chorus stops.

**PRE — COMP (Ross)**, always on.
Sustain: 38, VOL: 55.
Compression gives the verse strum an even, acoustic-like pop.

**DST — Darktale (ProCo Rat)**, on CTL.
Gain: 55, Filter: 45, VOL: 62.
A ProCo Rat, the quintessential 90s alt-rock distortion. Gain 55 is thick and fuzzy-edged.

**AMP/CAB — NAM SnapTone, slot 68: ClassicMarshall** (always on)
- Built from the `JCM800 2203 - P5 B5 M5 T5 MV5 G4 - AZG - 700` NAM and the V7X_dc (Marshall 1960AV) IR, combined into one snaptone.
- Real JCM800 2203 at Gain 4, Master 5: classic edge-of-crunch Marshall. Into a 1960AV 4x12.
- 90s radio rock. JCM800 at Gain 4 is barely breaking up and cleans up with the guitar volume.
- Gain: 49, VOL: 50, Bass: 48, Middle: 50, Treble: 58
- Gain 49: a little under default. This part wants less push than the other ClassicMarshall patches.
- Bass 48: low end pulled back a little.
- Middle 50: flat.
- Treble 58: more top end.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 68 directly.

**EQ — Guitar EQ 2**, always on.
100Hz: -3, 500Hz: -1, 1kHz: 0, 3kHz: +2, 6kHz: 0, VOL: 50.
A low cut, a slight 500Hz dip for less box, and 3kHz air for acoustic-like sparkle on the verses.

**MOD — off.**

**DLY — off.**

**RVB — Room**, on CTL.
Mix: 14, Decay: 30, Trail: on.
A small room fills out the chorus wall.

## CTL footswitch

On CTL: DST (Darktale), RVB (Room).

- **CTL off** — Verses. A clean, compressed, chimey strum standing in for the acoustic. This is the resting state the patch loads into.
- **CTL on** — Chorus and lead. The Rat distortion wall with a small room, for the choruses and any lead lines.

Stomp CTL at each "It's like rain on your wedding day" chorus. Off for the verses.
