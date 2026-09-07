# Electro-Harmonix Freeze

Infinite sustain/sound-retainer pedal: hold the momentary footswitch and it captures whatever's ringing at that instant and sustains it indefinitely — an "audio freeze" rather than a conventional sustain or compressor effect. Widely used for instant ambient pads, drone layers under lead lines, and glitchy stutter/reverse-adjacent textures; a specialty tool rather than an everyday-signal-chain pedal.

## Controls

- **Effect (Level)**: Sets the volume of the frozen/sustained sound layered on top of the always-present dry signal — the dry tone continues to pass through normally underneath the frozen layer, so this control balances the two.

## Switches

- **Mode select (Fast / Slow / Latch)**: **Fast** freezes the instant the footswitch is pressed and cuts the frozen sound off abruptly the instant it's released. **Slow** fades the frozen sound in and out gradually for smoother, swell-like transitions. **Latch** freezes on a press and holds indefinitely without needing the switch held down — press again to release — useful for organ-like sustained pads while both hands stay free to keep playing.

## Jacks

- **Input**: Standard 1/4" instrument input.
- **Dry Out / Freeze Out**: Two separate 1/4" outputs — one carries the unaffected dry signal, the other carries the frozen/sustained signal — letting the two be routed and blended independently (e.g., to separate amps or a mixer) rather than only summed internally.

## Notes for patch-building

- Typical placement: usually placed after drive/amp stages (freezing the already-shaped tone) though it can also go earlier to freeze a cleaner signal and drive/modulate the frozen layer separately downstream — placement changes the character of the frozen texture significantly, so document it explicitly.
- Bypass is buffered, not true bypass — an exception to EHX's usual true-bypass default, worth flagging since it sits in a chain differently than most of the pedals in this library.
- Cannot be reliably run on a 9V battery (draws too much current for practical battery life) — needs a 9V DC center-negative adapter; confirm the target power supply can feed it before including it in a board plan.
- This is fundamentally a performance/texture tool rather than a passive signal-shaping effect — a GP-5-style patch using it would need to document the CTL/footswitch behavior carefully (Fast vs. Slow vs. Latch materially changes how it's played, not just how it sounds).

Sources: [Freeze — Electro-Harmonix](https://www.ehx.com/products/freeze/), [Freeze instructions — Electro-Harmonix](https://ehx.com/products/freeze/instructions), [Electro-Harmonix Freeze Pedal Review — Guitar Space](https://guitarspace.org/sound-pedals/electro-harmonix-freeze-pedal-review/), [The Simple Beauty and Bold Possibilities of the EHX Freeze — Premier Guitar](https://www.premierguitar.com/pro-advice/the-good-stuff/the-beauty-of-the-ehx-freeze)
