# Islands in the Stream — Kenny Rogers

Eyes That See in the Dark, 1983. Duet with Dolly Parton. ~104 BPM, est.
Smooth, polished, radio-ready pop-country — the bass job here is melodic support, not grit. Clean, present, sits under two vocalists without crowding either one.
GP-5 only, Sire fretless (Active), no pedalboard.

## Module chain

**NR — Gate**, always on.
THRE: 22. Light touch — just enough to clean up fretless string noise between phrases.

**PRE — Micro Boost**, on CTL.
Gain: 35 when engaged.
Off for the verse groove, on for the big duet chorus hook — same clean tone throughout, just pushed harder up front for the "islands in the stream" line.

**DST — off.** No drive anywhere. This tone stays clean start to finish.

**AMP/CAB — NAM SnapTone, slot 52: AvalonAD2022** (always on)
- Built from the `Avalon - 38 dB - Chan 1 (Avalon AD2022)` NAM and no cab IR (straight DI), combined into one snaptone.
- Avalon AD2022 Class A preamp at 38 dB. A studio DI, not an amp: no speaker coloration.
- Polished early-80s pop-country. Studio DI bass, clean and smooth.
- Gain: 52, VOL: 50, Bass: 55, Middle: 60, Treble: 55
- Gain 52: a little over default. This part wants more push than the other AvalonAD2022 patches.
- Bass 55: a touch more low end.
- Middle 60: more midrange.
- Treble 55: Bright enough to read clearly, not harsh.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 52 directly.

**EQ — Bass EQ 2**, always on.
50Hz: +2, 120Hz: +1, 400Hz: -2, 800Hz: +1, 4.5kHz: +3, VOL: 55.
Small low-end reinforcement, a light scoop around 400Hz to keep things from getting boxy, and a lift at 4.5kHz for fretless finger-attack clarity in a busy mix.

**MOD — B-Chorus**, always on, light hand.
Depth: 15, Rate: 0.6Hz, VOL: 55.
Very subtle shimmer under the tone — polished 80s pop-country sheen, not a wet chorus effect. Sits underneath, never on top.

**DLY — off.** No delay — this is a straightforward melodic groove, not an atmospheric part.

**RVB — Room**, on CTL.
Mix: 28, Decay: 40, Trail: true.
Off for the verse — dry and present, right on the beat. On for the chorus, alongside the boost, for a touch more size on the hook.

## CTL footswitch

Two modules on CTL: PRE (Micro Boost) and RVB (Room).

- **CTL off** — verse groove. Dry, clean, melodic, present. Resting state the patch loads into.
- **CTL on** — chorus hook. Boosted front end plus a touch of room reverb — bigger and slightly more open for "Islands in the Stream," same clean tone underneath.

Engage CTL going into each big chorus hit, back off for the verses. Simple two-state song patch.
