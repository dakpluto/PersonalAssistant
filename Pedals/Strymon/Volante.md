# Strymon Volante

Magnetic tape delay workstation modeling three distinct vintage echo machines (a spinning steel-wire "Drum" unit, a vintage tape echo, and a clean reel-to-reel "Studio" delay) through a 4-playback-head, single-record-head architecture, with a built-in spring reverb on the repeats.

## Controls
- **Rec Level**: Gain into Volante's analog Class-A JFET input preamp, feeding the record head — pushing it adds analog-style saturation/warmth ahead of the delay
- **Low Cut**: Shapes low-frequency content of the echo repeats
- **Mechanics**: Adds mechanical imperfection (wow, splices, crinkles) to the repeats, simulating a worn/imperfect machine
- **Wear**: Simulates playback-head degradation, softening/dulling high-frequency content in the repeats
- **Time**: Sets the delay time, referenced to playback head 4 as the quarter-note head; the other three heads subdivide relative to it and the Spacing setting
- **Repeats**: Feedback amount for whichever playback heads have their feedback buttons engaged
- **Spacing**: Adjusts the timing relationship between the four playback heads, morphing continuously between even spacing, triplet, golden-ratio, and silver-ratio subdivisions
- **Echo Level**: Overall output level of the delayed (wet) signal
- **Spring**: Mix level of Volante's built-in spring reverb, applied to the echo repeats without affecting the dry or direct echo levels

## Footswitches / Switches
- **Type** (mini-toggle, 3-position): Selects the emulated echo machine — Drum (spinning steel-wire platter, atmospheric/saturating), Tape (vintage tape echo, warm response), or Studio (clean reel-to-reel, extended fidelity repeats)
- **Speed** (mini-toggle, 3-position): Runs the emulated recording media at half, normal, or double speed — higher speed gives higher fidelity/shorter max delay time, lower speed gives warmer, longer, more degraded repeats
- **4 Playback-head buttons**: Each of the 4 playback heads is independently enabled/disabled here; press-and-hold toggles a head between full volume (green LED) and half volume (amber LED)
- **4 Feedback buttons**: One per playback head, determining whether that head's signal feeds back into the record head (feeds Repeats)
- **Pan** (per head, via secondary/hold function): Each of the 4 heads can be panned anywhere from hard-left to hard-right when running in stereo
- **ON footswitch**: Engages/bypasses the effect; hold for an infinite-repeats freeze
- **FAVORITE footswitch**: Recalls a saved preset (also doubles as a pause control in Sound-on-Sound use)
- **TAP footswitch**: Taps in the quarter-note delay time, with an LED tempo indicator

## Notes for patch-building
- Plays the same role as the GP-5's DLY slot but as a much deeper multi-head tape-delay substitute — four independently spaced, leveled, fed-back, and panned heads plus a built-in spring reverb, versus one GP-5 delay algorithm.
- Stereo in/out with a switchable INST/LINE input stage; use the left input for mono. Has MIDI (5-pin DIN) and USB-C, plus an EXP/MIDI jack for expression pedal, external tap, or MultiSwitch Plus.
- Power: 9VDC center-negative, 300mA minimum (supply not included).

Sources: [Volante product page](https://www.strymon.net/product/volante/), [How do the playback and feedback buttons work on Volante? — Strymon FAQ](https://www.strymon.net/faq/how-do-the-playback-and-feedback-buttons-work-on-volante/), [How do you pan the playback heads on Volante? — Strymon FAQ](https://www.strymon.net/faq/how-do-you-pan-the-playback-heads-on-volante/), [What are the 3 delay types on Volante? — Strymon FAQ](https://www.strymon.net/faq/what-are-the-3-delay-types/)
