# Dirt Road Anthem — Jason Aldean

From *My Kinda Party* (2010). About 86 BPM, est.
Bass: Harley Benton P/J, 5-string, passive. GP-5 only.
The hip-hop-leaning groove asks for more sub than a typical country bass part. Deep, warm, and laid back.
Built from the song's overall sound. I haven't verified the session bassist's exact rig.
Fingers. P forward. Tone knob around 50%. The low B is useful for the deep notes.

## Module chain

**NR — Gate**, always on.
THRE: 12.
Low.

**PRE — COMP (Ross)**, always on.
Sustain: 50, VOL: 58.
A steady, sitting-deep level for the groove.

**DST — Bass OD**, on CTL.
Gain: 28, Blend: 30, VOL: 56, Bass: 55, Treble: 50.
Some grit for the bigger chorus. Blend 30 keeps the sub clean.

**AMP/CAB — NAM SnapTone, slot 54: FullB15** (always on)
- Built from the `Ampeg B18 - Head DI - Bass Chan - Vol 5` NAM (B-18N) and the Apg115410 IR, combined into one snaptone.
- Real Ampeg B-18N captured at volume 5, warmer and fuller, into a summed B-15 + 4x10 IR.
- The fuller B-15 suits the song's heavy, modern low end better than the clean one.
- Gain: 50, VOL: 80, Bass: 58, Middle: 50, Treble: 46
- Gain 50: the capture as built.
- Bass 58: more low end for the groove.
- Middle 50: flat.
- Treble 46: top end pulled back a little. Warm, not clanky.
- VOL 80: the level Michael set for this snaptone in the 2026-10-02 VOL audit. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 54 directly.

**EQ — Bass EQ 2**, always on.
50Hz: +3, 120Hz: +2, 400Hz: -2, 800Hz: +1, 4.5kHz: -1, VOL: 52.
+3 at 50Hz for the sub-heavy groove. A mud cut at 400Hz keeps it from getting boomy.

**MOD — off.**

**DLY — off.**

**RVB — Room**, on CTL.
Mix: 12, Decay: 30, Trail: on.
A small room for the chorus.

## CTL footswitch

On CTL: DST (Bass OD), RVB (Room).

- **CTL off** — Verses. Deep, warm, clean groove. This is the resting state the patch loads into.
- **CTL on** — Choruses. A bit of grit and room.

Engage at the chorus. Off for the verses.
