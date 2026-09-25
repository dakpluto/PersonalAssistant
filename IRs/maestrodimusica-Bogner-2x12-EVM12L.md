# Bogner 2x12 with EVM12L IR Files — maestrodimusica

- **Source:** https://www.tone3000.com/tones/bogner-2x12-with-evm12l-ir-files-32526
- **Creator:** @maestrodimusica (Nathaniel Dahman, DahmanMusic.com), from their own cab, February 2024
- **Type:** IR, cab only.
- **Cab:** Bogner 212C, oversize **closed-back** 2x12 in multi-ply birch, loaded with two 8-ohm Electro-Voice **EVM12L Black Label (Zakk Wylde)** speakers wired in parallel. Speaker 1 = left, 2 = right.
- **Close mics:** Royer R121 (ribbon), Shure SM57, Sennheiser MD421, Audix i5, Shure SM7B, each on both speakers at four positions: **Cap** (center of the dust cap), **Cap Edge** (where cap meets cone), **Cone** (halfway out the cone), **Cone Edge** (next to the baffle).
- **Fredman:** two SM57s in Fredman configuration (one on-axis, one angled off-axis, both captured separately) per speaker, with the on-axis mic aimed at the cap or at the cap edge.
- **Room mics:** AKG C414 and Beyerdynamic M160 (ribbon) at the center of the cab, 12" and 24" back.
- **Chain:** Universal Audio 2-610 tube mic preamps → Hazelrigg (HCL) Varis tube vari-mu compressor "for color" → RME Fireface; 10-second sine sweeps. The compressor adds some character of its own.
- **Files:** WAV, mono, 48 kHz, 24-bit PCM, 500 ms. The page lists 60 files, but the 8 Fredman files each appear twice, so there are **52 unique**.
- **License:** T3K (free to use and publish recordings; no redistributing the files).
- **Popularity:** 2,151 downloads, 31 likes (scraped 2026-09-25). Published 2025-07-12.

## What changes the tone (measured)

From `t3k_scrape.py --meta` band balance:
- **Position is the big lever**, same as any close-miked cab. **Cap** is brightest: nearly flat from the lows up through the high-mids, with the top (5-12 kHz) only about 5-12 dB down. **Cone** and **Cone Edge** are the darkest: high-mids 6-17 dB down and the top 16-32 dB down. **Cap Edge** sits between and is the usual all-rounder.
- **Mic character:** R121 is by far the darkest (top 12-32 dB down, mids falling away early). The i5 is the brightest, with the SM57 and MD421 close behind; the MD421 also carries the most low-mid emphasis. The SM7B rolls off the top the most of the dynamic mics.
- **Speaker 1 (left) is brighter** than speaker 2 at nearly every mic/position pair, often by 3-6 dB in the top band (e.g. SM57 Cap: -7.2 vs -11.1 dB).
- **Room mics (C414, M160)** are nearly flat from the lows through the mids, with a rolled-off top (19-25 dB down in the 5-12k band). The 24" versions keep more high-mid than the 12" ones. They sound more like an amp in a room than a close mic.

## Files (52)

Band balance per file: low 20-250 Hz, low-mid 250-800, mid 800-2.5k, high-mid 2.5-5k, high 5-12k; average level per band (a flat response reads 0 in every band), in dB relative to that file's loudest band.

| File | Mic | Speaker | Position | Low | Low-mid | Mid | High-mid | High | Slot |
|---|---|---|---|---|---|---|---|---|---|
| `Bogner 2x12 EVM12L - SM57 1 - Cap` | SM57 | 1 | Cap | 0.0 | -0.9 | -1.2 | -0.0 | -7.2 | |
| `Bogner 2x12 EVM12L - SM57 1 - Cap Edge` | SM57 | 1 | Cap Edge | 0.0 | -0.7 | -2.6 | -4.1 | -17.3 | |
| `Bogner 2x12 EVM12L - SM57 1 - Cone` | SM57 | 1 | Cone | 0.0 | -0.7 | -4.9 | -8.8 | -19.3 | |
| `Bogner 2x12 EVM12L - SM57 1 - Cone Edge` | SM57 | 1 | Cone Edge | 0.0 | -0.7 | -6.2 | -10.5 | -20.9 | |
| `Bogner 2x12 EVM12L - SM57 2 - Cap` | SM57 | 2 | Cap | 0.0 | -0.4 | -0.7 | -0.8 | -11.1 | |
| `Bogner 2x12 EVM12L - SM57 2 - Cap Edge` | SM57 | 2 | Cap Edge | 0.0 | -0.4 | -1.9 | -5.9 | -21.3 | |
| `Bogner 2x12 EVM12L - SM57 2 - Cone` | SM57 | 2 | Cone | 0.0 | -0.8 | -4.1 | -11.1 | -22.0 | |
| `Bogner 2x12 EVM12L - SM57 2 - Cone Edge` | SM57 | 2 | Cone Edge | 0.0 | -1.2 | -5.2 | -13.2 | -24.6 | |
| `Bogner 2x12 EVM12L - MD421 1 - Cap` | MD421 | 1 | Cap | -3.0 | -2.6 | -3.1 | 0.0 | -8.0 | |
| `Bogner 2x12 EVM12L - MD421 1 - Cap Edge` | MD421 | 1 | Cap Edge | -0.4 | 0.0 | -1.8 | -1.7 | -15.5 | |
| `Bogner 2x12 EVM12L - MD421 1 - Cone` | MD421 | 1 | Cone | -0.5 | 0.0 | -3.9 | -5.4 | -16.4 | |
| `Bogner 2x12 EVM12L - MD421 1 - Cone Edge` | MD421 | 1 | Cone Edge | -0.2 | 0.0 | -5.3 | -7.3 | -17.1 | |
| `Bogner 2x12 EVM12L - MD421 2 - Cap` | MD421 | 2 | Cap | -2.3 | -1.4 | -1.8 | 0.0 | -9.7 | |
| `Bogner 2x12 EVM12L - MD421 2 - Cap Edge` | MD421 | 2 | Cap Edge | -0.6 | 0.0 | -1.8 | -4.2 | -19.3 | |
| `Bogner 2x12 EVM12L - MD421 2 - Cone` | MD421 | 2 | Cone | -0.6 | 0.0 | -3.1 | -8.6 | -19.3 | |
| `Bogner 2x12 EVM12L - MD421 2 - Cone Edge` | MD421 | 2 | Cone Edge | -0.2 | 0.0 | -4.0 | -10.7 | -21.8 | |
| `Bogner 2x12 EVM12L - i5 1 - Cap` | i5 | 1 | Cap | -0.5 | -1.4 | -2.0 | 0.0 | -4.9 | |
| `Bogner 2x12 EVM12L - i5 1 - Cap Edge` | i5 | 1 | Cap Edge | 0.0 | -0.8 | -3.1 | -3.2 | -13.5 | |
| `Bogner 2x12 EVM12L - i5 1 - Cone` | i5 | 1 | Cone | 0.0 | -1.0 | -5.6 | -6.7 | -16.0 | |
| `Bogner 2x12 EVM12L - i5 1 - Cone Edge` | i5 | 1 | Cone Edge | 0.0 | -1.2 | -7.6 | -8.7 | -17.2 | |
| `Bogner 2x12 EVM12L - i5 2 - Cap` | i5 | 2 | Cap | -0.4 | -0.3 | -1.1 | 0.0 | -9.1 | |
| `Bogner 2x12 EVM12L - i5 2 - Cap Edge` | i5 | 2 | Cap Edge | 0.0 | -0.1 | -2.2 | -4.2 | -17.3 | |
| `Bogner 2x12 EVM12L - i5 2 - Cone` | i5 | 2 | Cone | 0.0 | -0.5 | -4.6 | -9.6 | -19.3 | |
| `Bogner 2x12 EVM12L - i5 2 - Cone Edge` | i5 | 2 | Cone Edge | 0.0 | -1.0 | -6.1 | -11.8 | -22.5 | |
| `Bogner 2x12 EVM12L - SM7B 1 - Cap` | SM7B | 1 | Cap | -0.5 | -1.1 | -1.1 | 0.0 | -9.4 | |
| `Bogner 2x12 EVM12L - SM7B 1 - Cap Edge` | SM7B | 1 | Cap Edge | 0.0 | -0.5 | -1.4 | -2.0 | -14.1 | |
| `Bogner 2x12 EVM12L - SM7B 1 - Cone` | SM7B | 1 | Cone | 0.0 | -0.6 | -3.0 | -6.1 | -24.1 | |
| `Bogner 2x12 EVM12L - SM7B 1 - Cone Edge` | SM7B | 1 | Cone Edge | 0.0 | -0.7 | -4.4 | -10.8 | -21.8 | |
| `Bogner 2x12 EVM12L - SM7B 2 - Cap` | SM7B | 2 | Cap | -0.1 | -0.1 | 0.0 | -0.4 | -11.9 | |
| `Bogner 2x12 EVM12L - SM7B 2 - Cap Edge` | SM7B | 2 | Cap Edge | -0.0 | 0.0 | -0.5 | -3.3 | -19.6 | |
| `Bogner 2x12 EVM12L - SM7B 2 - Cone` | SM7B | 2 | Cone | 0.0 | -0.0 | -1.8 | -7.9 | -24.4 | |
| `Bogner 2x12 EVM12L - SM7B 2 - Cone Edge` | SM7B | 2 | Cone Edge | 0.0 | -0.1 | -2.6 | -11.5 | -24.7 | |
| `Bogner 2x12 EVM12L - R121 1 - Cap` | R121 | 1 | Cap | 0.0 | -1.9 | -3.9 | -4.0 | -12.6 | |
| `Bogner 2x12 EVM12L - R121 1 - Cap Edge` | R121 | 1 | Cap Edge | 0.0 | -2.1 | -6.1 | -7.6 | -24.4 | |
| `Bogner 2x12 EVM12L - R121 1 - Cone` | R121 | 1 | Cone | 0.0 | -2.5 | -8.8 | -13.1 | -27.5 | |
| `Bogner 2x12 EVM12L - R121 1 - Cone Edge` | R121 | 1 | Cone Edge | 0.0 | -2.7 | -10.8 | -14.9 | -29.3 | |
| `Bogner 2x12 EVM12L - R121 2 - Cap` | R121 | 2 | Cap | 0.0 | -1.6 | -4.0 | -4.2 | -18.4 | |
| `Bogner 2x12 EVM12L - R121 2 - Cap Edge` | R121 | 2 | Cap Edge | 0.0 | -2.0 | -5.7 | -9.1 | -28.4 | |
| `Bogner 2x12 EVM12L - R121 2 - Cone` | R121 | 2 | Cone | 0.0 | -2.5 | -7.9 | -15.5 | -31.2 | |
| `Bogner 2x12 EVM12L - R121 2 - Cone Edge` | R121 | 2 | Cone Edge | 0.0 | -2.8 | -8.9 | -17.1 | -32.4 | |
| `Bogner 2x12 EVM12L - Fredman 1 On-Axis - Cap` | 2× SM57 Fredman (on-axis mic) | 1 | Cap | -1.5 | -1.8 | -1.5 | 0.0 | -7.4 | |
| `Bogner 2x12 EVM12L - Fredman 1 Off-Axis - Cap` | 2× SM57 Fredman (off-axis mic) | 1 | Cap | -0.3 | 0.0 | -0.9 | -4.6 | -20.6 | |
| `Bogner 2x12 EVM12L - Fredman 1 On-Axis - Cap Edge` | 2× SM57 Fredman (on-axis mic) | 1 | Cap Edge | 0.0 | -0.4 | -0.9 | -1.9 | -16.9 | |
| `Bogner 2x12 EVM12L - Fredman 1 Off-Axis - Cap Edge` | 2× SM57 Fredman (off-axis mic) | 1 | Cap Edge | -0.0 | 0.0 | -3.4 | -10.7 | -18.3 | |
| `Bogner 2x12 EVM12L - Fredman 2 On-Axis - Cap` | 2× SM57 Fredman (on-axis mic) | 2 | Cap | -1.2 | -0.7 | -0.7 | 0.0 | -9.9 | |
| `Bogner 2x12 EVM12L - Fredman 2 Off-Axis - Cap` | 2× SM57 Fredman (off-axis mic) | 2 | Cap | -0.3 | 0.0 | -0.6 | -4.9 | -20.9 | |
| `Bogner 2x12 EVM12L - Fredman 2 On-Axis - Cap Edge` | 2× SM57 Fredman (on-axis mic) | 2 | Cap Edge | -1.0 | 0.0 | -0.8 | -3.4 | -19.7 | |
| `Bogner 2x12 EVM12L - Fredman 2 Off-Axis - Cap Edge` | 2× SM57 Fredman (off-axis mic) | 2 | Cap Edge | -0.4 | 0.0 | -2.3 | -11.4 | -20.6 | |
| `Bogner 2x12 EVM12L - C414 - 12in` | C414 (room) | both (center) | 12" back | 0.0 | -0.9 | -3.0 | -8.4 | -25.4 | |
| `Bogner 2x12 EVM12L - C414 - 24in` | C414 (room) | both (center) | 24" back | 0.0 | -0.1 | -2.6 | -3.0 | -20.8 | |
| `Bogner 2x12 EVM12L - M160 - 12in` | M160 (room) | both (center) | 12" back | 0.0 | -1.4 | -1.3 | -5.3 | -24.1 | |
| `Bogner 2x12 EVM12L - M160 - 24in` | M160 (room) | both (center) | 24" back | 0.0 | -0.3 | -0.6 | -0.5 | -19.5 | |

## Pairing notes

- **Covers:** the 2x12 EVM12L cab slot on the priority list (#6 guitar cab, 3 songs: the John Mayer electric parts, Everyday I Have the Blues, Waiting on the World to Change, Your Body Is a Wonderland). EVM12Ls are the Dumble/Two-Rock speaker. The difference: Mayer's Dumble/Two-Rock cabs are typically open-back or ported, while this is a closed-back Bogner, so expect tighter, punchier lows than the real thing. The EVM112 IR already loaded in User IR slot 5 is the other EV option.
- **NAM:** no Dumble/Two-Rock NAM pack in the library yet. Until one turns up, this also works as a heavier, full-range alternative 2x12 for the Twin and Deluxe packs.
- **Starting points:** SM57 1 or i5 1 at **Cap Edge** for a clean, articulate Mayer-style tone. Blend toward R121 **Cap Edge** or **Cone** (in the builder's mix, if it has one) for warmth. MD421 Cap Edge for a mid-forward lead. C414 12" for a roomier, less close-miked sound.
