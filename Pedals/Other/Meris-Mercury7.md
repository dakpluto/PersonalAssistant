# Meris Mercury7

Meris's algorithmic DSP reverb pedal, designed by Angelo Mazzocco and explicitly inspired by the Lexicon 224 reverb sound of the 1982 Blade Runner soundtrack. Widely regarded as one of the premier high-end reverb pedals of its generation (frequently mentioned alongside the Strymon BigSky and Eventide Space), it pairs a fully analog dry/wet mix path with two dense algorithmic reverb engines capable of anything from realistic plate and cathedral spaces to slow-building, pitch-warped ambient drones. Meris has since released the MercuryX as a further-expanded flagship reverb; the Mercury7 remains in the current lineup as both a pedalboard unit and a 500-series rack module.

## Controls
Each knob has a primary function and a secondary "Alt" function accessed by holding the Algorithm Select button:
- **Space Decay**: Sets the reverb tail's decay/energy time. Alt: **Predelay** — time gap before the reverberation begins.
- **Mix**: Balances dry and wet signal in the analog domain. Alt: **Pitch Vector Mix** — balance between pitch-shifted reflections and normal (unshifted) reflections.
- **Modulate**: Sets overall modulation depth applied within the reverb tank. Alt: **Mod Speed** — the dominant modulation rate.
- **Lo Freq**: Shapes how low frequencies decay/behave in the reverb; higher settings extend low-frequency decay for a bigger, roomier impression. Alt: **Density** — controls the initial echo buildup density.
- **Pitch Vector**: Selects the pitch interval applied within the reverb tank — octave down, slight pitch up, slight pitch down, fifth up, or octave up. Alt: **Attack Time** — attack time of the swell envelope.
- **Hi Freq**: Shapes high-frequency absorption/decay in the reverb; lower settings shorten high-frequency life in the tank for a more natural room feel. Alt: **Vibrato Depth** — adds vibrato modulation to the reverb's input.

## Switches
- **Algorithm Select / Bypass**: Tap to toggle between the two onboard algorithms — **ULTRAPLATE** (lush plate reverb with a fast build) and **CATHEDRA** (massive, ethereal reverb with a slow build); hold to access each knob's Alt function.
- **Swell footswitch**: Engages an auto-swell function; holding it maximizes Space Decay/sustain for volume-swell-style pads.

## Jacks
- **Stereo in/out**: True stereo signal path.
- **Multi-function EXP jack**: Accepts an expression pedal, a tap-tempo switch, a preset-advance switch, or MIDI in/out via TRS (requires a separate MIDI-to-TRS conversion box).

## Notes for patch-building
- Typical placement: end of chain, in the RVB slot — this is a specialty/ambient reverb well beyond the GP-5's stock RVB algorithms, suited to a patch that wants a distinct "wash" character (shimmer/pitch-vector textures, long cathedral tails) rather than a subtle room/plate.
- Bypass is selectable in software/firmware between true bypass (relay) and analog buffered bypass — note which the target board needs, since it's a setting rather than fixed.
- Since patches can only document one algorithm/knob state at a time, decide ULTRAPLATE vs CATHEDRA and primary vs Alt knob layer explicitly before writing the patch, rather than leaving it as "reverb, cranked."
- Current draw is under 150 mA at 9V; check pedalboard power budget if paired with several other digital pedals.
- Exact analog/digital gain-staging behavior at the input/output headroom switch (guitar vs. line/synth level) wasn't fully detailed in available sources beyond its existence — confirm on-unit before dialing in extreme Record/Input gain settings.

Sources: [Mercury7 Reverb — Meris](https://meris.us/product/mercury7-reverb-2/), [Mercury7 Reverb (500 Series) — Meris](https://meris.us/product/mercury7-reverb/), [Meris Mercury7 — Sound on Sound](https://www.soundonsound.com/reviews/meris-mercury7-reverb-pedal), [Meris Mercury 7 Review — Premier Guitar](https://www.premierguitar.com/gear/meris-mercury-7-review)
