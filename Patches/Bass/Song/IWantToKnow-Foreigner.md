# I Want to Know What Love Is — Foreigner

Bass: Harley Benton P/J, 5-string, passive. Full board.
1984 AOR power ballad (*Agent Provocateur*). ~67 BPM (estimate — no hard chart reference, tempo isn't load-bearing for the tone choices below). Textbook quiet-verse-to-massive-choir-chorus structure — piano and vocal carry the verses almost alone, and the chorus detonates into full band plus gospel choir. The bass job is to stay warm, simple, and out of the way in the verses, then lean in for the chorus lift without ever getting aggressive — this is a ballad, not a rock song, even at its biggest.

## Why a NAM here

Darkglass B7K Ultra (Slot 64), dialed low-gain rather than driven. Three of the other four Darkglass captures in the library (Vintage Deluxe, Alpha Omega Distortion/Fuzz) are voiced for aggressive/distorted tones — wrong genre entirely for this song. The Harmonic Booster capture (Slot 60) is actually clean-voiced too (a harmonic-enhancer boost, not a drive pedal — see `NAMs/nams.md`) and would be a reasonable alternative pick here; B7K Ultra was chosen instead for its more flexible tone-shaping (Gain/Bass/Middle/Treble all independently dialed), which gave more direct control over the warm, present target tone than a pure boost pedal capture would. Per the current NAM weighting (bass NAMs get strong preference), either beats reaching for a built-in AMP/CAB or one of the new bass cab IRs for this patch.

## GP-5 Settings

Module order: NR → PRE → DST → AMP → CAB → EQ → MOD → DLY → RVB

**NR — Gate**
- THRE: 18
- Always on. Low-gain, clean patch — just enough to clean up idle noise, nothing more aggressive needed.

**PRE — Micro Boost** (MXR M133 Micro Amp)
- Gain: 48
- **CTL switch.** Off = bypassed, On = engaged.
- Same mechanism as the site's other verse/chorus worship-ballad patches: a simple, clean volume/presence lift, no tone coloring. Off (verse) stays intimate, sitting under the piano. On (chorus) pushes the part forward enough to sit with the choir and full band, without turning into a different tone.

**DST — Off**
Not used. No drive anywhere in this tone — the NAM stays clean regardless of CTL state.

**AMP / CAB — Off (NAM in use)**
- **NAM: Darkglass B7K Ultra, Slot 64.**
- Settings: Gain 28, VOL 65, Bass 58, Middle 55, Treble 55.
- Gain kept low — this is a clean tone, not a driven one, despite the capture's usual reputation as a metal-bass tool. Bass pushed to 58 for the warmth and low-end weight this song's big chorus wants. Middle and Treble both moderate — present without being aggressive or scooped.
- `AMP` and `CAB` both `model: null` — a NAM always replaces both.

**EQ — Bass EQ 1**
- 33Hz: +4, 150Hz: +1, 600Hz: -2, 2kHz: +3, 8kHz: +1, VOL: 52
- Always on, both CTL states. Gentle low-end weight for the ballad's foundation, a small 600Hz dip to avoid boxiness, a modest 2kHz push for note definition under the choir. Nothing aggressive — this whole patch stays warm and unforced.

**MOD — B-Chorus** (Boss CE-2B for Bass)
- Depth: 15, Rate: 0.4Hz, VOL: 50
- Always on, both states. Light touch, per the usual rule — just enough shimmer to give it that 80s ballad width, not an obvious effect.

**DLY — Off**
Not used. Space in this patch comes from the reverb, not repeats.

**RVB — Hall**
- Mix: 33, Decay: 58, Trail: On
- **CTL switch.** Off = bypassed, On = engaged.
- Off (verse) stays dry and close — the piano and vocal lead, bass stays out of the way. On (chorus) adds a big, lush hall swell to match the choir/full-band payoff — one of the biggest chorus moments in the genre deserves a genuinely big reverb lift, not a token one.

### CTL Summary (GP-5)
- **CTL Off — Verse (default load state):** Micro Boost and Hall both bypassed. Warm, simple, intimate — supports the piano/vocal without competing.
- **CTL On — Chorus:** Micro Boost and Hall both engaged. A gentle push plus a big reverb swell — opens the part up for the choir/full-band chorus without changing the fundamental tone.

## Full Pedalboard

Signal chain order: Flamma FS-08 Octave → Donner Ultimate Comp → Donner Stylish Fuzz → Joyo Tidal Wave → Joyo Narcissus → Valeton GP-5.

**Flamma FS-08 Octave — bypassed**
- All octave knobs (-2OCT, -OCT, +OCT, +2OCT) at 0, Dry at 100
- No octave texture anywhere in this song.

**Donner Ultimate Comp — engaged**
- COMP: 40, TONE: 50, LEVEL: 55, Mode: NORMAL
- Evens out finger-attack dynamics on a part that's mostly sustained notes and simple lines — keeps everything sitting at a consistent, controlled level across the song's big dynamic range (whisper-quiet verse to full chorus). NORMAL mode — nothing to brighten, the B7K's own voicing is already present enough.

**Donner Stylish Fuzz — bypassed**
No fuzz texture anywhere in this song.

**Joyo Tidal Wave — engaged**
- Drive: 18, Blend: 25, Presence: 50, Level: 55
- Treble: 52, Middle: 55, Bass: 55
- Mid-Frequency toggle: 500Hz (body and warmth, fits the ballad better than pick-attack cut-through)
- Bass-Shift toggle: 40Hz (fuller, warmer low end — this is a spacious ballad arrangement, not a busy mix that needs extra tightness)
- Cab-Sim (DI out): On
- Ground Lift: Off (only flip on if a specific room throws hum)
- Drive kept very light — this pedal is doing foundational glue and a consistent DI feed only, not tone-shaping. The B7K NAM is carrying the actual tone.

**Joyo Narcissus — bypassed**
Modulation is handled by the GP-5's own MOD module (B-Chorus, light, always on). Stacking this pedal on top would fight with that.

**Valeton GP-5**
See GP-5 settings above.

## Footswitch Choreography

- **Verse:** GP-5 CTL off. Comp and Tidal Wave running underneath, unchanged.
- **Chorus:** GP-5 CTL on. Step on it going into the choir/full-band lift, off again coming back down to the next verse.
