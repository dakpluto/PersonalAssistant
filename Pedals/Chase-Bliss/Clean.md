# Chase Bliss Clean

An all-analog, VCA-based "creative compressor" — not a clone of an existing compressor circuit, but a from-scratch design that brings the touch-sensitive, character-heavy feel of a distortion pedal to clean compression. True stereo, with two compression stages per channel plus a dynamic EQ, swell mode, and a hidden overdrive mode ("Dusty") built from the same limiter circuit. Mono, stereo, or mono-to-stereo I/O.

## Controls
- **Sensitivity**: Sets the dynamic threshold — how loud playing needs to be before compression kicks in. Higher = more sensitive/responsive. Repurposes to Ramp speed when Ramping is engaged.
- **Wet**: Level of the processed (compressed) signal; can apply significant boost.
- **Dry**: Level of the unprocessed signal, blended in parallel with Wet; can also apply significant boost — used for parallel/"blend" compression.
- **Dynamics**: Sets compression amount. Sweeps through three zones as it's turned up: Compression (classic, feedback-style, 1:1 to ~10:1), Limiting (hard ceiling set by Sensitivity, gradually shifting from smooth feedback-style to precise feedforward-style limiting), and Sag (beyond limiting — simulates an overloaded tube, signal falters/sputters under harder playing).
- **Attack**: Compression onset speed, 0.5ms (fast) to 300ms (slow). Also sets the speed of the motion-based EQ modes and Motion mode (see dip switches).
- **Release toggle** (3-way): Fast (50ms) / User-adjustable (custom value set via Hidden Options, default 650ms) / Slow (1.5s) — how quickly compression (and the Shifty EQ mode) lets go.
- **Physics toggle** (3-way): Left = subtle wobbly envelope response, Middle = normal/stable, Right = twitchy/unstable — models a physical spring's imperfect follow behavior to intentionally destabilize the compression's tracking.
- **EQ**: One-knob EQ — counter-clockwise cuts highs, clockwise cuts lows, noon is neutral (off). Behaves differently depending on Mode.
- **Mode toggle** (3-way): Shifty (EQ shifts toward full-frequency whenever input passes the Sensitivity threshold, returning to the EQ knob's setting when playing stops, speed set by Attack/Release) / Manual (classic fixed EQ) / Modulated (EQ knob sets a center point that gently modulates around itself while playing, speed set by Attack, fading out when playing stops).
- **Aux footswitch**: Engages a Swell effect (momentary by default). Default mode is Dynamic Swell — signal swells in above the Sensitivity threshold and back out below it. An alternate Manual Swell mode (dip switch) triggers a swell only on footswitch press/hold/release, enabling tempo-synced or manually-triggered swells.
- **Bypass footswitch**: Tap to engage/bypass Clean; hold to max out the Sag effect momentarily.
- **Presets toggle**: Left/right positions recall stored presets; center is live (current settings). Save by holding the target side's footswitch 3 seconds, then holding the opposite footswitch 3 more seconds.
- **Visual-assist LED**: Red = compression amount (brighter = more compression); Green = active during Swell modes, tracking the swell's rise/fall.

## Hidden Options (hold both footswitches)
Gate Threshold and Gate Release (set the noise gate's sensitivity/threshold and how fast it re-engages, active when the Noise Gate dip switch is on), Swell In and Swell Out (fade-in/fade-out speed for the Swell effect, 100ms–4s), User Release (custom value for Release's middle position), Envelope Balance (filters low frequencies out of the internal envelope follower/sidechain control signal — control-signal only, not audible EQ — so Clean can be made to ignore bass content like a kick drum while still tracking higher-frequency input), Envelope Type (Analog = follows Attack/Release exactly; Adaptive = dynamically adjusts attack/release within the range set by those knobs based on playing loudness; Combo = Analog attack + Adaptive release), Spread Routing (assigns the Spread stereo effect independently to EQ only, Volume-based effects only i.e. compressor/swell, or Both). Triple-tap the preset toggle left-then-center to reset all Hidden Options to default.

## Switches / Dip Switches
8 dip switches: MISO (mono-in/stereo-out), Spread (stereo processing — each of EQ, compressor, and swell gets its own type of stereo movement, and makes left/right channel dynamics fully independent), Latch (footswitch hold behavior becomes latching instead of momentary), Sidechain (compressor follows an external signal via the 1/8" sidechain input instead of the input audio — for syncing compression to drums or another instrument), Noise Gate (mutes input below a threshold to filter hum before compression amplifies it), Motion (modulates the compression amount itself — Dynamics sets modulation depth, Attack sets rate, active only while playing), Swell Aux (switches Aux footswitch to Manual Swell mode), Dusty (turns Clean's end-of-chain limiter into a crumbly, soft-edged overdrive affecting both wet and dry signal — since everything else in the signal chain happens before the limiter, every other knob interacts with and shapes the resulting distortion).

## Signal flow
Input → pre-emphasis/pre-gain → Compressor (2-stage: shape-shifting compressor followed by an always-on automatic hard limiter) → EQ → wet/dry mixer (Wet + Dry levels) → Limiter (Dusty mode lives here) → de-emphasis → output. Dry signal bypasses the compressor/EQ chain and joins at the mixer stage, so Dry-blended signal is still subject to the final limiter/Dusty stage.

## Connectivity / App-Deep Control
- True stereo I/O, 9V DC center-negative, ~300mA.
- MIDI (via Chase Bliss MIDIbox to 1/4" TRS): controls everything including Hidden Options and dip-switch states.
- CV (0–5V, do not exceed or use negative voltage) and expression control assignable to any knob via the same dip-switch setup used for Ramping; an unassigned CV/expression cable defaults to controlling Sensitivity.
- 1/8" external Sidechain input (TS) for triggering compression from another instrument/drum signal.
- MIDI jack doubles as an external momentary footswitch input for the Aux (swell) footswitch.
- Ramping: a second dip-switch bank continuously auto-modulates one or more knobs (Dynamics, Attack, EQ, Dry, Wet) between a set position and an endpoint with selectable sweep/polarity; a one-shot "Ramp" variant moves a knob once at power-up.

## Notes for patch-building
- Functions as a compressor stage — sits early in a chain (pre-drive) for a transparent "always-on" enhancer role, or late/end-of-chain for a glue/mix-bus-style role; Chase Bliss's own suggestion is to save one preset for each use case since Wet/Dry/Dynamics needs differ substantially between the two placements.
- The Dynamics knob's three zones (Compression → Limiting → Sag) mean a single knob can take this pedal from a transparent studio compressor to a broken, sputtering tube-sag effect — worth specifying which zone a patch is targeting, since "noon" and "near max" behave completely differently.
- Dusty mode (dip switch) repurposes this pedal as a soft, crumbly overdrive rather than a compressor — if a patch uses Dusty, treat this pedal as filling a low-gain drive role instead of (or alongside) its compression role, and note that every other knob on the pedal shapes the resulting distortion character since the limiter sits at the very end of the signal path.
- True stereo with independent per-channel dynamics when Spread is engaged — most valuable in a stereo rig or paired with other true-stereo Chase Bliss units (e.g. Lost + Found, Big Time) rather than a mono guitar chain, where its compression and swell behavior is otherwise identical in mono.
