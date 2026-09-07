# Catalinbread Belle Epoch Deluxe

Catalinbread's expanded tape-echo emulation, built on the same analog front end as their original Belle Epoch (itself modeled on the Maestro EP-3 Echoplex: 22V power rail, JFET preamp, mixer stage, and high-gain silicon transistor record/playback amps, plus the EP-3's feedback loop) but replacing the physical tape loop with a 24-bit digital delay line and adding a selectable six-mode "Echo Program" engine and onboard modulation. The current production model is the Belle Epoch Deluxe (CB-3); it supersedes the original single-mode Belle Epoch as Catalinbread's flagship tape-echo pedal.

## Controls
- **Record Level**: Replicates the EP-3's input/record gain stage — pushing it adds preamp dirt and grit to the repeats, pulling it back cleans them up.
- **Echo Volume**: Sets the level of the repeats in the mix, using the same mixer circuit as the EP-3 (so it imparts the same subtle phase/tone shift on the dry signal that the original hardware did).
- **Echo Sustain**: Feedback control — sets how many times the signal repeats, up through self-oscillating runaway repeats at extreme settings.
- **Echo Delay**: Sets delay time digitally, 80ms to 800ms, emulating the EP-3's tape-head-lag response.
- **Depth**: Sets the intensity of the onboard modulation (wow/flutter-style movement on the repeats).
- **Echo Program**: 6-position selector choosing the overall echo voice/algorithm (see Modes below).

## Modes
- **Echo Program 1**: Stock Maestro EP-3 voice.
- **Echo Program 2**: Darker, BBD-analog-delay-style repeats with chorus-like modulation.
- **Echo Program 3**: Roto-swirl — rotary-speaker-style modulation on the repeats.
- **Echo Program 4**: Manually sweepable resonant filter on the repeats.
- **Echo Programs 5 & 6**: Two Electro-Harmonix Deluxe Memory Man-inspired voices, each with a different modulation character.

## Switches
- **V/D toggle**: Sets what the expression pedal input controls — Delay Time (V position controls via the front slider-equivalent) or, depending on the selected Echo Program, an alternate function such as echo volume, modulation speed, or filter sweep.
- **Internal bypass switch**: Selects true bypass or buffered "trails" mode (repeats continue after bypass) — internal, not a footswitch.

## Jacks
- **1/4" TRS expression pedal input**: Controlled by the V/D toggle; behavior (delay time vs. per-program alternate function) depends on both the toggle and the active Echo Program.

## Notes for patch-building
- Typical placement: DLY slot, in the traditional analog-echo delay position — this pedal is a strong pick whenever a patch calls for tape-echo character (wow/flutter, warm repeats, self-oscillation) beyond the GP-5's own DLY algorithms, or specifically wants one of its non-EP-3 voices (rotary, resonant filter, Memory Man-style modulation).
- Bypass defaults to true bypass but has an internal switch for buffered trails mode — document which mode the target unit is set to, since trails mode changes tail behavior when the pedal is turned off mid-repeat.
- A separate momentary **Echo OSC** footswitch triggers instant runaway/self-oscillating repeats independent of the Echo Sustain knob setting (an internal trimpot makes this function's threshold user-tunable) — useful for a deliberate "throw" moment in a patch but should be called out explicitly in the write-up since it's a performance gesture, not a static setting.
- Because Echo Program reassigns both the modulation character and what the expression jack controls, a patch write-up needs to record the exact Program number (1-6) alongside the five knob settings — "tape echo" alone isn't enough to reproduce the sound.
- An internal gain trimmer (factory set just above unity) exists on the underlying Belle Epoch platform; treat it as a set-and-forget internal adjustment rather than a per-patch value unless confirmed otherwise on the specific unit in use.

Sources: [Belle Epoch Deluxe (Black and Silver) — Catalinbread](https://catalinbread.com/products/belle-epoch-deluxe), [Catalinbread Belle Epoch Deluxe Review — Premier Guitar](https://www.premierguitar.com/gear/catalinbread-belle-epoch-deluxe-review), [Catalinbread Belle Epoch Tape Echo Manual — ManualsLib](https://www.manualslib.com/manual/560865/Catalinbread-Belle-Epoch-Tape-Echo.html)
