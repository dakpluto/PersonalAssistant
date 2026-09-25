# Fender Twin Reverb (IR) — vulturized

- **Source:** https://www.tone3000.com/tones/fender-twin-reverb-33532
- **Creator:** @vulturized
- **Type:** IR, cab only.
- **Cab:** Fender Twin Reverb 2x12 with a pair of JBL D120F speakers, the classic hi-fi Twin speaker. No mic, mic position or source-amp details given.
- **What's in it:** three EQ'd versions of the same cab, in the creator's words "from clean articulate rhythm work with no mud, to mid heavy leads."
- **Files:** WAV, mono, 44.1 kHz, 32-bit PCM, 731-836 ms long. That's longer than most IRs: the snaptone builder or GP-5 may truncate it, which normally only trims the room tail.
- **License:** T3K (free to use and publish recordings; no redistributing the files).
- **Tags:** clean, d120, fender, jbl, twin reverb
- **Popularity:** 27,410 downloads, 358 likes (scraped 2026-09-25). Published 2025-07-22.

## Files (3)

Band balance comes from `t3k_scrape.py --meta`: average level per band (a flat response reads 0 in every band), in dB relative to that file's loudest band. Bands: low 20-250 Hz, low-mid 250-800, mid 800-2.5k, high-mid 2.5-5k, high 5-12k.

| File | Low | Low-mid | Mid | High-mid | High | Voicing | Slot |
|---|---|---|---|---|---|---|---|
| `TWIN REVERB __ CLEAN` | -5.1 | -3.9 | -2.5 | 0.0 | -13.3 | Leanest lows/low-mids and most top end: tight, articulate, no mud | |
| `TWIN REVERB __ BALANCED` | -3.4 | -2.1 | -1.1 | 0.0 | -14.8 | Between the two: the all-round pick | |
| `TWIN REVERB __ MIDS` | -5.0 | 0.0 | -1.0 | -2.3 | -21.1 | Low-mids lead, top end rolled off hardest: fatter, for leads | |

The measurements back up the creator's names. CLEAN and BALANCED peak in the high-mids (2.5-5 kHz), while MIDS peaks in the low-mids. MIDS also has about 8 dB less top (5-12 kHz) than CLEAN.

## Pairing notes

- **NAM:** the natural partner for the Twin packs: `NAMs/timr-Fender-Twin-Reverb-Breakup.md`. Also a reasonable open-back 2x12 for the Deluxe Reverb pack (`NAMs/augctor-Fender-Deluxe-Reverb-1965.md`) until a real Deluxe 1x12 IR turns up.
- **Covers:** the Fender Twin 2x12 cab, the #2 guitar cab on the priority list at 9 songs. The Origin Effects "American Twin" in the list below covers the same cab (1965 Twin, JBL D120F), so this is a second option. It's worth comparing the two in the builder.
- **Starting points:** CLEAN for Nashville/Motown clean rhythm, BALANCED as the default, MIDS for the breakup/lead files.
