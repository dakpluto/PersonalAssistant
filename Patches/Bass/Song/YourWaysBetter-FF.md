# Your Ways Better — Forrest Frank

Bass: Harley Benton P/J, 5-string, passive. Full board.
Chill, lo-fi bedroom-pop worship — Forrest Frank's whole aesthetic (carried over from his Surfaces days) is warm, unhurried, and deliberately restrained, even at a chorus. ~92 BPM (estimate — I don't have a hard chart reference for this one, and tempo isn't load-bearing for the tone choices below).

This isn't a big-dynamics song. No arena swell, no gospel bridge moment. The bass job is round, warm, and pocketed — supportive, not a focal point. That said, the chorus hook still lifts a notch the way most pop choruses do, so this patch keeps a genuinely subtle CTL split: a touch of harmonic push and a whisper more room, not a wall of gain or a reverb bath. If the actual chorus turns out flatter than expected, CTL Off alone carries the whole song fine on its own.

## GP-5 Settings

Module order: NR → PRE → DST → AMP → CAB → EQ → MOD → DLY → RVB

**NR — Gate**
- THRE: 20
- Always on. Low-gain patch, just enough to clean up idle noise.

**PRE — COMP4** (Keeley C4)
- Sustain: 55, Attack: 55, Clip: 30, VOL: 100
- Always on. Firmer than a folk/ballad patch — bedroom pop wants that smooth, glued, "produced" bass sustain rather than raw finger dynamics. VOL 100 makes up the compression's gain loss.

**DST — Bass OD** (Boss ODB-3)
- Gain: 22, Blend: 22, VOL: 55, Bass: 55, Treble: 45
- **CTL switch.** Off = bypassed, On = engaged.
- This is the chorus lift, and it's deliberately subtle — low Gain, low Blend. Off (verse), the tone is pure and clean. On (chorus), it adds a touch of harmonic warmth and perceived energy without turning into an audible overdrive — the fundamental stays intact either way.

**AMP/CAB — NAM SnapTone, slot 52: AvalonAD2022** (always on)
- Built from the `Avalon - 38 dB - Chan 1 (Avalon AD2022)` NAM and no cab IR (straight DI), combined into one snaptone.
- Avalon AD2022 Class A preamp at 38 dB. A studio DI, not an amp: no speaker coloration.
- Modern pop production. Clean, tight DI bass under the programmed drums.
- Gain: 49, VOL: 50, Bass: 60, Middle: 50, Treble: 42
- Gain 49: a little under default. This part wants less push than the other AvalonAD2022 patches.
- Bass 60: more low end.
- Middle 50: flat.
- Treble 42: top end pulled back noticeably.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 52 directly.

**EQ — Bass EQ 2**
- 50Hz: +4, 120Hz: +2, 400Hz: -3, 800Hz: -2, 4.5kHz: 0, VOL: 52
- Always on, both states. Sub-focused low end for warmth, low-mid carved out to avoid boxiness, top end left flat — no bright presence push, keeps the whole tone sitting warm and back in the mix rather than cutting.

**MOD — B-Chorus** (Boss CE-2B for Bass)
- Depth: 12, Rate: 0.4Hz, VOL: 50
- Always on, both states. Very light touch — just enough shimmer to avoid a dead-flat DI tone, not an obvious chorus effect.

**DLY — Off**
Not used. No delay anywhere on this part.

**RVB — Room**
- Mix: 18, Decay: 30, Trail: On
- **CTL switch.** Off = bypassed, On = engaged.
- Off (verse) stays dry and tucked back. On (chorus) opens up with a small room — a whisper, not a swell, matching how understated this song's dynamics actually are.

### CTL Summary
- **CTL Off — Verse (default load state):** Bass OD and Room both bypassed. Clean, dry, pocketed — pure foundation tone.
- **CTL On — Chorus:** Bass OD and Room both engaged. A subtle harmonic lift plus a touch of space — noticeably "more," never "bigger."

## Full Pedalboard

Signal chain order: Flamma FS-08 Octave → Donner Ultimate Comp → Donner Stylish Fuzz → Joyo Tidal Wave → Joyo Narcissus → Valeton GP-5.

**Flamma FS-08 Octave — bypassed**
- All octave knobs (-2OCT, -OCT, +OCT, +2OCT) at 0, Dry at 100
- No octave layering anywhere in this song.

**Donner Ultimate Comp — engaged**
- COMP: 38, TONE: 50, LEVEL: 55, Mode: NORMAL
- Evens out finger-attack dynamics at the source, ahead of the GP-5's own COMP4 — the two stages stack for that extra-smooth, glued bedroom-pop low end this genre wants. NORMAL mode stays neutral; brightness is handled downstream.

**Donner Stylish Fuzz — bypassed**
No fuzz texture anywhere in this song.

**Joyo Tidal Wave — engaged**
- Drive: 15, Blend: 25, Presence: 45, Level: 55
- Treble: 45, Middle: 55, Bass: 55
- Mid-Frequency toggle: 500Hz (bass body warmth, not pick-attack cut-through)
- Bass-Shift toggle: 40Hz (fuller, warmer low end — this is a sparse lo-fi arrangement, not a busy full-band mix that needs extra tightness)
- Cab-Sim (DI out): On
- Ground Lift: Off (only flip on if a specific room throws hum)
- Drive kept very light — the harmonic lift for this song is Bass OD's job on the GP-5, not this pedal's. Here it's purely foundational glue plus a consistent DI feed to FOH.

**Joyo Narcissus — bypassed**
Modulation is handled by the GP-5's own MOD module (B-Chorus, light, always on). Stacking this pedal on top would fight with that.

**Valeton GP-5**
See GP-5 settings above.

## Footswitch Choreography

- **Verse:** GP-5 CTL off. Comp and Tidal Wave running underneath, unchanged.
- **Chorus:** GP-5 CTL on. Step on it going into the hook, off again coming back down to the next verse.
