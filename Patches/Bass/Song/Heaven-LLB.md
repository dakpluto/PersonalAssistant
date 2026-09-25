# Heaven-LLB — Heaven by Los Lonely Boys

Los Lonely Boys, self-titled debut, 2003. ~76 BPM, est.
JoJo Garza's bass sits warm and round under the Tejano-soul groove — supportive, never flashy, with a soulful lift when the chorus opens up.
GP-5 only, Sire fretless (Passive), no pedalboard.

## Instrument: Sire V7 fretless, Passive

Passive over active here — the warmer, rounder passive voicing suits the soul/Tejano ballad character better than the more hi-fi active output. Same call made on Tennessee Whiskey and 1234 for the same reason.

## Module chain

**NR — Gate**, always on.
THRE: 20. Light touch — passive fretless into a clean amp doesn't generate much noise, just enough gating to keep things tight between phrases.

**PRE — Micro Boost**, on CTL.
Gain: 35 when engaged.
Off for the verse, on for the chorus — same clean tone, just pushed a little harder into the front end for the emotional lift.

**DST — off.** No drive anywhere. This is a warm, clean soul-bass tone start to finish.

**AMP/CAB — NAM SnapTone, slot 60: SoulB18** (always on)
- Built from the `Ampeg B18 - Head DI - Bass Chan - Vol 7.5 (B-18N)` NAM and the Apg115 IR, combined into one snaptone.
- Real Ampeg B-18N at volume 7.5, where the tubes start to growl, into the Apg115 B-15 cab IR.
- Soulful, warm, a little grit. Cranked B-15.
- Gain: 50, VOL: 50, Bass: 65, Middle: 55, Treble: 45
- Gain 50: the capture as built.
- Bass 65: The low end that gives the part its weight.
- Middle 55: A touch of midrange presence so the fretless line doesn't disappear under the guitars.
- Treble 45: Rolled back slightly, keeps the tone warm rather than clanky (fretless strings can get zingy if left too bright).
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 60 directly.

**EQ — Bass EQ 2**, always on.
50Hz: +3, 120Hz: +2, 400Hz: -2, 800Hz: 0, 4.5kHz: +2, VOL: 55.
Small reinforcement at the bottom for weight, a light scoop around 400Hz to avoid boxiness, and a touch of top-end lift at 4.5kHz so fretless finger noise and note definition still read clearly.

**MOD — off.** No chorus/vibe — the fretless glide and the warm SoulB18 snaptone already carry the character; stacking modulation would blur the pitch definition this part needs.

**DLY — off.** Straight, supportive part. No delay.

**RVB — Hall**, on CTL.
Mix: 30, Decay: 45, Trail: true.
Off for the verse — close and dry, right on the groove.
On for the chorus, alongside the boost — opens the space up for the song's emotional swell without drowning the low end.

## CTL footswitch

Two modules on CTL: PRE (Micro Boost) and RVB (Hall).

- **CTL off** — verse groove. Warm, clean, close, restrained. Resting state the patch loads into.
- **CTL on** — chorus lift. Boosted front end plus hall reverb, same amp/cab tone underneath, bigger and more emotional without changing character.

Engage CTL going into each chorus, back off for the verses.
