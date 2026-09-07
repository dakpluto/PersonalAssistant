# Walrus Audio Slö Multi Texture Reverb

Mono ambient/texture reverb from Walrus Audio built around three distinct reverb algorithms rather than a single decay type, plus a hold/sustain footswitch function for on-demand swells. Well regarded as a compact way to get several very different washy/ambient reverb characters — octave-layered, auto-swell, and vibrato-modulated pad — out of one pedal, without the size or cost of a full ambient reverb workstation. Walrus also sells a stereo sibling, the Slöer Stereo Ambient Reverb (5 modes, presets, added Stretch/X-fader controls) — confirm which of the two a patch actually wants, since they are different current products with different control sets, not simply mono/stereo versions of the identical circuit.

## Controls
- **Decay**: Length of the reverb tail — short and tight fully counterclockwise, long and drawn-out fully clockwise.
- **Filter**: Low-pass filter shaping the tone of the reverb decay — clockwise opens the filter for a brighter trail, counterclockwise closes it for a darker, more muted trail.
- **Mix**: Dry/wet blend — counterclockwise for more dry signal, clockwise for more reverb.
- **X**: Mode-dependent parameter (see Modes below) — its function changes entirely depending on which of the three algorithms is selected.

## Modes
- **Dark**: Adds a lower (-1) octave layer into the reverb trail for atmospheric depth. X sets the level of that octave-down signal fed into the reverb.
- **Rise**: Auto-swell reverb for cinematic volume-swell textures. X sets how long it takes the reverb to swell to full volume after a note is played.
- **Dream**: Lush reverb with a latching pad/sustain character. X sets the depth of a vibrato effect applied to the reverb trail.
- **Wave shapes (Sine/Warp/Sink)**: A secondary modulation-shape option accessed by holding the bypass footswitch while switching modes, altering the character of the modulation used within a given mode.

## Notes for patch-building
- Typical placement: reverb stage, last in the signal chain (after delay), standard ambient/wash reverb position.
- Buffered bypass, with a trails-mode toggle so the reverb tail can be preserved through a bypass switch (confirm current trails behavior against the physical unit/manual before assuming it's on by default).
- The Sustain footswitch (press-and-hold while engaged) ramps decay to maximum and back — useful for documenting a CTL-style momentary swell behavior distinct from the patch's baseline Decay setting, though the GP-5's own module set has no equivalent for this specific hold behavior, so treat it as a Slö-specific performance feature rather than something to replicate elsewhere.
- Because X's function is entirely mode-dependent, a patch write-up must record both the selected mode (Dark/Rise/Dream) and the X value together — X alone is meaningless without the mode.
- 9VDC power, 100mA minimum draw.

Sources: [Slö Multi Texture Reverb – Walrus Audio](https://www.walrusaudio.com/products/slo-multi-texture-reverb), [Product Review: Walrus Audio's Slö Multi Texture Reverb Pedal - Guitar Girl Magazine](https://guitargirlmag.com/reviews/gear-reviews/product-review-walrus-audios-slo-multi-texture-reverb-pedal/), [Walrus Audio elevates its Slö format to the Full Stereo Slöer — Guitar Pedal X](https://www.guitarpedalx.com/news/gpx-blog/walrus-audio-elevates-its-slo-format-to-the-full-stereo-sloer-multi-texture-reverb-with-5-algorithms-5-wave-shapes-and-3-onboard-presets)
