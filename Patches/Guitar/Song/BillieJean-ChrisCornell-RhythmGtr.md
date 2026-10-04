# Billie Jean (Rhythm Guitar) — Chris Cornell

From *Carry On* (2007). The full-band studio version, not the acoustic live one. About 70 BPM, est.
Cornell turns the Michael Jackson hit into a slow, dark, brooding blues-rock ballad. Moody, sparse guitar under the verses, then it swells into a heavy, grungy climax.
Built from the song's overall sound. I haven't verified the exact guitars and amps on the record.
Instrument: Stratocaster (HSS). Neck or position 2 for the verses. Bridge humbucker for the heavy build and the fills.
GP-5 only, Stratocaster (HSS), no pedalboard.

## Module chain

**NR — Gate**, always on.
THRE: 22.
Catches hiss when the RAT is on. Low enough that sparse verse notes decay naturally.

**PRE — off.** The Klon in the capture already gives the amp its push.

**DST — Darktale (ProCo RAT)**, on CTL.
Gain: 45, Filter: 45, VOL: 62.
The heavy build. A RAT into a Klon-pushed Deluxe gives a thick, grungy wall, a nod to Cornell's Soundgarden roots. Gain 45 keeps chords defined. Filter 45 keeps it from going harsh.

**AMP/CAB — NAM SnapTone, slot 78: Fen65DlxKl** (always on)
- A full amp + cab capture, not a NAM paired with an IR: a Fender '65 Deluxe Reverb (Volume 5, Tone 6, Bass 4) with a Klon Centaur (Gain 10) in front.
- Edge-of-breakup Deluxe with the Klon's mid push already in the tone. Michael checked it 2026-10-04: "very nice".
- Dark, bluesy edge-of-breakup for the verses. It takes the RAT well for the heavy build.
- Gain: 40, VOL: 70, Bass: 50, Middle: 52, Treble: 44
- Gain 40: under the capture, so the verses stay moody and only lightly broken up. Dig in for more hair.
- Bass 50: flat.
- Middle 52: a small lift. The Klon already pushes the mids.
- Treble 44: top end pulled back for the dark, brooding verse tone.
- VOL 70: the level Michael set for this snaptone in the 2026-10-04 VOL audit. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 78 directly.

**EQ — Guitar EQ 2**, always on.
100Hz: -2, 500Hz: +1, 1kHz: +1, 3kHz: -1, 6kHz: -2, VOL: 50.
Warm mids, softer top. Keeps the tone dark and stops the RAT from getting fizzy.

**MOD — off.**

**DLY — Analog**, on CTL.
Mix: 20, Time: 643ms, Feedback: 28, Trail: on.
A dotted eighth at 70 BPM. Long, dark repeats behind the heavy build and the fills. Trail on lets them ring out when you drop back.

**RVB — Spring**, always on.
Mix: 20, Decay: 40, Trail: on.
Moody Fender spring for the sparse verses.

## CTL footswitch

On CTL: DST (Darktale), DLY (Analog).

- **CTL off** — Rhythm. Dark, edge-of-breakup Deluxe with spring for the verses. This is the resting state the patch loads into.
- **CTL on** — Lead. RAT-driven wall plus dotted-eighth delay for the heavy choruses, the climax and the fills.

Engage CTL as the song swells. Drop back for the verses.
