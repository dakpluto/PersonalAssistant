# Chase Bliss Bad Mood

Two-channel ambient multi-effect: one channel is an "always-listening" micro-looper that continuously captures brief moments, the other is a set of real-time spatial effects (reverb/delay/pitch). The two channels are aware of each other and can process, record into, or modulate one another, with a global saturator ("Glue") at the end of the chain. Buffered bypass with true-bypass and trails options. Mono, stereo, or mono-to-stereo I/O.

## Controls
- **Mix**: Balance of dry input vs. the whole pedal (both channels). When Ramping is engaged, this knob repurposes to control ramp/bounce speed instead.
- **Clock**: Sets the pedal's sample rate, which sets both the length/resolution of the Micro-Looper and the quality/decay time of the Wet Channel effects. Moves in musically harmonized steps (e.g. 64k to 32k halves the speed of both channels at once).
- **Routing** (3-way toggle: In / Clock+In / Clock): Controls what the Wet Channel processes — input only, input plus the Micro-Looper, or the Micro-Looper only. Only matters when both channels are active.
- **Presets** (3-way toggle): Left and right positions recall stored presets; center is "live" (current knob settings).

### Wet Channel section
- **Time**: Function changes per mode — Soup: decay/size; Relay: delay time; Flip: lag/note spacing.
- **Modify**: Function changes per mode — Soup: character; Relay: feedback/repeat count; Flip: harmony interval (4ths/5ths/octaves, up or down).
- **Mode** (3-way toggle): Selects Soup (spectral/resynthesizing reverb), Relay (delay with fixed-volume, non-decaying repeats), or Flip (pitch-shifting harmonizer with spread-in-time notes).
- **Bypass footswitch**: Engages the Wet Channel. Tap to toggle; hold to Freeze (infinitely repeats the current sound — an ambient pad in Soup, a looping echo in Relay, a repeating chord in Flip).

### Micro-Looper Channel section
- **Length**: Function changes per mode — Burst: pattern speed/step size; Radio: station-dependent parameter; Mask: mask character.
- **Modify**: Function changes per mode — Burst: envelope sensitivity; Radio: scans through 5 "stations" (Tape, Ambient, Orchestral, Shoegaze, Dance); Mask: mask threshold.
- **Mode** (3-way toggle): Selects Burst (turns the loop into an up-to-8-step rhythmic sequence), Radio (five genre-styled loop treatments), or Mask (replaces loud parts of the loop above a threshold with a chosen character).
- **Bypass footswitch**: Alternates the always-on looper between recording and playback. Hold to overdub. Because the looper never truly stops, bypassing it acts like a "replace" function, erasing and re-recording.

## Hidden Options (hold both footswitches to access)
Seven additional parameters mapped to the same physical knobs/toggles while both footswitches are held: Cross (dynamic amplitude/pitch modulation intensity, sourced from Input Mod), EQ (global two-way tilt EQ), Fade (loop fade-out amount while overdubbing), Glue (end-of-chain saturator/destroyer intensity), Blend (mixes clean micro-loop back in when it's routed through the Wet Channel), Sync (locks one channel's timing to the other), Spread (stereo image processing), Input Mod (selects Cross's modulation source), Level Balance (relative loudness of the two channels).

## Switches / Dip Switches
- 8 top-panel "Control" dip switches (Customize section): MISO (mono-in/stereo-out), Spread (stereo processing), Dry Kill, Trails, Latch (footswitch hold becomes latching), Half (halves loop length to match original MOOD), Smooth (removes Clock's stepped/harmonized feel), Dry Glue (applies Glue to the dry signal too).
- A second 8-switch "Customize" bank sets up Ramping (automating knob movement) — selects which knob(s) ramp/bounce, sweep direction, and polarity.
- Tap both footswitches 3x to toggle true bypass (default is buffered); all three LEDs blink red while in true-bypass mode.

## Footswitches
- Left footswitch: Wet Channel bypass/engage (tap), Freeze (hold).
- Right footswitch: Micro-Looper record/playback toggle (tap), overdub (hold).
- Both together (tap): true-bypass toggle. Both together (hold): access Hidden Options.

## Connectivity / App-Deep Control
- Stereo I/O (TRS-capable), 9V DC center-negative, ~200mA.
- MIDI (via Chase Bliss MIDIbox adapter to 1/4" TRS): full control including clock sync, Hidden Options, and dip-switch states — none of which are reachable from the faceplate alone.
- CV (0–5V) and expression control over any knob, using the same ramping-style dip-switch setup to assign which knob(s) respond.
- MIDI jack doubles as an external footswitch input (normally-open momentary TS) for the Wet Channel.
- 2 onboard presets (footswitch toggle), up to 122 more via MIDI program change.

## Notes for patch-building
- This is a two-in-one ambience/texture generator, not a conventional reverb or delay — it replaces both the MOD and DLY/RVB slots' worth of sonic real estate with something considerably weirder (granular reverb, non-decaying delay, harmonizer, and a rhythmic/glitch looper).
- Place late in the chain, after gain stages, same general region as delay/reverb — it is not a drive or EQ tool.
- Because the Micro-Looper is always listening even when "bypassed," treat its footswitch as record/playback toggle rather than true on/off; plan CTL/footswitch choreography around that behavior rather than assuming a silent bypass state.
- The Hidden Options (held-footswitch layer) and MIDI-only depth (Cross source, dip switches, ramping targets) go well beyond the 2 knobs + 2 toggles + 2 footswitches visible on the faceplate — a documented patch should note which Hidden Option / dip-switch state it depends on, since those aren't visible at a glance on the pedal.
- Buffered bypass by default (true bypass available via footswitch combo) — safe to place anywhere in a passive chain without a buffer nearby.
