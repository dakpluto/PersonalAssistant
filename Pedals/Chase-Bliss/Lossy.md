# Chase Bliss Lossy

Digital audio degradation pedal made in collaboration with Goodhertz (the plugin company whose "Lossy" software plugin this hardware version is adapted from). It recreates the specific artifacts of heavily compressed/streamed digital audio — bitcrush-like MP3 degradation, dropped packets, and spectral freeze — rather than modeling an analog circuit.

## Controls
- **Type**: 3-way selector for the character of degradation — Standard (familiar low-bitrate MP3 sound), Inverse (plays back only the frequencies compression normally strips out, for a thin/tinny texture), Phase Jitter (unstable glitch/warble washes)
- **Speed**: Rate/degree of the Loss and Packet effects; also sets the update rate for the Freeze/Slush function
- **Packets** (toggle): Packet Loss (simulates a bad connection dropping audio) or Packet Repeat (stutters/repeats a captured slice, glitch/transfer-error style)
- **Filter**: Width of a resonant filter stage; fully counterclockwise disables it
- **Freq**: Sets the filter's frequency range
- **Slope** (3-way toggle): Filter slope — 6dB, 24dB, or 96dB (steeper slopes add more resonance/character)
- **Verb**: Wet/dry mix of a built-in reverb tail applied pre- or post-degradation depending on dip-switch routing; with the "All Wet" dip switch engaged it behaves as a standard analog-style mix dial
- Additional routing for a built-in **Gate** and **Limiter** is set via dip switches rather than a front-panel knob

## Footswitches / Switches
- Main footswitch: bypass (true bypass, with a digital/analog dry-thru option depending on mode)
- **Freeze** stomp switch: captures and holds a portion of the signal, which can then evolve/drift over time at a rate set by Speed — used for ambient pads, drones, and glitch textures
- Row of DIP switches on top: routing options (Verb pre/post placement, All Wet mode, Gate/Limiter engagement, and other internal-modulation/behavior toggles)

## Notes for patch-building
- This is a texture/character effect, not a gain stage or amp/cab substitute — think of it as sitting where a studio "lo-fi" or bitcrusher effect would, most useful post-drive and either pre- or post-modulation depending on whether the goal is a degraded rhythm tone or a degraded ambient wash.
- The Freeze function overlaps functionally with a looper/pad tool — useful as an alternate "hold a chord and glitch it" option instead of (or stacked with) a dedicated looper or the GP-5's own delay/reverb tails.
- Deep parameter access (per-knob MIDI/CV mapping, internal modulation/ramping of any knob, full dip-switch matrix) goes well beyond the faceplate — Chase Bliss pedals like this one are designed around companion MIDI/CC control and internal modulation for automating knob movements over time, not just the six physical knobs.
- True bypass on the main footswitch; stereo I/O.
