# Chase Bliss Generation Loss MKII

Lo-fi tape-degradation/emulation processor, built on the lineage of Tom Majeski's Cooper FX Generation Loss (the pedal still carries a silhouette of Majeski's dog Cooper on the faceplate). Rather than a single "tape saturation" knob, it splits tape's various imperfections — wow, flutter, saturation, and outright malfunction — into independent controls, like a deconstructed VCR.

## Controls
- **Model**: 12-way rotary selector stepping through a library of tape-machine EQ/filter profiles (VCRs, cassette decks, camcorders, and other tape-era sources)
- **Wow**: Intensity of slow, wide pitch/amplitude drift
- **Flutter**: Intensity of fast, twitchy random modulation affecting both amplitude and pitch
- **Saturate**: Amount of magnetic saturation, as when a hot signal is recorded to tape
- **Failure**: Amount of tape malfunction artifacts — snags, drops, wrinkles, and other moments where the "tape" breaks down
- **Volume/Ramp**: Output level of the wet signal (noon = unity, full clockwise ≈ 2x boost); can also be used to ramp/ease between values

## Footswitches / Switches
- Primary footswitch: bypass, switchable between true bypass and DSP (buffered/tails) bypass
- Secondary footswitch: morphs between two saved EQ/model settings, for switching character mid-song
- 3-way toggle: sets the auxiliary footswitch's function
- 3-way toggle: sets dry-signal blend behavior
- 3-way toggle: noise-floor/hiss character
- 3-way toggle: selects between two presets and a manual (live-knob) mode
- Row of 16 DIP switches: extensive customization including stereo modes, filter-sweep behaviors, and a "Classic" mode that restores the original Generation Loss sound and unlocks its Freeze function

## Notes for patch-building
- A texture/character effect rather than a gain or amp/cab stage — place it wherever the goal is to make an otherwise clean or already-amped signal sound like it's been dubbed through an old tape deck (subtle: light wow/flutter/saturate on a whole mix chain; extreme: heavy Failure for glitch/breakdown moments).
- Works well either just after the amp/cab stage (coloring the whole tone like an old recording) or in the modulation/delay/reverb area of the chain (degrading only the ambience) — the "right" spot depends on whether the degradation should read as source character or as a wash effect.
- Two independent footswitches plus a morph function let it act as its own mini boost/character-changer, which can substitute for a CTL-style on/off toggle if only one extra footswitch is available on a board.
- Stereo-capable via dip switches; true or DSP bypass selectable. Full parameter set (all six knobs plus dip-switch states) is MIDI/CV/expression controllable and supports internal modulation/ramping — deeper automation than the physical knobs alone suggest.
