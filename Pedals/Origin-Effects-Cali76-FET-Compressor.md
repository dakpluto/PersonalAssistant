# Origin Effects Cali76 FET Compressor

FET-based compressor pedal modeled on the classic studio 1176-style compressor, prized for musical, fast, transparent compression with a dedicated blend control and a proper gain-reduction meter.

## Controls
- **In**: Sets input drive level into the compression circuit. Higher settings push more signal over threshold, increasing how much of the signal gets compressed (this pedal has no separate threshold knob — In effectively sets it).
- **Out**: Output level of the compressed signal.
- **Attack**: How quickly compression engages once a signal crosses threshold. Faster settings catch transients early (more clamped/squashed attack); slower settings let more of the transient through before compression kicks in.
- **Release**: How quickly compression lets go after the signal drops. Range roughly 69.5 ms (fastest, fully clockwise) to 398 ms.
- **Ratio**: Amount of gain reduction applied, continuously variable from 4:1 up to 20:1.
- **Dry**: Blends in a parallel uncompressed dry signal alongside the compressed signal, for parallel/"New York style" compression. Fully clockwise adds up to 9 dB of dry boost; unity gain sits around the 2 o'clock position.

## Indicators
- **10-segment LED gain-reduction meter**: Real-time visual readout of how much compression is being applied.

## Footswitches / Switches
- Single footswitch: engages/bypasses the pedal. Uses buffered bypass with electronic switching (internal jumpers can reconfigure it to true bypass, but ships buffered).

## Notes for patch-building
- Sits early in the chain, typically right after any noise gate/NR and before drive/gain stages — same slot the GP-5's own compressor-adjacent settings or an outboard comp pedal would occupy ahead of PRE/DST.
- The In/Out/Ratio/Attack/Release layout (rather than a simple sustain-and-level control) makes this a precision studio-style compressor rather than a "squish everything" stompbox comp — good reference for dialing in transparent, fast-FET-style compression if a patch calls for controlled dynamics without obvious pumping.
- The Dry blend knob is the standout feature: it lets a patch keep pick-attack transparency and low-end punch (especially useful for bass) even under heavy compression ratios, since it parallel-blends rather than only serving as a wet/dry mix.
- Buffered bypass by default is worth noting for board placement — it can help drive long cable runs but means it's not a true-bypass-transparent link in the chain when off, unless internally rejumpered.
