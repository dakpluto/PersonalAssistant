# Red Panda Particle 2

Granular delay/pitch-shifting pedal from Red Panda, and the current model (successor to the original 2011 Particle, redesigned around a much more powerful processor). It chops the input signal into small slices ("grains") and reassembles, randomizes, and pitch-shifts them in real time using granular synthesis techniques, producing everything from subtle shimmer and time-stretching to radical glitch, stutter, and reverse textures. Extensive MIDI/CV/expression control and a web-based editor make it deep enough for studio sound design as well as live use.

## Controls
- **Blend**: Wet/dry mix, 100% dry to 100% wet (dry signal stays at unity gain until 12:00, so there's a slight volume boost blending wet+dry near full wet).
- **Chop**: Grain size, 7:00 to 12:00. Above 12:00 the same knob instead sets the freeze threshold (audio-controlled freeze — see Modes below). Grain size and freeze threshold can be decoupled via the web editor/MIDI.
- **Delay/Pitch**: Dual-function knob — sets delay time (0–2500 ms) in delay modes, or pitch shift (±1 octave, no shift at 12:00) in pitch modes. Function depends on the Mode switch position.
- **Param**: Mode-specific secondary parameter (density, LFO rate, randomization range, direction probability, or detune amount depending on mode — see Modes below).
- **FDBK (Feedback)**: Adjusts audio feedback/repeats amount.

## Switches
- **Mode**: 8-position rotary selecting one of five delay-based modes (DELAY+DENS, DELAY+LFO, DELAY+REV, DELAY+PITCH, DELAY+RND) or three pitch-based modes (PITCH+DTUNE, PITCH+LFO, PITCH+DENS). Each mode reassigns what the Delay/Pitch and Param knobs control:
  - **DELAY+DENS**: Delay knob sets delay time; Param sets grain density (chops audio into blips at low settings).
  - **DELAY+LFO**: Delay sets max buffer length; Param sets stretch/compress LFO speed — normal speed at 12:00, stretched below, compressed above.
  - **DELAY+REV**: Reverse delay; Param sets probability of each grain playing forward vs. reverse (0% = full reverse, 100% = full forward).
  - **DELAY+PITCH**: Delayed signal randomly pitch-shifts by the amount set by Param.
  - **DELAY+RND**: Delay sets max delay time; Param sets randomization range for playback-head jumps.
  - **PITCH+DTUNE**: Pitch sets base ±1 octave shift; Param adds random detuning around it (pitch clouds at high settings).
  - **PITCH+LFO**: Pitch sets modulation range (±1 octave); Param sets the LFO rate the pitch ramps at.
  - **PITCH+DENS**: Pitch sets base shift; Param sets grain density.
- **Expert mode** (toggle via footswitch combo, web editor, TouchOSC, or MIDI CC 119): Changes Mode switch behavior so it reassigns knobs without resetting parameters, letting parameters from different modes combine (e.g. reverse delay with an active LFO). Off by default; recommended to leave off until familiar with the pedal.

## Footswitches
- **Left (TAP/FREEZE)**: Tap tempo (tap quarter notes) with independent note divisions for chop/delay/density/LFO rate; hold to momentarily freeze the delay buffer (bypass LED turns cyan while frozen).
- **Right (ON/DIV)**: Bypass on/off; hold-and-release from bypass gives momentary engagement. Hold to enter [DIV] alternate-parameter mode for setting tap note divisions and hidden parameters (e.g. random stereo spread, feedback tone) without a computer.

## Jacks
- **IN**: 1/4" TRS, mono or stereo input depending on configured I/O mode (mono in/mono out, mono in/stereo out [default], stereo in/stereo out, or auto-detect).
- **OUT**: 1/4" TRS, mono or stereo output per the same I/O configuration.
- **CTRL**: 1/4" TRS multi-purpose port — expression pedal (assignable to up to 6 parameters across heel/toe position), control voltage (0–3.3V range), tap tempo via momentary switch, TRS MIDI in (non-standard/no optocoupler), or a compatible 1–4 button remote switch (presets/footswitch functions).
- **USB (mini-B)**: Class-compliant USB MIDI in/out, web editor access, and firmware updates.
- **DC power**: 9V DC center-negative, 250mA or higher required (2.1mm ID / 5.5mm OD barrel).

## Notes for patch-building
- Typical placement: modulation/delay stage — it's a delay-family effect but with a much wider, weirder range than a standard analog/digital delay module; think "specialty granular/pitch slot" for shimmer, glitch, reverse, and time-stretch textures rather than a clean repeat-based delay.
- Bypass is configurable (Analog buffered / DSP / Kill Dry); default is Auto (uses analog or DSP bypass depending on other settings). DSP bypass and Kill Dry avoid the small click that Analog bypass mode can introduce.
- 127 total presets (4 recallable from the front panel, all 127 via MIDI program change); presets store all knob positions, mode, tap divisions, and expert-mode state, making it practical to dial in a specific granular texture and recall it reliably rather than describing settings qualitatively.
- Trails (natural decay into bypass) is off by default and configurable; worth noting explicitly in a patch write-up since a frozen/high-feedback setting can otherwise cut off abruptly on bypass.
- The Chop, Delay/Pitch, and Param knobs are "metaparameters" whose exact effect depends on the active Mode — a patch spec needs the Mode setting documented alongside the three knob positions, not just raw knob values, to be reproducible.

Sources: [Red Panda Particle 2 Owner's Manual (PDF)](https://www.redpandalab.com/content/docs/Particle%202%20Owners%20Manual.pdf), [Red Panda Particle 2 — manualslib.com](https://www.manualslib.com/manual/1573171/Red-Panda-Particle-2.html), [Red Panda Particle 2 — Sound On Sound](https://www.soundonsound.com/reviews/red-panda-particle-2)
