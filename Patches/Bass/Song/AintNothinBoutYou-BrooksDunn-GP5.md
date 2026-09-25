# Ain't Nothing 'Bout You (GP-5 Only) — Brooks & Dunn

From *Steers & Stripes* (2001). About 128 BPM, est.
Bass: Harley Benton P/J, 5-string, passive. GP-5 only.
This is the GP-5-only version of `AintNothinBoutYou-BrooksDunn`, which is the Full Board build. Same target: clean, bright, driving country, with no drive anywhere.
The Full Board build gets its compression from the Donner comp. Here COMP4 does that job inside the GP-5, so PRE can't be the CTL lift anymore. The lift moves to EQ instead.
Pick or fingers. Both pickups up. Tone knob around 65%.

## Module chain

**NR — Gate**, always on.
THRE: 14.
Catches hum on the stops.

**PRE — COMP4 (Keeley C4)**, always on.
Sustain: 45, Attack: 50, Clip: 40, VOL: 58.
Replaces the board's Donner comp. Even, punchy notes.

**DST — off.** No drive, same as the Full Board build.

**AMP/CAB — NAM SnapTone, slot 51: CleanB15** (always on)
- Built from the `Ampeg B18 - Head DI - Bass Chan - Vol 2.5 (B-18N)` NAM and the Apg115 IR, combined into one snaptone.
- Real Ampeg B-18N fliptop (the B-15 preamp circuit), captured clean at volume 2.5, into the Apg115 B-15 cab IR.
- 90s Nashville session bass is a clean B-15 or a DI. This is the B-15 half of that.
- Gain: 50, VOL: 50, Bass: 58, Middle: 50, Treble: 54
- Gain 50: the capture as built.
- Bass 58: more low end.
- Middle 50: flat.
- Treble 54: a touch more top end.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 51 directly.

**EQ — Bass EQ 1**, on CTL.
33Hz: +2, 150Hz: -1, 600Hz: +2, 2kHz: +3, 8kHz: +2, VOL: 56.
The chorus lift. It's close to the Full Board build's always-on curve, one dB tamer at 2kHz and 8kHz since it's stacked on top of the Room here. VOL 56 adds a bit more level. With CTL off, EQ is bypassed and the tone is slightly darker and quieter.

**MOD — off.**

**DLY — off.**

**RVB — Room**, on CTL.
Mix: 16, Decay: 26, Trail: on.
A small room for the chorus.

## CTL footswitch

On CTL: EQ (Bass EQ 1), RVB (Room).

- **CTL off** — Verses. Clean and driving, slightly darker with the EQ bypassed. This is the resting state the patch loads into.
- **CTL on** — Choruses. The EQ adds sparkle, attack, and a little level, and the room opens it up.

Engage at each chorus. Off for the verses.
