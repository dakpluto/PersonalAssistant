# Chase Bliss Big Time

Hybrid analog/digital echo built with Electronic Audio Experiments (EAE), modeled on early-1980s rackmount delays that paired crude digital delay lines with analog preamps and limiters to cover for the digital hardware's shortcomings. Big Time deliberately leans into that hybrid interaction: an analog preamp drives into a digital delay line, and an analog limiter sits inside the feedback loop so the echoes' character changes as they get louder. True stereo, uses motorized ("Automatone") sliders that snap to preset/tap positions.

## Controls
- **Color** (fader): Preamp gain. Drives input saturation and sets how hard the signal hits the delay line; also intensifies the limiter instantly.
- **Time** (fader): Delay time / clock control. Range depends on Mode; interacts with Scale (smooth vs. musical-interval stepping). Snaps to center on tap-tempo or loop-clear.
- **Cluster** (fader): Blends in additional, subtly modulated delay taps — synced multi-tap at low settings, disconnected/scattered echo repeats in the middle, modulated diffusion at the top of the range. Also one of the ways stereo width is generated.
- **Tilt EQ** (fader): Splits the spectrum at a crossover point and cuts one side — push up to cut lows, down to cut highs; noon is neutral. Crossover point is an Alt-menu control.
- **Feedback** (fader): Feedback loop gain — sets number of repeats and, combined with Color, how hard the echoes hit the limiter over time.
- **Wet** (fader): Output level of the effect signal.
- **Scale** (button): Sets whether Time (and Motion) move smoothly or in tuned steps (Chromatic / Oct+4+5 / Octave) — turns delay-time changes into pitch-shifting.
- **Motion** (button): Turns on modulation and selects type — Sine (smooth), Square (choppy/stepped), or Env (envelope/note-triggered movement); range and speed set via Alt Depth/Rate. Hold 2 seconds to reset to default.
- **Mode** (button): Sets delay-time range and footswitch behavior — Mod (3–46ms), Short (46–736ms), Long (736ms–12.2s), or Loop (phrase looper). Hold 2 seconds to reset to a simple delay.
- **Voicing** (button): Selects a fixed base tone character — HiFi, Focus, Warm, or Analog — independent of Tilt EQ.
- **State** (button): Sets the limiter's role/character — Digital (no limiter, clean stable feedback for looping), Compressed (clean sag/ducking), Saturated (distortion/deterioration, the pedal's default character), or a fourth "misbiased" state that intentionally starves/mangles the limiter. Each has a unique Texture (Alt) parameter.

### Alt Controls (hold Shift)
Six faders repurpose to Texture (per-State character), Rate (Motion speed/glide), Depth (Motion range or harmonic interval), Crossover (Tilt EQ split point), Diffuse (echo smear amount), and Dry (dry signal level). Five buttons repurpose to Spread (stereo processing), 0.5x (lowers bit depth/sample rate for vintage digital grit), Diffuse Type (doubles Diffuse strength), and +12dB (extra preamp gain for hot input or more blown-out saturation). The footswitch repurposes to Play/Dub (choose whether a freshly-recorded loop goes to playback or straight to overdub).

## Footswitches
- Behavior depends on Mode. In Mod/Short/Long: tap left = tap tempo (set delay time by tapping twice); hold left = toggle selected Motion on/off (Mod) — or in Short/Long, hold right = infinite freeze/hold of current sound; hold right (Mod only) = ramp Color and Feedback to max ("Overload").
- In Loop mode: tap left = start recording / set loop end / alternate overdub-playback; tap right = stop and reset loop (tap again to resume); hold right = delete loop.
- Hold left footswitch (any mode): opens/closes the Preset menu — tap footswitches to scroll presets (auto-loading), hold Shift + scroll to select a save slot, hold right footswitch to save.
- Tap both footswitches simultaneously: opens the Options Menu (external-control setup and preferences).

## Connectivity / App-Deep Control
- True stereo I/O, switchable balanced/unbalanced TRS, 9V DC center-negative (~1A, current-hungry due to motorized faders).
- 10 onboard presets (footswitch menu), up to 127 via MIDI.
- Full MIDI control of every parameter including clock sync (can also output its own clock to sync other gear) — see dedicated MIDI guide/MIDIbox requirement typical of Chase Bliss's line.
- CV and expression control over any/all faders, with assignable range ("heel"/"toe") and polarity, set up through the Options Menu.
- AUX jack accepts an external momentary footswitch for Preset up/down, "Fun" functions (0.5x, buffer clear), or "Desktop" transport (tap/record, bypass/stop) — selectable mode.
- Options Menu also holds faceplate-invisible toggles: Scale Ignore (keep Motion smooth regardless of Scale), Step (turn Tempo footswitch taps into discrete Motion/sequence advances), Trails, Dry Kill, Dry Clean (route dry signal around the preamp), and Balanced/Unbalanced I/O select.

## Notes for patch-building
- Functionally a DLY-slot pedal, but able to cover ground from short slapback/modulation (Mod mode) through ambient wash and pitch-shifted drones (Long mode + Scale) to a full phrase looper (Loop mode) — decide which Mode the patch needs before setting other knobs, since it reframes both Time's range and what the footswitches do.
- The preamp (Color) and limiter (State/Feedback interaction) mean this pedal can add meaningful saturation/compression to the dry-adjacent signal even at moderate Wet levels — treat Color partly as a gain-stage/character control, not just a delay-mix knob.
- Because Cluster, Voicing, Tilt EQ, and State/Texture stack on top of the core Time/Feedback/Wet trio, a documented patch should record all six fader positions plus the five button-mode selections — the faceplate alone doesn't make prior state obvious at a glance (motorized sliders do recall preset positions, but only when a preset is loaded).
- Buffered/analog preamp is always in the signal path for the wet side; dry-signal handling (kept through preamp vs. bypassed via Dry Clean) is a documented Options Menu setting worth calling out for a given patch, since it changes tone even before the delay engages.
