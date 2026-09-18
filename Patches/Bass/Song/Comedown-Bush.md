# Comedown — Bush

Sixteen Stone, 1994. ~92 BPM, est.
Darker and moodier than "Machinehead" off the same record — verse sits low and murky, chorus opens up into a heavier, fuzzed-out push. This is a different Bush tone than the other patch in this repo: Machinehead is dry and driving throughout, this one has real light/dark contrast built into the CTL.
GP-5 only, P/J bass, no pedalboard.

## AMP: Classic Bass (Ampeg SVT) + DST: Bass OD + CAB: Sunn215 IR (User IR 8)

Rebuilt 2026-09-18 off the GP-5's own AMP/DST + a loaded IR — NAMs are off for now (Valeton N->S volume issue, device-side). The old NAM was the Darkglass Alpha Omega's Omega (fuzz) side into an Aguilar DB751/Darkglass cab — thicker and grungier than Machinehead's straighter V4B grit. Standing that in with real modules: Classic Bass for the amp foundation, Bass OD always-on and pushed hard for the fuzz breakup itself, and Sunn215 for CAB — ir.md calls that cab out by name for "driven/fuzz bass patches," a direct match for what this song wants.

- AMP Gain: 40, Bass: 55, Middle: 45, MidFreq: 800Hz, Treble: 38, VOL: 62 — dark, matches the murky verse tone, slightly scooped mids to stay moodier/darker than Machinehead.
- DST (Bass OD) Gain: 65, Blend: 75, VOL: 62, Bass: 55, Treble: 40 — pushed harder than Machinehead's amp-only grit, real fuzz-like breakup, not just amp grind. Always on — this is the patch's baseline texture, not a footswitched extra.

## Module chain

**NR — Gate**, always on.
THRE: 30. Fuzz at this gain picks up real noise between notes — a firmer gate than Machinehead's to keep the low end controlled.

**PRE — Micro Boost**, on CTL.
Gain: 42 when engaged.
Off for the dark, restrained verse. On for the chorus — shoves the fuzz harder into breakup for the heavier hit, on top of the NAM's own gain.

**DST — Bass OD**, always on. Gain 65, Blend 75, VOL 62, Bass 55, Treble 40. This is the always-on fuzz layer — the CTL'd boost stacks on top of it, it doesn't switch it in.

**AMP — Classic Bass**, always on. Gain 40, Bass 55, Middle 45, MidFreq 800Hz, Treble 38, VOL 62.

**CAB — User IR 8 (Sunn215)**, always on. VOL 60.

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
