# You Don't Know How It Feels (Rhythm Guitar) — Tom Petty

From *Wildflowers* (1994), produced by Rick Rubin. About 92 BPM, est.
A laid-back, dry, head-nodding groove with harmonica and a relaxed strum. Rubin's production keeps everything natural and uncluttered.
Built from the song's overall sound. I haven't verified the exact guitars and amps on the record.
Instrument: Stratocaster (HSS). Position 4 (neck+middle) for the strum. Bridge humbucker for the lead lines.
GP-5 only, Stratocaster (HSS), no pedalboard.

## Module chain

**NR — Gate**, always on.
THRE: 16.
Light.

**PRE — off.** No compressor. The strum should breathe naturally, Rubin-style.

**DST — Green OD (TS-808)**, on CTL.
Gain: 30, Tone: 52, VOL: 68.
A mild push for the lead lines and the solo. It's warm, not hot.

**AMP/CAB — NAM SnapTone, slot 70: GlassyAC30** (always on)
- Built from the `SLAMMIN_VOX_AC30_N_V3_TC0_S` NAM and the Origin Effects British Alnico 2x12 Medium Mix IR, combined into one snaptone.
- Real AC30 Normal channel at volume 3, glassy and clean, into the British Alnico 2x12.
- Petty's jangly clean: glassy AC30 Normal channel.
- Gain: 49, VOL: 50, Bass: 50, Middle: 50, Treble: 50
- Gain 49: a little under default. This part wants less push than the other GlassyAC30 patches.
- Bass 50: flat.
- Middle 50: flat.
- Treble 50: flat.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 70 directly.

**EQ — Guitar EQ 2**, always on.
100Hz: -2, 500Hz: 0, 1kHz: +1, 3kHz: 0, 6kHz: -2, VOL: 50.
Warm and uncluttered. The top is trimmed.

**MOD — off.**

**DLY — Analog**, on CTL.
Mix: 12, Time: 320ms, F.Back: 15, Trail: on.
A barely-there tail behind the lead. Mix 12.

**RVB — Room**, always on.
Mix: 10, Decay: 25, Trail: on.
A small, dry room. This record is intimate.

## CTL footswitch

On CTL: DST (Green OD), DLY (Analog).

- **CTL off** — Rhythm. A warm, dry AC30 strum for the verses and choruses. This is the resting state the patch loads into.
- **CTL on** — Lead. Mild Green OD plus a short analog tail for the lead lines and the solo.

Engage CTL for the solo and the melodic lines. Off for strumming.
