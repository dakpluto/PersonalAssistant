# Chase Bliss Onward

Dynamic envelope sampler with two parallel channels: Freeze (captures a moment and sustains it into a pad/drone/synth-like voice) and Glitch (samples a phrase and turns it into a repeating, glitchy loop/echo). Both channels listen to input dynamics automatically and continuously re-sample/replace what they've captured unless locked, so the pedal is always reacting to playing rather than sitting in a fixed static state. Mono, stereo, or mono-to-stereo I/O.

## Controls
- **Mix**: Balance between dry input and Onward's output (affects both channels at once). Repurposes to Ramp/Bounce speed when Ramping is engaged.
- **Size**: Sets Glitch's sample length and the overall timing reference for the rest of the pedal (becomes a clock subdivision when synced to MIDI clock).
- **Octave**: Blends in a pitch-shifted voice — turn left of noon for a half-speed (down an octave) voice, right of noon for double-speed (up an octave); noon disengages it.
- **Texture**: Adds digital or analog-style grit — left of noon degrades the sample rate (lo-fi/digital), right of noon adds soft-clipping analog-style overdrive with dynamic harmonics; noon is off. Also hides a simple tilt EQ (see Hidden Options).
- **Animate toggle** (3-way): Vibrato (speed set by Size) / Off / Chorus (fixed slow, ambient rate) — adds movement/drift to the sound.
- **Sustain**: How long a captured sound holds before fading — low settings give short blips/echoes/synth-like stutters, max gives infinite sustain until a new sample is triggered. On the Glitch side this also sets how many discrete repeats occur.
- **Fade toggle** (3-way: Slow / User / Fast): Sets fade-in/out and crossfade speed between old and new samples — Slow gives soft swells, Fast gives near-instant snaps, User recalls a custom speed set via Hidden Options.
- **Error**: Sets how often/intensely the selected Error type occurs.
- **Type toggle** (3-way): Timing (mutes and sample-rate jumps affecting sample length), Condition (random dropouts/glitches plus momentary sample-rate shifts), Playback (randomizes playback direction/speed in harmonized 2x/4x jumps).
- **Presets toggle**: Left/right positions recall stored presets; center is live (current settings).

## Footswitches
- Glitch footswitch: tap to trigger/engage the Glitch effect; hold to lock (freeze) the current sample so it stops re-sampling.
- Freeze footswitch: tap to engage the Freeze effect; hold to lock the current sample.
- Both together (hold): opens Hidden Options (LEDs turn green).
- Both together (double-tap): enters Tap Tempo mode (LEDs blink red); tap the left footswitch to set tempo, then press left again to exit.
- Power-on with Glitch held: toggles Dry Kill (removes dry signal from output).
- Power-on with Freeze held: toggles Trails (lets the effect fade out smoothly on bypass instead of cutting off).
- Save a preset by holding the desired side's footswitch 3 seconds, then holding the opposite footswitch another 3 seconds; middle LED blinks to confirm.

## Hidden Options (hold both footswitches)
Sensitivity (dynamics response threshold), Balance (relative volume of the two channels), Duck Depth (sensitivity/intensity of the sidechain-style ducking effect), User (custom Fade-center speed), Error Blend (mixes in the two non-selected Error types alongside the main one), EQ (tilt EQ hidden under Texture — clockwise thins/cuts lows, counterclockwise darkens/cuts highs), and per-parameter Routing toggles (Type/Fade/Animate toggles can each be set to apply to Glitch only, both channels, or Freeze only — e.g. apply Error only to Glitch while Freeze stays clean and stable). Triple-tap the preset toggle left-then-center to reset all Hidden Options to default.

## Switches / Dip Switches
8 top-panel dip switches: MISO (mono-in/stereo-out), Spread (adds moving/spreading stereo processing, including stereo-randomized Error), Latch (footswitch hold becomes latching instead of momentary), Sidechain (Glitch resetting triggers a momentary volume dip on Freeze, or use it to rhythmically pulse Freeze alone with Glitch off), Duck (both channels duck in volume whenever input signal is detected), Reverse (reverses Glitch's playback), 1/2 Speed (halves Glitch's recording quality/sample rate for a longer, lower-fi sample), Manual (disables dynamics-triggered sampling — footswitch tap re-samples, hold captures new audio ignoring Sustain, double-tap turns the effect off). Dip-switch states save with presets.

## Connectivity / App-Deep Control
- Mono, stereo, or mono-to-stereo I/O; 9V DC center-negative, ~200mA.
- MIDI (via Chase Bliss MIDIbox to 1/4" TRS): clock sync plus full control of Hidden Options and dip-switch states beyond the faceplate.
- CV (0–5V) and expression control assignable to any knob(s) via the same dip-switch-based setup used for Ramping (choose knob, sweep direction/polarity, range); an unassigned expression/CV cable defaults to controlling Mix.
- MIDI jack also accepts a normally-open momentary external footswitch for toggling the Glitch channel.
- Ramping: a second dip-switch bank ("Bounce") continuously auto-modulates one or more knobs (Size, Error, Sustain, Texture, Octave) between the knob's set position and an endpoint, with selectable sweep direction/polarity; a one-shot "Ramp" variant moves a knob once on power-up instead of continuously.

## Notes for patch-building
- Sits in the GP-5's MOD/DLY/RVB territory as an unconventional texture generator — Freeze covers pad/drone/synth-pad roles a reverb or looper might otherwise fill, while Glitch covers glitch-delay/stutter-repeat roles; decide which module slot(s) it's substituting for before adding a conventional reverb/delay downstream, so effects don't duplicate.
- Because both channels are "always listening" and continuously re-sample, treat their footswitches as capture/lock toggles rather than a simple effect on/off — a documented patch should specify whether a channel is meant to be actively re-sampling during a section or locked (held) to sustain one captured sound.
- Freeze and Glitch run in parallel and share Mix, but Routing (Hidden Options) lets Error/Fade/Animate apply to only one channel — useful for pairing a stable, unaffected Freeze pad against a chaotic, heavily-Error'd Glitch loop within the same patch.
- Manual mode (dip switch) is the closer analog to a conventional sampler/looper pedal — tap to sample, hold to capture, double-tap off — worth calling out explicitly if a patch depends on player-triggered capture instead of the default dynamics-triggered behavior.
