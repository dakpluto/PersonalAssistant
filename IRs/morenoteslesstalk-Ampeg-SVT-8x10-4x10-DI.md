# Ampeg SVT - DI - 4x10 - 8x10 (IR) — morenoteslesstalk

- **Source:** https://www.tone3000.com/tones/ampeg-svt-di-4x10-8x10-the-definitive-speaker-capture-collection-45241
- **Uploader:** @morenoteslesstalk
- **Type:** IR: bass cabs, plus two DI-output IRs with no speaker.
- **Provenance: unknown.** In the uploader's words: "Non-commercial IRs found on an old hard drive, I had a lot of fun with them whiile dabbling with my very first modeler … (Sonicake Matribox Mk1)." The uploader didn't make these and doesn't know their details. The description guesses at the labels ("which likely correspond…") and calls `57`, `4033`, `D6` and `e602` "speaker models", but those are microphone models (SM57, AT4033, Audix D6, e602). `A107` and `AH` are unexplained. **Treat all labels as unverified.** The source could be a commercial product, so these are fine for personal use but not for anything published (e.g. the website).
- **Gear, as far as the labels go:** an Ampeg 8x10 (SVT-810 style) miked with four mics, two variants each; and a set labeled "Ampeg SVT", which is most likely the 4x10 from the pack title, with Beta52/Neumann/SM57 labels plus DI-output captures from an SVT head.
- **License on Tone3000:** T3K. Given the provenance, the uploader may not have had the right to license them.
- **Tags:** 4x10, 8x10, ampeg, svt, bass cabinet, DI (many more, mostly descriptive)
- **Popularity:** 9,558 downloads, 281 likes (scraped 2026-09-25). Published 2025-11-30.

## What's actually in it (measured)

From `t3k_scrape.py --meta` plus a direct comparison of the waveforms (cross-correlation, 1.0 = identical):
- **The three "SVT" mic files are the same IR.** `Beta52`, `Neumann` and `SM57 off Axis` correlate at 0.999-1.0 and measure identical above 250 Hz; they differ only by about 1.5 dB in the lows. They're not three different mics. `Bright Beta52` and `Bright Neumann` are genuinely different files (0.92-0.96 vs the base).
- **The 8x10 A107/AH pairs are different captures** (0.6-0.7 correlation, so different mic position or timing) with nearly the same frequency balance. Exception: `e602 A107` and `e602 AH` are near-duplicates (0.99).
- **File lengths are mostly padding.** 99.9% of each IR's energy arrives within about 33-96 ms (the Hot DI within about 217 ms), even though the files run 0.55-5.9 s. Truncation by the snaptone builder or GP-5 won't lose anything.
- So the pack has about **12 genuinely distinct IRs**: 7 on the 8x10, 3 cab files in the SVT set, and 2 DI.

## Files (15)

Band balance: average level per band (a flat response reads 0 in every band), in dB relative to that file's loudest band. Bands: low 20-250 Hz, low-mid 250-800, mid 800-2.5k, high-mid 2.5-5k, high 5-12k.

| File | Source | Mic | Variant | Format | Low | Low-mid | Mid | High-mid | High | Voicing | Slot |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `Ampeg 8x10 57 A107` | 8x10 | Shure SM57 (inferred) | A107 | 44.1k / 32-bit / 721 ms | 0.0 | -5.3 | -6.1 | -4.0 | -14.8 | Balanced: lows lead, mids and high-mids only 4-6 dB down. The most even of the 8x10 files | |
| `Ampeg 8x10 57 AH` | 8x10 | Shure SM57 (inferred) | AH | 44.1k / 32-bit / 550 ms | 0.0 | -5.4 | -6.2 | -4.1 | -14.9 | Balanced: lows lead, mids and high-mids only 4-6 dB down. The most even of the 8x10 files | |
| `Ampeg 8x10 4033 A107` | 8x10 | Audio-Technica AT4033 (inferred) | A107 | 44.1k / 32-bit / 1369 ms | 0.0 | -0.2 | -4.2 | -1.7 | -12.9 | Fullest low-mids (level with the lows), most present upper mids. The most open/detailed | |
| `Ampeg 8x10 4033 AH` | 8x10 | Audio-Technica AT4033 (inferred) | AH | 44.1k / 32-bit / 1116 ms | 0.0 | -0.0 | -4.0 | -1.5 | -12.7 | Fullest low-mids (level with the lows), most present upper mids. The most open/detailed | |
| `Ampeg 8x10 D6 A107` | 8x10 | Audix D6 (inferred) | A107 | 44.1k / 32-bit / 700 ms | 0.0 | -12.5 | -10.5 | -2.8 | -14.6 | Scooped: deep lows and a high-mid click, low-mids and mids 10-12 dB down. Modern/rock | |
| `Ampeg 8x10 D6 AH` | 8x10 | Audix D6 (inferred) | AH | 44.1k / 32-bit / 550 ms | 0.0 | -12.6 | -10.6 | -2.8 | -14.6 | Scooped: deep lows and a high-mid click, low-mids and mids 10-12 dB down. Modern/rock | |
| `Ampeg 8x10 e602 A107` | 8x10 | Sennheiser e602 (inferred) | A107 | 44.1k / 32-bit / 1058 ms | 0.0 | -13.7 | -8.2 | -5.4 | -18.8 | Deepest and darkest: big lows, everything above 250 Hz well down | |
| `Ampeg 8x10 e602 AH` | 8x10 | Sennheiser e602 (inferred) | AH | 44.1k / 32-bit / 833 ms | 0.0 | -13.7 | -8.1 | -5.2 | -18.7 | Deepest and darkest: big lows, everything above 250 Hz well down (AH is a near-duplicate of A107 for this mic) | |
| `Ampeg SVT Beta52` | SVT cab (likely 4x10) | Beta52 (label) | — | 44.1k / 16-bit / 5944 ms | -1.4 | -11.4 | -4.1 | 0.0 | -11.9 | **Same IR as Neumann and SM57 off Axis** (see below). Mids/high-mids forward, strong lows | |
| `Ampeg SVT Neumann` | SVT cab (likely 4x10) | Neumann (label) | — | 44.1k / 16-bit / 5944 ms | -1.2 | -11.4 | -4.1 | 0.0 | -11.9 | **Duplicate** of Beta52: identical except the low band | |
| `Ampeg SVT SM57 off Axis` | SVT cab (likely 4x10) | SM57 off-axis (label) | — | 44.1k / 16-bit / 5944 ms | -2.8 | -11.4 | -4.1 | 0.0 | -11.9 | **Duplicate** of Beta52, slightly less low end | |
| `Ampeg SVT Bright Beta52` | SVT cab (likely 4x10) | Beta52, bright | — | 44.1k / 16-bit / 5944 ms | -4.1 | -14.7 | -7.1 | 0.0 | -8.0 | A genuinely different file: less low end, more top. The brightest in the pack | |
| `Ampeg SVT Bright Neumann` | SVT cab (likely 4x10) | Neumann, bright | — | 44.1k / 16-bit / 5944 ms | -3.3 | -14.2 | -5.4 | 0.0 | -10.5 | Different file: between the standard and Bright Beta52 | |
| `Ampeg SVT D-I-Out` | SVT head DI out | none (DI) | — | 44.1k / 16-bit / 5944 ms | 0.0 | -8.3 | -2.9 | -0.6 | -22.2 | No speaker: the head's DI output. Full lows, top rolled off hard | |
| `Ampeg SVT D-I-Out Hot` | SVT head DI out | none (DI) | — | 44.1k / 16-bit / 5944 ms | 0.0 | -8.5 | -5.7 | -5.9 | -19.9 | Hotter DI: lows lead, mids/high-mids pulled back, top rolled off | |

Mic names are my reading of the labels; voicing is my read from the measurements.

## Pairing notes

- **NAM:** the SVT-CL pack (`NAMs/deathblossomaudio-Ampeg-SVT-CL.md`). An 8x10 is the classic SVT cab.
- **Covers:** the SVT 8x10 (#1 bass cab, 40 songs) and Ampeg 4x10 (#4, 5 songs) slots. **Apg810 (User IR 3)**, already loaded on the GP-5 and with known provenance, remains the primary 8x10. These are alternatives and variety.
- **Starting points:** `8x10 57 A107` for an even, all-round SVT. `8x10 4033` for more low-mid body and detail (Motown-ish or worship). `8x10 D6` for scooped rock/punk (Basket Case, Everlong). `SVT Bright Beta52` for a 4x10-style cut in the modern worship songs.
- **DI-output IRs:** `SVT D-I-Out` and `D-I-Out Hot` model an SVT head's DI jack with no speaker. They could fill the IR side of the Avalon studio-DI snaptone if the builder requires an IR (see the open question in `NAMs/tone3000-Avalon-AD2022.md`), adding an Ampeg DI flavor.
