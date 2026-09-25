# Adrift-LS — Adrift by Lunatic Soul

Lunatic Soul (Mariusz Duda's solo project, outside Riverside) — atmospheric, spacious, post-rock-adjacent prog. Not metal, not a riff-driven tone. This patch is built for feel and space, not attack.
GP-5 only, Sire fretless, no pedalboard.

## Instrument: Sire V7 2nd Gen Fretless — Active

Active electronics for this one. The patch leans on chorus/delay/reverb to build atmosphere, and active output gives cleaner headroom feeding into that chain instead of the passive pickup's softer top end getting buried under the effects.

## Module chain

**NR — Gate**, always on.
THRE: 20. Low threshold — clean, low-gain tone doesn't need much gating, just enough to kill hum in the space between notes.

**PRE — off.** No boost. This patch never needs to get louder or pushier, just wider.

**DST — off.** No drive anywhere in this one.

**AMP/CAB — NAM SnapTone, slot 52: AvalonAD2022** (always on)
- Built from the `Avalon - 38 dB - Chan 1 (Avalon AD2022)` NAM and no cab IR (straight DI), combined into one snaptone.
- Avalon AD2022 Class A preamp at 38 dB. A studio DI, not an amp: no speaker coloration.
- Mariusz Duda's fretless on Lunatic Soul is intimate and studio-clean. A DI fits better than any cab.
- Gain: 50, VOL: 50, Bass: 60, Middle: 45, Treble: 50
- Gain 50: the capture as built.
- Bass 60: Full low end, this needs to feel like it's under everything.
- Middle 45: Kept out of the way so the fretless glide reads clearly.
- Treble 50: Present but not clanky.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 52 directly.

**EQ — Bass EQ 2**, always on.
50Hz: +3, 120Hz: +2, 400Hz: -3, 800Hz: -2, 4.5kHz: +2, VOL: 52.
Light low-end reinforcement, a shallow scoop through the low-mids so the tone stays open instead of boxy, and a small lift up top to keep fretless glide/finger noise present without harshness.

**MOD — B-Chorus**, always on.
Depth: 22, Rate: 0.35Hz, VOL: 52.
Kept light per the "light hand" rule — this isn't a drenched chorus tone, just enough motion to widen the sound and stop a clean fretless bass from sitting flat and static.

**DLY — Analog**, on CTL.
Mix: 30, Time: 450ms, Feedback: 25, Trail: true.
Off for the closer, more intimate sections. On for the more expansive, spacious sections — the repeats give the line room to breathe and trail into the next phrase, which fits this album's whole aesthetic.

**RVB — Hall**, on CTL (same switch as DLY).
Mix: 35, Decay: 55, Trail: true.
Off in the resting state — dry and close. On alongside the delay for the big, open sections — the two together are what turn "clean bass" into "atmosphere."

## CTL footswitch

Two modules on CTL: DLY (Analog) and RVB (Hall).

- **CTL off** — resting state the patch loads into. Dry, close, intimate — chorus is still there giving it width, but no delay or reverb tail.
- **CTL on** — DLY and RVB both engage together. Big, spacious, trailing — for the more expansive, atmospheric passages this album is built around.

Engage CTL for the wide-open sections, back off when the part needs to sit close and dry. One footswitch move gets both effects at once, which is the point — this patch is designed around exactly two states, not constant tweaking.
