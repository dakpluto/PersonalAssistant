# Comfortably Numb — Pink Floyd

The Wall, 1979. ~64 BPM.
GP-5 only, P/J bass, no pedalboard.
The bass part is slow, long, sustained notes under an orchestral verse and Gilmour's huge chorus/solo sections.
It has to be deep, round, and smooth, and fill the floor under the whole arrangement without ever getting busy or bright.
Verses sit in B minor with strings. The "I have become comfortably numb" choruses and both solos open up in D major.

## Module chain

**NR — Gate**, always on.
THRE: 12. Very light. Long sustained notes must decay naturally, so the gate can't cut the tails.

**PRE — COMP (Ross)**, always on.
Sustain: 40, VOL: 60.
Light compression evens out the long notes so every root holds the same weight across the bar.

**DST — Bass OD**, on CTL.
Gain: 15, Blend: 30, VOL: 60, Bass: 55, Treble: 45.
Very light. It doesn't really read as overdrive.
It adds some harmonic density so the bass holds its ground under the chorus and the final solo wall.

**AMP/CAB — NAM SnapTone, slot 53: CleanSVT** (always on)
- Built from the `SVT CLEAN (SVT-CL)` NAM and the Apg810 IR, combined into one snaptone.
- Real Ampeg SVT-CL preamp on its clean setting, into the Apg810 8x10 IR.
- Waters' tone here is clean and round. No Hiwatt capture on hand, and a clean SVT gets closer than anything else here.
- Gain: 46, VOL: 50, Bass: 62, Middle: 48, Treble: 40
- Gain 46: a little under default. This part wants less push than the other CleanSVT patches.
- Bass 62: more low end.
- Middle 48: midrange pulled back a little.
- Treble 40: top end pulled back noticeably.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 53 directly.

**EQ — Bass EQ 1**, always on.
33Hz: +3, 150Hz: +2, 600Hz: -2, 2kHz: 0, 8kHz: -3, VOL: 52.
Sub and low end reinforced, 600Hz cleared of boxiness, top rolled off.
The result is a round, felt-more-than-heard bottom.

**MOD — off.**

**DLY — off.** Gilmour has the delay. The bass doesn't need it.

**RVB — Hall**, on CTL.
Mix: 22, Decay: 50, Trail: on.
Opens the bass into the same big space as the chorus and solos. Trail on lets the tail ring out when you drop back into a verse.

## CTL footswitch

Two modules on CTL: DST (Bass OD) and RVB (Hall).

- **CTL off**: verses ("Hello, is there anybody in there?"). Dry, deep, and smooth under the strings. This is the resting state.
- **CTL on**: choruses and both guitar solos. A little extra density plus hall space to match the band's lift.

Engage at each "There is no pain, you are receding" chorus entry and leave it on through the solos. Back off for the verses.
