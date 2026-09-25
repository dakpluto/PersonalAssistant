# Fender Twin Reverb - Breakup — timr

- **Source:** https://www.tone3000.com/tones/fender-twin-reverb-breakup-1733
- **Creator:** @timr (Tim Robertson / Robertson Audio)
- **Type:** NAM, **amp only** (Tone3000 marks it as a head capture, no cab). Always pair with an IR when building the snaptone.
- **Amp:** Fender Twin Reverb. The creator doesn't say which era (blackface, silverface or reissue). The only tag hinting at age is "2010s", which may just describe the tone, so treat the era as unknown.
- **What's captured:** the creator's words: "a continuation of the very same Fender Twin Reverb I have already modeled but now with various pushed gain settings. 4-8. Bright mode channel 1." So it's one channel with the Bright switch on, with the channel volume at 4 through 8. On a Twin the volume knob is the gain, so this is the Twin pushed out of its famous headroom into breakup.
- **Unknowns:** no signal chain, load or calibration listed. A commenter asked whether pedals were used to push the gain and got no reply on the page.
- **License:** T3K (free to use and publish recordings; no redistributing the files).
- **Tags:** 2010s, blues, breakup, guitar, valve
- **Popularity:** 8,001 downloads, 228 likes (scraped 2026-09-25). Published 2023-04-23.
- **Versions:** each file comes in Tone3000's A1 and A2 architectures (7 each, 14 total). No xStandard/Complex variants.

## Naming scheme

No consistent scheme:
- `Ch1 BR Gxx`: Channel 1, Bright on, volume (gain) xx out of 10. "Channel 1" on a Twin is most likely the Normal channel, since the front panel reads Normal then Vibrato, but the creator doesn't say.
- `TwinVerb Norm Bright` / `TwinVerb Vibrato Bright`: Normal and Vibrato channels, Bright on, volume not given. Their NAM gain of 0.01 confirms both are fully clean, most likely the clean Twin from the creator's earlier pack, included here (the reuse is my inference, not stated).

## Models (7)

ESR = training error, lower = closer to the real amp (under ~0.01 is excellent). All seven are excellent.

| File | Channel | Bright | Volume | NAM gain | Loudness | Tone | ESR A2-Full | ESR A2-Lite | Slot |
|---|---|---|---|---|---|---|---|---|---|
| `Tim R Fender TwinVerb Norm Bright` | Normal | On | not stated | 0.01 | -21.0 | Classic glassy Twin clean | 0.0003 | 0.0014 | |
| `Tim R Fender TwinVerb Vibrato Bright` | Vibrato | On | not stated | 0.01 | -21.4 | Twin clean, Vibrato channel voicing (captured without the tremolo running, presumably) | 0.0004 | 0.0008 | |
| `Tim R Fender Twin Reverb Ch1 BR G04` | Ch 1 (likely Normal) | On | 4 | 0.61 | -19.0 | Already real breakup, about as driven as G05-G07 | 0.0038 | 0.0193 | |
| `Tim R Fender Twin Reverb Ch1 BR G05` | Ch 1 (likely Normal) | On | 5 | 0.59 | -19.2 | Breakup, slightly the lightest of the five | 0.0045 | 0.0153 | |
| `Tim R Fender Twin Reverb Ch1 BR G06` | Ch 1 (likely Normal) | On | 6 | 0.65 | -19.4 | Breakup | 0.0058 | 0.0168 | |
| `Tim R Fender Twin Reverb Ch1 BR G07` | Ch 1 (likely Normal) | On | 7 | 0.66 | -19.3 | Breakup / light crunch | 0.0054 | 0.0219 | |
| `Tim R Fender Twin Reverb Ch1 BR G08` | Ch 1 (likely Normal) | On | 8 | 0.74 | -19.8 | Most driven file in the pack; Twin crunch | 0.0061 | 0.0228 | |

NAM gain (0-1, how driven) and loudness (dB) come from each file's own metadata via `t3k_scrape.py --meta`. The Tone column is my read from those numbers, not the creator's. The gain barely moves from volume 4 to 7 and doesn't rise steadily (G04 reads above G05), which fits a Twin that breaks up early once it's pushed. It could also mean the gain was driven by something besides the volume knob, which is what the unanswered commenter asked about.

## Pairing notes

- **IR:** a Twin 2x12 with JBL D120F or Jensen C12K speakers. The Origin Effects "American Twin" IR (1965 Twin, JBL D120F) in `IRs/ir.md` is a direct match.
- **Covers:** the Fender Twin slot on the priority list, which is the #2 guitar amp at 9 songs (I Will Always Love You, Kiss Me, Papa Was a Rollin' Stone, Surfin' U.S.A., Spider-Man '67, Bright Size Life, and the acoustic stand-ins). The two clean files do most of that work; G04-G08 are all real breakup (NAM gain 0.59-0.74), which adds Twin breakup that the GP-5's Dark Twin model doesn't really reach.
- **Also by timr:** the same amp's spring reverb as IRs (`fender-twin-spring-reverb-1730`, `fender-twin-stereo-spring-reverb-1732`). These are reverb IRs, not cab IRs, so they'd take the cab's place in a snaptone. The GP-5's own RVB module is the better way to get spring reverb, so they're not worth tracking.
