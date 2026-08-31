# Strymon Lex V2

Rotary speaker (Leslie-style) simulator modeling a rotating horn and woofer through a tube preamp and phase-inverter stage, with independent mic-distance/positioning controls and a footswitchable slow/fast speed ramp.

## Controls
- **Horn Level**: Output level of the high-frequency rotating horn
- **Dry Mix**: Blends dry input signal with the rotary effect; off at minimum, 50/50 at maximum
- **Mic Distance**: Simulated stereo mic distance from the rotors
- **Preamp Drive**: Drive amount for the modeled rotary cabinet's tube preamp and phase-inverter stages
- **Speed**: Rotor velocity, applied to both the Slow and Fast speed settings
- **Volume**: Overall output trim, ±6dB with unity gain at center

## Footswitches / Switches
- **Ramp** (mini-toggle): Controls how quickly the rotors accelerate/decelerate when switching between Slow and Fast
- **Mic Position** (mini-toggle, 2-position): Front (partially covered cabinet mic'ing) or Rear (open-back mic'ing)
- **Bi-Amp Access** (mini-toggle): Splits the horn and woofer to separate outputs for bi-amp routing
- **Cab Filter Access** (mini-toggle): Adjusts the modeled cabinet's frequency response for non-amp (DI/mixer) routing
- **Slow/Fast footswitch**: Toggles rotor speed between Slow and Fast; hold to engage the brake (rotors stop)
- **On/Off footswitch**: Engages/bypasses the effect

## Notes for patch-building
- A MOD-slot substitute for the GP-5's own rotary/Leslie-style algorithm when the deeper mic-position, bi-amp, and ramp-speed controls matter — the Slow/Fast footswitch with adjustable Ramp gives a more authentic spin-up/spin-down transition than a fixed-rate onboard rotary sim.
- Mono-compatible input (TS) or stereo (TRS); two low-impedance TS outputs for stereo/bi-amp use.
- Has an EXP/MIDI jack and USB-C for expression pedal or MIDI control.
- Power: 9VDC center-negative, 300mA minimum (supply not included).

Sources: [Lex V2 product page](https://www.strymon.net/product/lex/)
