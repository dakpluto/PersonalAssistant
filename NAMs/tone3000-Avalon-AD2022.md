# Avalon AD2022 Preamp — tone3000

- **Source:** https://www.tone3000.com/tones/avalon-ad2022-preamp-26480
- **Creator:** @tone3000 (the site's own official capture account)
- **Type:** NAM, **outboard gear**: a studio preamp, not an amp. No speaker or cab stage in the sound.
- **Gear:** Avalon AD2022, a dual-channel, pure Class A discrete (solid-state, not tube) mic preamp. Captured at input gains 22, 30, 38, 46 and 54 dB, both channels, high-pass filter off. The creator says 22 and 30 are "clean/transparent" and 46 and 54 are "really pushing into the red."
- **Not the Avalon U5:** the U5 is Avalon's dedicated instrument DI, the usual reference for "Avalon bass DI". The AD2022 is its mic-preamp sibling with the same Class A design. It fits the "studio DI / preamp" role here, but it's a stand-in for the U5 rather than the U5 itself.
- **License:** T3K (free to use and publish recordings; no redistributing the files).
- **Tags:** avalon, preamp, studio-gear
- **Popularity:** 5,350 downloads, 171 likes (scraped 2026-09-25). Published 2025-03-21.
- **Versions:** each file comes in Tone3000's A1 and A2 architectures (10 each, 20 total). No Complex variants.

## Naming scheme

`Avalon - <gain> dB - Chan <1|2>`: input gain in dB, channel 1 or 2. The two channels measure nearly identically (same NAM gain, loudness within 0.1 dB), so either channel works; you only need one.

## Models (10)

ESR = training error, lower = closer to the real gear (under ~0.01 is excellent). All ten are excellent; the 22-38 dB files (0.0001) are about as accurate as captures get. NAM gain (0-1, how driven) and loudness (dB) come from each file's metadata via `t3k_scrape.py --meta`. Coloration is subtle throughout: even 54 dB only reaches a NAM gain of about 0.10, so this adds weight and polish, not drive.

| File | Channel | Input gain (dB) | NAM gain | Loudness | Tone | ESR A2-Full | ESR A2-Lite | Slot |
|---|---|---|---|---|---|---|---|---|
| `Avalon - 22 dB - Chan 1` | 1 | 22 | 0.001 | -18.2 | Clean / transparent | 0.0001 | 0.0004 | |
| `Avalon - 22 dB - Chan 2` | 2 | 22 | 0.001 | -18.3 | Clean / transparent | 0.0001 | 0.0003 | |
| `Avalon - 30 dB - Chan 1` | 1 | 30 | 0.000 | -18.4 | Clean / transparent | 0.0001 | 0.0004 | |
| `Avalon - 30 dB - Chan 2` | 2 | 30 | 0.000 | -18.4 | Clean / transparent | 0.0001 | 0.0004 | |
| `Avalon - 38 dB - Chan 1` | 1 | 38 | 0.001 | -19.0 | Clean, slight added weight | 0.0001 | 0.0004 | |
| `Avalon - 38 dB - Chan 2` | 2 | 38 | 0.001 | -19.0 | Clean, slight added weight | 0.0001 | 0.0004 | |
| `Avalon - 46 dB - Chan 1` | 1 | 46 | 0.002 | -17.5 | Starting to color (creator: 'pushing into the red') | 0.0026 | 0.0031 | |
| `Avalon - 46 dB - Chan 2` | 2 | 46 | 0.005 | -17.6 | Starting to color (creator: 'pushing into the red') | 0.0026 | 0.0029 | |
| `Avalon - 54 dB - Chan 1` | 1 | 54 | 0.102 | -14.8 | Most colored: soft saturation, fuller and louder | 0.0011 | 0.0045 | |
| `Avalon - 54 dB - Chan 2` | 2 | 54 | 0.106 | -14.9 | Most colored: soft saturation, fuller and louder | 0.0013 | 0.0038 | |

Tone is my read from the settings, the creator's note and the metadata.

## Pairing notes

- **IR:** none, by design. A studio DI chain has no speaker. **Open question:** check whether the snaptone builder can make a NAM-only snaptone with no IR. If it requires one, look for a flat or neutral IR, or pair it with a bass cab IR at a low level. Record the answer here.
- **Covers:** the "Studio DI / tube preamp" slot, the #3 bass pick at 19 songs (the polished 80s pop and LA session parts: Kenny Rogers' 80s cuts, Kokomo, Danger Zone, Foreigner, Earth Wind & Fire, Time of My Life, and others). 38 dB is the safe clean default; 46 or 54 dB for a bit more weight and saturation.
- **Priority:** good fit for the role. Its only limits are that it's the mic-pre version rather than the U5, and the IR question above.
