# When Wind Meets Fire — Elevation Worship

Elevation Worship. Modern worship anthem. About 72 BPM, est. I haven't verified the tempo.
Bass: Harley Benton P/J, 5-string, passive. GP-5 only.
Modern worship bass is the floor under pads, keys, and ambient guitars: sustained roots, deep sub, and clear octave movement when the band opens up.
It builds from sparse and warm in the verses to driven and huge in the chorus and bridge.
Play with your fingers. Solo the P pickup or blend with the P forward. Tone knob around 50%. The 5-string low B gives the sub-weight on the big sections.

## Module chain

**NR — Gate**, always on.
THRE: 10. Barely on. Sustained notes need to ring out.

**PRE — COMP4 (Keeley C4)**, always on.
Sustain: 45, Attack: 40, Clipping: 40, VOL: 58.
Holds the long notes steady. Attack 40 lets a little transient through so the note start stays defined under the pads.

**DST — Bass OD**, on CTL.
Gain: 30, Blend: 30, VOL: 55, Bass: 55, Treble: 45.
Adds grit in the mids for the big sections while Blend 30 keeps the clean low end intact. Treble 45 keeps the fizz down.

**AMP/CAB — NAM SnapTone, slot 59: WorshipSVT** (always on)
- Built from the `SVT CLEAN PUSHED (SVT-CL)` NAM and the Ampeg SVT Bright Beta52 IR, combined into one snaptone.
- Real Ampeg SVT-CL on the clean-pushed setting, into a bright, Beta 52-miked SVT 4x10 IR.
- Modern worship build. Pushed SVT with a bright 4x10 top end.
- Gain: 48, VOL: 50, Bass: 62, Middle: 45, Treble: 40
- Gain 48: a little under default. This part wants less push than the other WorshipSVT patches.
- Bass 62: more low end.
- Middle 45: midrange pulled back a little.
- Treble 40: top end pulled back noticeably.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 59 directly.

**EQ — Bass EQ 1**, always on.
33Hz: +2, 150Hz: +1, 600Hz: -2, 2kHz: +1, 8kHz: -3, VOL: 52.
+2 at 33Hz for sub weight on the low B. -2 at 600Hz clears the mud. +1 at 2kHz keeps the attack readable on small speakers. The very top is rolled off.

**MOD — off.** **DLY — off.**

**RVB — Hall**, on CTL.
Mix: 12, Decay: 40, Trail: on.
A small amount of hall so the bass joins the big ambient wash during the payoff. Mix 12 is low so the low end stays tight.

## CTL footswitch

On CTL: DST (Bass OD), RVB (Hall).

- **CTL off** — Verses and quiet sections. Clean, deep, and sustained. This is the resting state.
- **CTL on** — Choruses and the bridge build. Gritty mids plus a hint of hall so the bass rises with the band.

Engage it when the band opens up. Step off for breakdowns and verses.
