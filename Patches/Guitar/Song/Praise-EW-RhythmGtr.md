# Praise (Rhythm Guitar) — Elevation Worship

Elevation Worship, featuring Brandon Lake, Chris Brown, and Chandler Moore. From *Can You Imagine?* (2023).
Upbeat gospel-pop worship anthem. About 127 BPM, est. I haven't verified the tempo, so check the dotted-eighth delay time against the recording (see DLY below).
This is not an ambient slow-burner. It's a driving, celebratory song: handclap-and-drum groove, big shout choruses, a long "I'll praise" bridge.
Built from Elevation's general guitar sound. I haven't verified the exact parts or gear on this recording.
The guitar job here is mostly rhythm: pushing eighth notes and tight chord stabs that lock with the kick. Lead lines are short melodic hooks over the chorus and bridge.
Instrument: Stratocaster (HSS). Position 2 or 4 for the verse chops. Bridge humbucker for the chorus drive and lead hooks.
GP-5 only, Stratocaster (HSS), no pedalboard.

## Module chain

**NR — Gate**, always on.
THRE: 22.
A bit higher than a swell patch. There are no volume swells here, and the gate cleans up the gaps between stabs.

**PRE — Boost (EP Booster)**, on CTL.
Gain: 40, +3dB: on, Bright: off.
Level and push for the lead hooks. It hits the Green OD harder for more sustain. Bright off keeps the top from getting spiky on the V30.

**DST — Green OD**, always on.
Gain: 30, Tone: 60, VOL: 62.
The core rhythm grit. Low gain keeps eighth-note chugs tight and articulate at 127 BPM. Tone 60 cuts through the keys and the choir.

**AMP/CAB — NAM SnapTone, slot 67: WorshipAC30** (always on)
- Built from the `SLAMMIN_VOX_AC30_TB_V3_TC0_B4_T7_BRIGHT_S` NAM and the Origin Effects British Alnico 2x12 Medium Mix IR, combined into one snaptone.
- Real Vox AC30 Top Boost, Bright, into the Origin Effects British Alnico 2x12.
- Chimey AC30 Top Boost: the modern worship standard.
- Gain: 48, VOL: 50, Bass: 45, Middle: 50, Treble: 58
- Gain 48: a little under default. This part wants less push than the other WorshipAC30 patches.
- Bass 45: low end pulled back a little.
- Middle 50: flat.
- Treble 58: more top end.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 67 directly.

**EQ — Guitar EQ 2**, always on.
100Hz: -3, 500Hz: -1, 1kHz: +1, 3kHz: +2, 6kHz: 0, VOL: 50.
The low cut keeps the rhythm tight against the bass. A slight 500Hz cut removes boxiness. The 1kHz and 3kHz lift puts the pick attack forward. 6kHz stays flat because the V30 and AC30 already have enough top.

**MOD — off.** A driving rhythm part at this tempo doesn't need movement. Chorus would soften the attack.

**DLY — Tape**, on CTL.
Mix: 25, Time: 354ms, F.Back: 28, Trail: on.
Dotted eighth at 127 BPM (472ms x 0.75). If the real tempo differs, set Time = 45000 / BPM.
Off for rhythm. A dotted-eighth under fast eighth-note strumming turns into mush.
On for leads. It gives the hooks the classic worship cascade. Trail on so the last repeats ring out when you step off.

**RVB — Plate**, always on.
Mix: 18, Decay: 35, Damp: 50, Trail: on.
A short, bright plate for space without wash. A big hall at this tempo would smear the rhythm.

## CTL footswitch

On CTL: PRE (Boost), DLY (Tape).

- **CTL off** — Rhythm. AC30 edge plus the Green OD, tight and dry apart from a short plate. Use it for the verses, the pushing chorus strumming, and the bridge chugs. This is the resting state the patch loads into.
- **CTL on** — Lead. The Boost pushes the Green OD into more sustain and level, and the dotted-eighth Tape delay comes in. Use it for melodic hooks, fills between vocal lines, and any solo lines over the final choruses.

Engage CTL for the lead hooks. Step off when you're back on the rhythm part.
