# Chase Bliss Lost + Found

Chase Bliss's first true stereo multi-effect: two independent channels (Left and Right), each selectable between 6 effect pairs (12 total effect algorithms — reverb, pitch, warp/modulation, delay, synth, and pitch-bend/chorus families), with a continuously variable A/B blend control per channel. The two channels can run in parallel or series (either direction), and can be swapped so either channel accesses either bank of 6 effects, yielding 144 possible combinations. Includes an end-of-chain compressor/saturator ("Glue"). Mono, stereo, or mono-to-stereo I/O.

## Controls
- **Mix**: Balance of dry input vs. the whole pedal (both channels at once). Repurposes to control ramp/bounce speed when Ramping is engaged.
- **Blend**: Sets how the Left and Right channels combine — in Parallel this is the volume balance between the two independent channels; in Series (either direction) it's the mix of the second effect in the chain.
- **Routing toggle** (L▸R / L+R / L◂R): Left-into-Right series, fully independent parallel, or Right-into-Left series.
- **Presets toggle**: Left/right positions recall stored presets; center is "live" (current settings).

### Per-channel effect controls (Left and Right each have their own identical set)
- **Time**: Primary timing/character parameter — meaning depends on the selected effect (e.g. reverb size, delay time, LFO rate, portamento). Syncs to a shared tempo/subdivision by default (can be set to Unsync).
- **Modify**: A bidirectional knob that both selects between the "A" and "B" effect in that slot and adjusts a core character parameter of whichever is chosen (turning fully one way selects effect A, the other way selects effect B; center/noon disengages both, leaving only Glue if engaged).
- **Effect-select toggle** (3-way, labeled 1/2/3 on Left or 4/5/6 on Right): Chooses which effect pair (of three per channel) Modify is choosing between.
- **Channel Bypass footswitch**: Tap to engage/bypass that channel; hold for a mode-specific secondary function (most commonly "Freeze" — captures and infinitely repeats the current sound, becoming a synth pad, looped grain pattern, etc. depending on mode).

### The 12 effects (Left Channel bank 1-3, Right Channel bank 4-6)
1A Slow-verb / 1B Useful Ambience (reverbs), 2A Orchestral Swell / 2B Pitch Repeater (pitch shifters), 3A Pinging Phaser / 3B Spectral Modulator (warp/filter effects), 4A Tape Echo / 4B Grain Tumbler (delays), 5A Impulse Synthesizer / 5B Sympathetic Resonator (synth/resonator), 6A Ensemble Expander / 6B Gen Lite (chorus/tape-degradation). Each effect has its own Time/Modify mapping plus a third parameter (ALT, in Hidden Options) and often a unique Freeze/Pause/Infinite/Tape-Stop behavior on footswitch-hold.

## Hidden Options (hold both footswitches to access)
Per-channel ALT (a third, mode-specific parameter) and EQ (global tilt EQ, per channel), plus shared SPILL (feeds input signal into the second effect in a series routing, not just the first), GLUE (end-of-chain compressor/saturator amount), and SPREAD (apply stereo spread to only one channel). Also: tap-both-footswitches-twice for a Tap Tempo menu; hold Left footswitch at power-up for global Dry Kill; hold Right footswitch + turn Mix for per-preset Wet Volume trim.

## Switches / Dip Switches
- 8 "Control" dip switches: MISO (mono-in/stereo-out), SPREAD (stereo image processing per mode), LATCH (footswitch hold-behavior becomes latching instead of momentary), L SWAP / R SWAP (replace one channel's 3 effects with the other channel's 3, enabling any-effect-with-any-effect combinations or running two instances of the same effect), UNSYNC (decouples the two channels' tempo), TRAILS, BANK (unlocks 2 additional preset slots).
- A second 8-switch bank plus polarity/sweep settings configures Ramping (auto-animating one or more of L Time / L Modify / Blend / R Modify / R Time).
- Tap the preset toggle left-then-center 3 times to reset all Hidden Options to default.

## Footswitches
- Left footswitch: Left Channel bypass/engage (tap); mode-specific hold function (often Freeze).
- Right footswitch: Right Channel bypass/engage (tap); mode-specific hold function.
- Both together (double-tap): opens Tap Tempo menu. Both together (hold): opens Hidden Options.

## Connectivity / App-Deep Control
- Stereo I/O (TRS-capable), 9V DC center-negative, ~200mA.
- MIDI (via Chase Bliss MIDIbox to 1/4" TRS): full control including clock sync, Hidden Options, and dip-switch states.
- CV (0–5V) and expression control over any knob, assignable via the same dip-switch-based setup used for ramping (choose knob, sweep direction, polarity, range).
- MIDI/AUX jack doubles as an external footswitch input for the Left Channel.
- 4 onboard presets (2 in the default bank, 2 more via the BANK dip switch), up to more via MIDI.

## Notes for patch-building
- This single pedal can substitute for the GP-5's MOD, DLY, and RVB slots simultaneously (and even stand in for synth/pitch effects), since its 12 algorithms span reverb, pitch-shift, phaser/filter modulation, delay, granular/synth, and chorus/tape-wobble — decide up front which GP-5 module slot(s) it's replacing so the rest of the chain isn't duplicating the same effect type.
- Series vs. Parallel routing materially changes the pedal's role: Parallel (L+R) is best for two simultaneous, independent textures (e.g. modulation + reverb blended together); Series (L▸R or L◂R) is best when one effect should feed into and shape another (e.g. synth into reverb). Pick routing based on whether the two chosen effects should sound stacked or independent.
- Glue (hidden behind Blend, off by default) adds meaningful compression/saturation at the end of the chain — worth calling out explicitly in a patch writeup since it's not visible from a glance at the faceplate and changes the pedal's overall "finished" quality.
- Buffered when engaged; check per-channel bypass behavior in a live rig since each channel's footswitch controls only that channel, not the whole pedal — a patch relying on this pedal for a single always-on texture should specify which channel(s) stay engaged.
