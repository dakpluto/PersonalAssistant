# Ampeg B-18N Portaflex Fliptop — tone3000

- **Source:** https://www.tone3000.com/tones/ampeg-b-18n-portaflex-fliptop-43868
- **Creator:** @tone3000 (the site's own official capture account)
- **Type:** NAM, **amp only**. Includes the full amp, power section and all, captured into a Suhr Reactive Load Box with no cab/mic. Always pair with an IR when building the snaptone.
- **Amp:** 1964 Ampeg B-18N Portaflex. The creator calls it the "big brother" of the B-15N: the same B-15 preamp circuit, but 50W instead of about 25-30W, originally paired with an 18" speaker. It has the same warm, round low end and midrange compression as the B-15, with more headroom.
- **What's captured:** the Bass channel at three volume settings, from clean to driven.
- **License:** T3K (free to use and publish recordings; no redistributing the files).
- **Tags:** 1960s, bass, drive, dub, rock, tube, vintage, warm
- **Popularity:** 2,372 downloads, 114 likes (scraped 2026-09-25). Published 2025-11-18.
- **Versions:** each file comes in Tone3000's A1 and A2 architectures (3 each, 6 total). No Complex variants.

## Naming scheme

`Ampeg B18 - Head DI - Bass Chan - Vol <x>`: "Head DI" = captured straight from the head into the load box; the Bass channel; volume 2.5 / 5 / 7.5 out of 10. On a Portaflex the channel volume is the gain.

## Models (3)

ESR = training error, lower = closer to the real amp (under ~0.01 is excellent). All three are excellent. NAM gain (0-1, how driven) and loudness (dB) come from each file's metadata via `t3k_scrape.py --meta`.

| File | Channel | Volume | NAM gain | Loudness | Tone | ESR A2-Full | ESR A2-Lite | Slot |
|---|---|---|---|---|---|---|---|---|
| `Ampeg B18 - Head DI - Bass Chan - Vol 2.5` | Bass | 2.5 | 0.00 | -21.4 | Fully clean; classic warm Portaflex | 0.0014 | 0.0029 | |
| `Ampeg B18 - Head DI - Bass Chan - Vol 5` | Bass | 5 | 0.09 | -19.7 | Still essentially clean, a touch fuller/compressed | 0.0021 | 0.0065 | |
| `Ampeg B18 - Head DI - Bass Chan - Vol 7.5` | Bass | 7.5 | 0.54 | -19.1 | Real tube drive and growl | 0.0078 | 0.0211 | |

Tone is my read from the settings and metadata, not the creator's.

## Pairing notes

- **IR:** a vintage 15" or 18" cab, per the creator. **Apg115 (User IR 1, Ampeg B-15 1x15)** is already loaded on the GP-5 and is the natural match; the original B-18 used a 1x18, which nothing in `IRs/ir.md` covers.
- **Covers:** the B-15 slot on the priority list, the #2 bass amp at 37 songs (Nashville country, Motown/soul, 60s-70s studio records). It's a B-18 rather than a B-15, but the preamp circuit is the same, so it's a close fit. Vol 2.5 or Vol 5 covers nearly all of those songs; Vol 7.5 suits the grittier ones (Low Rider, Proud Mary, Heaven).
- **Priority:** a strong pick. It's a full amp capture rather than preamp only, all three files are accurate, and it pairs with an IR that's already loaded.
