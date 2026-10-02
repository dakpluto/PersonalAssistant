# I Will Always Love You (Rhythm Guitar) — Dolly Parton

Dolly Parton, 1974. Written and recorded by Dolly. About 66 BPM, est.
This is Dolly's original country ballad, not the Whitney Houston power-ballad version.
Sparse Nashville arrangement. The guitar supports the vocal and never competes with it.
I haven't verified exactly which guitar parts are on the record. This is built from the song's overall Nashville-ballad sound.
Instrument: Stratocaster (HSS). Neck or position 4 (neck+middle) for rhythm. Neck pickup for the fills.
GP-5 only, Stratocaster (HSS), no pedalboard.

## Module chain

**NR — Gate**, always on.
THRE: 12.
Low. Ballad notes need to decay naturally. This only catches single-coil hum between phrases.

**PRE — COMP (Ross)**, always on.
Sustain: 35, VOL: 55.
Ross-style squash is a country staple. 35 evens out soft strums and adds a bit of sustain to held chords. It doesn't sound pumped.

**DST — Green OD**, on CTL.
Gain: 18, Tone: 55, VOL: 68.
Barely any drive. Mostly a level and mid push so the fills sit above the vocal. Gain 18 just rounds the attack.

**AMP/CAB — NAM SnapTone, slot 61: TwinClean** (always on)
- Built from the `CLEANEST - Fender Deluxe Reverb 1965 [Hyper Accuracy]` NAM and the TWIN REVERB __ CLEAN (vulturized Twin) IR, combined into one snaptone.
- 1965 blackface Deluxe Reverb at its cleanest setting. It shares the Twin's blackface preamp circuit, so here it's the amp half of a Twin clean, into a real Twin 2x12 (JBL D120F) IR. Rebuilt 2026-09-26: the original TwinClean used the Tim R Twin Normal-channel capture, which was dropped for being too quiet.
- Clean, glassy Nashville electric.
- Gain: 49, VOL: 75, Bass: 45, Middle: 45, Treble: 58
- Gain 49: a little under default. This part wants less push than the other TwinClean patches.
- Bass 45: low end pulled back a little.
- Middle 45: midrange pulled back a little.
- Treble 58: more top end.
- VOL 75: the level Michael set for this snaptone in the 2026-10-01 VOL audit. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 61 directly.

**EQ — Guitar EQ 2**, always on.
100Hz: -2, 500Hz: 0, 1kHz: 0, 3kHz: +1, 6kHz: -2, VOL: 50.
Low cut makes room for the bass and piano. +1 at 3kHz gives the pick attack some definition. -2 at 6kHz takes off the string zing.

**MOD — off.** No modulation. Nashville ballad clean stays straight.

**DLY — Analog**, on CTL.
Mix: 18, Time: 450ms, F.Back: 20, Trail: on.
About an eighth note at 66 BPM. Two or three soft repeats thicken the fills between vocal lines. Trail on so the last repeat doesn't get chopped when you step off CTL.

**RVB — Spring**, always on.
Mix: 22, Decay: 40, Trail: on.
Classic Fender spring. It gives the room a little air. 22 keeps the chords from going wet.

## CTL footswitch

On CTL: DST (Green OD), DLY (Analog).

- **CTL off** — Rhythm. Clean compressed Twin with spring. Soft strums and arpeggios under the verses and choruses. This is the resting state the patch loads into.
- **CTL on** — Lead. About +3dB of level from the Green OD, a slight edge, and eighth-note analog repeats. Use it for the fills between vocal phrases and the instrumental turnarounds.

Engage CTL for fills and turnarounds. Step off before Dolly comes back in. During the spoken section, stay on CTL off and play very softly.
