# LoveWillTurn-KR — Love Will Turn You Around by Kenny Rogers

*Six Pack* soundtrack, 1982. ~126 BPM, est.
Uptempo, bright pop-country — this is Kenny in danceable, radio-single mode, not the storyteller-ballad register.
GP-5 only, P/J bass, no pedalboard.

## Module chain

**NR — Gate**, always on.
THRE: 25. Light touch — this is a clean patch, just enough to tighten up note-offs.

**PRE — Micro Boost**, on CTL.
Gain: 35 when engaged.
Off for the verse groove, on for the chorus — same clean amp tone throughout, just pushed harder and brighter for the hook.

**DST — off.**
No drive anywhere. This tone stays clean start to finish; grit would fight the bright, bouncy character of the song.

**AMP/CAB — NAM SnapTone, slot 52: AvalonAD2022** (always on)
- Built from the `Avalon - 38 dB - Chan 1 (Avalon AD2022)` NAM and no cab IR (straight DI), combined into one snaptone.
- Avalon AD2022 Class A preamp at 38 dB. A studio DI, not an amp: no speaker coloration.
- Early-80s adult contemporary. Clean, polished DI bass.
- Gain: 50, VOL: 50, Bass: 55, Middle: 50, Treble: 58
- Gain 50: the capture as built.
- Bass 55: a touch more low end.
- Middle 50: flat.
- Treble 58: more top end.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 52 directly.

**EQ — Bass EQ 2**, always on.
50Hz: +3, 120Hz: +2, 400Hz: -2, 800Hz: 0, 4.5kHz: +4, VOL: 52.
Small low-end reinforcement, a light dip around 400Hz to avoid boxiness, and a lift at 4.5kHz for pick/finger attack so the part cuts on a busy, upbeat arrangement.

**MOD — off.** Clean, direct pop-country bass — no modulation needed.

**DLY — off.** Straight groove, no delay.

**RVB — Room**, on CTL.
Mix: 22, Decay: 30, Trail: true.
Off for the verse — dry and tight. On for the chorus, alongside the boost, for a touch more size on the hook.

## CTL footswitch

Two modules on CTL: PRE (Micro Boost) and RVB (Room).

- **CTL off** — verse groove. Dry, tight, clean. Resting state the patch loads into.
- **CTL on** — chorus lift. Boosted front end plus a touch of room reverb — brighter and bigger for the hook, same amp tone underneath.

Engage CTL into each chorus, back off for the verses.
