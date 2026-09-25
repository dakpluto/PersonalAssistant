# After the Love Has Gone — Earth, Wind & Fire

I Am, 1979. ~66 BPM, est.
GP-5 only, P/J bass, no pedalboard.
This is a slow, lush R&B ballad with dense jazz-leaning chords, many key shifts, strings, and big stacked vocals.
The bass is the opposite of the funk patch. It's warm, round, and sustained, and it supports the harmony more than the groove.
Long notes and smooth passing tones through the changes. No snap, no pop.

## Why not the EWF-Funk patch

EWF-Funk is bright, tightly compressed, and voiced at 800Hz for finger attack. That's right for September. On this song it would poke out of the arrangement.
This patch pulls the top end down, lightens the compression, and trades punch for bloom.

## Module chain

**NR — Gate**, always on.
THRE: 10. Barely there. Long sustained notes must decay naturally.

**PRE — COMP (Ross)**, always on.
Sustain: 40, VOL: 60.
Light leveling so sustained notes hold even through the bar. Much softer than the COMP4 squash on the funk patch.

**DST — off.** No grit anywhere in this song.

**AMP/CAB — NAM SnapTone, slot 52: AvalonAD2022** (always on)
- Built from the `Avalon - 38 dB - Chan 1 (Avalon AD2022)` NAM and no cab IR (straight DI), combined into one snaptone.
- Avalon AD2022 Class A preamp at 38 dB. A studio DI, not an amp: no speaker coloration.
- Late-70s LA session bass: polished, clean, straight to the desk. The Avalon is that polish.
- Gain: 46, VOL: 50, Bass: 60, Middle: 50, Treble: 42
- Gain 46: a little under default. This part wants less push than the other AvalonAD2022 patches.
- Bass 60: more low end.
- Middle 50: flat.
- Treble 42: top end pulled back noticeably.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 52 directly.

**EQ — Bass EQ 2**, always on.
50Hz: +2, 120Hz: +2, 400Hz: 0, 800Hz: +1, 4.5kHz: -3, VOL: 52.
Warm lows, a touch of 800Hz so moving lines stay defined, top rolled off.

**MOD — off.** The strings and keys already carry the sheen.

**DLY — off.**

**RVB — Plate**, on CTL.
Mix: 20, Decay: 45, Damp: 55, Trail: on.
Smooth plate for the big choruses. Damp 55 keeps the tail dark so it blooms without smearing the low end.

## CTL footswitch

One module on CTL: RVB (Plate).

- **CTL off**: verses. Close, warm, and dry under the lead vocal. This is the resting state.
- **CTL on**: choruses and the final key-change swells. Plate opens the bass into the same space as the strings and stacked vocals.

Engage at each "After the love has gone" chorus. Back off for the verses.
