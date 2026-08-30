# EarthQuaker Devices Avalanche Run (V2) (Stereo Reverb & Delay with Tap Tempo)

Combined stereo delay and reverb pedal — analog-dry/digital-wet signal path, up to ~2 seconds of delay, reverse-delay and volume-swell modes, and tap tempo with subdivisions. Delay and reverb sections can be used together or independently.

## Controls
- **Time**: Delay time, 0ms up to just under 2000ms.
- **Repeats**: Delay feedback/regeneration, from a single repeat to near-infinite runaway repeats.
- **Tone (Delay)**: Shapes the delay repeats' tone — rolls off highs counterclockwise, rolls off lows clockwise, flat in the center.
- **Mix (Delay)**: Dry/wet blend for the delay section; boosts the wet signal from roughly 1–3 o'clock, fully wet at max.
- **Decay**: Reverb decay length, from short to very long/cavernous.
- **Mix (Reverb)**: Dry/wet blend for the reverb section, with a similar wet-boost taper to the delay Mix.

## Footswitches / Switches
- **Footswitch**: Engages/bypasses the effect (Flexi-Switch — latching and momentary from the same switch); switchable between true bypass and buffered bypass, with 5 selectable tail-length behaviors including a sound-on-sound-style lo-fi looping mode.
- **Tap tempo footswitch**: Sets delay time by tapping.
- **Ratio selector (6-way)**: Sets the tap-tempo subdivision relative to the tapped tempo — 1/1, dotted 8th (3/4), quarter-note triplet (2/3), 1/2, 8th-note triplet (1/3), 1/4.
- **Mode toggle (3-way)**: Normal (standard delay + reverb) / Reverse (reverse delay) / Swell (volume-swell mode).
- **Expression assign switch**: Routes an expression pedal to control Decay, Reverb Mix, Time, Repeats, Delay Mix, or the effect toggle itself.

## Notes for patch-building
- Covers two GP-5 module slots at once (DLY and RVB) in a single stompbox — useful as a full replacement for both when a patch wants an all-analog-dry-signal-path delay+reverb combo instead of the GP-5's own digital DLY/RVB, or as a second, independently-tappable delay+reverb stage layered after the GP-5's.
- Reverse and Swell modes are specialty textures (not just a straight delay/reverb) — reserve them for sections that specifically call for reverse-delay swells or volume-swell pads rather than as a default setting.
- Stereo I/O (mono, stereo, or mono-in/stereo-out configurations supported) — can be run in true stereo if the rest of the board/amp setup supports it. Needs a 1-amp-capable 9V center-negative supply (410 mA draw) — verify power supply headroom before adding to a board.
