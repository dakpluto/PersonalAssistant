# Marshall 1960AV - V7X+SM57+RB500 (IR) — pipppriss

- **Source:** https://www.tone3000.com/tones/marshall-1960av-v7xsm57rb500-27221
- **Creator:** @pipppriss (captures from their own cab)
- **Type:** IR, cab only.
- **Cab:** Marshall 1960AV, the angled 4x12 loaded with Celestion Vintage 30s. That's a darker, tighter, more mid-forward speaker than the G12T-75s in a stock JCM800-era 1960A.
- **Mics:** the creator names an sE Electronics V7X (dynamic), a Shure SM57, and an "RB500" (added "to give a bit more thump"; exact model not given, most likely a ribbon going by the name and the measured low end). All files are phase-aligned, so they can be blended without comb filtering. The creator's favorite is `BlendOfAll`, all mics mixed at equal volume.
- **Oddity:** the files are named V7X, RB500, SC1100 and BlendOfAll. There's no file named SM57, and the description doesn't mention an SC1100. The SC1100 file may be the SM57 track under another name, or a fourth mic; it's unexplained, so treat it as unknown. The `_dc` suffix most likely means DC offset removed (inferred).
- **Files:** WAV, mono, 48 kHz, 24-bit PCM, 500 ms each.
- **License:** T3K (free to use and publish recordings; no redistributing the files).
- **Tags:** marshall, metal, modern metal, thrash metal
- **Popularity:** 20,760 downloads, 323 likes (scraped 2026-09-25). Published 2025-04-06.

## Files (4)

Band balance comes from `t3k_scrape.py --meta`: average level per band (a flat response reads 0 in every band), in dB relative to that file's loudest band. Bands: low 20-250 Hz, low-mid 250-800, mid 800-2.5k, high-mid 2.5-5k, high 5-12k.

| File | Mic | Low | Low-mid | Mid | High-mid | High | Voicing | Slot |
|---|---|---|---|---|---|---|---|---|
| `BlendOfAll_dc` | All mics, equal level | 0.0 | -3.2 | -5.9 | -2.6 | -13.0 | Balanced, full-range; creator's pick and the default | |
| `V7X_dc` | sE V7X | 0.0 | -2.6 | -4.2 | -1.3 | -11.7 | Classic dynamic-mic 4x12 bite, a little leaner than the blend | |
| `SC1100_dc` | unexplained (see above) | -0.6 | -2.7 | -5.3 | 0.0 | -10.0 | Brightest of the four: the only one peaking in the high-mids | |
| `RB500_dc` | RB500 | 0.0 | -6.7 | -11.9 | -11.3 | -22.4 | By far the darkest and heaviest: mids and high-mids about 11-12 dB below the lows, top 22 dB down | |

Voicing is my read from the measurements and the creator's notes.

## Pairing notes

- **NAM:** the JCM800 pack (`NAMs/arthm-Marshall-JCM800-2203.md`): a Marshall head into a Marshall cab, just with V30s instead of the stock G12T-75s, so it's a bit darker and tighter than the original 80s records. Also the Rectifier pack (`NAMs/deathblossomaudio-Mesa-Dual-Rectifier-2025.md`), since V30s are the Recto speaker, though a Mesa Recto 4x12 would be closer.
- **Covers:** the 4x12 V30 cab slot on the priority list (#3 guitar cab, 7 songs: the Rectifier, Mark and Soldano picks) and a stand-in for the Marshall G12T-75 4x12 (#5, 4 songs) until a proper one turns up.
- **Starting points:** BlendOfAll as the default. V7X or SC1100 for a leaner, cutting 80s rhythm (JCM800 crunch). Blend in RB500 (or use it in the builder's mix, if it has one) for heavier drop-tuned parts like Cassie and Click Click Boom.
