# Dirt Road Anthem (Rhythm Guitar) — Jason Aldean

From *My Kinda Party* (2010). About 86 BPM, est.
Laid-back, groove-driven country-rock. Gritty, muted picking under the rapped verses, then big, crunchy chords in the chorus.
Built from the song's overall sound. I haven't verified the exact guitars and amps on the record.
Instrument: Stratocaster (HSS). Position 2 for the verses. Bridge humbucker for the chorus and the lead.
GP-5 only, Stratocaster (HSS), no pedalboard.

## Module chain

**NR — Gate**, always on.
THRE: 22.
Keeps the muted verse groove tight. The boost and SD-1 stack hisses in the chorus.

**PRE — Boost (EP Booster)**, on CTL.
Gain: 40, +3dB: on, Bright: off.
Adds level and pushes the SD-1 into the amp harder for the chorus. Bright off keeps it warm.

**DST — Super OD (SD-1)**, on CTL.
Gain: 45, Tone: 52, VOL: 64.
The chorus crunch. SD-1 into a gritty Deluxe is the modern country-rock wall. Tone 52 keeps it from going harsh.

**AMP/CAB — NAM SnapTone, slot 65: RythymDeluxe** (always on)
- Built from the `RYTHM - Fender Deluxe Reverb 1965 [Hyper Accuracy]` NAM and the Origin Effects Brown Deluxe 1x12 Medium Mix IR, combined into one snaptone.
- Real 1965 Deluxe Reverb at the rhythm setting, gritty but not saturated, into the Brown Deluxe 1x12.
- Gritty country-rock. Dirty enough for the verse groove, and it stacks well with pedals.
- Gain: 42, VOL: 65, Bass: 50, Middle: 52, Treble: 52
- Gain 42: under the capture, so the verse picking stays articulate.
- Bass 50: flat.
- Middle 52: a small lift.
- Treble 52: a touch more top end.
- VOL 65: the level Michael set for this snaptone in the 2026-10-01 VOL audit. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 65 directly.

**EQ — Guitar EQ 2**, always on.
100Hz: -2, 500Hz: 0, 1kHz: +1, 3kHz: +1, 6kHz: -2, VOL: 50.
The low cut leaves room for the song's heavy low end. -2 at 6kHz smooths the stacked drive.

**MOD — off.**

**DLY — Slapback**, always on.
Mix: 12, Time: 110ms, F.Back: 5, Trail: on.
A short single slap. Country thickener, doesn't depend on tempo.

**RVB — Room**, always on.
Mix: 14, Decay: 30, Trail: on.
A small room.

## CTL footswitch

On CTL: PRE (Boost), DST (Super OD).

- **CTL off** — Rhythm. Gritty, muted Deluxe groove for the verses. This is the resting state the patch loads into.
- **CTL on** — Lead. Boost plus SD-1 for the big chorus chords and the lead lines.

Engage CTL at the chorus and the lead. Drop back for the verses.
