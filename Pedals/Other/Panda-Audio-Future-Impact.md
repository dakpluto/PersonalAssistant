# Panda Audio Future Impact V3

Complex multi-engine bass/guitar synth pedal from Panda Audio (pandamidi.com), not a simple effect but a full analog-modeled synth voice with its own preset system, editor software, and MIDI control. V3 is the current production version — a virtual-analog engine (four editable oscillators, dual filters, ADSR envelopes, and an auxiliary VC04 that can double as a second LFO) driving true polyphonic-feeling synth tracking from a bass or guitar's pitch.

## Instrument Modes
Selected at startup, these determine how the pedal tracks and processes the incoming signal:
- **Bass**: optimized pitch tracking/voicing for bass guitar
- **Split**: dry instrument signal and synth voice blended/split rather than fully replacing the input
- **Guitar**: tracking optimized for guitar-range input
- **Synth**: full synth-voice-forward mode
- **EWI**: mode tailored for wind-controller (EWI) input

## Controls
- **Input level** and **Output level** knobs
- **On/Bypass footswitch**: engages/bypasses the pedal (relay-switched true bypass)
- **Program footswitch**: advances to the next preset; double-tap cycles backward
- **Edit/Bank knob**: cycles through the pedal's 9 preset banks, and doubles as a data-entry dial when editing a parameter
- **Parameter knob**: selects which synth parameter the Edit knob is currently editing — Attack, Decay, Envelope Depth, Dynamics, Cutoff, Resonance, Balance, Level, and Effect
- **3-digit LED display**: shows the current preset number and, while editing, the selected parameter's value

## Notes for patch-building
- This is a synth engine, not a simple filter/octave box — document which of its 99 factory presets (67 bass, 9 effects, 9 guitar, 5 EWI) or which edited custom program a patch calls for, plus the Instrument Mode, rather than describing it only as "on."
- Ships with full-size MIDI In/Out and a PC/Mac editor for deep parameter editing and preset management beyond what the front-panel Parameter/Edit knobs expose — worth noting when a patch needs a sound outside the 99 factory presets.
- Typical placement: essentially stands alone as its own instrument voice, usually early in the chain (post-guitar, pre-drive/amp) or run to a separate synth-voice output/mix rather than through the GP-5's own AMP/CAB — treat it as a substitute instrument source for a section of a song, not as a modulation/filter effect layered on top of a normal guitar tone.
- Relay-switched true bypass; standard 9V center-negative power (100mA draw); metal enclosure.
- Because Mode and preset selection both happen on the pedal itself (footswitch + knobs, no external controller required), a Future Impact-based patch can still be described/executed without a computer present, but the CTL-toggle-two-states model doesn't map cleanly onto it — treat mode/preset choice as a fixed part of the patch, not a live-switchable CTL behavior.

Sources: [Gear Review: Panda Audio Future Impact v3 — No Treble](https://www.notreble.com/buzz/2022/11/26/gear-review-panda-audio-future-impact-v3-pedal/), [pandaMidi Future Impact V3: A Deep(er) Impact bass synth pedal — gearnews.com](https://www.gearnews.com/pandamidi-future-impact-v3-a-deeper-impact-bass-synth-pedal/), [Seek out new worlds of tone as pandaMidi launches the Future Impact v3 — MusicRadar](https://www.musicradar.com/news/seek-out-new-worlds-of-tone-as-pandamidi-launches-the-future-impact-v3-guitar-and-bass-synth-pedal)
