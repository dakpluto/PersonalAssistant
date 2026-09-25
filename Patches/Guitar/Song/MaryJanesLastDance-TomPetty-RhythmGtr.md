# Mary Jane's Last Dance (Rhythm Guitar) — Tom Petty

Tom Petty and the Heartbreakers, 1993. It was the new track on *Greatest Hits*. About 84 BPM, est.
The main riff is a minor-key groove in A minor. Harmonica rides over the top.
The Heartbreakers' guitar sound is built on small combos pushed just into breakup. It's crunchy but never saturated.
Built from the band's general sound. I haven't verified the exact guitars and amps used on this track.
Instrument: Stratocaster (HSS). Position 2 (bridge+middle) for the riff, bridge humbucker for the solo.
GP-5 only, Stratocaster (HSS), no pedalboard.

## Module chain

**NR — Gate**, always on.
THRE: 20.
The AC30 at gain 38 plus a hot pickup hums between riff phrases. 20 cleans that up without chopping the ring-out on the Am chord.

**PRE — off.** The amp already has enough grit for the rhythm.

**DST — Green OD**, on CTL.
Gain: 35, Tone: 55, VOL: 68.
Pushes the already-edgy AC30 into a singing lead. The Tube Screamer mid-hump helps the solo cut through the band. VOL 68 gives about +3dB for the lead.

**AMP/CAB — NAM SnapTone, slot 74: PushedAC30** (always on)
- Built from the `SLAMMIN_VOX_AC30_TB_V7_TC0_B7_T8_PUSH_S` NAM and the Origin Effects British Alnico 2x12 Medium Mix IR, combined into one snaptone.
- Real AC30 Top Boost at volume 7, pushed into crunch, into the British Alnico 2x12.
- Mike Campbell's pushed AC30 crunch.
- Gain: 50, VOL: 50, Bass: 50, Middle: 50, Treble: 58
- Gain 50: the capture as built.
- Bass 50: flat.
- Middle 50: flat.
- Treble 58: more top end.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 74 directly.

**EQ — Guitar EQ 2**, always on.
100Hz: -3, 500Hz: 0, 1kHz: +1, 3kHz: +1, 6kHz: -2, VOL: 50.
Low cut keeps the riff out of the bass's A string. The 1kHz and 3kHz lift adds mid bite. -2 at 6kHz takes off AC30 fizz.

**MOD — off.** No modulation on the riff.

**DLY — Analog**, on CTL.
Mix: 14, Time: 360ms, F.Back: 18, Trail: on.
About an eighth note at 84 BPM. A short, dark tail that thickens the solo without being obvious.

**RVB — Room**, always on.
Mix: 14, Decay: 30, Trail: on.
A small room. Early-90s rock production kept guitars fairly dry. This just stops it from sounding direct-in.

## CTL footswitch

On CTL: DST (Green OD), DLY (Analog).

- **CTL off** — Rhythm. The edge-of-breakup AC30 for the Am riff, verses, and choruses. This is the resting state the patch loads into.
- **CTL on** — Lead. Green OD into the AC30 plus eighth-note analog repeats. For the solo and outro lead lines.

Engage CTL for the solo and the outro. Step off when the riff comes back.
