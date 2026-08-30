# EarthQuaker Devices ZEQD-Pre (The All-Analog Simulation Solution)

An all-analog tube preamp pedal co-designed with Dr. Z Amplification, built around a real EF86 pentode preamp tube. Functions as a self-contained "amp head in a box" with a passive 3-band EQ, a footswitchable clean boost, and a balanced XLR direct output with onboard analog cabinet simulation — aimed at pedalboard-to-FOH/interface use as much as at feeding a real amp.

## Controls
- **Level**: Output volume when the tone controls are active (i.e., Boost footswitch not engaged).
- **Bass**: Passive low-frequency control, 20Hz–400Hz.
- **Middle**: Passive midrange control, 400Hz–2kHz.
- **Treble**: Passive high-frequency control, 2kHz–20kHz.
- **Boost**: Output level control used only when the Boost footswitch is active (tone controls bypassed in that state).

## Footswitches / Switches
- **Activate**: Engages/bypasses the ZEQD-Pre (mechanical true bypass).
- **Boost**: Defeats the 3-band tone stack and delivers a full-range clean boost (level set by the Boost knob) without altering frequency response.
- **Ground Lift** (side-mounted): Lifts ground on the balanced XLR output to combat hum/ground loops when running to a mixer/interface.
- **Cab Sim Bypass** (side-mounted): Removes the onboard analog cabinet simulation from the XLR output only — useful when reamping into a real cab/IR downstream rather than going direct to FOH.

## Jacks
- **1/4" instrument in/out**: Standard guitar-level in/out for pedalboard use.
- **Headphone out** (1/4" TRS): For direct monitoring.
- **Balanced XLR out**: Preamp + analog cab-sim signal for direct-to-console or interface use.

## Notes for patch-building
- Designed as an AMP-module substitute rather than a boost/drive pedal — its real EF86 tube preamp and passive 3-band EQ mean it can stand in for a patch's amp-in-a-box duties, similar in spirit to a NAM capture but fully analog and hardware-based rather than a captured profile.
- The XLR output's analog cab simulation makes it usable as a complete "amp + cab" direct box on its own, independent of the GP-5's own CAB module or any IR — the Cab Sim Bypass switch lets it act as preamp-only when a real cab or a separate IR is preferred downstream.
- The Boost footswitch's full-range, EQ-bypassed clean boost is a distinct utility from the pedal's amp-voicing role — useful as a solo-level bump without altering the dialed-in tone stack.
- Mechanical true bypass; higher current draw (500mA) than typical stompboxes because of the onboard tube — factor into power supply planning on a board.
