# Electronic Audio Experiments Prismatic Wall

Sympathetic string resonator — part reverb, part physical-modeling synthesizer. Uses a Karplus-Strong-style digital waveguide algorithm to simulate a bank of tuned strings that vibrate in response to incoming sound, producing pitched, sustaining resonances rather than a conventional reverb tail (think piano-resonance, sitar/hurdy-gurdy drones, or third-bridge overtones).

## Controls
- **Tune**: The core control — sets the pitch of the entire resonator bank across a four-octave range. Higher settings are brighter, lower settings darker/more harmonically rich.
- **Damping**: Sustain/decay time for high frequencies specifically, from muted to metallic.
- **Decay**: Sustain/decay time for all frequencies; at higher settings adds analog feedback for infinite drones and noise.
- **Mix**: Blends dry input against the resonator output, fully dry to fully wet.
- **Drive**: Input gain into the resonator bank — controls how easily the resonators are excited, and adds analog saturation when pushed.
- **LFO Rate**: Speed of the onboard LFO (by default modulates Tune, for pitch-bend/vibrato effects).
- **LFO Amount**: Depth/intensity of the LFO modulation.
- **Mode button**: Selects the interval spacing of the resonator bank's strings — Single (fundamental + 4 overtone-series partials), Stacked Neutral Thirds (five strings, ambiguous/dreamlike), Stacked Fifths (five strings, wide and sustaining), or Chromatic (twelve strings a semitone apart, lower-fidelity model, "pianoverb"-like). Long-press toggles a +1 octave shift on top of the selected mode.
- **Wave button**: Toggles the LFO between periodic (sine/square/triangle, set via an Alt function) and random waveforms. Long-press enters the Mod Matrix, where each main knob becomes an attenuverter assigning LFO amount/polarity to Tune, Mix, Drive, Damping, and Decay.
- **Preset button**: Saves/recalls presets — 3 accessible from the front panel, up to 16 total via MIDI.
- **Aux button**: Sets what the Aux footswitch does (Morph mode or Preset-scroll mode). Long-press (hold) opens the Alt Functions menu — Quantize (semitone-step Tune), LFO Skew, Level Trim (±3dB), Morph Rise/Fall time, LFO Rate Multiplier range, and LFO Shape.

## Footswitches / Switches
- **Engage footswitch**: Activates/bypasses the pedal. Long-press toggles between standard (buffered) bypass and trails bypass — in trails mode the resonators ring out naturally after disengaging.
- **Aux footswitch**: Multi-function performance switch. In Morph mode, ramps or toggles between two full control-panel states with adjustable rise/fall times (also usable as an on-demand alternate voicing). In Preset mode, steps through the first three saved presets.

## Notes for patch-building
- Sits in a reverb/ambient-tail role in a signal chain — comparable to where you'd place the GP-5's RVB (or MOD) block — but produces tuned, resonant sympathetic vibration rather than a conventional hall/plate/spring reverb, so it reads as a distinct texture layer rather than a drop-in reverb substitute.
- Best used when a patch wants an otherworldly pitched drone, shimmer, or comb-filtered modulation texture; Tune generally needs to be set to match the register/key of the instrument or song for it to sit correctly in a mix.
- Quirks: mono in/mono out only (no stereo I/O). The bypass signal is always buffered, so the pedal requires power to pass any signal even when bypassed — there is no passive/true-bypass fallback, only a choice between standard-buffered and trails-buffered bypass. Has a multi-function CTRL jack (auto-detects expression, CV, or MIDI) with full MIDI CC/PC support; stores 16 presets total (3 via front panel, the rest via MIDI).
