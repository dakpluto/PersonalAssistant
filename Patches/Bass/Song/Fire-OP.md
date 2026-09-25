# Fire — Ohio Players

Fire, 1974. 116 BPM, est.
Marshall "Rock" Jones' bass on this one is the whole engine of the groove — round, punchy, fingerstyle P-bass tone sitting right in the pocket with the horns and clav, not a modern scooped slap tone.
GP-5 only, P/J bass, no pedalboard.

## Module chain

**NR — Gate**, always on.
THRE: 20. Light touch — clean amp tone doesn't need much gating, just enough to kill hum between phrases.

**PRE — COMP (Ross Compressor)**, always on.
Sustain: 55, VOL: 65.
Funk bass lives and dies on an even pocket. This squashes the pick/finger dynamics down so every note in the groove sits at the same level — the classic "glued to the kick" funk bass feel.

**DST — Bass OD**, on CTL.
Gain: 30, Blend: 55, VOL: 68, Bass: 55, Treble: 52.
Off for the verse groove — clean SVT tone only.
On for the "Fire" chorus hits and the horn stabs — a light push that thickens the bass without turning it into a distorted tone, so the low end punches harder under the horns and Sweet Cherie's vocal without losing note definition.

**AMP/CAB — NAM SnapTone, slot 53: CleanSVT** (always on)
- Built from the `SVT CLEAN (SVT-CL)` NAM and the Apg810 IR, combined into one snaptone.
- Real Ampeg SVT-CL preamp on its clean setting, into the Apg810 8x10 IR.
- Ampeg SVT through an 8x10 is the default 70s funk/soul rig. A direct hit for this record's era.
- Gain: 55, VOL: 50, Bass: 60, Middle: 62, Treble: 55
- Gain 55: noticeably over default. This part wants more push than the other CleanSVT patches.
- Bass 60: Full, round low end.
- Middle 62: Pushed hard. This is what gets the bass through a horn section — without upper-mid presence a P-bass disappears under brass.
- Treble 55: Enough top end for pick/finger attack, not brittle.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 53 directly.

**EQ — Bass EQ 1**, always on.
33Hz: +5, 150Hz: -3, 600Hz: +4, 2kHz: +5, 8kHz: +3, VOL: 52.
Low end reinforced at 33Hz for weight, a cut at 150Hz to keep it from getting boomy, and a push through 600Hz-2kHz for the finger-funk "pop" that cuts through the clav and horns. A little 8kHz air for string attack.

**MOD — off.** Straight funk bass tone — no chorus or modulation. Adding any would just smear the note definition this groove depends on.

**DLY — off.** No delay — tight, dry pocket part.

**RVB — Room**, on CTL.
Mix: 18, Decay: 25, Trail: off.
Off for the verse groove — dry and right on top of the beat, same as the amp/DI tone on the record.
On alongside the DST boost for the chorus — a small amount of room air to help the bass sit a touch bigger under the horn stabs without smearing the groove.

## CTL footswitch

Two modules on CTL: DST (Bass OD) and RVB (Room).

- **CTL off** — main verse groove. Clean SVT tone, compressed, dry, tight in the pocket. This is the resting state the patch loads into.
- **CTL on** — chorus / "Fire" hook sound. Light OD push plus a touch of room, same amp tone underneath, bigger and punchier for the hits.

Engage CTL going into the chorus and horn-stab sections, back off for the verse groove.
