# Dryad of the Woods — Pain of Salvation

Pain of Salvation, prog metal. BPM est. Dynamic, nimble, warm but clear. The band moves between delicate and heavy, so the bass needs to do both. Built from the band's general sound; I haven't verified this song's specific bass tone.
GP-5 only, P/J bass, no pedalboard.

## Module chain

**NR — Gate**, always on.
THRE: 10.
Clean tone. 10 is light.

**PRE — COMP4**, always on.
Sustain: 45, Attack: 40, Clip: 45, VOL: 58.
COMP4 lets the attack through and keeps the dynamics that a nimble part needs.

**DST — Bass OD**, on CTL.
Gain: 30, Blend: 40, VOL: 60, Bass: 50, Treble: 45.
Heavy section push.

**AMP/CAB — NAM SnapTone, slot 56: ProgSVT** (always on)
- Built from the `SVT CLEAN PUSHED (SVT-CL)` NAM and the Mesa215 IR, combined into one snaptone.
- Real Ampeg SVT-CL on the clean-pushed setting, into the Mesa215 2x15 IR.
- Prog with delicate and heavy sections. Pushed SVT stays clear when played soft and growls when hit hard.
- Gain: 50, VOL: 50, Bass: 58, Middle: 50, Treble: 45
- Gain 50: the capture as built.
- Bass 58: more low end.
- Middle 50: flat.
- Treble 45: top end pulled back a little.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 56 directly.

**EQ — Bass EQ 1**, always on.
33Hz: 0, 150Hz: +2, 600Hz: +1, 2kHz: +1, 8kHz: -1, VOL: 50.
Gentle. Small lift at 150Hz for warmth and 2kHz for note clarity.

**MOD — off.** No modulation.

**DLY — off.** No delay.

**RVB — Plate**, on CTL.
Mix: 13, Decay: 30, Damp: 50, Trail: off.
Small plate for the heavy sections.

## CTL footswitch

On CTL: DST (Bass OD), RVB (Plate).

- **CTL off** — Delicate sections. ProgSVT warm and clear, no drive. This is the resting state the patch loads into.
- **CTL on** — Heavy sections. Bass OD and a plate reverb.

Engage CTL when the song gets heavy. Back off for quiet sections.
