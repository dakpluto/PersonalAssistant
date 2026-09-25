# Believe (Rhythm Guitar) — Brooks & Dunn

From *Hillbilly Deluxe* (2005). About 66 BPM, est. It won CMA Single and Song of the Year in 2006.
A slow gospel-tinged ballad. It starts intimate, with piano and vocal carrying it, and builds to a huge choir-backed climax.
The guitar starts sparse with clean arpeggios and ends big with a sustained, singing lead.
Built from the song's overall sound. I haven't verified the exact guitars and amps on the record.
Instrument: Stratocaster (HSS). Neck pickup for the arpeggios. Bridge humbucker for the climax lead.
GP-5 only, Stratocaster (HSS), no pedalboard.

## Module chain

**NR — Gate**, always on.
THRE: 14.
Low. Long notes need to decay.

**PRE — Boost (EP Booster)**, on CTL.
Gain: 42, +3dB: on, Bright: off.
Stacks into the Green OD for the climax lead. Adds level so it soars over the choir.

**DST — Green OD (TS-808)**, on CTL.
Gain: 36, Tone: 55, VOL: 64.
A singing, sustained lead tone. Gain 36 plus the Boost gives long sustain without fizz.

**AMP/CAB — NAM SnapTone, slot 62: NashClean** (always on)
- Built from the `CLEANEST - Fender Deluxe Reverb 1965 [Hyper Accuracy]` NAM and the Origin Effects Brown Deluxe 1x12 Medium Mix IR, combined into one snaptone.
- Real 1965 Fender Deluxe Reverb at its cleanest setting, into the Origin Effects Brown Deluxe 1x12.
- Clean Nashville ballad electric. The cleanest Deluxe setting.
- Gain: 50, VOL: 50, Bass: 48, Middle: 52, Treble: 54
- Gain 50: the capture as built.
- Bass 48: low end pulled back a little.
- Middle 52: a touch more midrange.
- Treble 54: a touch more top end.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 62 directly.

**EQ — Guitar EQ 2**, always on.
100Hz: -3, 500Hz: -1, 1kHz: 0, 3kHz: +1, 6kHz: -1, VOL: 50.
The low cut keeps the ambience clear. The top is slightly trimmed.

**MOD — off.** No modulation. Tape and hall give enough movement.

**DLY — Tape**, always on.
Mix: 16, Time: 450ms, F.Back: 25, Trail: on.
About an eighth note at 66 BPM. Warm tape repeats in both states.

**RVB — Hall**, always on.
Mix: 24, Decay: 50, Trail: on.
A church-adjacent hall that fits the gospel theme. Mix 24.

## CTL footswitch

On CTL: PRE (Boost), DST (Green OD).

- **CTL off** — Rhythm. Chimey clean arpeggios with tape echo and hall. Use it for the intimate verses. This is the resting state the patch loads into.
- **CTL on** — Lead. Boost plus Green OD for the soaring climax lead and the melodic fills in the build.

Stay off through the verses. Engage for the build and the final choir section.
