# MESA DUAL RECTIFIER 2025 — deathblossomaudio

- **Source:** https://www.tone3000.com/tones/mesa-dual-rectifier-2025-45026
- **Creator:** @deathblossomaudio
- **Type:** NAM, **preamp only**. The creator says: "This is a preamp-only capture — no cabinet IR is included, giving you complete freedom to pair with your favourite cabs, IRs, or power amp simulations." The tags list both "preamp-capture" and "poweramp-capture", but the description is explicit, so treat it as preamp only. **See the caution below.**
- **Amp:** Mesa/Boogie Dual Rectifier 100W, 2025 production model, **Modern** channel (the high-gain channel's Modern voicing). The creator describes the 2025 voice as tighter in the low end, clearer in the mids and more controlled up top than earlier Rectos.
- **Signal chain:** Countryman 85 reamp box, 1000 epochs. No knob settings, load or calibration listed.
- **Creator's note:** the Tone3000 preview player doesn't represent these accurately; use the NAM plugin with a good IR "at the correct input gain."
- **License:** T3K (free to use and publish recordings; no redistributing the files).
- **Tags:** 7-string, baritone, djent, drop tuning, heavy rhythm, high gain, lead, modern metal, TS808 boost, tight metal
- **Popularity:** 33,989 downloads, 1,101 likes (scraped 2026-09-25). Published 2025-11-29.
- **Versions:** each file comes in Tone3000's A1 and A2 architectures (5 each, 10 total). No Complex variants.

## Caution: preamp only

A preamp capture stops before the power amp, so it has none of the power-tube sag, compression and low-end push that's a big part of a Rectifier's sound. Amp-only captures like the AC30, Twin, Deluxe and JCM800 packs include it. The creator expects you to add a power amp sim, but a NAM + IR snaptone on the GP-5 has nowhere to put one: the N->S block replaces the GP-5's AMP and CAB modules, so there's no second amp stage. Expect this to come out tighter, fizzier and flatter than a full amp capture. Try it in the snaptone builder before committing a slot, and prefer a full (amp-only) Rectifier capture if one turns up.

## Naming scheme

`<n>. MESA DUAL RECTIFIER 2025 | [CRUNCH | TS808 BOOST |] RHYTHM #<n>`: numbered presets with no knob settings. NAM gain (0-1) and loudness (dB) come from each file's metadata via `t3k_scrape.py --meta`; like the JCM800, the gain estimate compresses at high gain, so the spread (0.70-0.85) is small but the order is consistent with the names.

## Models (5)

ESR = training error, lower = closer to the real amp (under ~0.01 is excellent). These run higher than the other packs: #1 and #2 are excellent, #3-#5 are good but not great (0.011-0.017), and the A2-Lite versions of #3-#5 are noticeably less accurate (0.035-0.05).

| File | NAM gain | Loudness | Tone | ESR A2-Full | ESR A2-Lite | Slot |
|---|---|---|---|---|---|---|
| `1. MESA DUAL RECTIFIER 2025 | CRUNCH | RHYTHM #1` | 0.70 | -15.2 | Crunch-leaning rhythm, least saturated in the pack | 0.0024 | 0.0148 | |
| `2. MESA DUAL RECTIFIER 2025 | RHYTHM #2` | 0.78 | -15.2 | Rhythm, moderate saturation | 0.0054 | 0.0185 | |
| `3. MESA DUAL RECTIFIER 2025 | RHYTHM #3` | 0.81 | -15.1 | Rhythm, heavier | 0.0112 | 0.0482 | |
| `4. MESA DUAL RECTIFIER 2025 | RHYTHM #4` | 0.84 | -15.2 | Rhythm, heaviest unboosted | 0.0134 | 0.0355 | |
| `5. MESA DUAL RECTIFIER 2025 | TS808 BOOST | RHYTHM #5` | 0.84 | -16.0 | TS808-style boost in front, tightest modern-metal chug | 0.0166 | 0.0498 | |

Tone is my read from the names and gain figures, not the creator's.

## Pairing notes

- **IR:** a Mesa Rectifier 4x12 with Celestion Vintage 30s. The V30112 (User IR 10) and the Origin Effects "Modern Boutique" 4x12 V30 in `IRs/ir.md` are both reasonable matches; a proper Mesa Recto 4x12 IR would be better.
- **Covers:** the Dual Rectifier slot on the priority list, 3 songs (Cassie, Click Click Boom, Higher). This is a 2025 Modern-channel voicing aimed at djent/modern metal, tighter than the late-90s Rectos those records used. #1 (Crunch) and #2 fit Higher and Cassie best; #4 or #5 suit Click Click Boom.
- **Caveat for the combo pick:** because of the preamp-only issue above, this is a weaker candidate than the other packs so far. Worth keeping, but a full-amp Rectifier capture would take priority.
