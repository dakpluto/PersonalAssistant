# Hotel California — Eagles

Hotel California, 1976. ~74 BPM.
GP-5 only, P/J bass, no pedalboard.
Randy Meisner is on bass for the studio cut. The part is a warm, round, laid-back groove with a slight reggae lilt that sits behind the beat under the 12-string intro and the verses.
The famous Felder/Walsh dual-guitar outro gets a fuller, pushed bass under it.

## Module chain

**NR — Gate**, always on.
THRE: 12. Light, so the laid-back note tails stay natural.

**PRE — COMP (Ross)**, always on.
Sustain: 45, VOL: 60.
Smooth studio-style leveling for the relaxed groove.

**DST — Bass OD**, on CTL.
Gain: 18, Blend: 30, VOL: 60, Bass: 55, Treble: 48.
A light push for the outro. More weight and presence under the twin guitars, not audible distortion.

**AMP/CAB — NAM SnapTone, slot 54: FullB15** (always on)
- Built from the `Ampeg B18 - Head DI - Bass Chan - Vol 5 (B-18N)` NAM and the Apg115410 IR, combined into one snaptone.
- Real Ampeg B-18N at volume 5, warmer and fuller than the clean capture, into the Apg115410 (1x15 + 4x10) IR.
- Randy Meisner's part is warm and melodic. Fuller B-15 sits under the twin guitars.
- Gain: 51, VOL: 50, Bass: 62, Middle: 50, Treble: 42
- Gain 51: a little over default. This part wants more push than the other FullB15 patches.
- Bass 62: more low end.
- Middle 50: flat.
- Treble 42: top end pulled back noticeably.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 54 directly.

**EQ — Bass EQ 2**, always on.
50Hz: +3, 120Hz: +2, 400Hz: 0, 800Hz: +1, 4.5kHz: -2, VOL: 52.
Warm low end, a bit of 800Hz so the syncopated notes still read, top rolled off.

**MOD — off.**

**DLY — off.**

**RVB — Plate**, on CTL.
Mix: 18, Decay: 40, Damp: 50, Trail: on.
A smooth plate matches the polished 70s studio sheen once the outro opens up. Damp 50 keeps the tail from getting splashy on bass.

## CTL footswitch

Two modules on CTL: DST (Bass OD) and RVB (Plate).

- **CTL off**: intro, verses, and choruses. Warm, round, dry, behind the beat. This is the resting state.
- **CTL on**: the dual-guitar outro solo. Light push plus plate for a fuller bed under the harmony leads.

Engage when the outro solo starts and leave it on to the fade.
