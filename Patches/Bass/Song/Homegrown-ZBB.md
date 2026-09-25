# Homegrown-ZBB — Homegrown by Zac Brown Band

Jekyll + Hyde, 2015. ~100 BPM, est.
Bright, punchy country-rock groove — no drive, no clutter, just a clean tight pocket that drives the song.
GP-5 only, P/J bass, no pedalboard.

## Module chain

**NR — Gate**, always on.
THRE: 30. Standard noise floor cleanup, nothing aggressive.

**PRE — Micro Boost**, on CTL.
Gain: 35 when engaged.
Off for the verse groove, on for the chorus — same clean tone, just pushed harder into the front end for the lift.

**DST — off.**
No drive anywhere in this patch. Country-rock brightness comes from the cab and EQ, not grit.

**AMP/CAB — NAM SnapTone, slot 51: CleanB15** (always on)
- Built from the `Ampeg B18 - Head DI - Bass Chan - Vol 2.5 (B-18N)` NAM and the Apg115 IR, combined into one snaptone.
- Real Ampeg B-18N fliptop (the B-15 preamp circuit), captured clean at volume 2.5, into the Apg115 B-15 cab IR.
- Modern country with a vintage lean. A clean B-15 keeps the groove warm instead of hi-fi.
- Gain: 60, VOL: 50, Bass: 55, Middle: 60, Treble: 65
- Gain 60: noticeably over default. This part wants more push than the other CleanB15 patches.
- Bass 55: Enough low end for the groove without getting boomy.
- Middle 60: Present midrange so the line doesn't disappear under the guitars.
- Treble 65: Bright on purpose, matches the Hartke cab's character.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 51 directly.

**EQ — Bass EQ 1**, always on.
33Hz: +2, 150Hz: +1, 600Hz: -2, 2kHz: +4, 8kHz: +3, VOL: 55.
A light scoop around 600Hz keeps things from getting boxy, and the 2kHz/8kHz lift adds pick-attack clarity and air — this is a bright, present tone, not a dark one.

**MOD — off.** Straightforward country groove, no modulation needed.

**DLY — off.** Dry and direct.

**RVB — Room**, on CTL.
Mix: 20, Decay: 35, Trail: true.
Off for the verse — tight and dry. On for the chorus alongside the boost, giving the hook a touch more size without washing out the groove.

## CTL footswitch

Two modules on CTL: PRE (Micro Boost) and RVB (Room).

- **CTL off** — main verse groove. Dry, tight, driving. Resting state the patch loads into.
- **CTL on** — chorus lift. Boosted front end plus a touch of room, brighter and bigger for the hook.

Engage CTL going into each chorus, back off for the verses.
