# VOX AC30 CH [Hyper Accuracy+] — slamminmofo

- **Source:** https://www.tone3000.com/tones/vox-ac30-ch-hyper-accuracy-31267
- **Creator:** @slamminmofo (verified)
- **Type:** NAM, **amp only** — captured into a Suhr Reactive Load, no cab/mic. Always pair with an IR when building the snaptone.
- **Amp:** VOX AC30 CH (current "custom head" production model — not a vintage JMI). Pseudo-Class-A, EL84, Normal + Top Boost channels. Captured with FX loop off, master volume at max, attenuator disabled (30W mode), tremolo and reverb off, high-gain inputs only on both channels.
- **Signal chain:** UA Apollo X8 line out → Lehle P-Split III reamp box → VOX AC30 CH → Suhr Reactive Load → UA Apollo X8 Hi-Z in. Calibration +12.4 dBu (metadata included in the files).
- **Extras:** some Normal-channel captures have a Dallas Rangemaster germanium treble booster clone in front (Rory Gallagher / Brian May tones).
- **License:** T3K (free to use and publish recordings; no redistributing the files).
- **Tags:** alt rock, blues, boost, breakup, classic rock, clean, clean tone, clean tone 80s, crunch, edge of breakup, jangle, jazz, overdrive, rock, treble booster, tube, valve, vintage, vintage rock
- **Popularity:** 40,045 downloads, 933 likes (scraped 2026-09-25).

## Versions in the download

Every setting below comes in several trained versions. File names end in:
- `_S` Standard (1000 epochs). The only version the Tone3000 page lists, so it's the table below. Also offered in Tone3000's A1 and A2 architectures (96 files each).
- `_XS` xStandard — more accurate, same CPU as Standard.
- `_C` Complex (1400 epochs) — most accurate, heaviest CPU. The creator's first choice.

The xStandard and Complex files (192 total) have the same names apart from the suffix, but they're only in the download, not listed on the page. Which of these the snaptone builder accepts is still unconfirmed — record it here once known.

## Naming scheme

`SLAMMIN_VOX_AC30_<channel>_V<volume>_TC<tone cut>[_B<bass>_T<treble>]_<description>_<version>`
- Channel: `N` = Normal (volume only), `TB` = Top Boost (volume, bass, treble).
- Tone Cut = VOX's "Hi Cut": higher = darker (cuts more highs). It's global, so it applies to both channels.
- All knobs 0-10. On an AC30 the channel volume *is* the gain: V2-3 is clean, V5 is edge of breakup, V7-8 is crunch, and V10 is full breakup.

## Models (Standard, 96)

ESR = training error, lower = closer to the real amp (under ~0.01 is excellent). A2-Full/A2-Lite are Tone3000's two sizes of the newer A2 architecture. The Normal channel at V8-V10 without the booster has noticeably higher ESR (0.02-0.05), so those are the least accurate files in the pack.

| File | Channel | Vol | Tone Cut | Bass / Treble | Tone | ESR A2-Full | ESR A2-Lite | Slot |
|---|---|---|---|---|---|---|---|---|
| `SLAMMIN_VOX_AC30_N_V3_TC0_S` | Normal | 3 | 0 | — | Normal channel, volume only | 0.0019 | 0.0111 | |
| `SLAMMIN_VOX_AC30_N_V3_TC3_S` | Normal | 3 | 3 | — | Normal channel, volume only | 0.002 | 0.0156 | |
| `SLAMMIN_VOX_AC30_N_V3_TC5_S` | Normal | 3 | 5 | — | Normal channel, volume only | 0.0021 | 0.0164 | |
| `SLAMMIN_VOX_AC30_N_V3_TC8_S` | Normal | 3 | 8 | — | Normal channel, volume only | 0.0024 | 0.0116 | |
| `SLAMMIN_VOX_AC30_N_V3_TC10_S` | Normal | 3 | 10 | — | Normal channel, volume only | 0.0062 | 0.0354 | |
| `SLAMMIN_VOX_AC30_N_V5_TC0_S` | Normal | 5 | 0 | — | Normal channel, volume only | 0.0034 | 0.026 | |
| `SLAMMIN_VOX_AC30_N_V5_TC3_S` | Normal | 5 | 3 | — | Normal channel, volume only | 0.0032 | 0.0215 | |
| `SLAMMIN_VOX_AC30_N_V5_TC5_S` | Normal | 5 | 5 | — | Normal channel, volume only | 0.003 | 0.0213 | |
| `SLAMMIN_VOX_AC30_N_V5_TC8_S` | Normal | 5 | 8 | — | Normal channel, volume only | 0.0035 | 0.0166 | |
| `SLAMMIN_VOX_AC30_N_V5_TC10_S` | Normal | 5 | 10 | — | Normal channel, volume only | 0.0109 | 0.048 | |
| `SLAMMIN_VOX_AC30_N_V7_TC0_DALLASTREBLE_7_S` | Normal | 7 | 0 | — | + Dallas Rangemaster clone (level 7) in front — Gallagher/May | 0.004 | 0.0247 | |
| `SLAMMIN_VOX_AC30_N_V8_TC0_S` | Normal | 8 | 0 | — | Normal channel, volume only | 0.0266 | 0.0468 | |
| `SLAMMIN_VOX_AC30_N_V8_TC3_S` | Normal | 8 | 3 | — | Normal channel, volume only | 0.0263 | 0.0474 | |
| `SLAMMIN_VOX_AC30_N_V8_TC5_S` | Normal | 8 | 5 | — | Normal channel, volume only | 0.0231 | 0.0392 | |
| `SLAMMIN_VOX_AC30_N_V8_TC8_S` | Normal | 8 | 8 | — | Normal channel, volume only | 0.0183 | 0.0368 | |
| `SLAMMIN_VOX_AC30_N_V8_TC10_S` | Normal | 8 | 10 | — | Normal channel, volume only | 0.0522 | 0.1334 | |
| `SLAMMIN_VOX_AC30_N_V10_TC0_DALLASTREBLE_4_S` | Normal | 10 | 0 | — | + Dallas Rangemaster clone (level 4) in front — Gallagher/May | 0.0041 | 0.0291 | |
| `SLAMMIN_VOX_AC30_N_V10_TC0_DALLASTREBLE_6_S` | Normal | 10 | 0 | — | + Dallas Rangemaster clone (level 6) in front — Gallagher/May | 0.0052 | 0.0288 | |
| `SLAMMIN_VOX_AC30_N_V10_TC0_DALLASTREBLE_8_S` | Normal | 10 | 0 | — | + Dallas Rangemaster clone (level 8) in front — Gallagher/May | 0.0099 | 0.0746 | |
| `SLAMMIN_VOX_AC30_N_V10_TC0_S` | Normal | 10 | 0 | — | Normal channel, volume only | 0.0315 | 0.0623 | |
| `SLAMMIN_VOX_AC30_N_V10_TC3_S` | Normal | 10 | 3 | — | Normal channel, volume only | 0.0261 | 0.0482 | |
| `SLAMMIN_VOX_AC30_TB_V2_TC0_B5_T5_NOON_S` | Top Boost | 2 | 0 | 5 / 5 | Top Boost EQ at noon, neutral | 0.0019 | 0.0162 | |
| `SLAMMIN_VOX_AC30_TB_V2_TC3_B5_T5_NOON_S` | Top Boost | 2 | 3 | 5 / 5 | Top Boost EQ at noon, neutral | 0.0017 | 0.0154 | |
| `SLAMMIN_VOX_AC30_TB_V2_TC5_B5_T5_NOON_S` | Top Boost | 2 | 5 | 5 / 5 | Top Boost EQ at noon, neutral | 0.0016 | 0.0127 | |
| `SLAMMIN_VOX_AC30_TB_V2_TC8_B5_T5_NOON_S` | Top Boost | 2 | 8 | 5 / 5 | Top Boost EQ at noon, neutral | 0.0015 | 0.0159 | |
| `SLAMMIN_VOX_AC30_TB_V2_TC10_B5_T5_NOON_S` | Top Boost | 2 | 10 | 5 / 5 | Top Boost EQ at noon, neutral | 0.0039 | 0.0413 | |
| `SLAMMIN_VOX_AC30_TB_V3_TC0_B1_T5_LOCUT_S` | Top Boost | 3 | 0 | 1 / 5 | bass nearly off — tight, thin low end | 0.002 | 0.0161 | |
| `SLAMMIN_VOX_AC30_TB_V3_TC0_B4_T7_BRIGHT_S` | Top Boost | 3 | 0 | 4 / 7 | treble up, bass trimmed — chime/jangle | 0.0023 | 0.0158 | |
| `SLAMMIN_VOX_AC30_TB_V3_TC0_B6_T4_WARM_S` | Top Boost | 3 | 0 | 6 / 4 | bass up, treble down — rounder | 0.002 | 0.0166 | |
| `SLAMMIN_VOX_AC30_TB_V3_TC0_B7_T7_PUSH_S` | Top Boost | 3 | 0 | 7 / 7 | bass + treble both up — fuller, pushed | 0.0027 | 0.017 | |
| `SLAMMIN_VOX_AC30_TB_V3_TC4_B1_T5_STREETS_S` | Top Boost | 3 | 4 | 1 / 5 | bass nearly off, low volume (creator's name — likely a U2 'Streets'-style tone) | 0.0019 | 0.0153 | |
| `SLAMMIN_VOX_AC30_TB_V3_TC4_B6_T4_WARM_S` | Top Boost | 3 | 4 | 6 / 4 | bass up, treble down — rounder | 0.0021 | 0.0189 | |
| `SLAMMIN_VOX_AC30_TB_V3_TC5_B4_T7_BRIGHT_S` | Top Boost | 3 | 5 | 4 / 7 | treble up, bass trimmed — chime/jangle | 0.0022 | 0.0133 | |
| `SLAMMIN_VOX_AC30_TB_V3_TC5_B7_T7_PUSH_S` | Top Boost | 3 | 5 | 7 / 7 | bass + treble both up — fuller, pushed | 0.0024 | 0.0195 | |
| `SLAMMIN_VOX_AC30_TB_V3_TC6_B1_T5_LOCUT_S` | Top Boost | 3 | 6 | 1 / 5 | bass nearly off — tight, thin low end | 0.0018 | 0.0157 | |
| `SLAMMIN_VOX_AC30_TB_V3_TC7_B6_T4_WARM_S` | Top Boost | 3 | 7 | 6 / 4 | bass up, treble down — rounder | 0.0021 | 0.0157 | |
| `SLAMMIN_VOX_AC30_TB_V3_TC8_B4_T7_BRIGHT_S` | Top Boost | 3 | 8 | 4 / 7 | treble up, bass trimmed — chime/jangle | 0.0024 | 0.0166 | |
| `SLAMMIN_VOX_AC30_TB_V3_TC8_B7_T7_PUSH_S` | Top Boost | 3 | 8 | 7 / 7 | bass + treble both up — fuller, pushed | 0.0025 | 0.0202 | |
| `SLAMMIN_VOX_AC30_TB_V5_TC0_B1_T7_LOCUT_S` | Top Boost | 5 | 0 | 1 / 7 | bass nearly off — tight, thin low end | 0.0021 | 0.0142 | |
| `SLAMMIN_VOX_AC30_TB_V5_TC0_B3_T8_BRIGHT_S` | Top Boost | 5 | 0 | 3 / 8 | treble up, bass trimmed — chime/jangle | 0.0023 | 0.0156 | |
| `SLAMMIN_VOX_AC30_TB_V5_TC0_B5_T5_NOON_S` | Top Boost | 5 | 0 | 5 / 5 | Top Boost EQ at noon, neutral | 0.0024 | 0.0195 | |
| `SLAMMIN_VOX_AC30_TB_V5_TC0_B7_T4_WARM_S` | Top Boost | 5 | 0 | 7 / 4 | bass up, treble down — rounder | 0.0022 | 0.0158 | |
| `SLAMMIN_VOX_AC30_TB_V5_TC0_B7_T8_PUSH_S` | Top Boost | 5 | 0 | 7 / 8 | bass + treble both up — fuller, pushed | 0.0039 | 0.022 | |
| `SLAMMIN_VOX_AC30_TB_V5_TC0_B10_T10_CRANKED_S` | Top Boost | 5 | 0 | 10 / 10 | bass + treble maxed | 0.0041 | 0.0234 | |
| `SLAMMIN_VOX_AC30_TB_V5_TC2_B0_T0_MIDS _S` | Top Boost | 5 | 2 | 0 / 0 | bass + treble at 0 — mid-only honk | 0.0018 | 0.0169 | |
| `SLAMMIN_VOX_AC30_TB_V5_TC3_B7_T4_WARM_S` | Top Boost | 5 | 3 | 7 / 4 | bass up, treble down — rounder | 0.0024 | 0.0219 | |
| `SLAMMIN_VOX_AC30_TB_V5_TC4_B1_T7_LOCUT_S` | Top Boost | 5 | 4 | 1 / 7 | bass nearly off — tight, thin low end | 0.0022 | 0.0117 | |
| `SLAMMIN_VOX_AC30_TB_V5_TC4_B3_T8_BRIGHT_S` | Top Boost | 5 | 4 | 3 / 8 | treble up, bass trimmed — chime/jangle | 0.0026 | 0.0133 | |
| `SLAMMIN_VOX_AC30_TB_V5_TC4_B5_T5_NOON_S` | Top Boost | 5 | 4 | 5 / 5 | Top Boost EQ at noon, neutral | 0.0024 | 0.0202 | |
| `SLAMMIN_VOX_AC30_TB_V5_TC4_B7_T8_PUSH_S` | Top Boost | 5 | 4 | 7 / 8 | bass + treble both up — fuller, pushed | 0.0043 | 0.0248 | |
| `SLAMMIN_VOX_AC30_TB_V5_TC7_B1_T7_LOCUT_S` | Top Boost | 5 | 7 | 1 / 7 | bass nearly off — tight, thin low end | 0.0019 | 0.0201 | |
| `SLAMMIN_VOX_AC30_TB_V5_TC7_B5_T5_NOON_S` | Top Boost | 5 | 7 | 5 / 5 | Top Boost EQ at noon, neutral | 0.0025 | 0.0171 | |
| `SLAMMIN_VOX_AC30_TB_V5_TC7_B7_T4_WARM_S` | Top Boost | 5 | 7 | 7 / 4 | bass up, treble down — rounder | 0.0022 | 0.0144 | |
| `SLAMMIN_VOX_AC30_TB_V5_TC7_B7_T8_PUSH_S` | Top Boost | 5 | 7 | 7 / 8 | bass + treble both up — fuller, pushed | 0.0041 | 0.028 | |
| `SLAMMIN_VOX_AC30_TB_V5_TC8_B3_T8_BRIGHT_S` | Top Boost | 5 | 8 | 3 / 8 | treble up, bass trimmed — chime/jangle | 0.0025 | 0.0221 | |
| `SLAMMIN_VOX_AC30_TB_V7_TC0_B1_T6_LOCUT_S` | Top Boost | 7 | 0 | 1 / 6 | bass nearly off — tight, thin low end | 0.0023 | 0.0198 | |
| `SLAMMIN_VOX_AC30_TB_V7_TC0_B2_T7_BRIGHT_S` | Top Boost | 7 | 0 | 2 / 7 | treble up, bass trimmed — chime/jangle | 0.0025 | 0.0135 | |
| `SLAMMIN_VOX_AC30_TB_V7_TC0_B5_T5_NOON_S` | Top Boost | 7 | 0 | 5 / 5 | Top Boost EQ at noon, neutral | 0.0027 | 0.0231 | |
| `SLAMMIN_VOX_AC30_TB_V7_TC0_B7_T3_WARM_S` | Top Boost | 7 | 0 | 7 / 3 | bass up, treble down — rounder | 0.0027 | 0.0242 | |
| `SLAMMIN_VOX_AC30_TB_V7_TC0_B7_T8_PUSH_S` | Top Boost | 7 | 0 | 7 / 8 | bass + treble both up — fuller, pushed | 0.004 | 0.0207 | |
| `SLAMMIN_VOX_AC30_TB_V7_TC0_B10_T10_CRANKED_S` | Top Boost | 7 | 0 | 10 / 10 | bass + treble maxed | 0.0048 | 0.0265 | |
| `SLAMMIN_VOX_AC30_TB_V7_TC4_B1_T6_LOCUT_S` | Top Boost | 7 | 4 | 1 / 6 | bass nearly off — tight, thin low end | 0.0022 | 0.0189 | |
| `SLAMMIN_VOX_AC30_TB_V7_TC4_B2_T7_BRIGHT_S` | Top Boost | 7 | 4 | 2 / 7 | treble up, bass trimmed — chime/jangle | 0.0023 | 0.0207 | |
| `SLAMMIN_VOX_AC30_TB_V7_TC4_B5_T5_NOON_S` | Top Boost | 7 | 4 | 5 / 5 | Top Boost EQ at noon, neutral | 0.0027 | 0.024 | |
| `SLAMMIN_VOX_AC30_TB_V7_TC5_B7_T3_WARM_S` | Top Boost | 7 | 5 | 7 / 3 | bass up, treble down — rounder | 0.0032 | 0.0196 | |
| `SLAMMIN_VOX_AC30_TB_V7_TC5_B7_T8_PUSH_S` | Top Boost | 7 | 5 | 7 / 8 | bass + treble both up — fuller, pushed | 0.0036 | 0.0232 | |
| `SLAMMIN_VOX_AC30_TB_V7_TC5_B10_T10_CRANKED_S` | Top Boost | 7 | 5 | 10 / 10 | bass + treble maxed | 0.0055 | 0.0258 | |
| `SLAMMIN_VOX_AC30_TB_V7_TC7_B1_T6_LOCUT_S` | Top Boost | 7 | 7 | 1 / 6 | bass nearly off — tight, thin low end | 0.0023 | 0.0204 | |
| `SLAMMIN_VOX_AC30_TB_V7_TC7_B2_T7_BRIGHT_S` | Top Boost | 7 | 7 | 2 / 7 | treble up, bass trimmed — chime/jangle | 0.0021 | 0.0134 | |
| `SLAMMIN_VOX_AC30_TB_V7_TC7_B5_T5_NOON_S` | Top Boost | 7 | 7 | 5 / 5 | Top Boost EQ at noon, neutral | 0.0031 | 0.0303 | |
| `SLAMMIN_VOX_AC30_TB_V7_TC7_B7_T3_WARM_S` | Top Boost | 7 | 7 | 7 / 3 | bass up, treble down — rounder | 0.0024 | 0.0239 | |
| `SLAMMIN_VOX_AC30_TB_V7_TC8_B7_T8_PUSH_S` | Top Boost | 7 | 8 | 7 / 8 | bass + treble both up — fuller, pushed | 0.0033 | 0.0211 | |
| `SLAMMIN_VOX_AC30_TB_V8_TC0_B1_T6_LOCUT_S` | Top Boost | 8 | 0 | 1 / 6 | bass nearly off — tight, thin low end | 0.0026 | 0.0182 | |
| `SLAMMIN_VOX_AC30_TB_V8_TC0_B3_T8_BRIGHT_S` | Top Boost | 8 | 0 | 3 / 8 | treble up, bass trimmed — chime/jangle | 0.0042 | 0.0223 | |
| `SLAMMIN_VOX_AC30_TB_V8_TC0_B5_T5_NOON_S` | Top Boost | 8 | 0 | 5 / 5 | Top Boost EQ at noon, neutral | 0.0025 | 0.0237 | |
| `SLAMMIN_VOX_AC30_TB_V8_TC0_B7_T4_WARM_S` | Top Boost | 8 | 0 | 7 / 4 | bass up, treble down — rounder | 0.0031 | 0.0234 | |
| `SLAMMIN_VOX_AC30_TB_V8_TC0_B7_T8_PUSH_S` | Top Boost | 8 | 0 | 7 / 8 | bass + treble both up — fuller, pushed | 0.0039 | 0.0259 | |
| `SLAMMIN_VOX_AC30_TB_V8_TC0_B10_T10_CRANKED_S` | Top Boost | 8 | 0 | 10 / 10 | bass + treble maxed | 0.0055 | 0.0421 | |
| `SLAMMIN_VOX_AC30_TB_V8_TC2_B0_T0_MIDS_S` | Top Boost | 8 | 2 | 0 / 0 | bass + treble at 0 — mid-only honk | 0.0026 | 0.0209 | |
| `SLAMMIN_VOX_AC30_TB_V8_TC4_B1_T6_LOCUT_S` | Top Boost | 8 | 4 | 1 / 6 | bass nearly off — tight, thin low end | 0.0023 | 0.0174 | |
| `SLAMMIN_VOX_AC30_TB_V8_TC4_B5_T5_NOON_S` | Top Boost | 8 | 4 | 5 / 5 | Top Boost EQ at noon, neutral | 0.0086 | 0.0348 | |
| `SLAMMIN_VOX_AC30_TB_V8_TC5_B3_T8_BRIGHT_S` | Top Boost | 8 | 5 | 3 / 8 | treble up, bass trimmed — chime/jangle | 0.0037 | 0.0224 | |
| `SLAMMIN_VOX_AC30_TB_V8_TC5_B7_T4_WARM_S` | Top Boost | 8 | 5 | 7 / 4 | bass up, treble down — rounder | 0.0037 | 0.0215 | |
| `SLAMMIN_VOX_AC30_TB_V8_TC5_B7_T8_PUSH_S` | Top Boost | 8 | 5 | 7 / 8 | bass + treble both up — fuller, pushed | 0.005 | 0.0364 | |
| `SLAMMIN_VOX_AC30_TB_V8_TC7_B3_T8_BRIGHT_S` | Top Boost | 8 | 7 | 3 / 8 | treble up, bass trimmed — chime/jangle | 0.0036 | 0.0185 | |
| `SLAMMIN_VOX_AC30_TB_V8_TC7_B5_T5_NOON_S` | Top Boost | 8 | 7 | 5 / 5 | Top Boost EQ at noon, neutral | 0.0031 | 0.0232 | |
| `SLAMMIN_VOX_AC30_TB_V8_TC7_B7_T8_PUSH_S` | Top Boost | 8 | 7 | 7 / 8 | bass + treble both up — fuller, pushed | 0.004 | 0.0317 | |
| `SLAMMIN_VOX_AC30_TB_V8_TC7_B10_T10_CRANKED_S` | Top Boost | 8 | 7 | 10 / 10 | bass + treble maxed | 0.0049 | 0.0233 | |
| `SLAMMIN_VOX_AC30_TB_V8_TC8_B1_T6_LOCUT_S` | Top Boost | 8 | 8 | 1 / 6 | bass nearly off — tight, thin low end | 0.0027 | 0.0183 | |
| `SLAMMIN_VOX_AC30_TB_V8_TC8_B7_T4_WARM_S` | Top Boost | 8 | 8 | 7 / 4 | bass up, treble down — rounder | 0.003 | 0.0256 | |
| `SLAMMIN_VOX_AC30_TB_V10_TC0_B1_T6_LOCUT_S` | Top Boost | 10 | 0 | 1 / 6 | bass nearly off — tight, thin low end | 0.0027 | 0.0203 | |
| `SLAMMIN_VOX_AC30_TB_V10_TC0_B5_T6_NOONISH_S` | Top Boost | 10 | 0 | 5 / 6 | near-noon EQ, treble slightly up | 0.0029 | 0.0284 | |
| `SLAMMIN_VOX_AC30_TB_V10_TC0_B10_T10_FULLCRANK_S` | Top Boost | 10 | 0 | 10 / 10 | volume, bass, treble all maxed | 0.005 | 0.0588 | |
| `SLAMMIN_VOX_AC30_TB_V10_TC6_B1_T6_LOCUT_S` | Top Boost | 10 | 6 | 1 / 6 | bass nearly off — tight, thin low end | 0.0026 | 0.0165 | |
| `SLAMMIN_VOX_AC30_TB_V10_TC6_B10_T10_FULLCRANK_S` | Top Boost | 10 | 6 | 10 / 10 | volume, bass, treble all maxed | 0.0047 | 0.033 | |
| `SLAMMIN_VOX_AC30_TB_V10_TC7_B5_T6_NOONISH_S` | Top Boost | 10 | 7 | 5 / 6 | near-noon EQ, treble slightly up | 0.0038 | 0.0308 | |

## Pairing notes

- **IR:** the natural pairing is a VOX 2x12 with Celestion Alnico Blues. The Origin Effects "British Alnico" IR (Vox AC30 2x12, 1964 Silver Alnico) in `IRs/ir.md` is the closest one already documented.
- **Covers:** the AC30 slot on the priority list (Lion, Creep, Mary Jane's Last Dance, Praise, When Wind Meets Fire, You Don't Know How It Feels).
- **Starting points:** Top Boost V3-V5 BRIGHT or NOON for worship/Petty chime. Top Boost V7-V8 PUSH for Petty/Campbell crunch. Normal V3 for glassy clean. Normal plus the Dallas booster for Brian May lead.
