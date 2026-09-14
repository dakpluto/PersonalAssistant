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

**AMP — Classic Bass (Ampeg SVT)**
- Gain: 40, Bass: 55, Middle: 56, MidFreq: 800Hz, Treble: 58, VOL: 66
- Always on, same for both CTL states.
- Same amp family as "Basket Case" — SVT is a genuine punk-rock bass amp choice, and keeping it consistent across the two songs makes sense for the same artist and era.

**CAB — User IR 4 (EBS410)**
- VOL: 58
- Always on, same for both CTL states.
- Bright, clean-favoring high-mid character — a different flavor from "Basket Case"'s Hartke410, matching this song's slightly more relaxed, melodic delivery.

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

## CAB IR — EBS410 (Slot 4)

- EBS ProLine 410 with a 2" tweeter, confirmed loaded on User IR slot 4. Accentuated high-mids that sit well in a mix, particularly on clean tones.
- Encoded directly into the `.prst` as a real, active CAB reference (`User IR 4`) — no manual loading needed for this one.

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
