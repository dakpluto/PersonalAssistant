# You — Candlebox

Bass: Harley Benton P/J, 5-string, passive. Full board.
1993 (self-titled *Candlebox*). ~78 BPM (estimate — no hard chart reference, tempo isn't load-bearing for the tone choices below). Classic early-90s grunge-era dynamic: quiet, clean, restrained verses building into a big, driven, anthemic chorus. The bass job tracks that build directly — warm and supportive at rest, pushed and present once the chorus hits.

CTL Off = verse. CTL On = chorus.

## Why a NAM here

Darkglass Vintage Deluxe (Slot 61) — the warmer, more vintage-tube-flavored of the Darkglass drive captures, a better fit for a 90s alt-rock/grunge tone than the more modern, precise Alpha Omega captures or the flatter clean voicing of Harmonic Booster/B7K Ultra (both already used elsewhere in this set). Dialed at a moderate Gain rather than clean or maxed — a bit of natural warmth and looseness baked in at rest fits this song's era and character better than a pristine clean tone would. Per the current NAM weighting (bass NAMs get strong preference), this beats a built-in AMP/CAB or one of the bass cab IRs for this patch.

A NAM can't be footswitched mid-patch (one capture per preset), so the verse-to-chorus dynamic comes from the same mechanism used elsewhere in this set: a CTL-assigned boost and reverb around a constant NAM voice, not a change in the amp/drive character itself.

## GP-5 Settings

Module order: NR → PRE → DST → AMP → CAB → EQ → MOD → DLY → RVB

**NR — Gate**
- THRE: 24
- Always on. Moderate — enough to clean up idle noise on a NAM with some inherent drive baked in, without choking sustained notes.

**PRE — Micro Boost** (MXR M133 Micro Amp)
- Gain: 55
- **CTL switch.** Off = bypassed, On = engaged.
- Off (verse) keeps the part warm and restrained, sitting under the clean guitars. On (chorus) pushes it forward to match the big, driven payoff — a clean lift, not a tone change.

**DST — Off**
Not used. The Vintage Deluxe NAM already carries this patch's drive character — a second GP-5 drive stage on top would just muddy it.

**AMP / CAB — Off (NAM in use)**
- **NAM: Darkglass Vintage Deluxe, Slot 61.**
- Settings: Gain 45, VOL 65, Bass 55, Middle 58, Treble 55.
- Gain at 45 — enough natural warmth/looseness for a grunge-era tone, not clean, not maxed-aggressive. Middle nudged up slightly for presence under the chorus's wall of guitars.
- `AMP` and `CAB` both `model: null` — a NAM always replaces both.

**EQ — Bass EQ 1**
- 33Hz: +2, 150Hz: +1, 600Hz: -3, 2kHz: +6, 8kHz: +2, VOL: 54
- Always on, both CTL states. Modest low-end weight, a 600Hz dip to avoid grunge-mix mud, and a real 2kHz push so the bass cuts through the chorus's wall of guitars instead of disappearing under it.

**MOD — B-Chorus** (Boss CE-2B for Bass)
- Depth: 12, Rate: 0.4Hz, VOL: 50
- Always on, both states. Standard light touch — just enough shimmer underneath, not an obvious effect. This song isn't specifically known for a drenched chorus tone, so no exception to the usual light-modulation rule.

**DLY — Off**
Not used. No delay anywhere on this part.

**RVB — Hall**
- Mix: 28, Decay: 45, Trail: On
- **CTL switch.** Off = bypassed, On = engaged.
- Off (verse) stays dry and close, matching the clean, intimate verses. On (chorus) opens up with a genuine swell to match the song's big anthemic payoff.

### CTL Summary (GP-5)
- **CTL Off — Verse (default load state):** Micro Boost and Hall both bypassed. Warm, restrained, sits under the clean guitars.
- **CTL On — Chorus:** Micro Boost and Hall both engaged. A real push plus a reverb swell for the big, driven hook.

## Full Pedalboard

Signal chain order: Flamma FS-08 Octave → Donner Ultimate Comp → Donner Stylish Fuzz → Joyo Tidal Wave → Joyo Narcissus → Valeton GP-5.

**Flamma FS-08 Octave — bypassed**
- All octave knobs (-2OCT, -OCT, +OCT, +2OCT) at 0, Dry at 100
- No octave texture anywhere in this song.

**Donner Ultimate Comp — engaged**
- COMP: 42, TONE: 52, LEVEL: 55, Mode: NORMAL
- Evens out dynamics across a song with a genuinely big quiet-to-loud swing — keeps the verse controlled and the chorus from spiking unevenly. NORMAL mode — nothing extra to brighten, the Vintage Deluxe's own voicing already has enough character.

**Donner Stylish Fuzz — bypassed**
No separate fuzz texture — the Vintage Deluxe NAM already supplies this patch's drive character; stacking a fuzz pedal on top would be redundant and muddy the tone.

**Joyo Tidal Wave — engaged**
- Drive: 20, Blend: 30, Presence: 52, Level: 55
- Treble: 52, Middle: 55, Bass: 55
- Mid-Frequency toggle: 500Hz (body and warmth, fits the vintage-drive character)
- Bass-Shift toggle: 40Hz (fuller low end)
- Cab-Sim (DI out): On
- Ground Lift: Off (only flip on if a specific room throws hum)
- Drive kept light — foundational glue and a consistent DI feed, not a second tone-shaping gain stage. The NAM carries the actual drive character.

**Joyo Narcissus — bypassed**
Modulation is handled by the GP-5's own MOD module (B-Chorus, light, always on). Stacking this pedal on top would fight with that.

**Valeton GP-5**
See GP-5 settings above.

## Footswitch Choreography

- **Verse:** GP-5 CTL off. Comp and Tidal Wave running underneath, unchanged.
- **Chorus:** GP-5 CTL on. Step on it going into the big hook, off again coming back down to the next verse.
