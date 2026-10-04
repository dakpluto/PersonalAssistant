# What About Now (Rhythm Guitar) — Daughtry

From *Daughtry* (2006). About 74 BPM, est.
A modern-rock power ballad. Clean, open arpeggios under the verses, then a big driven chorus and a melodic solo.
Built from the song's overall sound. I haven't verified the exact guitars and amps on the record.
Instrument: Stratocaster (HSS). Neck or position 2 for the clean verses. Bridge humbucker for the chorus and solo.
GP-5 only, Stratocaster (HSS), no pedalboard.

## Module chain

**NR — Gate**, always on.
THRE: 20.
Light. It only has to catch hiss when the crunch box is on. The clean arpeggios ring out untouched.

**PRE — COMP4 (Keeley C4)**, always on.
Sustain: 40, Attack: 50, Clip: 35, VOL: 55.
Evens out the verse arpeggios so every note of the pattern speaks. Attack 50 keeps the pick edge.

**DST — La Charger (Crunch Box)**, on CTL.
Gain: 50, Tone: 55, VOL: 64.
The chorus wall. A crunch box into a clean amp gives a tight, modern ballad crunch without the mud of a cranked amp. Gain 50 keeps chords defined.

**AMP/CAB — NAM SnapTone, slot 66: MayerDumble** (always on)
- Built from the `SLAMMIN_DUMBLE_FORD_CLN_BALANCED_S` NAM (Dumble ODS #102) and the Bogner 2x12 EVM12L (SM57, cap edge) IR, combined into one snaptone.
- Real Dumble ODS clean channel, into a closed-back 2x12 with EVM12Ls.
- Big, clean headroom for the verses. It takes the crunch box well for the chorus.
- Gain: 45, VOL: 70, Bass: 48, Middle: 52, Treble: 55
- Gain 45: a little under the capture, so the clean verses stay clean with a humbucker.
- Bass 48: low end pulled back a little so the driven chorus stays tight.
- Middle 52: a small lift.
- Treble 55: a touch more sparkle on the arpeggios.
- VOL 70: the level Michael set for this snaptone in the 2026-10-01 VOL audit. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 66 directly.

**EQ — Guitar EQ 2**, always on.
100Hz: -2, 500Hz: -1, 1kHz: +1, 3kHz: +2, 6kHz: -1, VOL: 50.
Low cut and a 3kHz lift so the guitar sits around the vocal. -1 at 6kHz takes the fizz off the crunch box.

**MOD — A-Chorus**, always on.
Depth: 15, Rate: 0.6, Tone: 55.
Light hand. A bit of width on the clean arpeggios. It disappears under the distortion.

**DLY — Pure**, on CTL.
Mix: 18, Time: 608ms, F.Back: 25, Trail: on.
A dotted eighth at 74 BPM. Spreads the big chorus and the solo. Trail on lets it ring out when you drop back.

**RVB — Hall**, always on.
Mix: 18, Decay: 40, Trail: on.
Ballad space. Enough to float the verse, not enough to wash the chorus.

## CTL footswitch

On CTL: DST (La Charger), DLY (Pure).

- **CTL off** — Rhythm. Clean, compressed arpeggios with light chorus and hall. This is the resting state the patch loads into.
- **CTL on** — Lead. Crunch-box chorus wall plus dotted-eighth delay. Use it for the choruses and the solo.

Engage CTL at the chorus. Drop back for the verses.
