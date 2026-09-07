# Ibanez Tube Screamer TS808

The original Tube Screamer, first marketed by Ibanez in 1979 and built by Maxon; slower-selling than its TS9 successor at the time, but retroactively became the most mythologized overdrive pedal in guitar history largely through its association with Stevie Ray Vaughan (who in practice favored the brighter TS9/TS10 more often than folklore suggests, but still owned and used 808s). Ibanez keeps a faithful reissue of the TS808 in current production (Made in Japan), alongside the TS9 and a hand-wired TS808HW.

## Controls
- **Overdrive (Drive)**: Amount of gain/distortion added to the signal
- **Tone**: High-frequency contour — clockwise adds bite/brightness, counterclockwise mellows the top end
- **Level**: Output volume of the pedal

## Notes for patch-building
- Same three-knob layout and general "mid-forward, low-gain-to-medium-gain amp-pusher" character as the TS9 already on file (`Pedals/Other/Ibanez-Tube-Screamer-TS9.md`) — the distinction is in the clipping/output stage, not the control set.
- Versus the TS9: the TS808 reissue uses the original asymmetric silicon clipping-diode pair (vs. the TS9's symmetric pair), which research sources describe as producing slightly more even harmonics and a warmer, less aggressive/more "open" character than the TS9. The two also differ in an output-stage resistor pair often called the "brown mod" (TS808: 100Ω series / 10kΩ shunt; TS9/TS10: 470Ω series / 100kΩ shunt) that drives a following amp a bit harder on the 808. One source notes some current TS808 reissue runs have used "King of Tone"-style clipping diodes that make them louder and less compressed than earlier reissues — component specifics inside a given reissue run weren't independently confirmed beyond that mention, so treat exact diode identity as approximate rather than verified.
- Typical placement: same as the TS9 — first drive pedal in the chain (after any tuner/buffer), ahead of fuzz or higher-gain distortion; works as a clean-ish boost into an already-driven amp or as the sole overdrive at higher Drive settings.
- JRC4558D-based circuit, JFET-buffered bypass (not true bypass) per Ibanez's own product page and forum sources — signal passes through the buffer stage even when off.
- Mono in/out, standard 9V (single 9V battery or center-negative DC adapter), 8mA current draw, single footswitch on/off with LED. Made in Japan.

Sources: [Ibanez TS808 product page](https://www.ibanez.com/na/products/detail/ts808_99.html), [TS9 vs. TS808: what's the difference? — Telecaster Guitar Forum](https://www.tdpri.com/threads/ts9-vs-ts808-whats-the-difference.273322/), [Ibanez TS9 and TS808 Tube Screamers, Maxon OD9 — Analogman](https://www.analogman.com/ts9.htm), [Green Giant: History of the Tube Screamer — Premier Guitar](https://www.premierguitar.com/gear/tube-screamer-history)
