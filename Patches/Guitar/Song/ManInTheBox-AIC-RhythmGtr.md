# Man in the Box (Rhythm Guitar) — Alice In Chains

From *Facelift* (1990). About 108 BPM, est.
A sludgy, grinding riff with Jerry Cantrell's famous talk-box line, a wah-drenched solo, and a heavy, droning chorus.
As far as I know, the band tuned down a half step on this era of material. Tune to Eb standard to match the record.
The GP-5 has no talk box. CTL uses the Toucher envelope filter, which gives a touch-driven vowel sweep. It's the closest stand-in, and it doubles as the wah for the solo.
Built from the song's overall sound. I haven't verified the exact guitars and amps on the record.
Instrument: Stratocaster (HSS). Bridge humbucker throughout.
GP-5 only, Stratocaster (HSS), no pedalboard.

## Module chain

**NR — Gate**, always on.
THRE: 45.
High gain plus a tube-screamer boost is noisy. 45 keeps the riff stops dead silent.

**PRE — Toucher (envelope filter)**, on CTL.
Sense: 60, Range: 55, Q: 65, Mix: 70, Mode: Guitar.
The talk-box and wah stand-in. The Toucher envelope filter at a high Q of 65 gives a vowel-like "wow" that follows your pick attack. Dig in for a bigger sweep. Mode: Guitar.

**DST — Green OD (TS-808)**, always on.
Gain: 20, Tone: 45, VOL: 70.
An always-on TS boost, low gain and high level. It tightens and pushes the 800 for the grinding Seattle chunk.

**AMP/CAB — NAM SnapTone, slot 71: HotMarshall** (always on)
- Built from the `JCM800 2203 - P5 B5 M5 T5 MV6 G7 - AZG - 700` NAM and the BlendOfAll_dc (Marshall 1960AV) IR, combined into one snaptone.
- Real JCM800 2203 at Gain 7, Master 6: hot rhythm crunch. Into a 1960AV 4x12 mic blend.
- Hot, mid-heavy Marshall rhythm. JCM800 at Gain 7.
- Gain: 57, VOL: 50, Bass: 55, Middle: 62, Treble: 52
- Gain 57: noticeably over default. This part wants more push than the other HotMarshall patches.
- Bass 55: a touch more low end.
- Middle 62: more midrange.
- Treble 52: a touch more top end.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 71 directly.

**EQ — Guitar EQ 2**, always on.
100Hz: 0, 500Hz: +1, 1kHz: +1, 3kHz: 0, 6kHz: -3, VOL: 50.
Mid push for grind. -3 at 6kHz for dark, sludgy fizz control.

**MOD — off.**

**DLY — Analog**, on CTL.
Mix: 14, Time: 330ms, F.Back: 20, Trail: on.
A short tail under the talk-box line and the solo.

**RVB — Room**, always on.
Mix: 10, Decay: 25, Trail: on.
Mostly dry and heavy.

## CTL footswitch

On CTL: PRE (Toucher), DLY (Analog).

- **CTL off** — Rhythm. A boosted JCM800 sludge grind for the riff, the verses, and the chorus drone. This is the resting state the patch loads into.
- **CTL on** — Talk box and lead. The envelope-filter vowel sweep plus a short tail for the "talk box" riff line and the wah solo.

Engage CTL for the talk-box riff sections and the solo. Off for the grinding rhythm.
