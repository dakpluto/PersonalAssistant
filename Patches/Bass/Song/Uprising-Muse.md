# Uprising — Muse

Bass: Harley Benton P/J, 5-string, passive. Full board.
From *The Resistance* (2009), ~128 BPM.
The record's iconic intro riff is a real synthesizer, not a bass — but Chris Wolstenholme's whole live rig is built around making a bass guitar sound like a synth (heavy fuzz, octave layering, envelope filtering). This patch leans into that same trick: verse = the pulsing "synth bass" texture, chorus = the tone opens up into a bigger, more straightforward rock push for "they will not force us..."

CTL off = the synth-bass verse pulse. CTL on = the big chorus.

## GP-5 settings

Module order: NR → PRE → DST → AMP → CAB → EQ → MOD → DLY → RVB.

**NR — Gate**
- THRE: 25
- Always on. Higher threshold — fuzz, octave, and filter all stack noise floor on top of each other, needs real cleanup between notes.

**PRE — Toucher — On CTL (inverted)**
- Sense: 60, Range: 55, Q: 50, Mix: 70, Mode: Bass
- CTL off: engaged (verse). CTL on: bypassed (chorus).
- This is the envelope filter doing the "synth wobble" work — following pick dynamics to push the filter around, the closest thing to that looping filtered-synth quality using a real bass signal. Turned off for the chorus, where the song drops the synth-pulse texture for a straight-ahead rock push.

**DST — Bass OD — On CTL**
- Gain: 55, Blend: 65, VOL: 60, Bass: 58, Treble: 52
- CTL off: bypassed (verse — the Toucher and fuzz pedal already carry the texture). CTL on: engaged (chorus — extra push and grit for the bigger hook).

**AMP — Mess Bass (Mesa/Boogie Bass 400+)**
- Gain: 55, VOL: 65, Bass: 55, Middle: 55, Treble: 55
- Always on, same for both CTL states.
- Modern, aggressive bass amp voicing that matches Muse's generally processed, contemporary alt-rock sound better than a vintage tube amp would.

**CAB — User IR 8 (Sunn215)**
- VOL: 62
- Always on, same for both CTL states.
- Fat 2x15 voicing that's specifically suited to a fuzz/distortion-heavy signal — this patch stacks fuzz, OD, and a filter, and Sunn215 keeps all of that from thinning out.

**EQ — Bass EQ 2**
- 50Hz: +4, 120Hz: +1, 400Hz: -3, 800Hz: +3, 4.5kHz: +3, VOL: 55
- Always on, same for both CTL states.
- +4 at 50Hz keeps real low-end weight under all the processing. -3 at 400Hz cuts the mud the octave/fuzz stack can add. +3 at 800Hz/4.5kHz keeps the synth-wobble movement audible and present instead of getting swallowed.

**MOD — O-Phase (MXR Phase 90)**
- Rate: 0.35Hz
- Always on, same for both CTL states.
- Slow, subtle phase movement underneath everything — a light touch of synth-like shimmer, not an obvious "phaser" sound. Stays under the radar the way the prompt's light-MOD-touch rule calls for.

**DLY — Off**
- Not used. Between the filter, fuzz, and phaser there's already enough movement in this tone — a delay would clutter the picture.

**RVB — Room — On CTL**
- Mix: 22, Decay: 32, Trail: On
- CTL off: bypassed (verse — tight and dry, letting the filter/fuzz texture read clearly). CTL on: engaged (chorus).
- Opens the space up for the bigger chorus hook, matching the arena-rock scale that section is going for.

## CAB IR — Sunn215 (Slot 8)

- Sunn 200S 2x15, confirmed loaded on User IR slot 8. Notably good pairing for distortion/fuzz-heavy bass tones, per `IRs/ir.md`.
- Encoded directly into the `.prst` as a real, active CAB reference (`User IR 8`) — no manual loading needed for this one.

## CTL summary

- **CTL Off — Verse.** The synth-bass pulse: Toucher engine engaged, fuzz and octave doing their thing from the board, dry and tight.
- **CTL On — Chorus.** Toucher drops out, Bass OD and Room reverb engage instead — bigger, more straightforward, more open, matching the song's anthemic hook.
- Engage CTL right as the chorus hits, back off returning to the verse's synth-bass texture.

## Full pedalboard (signal chain order)

**1. Flamma FS-08 Octave — Engaged**
- -OCT: 40
- +OCT: 35
- -2OCT: 0
- +2OCT: 0
- Dry: 70
- This is central to the whole concept — layering a sub-octave and an upper octave on top of the dry signal is exactly the trick that makes a bass guitar start to sound like a synthesizer. Both octave knobs kept moderate so it thickens the tone without turning to mush or tracking badly on faster passages.

**2. Donner Ultimate Comp — Engaged**
- COMP: 55
- TONE: 55
- LEVEL: 60
- Mode: TREBLE
- Keeps all the layered/processed signal (octave + fuzz + filter) even and controlled. TREBLE mode keeps attack defined going into all that processing instead of getting swallowed by it.

**3. Donner Stylish Fuzz — Engaged**
- Sustain: 65
- Treble: 55
- Bass: 60
- Volume: 60
- The other half of the "fuzz bass" synth trick — a fairly compressed, thick fuzz setting gives this a squared-off, synth-like edge rather than a loose, open fuzz-face wall of noise.

**4. Joyo Tidal Wave — Engaged**
- Drive: 25
- Blend: 50
- Presence: 60
- Level: 60
- Treble: 55
- Middle: 55
- Bass: 55
- Mid-Frequency: 1000Hz
- Bass-Shift: 80Hz
- Cab-Sim (DI out): Off
- Ground Lift: Off
- Kept light here — Drive at 25 mostly for its 3-band EQ shaping rather than another gain stage, since fuzz and the GP-5's own OD already cover the drive duties. Bass-Shift at 80Hz keeps the low end from ballooning with the octave pedal already adding sub content.

**5. Joyo Narcissus — Bypassed**
- Footswitch off. The GP-5's own O-Phase already carries the modulation duties — running a chorus alongside a phaser on top of all this fuzz/octave/filter processing would get muddy fast.

**6. Valeton GP-5** — see settings above.
