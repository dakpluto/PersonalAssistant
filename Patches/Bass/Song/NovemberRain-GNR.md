# November Rain — Guns N' Roses

Bass: Harley Benton P/J, 5-string, passive. Full board.
From *Use Your Illusion I* (1991). Roughly ~52 BPM base pulse, though the song shifts feel across its nine minutes — the piano intro sits slower and more rubato, the outro rock sections push harder even at a similar underlying tempo.
Duff McKagan's job here is the same "quiet build to massive climax" arc as "Under the Bridge" and "Purple Rain," but this one lands as straight-up hard rock at the top — GNR's blues-rock roots come through hard once Slash's solo and the outro kick in. Verses stay restrained behind the piano; the outro turns into a genuinely driven rock wall.

CTL off = the quiet verse, following the piano. CTL on = the big driven rock climax/outro.

## GP-5 settings

Module order: NR → PRE → DST → AMP → CAB → EQ → MOD → DLY → RVB.

**NR — Gate**
- THRE: 20
- Always on. Moderate threshold — needs to stay clean for the quiet verses but also handle real distortion once the DST engages for the outro.

**PRE — Micro Boost — On CTL**
- Gain: 52
- CTL off: bypassed (verse). CTL on: engaged (climax).
- Adds extra push on top of the DST engagement for the full outro buildup.

**DST — La Charger (MI Audio Crunch Box) — On CTL**
- Gain: 60, Tone: 58, VOL: 62
- CTL off: bypassed (verse — amp alone, clean-to-edge). CTL on: engaged (climax).
- Crunch Box gives a thick, saturated rock crunch rather than a harsh, buzzy distortion — the right character for a hard rock power ballad climax, not a metal one. This is what turns the tone from "restrained" to "driving" for the back half of the song.

**AMP/CAB — NAM SnapTone, slot 53: CleanSVT** (always on)
- Built from the `SVT CLEAN (SVT-CL)` NAM and the Apg810 IR, combined into one snaptone.
- Real Ampeg SVT-CL preamp on its clean setting, into the Apg810 8x10 IR.
- Duff's ballad tone is clean and big. Clean SVT into an 8x10.
- Gain: 49, VOL: 50, Bass: 58, Middle: 54, Treble: 50
- Gain 49: a little under default. This part wants less push than the other CleanSVT patches.
- Bass 58: more low end.
- Middle 54: a touch more midrange.
- Treble 50: flat.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 53 directly.

**EQ — Bass EQ 1**
- 33Hz: +3, 150Hz: 0, 600Hz: +2, 2kHz: +3, 8kHz: +1, VOL: 55
- Always on, same for both CTL states.
- +3 at 2kHz keeps the line present and defined once the DST and the rest of the band pile in for the outro. +2 at 600Hz adds midrange body for when the distortion engages, without making the quiet verse sound boxy.

**MOD — Off**
- No modulation. Straightforward hard rock ballad tone.

**DLY — Off**
- Not used.

**RVB — Hall — On CTL**
- Mix: 30, Decay: 48, Trail: On
- CTL off: bypassed (verse — dry, intimate, right with the piano). CTL on: engaged (climax).
- A big Hall for the huge, cinematic outro — strings, choir-like backing vocals, and Slash's solo all call for real scale here.

## CTL summary

- **CTL Off — Verse.** Clean-to-edge amp tone, dry, restrained, sitting with the piano.
- **CTL On — Climax.** La Charger and Micro Boost engage, Hall opens up — driven, huge, matching the outro's guitar solo and cinematic scale.
- Engage CTL as the song turns the corner into its second half and builds toward the outro; there's no need to toggle back off once it's rolling.

## Full pedalboard (signal chain order)

**1. Flamma FS-08 Octave — Bypassed**
- Footswitch off. No octave layering needed for this part.

**2. Donner Ultimate Comp — Engaged**
- COMP: 48
- TONE: 55
- LEVEL: 58
- Mode: TREBLE
- Moderate compression keeps the part consistent across both the restrained verse and the driven outro. TREBLE mode keeps attack alive once the distortion kicks in.

**3. Donner Stylish Fuzz — Bypassed**
- Footswitch off. The GP-5's own La Charger gives a more controlled, polished rock crunch than a fuzz would — the right call for a hard rock power ballad rather than something looser and messier.

**4. Joyo Tidal Wave — Engaged**
- Drive: 25
- Blend: 50
- Presence: 58
- Level: 58
- Treble: 55
- Middle: 55
- Bass: 55
- Mid-Frequency: 500Hz
- Bass-Shift: 80Hz
- Cab-Sim (DI out): Off
- Ground Lift: Off
- Adds body and presence feeding the amp. Bass-Shift at 80Hz keeps things defined enough to cut through the huge outro wall of guitars and strings, even though it costs a little low-end fullness in the quieter verse.

**5. Joyo Narcissus — Bypassed**
- Footswitch off. No chorus — matches the MOD-off call on the GP-5. Direct rock tone throughout.

**6. Valeton GP-5** — see settings above.

## Note on the full board vs. the `.prst`

The `.prst` file only encodes the GP-5's own 9 modules (NR through RVB). The Flamma octave, Donner Ultimate Comp, Donner Stylish Fuzz, and Joyo Tidal Wave/Narcissus settings above are not and cannot be part of that file — they're pedals set by hand on the board, documented here so the full patch is reproducible.
