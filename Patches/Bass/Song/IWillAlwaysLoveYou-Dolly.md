# I Will Always Love You — Dolly Parton

Dolly Parton, 1974. About 66 BPM, est.
This is Dolly's original country ballad, not the Whitney Houston version.
Bass: Harley Benton P/J, 5-string, passive. GP-5 only.
The bass job is simple. Whole notes and half notes, root-fifth, with a few passing tones into the chord changes. Warm and round. It should support the vocal and never get in its way.
Play it with your fingers over the neck. Solo the P pickup or lean on it heavily. Tone knob around 40%.

## Module chain

**NR — Gate**, always on.
THRE: 10. Barely there. Long notes must decay on their own.

**PRE — COMP (Ross)**, always on.
Sustain: 35, VOL: 58.
Light leveling so whole notes hold evenly through the bar. It doesn't flatten the dynamics.

**DST — off.** No grit anywhere in this song.

**AMP/CAB — NAM SnapTone, slot 51: CleanB15** (always on)
- Built from the `Ampeg B18 - Head DI - Bass Chan - Vol 2.5 (B-18N)` NAM and the Apg115 IR, combined into one snaptone.
- Real Ampeg B-18N fliptop (the B-15 preamp circuit), captured clean at volume 2.5, into the Apg115 B-15 cab IR.
- 1974 Nashville session bass. A B-15 is the period-correct amp.
- Gain: 48, VOL: 50, Bass: 60, Middle: 48, Treble: 38
- Gain 48: a little under default. This part wants less push than the other CleanB15 patches.
- Bass 60: more low end.
- Middle 48: midrange pulled back a little.
- Treble 38: top end pulled back noticeably.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 51 directly.

**EQ — Bass EQ 2**, always on.
50Hz: +1, 120Hz: +2, 400Hz: 0, 800Hz: 0, 4.5kHz: -4, VOL: 52.
Low end fills the space under the acoustic guitars. The top rolls off hard for a vintage thump.

**MOD — off.** **DLY — off.**

**RVB — Room**, on CTL.
Mix: 16, Decay: 30, Trail: on.
A small room so the bass blooms with the band on the choruses. Decay 30 stays short so the low end doesn't smear.

## CTL footswitch

On CTL: RVB (Room).

- **CTL off** — Verses and the spoken section. Close, dry, and warm. This is the resting state.
- **CTL on** — The "I will always love you" choruses. The room reverb opens the bass up into the same space as the rest of the band.

Engage it at each chorus. Step off for the verses.
