# Walrus Audio Mako Series MKII D1 High-Fidelity Delay

Stereo studio-grade delay from Walrus Audio's Mako Series, packing six distinct delay algorithms, deep MIDI/preset control, and a 2" OLED screen into one pedal. The MKII generation (current as of this writing) replaced the original D1's row of mini toggle switches with the OLED screen plus digital encoders, and added a sixth "Grain" algorithm on top of the original five — a meaningful interface and feature revision, not just a minor tweak, so specs here should not be assumed to match the original (non-MKII) D1.

## Controls
- **Time**: Delay time, roughly 60ms to 2000ms; manual Time setting overrides any tap-tempo or MIDI clock tempo when adjusted.
- **Repeats**: Feedback amount — minimum gives a single repeat, maximum approaches near-infinite repeats on the edge of self-oscillation.
- **Mix**: Dry/wet blend — unity gain sits roughly between 12 and 2 o'clock; fully clockwise is 100% wet (repeats only).
- **Left encoder**: Program-dependent secondary parameter — controls Depth, Rate, Shape, Age, Tone, or Spread depending on which of the six algorithms is active (function shown on the OLED screen).
- **Right encoder**: Controls BPM, Swell, or Tap Division depending on algorithm/context.
- **Prog (mode selector)**: Selects the active delay algorithm (see Modes below).

## Modes
- **Digital**: Clean, crystal-clear delay repeats — suited to rhythmic, articulate parts.
- **Mod**: Modulation LFOs applied to random individual repeats, producing unpredictable pitch-modulated/warped trails.
- **Vintage**: Analog tape-delay-inspired voicing with complex filtering that darkens/degrades repeats progressively, tape-echo style.
- **Dual**: Two independent delays (one per channel in stereo), each with its own tap division and feedback routing.
- **Reverse**: Delay memory is read backward for reversed-repeat textures, with options for always-reversed repeats or flipping direction.
- **Grain**: Granular-delay textures ranging from smooth to choppy/glitchy/flowy, depending on parameter settings — the algorithm added in the MKII revision.

## Switches
- **Tap tempo footswitch**: Sets delay time via tapping, or via MIDI clock; both footswitches pressed together cycle through onboard presets (3 quick-access presets, with up to 128 total accessible via banks/MIDI).
- **Bypass mode (True / Hybrid / Buffered)**: Selectable bypass behavior, including trails-preserving modes, set via the pedal's menu system rather than a physical toggle.

## Jacks
- **Stereo instrument in/out**: True stereo signal path.
- **MIDI**: For tap tempo/BPM sync, preset recall, and parameter control.
- **Expression**: Expression-pedal control over parameters (exact assignable-parameter list not fully itemized in research — confirm against the current manual before wiring an expression-controlled patch element).

## Notes for patch-building
- Typical placement: delay stage, standard position late in the chain after drive/modulation and ahead of reverb — its stereo I/O also makes it usable as a true stereo delay send if the target rig supports stereo.
- Power draw is comparatively high for a delay pedal (300mA minimum) — an isolated power supply is recommended; worth checking headroom on a crowded power supply.
- Because the Left/Right encoders are program-dependent (their function changes per algorithm), a patch write-up must record which algorithm (Prog) is selected alongside the encoder values — the same knob position means something different in Digital vs. Grain vs. Dual mode.
- The MKII's three bypass modes (True/Hybrid/Buffered) are menu-selected rather than a physical switch — document which bypass mode a patch assumes if trails-through-bypass behavior matters.
- This write-up covers the current MKII revision specifically; if a patch needs to reference the earlier (pre-MKII) toggle-switch D1, re-verify controls rather than assuming parity — that older unit used physical Mod/Tone/Age toggles instead of the OLED/encoder interface and only had five algorithms (no Grain).

Sources: [Mako Series MKII: D1 High-Fidelity Delay – Walrus Audio](https://www.walrusaudio.com/products/mako-series-mkii-d1-high-fidelity-delay), [Walrus Audio Mako Series MkII D1 review – the do-it-all high-fidelity delay pedal gets glitchy — Guitar.com](https://guitar.com/reviews/effects-pedal/the-big-review-walrus-audio-mako-series-mkii-d1/), [Walrus Audio overhauls Mako pedal line with new MkII series — Guitar World](https://www.guitarworld.com/news/walrus-audio-mako-series-mkii)
