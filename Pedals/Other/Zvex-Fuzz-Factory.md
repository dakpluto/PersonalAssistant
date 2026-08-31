# ZVex Fuzz Factory

Classic silicon fuzz from Z.Vex Effects (zvex.com), famous for an unusually deep and finicky 5-knob control set that ranges from tame vintage fuzz to gated sputter to full self-oscillating synth-like noise. Hand-painted (each unit unique) or Vexter silk-screened enclosure options; internals are identical between the two finishes.

## Controls
- **Volume**: Output level of the pedal
- **Gate**: Squelches noise after a note's sustain decays — turning clockwise eliminates squeals/hiss/buzz (stop just as they disappear to avoid choking the note itself); turning counterclockwise opens into the pedal's signature velcro-like gated chop, and can also be used to tune in an exact feedback pitch
- **Comp (Compression)**: Shapes attack character — rolled left adds a sharper attack; softens progressively moving right; near-max it suddenly pinches the tone into a squashed, compressed voice. Also usable to dial in a fat, sustained feedback fuzz
- **Drive**: Functions like gain on a normal fuzz when used conventionally — increases distortion and shifts feedback pitch/tonal thickness. Becomes largely inert/meaningless once Comp is turned all the way clockwise
- **Stab (Stability)**: Adjusts internal power-supply filtering rather than tone directly — counterclockwise starves the power supply, making the circuit unstable and eventually self-oscillating (synth-like tones, feedback); clockwise stabilizes normal operation. Manufacturer guidance: leave at or near maximum for conventional fuzz use, and only back it off deliberately for oscillation/noise effects

## Notes for patch-building
- The five controls are heavily interactive (especially Comp/Drive/Stab) rather than independent — small moves on one knob change what the others do, so a Fuzz Factory patch needs its exact 5-knob setting documented precisely rather than described qualitatively ("high gain" isn't enough to reproduce a specific texture).
- Two very different use cases live in the same pedal: a conventional (if unusually thick/gated) fuzz with Stab near max, or an unstable/self-oscillating noise-and-feedback generator with Stab rolled back — decide which mode a patch wants before dialing in the other four knobs.
- Typical placement: fuzz stage, early in the drive order like most fuzzes (wants the guitar's pickups fairly directly, ahead of buffers/wah).
- Very low standby current draw (Z.Vex's own testing cited a 3-year battery life in the original prototype); mono in/out, standard 9V center-negative power, single footswitch on/off with LED.
- Hand-painted units carry a lifetime warranty; the cheaper Vexter-series version is tonally identical with a silk-screened finish instead.

Sources: [Fuzz Factory — ZVEX Modular](https://zvexmodular.com/fuzz-factory/), [Z.Vex Fuzz Factory User Manual](https://manualmachine.com/zvex/fuzzfactory/19061016-user-manual/), [ZVex Fuzz Factory Settings guide — Tonestakr](https://tonestakr.com/gear/fuzz/zvex-fuzz-factory/settings/), [ZVEX Effects Fuzz Factory Demo & Review — Loopy Demos](https://loopydemos.com/demos/zvex-effects-fuzz-factory/)
