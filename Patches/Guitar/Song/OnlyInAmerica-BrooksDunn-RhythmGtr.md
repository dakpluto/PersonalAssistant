# Only in America (Rhythm Guitar) — Brooks & Dunn

From *Steers & Stripes* (2001). About 120 BPM, est.
An arena anthem. It's closer to heartland rock than honky-tonk, with big open-chord crunch and a soaring chorus.
Built from the song's overall sound. I haven't verified the exact guitars and amps on the record.
Instrument: Stratocaster (HSS). Bridge humbucker for the crunch rhythm and the lead.
GP-5 only, Stratocaster (HSS), no pedalboard.

## Module chain

**NR — Gate**, always on.
THRE: 28.
The JTM45 at gain 48 hisses between chords. 28 stops that without cutting ringing chords short.

**PRE — Boost (EP Booster)**, on CTL.
Gain: 45, +3dB: on, Bright: off.
Pushes the JTM45 into lead saturation and adds level for the solo.

**DST — off.** No pedal drive. The amp handles the crunch.

**AMP/CAB — NAM SnapTone, slot 69: BritishCrunch** (always on)
- Built from the `Marshall JTM45 I Crunch BAL DI` NAM and the Origin Effects British Straight 4x12 Medium Mix IR, combined into one snaptone.
- Real Marshall JTM45 crunch, into the Origin Effects British Straight 4x12.
- Arena-country crunch. JTM45, the same amp family as the old UK 45 model, but a real capture.
- Gain: 46, VOL: 50, Bass: 50, Middle: 58, Treble: 56
- Gain 46: a little under default. This part wants less push than the other BritishCrunch patches.
- Bass 50: flat.
- Middle 58: more midrange.
- Treble 56: more top end.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 69 directly.

**EQ — Guitar EQ 2**, always on.
100Hz: -3, 500Hz: 0, 1kHz: +1, 3kHz: +1, 6kHz: -2, VOL: 50.
Low cut tightens the chords. A slight mid-presence lift. The top is trimmed.

**MOD — off.**

**DLY — Analog**, on CTL.
Mix: 15, Time: 375ms, F.Back: 22, Trail: on.
An eighth note at 120 BPM. It thickens the solo.

**RVB — Hall**, always on.
Mix: 14, Decay: 35, Trail: on.
A small hall for an arena-sized sense of space. Mix 14 keeps the rhythm tight.

## CTL footswitch

On CTL: PRE (Boost), DLY (Analog).

- **CTL off** — Rhythm. JTM45 crunch for the verses and the big chorus chords. This is the resting state the patch loads into.
- **CTL on** — Lead. Boosted JTM45 plus analog repeats for the solo and the melodic fills.

Engage CTL for the solo. Stay off for the chord work.
