# Ain't Nothing 'Bout You — Brooks & Dunn

Bass: Harley Benton P/J, 5-string, passive. Full board.
From *Steers & Stripes* (2001), ~128 BPM.
A fast, danceable, driving neo-traditional country hit — twangy Telecaster and steel guitar up front, a two-step energy that stays high throughout. The bass job is to stay clean, punchy, and present, driving the groove without ever getting distorted or aggressive — country bass leans on note definition and drive, not grit. Energy stays fairly consistent song-wide, with a small lift at the chorus.

CTL off = the driving verse. CTL on = the chorus lift.

## GP-5 settings

Module order: NR → PRE → DST → AMP → CAB → EQ → MOD → DLY → RVB.

**NR — Gate**
- THRE: 14
- Always on. Low-moderate threshold — clean, driving country tone, minimal grit.

**PRE — Micro Boost — On CTL**
- Gain: 48
- CTL off: bypassed (verse). CTL on: engaged (chorus).
- Verse already drives hard on its own. Chorus gets a clean push to lift energy slightly.

**DST — Off**
- No drive. Country bass stays clean — the twang and drive come from the guitars and steel, not the low end.

**AMP — Foxy Bass (Vox AC-100)**
- VOL: 68, Bass: 58, Treble: 56
- Always on, same for both CTL states.
- A simple, direct bass voicing rather than a modern high-headroom design — fits the straightforward, unfussy character of country bass tone well.

**CAB — User IR 6 (Hartke410)**
- VOL: 60
- Always on, same for both CTL states.
- Bright, aggressive aluminum-cone voicing — keeps this cutting through a fast, driving mix of twangy guitars and steel without adding its own grit.

**EQ — Bass EQ 1**
- 33Hz: +2, 150Hz: -1, 600Hz: +2, 2kHz: +4, 8kHz: +3, VOL: 55
- Always on, same for both CTL states.
- +4 at 2kHz and +3 at 8kHz keep this bright and present, matching the driving, danceable energy of the song. -1 at 150Hz keeps it from getting muddy at this tempo.

**MOD — Off**
- No modulation. Straightforward, driving country-rock tone.

**DLY — Off**
- Not used.

**RVB — Room — On CTL**
- Mix: 16, Decay: 26, Trail: On
- CTL off: bypassed (verse — tight and dry). CTL on: engaged (chorus).
- A light touch of room for the chorus, kept subtle to match this genre's generally dry, direct production.

## CAB IR — Hartke410 (Slot 6)

- Hartke XL410 with aluminum cones, confirmed loaded on User IR slot 6. Bright, aggressive voicing suited to a driven, present bass tone.
- Encoded directly into the `.prst` as a real, active CAB reference (`User IR 6`) — no manual loading needed for this one.

## CTL summary

- **CTL Off — Verse.** Driving, clean, punchy country groove.
- **CTL On — Chorus.** Boost and room reverb engage together for a slight lift.
- Engage CTL right as the chorus hits, back off returning to the verse.

## Full pedalboard (signal chain order)

**1. Flamma FS-08 Octave — Bypassed**
- Footswitch off. No octave layering needed for this driving country groove.

**2. Donner Ultimate Comp — Engaged**
- COMP: 48
- TONE: 58
- LEVEL: 58
- Mode: TREBLE
- Keeps the fast, driving groove even and consistent. TREBLE mode keeps pick/finger attack bright, matching the clean, present character this whole tone is built around.

**3. Donner Stylish Fuzz — Bypassed**
- Footswitch off. No fuzz anywhere — country bass stays clean.

**4. Joyo Tidal Wave — Engaged**
- Drive: 15
- Blend: 30
- Presence: 58
- Level: 58
- Treble: 56
- Middle: 55
- Bass: 55
- Mid-Frequency: 1000Hz
- Bass-Shift: 80Hz
- Cab-Sim (DI out): Off
- Ground Lift: Off
- Adds presence and attack. Mid-Frequency at 1000Hz and Bass-Shift at 80Hz both push toward articulation over body, matching this song's fast, danceable, driving energy.

**5. Joyo Narcissus — Bypassed**
- Footswitch off. No chorus — matches the MOD-off call on the GP-5. Clean, direct country tone throughout.

**6. Valeton GP-5** — see settings above.
