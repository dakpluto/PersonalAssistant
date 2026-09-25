# In Two Minds (Lead Guitar) — Riverside

Riverside, prog rock/metal. BPM est. The lead guitar here is a fat, singing, sustained modern-prog lead: overdriven but articulate, with long delay tails behind it, in the Gilmour-influenced tradition. Built from the band's general sound; the exact guitar and amp on the recording are not verified.
Instrument: Stratocaster (HSS). Use the bridge humbucker for leads.
GP-5 only, Stratocaster (HSS), no pedalboard.

## Module chain

**NR — Gate**, always on.
THRE: 25.
Gain plus a boost on top. 25 controls hiss and single-coil noise without cutting held-note decay.

**PRE — Boost**, on CTL.
Gain: 60, +3dB: on, Bright: off.
On CTL. Gain 60 with +3dB adds level and sustain for solos. Bright off keeps it warm.

**DST — Green OD**, always on.
Gain: 30, Tone: 55, VOL: 60.
Always on, tightens the low end and pushes the amp. Tube Screamer style, Gain 30 is a push, not a drive.

**AMP/CAB — NAM SnapTone, slot 73: ProgDumble** (always on)
- Built from the `SLAMMIN_DUMBLE_FORD_OD_SMOOTH_S (Dumble ODS #102)` NAM and the V30 UR 4FB 4x12 SM57 1.00in 0.0in 7603 (Mesa V30) IR, combined into one snaptone.
- Dumble ODS #102 overdrive channel, smooth setting, into a Mesa 4x12 with V30s.
- Smooth, singing prog lead in the Gilmour mold. Dumble overdrive.
- Gain: 53, VOL: 50, Bass: 45, Middle: 60, Treble: 55
- Gain 53: a little over default. This part wants more push than the other ProgDumble patches.
- Bass 45: low end pulled back a little.
- Middle 60: more midrange.
- Treble 55: a touch more top end.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 73 directly.

**EQ — Guitar EQ 2**, always on.
100Hz: -3, 500Hz: +1, 1kHz: +2, 3kHz: +2, 6kHz: -1, VOL: 50.
Low cut for tightness. +2 at 1kHz and 3kHz makes the lead sing and cut. -1 at 6kHz removes fizz.

**MOD — off.** No modulation. Lead stays focused.

**DLY — Analog**, on CTL.
Mix: 25, Time: 420, Feedback: 30, Trail: on.
On CTL. Long analog repeats for solos. Time 420ms is near a dotted-eighth feel at this tempo. Trail on so repeats ring out when CTL turns off.

**RVB — Hall**, always on.
Mix: 12, Decay: 35, Trail: off.
Always on. Small amount of space so the lead sits in the mix.

## CTL footswitch

On CTL: PRE (Boost), DLY (Analog).

- **CTL off** — Base lead. Driven, articulate, singing, with a short hall. Good for melodic lead lines and the main lead voice. This is the resting state the patch loads into.
- **CTL on** — Solo lift. Clean boost for more level and sustain, plus a long analog delay behind the notes.

Engage CTL for solos and the big held notes. Back off for melodic lead lines and fills.
