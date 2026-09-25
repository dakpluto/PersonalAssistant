# Waiting on the World to Change (Rhythm Guitar) — John Mayer

From *Continuum* (2006). About 88 BPM, est.
A Curtis Mayfield-style soul groove: clean, warm Strat double-stops and chord fragments with a relaxed feel, and a vocal-like lead.
Mayer's Continuum-era clean is usually described as Dumble or Two-Rock territory. The MayerDumble snaptone is a real Dumble ODS clean capture, so this patch goes straight at it.
Instrument: Stratocaster (HSS). Position 4 (neck+middle) for the double-stops. Neck pickup for the lead.
GP-5 only, Stratocaster (HSS), no pedalboard.

## Module chain

**NR — Gate**, always on.
THRE: 14.
Light.

**PRE — COMP (Ross)**, always on.
Sustain: 30, VOL: 55.
Light compression gives the soul double-stops an even, glassy pop.

**DST — Green OD (TS-808)**, on CTL.
Gain: 28, Tone: 50, VOL: 66.
A TS for the lead, which is Mayer's go-to. Gain 28 keeps it vocal and touch-sensitive rather than saturated.

**AMP/CAB — NAM SnapTone, slot 66: MayerDumble** (always on)
- Built from the `SLAMMIN_DUMBLE_FORD_CLN_BALANCED_S (Dumble ODS #102)` NAM and the Bogner 2x12 EVM12L - SM57 1 - Cap Edge IR, combined into one snaptone.
- Dumble ODS #102 (the Robben Ford amp) clean channel, into a Bogner 2x12 with EVM12L speakers.
- Mayer's Continuum-era clean: Dumble clean into EVM12Ls.
- Gain: 45, VOL: 50, Bass: 50, Middle: 58, Treble: 52
- Gain 45: noticeably under default. This part wants less push than the other MayerDumble patches.
- Bass 50: flat.
- Middle 58: more midrange.
- Treble 52: a touch more top end.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 66 directly.

**EQ — Guitar EQ 2**, always on.
100Hz: -2, 500Hz: +1, 1kHz: +1, 3kHz: 0, 6kHz: -2, VOL: 50.
+1 at 500Hz and 1kHz for warmth and body. The top is trimmed.

**MOD — off.** No modulation. The soul clean stays straight.

**DLY — Analog**, on CTL.
Mix: 14, Time: 340ms, F.Back: 18, Trail: on.
A short, subtle tail for the lead.

**RVB — Room**, always on.
Mix: 14, Decay: 30, Trail: on.
A small room.

## CTL footswitch

On CTL: DST (Green OD), DLY (Analog).

- **CTL off** — Rhythm. Warm, glassy soul double-stops and chord fragments. This is the resting state the patch loads into.
- **CTL on** — Lead. A light TS push plus a subtle analog tail for the vocal-like lead lines and the solo.

Engage CTL for the solo and the melodic fills. Off for the groove.
