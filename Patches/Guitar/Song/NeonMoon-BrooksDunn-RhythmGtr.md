# Neon Moon (Rhythm Guitar) — Brooks & Dunn

From *Brand New Man* (1991), released as a single in 1992. About 100 BPM, est.
A lonesome honky-tonk ballad. Steel guitar carries much of the melancholy. The electric sits back with clean strums and arpeggios, and plays melodic fills between lines.
Built from the song's overall sound. I haven't verified the exact guitars and amps on the record.
Instrument: Stratocaster (HSS). Neck or position 4 for the rhythm. Neck pickup for the fills.
GP-5 only, Stratocaster (HSS), no pedalboard.

## Module chain

**NR — Gate**, always on.
THRE: 12.
Low. Ballad notes decay naturally.

**PRE — COMP (Ross)**, always on.
Sustain: 32, VOL: 55.
Light leveling on soft strums.

**DST — Green OD (TS-808)**, on CTL.
Gain: 20, Tone: 55, VOL: 68.
Barely drive. A level and mid push so the fills sit above the steel and the vocal.

**AMP/CAB — NAM SnapTone, slot 62: NashClean** (always on)
- Built from the `CLEANEST - Fender Deluxe Reverb 1965 [Hyper Accuracy]` NAM and the Origin Effects Brown Deluxe 1x12 Medium Mix IR, combined into one snaptone.
- Real 1965 Fender Deluxe Reverb at its cleanest setting, into the Origin Effects Brown Deluxe 1x12.
- Clean, sad two-step electric. Cleanest Deluxe Reverb.
- Gain: 49, VOL: 50, Bass: 46, Middle: 46, Treble: 55
- Gain 49: a little under default. This part wants less push than the other NashClean patches.
- Bass 46: low end pulled back a little.
- Middle 46: midrange pulled back a little.
- Treble 55: a touch more top end.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 62 directly.

**EQ — Guitar EQ 2**, always on.
100Hz: -2, 500Hz: 0, 1kHz: 0, 3kHz: +1, 6kHz: -2, VOL: 50.
A light low cut and a trimmed top.

**MOD — off.** No modulation. The steel supplies the shimmer.

**DLY — Analog**, on CTL.
Mix: 18, Time: 450ms, F.Back: 22, Trail: on.
About a dotted eighth at 100 BPM. Soft repeats for a lonesome trail behind the fills.

**RVB — Spring**, always on.
Mix: 22, Decay: 42, Trail: on.
Spring at 22 for the empty-barroom space.

## CTL footswitch

On CTL: DST (Green OD), DLY (Analog).

- **CTL off** — Rhythm. Warm, glassy clean with spring for the verse and chorus strums. This is the resting state the patch loads into.
- **CTL on** — Lead. A slight push plus analog repeats for the melodic fills and the solo.

Engage CTL for fills and the solo. Step off before the vocal returns.
