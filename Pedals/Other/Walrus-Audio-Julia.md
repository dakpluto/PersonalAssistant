# Walrus Audio Julia (V2) Analog Chorus/Vibrato

All-analog chorus/vibrato pedal from Walrus Audio, built around a bucket-brigade (BBD) delay line modulated by an LFO. Distinguishes itself from a standard chorus with a Lag control that shifts the LFO's center delay time, and a continuously-variable Dry-Chorus-Vibrato blend rather than a fixed mode switch — meaning it can move seamlessly from a subtle chorus shimmer through equal-blend chorus/vibrato to a full 100%-wet vibrato warble from one knob.

## Controls
- **Rate**: Sets LFO modulation speed — from little to no perceptible movement at low settings up to fast, pronounced wobble at maximum.
- **Depth**: Sets the amplitude of the LFO sweep — how far the modulation swings, i.e. modulation intensity.
- **Lag**: Sets the center delay time that the LFO modulates around, adding a dimension beyond a standard chorus/vibrato — smooth, tight modulation at low settings, moving toward a more pronounced/detuned warble at maximum. Guitar Chalk's own guidance is to experiment subtly here to preserve musicality.
- **D-C-V (Dry-Chorus-Vibrato) Blend**: Continuously blends dry signal against the modulated (wet) signal — fully counterclockwise is 100% dry, noon gives an even dry/wet mix (traditional chorus voicing), and fully clockwise is 100% wet (traditional vibrato voicing).

## Switches
- **Wave (Sine/Triangle)**: Selects the LFO waveform shape. Sine produces a rounder, smoother sweep generally favored for vibrato; Triangle produces sharper transitions generally favored for chorus.

## Notes for patch-building
- Typical placement: modulation stage, standard chorus/vibrato position in the chain — after drive/gain stages, ahead of delay/reverb; front of the amp rather than in an effects loop is the pedal's typical intended use.
- Bypass is described by Walrus Audio as a "soft-switch" true bypass — silent switching behavior with a true-bypass signal path when off.
- Because D-C-V is continuously variable rather than a chorus/vibrato toggle, a patch can land anywhere on that spectrum — document the exact D-C-V position rather than just labeling the patch "chorus" or "vibrato."
- Power: 9VDC center-negative, minimum 100mA current draw (higher than many analog pedals — worth checking power supply headroom on a crowded board). Top-mounted jacks; no confirmed CV/expression input in research (appears to be a standard mono in/out analog pedal with no external control jacks).
- Sources referenced the "V2" revision specifically — if a future patch calls for the original (non-V2) Julia or the stereo Julianna variant, re-verify control names/ranges rather than assuming they're identical.

Sources: [Julia Analog Chorus/Vibrato V2 – Walrus Audio](https://www.walrusaudio.com/products/julia-analog-chorus-vibrato-v2), [Walrus Audio Julia V2 Analog Chorus/Vibrato Pedal Settings - Guitar Chalk](https://www.guitarchalk.com/walrus-audio-julia-v2-analog-chorus-vibrato-settings/)
