# AMPEG SVT-CL BASS HEAD — deathblossomaudio

- **Source:** https://www.tone3000.com/tones/ampeg-svt-cl-bass-head-45809
- **Creator:** @deathblossomaudio (same creator as the Rectifier pack)
- **Type:** NAM, **preamp only**. The creator says: "This is a preamp-only capture — no cabinet IR is included, giving you complete freedom to pair with your preferred bass cab IRs or power amp simulations." The tags list both "preamp-capture" and "poweramp-capture", but the description is explicit. **See the caution below.**
- **Amp:** Ampeg SVT-CL (the all-tube SVT Classic, 300W, 6550 power tubes). Several files add a SansAmp and a Darkglass pedal in front: the creator mentions "mixed with some Sansamp and Darkglass for good measure!" and the files are named "SANS" and "DARKGLASS". The exact pedal models aren't given; "SANS" is most likely a Tech 21 SansAmp Bass Driver DI (my inference).
- **Signal chain:** Countryman 85 reamp box, 1000 epochs. No knob settings, load or calibration listed.
- **Creator's note:** the Tone3000 preview player doesn't represent these accurately; use the NAM plugin with a good IR "at the correct input gain."
- **License:** T3K (free to use and publish recordings; no redistributing the files).
- **Tags (selection):** all-tube, clean bass, driven bass, gritty, punchy, rock, metal, punk, doom/stoner, thick low end
- **Popularity:** 13,885 downloads, 551 likes (scraped 2026-09-25). Published 2025-12-06.
- **Versions:** each file comes in Tone3000's A1 and A2 architectures (12 each, 24 total). No Complex variants.

## Caution: preamp only

Same issue as the Rectifier pack: the capture stops before the power amp. A big part of an SVT's sound is its power section (six 6550s): the low-end weight, compression and growl when pushed. A NAM + IR snaptone has no room for a power amp sim, because the N->S block replaces the GP-5's AMP and CAB. It matters a bit less on bass than on guitar, since plenty of classic SVT tone is recorded from the preamp's DI out anyway, and the clean files should hold up fine. The driven files will likely sound thinner than a real cranked SVT. Try it in the snaptone builder, and prefer a full (amp-only) SVT capture if one turns up, given how many songs depend on this slot.

## Naming scheme

Descriptive names only, no knob settings. Grouped below by what's in front of the SVT, then by NAM gain (0-1, how driven) from each file's metadata via `t3k_scrape.py --meta`. Loudness is in dB. The SVT-only files all sit within about 0.5 dB of each other, so they're level-matched.

## Models (12)

ESR = training error, lower = closer to the real amp (under ~0.01 is excellent). Eleven are excellent; `SVT DARKGLASS SHREDED` failed training (ESR 0.45 / 0.51) and shouldn't be used.

| File | Chain | NAM gain | Loudness | Tone | ESR A2-Full | ESR A2-Lite | Slot |
|---|---|---|---|---|---|---|---|
| `SVT CLEAN` | SVT alone | 0.43 | -13.3 | Clean SVT, the classic baseline | 0.0006 | 0.0046 | |
| `SVT DIRTY` | SVT alone | 0.50 | -13.0 | Dirty SVT (lower NAM gain than PUSHED, but named dirtier) | 0.0014 | 0.0098 | |
| `SVT CLEAN PUSHED` | SVT alone | 0.58 | -12.8 | Clean, harder-driven front end, starting to growl | 0.0008 | 0.0066 | |
| `SVT PUSHED` | SVT alone | 0.59 | -12.8 | Pushed SVT growl | 0.0009 | 0.0054 | |
| `SVT DIRTY PUSHED` | SVT alone | 0.64 | -12.7 | Dirty and pushed, the most driven SVT-only file | 0.0018 | 0.0089 | |
| `SVT SANS HYPE MY D.I` | SansAmp, likely the DI side of a blend (inferred) | 0.31 | -20.1 | Much quieter and lighter; likely meant to blend with an amp, not stand alone | 0.0007 | 0.0064 | |
| `SVT SANS SUBDRIVE` | SansAmp in front (inferred) | 0.54 | -13.5 | Drive with extra low end | 0.0009 | 0.0077 | |
| `SVT SANS ROCK DRIVE` | SansAmp in front (inferred) | 0.62 | -13.1 | Rock drive | 0.0009 | 0.0073 | |
| `SVT SANS BRIGHT DRIVE` | SansAmp in front (inferred) | 0.72 | -12.9 | Brighter drive with more top-end bite | 0.0012 | 0.0144 | |
| `SVT SANS HAIRY DRIVE` | SansAmp in front (inferred) | 0.75 | -13.0 | Most driven file in the pack | 0.0011 | 0.0077 | |
| `SVT DARKGLASS SHRED MY D.I` | Darkglass, likely the DI side of a blend (inferred) | 0.16 | -17.0 | Quiet, lowest NAM gain in the pack; same likely DI-blend role | 0.001 | 0.0066 | |
| `SVT DARKGLASS SHREDED` | Darkglass in front (inferred) | 0.48 | -23.5 | **Failed capture: skip.** ESR 0.45 means the model doesn't match the source | 0.4521 | 0.5118 | |

Tone is my read from the names and metadata, not the creator's.

## Pairing notes

- **IR:** an Ampeg SVT-810E 8x10 is the classic match, and **Apg810 (User IR 3)** is already loaded on the GP-5. For the worship songs' 4x10 sound, the Apg115410 (User IR 2, B-15 + 4x10 summed) is the closest you have.
- **Covers:** the SVT slot on the priority list, the #1 bass amp at 45 songs (the rock, alt, metal, prog and modern worship parts). Most of those want SVT CLEAN or SVT CLEAN PUSHED. SVT PUSHED or DIRTY suit Everlong, Man in the Box, Comedown and similar gritty parts. The SANS files cover the drive tones the old Darkglass NAMs used to handle (Higher, Knights of Cydonia, Metropolis).
- **Priority:** despite the preamp-only caveat, this is the best SVT candidate so far and fills the most important slot. Worth testing early.
