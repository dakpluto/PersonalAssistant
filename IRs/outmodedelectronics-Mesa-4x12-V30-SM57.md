# Celestion Vintage 30 - 2002 Mesa Boogie 4x12 - SM57 (IR) — outmodedelectronics

- **Source:** https://www.tone3000.com/tones/celestion-vintage-30-2002-mesa-boogie-4x12-sm57-45023
- **Creator:** @outmodedelectronics (captures from their own cab). Build notes on the creator's blog: https://outmodedelectronics.blogspot.com/2025/11/mesa-boogie-rectifier-standard-4x12.html
- **Type:** IR, cab only.
- **Cab:** Mesa/Boogie 4FB Traditional **straight** 4x12 (2002), loaded with 8-ohm Celestion Vintage 30s from 2001. It's shorter than the Mesa Standard Oversized 4x12 that's common on Tone3000. The creator finds these V30s warmer than their 16-ohm V30s in other cabs, and says the two left-side speakers (UL, LL) are "not as thick sounding."
- **Mic:** Shure SM57 on each of the four speakers. On-axis at 0.00" to 2.00" from the dust cap in 0.25" steps, plus 30° off-axis at 0.00" to 2.00" in 0.5" steps, all touching the grille (0.0" off). The 2.25" and 2.50" positions were removed as too dark. A backed-off-the-grille SM57 set and a non-SM57 Part 2 are linked or planned on the page.
- **Mic preamps:** every position was recorded through three: Chameleon Labs 7603 (Neve 1073-style), Stam SA-73 (Neve-style) and CAPI VP28 (API-style).
- **Chain:** Behringer A800 power amp → cab → SM57 → preamp → Steinberg UR824, 10-second sine sweeps, deconvolved in Voxengo Deconvolver.
- **Creator's starting points:** Mesa Rectifier Modern mode → **0.50" from cap**; Peavey 5150/6505 Lead → **0.75" from cap**.
- **Files:** WAV, mono, 48 kHz, 24-bit PCM, 500 ms each (all 168).
- **License:** T3K (free to use and publish recordings; no redistributing the files).
- **Tags:** celestion v30, mesa boogie, rock, thick mids
- **Popularity:** 45,800 downloads, 1,036 likes (scraped 2026-09-25). Published 2025-11-29.

## Naming scheme

`V30 <speaker> 4FB 4x12 SM57 <distance from cap> <distance off grille> [OA30] <preamp>`
- Speaker: UL / UR / LL / LR = upper/lower, left/right.
- `OA30` = mic angled 30° off-axis; without it the mic points straight at the cone.
- Preamp: `7603` (Chameleon Labs), `SA73` (Stam), `VP28` (CAPI). One file is spelled `CL7603` and one uses `2.0in` instead of `2.00in`; both are just naming inconsistencies.
- Count: 4 speakers × 3 preamps × (9 on-axis + 5 off-axis positions) = 168.

## What changes the tone (measured)

Averages across all files from `t3k_scrape.py --meta` band balance (average level per band, in dB relative to each IR's loudest band, which is the lows or the high-mids depending on mic position):
- **Mic position is the big one.** At the cap (0.00") the high-mids (2.5-5 kHz) are the loudest band and the top (5-12 kHz) sits about 13.5 dB down. Moving out to 2.00" on-axis pulls the high-mids down about 4 dB and the top about 7.5 dB, so the lows and low-mids take over: the cap is brightest and most cutting, the edge is thickest and darkest. **Off-axis** does the same, faster: at 30° and 2.00" the high-mids are about 6 dB down and the top about 9 dB darker than on-cap.
- **Speakers differ modestly, mostly in the top end.** LL is clearly the brightest (5-12k band -15.5 dB on average vs -17.5 to -18.6 for the others). UL is next, and the two right-side speakers (UR, LR) are the darkest and smoothest. That partly matches the creator's note that the left speakers are "not as thick": it's audible as extra brightness on LL rather than as measurably less low end.
- **Preamps barely matter.** The three average within about 0.7 dB of each other in every band. Pick any one.

## Files (168)

Band balance per file: low 20-250 Hz, low-mid 250-800, mid 800-2.5k, high-mid 2.5-5k, high 5-12k; average level per band (a flat response reads 0 in every band), in dB relative to that file's loudest band. Sorted by speaker, then on-/off-axis, then distance, then preamp.

| File | Speaker | From cap | Angle | Preamp | Low | Low-mid | Mid | High-mid | High | Slot |
|---|---|---|---|---|---|---|---|---|---|---|
| `V30 UL 4FB 4x12 SM57 0.00in 0.0in 7603` | UL | 0.00" | 0° | 7603 | -0.4 | -1.4 | -2.5 | 0.0 | -13.7 | |
| `V30 UL 4FB 4x12 SM57 0.00in 0.0in SA73` | UL | 0.00" | 0° | SA73 | -1.5 | -1.5 | -2.3 | 0.0 | -14.0 | |
| `V30 UL 4FB 4x12 SM57 0.00in 0.0in VP28` | UL | 0.00" | 0° | VP28 | -0.6 | -1.4 | -2.5 | 0.0 | -13.7 | |
| `V30 UL 4FB 4x12 SM57 0.25in 0.0in 7603` | UL | 0.25" | 0° | 7603 | 0.0 | -1.0 | -2.2 | -0.1 | -14.1 | |
| `V30 UL 4FB 4x12 SM57 0.25in 0.0in SA73` | UL | 0.25" | 0° | SA73 | -1.0 | -1.0 | -1.9 | 0.0 | -14.2 | |
| `V30 UL 4FB 4x12 SM57 0.25in 0.0in VP28` | UL | 0.25" | 0° | VP28 | -0.1 | -1.0 | -2.1 | 0.0 | -13.9 | |
| `V30 UL 4FB 4x12 SM57 0.50in 0.0in 7603` | UL | 0.50" | 0° | 7603 | 0.0 | -1.0 | -2.3 | -0.5 | -14.8 | |
| `V30 UL 4FB 4x12 SM57 0.50in 0.0in SA73` | UL | 0.50" | 0° | SA73 | -0.6 | -0.6 | -1.6 | 0.0 | -14.5 | |
| `V30 UL 4FB 4x12 SM57 0.50in 0.0in VP28` | UL | 0.50" | 0° | VP28 | 0.0 | -0.8 | -2.1 | -0.3 | -14.5 | |
| `V30 UL 4FB 4x12 SM57 0.75in 0.0in 7603` | UL | 0.75" | 0° | 7603 | 0.0 | -0.9 | -2.4 | -1.1 | -15.8 | |
| `V30 UL 4FB 4x12 SM57 0.75in 0.0in SA73` | UL | 0.75" | 0° | SA73 | -0.1 | 0.0 | -1.1 | -0.0 | -15.0 | |
| `V30 UL 4FB 4x12 SM57 0.75in 0.0in VP28` | UL | 0.75" | 0° | VP28 | 0.0 | -0.8 | -2.2 | -0.9 | -15.6 | |
| `V30 UL 4FB 4x12 SM57 1.00in 0.0in 7603` | UL | 1.00" | 0° | 7603 | 0.0 | -1.0 | -2.7 | -1.9 | -17.3 | |
| `V30 UL 4FB 4x12 SM57 1.00in 0.0in SA73` | UL | 1.00" | 0° | SA73 | -0.0 | 0.0 | -1.4 | -0.9 | -16.5 | |
| `V30 UL 4FB 4x12 SM57 1.00in 0.0in VP28` | UL | 1.00" | 0° | VP28 | 0.0 | -0.8 | -2.5 | -1.7 | -17.0 | |
| `V30 UL 4FB 4x12 SM57 1.25in 0.0in 7603` | UL | 1.25" | 0° | 7603 | 0.0 | -1.0 | -2.9 | -2.7 | -18.3 | |
| `V30 UL 4FB 4x12 SM57 1.25in 0.0in SA73` | UL | 1.25" | 0° | SA73 | -0.0 | 0.0 | -1.7 | -1.6 | -17.5 | |
| `V30 UL 4FB 4x12 SM57 1.25in 0.0in VP28` | UL | 1.25" | 0° | VP28 | 0.0 | -0.8 | -2.7 | -2.5 | -18.1 | |
| `V30 UL 4FB 4x12 SM57 1.50in 0.0in 7603` | UL | 1.50" | 0° | 7603 | 0.0 | -1.0 | -3.2 | -3.5 | -19.1 | |
| `V30 UL 4FB 4x12 SM57 1.50in 0.0in SA73` | UL | 1.50" | 0° | SA73 | -0.0 | 0.0 | -2.0 | -2.4 | -18.3 | |
| `V30 UL 4FB 4x12 SM57 1.50in 0.0in VP28` | UL | 1.50" | 0° | VP28 | 0.0 | -0.8 | -3.0 | -3.3 | -18.8 | |
| `V30 UL 4FB 4x12 SM57 1.75in 0.0in 7603` | UL | 1.75" | 0° | 7603 | 0.0 | -1.0 | -3.6 | -4.3 | -19.8 | |
| `V30 UL 4FB 4x12 SM57 1.75in 0.0in SA73` | UL | 1.75" | 0° | SA73 | -0.0 | 0.0 | -2.3 | -3.2 | -19.0 | |
| `V30 UL 4FB 4x12 SM57 1.75in 0.0in VP28` | UL | 1.75" | 0° | VP28 | 0.0 | -0.8 | -3.4 | -4.1 | -19.6 | |
| `V30 UL 4FB 4x12 SM57 2.00in 0.0in 7603` | UL | 2.00" | 0° | 7603 | 0.0 | -1.0 | -4.1 | -5.2 | -20.7 | |
| `V30 UL 4FB 4x12 SM57 2.00in 0.0in SA73` | UL | 2.00" | 0° | SA73 | 0.0 | -0.0 | -2.8 | -4.1 | -19.9 | |
| `V30 UL 4FB 4x12 SM57 2.00in 0.0in VP28` | UL | 2.00" | 0° | VP28 | 0.0 | -0.9 | -3.9 | -5.0 | -20.4 | |
| `V30 UL 4FB 4x12 SM57 0.00in 0.0in OA30 7603` | UL | 0.00" | 30° | 7603 | -0.6 | -0.7 | -2.0 | 0.0 | -14.4 | |
| `V30 UL 4FB 4x12 SM57 0.00in 0.0in OA30 SA73` | UL | 0.00" | 30° | SA73 | -1.7 | -0.8 | -1.9 | 0.0 | -14.7 | |
| `V30 UL 4FB 4x12 SM57 0.00in 0.0in OA30 VP28` | UL | 0.00" | 30° | VP28 | -0.8 | -0.7 | -2.0 | 0.0 | -14.4 | |
| `V30 UL 4FB 4x12 SM57 0.50in 0.0in OA30 7603` | UL | 0.50" | 30° | 7603 | 0.0 | -0.1 | -1.9 | -1.0 | -16.8 | |
| `V30 UL 4FB 4x12 SM57 0.50in 0.0in OA30 SA73` | UL | 0.50" | 30° | SA73 | -0.9 | 0.0 | -1.5 | -0.8 | -16.8 | |
| `V30 UL 4FB 4x12 SM57 0.50in 0.0in OA30 VP28` | UL | 0.50" | 30° | VP28 | -0.0 | 0.0 | -1.7 | -0.8 | -16.6 | |
| `V30 UL 4FB 4x12 SM57 1.00in 0.0in OA30 7603` | UL | 1.00" | 30° | 7603 | 0.0 | -0.3 | -2.7 | -3.6 | -20.7 | |
| `V30 UL 4FB 4x12 SM57 1.00in 0.0in OA30 SA73` | UL | 1.00" | 30° | SA73 | -0.7 | 0.0 | -2.1 | -3.2 | -20.6 | |
| `V30 UL 4FB 4x12 SM57 1.00in 0.0in OA30 VP28` | UL | 1.00" | 30° | VP28 | 0.0 | -0.1 | -2.5 | -3.4 | -20.4 | |
| `V30 UL 4FB 4x12 SM57 1.50in 0.0in OA30 7603` | UL | 1.50" | 30° | 7603 | 0.0 | -0.3 | -3.4 | -5.2 | -21.1 | |
| `V30 UL 4FB 4x12 SM57 1.50in 0.0in OA30 SA73` | UL | 1.50" | 30° | SA73 | -0.7 | 0.0 | -2.8 | -4.8 | -21.0 | |
| `V30 UL 4FB 4x12 SM57 1.50in 0.0in OA30 VP28` | UL | 1.50" | 30° | VP28 | 0.0 | -0.2 | -3.2 | -5.0 | -20.8 | |
| `V30 UL 4FB 4x12 SM57 2.00in 0.0in OA30 7603` | UL | 2.00" | 30° | 7603 | 0.0 | -0.4 | -4.3 | -6.9 | -21.4 | |
| `V30 UL 4FB 4x12 SM57 2.00in 0.0in OA30 SA73` | UL | 2.00" | 30° | SA73 | -0.7 | 0.0 | -3.7 | -6.4 | -21.3 | |
| `V30 UL 4FB 4x12 SM57 2.00in 0.0in OA30 VP28` | UL | 2.00" | 30° | VP28 | 0.0 | -0.2 | -4.1 | -6.7 | -21.1 | |
| `V30 UR 4FB 4x12 SM57 0.00in 0.0in 7603` | UR | 0.00" | 0° | 7603 | -1.2 | -2.1 | -3.1 | 0.0 | -13.9 | |
| `V30 UR 4FB 4x12 SM57 0.00in 0.0in SA73` | UR | 0.00" | 0° | SA73 | -2.3 | -2.2 | -3.0 | 0.0 | -14.1 | |
| `V30 UR 4FB 4x12 SM57 0.00in 0.0in VP28` | UR | 0.00" | 0° | VP28 | -1.4 | -2.2 | -3.2 | 0.0 | -13.8 | |
| `V30 UR 4FB 4x12 SM57 0.25in 0.0in 7603` | UR | 0.25" | 0° | 7603 | -1.0 | -1.9 | -2.9 | 0.0 | -14.4 | |
| `V30 UR 4FB 4x12 SM57 0.25in 0.0in SA73` | UR | 0.25" | 0° | SA73 | -2.1 | -2.0 | -2.8 | 0.0 | -14.6 | |
| `V30 UR 4FB 4x12 SM57 0.25in 0.0in VP28` | UR | 0.25" | 0° | VP28 | -1.2 | -2.0 | -3.0 | 0.0 | -14.4 | |
| `V30 UR 4FB 4x12 SM57 0.50in 0.0in 7603` | UR | 0.50" | 0° | 7603 | -0.5 | -1.4 | -2.6 | 0.0 | -15.1 | |
| `V30 UR 4FB 4x12 SM57 0.50in 0.0in SA73` | UR | 0.50" | 0° | SA73 | -1.6 | -1.5 | -2.4 | 0.0 | -15.3 | |
| `V30 UR 4FB 4x12 SM57 0.50in 0.0in VP28` | UR | 0.50" | 0° | VP28 | -0.7 | -1.5 | -2.6 | 0.0 | -15.1 | |
| `V30 UR 4FB 4x12 SM57 0.75in 0.0in 7603` | UR | 0.75" | 0° | 7603 | 0.0 | -0.9 | -2.2 | -0.2 | -16.2 | |
| `V30 UR 4FB 4x12 SM57 0.75in 0.0in SA73` | UR | 0.75" | 0° | SA73 | -0.9 | -0.9 | -1.9 | 0.0 | -16.2 | |
| `V30 UR 4FB 4x12 SM57 0.75in 0.0in VP28` | UR | 0.75" | 0° | VP28 | -0.0 | -0.8 | -2.1 | 0.0 | -16.0 | |
| `V30 UR 4FB 4x12 SM57 1.00in 0.0in 7603` | UR | 1.00" | 0° | 7603 | 0.0 | -0.9 | -2.4 | -0.9 | -17.7 | |
| `V30 UR 4FB 4x12 SM57 1.00in 0.0in SA73` | UR | 1.00" | 0° | SA73 | -0.3 | -0.2 | -1.4 | 0.0 | -17.0 | |
| `V30 UR 4FB 4x12 SM57 1.00in 0.0in VP28` | UR | 1.00" | 0° | VP28 | 0.0 | -0.8 | -2.2 | -0.7 | -17.4 | |
| `V30 UR 4FB 4x12 SM57 1.25in 0.0in 7603` | UR | 1.25" | 0° | 7603 | 0.0 | -0.9 | -2.7 | -1.7 | -19.2 | |
| `V30 UR 4FB 4x12 SM57 1.25in 0.0in SA73` | UR | 1.25" | 0° | SA73 | -0.0 | 0.0 | -1.4 | -0.6 | -18.3 | |
| `V30 UR 4FB 4x12 SM57 1.25in 0.0in VP28` | UR | 1.25" | 0° | VP28 | 0.0 | -0.8 | -2.5 | -1.5 | -18.9 | |
| `V30 UR 4FB 4x12 SM57 1.50in 0.0in 7603` | UR | 1.50" | 0° | 7603 | 0.0 | -1.0 | -3.0 | -2.7 | -20.6 | |
| `V30 UR 4FB 4x12 SM57 1.50in 0.0in SA73` | UR | 1.50" | 0° | SA73 | -0.0 | 0.0 | -1.8 | -1.5 | -19.7 | |
| `V30 UR 4FB 4x12 SM57 1.50in 0.0in VP28` | UR | 1.50" | 0° | VP28 | 0.0 | -0.8 | -2.8 | -2.5 | -20.3 | |
| `V30 UR 4FB 4x12 SM57 1.75in 0.0in 7603` | UR | 1.75" | 0° | 7603 | 0.0 | -1.0 | -3.4 | -3.6 | -21.7 | |
| `V30 UR 4FB 4x12 SM57 1.75in 0.0in SA73` | UR | 1.75" | 0° | SA73 | -0.0 | 0.0 | -2.1 | -2.5 | -20.8 | |
| `V30 UR 4FB 4x12 SM57 1.75in 0.0in VP28` | UR | 1.75" | 0° | VP28 | 0.0 | -0.8 | -3.2 | -3.4 | -21.4 | |
| `V30 UR 4FB 4x12 SM57 2.00in 0.0in 7603` | UR | 2.00" | 0° | 7603 | 0.0 | -1.0 | -3.8 | -4.5 | -23.2 | |
| `V30 UR 4FB 4x12 SM57 2.00in 0.0in SA73` | UR | 2.00" | 0° | SA73 | -0.0 | 0.0 | -2.5 | -3.4 | -22.3 | |
| `V30 UR 4FB 4x12 SM57 2.00in 0.0in VP28` | UR | 2.00" | 0° | VP28 | 0.0 | -0.8 | -3.6 | -4.3 | -23.0 | |
| `V30 UR 4FB 4x12 SM57 0.00in 0.0in OA30 7603` | UR | 0.00" | 30° | 7603 | -1.4 | -1.5 | -2.8 | 0.0 | -14.9 | |
| `V30 UR 4FB 4x12 SM57 0.00in 0.0in OA30 SA73` | UR | 0.00" | 30° | SA73 | -2.5 | -1.6 | -2.6 | 0.0 | -15.0 | |
| `V30 UR 4FB 4x12 SM57 0.00in 0.0in OA30 VP28` | UR | 0.00" | 30° | VP28 | -1.6 | -1.6 | -2.8 | 0.0 | -14.8 | |
| `V30 UR 4FB 4x12 SM57 0.50in 0.0in OA30 7603` | UR | 0.50" | 30° | 7603 | -0.2 | -0.3 | -1.9 | 0.0 | -16.6 | |
| `V30 UR 4FB 4x12 SM57 0.50in 0.0in OA30 SA73` | UR | 0.50" | 30° | SA73 | -1.3 | -0.4 | -1.7 | 0.0 | -16.7 | |
| `V30 UR 4FB 4x12 SM57 0.50in 0.0in OA30 VP28` | UR | 0.50" | 30° | VP28 | -0.4 | -0.4 | -1.9 | 0.0 | -16.5 | |
| `V30 UR 4FB 4x12 SM57 1.00in 0.0in OA30 7603` | UR | 1.00" | 30° | 7603 | 0.0 | -0.1 | -2.4 | -2.3 | -21.9 | |
| `V30 UR 4FB 4x12 SM57 1.00in 0.0in OA30 SA73` | UR | 1.00" | 30° | SA73 | -0.9 | 0.0 | -2.0 | -2.0 | -21.8 | |
| `V30 UR 4FB 4x12 SM57 1.00in 0.0in OA30 VP28` | UR | 1.00" | 30° | VP28 | -0.0 | 0.0 | -2.2 | -2.0 | -21.6 | |
| `V30 UR 4FB 4x12 SM57 1.50in 0.0in OA30 7603` | UR | 1.50" | 30° | 7603 | 0.0 | -0.2 | -3.0 | -4.0 | -23.2 | |
| `V30 UR 4FB 4x12 SM57 1.50in 0.0in OA30 SA73` | UR | 1.50" | 30° | SA73 | -0.8 | 0.0 | -2.6 | -3.7 | -23.2 | |
| `V30 UR 4FB 4x12 SM57 1.50in 0.0in OA30 VP28` | UR | 1.50" | 30° | VP28 | 0.0 | -0.0 | -2.9 | -3.8 | -23.0 | |
| `V30 UR 4FB 4x12 SM57 2.00in 0.0in OA30 7603` | UR | 2.00" | 30° | 7603 | 0.0 | -0.2 | -3.9 | -6.1 | -24.3 | |
| `V30 UR 4FB 4x12 SM57 2.00in 0.0in OA30 SA73` | UR | 2.00" | 30° | SA73 | -0.8 | 0.0 | -3.5 | -5.8 | -24.2 | |
| `V30 UR 4FB 4x12 SM57 2.00in 0.0in OA30 VP28` | UR | 2.00" | 30° | VP28 | 0.0 | -0.0 | -3.7 | -5.9 | -24.1 | |
| `V30 LL 4FB 4x12 SM57 0.00in 0.0in 7603` | LL | 0.00" | 0° | 7603 | -1.4 | -2.2 | -2.7 | 0.0 | -12.5 | |
| `V30 LL 4FB 4x12 SM57 0.00in 0.0in SA73` | LL | 0.00" | 0° | SA73 | -2.5 | -2.3 | -2.5 | 0.0 | -12.7 | |
| `V30 LL 4FB 4x12 SM57 0.00in 0.0in VP28` | LL | 0.00" | 0° | VP28 | -1.6 | -2.3 | -2.7 | 0.0 | -12.5 | |
| `V30 LL 4FB 4x12 SM57 0.25in 0.0in 7603` | LL | 0.25" | 0° | 7603 | -1.2 | -2.0 | -2.5 | 0.0 | -12.6 | |
| `V30 LL 4FB 4x12 SM57 0.25in 0.0in SA73` | LL | 0.25" | 0° | SA73 | -2.3 | -2.1 | -2.4 | 0.0 | -12.8 | |
| `V30 LL 4FB 4x12 SM57 0.25in 0.0in VP28` | LL | 0.25" | 0° | VP28 | -1.4 | -2.0 | -2.6 | 0.0 | -12.6 | |
| `V30 LL 4FB 4x12 SM57 0.50in 0.0in 7603` | LL | 0.50" | 0° | 7603 | -0.7 | -1.5 | -2.2 | 0.0 | -12.8 | |
| `V30 LL 4FB 4x12 SM57 0.50in 0.0in SA73` | LL | 0.50" | 0° | SA73 | -1.8 | -1.6 | -2.0 | 0.0 | -13.0 | |
| `V30 LL 4FB 4x12 SM57 0.50in 0.0in VP28` | LL | 0.50" | 0° | VP28 | -0.9 | -1.6 | -2.2 | 0.0 | -12.7 | |
| `V30 LL 4FB 4x12 SM57 0.75in 0.0in 7603` | LL | 0.75" | 0° | 7603 | -0.1 | -0.9 | -1.8 | 0.0 | -13.0 | |
| `V30 LL 4FB 4x12 SM57 0.75in 0.0in SA73` | LL | 0.75" | 0° | SA73 | -1.2 | -1.0 | -1.6 | 0.0 | -13.2 | |
| `V30 LL 4FB 4x12 SM57 0.75in 0.0in VP28` | LL | 0.75" | 0° | VP28 | -0.3 | -1.0 | -1.8 | 0.0 | -12.9 | |
| `V30 LL 4FB 4x12 SM57 1.00in 0.0in 7603` | LL | 1.00" | 0° | 7603 | 0.0 | -0.9 | -1.9 | -0.5 | -13.7 | |
| `V30 LL 4FB 4x12 SM57 1.00in 0.0in SA73` | LL | 1.00" | 0° | SA73 | -0.7 | -0.5 | -1.3 | 0.0 | -13.4 | |
| `V30 LL 4FB 4x12 SM57 1.00in 0.0in VP28` | LL | 1.00" | 0° | VP28 | 0.0 | -0.7 | -1.7 | -0.3 | -13.4 | |
| `V30 LL 4FB 4x12 SM57 1.25in 0.0in 7603` | LL | 1.25" | 0° | 7603 | 0.0 | -0.9 | -2.2 | -1.3 | -14.9 | |
| `V30 LL 4FB 4x12 SM57 1.25in 0.0in SA73` | LL | 1.25" | 0° | SA73 | -0.1 | 0.0 | -1.0 | -0.3 | -14.1 | |
| `V30 LL 4FB 4x12 SM57 1.25in 0.0in VP28` | LL | 1.25" | 0° | VP28 | 0.0 | -0.7 | -2.0 | -1.1 | -14.7 | |
| `V30 LL 4FB 4x12 SM57 1.50in 0.0in 7603` | LL | 1.50" | 0° | 7603 | 0.0 | -0.9 | -2.5 | -2.0 | -16.2 | |
| `V30 LL 4FB 4x12 SM57 1.50in 0.0in SA73` | LL | 1.50" | 0° | SA73 | -0.1 | 0.0 | -1.3 | -1.0 | -15.4 | |
| `V30 LL 4FB 4x12 SM57 1.50in 0.0in VP28` | LL | 1.50" | 0° | VP28 | 0.0 | -0.7 | -2.3 | -1.8 | -15.9 | |
| `V30 LL 4FB 4x12 SM57 1.75in 0.0in 7603` | LL | 1.75" | 0° | 7603 | 0.0 | -0.9 | -3.0 | -2.9 | -17.8 | |
| `V30 LL 4FB 4x12 SM57 1.75in 0.0in SA73` | LL | 1.75" | 0° | SA73 | -0.1 | 0.0 | -1.8 | -1.9 | -17.0 | |
| `V30 LL 4FB 4x12 SM57 1.75in 0.0in VP28` | LL | 1.75" | 0° | VP28 | 0.0 | -0.8 | -2.8 | -2.7 | -17.5 | |
| `V30 LL 4FB 4x12 SM57 2.00in 0.0in 7603` | LL | 2.00" | 0° | 7603 | 0.0 | -0.9 | -3.4 | -3.8 | -19.7 | |
| `V30 LL 4FB 4x12 SM57 2.00in 0.0in SA73` | LL | 2.00" | 0° | SA73 | -0.1 | 0.0 | -2.3 | -2.7 | -18.9 | |
| `V30 LL 4FB 4x12 SM57 2.00in 0.0in VP28` | LL | 2.00" | 0° | VP28 | 0.0 | -0.8 | -3.3 | -3.6 | -19.5 | |
| `V30 LL 4FB 4x12 SM57 0.00in 0.0in OA30 7603` | LL | 0.00" | 30° | 7603 | -1.2 | -1.7 | -2.3 | 0.0 | -13.6 | |
| `V30 LL 4FB 4x12 SM57 0.00in 0.0in OA30 SA73` | LL | 0.00" | 30° | SA73 | -2.3 | -1.8 | -2.1 | 0.0 | -13.7 | |
| `V30 LL 4FB 4x12 SM57 0.00in 0.0in OA30 VP28` | LL | 0.00" | 30° | VP28 | -1.4 | -1.8 | -2.3 | 0.0 | -13.5 | |
| `V30 LL 4FB 4x12 SM57 0.50in 0.0in OA30 7603` | LL | 0.50" | 30° | 7603 | 0.0 | -0.5 | -1.4 | -0.0 | -14.2 | |
| `V30 LL 4FB 4x12 SM57 0.50in 0.0in OA30 SA73` | LL | 0.50" | 30° | SA73 | -1.1 | -0.6 | -1.2 | 0.0 | -14.4 | |
| `V30 LL 4FB 4x12 SM57 0.50in 0.0in OA30 VP28` | LL | 0.50" | 30° | VP28 | -0.2 | -0.5 | -1.4 | 0.0 | -14.2 | |
| `V30 LL 4FB 4x12 SM57 1.00in 0.0in OA30 7603` | LL | 1.00" | 30° | 7603 | 0.0 | -0.5 | -1.9 | -1.7 | -16.7 | |
| `V30 LL 4FB 4x12 SM57 1.00in 0.0in OA30 SA73` | LL | 1.00" | 30° | SA73 | -0.5 | 0.0 | -1.1 | -1.1 | -16.3 | |
| `V30 LL 4FB 4x12 SM57 1.00in 0.0in OA30 VP28` | LL | 1.00" | 30° | VP28 | 0.0 | -0.3 | -1.7 | -1.5 | -16.4 | |
| `V30 LL 4FB 4x12 SM57 1.50in 0.0in OA30 7603` | LL | 1.50" | 30° | 7603 | 0.0 | -0.5 | -2.9 | -4.0 | -19.7 | |
| `V30 LL 4FB 4x12 SM57 1.50in 0.0in OA30 SA73` | LL | 1.50" | 30° | SA73 | -0.5 | 0.0 | -2.1 | -3.3 | -19.3 | |
| `V30 LL 4FB 4x12 SM57 1.50in 0.0in OA30 VP28` | LL | 1.50" | 30° | VP28 | 0.0 | -0.4 | -2.7 | -3.7 | -19.4 | |
| `V30 LL 4FB 4x12 SM57 2.00in 0.0in OA30 7603` | LL | 2.00" | 30° | 7603 | 0.0 | -0.6 | -3.7 | -5.3 | -21.5 | |
| `V30 LL 4FB 4x12 SM57 2.00in 0.0in OA30 SA73` | LL | 2.00" | 30° | SA73 | -0.5 | 0.0 | -2.8 | -4.6 | -21.1 | |
| `V30 LL 4FB 4x12 SM57 2.0in 0.0in OA30 VP28` | LL | 2.00" | 30° | VP28 | 0.0 | -0.5 | -3.4 | -4.8 | -20.8 | |
| `V30 LR 4FB 4x12 SM57 0.00in 0.0in 7603` | LR | 0.00" | 0° | 7603 | -0.7 | -1.7 | -2.5 | 0.0 | -13.6 | |
| `V30 LR 4FB 4x12 SM57 0.00in 0.0in SA73` | LR | 0.00" | 0° | SA73 | -1.9 | -1.8 | -2.4 | 0.0 | -13.8 | |
| `V30 LR 4FB 4x12 SM57 0.00in 0.0in VP28` | LR | 0.00" | 0° | VP28 | -1.0 | -1.8 | -2.5 | 0.0 | -13.6 | |
| `V30 LR 4FB 4x12 SM57 0.25in 0.0in 7603` | LR | 0.25" | 0° | 7603 | -0.4 | -1.4 | -2.3 | 0.0 | -14.1 | |
| `V30 LR 4FB 4x12 SM57 0.25in 0.0in SA73` | LR | 0.25" | 0° | SA73 | -1.5 | -1.5 | -2.1 | 0.0 | -14.3 | |
| `V30 LR 4FB 4x12 SM57 0.25in 0.0in VP28` | LR | 0.25" | 0° | VP28 | -0.6 | -1.4 | -2.3 | 0.0 | -14.1 | |
| `V30 LR 4FB 4x12 SM57 0.50in 0.0in 7603` | LR | 0.50" | 0° | 7603 | -0.1 | -1.1 | -2.0 | 0.0 | -14.7 | |
| `V30 LR 4FB 4x12 SM57 0.50in 0.0in SA73` | LR | 0.50" | 0° | SA73 | -1.2 | -1.2 | -1.9 | 0.0 | -14.9 | |
| `V30 LR 4FB 4x12 SM57 0.50in 0.0in VP28` | LR | 0.50" | 0° | VP28 | -0.3 | -1.2 | -2.1 | 0.0 | -14.6 | |
| `V30 LR 4FB 4x12 SM57 0.75in 0.0in 7603` | LR | 0.75" | 0° | 7603 | 0.0 | -1.1 | -2.3 | -0.6 | -16.3 | |
| `V30 LR 4FB 4x12 SM57 0.75in 0.0in SA73` | LR | 0.75" | 0° | SA73 | -0.5 | -0.6 | -1.5 | 0.0 | -15.9 | |
| `V30 LR 4FB 4x12 SM57 0.75in 0.0in VP28` | LR | 0.75" | 0° | VP28 | 0.0 | -0.9 | -2.1 | -0.4 | -16.0 | |
| `V30 LR 4FB 4x12 SM57 1.00in 0.0in 7603` | LR | 1.00" | 0° | 7603 | 0.0 | -1.1 | -2.4 | -1.2 | -17.5 | |
| `V30 LR 4FB 4x12 SM57 1.00in 0.0in SA73` | LR | 1.00" | 0° | SA73 | 0.0 | -0.0 | -1.1 | -0.1 | -16.6 | |
| `V30 LR 4FB 4x12 SM57 1.00in 0.0in VP28` | LR | 1.00" | 0° | VP28 | 0.0 | -0.9 | -2.2 | -1.0 | -17.3 | |
| `V30 LR 4FB 4x12 SM57 1.25in 0.0in CL7603` | LR | 1.25" | 0° | CL7603 | 0.0 | -1.1 | -2.7 | -1.9 | -18.8 | |
| `V30 LR 4FB 4x12 SM57 1.25in 0.0in SA73` | LR | 1.25" | 0° | SA73 | 0.0 | -0.0 | -1.4 | -0.8 | -17.9 | |
| `V30 LR 4FB 4x12 SM57 1.25in 0.0in VP28` | LR | 1.25" | 0° | VP28 | 0.0 | -0.9 | -2.5 | -1.7 | -18.6 | |
| `V30 LR 4FB 4x12 SM57 1.50in 0.0in 7603` | LR | 1.50" | 0° | 7603 | 0.0 | -1.1 | -3.1 | -2.7 | -20.2 | |
| `V30 LR 4FB 4x12 SM57 1.50in 0.0in SA73` | LR | 1.50" | 0° | SA73 | 0.0 | -0.0 | -1.8 | -1.6 | -19.3 | |
| `V30 LR 4FB 4x12 SM57 1.50in 0.0in VP28` | LR | 1.50" | 0° | VP28 | 0.0 | -0.9 | -2.9 | -2.5 | -20.0 | |
| `V30 LR 4FB 4x12 SM57 1.75in 0.0in 7603` | LR | 1.75" | 0° | 7603 | 0.0 | -1.1 | -3.4 | -3.4 | -21.3 | |
| `V30 LR 4FB 4x12 SM57 1.75in 0.0in SA73` | LR | 1.75" | 0° | SA73 | 0.0 | -0.0 | -2.1 | -2.3 | -20.4 | |
| `V30 LR 4FB 4x12 SM57 1.75in 0.0in VP28` | LR | 1.75" | 0° | VP28 | 0.0 | -0.9 | -3.2 | -3.2 | -21.0 | |
| `V30 LR 4FB 4x12 SM57 2.00in 0.0in 7603` | LR | 2.00" | 0° | 7603 | 0.0 | -1.1 | -4.0 | -4.3 | -22.7 | |
| `V30 LR 4FB 4x12 SM57 2.00in 0.0in SA73` | LR | 2.00" | 0° | SA73 | 0.0 | -0.1 | -2.7 | -3.1 | -21.8 | |
| `V30 LR 4FB 4x12 SM57 2.00in 0.0in VP28` | LR | 2.00" | 0° | VP28 | 0.0 | -0.9 | -3.8 | -4.1 | -22.5 | |
| `V30 LR 4FB 4x12 SM57 0.00in 0.0in OA30 7603` | LR | 0.00" | 30° | 7603 | -0.4 | -0.8 | -2.0 | 0.0 | -15.2 | |
| `V30 LR 4FB 4x12 SM57 0.00in 0.0in OA30 SA73` | LR | 0.00" | 30° | SA73 | -1.5 | -0.9 | -1.8 | 0.0 | -15.4 | |
| `V30 LR 4FB 4x12 SM57 0.00in 0.0in OA30 VP28` | LR | 0.00" | 30° | VP28 | -0.6 | -0.9 | -2.0 | 0.0 | -15.2 | |
| `V30 LR 4FB 4x12 SM57 0.50in 0.0in OA30 7603` | LR | 0.50" | 30° | 7603 | 0.0 | -0.5 | -2.1 | -0.9 | -17.8 | |
| `V30 LR 4FB 4x12 SM57 0.50in 0.0in OA30 SA73` | LR | 0.50" | 30° | SA73 | -0.6 | 0.0 | -1.3 | -0.3 | -17.5 | |
| `V30 LR 4FB 4x12 SM57 0.50in 0.0in OA30 VP28` | LR | 0.50" | 30° | VP28 | 0.0 | -0.3 | -1.9 | -0.6 | -17.6 | |
| `V30 LR 4FB 4x12 SM57 1.00in 0.0in OA30 7603` | LR | 1.00" | 30° | 7603 | 0.0 | -0.5 | -2.6 | -2.4 | -21.2 | |
| `V30 LR 4FB 4x12 SM57 1.00in 0.0in OA30 SA73` | LR | 1.00" | 30° | SA73 | -0.6 | 0.0 | -1.9 | -1.8 | -20.9 | |
| `V30 LR 4FB 4x12 SM57 1.00in 0.0in OA30 VP28` | LR | 1.00" | 30° | VP28 | 0.0 | -0.3 | -2.4 | -2.2 | -21.0 | |
| `V30 LR 4FB 4x12 SM57 1.50in 0.0in OA30 7603` | LR | 1.50" | 30° | 7603 | 0.0 | -0.5 | -3.6 | -4.5 | -22.8 | |
| `V30 LR 4FB 4x12 SM57 1.50in 0.0in OA30 SA73` | LR | 1.50" | 30° | SA73 | -0.5 | 0.0 | -2.8 | -3.8 | -22.4 | |
| `V30 LR 4FB 4x12 SM57 1.50in 0.0in OA30 VP28` | LR | 1.50" | 30° | VP28 | 0.0 | -0.4 | -3.4 | -4.2 | -22.5 | |
| `V30 LR 4FB 4x12 SM57 2.00in 0.0in OA30 7603` | LR | 2.00" | 30° | 7603 | 0.0 | -0.5 | -4.6 | -6.2 | -23.9 | |
| `V30 LR 4FB 4x12 SM57 2.00in 0.0in OA30 SA73` | LR | 2.00" | 30° | SA73 | -0.5 | 0.0 | -3.8 | -5.5 | -23.5 | |
| `V30 LR 4FB 4x12 SM57 2.00in 0.0in OA30 VP28` | LR | 2.00" | 30° | VP28 | 0.0 | -0.4 | -4.4 | -6.0 | -23.6 | |

## Pairing notes

- **NAM:** the Rectifier pack (`NAMs/deathblossomaudio-Mesa-Dual-Rectifier-2025.md`): a Mesa head into a Mesa V30 4x12 is the direct match, which the Marshall 1960AV IR isn't. Also good with the JCM800 pack for the heavier songs.
- **Covers:** the 4x12 V30 cab slot on the priority list (#3 guitar cab, 7 songs: Cassie, Click Click Boom, Higher, the three Riverside parts, Danger Zone). This is the better match than the 1960AV for the Rectifier and Mark picks, since it's an actual Mesa cab.
- **Starting points:** UR or LR, 0.50", on-axis, any preamp (the creator's Recto pick, on the thicker right-side speakers) for Higher, Cassie and Click Click Boom. 0.75" for a slightly warmer tone. Riverside's smoother leads → 1.00-1.50" or a 30° off-axis file. Cutting 80s rhythm (Danger Zone) → 0.00-0.25" on a left-side speaker.
