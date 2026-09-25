# Werewolves of London — Warren Zevon

From *Excitable Boy* (1978). About 104 BPM, est.
Bass: Harley Benton P/J, 5-string, passive. GP-5 only.
A loping, locked groove that follows the piano's D-C-G. Warm 70s tone, round and fat.
The rhythm section is widely credited to Mick Fleetwood and John McVie. This patch aims at a warm 70s rock tone, not a specific rig.
Fingers over the neck. P pickup soloed or dominant. Tone knob around 45%.

## Module chain

**NR — Gate**, always on.
THRE: 12.
Low.

**PRE — COMP (Ross)**, always on.
Sustain: 35, VOL: 58.
Light leveling.

**DST — Bass OD**, on CTL.
Gain: 20, Blend: 22, VOL: 55, Bass: 52, Treble: 48.
A hint of hair for the solo section and the outro.

**AMP/CAB — NAM SnapTone, slot 52: AvalonAD2022** (always on)
- Built from the `Avalon - 38 dB - Chan 1 (Avalon AD2022)` NAM and no cab IR (straight DI), combined into one snaptone.
- Avalon AD2022 Class A preamp at 38 dB. A studio DI, not an amp: no speaker coloration.
- 70s LA session sound: a clean, tight bass that doubles the piano riff.
- Gain: 48, VOL: 50, Bass: 58, Middle: 52, Treble: 42
- Gain 48: a little under default. This part wants less push than the other AvalonAD2022 patches.
- Bass 58: more low end.
- Middle 52: a touch more midrange.
- Treble 42: top end pulled back noticeably.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 52 directly.

**EQ — Bass EQ 2**, always on.
50Hz: +1, 120Hz: +2, 400Hz: 0, 800Hz: +1, 4.5kHz: -3, VOL: 52.
Warm, with a touch of 800Hz so the line reads under the piano.

**MOD — off.**

**DLY — off.**

**RVB — off.** Dry 70s rhythm section.

## CTL footswitch

On CTL: DST (Bass OD).

- **CTL off** — Main groove. Warm, fat, and locked to the piano. This is the resting state the patch loads into.
- **CTL on** — Solo and outro. A hint of grit for push.

Engage for the solo and the outro jam.
