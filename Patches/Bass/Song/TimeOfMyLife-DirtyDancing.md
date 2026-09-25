# (I've Had) The Time of My Life — Bill Medley & Jennifer Warnes

From the *Dirty Dancing* soundtrack (1987). About 108 BPM, est.
Bass: Harley Benton P/J, 5-string, passive. GP-5 only.
The low end on the record is punchy late-80s pop. I'm not sure how much of it is synth bass and how much is electric. Either way the target is bright, tight, and punchy, with a polished chorus lift.
Fingers or pick. Both pickups up, J forward. Tone knob around 70%.

## Module chain

**NR — Gate**, always on.
THRE: 14.
Tight stops.

**PRE — COMP4 (Keeley C4)**, always on.
Sustain: 50, Attack: 45, Clip: 40, VOL: 58.
80s-level compression. Every note is even and punchy.

**DST — off.** No drive. It's a clean pop tone.

**AMP/CAB — NAM SnapTone, slot 52: AvalonAD2022** (always on)
- Built from the `Avalon - 38 dB - Chan 1 (Avalon AD2022)` NAM and no cab IR (straight DI), combined into one snaptone.
- Avalon AD2022 Class A preamp at 38 dB. A studio DI, not an amp: no speaker coloration.
- 1987 soundtrack pop. Clean, polished DI bass.
- Gain: 46, VOL: 50, Bass: 55, Middle: 50, Treble: 58
- Gain 46: a little under default. This part wants less push than the other AvalonAD2022 patches.
- Bass 55: a touch more low end.
- Middle 50: flat.
- Treble 58: more top end.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 52 directly.

**EQ — Bass EQ 1**, always on.
33Hz: +1, 150Hz: +1, 600Hz: -2, 2kHz: +2, 8kHz: +1, VOL: 52.
The 600Hz scoop and 2kHz lift give the polished 80s pop curve.

**MOD — B-Chorus (Boss CEB-3)**, on CTL.
Depth: 20, Rate: 0.8, VOL: 55.
A light bass chorus for the choruses. It's a period-correct 80s sheen with a light hand. Depth 20.

**DLY — off.**

**RVB — Plate**, on CTL.
Mix: 12, Decay: 35, Damp: 55, Trail: on.
A small plate so the bass joins the big chorus.

## CTL footswitch

On CTL: MOD (B-Chorus), RVB (Plate).

- **CTL off** — Verses. Tight, dry, punchy. This is the resting state the patch loads into.
- **CTL on** — Choruses and the finale. A light chorus and plate for the big 80s lift.

Engage at each chorus and hold through the key-change finale.
