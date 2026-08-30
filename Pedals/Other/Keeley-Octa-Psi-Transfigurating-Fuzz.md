# Keeley Octa Psi Transfigurating Fuzz

Combination fuzz and polyphonic pitch-shifter/octave pedal with independently footswitchable fuzz and octave/pitch sides, switchable effect order, and a stepped pitch-interval control for octave, harmony, and detune effects.

## Controls
- **Fuzz** (Gain): Amount of fuzz/distortion saturation.
- **Level**: Output volume of the fuzz side.
- **Tone**: High-frequency shaping of the fuzz.
- **Low End EQ (bass response) switch**: 3-way toggle — Scoop (classic scooped-mid fuzz low end), Punch (boosted low end), Psi (maximum undertones/lowest, thickest low end).
- **Pitch (interval) knob**: Stepped selector for the pitch-shift/octave interval, with settings including DY (detune/chorus-like), M2, M3, P4, P5, M6, Oct (one octave), and 2 Oct (two octaves).
- **Octave mode switch**: Selects Up / Dual / Down — whether the pitch-shifted voice(s) sit above, below, or both above and below the dry note.
- **Blend**: Multi-function knob. Normally mixes dry signal against the pitch-shifted voice(s); double-tapping it toggles between an all-wet mode and a wet/dry blend mode. Press-and-turn while holding a footswitch accesses secondary functions (e.g. ramping speed).

## Footswitches / Switches
- **Fuzz footswitch (left)**: Engages/bypasses the fuzz side. Press-and-hold toggles the octave side between Latching mode and Momentary Ramping mode. Holding at power-up switches the pedal between true bypass and buffered bypass.
- **Octave/Pitch footswitch (right)**: Engages/bypasses the octave/pitch side. Holding it while turning the Blend knob adjusts the ramping speed used in Momentary Ramping mode.
- **Both footswitches held together**: Instantly swaps the effect order between Fuzz-into-Octave and Octave-into-Fuzz.

## Notes for patch-building
- Two independent effects in one enclosure: the fuzz side is a straightforward front-end gain/drive stage (same role as the GP-5's DST), while the octave/pitch side is a polyphonic pitch-shifter more capable than the GP-5's own pitch options — treat them as two separate module roles that happen to share a box and can be toggled independently.
- Because fuzz and octave are separately footswitchable with a runtime-swappable effect order, this pedal can cover "clean octave/harmony" and "fuzzed octave" and "octave-into-fuzz" tones all from one fixed knob setting — useful where a full-board patch needs more than the GP-5's CTL on/off-only constraint would otherwise allow from a single module.
- The Momentary Ramping mode (pitch glides in when the octave footswitch is held, then glides back when released) is a real-time pitch-bend/dive-bomb effect distinct from the static Latching interval mode — worth calling out explicitly in patch notes since it changes how a player would use the footswitch, not just what it sounds like.
- Bypass mode (true vs. buffered) is user-configurable via footswitch-hold at power-up, so it isn't fixed at one behavior out of the box.
