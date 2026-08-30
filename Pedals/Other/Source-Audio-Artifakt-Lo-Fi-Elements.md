# Source Audio Artifakt Lo-Fi Elements

Stereo multi-effects pedal built around seven "lo-fi" character engines — Radio, Tape, µVerb, Crush, Ladder, Vinyl, and Glitch — emulating degraded/vintage gear (AM radios, tape decks, turntables, 8-bit consoles) plus bit-crushing, a Moog-style ladder filter, and a glitch/pitch-shift sampler. Part of Source Audio's One Series line, with deep MIDI and app-based editing.

## Controls
- **DESTRUCT**: Primary "destroy/distort" control; exact function depends on the selected engine (e.g. signal-dropout rate on Radio, saturation on Tape, distortion on µVerb, bit quantization on Crush, asymmetric distortion on Ladder, scratch/surface noise on Vinyl, added distortion on Glitch).
- **FILTER**: Acts as a passive treble/tone control on most engines, or as the Moog-style ladder filter's center-frequency control on Crush and Ladder.
- **MIX**: Wet/dry blend of the effect. Holding the ALT button while turning this knob instead adjusts overall output Volume.
- **VARY**: Engine-dependent secondary control — e.g. compression amount (Radio), delay/lag time (Tape), reverb decay (µVerb), sample-rate reduction (Crush), filter envelope depth/direction (Ladder), distortion/randomness (Vinyl), or envelope trigger sensitivity (Glitch).
- **Effect Selector** (7-way rotary): Chooses the active engine — Radio, Tape, µVerb, Crush, Ladder, Vinyl, or Glitch. These are independent of the 128 preset slots; turning this knob overrides whatever preset is loaded.
- **MOD**: Adjusts rate, depth, or shape of one of two onboard LFOs, per the adjacent 3-way toggle.
- **MOD Rate/Depth/Shape toggle**: Selects which of the three parameters the MOD knob is currently controlling.
- **BANDWIDTH toggle** (3-way, Low/Med/High): Voicing/frequency-limiting control; precise effect differs slightly per engine (e.g. delay-line configuration on Tape, filter Q on Ladder, sample rate on µVerb/Glitch).
- **ALT / Control Input button**: Press-and-hold while turning a knob or hitting a switch to access that control's ALT function (not every control has one); also enables/disables external control input.
- **PRESET button**: Advances through preset slots; press-and-hold to save the current settings to a slot.

## Footswitches / Switches
- **ON/OFF footswitch**: Engages/bypasses the pedal. Press-and-hold while bypassed to bank into Red LED (ALT) mode for a second set of presets.
- **OPTION/TAP footswitch**: Engine-specific auxiliary function — e.g. noise on/off (Radio), tap tempo / hold-to-oscillate (Tape), hold-to-oscillate reverb tail (µVerb), chorus on/off (Crush), delay on/off (Ladder), vinyl skip (Vinyl), or re-arm/clear the sample (Glitch). Remappable per-preset via the Neuro app.
- Press both footswitches together for ~500ms to enter Preset Scroll Mode, then use them to step backward/forward through preset slots.

## Notes for patch-building
- Universal Bypass: switchable between relay-based true bypass and analog buffered bypass.
- True stereo in/out with auto-detecting routing (mono-in/mono-out, mono-in/stereo-out, stereo-in/stereo-out, stereo-in/mono-out) — useful for adding stereo width even from a mono guitar signal.
- Deep MIDI support (3.5mm TRS Type A, 128 MIDI-addressable presets, extensive CC control) plus USB-C class-compliant MIDI and the Neuro 3 desktop/mobile app for detailed editing, custom preset creation, sharing, and firmware updates — many parameters exist only in Neuro, not on the physical panel.
- Functions as a texture/character pedal: a strong substitute for a GP-5 MOD/DLY/RVB block when a patch wants lo-fi radio/tape/vinyl coloration, bit-crushing, a resonant ladder-filter sweep, or a glitch/pitch-repeat effect the GP-5's stock modules don't offer.
- Supports external expression pedal control (Source Audio Dual Expression) mapping up to three parameters simultaneously.
