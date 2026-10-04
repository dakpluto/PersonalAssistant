# Billie Jean — Chris Cornell

From *Carry On* (2007). The full-band studio version, not the acoustic live one. About 70 BPM, est.
Bass: Harley Benton P/J, 5-string, passive. GP-5 only.
The famous Billie Jean line, slowed down and darkened. It carries the verses, so it needs to be warm, round and up front. Then it weighs in under the heavy build.
Built from the song's overall sound. I haven't verified who played bass on the record or their rig.
Fingers. P forward. Tone knob around 50% for a warm, round line.

## Module chain

**NR — Gate**, always on.
THRE: 12.
Low. The line needs every note to speak and decay naturally.

**PRE — COMP (Ross)**, always on.
Sustain: 45, VOL: 58.
Keeps the ostinato at one level so it carries the verses.

**DST — Bass OD**, on CTL.
Gain: 40, Blend: 45, VOL: 56, Bass: 55, Treble: 52.
Grit for the heavy build. Blend 45 keeps the clean low end under it.

**AMP/CAB — NAM SnapTone, slot 54: FullB15** (always on)
- Built from the `Ampeg B18 - Head DI - Bass Chan - Vol 5` NAM (B-18N) and the Apg115410 IR, combined into one snaptone.
- Real Ampeg B-18N captured at volume 5, warmer and fuller, into a summed B-15 + 4x10 IR.
- Warm, round, and big. The line is the hook here, and the fuller B-15 carries it.
- Gain: 50, VOL: 80, Bass: 56, Middle: 52, Treble: 46
- Gain 50: the capture as built.
- Bass 56: more low end for the slow, dark groove.
- Middle 52: a small lift so the line reads.
- Treble 46: top end pulled back. Warm, not clanky.
- VOL 80: the level Michael set for this snaptone in the 2026-10-02 VOL audit. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 54 directly.

**EQ — Bass EQ 2**, always on.
50Hz: +2, 120Hz: +2, 400Hz: -2, 800Hz: +1, 4.5kHz: -1, VOL: 52.
Deep and warm. A mud cut at 400Hz keeps the line clear. 800Hz lets the notes read.

**MOD — off.**

**DLY — off.**

**RVB — Room**, on CTL.
Mix: 12, Decay: 32, Trail: on.
A small room for the heavy build.

## CTL footswitch

On CTL: DST (Bass OD), RVB (Room).

- **CTL off** — Verses. Warm, round, clean line. This is the resting state the patch loads into.
- **CTL on** — Heavy build. Grit and a small room.

Engage as the song swells. Off for the verses.
