# Metropolis1-DT — Metropolis Pt. 1, The Miracle and the Sleeper by Dream Theater

Images and Words, 1992. Est. ~130 BPM.
John Myung's bass here is aggressive and technical — locked tight to the double-kick riff, present enough to cut through two guitars and keyboards without turning to mush. That's a different problem than a pocket groove: this part needs bite and definition first, low end second.
GP-5 only, P/J bass, no pedalboard.

## AMP: Classic Bass (Ampeg SVT) + DST: Bass OD + CAB: Hartke410 IR (User IR 6)

Rebuilt 2026-09-18 off the GP-5's own AMP/DST + a loaded IR — NAMs are off for now (Valeton N->S volume issue, device-side). The old NAM was the Darkglass Alpha Omega's controlled, saturated Alpha (distortion) side — modern metal bass grind without the fuzz side's wooliness, aggressive but articulate. Standing that in: Classic Bass for the amp foundation, Bass OD always-on and pushed hard for the distortion character, and Hartke410 for CAB — ir.md calls that cab's bright, aggressive aluminum-cone voicing out by name as pairing well with a driven bass tone "alongside Bass OD," which is exactly the setup here.

- AMP Gain: 50, Bass: 60, Middle: 55, MidFreq: 1.6kHz, Treble: 60, VOL: 70 — enough low end to matter without swallowing the attack, mids kept present so the part reads as a note under the guitars.
- DST (Bass OD) Gain: 68, Blend: 75, VOL: 65, Bass: 58, Treble: 55 — real distortion, not edge-of-breakup, this riff is meant to hit hard. Always on — the baseline texture, not a footswitched extra.

## Module chain

**NR — Gate**, always on.
THRE: 30. High-gain NAM at this setting picks up noise between hits — tightens the low end so the riff stops cleanly instead of smearing.

**PRE — Micro Boost**, on CTL.
Gain: 45 when engaged.
Off for the quieter intro/interlude passages, on for the driving main riff and instrumental unison sections — same amp tone throughout, just pushed harder up front when the song calls for it.

**DST — Bass OD**, always on. Gain 68, Blend 75, VOL 65, Bass 58, Treble 55. Baseline distortion layer, independent of the PRE boost's CTL toggle.

**AMP — Classic Bass**, always on. Gain 50, Bass 60, Middle 55, MidFreq 1.6kHz, Treble 60, VOL 70.

**CAB — User IR 6 (Hartke410)**, always on. VOL 65.

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
