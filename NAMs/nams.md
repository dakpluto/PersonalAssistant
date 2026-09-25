# NAM library index

**In use for patches again as of 2026-09-25**, but only as the 30 NAM+IR snaptones in `snaptone_combos.md` (Michael re-enabled them once the snaptone set was loaded). The pack files below are the source library. A NAM that isn't part of a loaded combo isn't on the device and can't go in a patch.

Rebuilt from scratch 2026-09-25; the old single-list library (full-rig captures, slots 53-70) was retired. New workflow: an amp-only NAM gets combined with an IR into a single snaptone on an outside builder site, and that snaptone is what goes onto the GP-5. So amp-only captures are expected and fine, and a snaptone's cab comes from whichever IR it was built with (`IRs/`), not from the NAM.

One file per Tone3000 pack in this folder, scraped with `Tools/t3k_scrape.py` and following the layout of `slamminmofo-VOX-AC30-CH.md`: pack header (creator, source, amp-only vs full rig, signal chain, calibration, license), a naming-scheme decode, and a table of every model with decoded settings, ESRs and a Slot column. Once the library is assembled, a fixed set of guitar and bass NAM+IR combos gets picked from the existing patches and loaded onto the GP-5's SnapTone slots (1-80). Slots are recorded per combo in `snaptone_combos.md` (the same NAM can sit in two slots paired with different IRs, e.g. `SVT CLEAN PUSHED` in B6 and B9), not in the pack files' Slot columns. Bass B1-B10 are in slots 51-60 and guitar G1-G20 in slots 61-80 as of 2026-09-25.

## Combo plan

- [Snaptone combo plan](snaptone_combos.md) — 10 bass + 20 guitar NAM+IR combos mapped to every existing patch (2026-09-25)

## Pack files

- [VOX AC30 CH [Hyper Accuracy+] — slamminmofo](slamminmofo-VOX-AC30-CH.md) — amp only, 96 settings (Normal + Top Boost, some with a Rangemaster-style booster)
- [Fender Twin Reverb - Breakup — timr](timr-Fender-Twin-Reverb-Breakup.md) — amp only, 7 settings (2 clean, 5 breakup at volume 4-8, Bright on)
- [Fender Deluxe Reverb 1965 [Hyper Accuracy] — augctor](augctor-Fender-Deluxe-Reverb-1965.md) — amp only, 11 settings from cleanest to hot, two with a Klon-style pedal in front
- [Marshall JCM 800 2203 — arthm (Alexander Ribakov)](arthm-Marshall-JCM800-2203.md) — amp only, 30 settings: flat EQ, Gain 1-10 at Master 5/6/7
- [MESA DUAL RECTIFIER 2025 — deathblossomaudio](deathblossomaudio-Mesa-Dual-Rectifier-2025.md) — **preamp only** (no power amp), 5 Modern-channel rhythm presets incl. one TS808-boosted
- [Marshall JTM45 I Crunch BAL DI — amalgamaudio](amalgamaudio-Marshall-JTM45-Crunch.md) — amp only, 1 crunch setting from an original 1966 JTM45
- [AMPEG SVT-CL BASS HEAD — deathblossomaudio](deathblossomaudio-Ampeg-SVT-CL.md) — **bass, preamp only**, 12 files: clean to dirty SVT plus SansAmp/Darkglass-driven variants (one failed capture flagged)
- [Ampeg B-18N Portaflex Fliptop — tone3000](tone3000-Ampeg-B18N-Portaflex.md) — **bass, amp only**, 1964 B-18N (B-15 preamp circuit) at volume 2.5 / 5 / 7.5, clean to driven
- [Avalon AD2022 Preamp — tone3000](tone3000-Avalon-AD2022.md) — **bass studio DI/preamp** (outboard, no cab), Class A mic pre at 22-54 dB input gain, both channels
- [Dumble ODS #102 Ford [Hyper Accuracy+] — slamminmofo](slamminmofo-Dumble-ODS-102-Ford.md) — amp only, 66 captures of an ODS #102 (Robben Ford) clone: clean and overdrive channels, PAB and master-volume variants
