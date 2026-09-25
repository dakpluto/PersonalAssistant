# Machinehead — Bush

Sixteen Stone, 1994. 147 BPM, est.
Dave Parsons' bass sits low, dark, and driving — this is the grunge/alt-rock era, not a bright modern rock tone.
GP-5 only, P/J bass, no pedalboard.

## Module chain

**NR — Gate**, always on.
THRE: 28. A driven NAM at this gain level picks up noise between notes — this keeps the low end tight without choking sustain on the riff.

**PRE — Micro Boost**, on CTL.
Gain: 38 when engaged.
Off for the verse groove, on for the chorus. Same amp tone throughout, just louder and a bit more shoved into the front end for the hook.

**DST — off.**
The amp's own grind carries the grit. Stacking a drive pedal on top would just mud out the riff instead of adding character.

**AMP/CAB — NAM SnapTone, slot 57: GrittySVT** (always on)
- Built from the `SVT PUSHED (SVT-CL)` NAM and the Apg810 IR, combined into one snaptone.
- Real Ampeg SVT-CL pushed into grit, into the Apg810 8x10 IR.
- Grunge-era grit. Pushed SVT into an 8x10.
- Gain: 52, VOL: 50, Bass: 60, Middle: 58, Treble: 42
- Gain 52: a little over default. This part wants more push than the other GrittySVT patches.
- Bass 60: The low end that carries the riff.
- Middle 58: Pushed for grind and to cut through the guitars, not scooped.
- Treble 42: Kept dark on purpose. Bush's mix isn't a bright, clanky bass tone.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 57 directly.

**EQ — Bass EQ 2**, always on.
50Hz: +4, 120Hz: +2, 400Hz: -4, 800Hz: -2, 4.5kHz: +5, VOL: 55.
Small low-end reinforcement, a cut around 400Hz-800Hz to keep the V4B from getting boxy under the guitars, and a push at 4.5kHz for pick/finger attack so the riff reads as a note, not just low-end mush.

**MOD — off.** No modulation on this one — chorus/vibe would soften a riff that's supposed to hit like a hammer.

**DLY — off.** Straight, driving part. No delay.

**RVB — Room**, on CTL.
Mix: 24, Decay: 38, Trail: true.
Off for the verse — dry and tight, right on top of the beat.
On for the chorus, alongside the boost — gives the hook a little more size without turning it into a wash.

## CTL footswitch

Two modules on CTL: PRE (Micro Boost) and RVB (Room).

- **CTL off** — main verse/groove sound. Dry, tight, driving. This is the resting state the patch loads into.
- **CTL on** — chorus sound. Boosted front end plus a touch of room reverb, same amp tone, bigger and pushier for the hook.

Engage CTL going into each chorus, back off for the verses. Simple two-state song patch — no need for a third CTL'd module here.
