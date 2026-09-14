# Are You Gonna Be My Girl — Jet

Bass: Harley Benton P/J, 5-string, passive. Full board.
From *Get Born* (2003), ~137 BPM.
Mark Wilson's part is that instantly-recognizable descending riff that opens the song solo before the band crashes in — driving, raw, garage-rock energy from the first note. Verses and choruses sit at similar energy, but the chorus is where the full band (and the fuzzed-out guitar hook) piles in behind the vocal.

CTL off = the lean, driving verse riff. CTL on = the fuller chorus push.

## GP-5 settings

Module order: NR → PRE → DST → AMP → CAB → EQ → MOD → DLY → RVB.

**NR — Gate**
- THRE: 25
- Always on. A bit higher than a clean patch needs — there's real grit in this chain (Bass OD + a cranked amp model), so there's more to clean up between notes.

**PRE — Micro Boost — On CTL**
- Gain: 55
- CTL off: bypassed (verse). CTL on: engaged (chorus).
- Verse riff carries itself — it's the hook of the song. Chorus gets a clean push to sit level with the full band piling in.

**DST — Bass OD**
- Gain: 50, Blend: 70, VOL: 60, Bass: 58, Treble: 55
- Always on, same for both CTL states.
- This is the baseline garage-rock crunch that runs through the whole song, not just the chorus. Blend at 70 keeps the fundamental solid while still giving real edge to the tone.

**AMP — UK 800 (Marshall JCM800)**
- Gain: 50, PRES: 55, VOL: 65, Bass: 55, Middle: 60, Treble: 55
- Always on, same for both CTL states.
- Running the bass through a Marshall-style amp model instead of a clean bass amp is a deliberate call — that midrange bark is exactly the character garage-rock revival bass tones lean on (this era of bass playing borrows a lot from guitar amps). Gain stays moderate — this isn't a metal tone, it's a driving rock crunch.

**CAB — User IR 6 (Hartke410)**
- VOL: 60
- Always on, same for both CTL states.
- Bright, aggressive aluminum-cone voicing — exactly the cab `IRs/ir.md` flags for a driven bass tone like this one. Keeps the Marshall AMP's midrange bark from getting dark or woolly.

**EQ — Bass EQ 1**
- 33Hz: +3, 150Hz: -2, 600Hz: +2, 2kHz: +5, 8kHz: +3, VOL: 55
- Always on, same for both CTL states.
- Big +5 at 2kHz and +3 at 8kHz keep this bright and present — garage rock mixes are guitar-forward and loud, this part needs real cut to stay heard. -2 at 150Hz trims the mud that the Bass OD's Blend setting can add.

**MOD — Off**
- No modulation. Straight, raw rock tone — nothing here calls for it.

**DLY — Off**
- Not used.

**RVB — Room — On CTL**
- Mix: 20, Decay: 30, Trail: On
- CTL off: bypassed (verse). CTL on: engaged (chorus).
- Verse stays dry and tight. Chorus gets a touch of room to open up alongside the boost, matching the bigger, more anthemic feel of the full band coming in.

## CAB IR — Hartke410 (Slot 6)

- Hartke XL410 with aluminum cones — bright, aggressive voicing, confirmed loaded on User IR slot 6.
- Encoded directly into the `.prst` as a real, active CAB reference (`User IR 6`) — no manual loading needed for this one.

## CTL summary

- **CTL Off — Verse.** The driving, lean garage-rock riff, dry and tight.
- **CTL On — Chorus.** Boost and room reverb engage together, matching the full band and the fuzzed-out guitar hook piling in behind the vocal.
- Engage CTL right as the chorus hits, back off returning to the verse riff.

## Full pedalboard (signal chain order)

**1. Flamma FS-08 Octave — Bypassed**
- Footswitch off. This riff is instantly recognizable as-is — an octave stack would clutter that identity.

**2. Donner Ultimate Comp — Engaged**
- COMP: 55
- TONE: 60
- LEVEL: 60
- Mode: TREBLE
- Keeps the driving eighth-note picking even and consistent. TREBLE mode keeps pick attack bright and audible ahead of the Tidal Wave and the GP-5's own gain stages.

**3. Donner Stylish Fuzz — Bypassed**
- Footswitch off. The GP-5's own Bass OD and cranked AMP model already cover this song's grit — stacking a pedal fuzz on top of a 5-string P/J would risk turning the low end to mud.

**4. Joyo Tidal Wave — Engaged**
- Drive: 45
- Blend: 65
- Presence: 60
- Level: 60
- Treble: 55
- Middle: 55
- Bass: 55
- Mid-Frequency: 1000Hz
- Bass-Shift: 80Hz
- Cab-Sim (DI out): Off
- Ground Lift: Off
- Adds baseline drive character before the signal hits the GP-5's own gain stages. Mid-Frequency at 1000Hz (rather than the fuller 500Hz option) pushes pick/finger attack and cut-through, matching this song's raw, bright garage-rock energy. Bass-Shift at 80Hz keeps things tight against the drums.

**5. Joyo Narcissus — Bypassed**
- Footswitch off. No chorus — matches the MOD-off call on the GP-5. Raw, dry rock tone throughout.

**6. Valeton GP-5** — see settings above.
