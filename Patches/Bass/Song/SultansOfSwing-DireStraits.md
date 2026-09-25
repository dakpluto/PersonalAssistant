# Sultans of Swing — Dire Straits

Dire Straits, 1978. ~148 BPM.
GP-5 only, P/J bass, no pedalboard.
John Illsley's part is a clean, moving fingerstyle line with walking passing tones between chord changes and a steady, driving eighth-note feel under Knopfler's fingerpicked Strat.
It's a late-70s, pre-gloss tone: dry, woody, and even. It has to leave the mids open for the guitar.

## Module chain

**NR — Gate**, always on.
THRE: 12. Light. Clean tone, not much noise.

**PRE — Micro Boost**, on CTL.
Gain: 50.
A clean level push for the long outro solo. The band gets louder, and the bass has to keep up without changing character.

**DST — off.** Clean the whole way.

**AMP/CAB — NAM SnapTone, slot 54: FullB15** (always on)
- Built from the `Ampeg B18 - Head DI - Bass Chan - Vol 5 (B-18N)` NAM and the Apg115410 IR, combined into one snaptone.
- Real Ampeg B-18N at volume 5, warmer and fuller than the clean capture, into the Apg115410 (1x15 + 4x10) IR.
- John Illsley's line is warm and round under Knopfler's picking. Fuller B-15.
- Gain: 50, VOL: 50, Bass: 55, Middle: 50, Treble: 55
- Gain 50: the capture as built.
- Bass 55: a touch more low end.
- Middle 50: flat.
- Treble 55: a touch more top end.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 54 directly.

**EQ — Bass EQ 2**, always on.
50Hz: +1, 120Hz: +2, 400Hz: 0, 800Hz: +2, 4.5kHz: +1, VOL: 55.
120Hz gives the notes body. 800Hz makes the walking passing tones readable.
The top stays close to flat so it sounds woody, not zingy.

**MOD — off.** This is the 1978 record, not Brothers in Arms. No chorus sheen.

**DLY — off.**

**RVB — Room**, on CTL.
Mix: 15, Decay: 25, Trail: on.
A bit of air for the solo sections.

## CTL footswitch

Two modules on CTL: PRE (Micro Boost) and RVB (Room).

- **CTL off**: verses and choruses. Dry, even, clean, and locked with the hi-hat. This is the resting state.
- **CTL on**: mid-song solo and the extended outro solo. Clean boost plus room to match the band's push.

Engage when Knopfler takes a solo. Back off at the next verse.
