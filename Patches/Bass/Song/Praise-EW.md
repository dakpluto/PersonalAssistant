# Praise — Elevation Worship

Elevation Worship, featuring Brandon Lake, Chris Brown, and Chandler Moore. From *Can You Imagine?* (2023).
Upbeat gospel-pop worship anthem. About 127 BPM, est. I haven't verified the tempo.
The bass role is driving and punchy. It locks with the kick through the verses, then digs in for the big shout choruses and the long "I'll praise" bridge.
Built from Elevation's general bass sound. I haven't verified the exact parts or gear on this recording. The low end on modern Elevation records may also be layered with synth bass. This patch covers the electric part.
Instrument: Harley Benton P/J (passive 5-string). Both pickup volumes full, tone about 70%. The J adds definition to the P's thump so eighth notes stay articulate at this tempo.
GP-5 only, P/J bass, no pedalboard.

## Module chain

**NR — Gate**, always on.
THRE: 10.
Just enough to kill hum between phrases without clipping note tails.

**PRE — COMP4**, always on.
Sustain: 50, Attack: 35, Clip: 40, VOL: 58.
Evens out driving eighth notes so every note hits the same level. Attack 35 lets some pick or finger transient through, so the groove stays punchy.

**DST — Bass OD**, on CTL.
Gain: 32, Blend: 35, VOL: 55, Bass: 55, Treble: 50.
Low-gain grit for the choruses and bridge. Blend 35 keeps most of the clean low end intact. The drive only adds growl on top.

**AMP/CAB — NAM SnapTone, slot 59: WorshipSVT** (always on)
- Built from the `SVT CLEAN PUSHED (SVT-CL)` NAM and the Ampeg SVT Bright Beta52 IR, combined into one snaptone.
- Real Ampeg SVT-CL on the clean-pushed setting, into a bright, Beta 52-miked SVT 4x10 IR.
- Elevation-style worship bass: pushed SVT with a bright 4x10 top end.
- Gain: 50, VOL: 50, Bass: 58, Middle: 52, Treble: 48
- Gain 50: the capture as built.
- Bass 58: more low end.
- Middle 52: a touch more midrange.
- Treble 48: top end pulled back a little.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 59 directly.

**EQ — Bass EQ 1**, always on.
33Hz: 0, 150Hz: +2, 600Hz: -2, 2kHz: +2, 8kHz: -2, VOL: 52.
150Hz for punch. The 600Hz cut clears boxiness from the P pickup. 2kHz for articulation. 8kHz down to kill string and fret noise. 33Hz stays flat, since the low B already carries plenty of sub.

**MOD — off.**
**DLY — off.**
**RVB — off.** A driving bass part at 127 BPM stays dry and tight. Reverb would blur it against the kick.

## CTL footswitch

On CTL: DST (Bass OD).

- **CTL off** — Clean, compressed SVT punch. Use it for the verses and pre-choruses. This is the resting state the patch loads into.
- **CTL on** — Bass OD growl on top of the same tone. Use it for the choruses and the bridge build, where the band gets loud.

Engage CTL at the first big chorus. Step off for the verses and any breakdown.
