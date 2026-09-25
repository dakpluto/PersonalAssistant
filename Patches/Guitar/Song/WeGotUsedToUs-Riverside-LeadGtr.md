# We Got Used to Us (Lead Guitar) — Riverside

Riverside. BPM est. Moody, melodic, slow. The lead guitar is smooth and vocal: light-to-medium overdrive, lots of sustain, and space from delay and reverb, Gilmour-influenced. Built from the band's general sound; the exact rig on the recording is not verified.
Instrument: Stratocaster (HSS). Use the neck or middle pickup for the softer lead lines, bridge humbucker for the peaks.
GP-5 only, Stratocaster (HSS), no pedalboard.

## Module chain

**NR — Gate**, always on.
THRE: 18.
Moderate gain. 18 is enough for the pauses between lines.

**PRE — COMP**, always on.
Sustain: 35, VOL: 55.
Ross-style leveling and sustain. 35 smooths the pick attack for a vocal lead line.

**DST — Green OD**, on CTL.
Gain: 35, Tone: 50, VOL: 65.
On CTL. A warm push for solo sustain. Gain 35 adds harmonics without going to full distortion.

**AMP/CAB — NAM SnapTone, slot 73: ProgDumble** (always on)
- Built from the `SLAMMIN_DUMBLE_FORD_OD_SMOOTH_S (Dumble ODS #102)` NAM and the V30 UR 4FB 4x12 SM57 1.00in 0.0in 7603 (Mesa V30) IR, combined into one snaptone.
- Dumble ODS #102 overdrive channel, smooth setting, into a Mesa 4x12 with V30s.
- Smooth, singing ballad lead. Dumble overdrive.
- Gain: 47, VOL: 50, Bass: 50, Middle: 55, Treble: 50
- Gain 47: a little under default. This part wants less push than the other ProgDumble patches.
- Bass 50: flat.
- Middle 55: a touch more midrange.
- Treble 50: flat.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 73 directly.

**EQ — Guitar EQ 1**, always on.
125Hz: -1, 400Hz: 0, 800Hz: +2, 1.6kHz: +1, 4kHz: -2, VOL: +50.
+2 at 800Hz brings the lead forward, -2 at 4kHz keeps it round and smooth.

**MOD — off.** No modulation. The lead should stay focused.

**DLY — Tape**, on CTL.
Mix: 25, Time: 480, F.Back: 30, Trail: on.
On CTL. Slow tape repeats for the solo. Time 480ms sits near a dotted-eighth at this tempo. Trail on so the repeats ring out.

**RVB — Plate**, always on.
Mix: 15, Decay: 40, Damp: 50, Trail: off.
Always on. Plate adds smooth space. Damp 50 keeps the tail from getting bright.

## CTL footswitch

On CTL: DST (Green OD), DLY (Tape).

- **CTL off** — Base lead. Light overdrive from the amp, compressed and smooth, dark plate reverb. This is the resting state the patch loads into.
- **CTL on** — Expressive solo. Green OD push for more sustain, plus a slow tape delay.

Engage CTL for the peak melody and solo. Back off for the quieter lead lines.
