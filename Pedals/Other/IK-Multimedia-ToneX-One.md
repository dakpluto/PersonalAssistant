# IK Multimedia ToneX One

Mini amp/cab/effects modeling pedal built around IK's AI Machine Modeling capture technology. It's not a single effect — it's a compact preset player that loads a captured "Tone Model" (amp + cab + any pedals/effects baked into the capture) and can also layer its own gate, compressor, EQ, and reverb on top.

## Controls
- **Main knob (VOLUME / GAIN)**: In normal mode, sets output volume; press ALT and it sets the active preset's gain instead.
- **Micro knob 1 (BASS / GATE)**: Normal mode = bass EQ; ALT mode = noise gate threshold. Fully counter-clockwise puts the pedal in Dual mode (two presets, A/B); fully clockwise puts it in Stomp mode (single preset, footswitch = bypass) — this is a mode-select function layered onto the same knob, not a separate switch.
- **Micro knob 2 (MID / COMP)**: Normal mode = midrange EQ; ALT mode = compressor amount.
- **Micro knob 3 (TREBLE / REVERB)**: Normal mode = treble EQ; ALT mode = reverb amount.
- **ALT button**: Tap to toggle the three micro knobs (and main knob) between their primary EQ/volume functions and the secondary gate/comp/reverb/gain functions. Hold 3 seconds for a performance-safe lock; hold 6 seconds to enter global setup menu.

## Footswitches / Switches
- Single footswitch, behavior depends on the mode set via the BASS micro knob position:
  - **Dual mode** (default): press to switch between loaded Preset A and Preset B.
  - **Stomp mode**: press to bypass/engage the single loaded preset, like a normal stompbox.
  - **Hold** (either mode): activates the built-in chromatic tuner; while tuning, the ALT button toggles between mute and thru (audio-still-passing) tuning.

## Notes for patch-building
- This is a modeler, not a fixed-character pedal — its actual tone is entirely dependent on which Tone Model (amp+cab capture) is loaded, similar in spirit to the GP-5's own AMP/CAB modules or to a NAM capture, except it also carries gate/comp/reverb inside the same box.
- Typically used as a front-end amp-in-a-box: guitar in, modeled amp+cab+gain stage out, then into a clean power amp/interface/mixer — treat it as replacing AMP+CAB (and optionally NR/DST) in a chain rather than as a single-purpose stomp.
- Mono instrument input; output is mono or TRS stereo/dual-mono depending on cable used, and doubles as a 24-bit/44.1kHz USB-C audio interface for direct-to-DAW recording. The base ToneX One has no MIDI; the ToneX One+ variant adds MIDI I/O and wireless app editing.
- Tone Models are user-loaded via IK's ToneX software/ToneNET library (60,000+ community captures) — like a NAM capture, the specific model in use isn't something a `.prst`-style file can reference, so any patch built around it needs the model name documented separately for the player to load by hand.

Sources: [ManualsLib ToneX One quick start manual](https://www.manualslib.com/manual/3457470/Ik-Multimedia-Tonex-One.html), [ManualsLib ToneX One user manual](https://www.manualslib.com/guide/4274231/ik-multimedia-tonex-one-guitar-amplifier-pedal-user-manual.html), [MusicRadar ToneX One review](https://www.musicradar.com/reviews/ik-multimedia-tonex-one-review), [Sweetwater ToneX One quickstart guide](https://www.sweetwater.com/sweetcare/articles/ik-multimedia-tonex-one-quickstart-guide/)
