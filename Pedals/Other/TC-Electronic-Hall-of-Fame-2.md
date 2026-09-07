# TC Electronic Hall of Fame 2 Reverb

Compact digital reverb pedal from TC Electronic, the successor to the original Hall of Fame reverb. Combines eight classic reverb algorithms (plus a Shimmer/octave-pitch-shift mode added for this second generation) with TC's pressure-sensitive MASH footswitch, letting a player add real-time expression to the reverb without an expression pedal. Widely regarded as one of the best value all-purpose reverb pedals on the market thanks to its combination of studio-quality algorithms, small footprint, and TonePrint customization.

## Controls

- **Decay**: Sets how long the reverb tail takes to fade out — shorter, tighter decays at counterclockwise settings, long wash/ambient tails toward maximum.
- **Tone**: Shapes the brightness/darkness of the reverb signal itself (not the dry signal), independent of Decay.
- **Level**: Sets the output level/mix of the reverb effect relative to the dry signal.
- **Type selector**: Rotary control choosing one of the eight reverb algorithms — Room, Hall, Spring, Plate, Church, Shimmer, Mod, and Lofi — or one of three TonePrint slots.

## Modes

- **Reverb types**: Room, Hall, Spring, Plate, Church, Mod, and Lofi cover conventional reverb spaces and textures; Shimmer is a newly-added (Hall of Fame 2 specific) algorithm that layers an octave-up pitch shift into the regenerating reverb tail for an ambient, synth-pad-like wash.
- **TonePrint slots (x3)**: Store custom or artist-designed reverb effects loaded via the free TonePrint app/editor (PC, Mac, iPad) over USB or by "beaming" audio from a phone into the pedal's input.

## Switches

- **True Bypass / Buffered Bypass**: Internal or accessible switch to choose bypass behavior.
- **Kill-Dry on/off**: When engaged, mutes the dry signal so only the wet reverb passes — useful for parallel/effects-loop reverb setups (send-only). When off, the pedal passes dry (Analog-Dry-Through) alongside the processed wet signal.

## Jacks

- Standard mono in/out; the pedal supports stereo operation for wider reverb imaging (check current-generation I/O configuration before assuming stereo out on every unit/finish, as TC has sold multiple Hall of Fame 2 variants including an X4 four-footswitch version).

## Notes for patch-building

- **MASH footswitch**: pressing and holding the footswitch (after the initial on/off tap) applies pressure-sensitive real-time control over a parameter tied to the selected reverb type — harder pressure = more intense effect. Which parameter MASH controls per algorithm is fixed by TC's default mapping, but is fully reassignable (and can be set to control up to three parameters at once) via the TonePrint Editor.
- Typical placement: end of chain, after modulation/drive stages, in the RVB slot position — this is the GP-5's own reverb-module role, so treat this pedal as a stand-in only when a patch wants a reverb texture (e.g. Shimmer) the GP-5's onboard RVB models can't produce.
- Kill-Dry makes this pedal well suited to an effects-loop or parallel/wet-only send if the target rig supports it; leave Kill-Dry off for a normal series/inline reverb.
- Because MASH is footswitch-based rather than knob-based, documenting a MASH-dependent patch requires noting both the static Decay/Tone/Level/Type settings and what pressure-sensitive move (if any) the patch expects at the footswitch.
- Exact stereo I/O jack configuration for the standard (2-knob-footswitch) Hall of Fame 2 vs. the X4 variant wasn't fully disambiguated in research — confirm the specific hardware revision's jacks before wiring it into a patch that depends on true stereo in/out.

Sources: [HALL OF FAME 2 REVERB — TC Electronic](https://www.tcelectronic.com/en/products/0709-afs), [TC Electronic Hall of Fame 2 Reverb — Effects Database](https://www.effectsdatabase.com/model/tcelectronic/toneprint/halloffame/2), [TC Electronic Hall Of Fame 2 X4 Reverb Manual](https://images.equipboard.com/uploads/item/manual/98547/tc-electronic-hall-of-fame-2-x4-reverb-manual.pdf)
