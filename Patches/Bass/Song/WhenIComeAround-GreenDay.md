# When I Come Around — Green Day

Bass: Harley Benton P/J, 5-string, passive. Full board.
From *Dookie* (1994), ~119 BPM.
The more laid-back cousin to "Basket Case" — same Dirnt blended clean+dirty bass character, but this song sits at a more relaxed, groove-oriented tempo rather than a sprint. Fairly consistent energy throughout, with a small lift into the "when I come around" chorus hook.

CTL off = the driving-but-relaxed verse groove. CTL on = the chorus lift.

## GP-5 settings

Module order: NR → PRE → DST → AMP → CAB → EQ → MOD → DLY → RVB.

**NR — Gate**
- THRE: 20
- Always on. Moderate threshold — real grit from the Bass OD, needs some cleanup between notes.

**PRE — Micro Boost — On CTL**
- Gain: 45
- CTL off: bypassed (verse). CTL on: engaged (chorus).
- Verse already carries itself at a relaxed groove. Chorus gets a clean push to lift the hook.

**DST — Bass OD**
- Gain: 48, Blend: 68, VOL: 58, Bass: 55, Treble: 56
- Always on, same for both CTL states.
- Slightly less pushed than the "Basket Case" build (Gain 48 vs. 55) — this song's more laid-back tempo doesn't need quite as much edge, but the same blended clean+dirty Dirnt character carries through both songs.

**AMP/CAB — NAM SnapTone, slot 55: BrightSVT** (always on)
- Built from the `SVT SANS BRIGHT DRIVE (SVT-CL)` NAM and the Hartke410 IR, combined into one snaptone.
- Real Ampeg SVT-CL with the bright drive setting, into the aluminum-cone Hartke410 IR.
- Dirnt again: bright, driven, picked. Same rig logic as Basket Case.
- Gain: 48, VOL: 50, Bass: 55, Middle: 56, Treble: 58
- Gain 48: a little under default. This part wants less push than the other BrightSVT patches.
- Bass 55: a touch more low end.
- Middle 56: more midrange.
- Treble 58: more top end.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 55 directly.

**EQ — Bass EQ 1**
- 33Hz: +2, 150Hz: -1, 600Hz: +2, 2kHz: +4, 8kHz: +3, VOL: 55
- Always on, same for both CTL states.
- Bright and present, though pulled back slightly from "Basket Case" — this tune doesn't need to fight quite as hard through the mix at its more relaxed tempo.

**MOD — Off**
- No modulation. Straightforward pop-punk tone.

**DLY — Off**
- Not used.

**RVB — Room — On CTL**
- Mix: 16, Decay: 26, Trail: On
- CTL off: bypassed (verse — tight and dry). CTL on: engaged (chorus).
- A light touch of room for the chorus hook, kept subtle in line with 90s pop-punk's generally dry production.

## CTL summary

- **CTL Off — Verse.** Driving but relaxed pop-punk groove.
- **CTL On — Chorus.** Boost and room reverb engage together for the "when I come around" hook.
- Engage CTL right as the chorus hits, back off returning to the verse.

## Full pedalboard (signal chain order)

**1. Flamma FS-08 Octave — Bypassed**
- Footswitch off. No octave layering needed for this driving pop-punk groove.

**2. Donner Ultimate Comp — Engaged**
- COMP: 48
- TONE: 58
- LEVEL: 58
- Mode: TREBLE
- Keeps the picking even and consistent. TREBLE mode keeps pick attack bright ahead of the Tidal Wave and the GP-5's own Bass OD.

**3. Donner Stylish Fuzz — Bypassed**
- Footswitch off. Same reasoning as "Basket Case" — Dirnt's dirt is a blended overdrive, not a fuzz, and the GP-5's own Bass OD already covers that job.

**4. Joyo Tidal Wave — Engaged**
- Drive: 25
- Blend: 50
- Presence: 60
- Level: 58
- Treble: 56
- Middle: 55
- Bass: 52
- Mid-Frequency: 1000Hz
- Bass-Shift: 80Hz
- Cab-Sim (DI out): Off
- Ground Lift: Off
- Adds baseline drive and presence, matching this song's punchy but relaxed pop-punk energy.

**5. Joyo Narcissus — Bypassed**
- Footswitch off. No chorus — matches the MOD-off call on the GP-5. Bright, direct pop-punk tone throughout.

**6. Valeton GP-5** — see settings above.
