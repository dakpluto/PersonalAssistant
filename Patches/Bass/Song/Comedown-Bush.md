# Comedown — Bush

Sixteen Stone, 1994. ~92 BPM, est.
Darker and moodier than "Machinehead" off the same record — verse sits low and murky, chorus opens up into a heavier, fuzzed-out push. This is a different Bush tone than the other patch in this repo: Machinehead is dry and driving throughout, this one has real light/dark contrast built into the CTL.
GP-5 only, P/J bass, no pedalboard.

## Module chain

**NR — Gate**, always on.
THRE: 30. Fuzz at this gain picks up real noise between notes — a firmer gate than Machinehead's to keep the low end controlled.

**PRE — Micro Boost**, on CTL.
Gain: 42 when engaged.
Off for the dark, restrained verse. On for the chorus — shoves the fuzz harder into breakup for the heavier hit, on top of the NAM's own gain.

**DST — Bass OD**, always on. Gain 65, Blend 75, VOL 62, Bass 55, Treble 40. This is the always-on fuzz layer — the CTL'd boost stacks on top of it, it doesn't switch it in.

**AMP/CAB — NAM SnapTone, slot 58: HairySVT** (always on)
- Built from the `SVT SANS HAIRY DRIVE (SVT-CL)` NAM and the Sunn215 IR, combined into one snaptone.
- Real Ampeg SVT-CL with the hairy drive setting, into the Sunn215 2x15 IR.
- Fuzzy grunge low end. The hairy SVT drive into a Sunn 2x15.
- Gain: 46, VOL: 50, Bass: 55, Middle: 45, Treble: 38
- Gain 46: a little under default. This part wants less push than the other HairySVT patches.
- Bass 55: a touch more low end.
- Middle 45: midrange pulled back a little.
- Treble 38: top end pulled back noticeably.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 58 directly.

**EQ — Bass EQ 2**, always on.
50Hz: +3, 120Hz: +1, 400Hz: -5, 800Hz: -1, 4.5kHz: +4, VOL: 55.
Heavier low-end push and a deeper scoop around 400Hz than Machinehead's EQ — this keeps the fuzz from turning into an undefined wall, while the 4.5kHz lift keeps note attack readable even when things get thick.

**MOD — off.** No modulation — keeps the tone direct, not smeared.

**DLY — off.** Straight part, no delay.

**RVB — Room**, on CTL.
Mix: 20, Decay: 35, Trail: true.
Off for the verse — dry, tight, low. On for the chorus, alongside the boost — adds a little size to match the bigger, fuzzier hit without washing out the low end.

## CTL footswitch

Two modules on CTL: PRE (Micro Boost) and RVB (Room).

- **CTL off** — verse sound. Dark, murky, restrained. Resting state the patch loads into.
- **CTL on** — chorus sound. Harder push into the fuzz's breakup plus a touch of room, noticeably heavier and bigger than the verse.

Engage CTL going into each chorus, back off for the verses — a real light/dark contrast, not just a volume bump.
