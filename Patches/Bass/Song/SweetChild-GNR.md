# Sweet Child O' Mine — Guns N' Roses

Appetite for Destruction, 1987. ~125 BPM.
GP-5 only, P/J bass, no pedalboard.
Duff McKagan plays with a pick and comes from punk. The tone is bright, mid-forward, and a little gritty, with pick attack that cuts through two Les Pauls.
The "Where do we go now?" outro gets heavier and darker, and the band digs in hard.

## Module chain

**NR — Gate**, always on.
THRE: 20. The edge-of-breakup amp plus the bright cab make some hiss, so this is slightly firmer than a clean patch.

**PRE — COMP4 (Keeley C4)**, always on.
Sustain: 50, Attack: 40, Clip: 30, VOL: 60.
Evens out the picked eighth notes. Attack at 40 keeps the pick transient.

**DST — Bass OD**, on CTL.
Gain: 38, Blend: 42, VOL: 62, Bass: 50, Treble: 55.
Blend at 42 keeps the clean low end underneath, so the drive adds snarl without thinning out the bottom.

**AMP/CAB — NAM SnapTone, slot 57: GrittySVT** (always on)
- Built from the `SVT PUSHED (SVT-CL)` NAM and the Apg810 IR, combined into one snaptone.
- Real Ampeg SVT-CL pushed into grit, into the Apg810 8x10 IR.
- Duff's tone is gritty and mid-forward. Pushed SVT.
- Gain: 48, VOL: 50, Bass: 55, Middle: 60, Treble: 58
- Gain 48: a little under default. This part wants less push than the other GrittySVT patches.
- Bass 55: a touch more low end.
- Middle 60: more midrange.
- Treble 58: more top end.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 57 directly.

**EQ — Bass EQ 1**, always on.
33Hz: 0, 150Hz: +1, 600Hz: +2, 2kHz: +3, 8kHz: +1, VOL: 54.
Mids and upper mids pushed, which is where Duff's tone lives. The sub is left flat so it doesn't mud up against the kick.

**MOD — off.**

**DLY — off.**

**RVB — off.** Appetite's rhythm section is dry and in your face.

## CTL footswitch

One module on CTL: DST (Bass OD).

- **CTL off**: intro, verses, and choruses. Bright, picked, lightly gritty. This is the resting state.
- **CTL on**: the "Where do we go now?" outro breakdown and Slash's solo. Extra snarl and weight for the heaviest part of the song.

Engage when the song shifts into the outro. Back off if you loop back to a verse.
