# Darkglass Electronics B7K Ultra

**Bass-specific pedal** — unlike most entries in this general library, the B7K Ultra is a bass preamp/overdrive/DI and is not intended for guitar use. It's Darkglass's flagship analog preamp/distortion, built around their signature aggressive, saturated bass overdrive circuit plus a fully switchable 4-band EQ and an onboard cabinet simulator/DI section, making it usable as a full bass preamp and front-of-house DI box on its own, not just a drive pedal.

## Controls
- **Drive**: Amount of saturation/overdrive from the clipping stage.
- **Blend**: Mixes the clean input signal (held at unity gain) with the overdriven signal (whose level is set independently by Level), for parallel dirty/clean blending.
- **Level**: Sets the volume of the overdriven signal within the blend.
- **Master**: Overall output volume; also functions as the DI output level control.
- **Bass**: ±12dB EQ centered at 100Hz.
- **Lo Mids**: ±12dB EQ, switchable center frequency (250Hz / 500Hz / 1kHz — see Switches).
- **Hi Mids**: ±12dB EQ, switchable center frequency (750Hz / 1.5kHz / 3kHz — see Switches).
- **Treble**: ±12dB EQ centered at 5kHz.

## Switches
- **Grunt**: Selects one of three low-frequency boost levels applied *before* the clipping stage, shaping how much bass content gets saturated (more Grunt = fatter, more distorted low end).
- **Attack**: Three positions controlling how much treble content hits the clipping stage — Boost (emphasizes treble into the saturation for extra clarity/presence), Flat (untouched), Cut (reduces high-frequency saturation for a smoother top end).
- **Lo Mids frequency selector**: 250Hz / 500Hz / 1kHz center point for the Lo Mids EQ band.
- **Hi Mids frequency selector**: 750Hz / 1.5kHz / 3kHz center point for the Hi Mids EQ band.
- **Cab sim on/off**: Toggles the onboard cabinet simulator on the DI output.
- **Ground lift**: Disconnects DI output signal ground to break ground loops.

## Jacks
- **Input / Output**: Standard 1/4" instrument in/out to amp or next pedal.
- **DI Out (XLR, balanced)**: Direct output for front-of-house/recording, with switchable cab simulation and a ground-lift switch; the Master knob doubles as its level control.
- **Headphone out (3.5mm)**: Includes cab simulation, for silent practice/direct monitoring.
- **Aux In (1/8")**: Accepts an external audio source (phone, media player) to play along with backing tracks through the pedal (present on the "B7K Ultra V2 with Aux In" variant).
- **Micro-USB**: Connects to Darkglass Suite software to load different virtual cabinet IRs for the onboard cab sim.

## Notes for patch-building
- This pedal is bass-only — do not use it as a guitar drive reference; its EQ ranges, Grunt/Attack pre-saturation shaping, and DI/cab-sim design are specifically built around bass frequency content and stage/studio DI use.
- Typical placement: preamp/drive stage, essentially a full bass preamp in pedal form — many bassists run it as their primary tone-shaping stage rather than an add-on drive, often placed near the front of the chain (after tuner/compressor, before modulation/time-based effects).
- Power: 9V DC center-negative, ~120mA current draw, 1MΩ input impedance, 1kΩ output impedance.
- The Blend/Level pairing (clean signal fixed at unity, overdrive level independently adjustable) is the key control-interactivity to document in a patch — Drive and Blend together determine how aggressive vs. subtle the saturation reads, more than Drive alone.
- Bypass type (true bypass vs. buffered/analog) was not confirmed by research for this unit — note as unconfirmed rather than assuming.

Sources: [Darkglass Electronics Microtubes B7K Ultra V2 Bass Preamp Pedal manual — Manuals+](https://manuals.plus/darkglass-electronics/microtubes-b7k-ultra-v2-bass-preamp-pedal-manual), [Darkglass Microtubes B7K Ultra V2 Bass Preamp Pedal w/ Aux In — Amazon listing](https://www.amazon.com/Darkglass-Microtubes-B7K-Ultra-Aux/dp/B07RK3MP6N)
