# Electro-Harmonix POG2

Polyphonic octave generator descended from EHX's 2005 original POG, widely regarded as one of the greatest octave pedals ever built thanks to genuinely accurate polyphonic pitch tracking across full chords, slides, and double-stops — where older analog octave pedals typically only tracked single notes cleanly. Digital pitch-tracking under the hood (not an analog VCO, despite the vintage-synth-adjacent sound palette), used by artists from The Edge and Jack White to John Mayer and Bill Frisell for everything from 12-string-style jangle and organ/synth pads to full symphonic wall-of-sound textures. EHX also currently sells the newer, more expansive POG3 alongside it; this write-up covers the POG2, the model this reference request specified.

## Controls

- **Dry Output** (slider): Sets the output volume of the unprocessed dry signal.
- **-2 Octaves** (slider): Sets the output level of the voice two octaves below the input pitch.
- **-1 Octave** (slider): Sets the output level of the voice one octave below the input pitch.
- **+1 Octave** (slider): Sets the output level of the voice one octave above the input pitch.
- **+2 Octaves** (slider): Sets the output level of the voice two octaves above the input pitch.
- **Attack** (slider): Sets the attack/fade-in time applied to all the generated octave voices — pushed up, notes swell in gradually rather than sounding immediately, useful for reverse-like or bowed-pad textures.
- **LP Filter** (slider): Sets the cutoff frequency of the onboard low-pass filter — pushed up, the cutoff rises, letting more high end through; pushed down, the tone darkens.
- **Detune** (slider): Applies pitch detuning to the +1 and +2 Octave voices — pushed up, both the depth and rate of the detune increase, thickening the upper octaves into a chorus-like, synth-ensemble texture.

## Switches

- **Dry FX** (pushbutton, cycles 4 modes): Determines whether the Dry signal bypasses the Attack/LP Filter/Detune processing entirely or is routed through some/all of those effects along with the octave voices — changes whether the dry signal stays fixed while only the octaves swell/filter, or the whole mix (dry included) is shaped together.
- **Q** (pushbutton, cycles 4 resonance levels): Sets the resonance/Q of the LP Filter, from a smooth curve to a more peaky, resonant one — higher Q pushes the filtered voices toward a more vocal, synth-filter-like character.
- **Preset**: A dedicated Preset knob plus a Preset footswitch let you select, load, and save across 8 onboard presets, and step through them live via footswitch.

## Jacks

- **Input / Output**: Standard 1/4" instrument in/out.
- Research did not turn up a confirmed expression-pedal or CV input on the POG2 specifically (EHX's newer POG3 does add an EXP/CV input) — treat the POG2's control surface as slider/switch-only unless confirmed otherwise.

## Notes for patch-building

- Typical placement: usually placed early in the chain (post-guitar, pre-drive) so the pitch tracker sees a clean, unprocessed signal — polyphonic pitch tracking degrades if fed an already-distorted or heavily effected input.
- Requires its specific included 9.6VDC-200mA adapter — EHX's own documentation warns against substituting other adapters (including other EHX ones), and it draws a relatively hefty 180mA, so it needs real budget on a shared power supply.
- The eight sliders are highly interactive in combination (e.g., Attack + high Detune + filtered upper octaves can produce a very different texture than any slider suggests alone) — a POG2 patch needs the full slider layout documented precisely, not summarized as "octave up" or "octave down."
- The onboard 8-preset memory is a hardware-level feature independent of any GP-5 patch data — if a board uses a POG2 with a saved preset, document which preset number the patch expects to be loaded, since the GP-5's own patch file has no way to recall it.

Sources: [POG2 — Electro-Harmonix](https://www.ehx.com/products/pog2/), [POG2 Manual — ehx.com](https://www.ehx.com/wp-content/uploads/2020/10/pog2-manual.pdf), [EHX POG2 — HornFX](https://www.horn-fx.com/ehx-pog-2), [Electro-Harmonix POG2 — Equipboard](https://equipboard.com/items/electro-harmonix-pog2-polyphonic-octave-generator-guitar-effects-pedal), [Electro-Harmonix Unveil POG3, The Most Powerful POG Ever — Electro-Harmonix](https://www.ehx.com/blog/electro-harmonix-unveil-pog3-the-most-powerful-pog-ever/)
