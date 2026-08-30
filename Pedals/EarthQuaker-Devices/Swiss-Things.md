# EarthQuaker Devices Swiss Things (Pedalboard Reconciler)

A pedalboard utility hub combining two effects loops, a clean boost, dual outputs, and an always-on tuner tap into one unit. Designed to sit at the front of a board as the "brain" that organizes everything else, not as an effect in itself.

## Controls
- **Boost knob**: Sets the level of the boost, up to 20dB of clean gain, applied post-effects-loops.
- **Phase switch (Output B)**: Inverts the phase of Output B; intended for use with pedals/amps that invert phase elsewhere in the chain. Leave disengaged if running true stereo effects after Swiss Things, or the L/R inputs of those effects will be out of phase.

## Footswitches / Switches
- **Loop 1**: Engages Loop 1's send/return. Unbuffered, intended for dirt pedals (fuzz, overdrive, distortion, octave) that are sensitive to buffering. Flexi-Switch (momentary or latching).
- **Loop 2**: Engages Loop 2's send/return. Buffered, intended for time-based/modulation effects (delay, reverb, chorus, etc.) that benefit from a clean buffered signal. Flexi-Switch (momentary or latching). Functions as a mute if the loop is left empty.
- **Boost**: Engages the boost circuit (up to 20dB, post-loops).
- **A/B**: Selects between Output A and Output B.
- **Both**: Activates Output A and Output B simultaneously (Flexi-Switch).

## Jacks
- **Input**: Guitar/instrument input.
- **Loop 1 Send/Return**, **Loop 2 Send/Return**: 1/4" effects loops.
- **Tuner Output**: Always-on, unaffected by bypass state.
- **Volume EXP**: Expression pedal input for real-time volume control.
- **Output A / Output B**: Two amp outputs; Output B is transformer-isolated with its own phase switch, useful for driving a second amp or a different signal path without ground-loop hum.

## Notes for patch-building
- Functions as a pedalboard router/utility rather than a tone-shaping effect — think of it as the switching system a board is built around, not a module in the NR→PRE→DST→AMP→CAB→EQ→MOD→DLY→RVB chain itself.
- Loop 1 (unbuffered) is the natural home for germanium fuzzes and vintage-style dirt pedals that don't like being buffered; Loop 2 (buffered) is the natural home for delay/reverb/modulation pedals, especially at the end of a long cable run.
- The boost is post-loop, so it boosts the combined signal from both loops — useful as a solo/lead boost that sits after any drive pedals in the loops, distinct from a drive pedal's own gain.
- Dual outputs (A/B, or Both) make this a practical way to feed two amps or an amp + a DI/interface simultaneously; the isolated, phase-switchable Output B is the one to use for the second signal path to avoid hum and phase cancellation.
- Relay-based true bypass on both loops and the boost; the always-on tuner output means a separate tuner pedal/loop isn't needed elsewhere on the board.
