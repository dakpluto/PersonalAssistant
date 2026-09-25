# Like the Way I Do — Melissa Etheridge

Bass: Harley Benton P/J, 5-string, passive. Full board.
From *Melissa Etheridge* (1988). ~80 BPM base pulse, though the song's intensity keeps climbing well past what that tempo alone suggests — a moody, harmonica-laced intro building through the verses into one of her most raw, unhinged vocal performances by the end.
This is the same "quiet build to massive climax" shape as a few other patches in this set, but the character is different — raw, bluesy, rootsy rock rather than symphonic or gospel. The climax here isn't cathedral-scale, it's visceral: driving, gritty, right in-your-face rather than washed in reverb.

CTL off = the moody, restrained intro/verse. CTL on = the raw, driving climax.

## GP-5 settings

Module order: NR → PRE → DST → AMP → CAB → EQ → MOD → DLY → RVB.

**NR — Gate**
- THRE: 22
- Always on. Moderate threshold — there's real distortion once the DST engages for the climax, needs cleanup between notes.

**PRE — Micro Boost — On CTL**
- Gain: 55
- CTL off: bypassed (intro/verse). CTL on: engaged (climax).
- Adds extra push on top of the DST engagement for the full-intensity outro.

**DST — Darktale (ProCo Rat, LM308) — On CTL**
- Gain: 65, Filter: 45, VOL: 62
- CTL off: bypassed (intro/verse — amp alone, some natural grit but not distorted). CTL on: engaged (climax).
- The Rat's raw, slightly fuzzy, mid-forward character is a better fit here than a cleaner, more polished distortion — this song's intensity is rootsy and unhinged, not slick.

**AMP/CAB — NAM SnapTone, slot 53: CleanSVT** (always on)
- Built from the `SVT CLEAN (SVT-CL)` NAM and the Apg810 IR, combined into one snaptone.
- Real Ampeg SVT-CL preamp on its clean setting, into the Apg810 8x10 IR.
- Driving 80s rock, but the bass stays clean. The DST stage adds any bite.
- Gain: 50, VOL: 50, Bass: 58, Middle: 55, Treble: 52
- Gain 50: the capture as built.
- Bass 58: more low end.
- Middle 55: a touch more midrange.
- Treble 52: a touch more top end.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 53 directly.

**EQ — Bass EQ 1**
- 33Hz: +3, 150Hz: 0, 600Hz: +3, 2kHz: +3, 8kHz: +1, VOL: 55
- Always on, same for both CTL states.
- +3 at 600Hz gives this a bluesy midrange growl that's present even before the distortion kicks in. +3 at 2kHz keeps it defined once the band and the DST both push harder for the climax.

**MOD — Off**
- No modulation. Raw and direct, matching the song's rootsy, unpolished character.

**DLY — Off**
- Not used.

**RVB — Room — On CTL (inverted)**
- Mix: 20, Decay: 30, Trail: On
- CTL off: engaged (intro/verse). CTL on: bypassed (climax).
- Inverted on purpose — the moody intro gets a touch of room for atmosphere, but the climax needs to stay dry and in-your-face. This isn't a symphonic, reverb-washed payoff like "November Rain" or "Purple Rain" — it's raw and visceral, so the reverb drops out right when the intensity peaks.

## CTL summary

- **CTL Off — Intro/verse.** Moody, restrained, a touch of room ambience. Some natural amp edge but no real distortion.
- **CTL On — Climax.** Darktale and Micro Boost engage, Room drops out — raw, dry, driving, matching the song's most intense, unhinged moment.
- Engage CTL as the song builds into its final full-intensity section and leave it on through to the end.

## Full pedalboard (signal chain order)

**1. Flamma FS-08 Octave — Bypassed**
- Footswitch off. No octave layering needed for this raw, direct rock tone.

**2. Donner Ultimate Comp — Engaged**
- COMP: 48
- TONE: 55
- LEVEL: 58
- Mode: TREBLE
- Moderate compression keeps this consistent across both the restrained intro and the driven climax. TREBLE mode keeps attack alive once the Darktale kicks in.

**3. Donner Stylish Fuzz — Bypassed**
- Footswitch off. The GP-5's own Darktale gives a more controlled Rat-style crunch than a fuzz would — the right call for a bluesy, driving rock intensity rather than a wall of noise.

**4. Joyo Tidal Wave — Engaged**
- Drive: 25
- Blend: 50
- Presence: 58
- Level: 58
- Treble: 55
- Middle: 55
- Bass: 55
- Mid-Frequency: 500Hz
- Bass-Shift: 40Hz
- Cab-Sim (DI out): Off
- Ground Lift: Off
- Adds body and presence feeding the amp. Bass-Shift at 40Hz keeps things fuller and warmer rather than tight — this is rootsy blues-rock, not punk or metal precision.

**5. Joyo Narcissus — Bypassed**
- Footswitch off. No chorus — matches the MOD-off call on the GP-5. Raw, direct tone throughout.

**6. Valeton GP-5** — see settings above.
