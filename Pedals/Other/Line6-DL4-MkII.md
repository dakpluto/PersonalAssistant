# Line 6 DL4 MkII

Delay-and-looper stompbox from Line 6, the current-production successor to the original 2000-era DL4 (which is discontinued — this writeup documents the MkII, verified as the model Line 6 currently sells). Famous both as a classic multi-algorithm delay and as an early, hugely influential dedicated looper pedal; the MkII keeps the original's full delay-model roster and green die-cast chassis while adding new HX-family delay algorithms, a much larger looper, and modern connectivity (MIDI, USB-C, mic input).

## Controls

- **Model Selector**: Rotary knob choosing one of 30 total delay models — the 14 original DL4 delays, 15 new delays drawn from Line 6's HX effects/amp family, plus the classic Echo Platter tape-echo emulation.
- **Alt/Legacy button**: Toggles between the "Legacy" (original DL4-era) and newer "Alt" (MkII-era) versions of certain delay models where both exist.
- **Time / Subdiv**: Sets delay time; doubles as a rhythmic-subdivision control relative to tapped tempo depending on the selected model.
- **Repeats**: Sets feedback/number of delay repeats.
- **Tweak**: A model-dependent secondary parameter knob (its function changes per delay model — e.g. modulation depth, filter, wow/flutter amount — since each of the 30 models exposes a different set of adjustable characteristics).
- **Tweez**: A second model-dependent parameter knob, paired with Tweak, similarly remapped per delay model.
- **Mix**: Blends dry and delayed (wet) signal.
- **Mic Level**: Sets input gain/level for the pedal's built-in microphone input (new on the MkII).

## Footswitches

- **A / B / C footswitches**: Select delay presets/banks (six onboard presets accessible across two banks of three) or, in looper mode, perform looper transport functions.
- **Tap footswitch**: Taps in delay tempo; also controls half-speed and reverse playback when in looper mode, and can be reassigned in global settings to bank-switching or other functions since there is no dedicated bank-change button.
- Two additional external footswitches (via the EXP/FS 5-6 jack) can be assigned to functions like external tap tempo, one-touch parameter "morph," looper on/off, or feedback squeals.

## Modes

- **Delay mode**: Standard multi-algorithm delay operation across the 30 models.
- **4-Switch Classic Looper**: The original-style DL4 looper workflow using the A/B/C/Tap footswitches for record/overdub/play/stop and reverse/half-speed.
- **1-Switch Looper**: A simplified single-footswitch looper mode that can be layered in alongside any delay model rather than requiring a dedicated looper-only mode.

## Jacks

- **Input L/Mono, Right**: Mono or stereo instrument inputs.
- **Output L/Mono, Right**: Mono or stereo outputs.
- **Mic Input**: XLR microphone input (new on MkII), useful for looping vocals/acoustic sources direct into the looper.
- **MIDI In, Out/Thru**: Standard 5-pin DIN MIDI connectors.
- **USB-C**: Firmware updates and MIDI control over USB.
- **microSD slot**: Expands looper storage well beyond the pedal's onboard capacity (base looper capacity is up to 240 seconds; Line 6 states "several hours" of additional storage is possible with a microSD card installed).
- **EXP Pedal / FS 5-6 jack**: Accepts an optional expression pedal or two additional footswitches.
- **DC In**: 9V center-negative, included 500mA power supply; unlike the original DL4, the MkII does not run on batteries.

## Notes for patch-building

- Bypass mode is switchable between true bypass, buffered bypass, and a DSP/trails bypass that lets delay repeats ring out naturally after the pedal is switched off (globally configurable "bypass trails").
- Typical placement: DLY slot position, late in the chain after drive/modulation and ahead of reverb — treat this as a stand-in when a patch wants a specific named DL4/HX delay algorithm (or the looper) the GP-5's onboard DLY module can't reproduce.
- The looper is a major secondary use case distinct from the delay function — a patch built around looping (rather than just delay coloring) should document which looper mode (4-Switch Classic vs. 1-Switch) and footswitch assignment it expects, since the pedal's footswitch behavior changes substantially between delay and looper contexts.
- The Tweak/Tweez knobs are not fixed-function — their behavior is entirely dependent on which of the 30 delay models is selected, so any patch write-up using this pedal must name the specific model and describe what Tweak/Tweez do for that model rather than describing them generically.
- Exact per-model Tweak/Tweez parameter mappings for all 30 delay models were not enumerated in research (Line 6's manual/model guide would need to be consulted per-model) — treat any specific Tweak/Tweez description for an individual delay model as needing verification against that model's own documentation before finalizing a patch.

Sources: [Line 6 DL4 MkII — Delay Modeler](https://line6.com/effects-pedals/dl4-mkii/), [Line 6 overhauls its legendary delay pedal with the DL4 MkII — Engadget](https://www.engadget.com/line-6-dl-4-mk-ii-delay-looper-effects-pedal-214408270.html), [The Big Review: Line 6 DL4 MkII — Guitar.com](https://guitar.com/reviews/effects-pedal/the-big-review-line-6-dl4-mkii/), [DL4 MkII FAQ — Line 6 Knowledge Base](https://line6.com/support/page/kb/effects-controllers/dl4-mkii-stompbox-modeler/dl4-mkii-faq-r1013/)
