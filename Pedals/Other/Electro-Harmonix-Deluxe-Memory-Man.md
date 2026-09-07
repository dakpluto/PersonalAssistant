# Electro-Harmonix Deluxe Memory Man

Analog bucket-brigade delay with built-in chorus/vibrato, one of the most iconic delay pedals ever made. First released in 1980 as the deluxe iteration of EHX's original 1976 Memory Man, it's known for a warm, dark, slightly degrading repeat character (true BBD analog delay, not digital) layered with lush modulation — the sound behind David Gilmour's and The Edge's most famous delay tones. EHX's current-production full-size unit (SKU MEMXO, sold simply as "Deluxe Memory Man") continues the same core circuit and control set as the classic version; this write-up covers that current model, not the discontinued tap-tempo 550-TT/1100-TT variants or the smaller Nano Deluxe Memory Man.

## Controls

- **Level**: Preamp/input gain stage ahead of the delay circuit, with an overload LED that lights when the input is driven too hot — adds warmth and can push the BBD chips into mild analog saturation when set hot.
- **Blend**: Mixes dry and delayed signal; centered gives roughly equal parts dry/wet, per EHX's own description.
- **Feedback**: Sets the number/decay of repeats — higher settings produce more repeats that decay more slowly, and can be pushed toward self-oscillation as on most analog BBD delays.
- **Delay (Time)**: Sets the time between the dry signal and the first repeat (and the spacing between subsequent repeats). Up to 550ms maximum delay time.
- **Chorus/Vibrato**: A modulation-depth-style control that introduces pitch modulation into the delay line itself — slow settings sit in chorus territory, faster settings move into vibrato; works together with the Chorus/Vibrato mode selection to shape the modulation character.

## Switches

- **Chorus/Vibrato mode select**: Chooses between the two internal modulation voicings — Chorus applies slower, subtler pitch modulation for shimmer/thickening; Vibrato applies faster, more pronounced pitch modulation. (Sources describe this as a selectable mode paired with the Chorus/Vibrato depth control; whether it's implemented as a toggle switch or a knob position wasn't confirmed in research — treat the control as "modulation depth + mode" rather than assuming a specific physical form.)

## Jacks

- **Direct Out**: A second, unmodified (dry) output alongside the main 1/4" output — useful for splitting a dry signal to a second amp or DI while the main output carries the wet delay/chorus signal.

## Notes for patch-building

- Typical placement: time-based effects stage, late in the chain (after drive/amp-sim stages, alongside or ahead of reverb) — standard delay placement.
- True bypass, mono in/out plus the Direct Out jack; ships with a 24VDC-100mA power adapter (note: not a standard 9V pedal — check current draw/voltage against the target power supply before adding to a board).
- The Level (input gain) control interacts with tone/saturation, not just headroom — driving it hot adds analog grit to the repeats themselves, which is part of the pedal's classic character and worth documenting explicitly in a patch rather than leaving at a generic "unity" setting.
- Chorus/Vibrato and Feedback/Delay Time are somewhat interactive in classic BBD delay fashion (modulating delay time while feedback is high creates pitch-wobbling repeats) — for reproducible patches, document exact knob settings rather than qualitative descriptions.
- The current full-size "Deluxe Memory Man" (MEMXO) is the standard-issue current-production model; EHX also currently sells a smaller "Nano Deluxe Memory Man" with separate Rate/Depth knobs — if a patch specifically wants the compact version's slightly different modulation control layout, that's a different pedal from the one documented here.

Sources: [Deluxe Memory Man — Electro-Harmonix](https://www.ehx.com/products/deluxe-memory-man/), [Deluxe Memory Man XO — shop.ehx.com](https://shop.ehx.com/item/memxo/), [Electro-Harmonix Deluxe Memory Man MEMXO — World Music Supply](https://worldmusicsupply.com/product/eh-memxo/), [Electro-Harmonix Deluxe Memory Man — Zozo Music](https://www.zozomusic.com/electro-harmonix-ehx-deluxe-memory-man-analog-delay-chorus-vibrato-effects-pedal/), [Thanks for the Memories, Man: Evolution of the Legendary Analog Delay — Reverb News](https://reverb.com/news/thanks-for-the-memories-man-evolution-of-the-legendary-analog-delay)
