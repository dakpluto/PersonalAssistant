# MXR Bass Envelope Filter (M82)

Analog envelope filter (auto-wah) with a five-knob control set that shapes filter sweep, resonance, and sensitivity to pick/finger attack — not a treadle-controlled foot-wah, the sweep is entirely dynamic, driven by how hard the note is played. Widely used for funk/synth-bass textures, and marketed for bass but commonly pressed into service on guitar too.

Note on sourcing: the requested pedal name "MXR M306 Talon Envelope Filter" could not be verified — MXR's model M306 is actually the Poly Blue Octave (an octave/pitch pedal, unrelated to envelope filtering), and no current or past MXR product named "Talon" turned up in manufacturer, retailer, or review sources searched. The closest verified current MXR product matching the requested description (knob-settable envelope filter, explicitly not a foot-wah) is the M82 Bass Envelope Filter documented here; MXR also sells a cosmetic Blackout Series variant (M82B) of the same circuit.

## Controls
- **Dry**: Volume of the unaffected (dry) signal. Clockwise for more; spec'd range -∞ to +6dB.
- **FX**: Volume of the envelope-filtered (wet) signal. Clockwise for more; spec'd range -∞ to 0dB relative to filter gain.
- **Decay**: Sets the filter's decay stop frequency — clockwise raises it, counterclockwise lowers it, shaping where the sweep settles as a note decays. Spec'd 76Hz to 1.3kHz.
- **Q**: Intensity/resonance of the filter effect. Clockwise for more — sharper, more pronounced "quack"; counterclockwise for a smoother, less resonant sweep.
- **Sens. (Sensitivity)**: How strongly the filter responds to pick/finger attack. Clockwise increases sensitivity; manufacturer directions note adjusting this to compensate for differences in instrument output level (e.g., passive vs. active pickups).

## Notes for patch-building
- Typical placement: filter/dynamics stage, generally placed similarly to a wah — early-ish in the chain, often ahead of drive/distortion (for a vocal, filtered growl into gain) or after it (for a more synth-like, filtered-distortion texture); both are legitimate choices worth specifying.
- True hardwire bypass, mono in/out, standard 9V DC (2.1mm center-negative via Dunlop ECB003 or MXR Brick supply, or 9V battery), 6mA draw.
- Because it's fully analog and attack-driven (not a fixed LFO sweep like a standard auto-wah), Sens. and Q interact heavily with playing dynamics — a patch's "auto-wah" texture will vary with pick attack, so document Sens./Q/Decay as a starting point rather than a guarantee of an identical sweep on every note.
- Marketed and voiced for bass (filter sweep range and impedance are bass-appropriate), but frequently used on guitar for funk/synth textures — flag this if used outside its designed instrument.

Sources: [Jim Dunlop M82 Bass Envelope Filter product page](https://www.jimdunlop.com/mxr-bass-envelope-filter/), [Jim Dunlop M82 manual PDF](https://www.jimdunlop.com/content/manuals/M82.pdf), [MXR M82 Bass Envelope Filter Pedal Review — Premier Guitar](https://www.premierguitar.com/mxr-m82-bass-envelope-filter-pedal-review)
