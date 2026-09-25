# Marshall JCM 800 2203 — arthm (captured by Alexander Ribakov)

- **Source:** https://www.tone3000.com/tones/marshall-jcm-800-2203-1071
- **Uploader:** @arthm. Not the creator: the uploader says the captures were made by Alexander Ribakov and first shared in a Facebook group.
- **Type:** NAM, **amp only**, captured through an AZG loadbox with no cab/mic. Always pair with an IR when building the snaptone.
- **Amp:** Marshall JCM800 2203 (100W, single-channel master-volume head). The page's gear tag reads "Marshall JCM 800 2203 2008", which suggests the unit is a 2000s reissue rather than an original 80s head, but the description doesn't say.
- **What's captured:** "Flat" EQ, meaning Presence/Bass/Middle/Treble all at 5, across the full Gain range (1-10) at three Master Volume settings (5, 6, 7). 700 epochs.
- **License:** T3K (free to use and publish recordings; no redistributing the files).
- **Tags:** 1980s, breakup, crunch, distortion, punk, rock
- **Popularity:** 58,658 downloads, 1,340 likes (scraped 2026-09-25), the most popular pack so far. Published 2023-04-11.
- **Versions:** each file comes in Tone3000's A1 and A2 architectures (30 A1, 31 A2; the extra A2 file isn't listed on the page). No Complex variants.

## Naming scheme

`JCM800 2203 - P<presence> B<bass> M<middle> T<treble> MV<master> G<gain> - AZG - 700`: all knobs 0-10, AZG = the loadbox, 700 = epochs.
- **Gain** (preamp volume) is the main drive control: 1-2 is edge of breakup, 3-5 crunch, 6-8 hard rock, 9-10 full saturation.
- **Master Volume** adds power-amp push and feel at the same gain. MV7 files come out quieter (the loudness figures run lower) and are more compressed than MV5.

## Models (30)

ESR = training error, lower = closer to the real amp (under ~0.01 is excellent). All 30 are excellent. NAM gain (0-1) and loudness (dB) come from each file's metadata via `t3k_scrape.py --meta`. The gain estimate separates the clean end (G1 about 0.48, G2 about 0.72) but flattens at about 0.8 from G3 up, so for G3-G10 the Tone column goes by knob position rather than by that number.

| File | MV | Gain | NAM gain | Loudness | Tone | ESR A2-Full | ESR A2-Lite | Slot |
|---|---|---|---|---|---|---|---|---|
| `JCM800 2203 - P5 B5 M5 T5 MV5 G1 - AZG - 700` | 5 | 1 | 0.48 | -7.4 | Loud clean / edge of breakup | 0.0007 | 0.0035 | |
| `JCM800 2203 - P5 B5 M5 T5 MV5 G2 - AZG - 700` | 5 | 2 | 0.71 | -8.0 | Edge of breakup, cleans up with guitar volume | 0.0007 | 0.0038 | |
| `JCM800 2203 - P5 B5 M5 T5 MV5 G3 - AZG - 700` | 5 | 3 | 0.80 | -9.4 | Light crunch | 0.0007 | 0.0034 | |
| `JCM800 2203 - P5 B5 M5 T5 MV5 G4 - AZG - 700` | 5 | 4 | 0.82 | -9.3 | Classic crunch (AC/DC-style rhythm) | 0.0007 | 0.0044 | |
| `JCM800 2203 - P5 B5 M5 T5 MV5 G5 - AZG - 700` | 5 | 5 | 0.80 | -9.4 | Classic crunch, fuller | 0.0007 | 0.0031 | |
| `JCM800 2203 - P5 B5 M5 T5 MV5 G6 - AZG - 700` | 5 | 6 | 0.81 | -9.7 | Hard-rock rhythm | 0.0008 | 0.0028 | |
| `JCM800 2203 - P5 B5 M5 T5 MV5 G7 - AZG - 700` | 5 | 7 | 0.79 | -9.8 | Hot rock rhythm | 0.001 | 0.0041 | |
| `JCM800 2203 - P5 B5 M5 T5 MV5 G8 - AZG - 700` | 5 | 8 | 0.77 | -9.9 | Hot rock / lead | 0.0011 | 0.0065 | |
| `JCM800 2203 - P5 B5 M5 T5 MV5 G9 - AZG - 700` | 5 | 9 | 0.78 | -10.7 | Near-full saturation | 0.0014 | 0.006 | |
| `JCM800 2203 - P5 B5 M5 T5 MV5 G10 - AZG - 700` | 5 | 10 | 0.77 | -10.6 | Full gain, classic 80s lead | 0.0014 | 0.0055 | |
| `JCM800 2203 - P5 B5 M5 T5 MV6 G1 - AZG - 700` | 6 | 1 | 0.48 | -7.8 | Loud clean / edge of breakup | 0.0006 | 0.0027 | |
| `JCM800 2203 - P5 B5 M5 T5 MV6 G2 - AZG - 700` | 6 | 2 | 0.74 | -9.3 | Edge of breakup, cleans up with guitar volume | 0.0007 | 0.0035 | |
| `JCM800 2203 - P5 B5 M5 T5 MV6 G3 - AZG - 700` | 6 | 3 | 0.81 | -9.4 | Light crunch | 0.0008 | 0.0029 | |
| `JCM800 2203 - P5 B5 M5 T5 MV6 G4 - AZG - 700` | 6 | 4 | 0.81 | -9.0 | Classic crunch (AC/DC-style rhythm) | 0.0008 | 0.0041 | |
| `JCM800 2203 - P5 B5 M5 T5 MV6 G5 - AZG - 700` | 6 | 5 | 0.81 | -9.6 | Classic crunch, fuller | 0.0009 | 0.0035 | |
| `JCM800 2203 - P5 B5 M5 T5 MV6 G6 - AZG - 700` | 6 | 6 | 0.81 | -9.4 | Hard-rock rhythm | 0.0009 | 0.0046 | |
| `JCM800 2203 - P5 B5 M5 T5 MV6 G7 - AZG - 700` | 6 | 7 | 0.79 | -10.2 | Hot rock rhythm | 0.0011 | 0.0063 | |
| `JCM800 2203 - P5 B5 M5 T5 MV6 G8 - AZG - 700` | 6 | 8 | 0.80 | -11.1 | Hot rock / lead | 0.0014 | 0.0058 | |
| `JCM800 2203 - P5 B5 M5 T5 MV6 G9 - AZG - 700` | 6 | 9 | 0.77 | -10.9 | Near-full saturation | 0.0016 | 0.007 | |
| `JCM800 2203 - P5 B5 M5 T5 MV6 G10 - AZG - 700` | 6 | 10 | 0.77 | -10.9 | Full gain, classic 80s lead | 0.0018 | 0.0067 | |
| `JCM800 2203 - P5 B5 M5 T5 MV7 G1 - AZG - 700` | 7 | 1 | 0.68 | -9.4 | Loud clean / edge of breakup | 0.0008 | 0.0043 | |
| `JCM800 2203 - P5 B5 M5 T5 MV7 G2 - AZG - 700` | 7 | 2 | 0.77 | -10.0 | Edge of breakup, cleans up with guitar volume | 0.0012 | 0.0064 | |
| `JCM800 2203 - P5 B5 M5 T5 MV7 G3 - AZG - 700` | 7 | 3 | 0.79 | -12.1 | Light crunch | 0.0016 | 0.012 | |
| `JCM800 2203 - P5 B5 M5 T5 MV7 G4 - AZG - 700` | 7 | 4 | 0.80 | -11.5 | Classic crunch (AC/DC-style rhythm) | 0.0018 | 0.0072 | |
| `JCM800 2203 - P5 B5 M5 T5 MV7 G5 - AZG - 700` | 7 | 5 | 0.80 | -11.5 | Classic crunch, fuller | 0.0018 | 0.0074 | |
| `JCM800 2203 - P5 B5 M5 T5 MV7 G6 - AZG - 700` | 7 | 6 | 0.80 | -12.1 | Hard-rock rhythm | 0.002 | 0.0084 | |
| `JCM800 2203 - P5 B5 M5 T5 MV7 G7 - AZG - 700` | 7 | 7 | 0.80 | -12.3 | Hot rock rhythm | 0.0025 | 0.0086 | |
| `JCM800 2203 - P5 B5 M5 T5 MV7 G8 - AZG - 700` | 7 | 8 | 0.81 | -12.0 | Hot rock / lead | 0.0027 | 0.0115 | |
| `JCM800 2203 - P5 B5 M5 T5 MV7 G9 - AZG - 700` | 7 | 9 | 0.80 | -12.3 | Near-full saturation | 0.0031 | 0.0146 | |
| `JCM800 2203 - P5 B5 M5 T5 MV7 G10 - AZG - 700` | 7 | 10 | 0.80 | -12.1 | Full gain, classic 80s lead | 0.0031 | 0.0124 | |

Tone is my read from the knob positions, not the creator's.

## Pairing notes

- **IR:** a Marshall 1960A 4x12 with Celestion G12T-75s (the stock JCM800-era cab). Nothing in `IRs/ir.md` matches exactly yet. The closest documented option is the Origin Effects "British Straight" 4x12 (Marshall 1960B, G12H 55Hz), which the file already suggests for UK 800. For a darker or more modern take, the V30112 (User IR 10) or the Origin "Modern Boutique" 4x12 V30 also work.
- **Covers:** the JCM800 slot on the priority list, which is the #4 guitar amp at 4 songs (December, Man in the Box, Sister Christian, Ironic). It also works as a stand-in for Danger Zone (the Soldano pick), and at low gain for the Plexi-territory songs (Only in America, Spider-Man '94).
- **Starting points:** MV5 G3-G4 for December / Ironic crunch. MV6 G6-G7 for Man in the Box. MV5-6 G5 for Sister Christian rhythm, G8-G10 for its lead.
