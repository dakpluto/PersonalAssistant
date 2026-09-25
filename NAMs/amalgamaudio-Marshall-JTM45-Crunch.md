# Marshall JTM45 I Crunch BAL DI — amalgamaudio

- **Source:** https://www.tone3000.com/tones/marshall-jtm45-i-crunch-bal-di-1872
- **Creator:** @amalgamaudio (Amalgam Audio, a commercial capture maker). The description calls it part of their "MRSH JT45 1966 capture set", so this free upload is most likely a single sample from a larger paid pack. That's my inference.
- **Type:** NAM, **amp only** (Tone3000 marks it as a head capture, no cab). Always pair with an IR when building the snaptone.
- **Amp:** an original 1966 Marshall JTM45: Drake 8K output transformer, NOS GEC KT66 power tubes, NOS Mullard 12AX7s, Mullard GZ34 rectifier. The creator's take: closer to its Fender 5F6A Bassman roots than later Marshalls, with a more even and open response, sparkly "complex" cleans and deeper bass. It's the Clapton "Beano" amp and was used by early AC/DC and Pete Townshend.
- **"BAL DI" in the name:** probably means it was captured from a balanced DI/loadbox output. That's my guess; the creator doesn't explain it.
- **License:** T3K (free to use and publish recordings; no redistributing the files).
- **Tags:** 1960s, crunch
- **Popularity:** 3,308 downloads, 165 likes (scraped 2026-09-25). Published 2023-05-03.
- **Versions:** one setting, in Tone3000's A1 and A2 architectures (2 files). No Complex variant.

## Models (1)

The settings come from the description. The JTM45 has two channels, each with its own volume: I is the bright "high treble" channel and II the normal one. This capture uses the Channel I input, but both volumes are up. That usually means the channels are jumpered to blend the two, though the creator doesn't say.

ESR = training error, lower = closer to the real amp (under ~0.01 is excellent). This one is excellent. NAM gain (0-1, how driven) and loudness (dB) come from the file's metadata via `t3k_scrape.py --meta`.

| File | Input | Presence | Bass | Middle | Treble | Vol I | Vol II | NAM gain | Loudness | Tone | ESR A2-Full | ESR A2-Lite | Slot |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `Marshall JTM45 I Crunch BAL DI` | Ch I | 6 | 1 | 7 | 8 | 6 | 4 | 0.69 | -13.2 | Classic 60s British crunch: bass way down, mids and treble up | 0.0024 | 0.0114 | |

Tone is my read from the settings and title.

## Pairing notes

- **IR:** a Marshall 1960 4x12 with Celestion Greenbacks (G12M) is the classic match. The Origin Effects "British Straight" 4x12 (Marshall 1960B, G12H 55Hz) in `IRs/ir.md` is the closest documented option, and its own notes suggest it for a JTM45.
- **Covers:** the Plexi/JTM45 slot on the priority list, 2 songs (Only in America, Spider-Man '94). It's also a candidate for Sweet Leaf until a Laney turns up. With only one fixed crunch setting it's narrow: to get cleaner, roll back the guitar volume (the JTM45 cleans up well); to get more gain, push it with a drive pedal or the GP-5's DST/PRE.
