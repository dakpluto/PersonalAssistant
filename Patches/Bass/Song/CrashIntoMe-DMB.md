# Crash Into Me — Dave Matthews Band

Bass: Harley Benton P/J, 5-string, passive. Full board.
1996 acoustic-driven ballad (*Crash*). ~70 BPM (estimate — no hard chart reference, tempo isn't load-bearing for the tone choices below). Stefan Lessard's part here is melodic and understated, not a rhythm-section anchor — mostly warm, supportive fingerstyle lines with harmonics and higher-register melodic fills, especially into the outro. The song doesn't have a big rock dynamic swing; it stays intimate almost throughout, with only a modest lift into the "you come crash into me" hook. The patch reflects that restraint — one steady tone, one small swell, nothing more.

## GP-5 Settings

Module order: NR → PRE → DST → AMP → CAB → EQ → MOD → DLY → RVB

**NR — Gate**
- THRE: 16
- Always on. Very low-gain, clean patch with a lot of quiet/harmonic playing — kept light so it doesn't choke off soft notes or harmonic decay.

**PRE — COMP** (Ross Compressor)
- Sustain: 40, VOL: 55
- Always on. Gentle glue and sustain for a fingerstyle melodic part with real dynamic range (ghost notes, harmonics, fuller lines) — not squashing anything, just evening it out the way an organic, unforced tone should.

**DST — Off**
Not used. No drive anywhere in this tone.

**AMP/CAB — NAM SnapTone, slot 53: CleanSVT** (always on)
- Built from the `SVT CLEAN (SVT-CL)` NAM and the Apg810 IR, combined into one snaptone.
- Real Ampeg SVT-CL preamp on its clean setting, into the Apg810 8x10 IR.
- Stefan Lessard's clean, melodic line. Clean SVT keeps it full and articulate.
- Gain: 49, VOL: 50, Bass: 58, Middle: 55, Treble: 52
- Gain 49: a little under default. This part wants less push than the other CleanSVT patches.
- Bass 58: Warmth and foundation.
- Middle 55: a touch more midrange.
- Treble 52: Held back a touch to keep the tone woody rather than bright/glassy.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 53 directly.

**EQ — Bass EQ 1**
- 33Hz: +3, 150Hz: +1, 600Hz: -2, 2kHz: +2, 8kHz: 0, VOL: 52
- Always on, both CTL states. A gentle low-end lift for foundation, a small 600Hz dip to keep things from getting boxy, and a modest 2kHz nudge for note definition under the acoustic guitars — nothing aggressive, no top-end push. This stays warm and unforced, matching the song's whole character.

**MOD — A-Chorus** (Arion SCH-1)
- Depth: 12, Rate: 0.4Hz, Tone: 45
- Always on, both states. Very light touch — just enough shimmer to give the tone some organic width and match the slightly wobbly, unplugged-adjacent character of the recording, not an obvious chorus effect.

**DLY — Off**
Not used. No delay anywhere on this part.

**RVB — Room**
- Mix: 20, Decay: 35, Trail: On
- **CTL switch.** Off = bypassed, On = engaged.
- Off (verse) stays dry and close — intimate, matching the mostly-acoustic arrangement. On (hook) adds a touch of room to open the part up slightly for the "crash into me" lift — a small nudge, not a swell, since this song's dynamic range never gets as big as a rock chorus.

### CTL Summary (GP-5)
- **CTL Off — Verse (default load state):** Room bypassed. Dry, close, intimate — matches the mostly-acoustic verses.
- **CTL On — Hook ("you come crash into me"):** Room engaged. A small lift in space, not a dramatic swell — this song stays restrained even at its biggest moment.

## Full Pedalboard

Signal chain order: Flamma FS-08 Octave → Donner Ultimate Comp → Donner Stylish Fuzz → Joyo Tidal Wave → Joyo Narcissus → Valeton GP-5.

**Flamma FS-08 Octave — bypassed**
- All octave knobs (-2OCT, -OCT, +OCT, +2OCT) at 0, Dry at 100
- No octave texture anywhere in this song.

**Donner Ultimate Comp — engaged**
- COMP: 38, TONE: 50, LEVEL: 55, Mode: NORMAL
- Evens out finger-attack dynamics at the source, ahead of the GP-5's own COMP — the two stages stack lightly for a smooth, controlled melodic line without losing the part's natural dynamics entirely. NORMAL mode — nothing to brighten, the Harmonic Booster's own voicing already has the shimmer this song wants.

**Donner Stylish Fuzz — bypassed**
No fuzz texture anywhere in this song.

**Joyo Tidal Wave — engaged**
- Drive: 15, Blend: 22, Presence: 48, Level: 55
- Treble: 50, Middle: 52, Bass: 55
- Mid-Frequency toggle: 500Hz (body and warmth, fits this song's woody character)
- Bass-Shift toggle: 40Hz (fuller, warmer low end — this is a sparse acoustic arrangement, not a busy mix that needs extra tightness)
- Cab-Sim (DI out): On
- Ground Lift: Off (only flip on if a specific room throws hum)
- Drive kept very light — this pedal is purely foundational glue and a consistent DI feed. The CleanSVT snaptone is carrying the actual tone.

**Joyo Narcissus — bypassed**
Modulation is handled by the GP-5's own MOD module (A-Chorus, light, always on). Stacking this pedal on top would fight with that.

**Valeton GP-5**
See GP-5 settings above.

## Footswitch Choreography

- **Verse:** GP-5 CTL off. Comp and Tidal Wave running underneath, unchanged.
- **Hook ("crash into me"):** GP-5 CTL on. Step on it for the small lift, off again coming back down to the next verse.
