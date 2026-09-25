# Metropolis1-DT — Metropolis Pt. 1, The Miracle and the Sleeper by Dream Theater

Images and Words, 1992. Est. ~130 BPM.
John Myung's bass here is aggressive and technical — locked tight to the double-kick riff, present enough to cut through two guitars and keyboards without turning to mush. That's a different problem than a pocket groove: this part needs bite and definition first, low end second.
GP-5 only, P/J bass, no pedalboard.

## Module chain

**NR — Gate**, always on.
THRE: 30. High-gain NAM at this setting picks up noise between hits — tightens the low end so the riff stops cleanly instead of smearing.

**PRE — Micro Boost**, on CTL.
Gain: 45 when engaged.
Off for the quieter intro/interlude passages, on for the driving main riff and instrumental unison sections — same amp tone throughout, just pushed harder up front when the song calls for it.

**DST — Bass OD**, always on. Gain 68, Blend 75, VOL 65, Bass 58, Treble 55. Baseline distortion layer, independent of the PRE boost's CTL toggle.

**AMP/CAB — NAM SnapTone, slot 56: ProgSVT** (always on)
- Built from the `SVT CLEAN PUSHED (SVT-CL)` NAM and the Mesa215 IR, combined into one snaptone.
- Real Ampeg SVT-CL on the clean-pushed setting, into the Mesa215 2x15 IR.
- Myung's tone is Mesa. No Mesa bass NAM on hand, so a pushed SVT into a Mesa 2x15 gets the cab half right.
- Gain: 54, VOL: 50, Bass: 60, Middle: 55, Treble: 60
- Gain 54: a little over default. This part wants more push than the other ProgSVT patches.
- Bass 60: more low end.
- Middle 55: a touch more midrange.
- Treble 60: more top end.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 56 directly.

**EQ — Bass EQ 2**, always on.
50Hz: 0, 120Hz: -3, 400Hz: -6, 800Hz: +8, 4.5kHz: +10.
A dip around 400Hz keeps the tone from getting boxy under two guitars; the push at 800Hz and 4.5kHz is where the riff's attack and definition live.

**MOD — off.** No modulation — this part needs to sit dead center and hit like a hammer, not shimmer.

**DLY — off.** Straight, driving part. No delay.

**RVB — Room**, on CTL, inverted relative to PRE.
Mix: 35, Decay: 45, Trail: true.
On for the quieter intro/interlude passages — a little ambiance to open the space up when the band thins out.
Off for the driving main riff — dry and dead center so it hits as hard as possible.

## CTL footswitch

Two modules on CTL: PRE (Micro Boost) and RVB (Room), inverted against each other.

- **CTL off** — the resting state the patch loads into. Quieter intro/interlude sound: no boost, room reverb engaged for a little air.
- **CTL on** — driving main riff and instrumental unison sections. Boost engaged, room reverb drops out, dry and locked dead center with the kick.

Engage CTL going into the main riff, back off for the interludes. Same amp tone throughout — this is a dynamics switch, not a tone change.
