# Boss IR-2 Amp & Cabinet

Compact amp-and-cabinet-simulator pedal — 11 amp models each paired with curated Celestion Digital IR cabinet simulations, plus support for loading custom third-party IR files. Functions as a full amp-in-a-box (drive, EQ, cab) rather than a single-effect stompbox, and doubles as a USB audio interface.

## Controls
- **Type**: Selects one of 11 built-in amp emulations (spanning clean combos through high-gain stacks), each paired with its own matched cabinet IR
- **Gain**: Sets the amount of preamp drive/saturation for the selected amp model
- **Bass / Middle / Treble**: Standard 3-band EQ shaping the selected amp's tone stack
- **Level**: Overall output volume
- **Ambience**: Adds simulated room/space depth to the cabinet sound (early reflections/ambience, not a full reverb)

## Footswitches / Switches
- Single pedal switch: toggles between two stored, independently-configurable amp/cab presets (Channel A/B), letting a player switch tones (e.g. clean/lead) with one press
- CH SEL jack accepts an external footswitch for remote channel switching

## Notes for patch-building
- This pedal is a full AMP+CAB replacement, not a single-slot effect — when used, it should sit where an amp/cab block would in the chain (after drive/dirt pedals, before time-based effects run through its effects loop or after its output), not stacked with another amp sim in series.
- Has its own effects loop (Send/Return, with stereo-capable TRS return) for placing modulation/delay/reverb pedals between its preamp and cabinet stage, mirroring how a real amp's effects loop works.
- USB-C port loads custom cabinet IRs via Boss's IR Loader app and doubles as a class-compliant audio interface for direct recording — relevant for documenting a patch's exact IR choice the way this repo tracks `IRs/` captures.
- Because it replaces both AMP and CAB in one unit, treat a patch built around the IR-2 the same way this repo treats a NAM capture: it's an external front end substituting for the GP-5's own AMP/CAB modules, worth documenting by name/setting in the patch write-up since the pedal's own presets aren't visible in a GP-5 `.prst`.
