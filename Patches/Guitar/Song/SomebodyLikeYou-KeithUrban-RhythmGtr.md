# Somebody Like You (Rhythm Guitar) — Keith Urban

From *Golden Road* (2002). About 120 BPM, est.
Upbeat country-pop. A bright, driving, percussive rhythm, then Urban's hot, twangy lead breaks.
The famous intro riff is Urban's ganjo, a six-string banjo. The GP-5 can't make a banjo. This patch gets the brightest, most percussive Strat version of it.
Built from the song's overall sound. I haven't verified the exact amps on the record.
Instrument: Stratocaster (HSS). Position 2 (bridge + middle) for the rhythm and the intro riff. Bridge humbucker for the leads.
GP-5 only, Stratocaster (HSS), no pedalboard.

## Module chain

**NR — Gate**, always on.
THRE: 18.
Light. Tight stops on the driving rhythm.

**PRE — COMP4 (Keeley C4)**, always on.
Sustain: 55, Attack: 40, Clip: 40, VOL: 56.
Country-pop needs squash. It makes the fast picked figures snap and evens out the banjo-style intro on a Strat.

**DST — Green OD (TS-808)**, on CTL.
Gain: 35, Tone: 60, VOL: 66.
The lead push. A TS into an edge-of-breakup Deluxe gives the hot, mid-forward twang of a modern country solo. Tone 60 keeps it bright.

**AMP/CAB — NAM SnapTone, slot 63: EdgyTwang** (always on)
- Built from the `EDGY - Fender Deluxe Reverb 1965 [Hyper Accuracy]` NAM and the Origin Effects Brown Deluxe 1x12 Medium Mix IR, combined into one snaptone.
- Real 1965 Deluxe Reverb at the edge of breakup, into the Brown Deluxe 1x12.
- Twang with a little hair. Exactly the country-pop rhythm voice.
- Gain: 48, VOL: 70, Bass: 46, Middle: 52, Treble: 58
- Gain 48: just under the capture, so the rhythm stays crisp.
- Bass 46: tighter lows for a fast song.
- Middle 52: a small lift.
- Treble 58: more snap and sparkle.
- VOL 70: the level Michael set for this snaptone in the 2026-10-01 VOL audit. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 63 directly.

**EQ — Guitar EQ 2**, always on.
100Hz: -3, 500Hz: -1, 1kHz: +1, 3kHz: +2, 6kHz: 0, VOL: 50.
Tight lows and a 3kHz lift for pick attack.

**MOD — off.**

**DLY — Analog**, on CTL.
Mix: 18, Time: 375ms, Feedback: 20, Trail: on.
A dotted eighth at 120 BPM. Fills the space around the lead breaks.

**RVB — Spring**, always on.
Mix: 12, Decay: 30, Trail: on.
A dash of Fender spring.

## CTL footswitch

On CTL: DST (Green OD), DLY (Analog).

- **CTL off** — Rhythm. Bright, compressed, edge-of-breakup Deluxe for the driving rhythm and the intro riff. This is the resting state the patch loads into.
- **CTL on** — Lead. TS-pushed Deluxe plus dotted-eighth delay for the solos.

Engage CTL for the lead breaks. Drop back for the rhythm.
