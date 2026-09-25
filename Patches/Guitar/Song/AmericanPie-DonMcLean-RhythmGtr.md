# American Pie (Rhythm Guitar) — Don McLean

From *American Pie* (1971). About 138 BPM for the band sections, est. The intro is slow and free-time.
An eight-and-a-half-minute folk-rock epic: a solo-voice intro, then an acoustic-and-piano-led full band strumming through verse after verse.
The record is acoustic-guitar driven. On a Strat, CTL off is a bright acoustic-ish strum. CTL on is a warmer, pushed electric voice for fills and for doubling the melody in later choruses.
Instrument: Stratocaster (HSS). Position 4 (neck+middle) for the strum. Bridge for the pushed voice.
GP-5 only, Stratocaster (HSS), no pedalboard.

## Module chain

**NR — Gate**, always on.
THRE: 12.
Low.

**PRE — COMP (Ross)**, always on.
Sustain: 40, VOL: 55.
Even, acoustic-like strum.

**DST — Green OD (TS-808)**, on CTL.
Gain: 26, Tone: 55, VOL: 66.
A light push for fills and melody doubling in the later, bigger choruses.

**AMP/CAB — NAM SnapTone, slot 63: EdgyTwang** (always on)
- Built from the `EDGY - Fender Deluxe Reverb 1965 [Hyper Accuracy]` NAM and the Origin Effects Brown Deluxe 1x12 Medium Mix IR, combined into one snaptone.
- Real 1965 Deluxe Reverb at the "edgy" setting, just starting to break up, into the Brown Deluxe 1x12.
- Early-70s electric with a little grit. Edgy Deluxe.
- Gain: 48, VOL: 50, Bass: 48, Middle: 45, Treble: 56
- Gain 48: a little under default. This part wants less push than the other EdgyTwang patches.
- Bass 48: low end pulled back a little.
- Middle 45: midrange pulled back a little.
- Treble 56: more top end.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 63 directly.

**EQ — Guitar EQ 2**, always on.
100Hz: -1, 500Hz: -2, 1kHz: 0, 3kHz: +2, 6kHz: +1, VOL: 50.
The 500Hz dip and 3kHz and 6kHz air make it acoustic-adjacent.

**MOD — off.**

**DLY — Analog**, on CTL.
Mix: 12, Time: 330ms, F.Back: 15, Trail: on.
A short tail for the fills.

**RVB — Room**, always on.
Mix: 16, Decay: 32, Trail: on.
A natural room.

## CTL footswitch

On CTL: DST (Green OD), DLY (Analog).

- **CTL off** — Rhythm. Bright, compressed acoustic-ish strum. That's most of this song. This is the resting state the patch loads into.
- **CTL on** — Lead. A warm push plus a short tail for fills and melody doubling.

Stay off for the strum, which is most of the eight minutes. Engage for fills and the big late choruses.
