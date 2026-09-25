# You — Candlebox

Bass: Harley Benton P/J, 5-string, passive. Full board.
1993 (self-titled *Candlebox*). ~78 BPM (estimate — no hard chart reference, tempo isn't load-bearing for the tone choices below). Classic early-90s grunge-era dynamic: quiet, clean, restrained verses building into a big, driven, anthemic chorus. The bass job tracks that build directly — warm and supportive at rest, pushed and present once the chorus hits.

CTL Off = verse. CTL On = chorus.

## GP-5 Settings

Module order: NR → PRE → DST → AMP → CAB → EQ → MOD → DLY → RVB

**NR — Gate**
- THRE: 24
- Always on. Moderate — enough to clean up idle noise once the boost pushes the snaptone into grit, without choking sustained notes.

**PRE — Micro Boost** (MXR M133 Micro Amp)
- Gain: 55
- **CTL switch.** Off = bypassed, On = engaged.
- Off (verse) keeps the part warm and restrained, sitting under the clean guitars. On (chorus) pushes it forward to match the big, driven payoff — a clean lift, not a tone change.

**DST — Off**
Not used. The amp's own moderate gain carries this patch's drive character — a separate drive pedal on top would just muddy it.

**AMP/CAB — NAM SnapTone, slot 53: CleanSVT** (always on)
- Built from the `SVT CLEAN (SVT-CL)` NAM and the Apg810 IR, combined into one snaptone.
- Real Ampeg SVT-CL preamp on its clean setting, into the Apg810 8x10 IR.
- 90s alt-rock. Clean SVT for the verses. DST handles the heavy parts.
- Gain: 54, VOL: 50, Bass: 55, Middle: 58, Treble: 55
- Gain 54: a little over default. This part wants more push than the other CleanSVT patches.
- Bass 55: a touch more low end.
- Middle 58: more midrange.
- Treble 55: a touch more top end.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 53 directly.

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
- Evens out dynamics across a song with a genuinely big quiet-to-loud swing — keeps the verse controlled and the chorus from spiking unevenly. NORMAL mode — nothing extra to brighten, the SVT snaptone's own voicing already has enough character.

**Donner Stylish Fuzz — bypassed**
No separate fuzz texture — the Micro Boost pushing the SVT snaptone already supplies this patch's drive; stacking a fuzz pedal on top would be redundant and muddy the tone.

**Joyo Tidal Wave — engaged**
- Drive: 20, Blend: 30, Presence: 52, Level: 55
- Treble: 52, Middle: 55, Bass: 55
- Mid-Frequency toggle: 500Hz (body and warmth, fits the vintage-drive character)
- Bass-Shift toggle: 40Hz (fuller low end)
- Cab-Sim (DI out): On
- Ground Lift: Off (only flip on if a specific room throws hum)
- Drive kept light — foundational glue and a consistent DI feed, not a second tone-shaping gain stage. The boosted snaptone carries the actual drive.

**Joyo Narcissus — bypassed**
Modulation is handled by the GP-5's own MOD module (B-Chorus, light, always on). Stacking this pedal on top would fight with that.

**Valeton GP-5**
See GP-5 settings above.

## Footswitch Choreography

- **Verse:** GP-5 CTL off. Comp and Tidal Wave running underneath, unchanged.
- **Chorus:** GP-5 CTL on. Step on it going into the big hook, off again coming back down to the next verse.
