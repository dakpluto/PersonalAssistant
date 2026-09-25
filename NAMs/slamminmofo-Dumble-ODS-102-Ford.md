# Dumble ODS #102 Ford [Hyper Accuracy+] — slamminmofo

- **Source:** https://www.tone3000.com/tones/dumble-ods-102-ford-hyper-accuracy-30435
- **Creator:** @slamminmofo (verified; same creator as the AC30 pack)
- **Type:** NAM, **amp only**: the full amp, power section included, into a Suhr Reactive Load with no cab/mic. Always pair with an IR when building the snaptone.
- **Amp:** a **clone** of Dumble Overdrive Special #102, the Robben Ford ODS, not an original Dumble. Captured from the normal input (not the FET input) "to preserve the tube tone as much as possible." Dialed in with a Strat, a Tele and a humbucker SG; the creator warns some captures have too much low end for humbuckers and others are too bright for a Strat, so pick by ear for your guitar.
- **Switches:** Rock (tone stack change: more gain and top end; off = "Jazz"), Mids, Bright.
- **Signal chain:** UA Apollo X8 line out → Lehle P-Split III reamp box → ODS #102 clone → Suhr Reactive Load → Apollo X8 Hi-Z in. Calibration +12.4 dBu (metadata included). TTS v10 test signal, low aliasing.
- **License:** T3K (free to use and publish recordings; no redistributing the files).
- **Tags:** blues, clean, crunch, high gain, jazz, rock, tube
- **Popularity:** 33,610 downloads, 914 likes (scraped 2026-09-25). Published 2025-06-20.
- **Versions:** 66 unique captures, each as Standard (`_S`), with xStandard (`_XS`, more accurate, same CPU) and Complex (`_C`, 1400 epochs, most accurate, heaviest CPU) in the download; the creator recommends Complex, else xStandard. The page lists all 66 `_S` files and 17 of the `_XS` files; the rest are only in the download. Tone3000 counts 298 files total (66 A1, 83 A2, 149 custom).

## Naming scheme

`SLAMMIN_DUMBLE_FORD_<CLN|OD>_[PAB_][HIGH_MV_|VHIGH_MV_]<label>_<S|XS|C>`. **No knob settings in the names.** The creator notes the differences between neighboring captures can be small ("the bass knob is turned down a couple steps or the input gain is at 4.5 instead of 3").
- `CLN` = clean channel, `OD` = overdrive channel.
- `PAB` = the PAB switch engaged. On ODS-style amps that's the pre-amp boost/bypass switch; the creator doesn't define it, so treat the exact function as unconfirmed.
- `HIGH_MV` / `VHIGH_MV` = master volume high / very high, so more power-amp contribution.
- Per the creator: `FORD` labels = Rock switch only; `CARLTON` labels = Rock + Mids; `ALLSWITCHES` / `_ALL` = Rock + Mids + Bright.
- Other labels (`SMOOTH`, `BLUESY`, `THICK_LOGAIN`, `SPARKLY`...) are the creator's tone descriptions. Some are artist nods: `OPEN_ROBBEN` (Robben Ford), `OPEN_LARRY` / `CARLTON` (Larry Carlton), `CARLOSANTA` (presumably Carlos Santana). `MICK`, `HERMANS` and `CINNAMON` aren't explained.

## Models (83 listed)

Sorted by channel, then Standard before xStandard, then NAM gain (0-1, how driven; from each file's metadata via `t3k_scrape.py --meta`). The gain estimate separates the clean channel well (0.33-0.78) but compresses on the OD channel (0.75-0.93), so use it only as a rough order there. Loudness in dB. ESR = training error, lower = closer to the real amp; all are excellent (under 0.01) on A2-Full.

| File | Channel | PAB | Master | Switches (per label) | Label | Version | NAM gain | Loudness | ESR A2-Full | ESR A2-Lite | Slot |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `SLAMMIN_DUMBLE_FORD_CLN_WARM_S` | Clean | — | — | — | WARM | S | 0.33 | -22.6 | 0.0016 | 0.011 | |
| `SLAMMIN_DUMBLE_FORD_CLN_KLEAN_S` | Clean | — | — | — | KLEAN | S | 0.37 | -22.5 | 0.0016 | 0.0067 | |
| `SLAMMIN_DUMBLE_FORD_CLN_BALANCED_S` | Clean | — | — | — | BALANCED | S | 0.49 | -21.5 | 0.0017 | 0.0112 | |
| `SLAMMIN_DUMBLE_FORD_CLN_CARLTONISH_2_S` | Clean | — | — | Rock+Mids (Carlton) | CARLTONISH_2 | S | 0.53 | -21.5 | 0.0018 | 0.0104 | |
| `SLAMMIN_DUMBLE_FORD_CLN_SCOOP_S` | Clean | — | — | — | SCOOP | S | 0.54 | -21.4 | 0.0016 | 0.0184 | |
| `SLAMMIN_DUMBLE_FORD_CLN_TREBLE_S` | Clean | — | — | — | TREBLE | S | 0.63 | -20.6 | 0.0015 | 0.0154 | |
| `SLAMMIN_DUMBLE_FORD_CLN_FORDISH_S` | Clean | — | — | — | FORDISH | S | 0.63 | -20.7 | 0.0022 | 0.0122 | |
| `SLAMMIN_DUMBLE_FORD_CLN_CARLTONISH_S` | Clean | — | — | Rock+Mids (Carlton) | CARLTONISH | S | 0.68 | -20.8 | 0.0021 | 0.0098 | |
| `SLAMMIN_DUMBLE_FORD_CLN_MAIN_WARM_S` | Clean | — | — | — | MAIN_WARM | S | 0.71 | -20.4 | 0.0021 | 0.0128 | |
| `SLAMMIN_DUMBLE_FORD_CLN_MAIN_S` | Clean | — | — | — | MAIN | S | 0.76 | -20.2 | 0.0022 | 0.0112 | |
| `SLAMMIN_DUMBLE_FORD_CLN_PAB_CRUNCHY_S` | Clean | On | — | — | CRUNCHY | S | 0.76 | -19.7 | 0.003 | 0.0181 | |
| `SLAMMIN_DUMBLE_FORD_CLN_GRITTY_S` | Clean | — | — | — | GRITTY | S | 0.78 | -20.3 | 0.0028 | 0.0151 | |
| `SLAMMIN_DUMBLE_FORD_CLN_HIGHMV_CINNAMON_S` | Clean | — | High | — | CINNAMON | S | 0.79 | -20.2 | 0.0032 | 0.0129 | |
| `SLAMMIN_DUMBLE_FORD_CLN_HIGHMV_LOCUTDRIVE_S` | Clean | — | High | — | LOCUTDRIVE | S | 0.80 | -20.1 | 0.0028 | 0.0177 | |
| `SLAMMIN_DUMBLE_FORD_OD_CARLTON_4_S` | Overdrive | — | — | Rock+Mids (Carlton) | CARLTON_4 | S | 0.75 | -20.3 | 0.0013 | 0.0093 | |
| `SLAMMIN_DUMBLE_FORD_OD_CARLTON_3_S` | Overdrive | — | — | Rock+Mids (Carlton) | CARLTON_3 | S | 0.78 | -23.6 | 0.0013 | 0.0093 | |
| `SLAMMIN_DUMBLE_FORD_OD_HERMANS_S` | Overdrive | — | — | — | HERMANS | S | 0.78 | -22.1 | 0.0013 | 0.0133 | |
| `SLAMMIN_DUMBLE_FORD_OD_MICK_2_S` | Overdrive | — | — | — | MICK_2 | S | 0.78 | -20.8 | 0.002 | 0.0159 | |
| `SLAMMIN_DUMBLE_FORD_OD_HERMANS_2_S` | Overdrive | — | — | — | HERMANS_2 | S | 0.79 | -21.3 | 0.0015 | 0.011 | |
| `SLAMMIN_DUMBLE_FORD_OD_PAB_MAIN_S` | Overdrive | On | — | — | MAIN | S | 0.79 | -20.0 | 0.0015 | 0.0129 | |
| `SLAMMIN_DUMBLE_FORD_OD_PAB_MICK_2_S` | Overdrive | On | — | — | MICK_2 | S | 0.79 | -20.6 | 0.0015 | 0.0207 | |
| `SLAMMIN_DUMBLE_FORD_OD_MAIN_S` | Overdrive | — | — | — | MAIN | S | 0.80 | -20.0 | 0.0016 | 0.014 | |
| `SLAMMIN_DUMBLE_FORD_OD_FORD_S` | Overdrive | — | — | Rock (Ford) | FORD | S | 0.80 | -20.6 | 0.0019 | 0.0117 | |
| `SLAMMIN_DUMBLE_FORD_OD_CARLTON_2_S` | Overdrive | — | — | Rock+Mids (Carlton) | CARLTON_2 | S | 0.81 | -20.4 | 0.0012 | 0.0177 | |
| `SLAMMIN_DUMBLE_FORD_OD_PAB_JAZZ_S` | Overdrive | On | — | — | JAZZ | S | 0.81 | -20.1 | 0.0021 | 0.0128 | |
| `SLAMMIN_DUMBLE_FORD_OD_THICK_LOGAIN_S` | Overdrive | — | — | — | THICK_LOGAIN | S | 0.81 | -20.4 | 0.0013 | 0.0121 | |
| `SLAMMIN_DUMBLE_FORD_OD_PAB_CLEAR_DRIVE_S` | Overdrive | On | — | — | CLEAR_DRIVE | S | 0.81 | -20.8 | 0.0015 | 0.0133 | |
| `SLAMMIN_DUMBLE_FORD_OD_OPEN_LARRY_S` | Overdrive | — | — | — | OPEN_LARRY | S | 0.81 | -20.3 | 0.0011 | 0.0118 | |
| `SLAMMIN_DUMBLE_FORD_OD_FORD_2_S` | Overdrive | — | — | Rock (Ford) | FORD_2 | S | 0.81 | -18.6 | 0.0015 | 0.0146 | |
| `SLAMMIN_DUMBLE_FORD_OD_PAB_MAIN_GAINY_S` | Overdrive | On | — | — | MAIN_GAINY | S | 0.81 | -20.2 | 0.0022 | 0.0193 | |
| `SLAMMIN_DUMBLE_FORD_OD_SMOOTH_2_S` | Overdrive | — | — | — | SMOOTH_2 | S | 0.81 | -20.7 | 0.0022 | 0.0192 | |
| `SLAMMIN_DUMBLE_FORD_OD_PAB_BRITE_S` | Overdrive | On | — | — | BRITE | S | 0.81 | -19.5 | 0.0016 | 0.0144 | |
| `SLAMMIN_DUMBLE_FORD_OD_HIGH_MV_SCOOP_S` | Overdrive | — | High | — | SCOOP | S | 0.82 | -20.0 | 0.0021 | 0.0119 | |
| `SLAMMIN_DUMBLE_FORD_OD_SMOOTH_S` | Overdrive | — | — | — | SMOOTH | S | 0.82 | -20.6 | 0.0018 | 0.0161 | |
| `SLAMMIN_DUMBLE_FORD_OD_BLUESY_S` | Overdrive | — | — | — | BLUESY | S | 0.82 | -20.3 | 0.0015 | 0.0152 | |
| `SLAMMIN_DUMBLE_FORD_OD_PAB_HIGAIN_ALT_S` | Overdrive | On | — | — | HIGAIN_ALT | S | 0.82 | -19.9 | 0.0019 | 0.0222 | |
| `SLAMMIN_DUMBLE_FORD_OD_CRUNCHY_MIDS_S` | Overdrive | — | — | — | CRUNCHY_MIDS | S | 0.82 | -21.5 | 0.0018 | 0.0198 | |
| `SLAMMIN_DUMBLE_FORD_OD_PAB_MICK_S` | Overdrive | On | — | — | MICK | S | 0.83 | -23.3 | 0.0024 | 0.0307 | |
| `SLAMMIN_DUMBLE_FORD_OD_BRIGHT_LOGAIN_S` | Overdrive | — | — | — | BRIGHT_LOGAIN | S | 0.83 | -20.2 | 0.0016 | 0.0164 | |
| `SLAMMIN_DUMBLE_FORD_OD_CRUNCHY_ALLSWITCHES_S` | Overdrive | — | — | Rock+Mids+Bright | CRUNCHY_ALLSWITCHES | S | 0.83 | -20.7 | 0.0016 | 0.0117 | |
| `SLAMMIN_DUMBLE_FORD_OD_PAB_HIGAIN_S` | Overdrive | On | — | — | HIGAIN | S | 0.83 | -21.1 | 0.003 | 0.0352 | |
| `SLAMMIN_DUMBLE_FORD_OD_PAB_HIGH_MV_MELLOW_S` | Overdrive | On | High | — | MELLOW | S | 0.83 | -21.4 | 0.0027 | 0.0178 | |
| `SLAMMIN_DUMBLE_FORD_OD_FORD_5_S` | Overdrive | — | — | Rock (Ford) | FORD_5 | S | 0.83 | -20.8 | 0.0016 | 0.0123 | |
| `SLAMMIN_DUMBLE_FORD_OD_BRIGHT_GAINY_S` | Overdrive | — | — | — | BRIGHT_GAINY | S | 0.83 | -20.3 | 0.0014 | 0.0124 | |
| `SLAMMIN_DUMBLE_FORD_OD_BLUESY_2_S` | Overdrive | — | — | — | BLUESY_2 | S | 0.84 | -19.7 | 0.0024 | 0.0228 | |
| `SLAMMIN_DUMBLE_FORD_OD_FORD_6_S` | Overdrive | — | — | Rock (Ford) | FORD_6 | S | 0.84 | -19.9 | 0.0014 | 0.0088 | |
| `SLAMMIN_DUMBLE_FORD_OD_FORD_3_S` | Overdrive | — | — | Rock (Ford) | FORD_3 | S | 0.84 | -20.0 | 0.0018 | 0.0139 | |
| `SLAMMIN_DUMBLE_FORD_OD_FORD_4_S` | Overdrive | — | — | Rock (Ford) | FORD_4 | S | 0.84 | -20.2 | 0.0017 | 0.0111 | |
| `SLAMMIN_DUMBLE_FORD_OD_CRUNCHY_ALLSWITCHES_2_S` | Overdrive | — | — | Rock+Mids+Bright | CRUNCHY_ALLSWITCHES_2 | S | 0.84 | -21.0 | 0.0015 | 0.0146 | |
| `SLAMMIN_DUMBLE_FORD_OD_PAB_SPARKLY_S` | Overdrive | On | — | — | SPARKLY | S | 0.85 | -20.8 | 0.005 | 0.02 | |
| `SLAMMIN_DUMBLE_FORD_OD_HIGH_MV_MIDS_S` | Overdrive | — | High | — | MIDS | S | 0.85 | -20.2 | 0.0019 | 0.0151 | |
| `SLAMMIN_DUMBLE_FORD_OD_PAB_HIGH_MV_SHARP_S` | Overdrive | On | High | — | SHARP | S | 0.85 | -19.6 | 0.002 | 0.0151 | |
| `SLAMMIN_DUMBLE_FORD_OD_PAB_CRUNCH_S` | Overdrive | On | — | — | CRUNCH | S | 0.85 | -19.4 | 0.002 | 0.0186 | |
| `SLAMMIN_DUMBLE_FORD_OD_OPEN_ROBBEN_S` | Overdrive | — | — | — | OPEN_ROBBEN | S | 0.85 | -20.9 | 0.0017 | 0.019 | |
| `SLAMMIN_DUMBLE_FORD_OD_PAB_HIGH_MV_S` | Overdrive | On | High | — | HIGH_MV | S | 0.86 | -16.8 | 0.0021 | 0.0246 | |
| `SLAMMIN_DUMBLE_FORD_OD_PAB_THICK_S` | Overdrive | On | — | — | THICK | S | 0.86 | -18.8 | 0.0019 | 0.0146 | |
| `SLAMMIN_DUMBLE_FORD_OD_PAB_DRIVE_S` | Overdrive | On | — | — | DRIVE | S | 0.86 | -23.0 | 0.0023 | 0.0301 | |
| `SLAMMIN_DUMBLE_FORD_OD_HIGH_MV_ALLSWITCHES_S` | Overdrive | — | High | Rock+Mids+Bright | ALLSWITCHES | S | 0.86 | -20.0 | 0.0029 | 0.0265 | |
| `SLAMMIN_DUMBLE_FORD_OD_CARLOSANTA_S` | Overdrive | — | — | — | CARLOSANTA | S | 0.86 | -22.1 | 0.0016 | 0.0137 | |
| `SLAMMIN_DUMBLE_FORD_OD_HIGH_MV_BRIGHT_S` | Overdrive | — | High | — | BRIGHT | S | 0.86 | -20.2 | 0.0028 | 0.0361 | |
| `SLAMMIN_DUMBLE_FORD_OD_VHIGH_MV_HIGAIN_S` | Overdrive | — | Very high | — | HIGAIN | S | 0.86 | -21.1 | 0.0042 | 0.0281 | |
| `SLAMMIN_DUMBLE_FORD_OD_CRUNCHY_ALLSWITCHES_3_S` | Overdrive | — | — | Rock+Mids+Bright | CRUNCHY_ALLSWITCHES_3 | S | 0.86 | -21.7 | 0.0036 | 0.0176 | |
| `SLAMMIN_DUMBLE_FORD_OD_VHIGH_MV_HIGAIN_ALL_S` | Overdrive | — | Very high | Rock+Mids+Bright | HIGAIN_ALL | S | 0.86 | -21.2 | 0.0036 | 0.0234 | |
| `SLAMMIN_DUMBLE_FORD_OD_VHIGH_MV_HIGAIN_TIGHT_S` | Overdrive | — | Very high | — | HIGAIN_TIGHT | S | 0.87 | -21.6 | 0.0078 | 0.0397 | |
| `SLAMMIN_DUMBLE_FORD_OD_HIGH_MV_FAT_S` | Overdrive | — | High | — | FAT | S | 0.87 | -21.2 | 0.0034 | 0.0194 | |
| `SLAMMIN_DUMBLE_FORD_OD_CARLTON_S` | Overdrive | — | — | Rock+Mids (Carlton) | CARLTON | S | 0.93 | -22.1 | 0.0026 | 0.0142 | |
| `SLAMMIN_DUMBLE_FORD_OD_PAB_BRITE_XS` | Overdrive | On | — | — | BRITE | XS | 0.79 | -19.2 | 0.0022 | 0.0082 | |
| `SLAMMIN_DUMBLE_FORD_OD_PAB_CLEAR_DRIVE_XS` | Overdrive | On | — | — | CLEAR_DRIVE | XS | 0.79 | -20.5 | 0.0018 | 0.0104 | |
| `SLAMMIN_DUMBLE_FORD_OD_PAB_CRUNCH_XS` | Overdrive | On | — | — | CRUNCH | XS | 0.80 | -19.1 | 0.0021 | 0.0117 | |
| `SLAMMIN_DUMBLE_FORD_OD_MAIN_XS` | Overdrive | — | — | — | MAIN | XS | 0.80 | -20.0 | 0.0017 | 0.0106 | |
| `SLAMMIN_DUMBLE_FORD_OD_PAB_HIGAIN_ALT_XS` | Overdrive | On | — | — | HIGAIN_ALT | XS | 0.81 | -19.6 | 0.0019 | 0.0128 | |
| `SLAMMIN_DUMBLE_FORD_OD_HIGH_MV_SCOOP_XS` | Overdrive | — | High | — | SCOOP | XS | 0.81 | -19.9 | 0.0024 | 0.0137 | |
| `SLAMMIN_DUMBLE_FORD_OD_PAB_MAIN_GAINY_XS` | Overdrive | On | — | — | MAIN_GAINY | XS | 0.82 | -20.4 | 0.0032 | 0.0164 | |
| `SLAMMIN_DUMBLE_FORD_OD_PAB_MICK_XS` | Overdrive | On | — | — | MICK | XS | 0.82 | -23.4 | 0.0014 | 0.0061 | |
| `SLAMMIN_DUMBLE_FORD_OD_THICK_LOGAIN_XS` | Overdrive | — | — | — | THICK_LOGAIN | XS | 0.82 | -20.5 | 0.0021 | 0.0101 | |
| `SLAMMIN_DUMBLE_FORD_OD_PAB_SPARKLY_XS` | Overdrive | On | — | — | SPARKLY | XS | 0.83 | -20.7 | 0.004 | 0.0201 | |
| `SLAMMIN_DUMBLE_FORD_OD_HIGH_MV_FAT_XS` | Overdrive | — | High | — | FAT | XS | 0.84 | -20.8 | 0.0022 | 0.0115 | |
| `SLAMMIN_DUMBLE_FORD_OD_HIGH_MV_ALLSWITCHES_XS` | Overdrive | — | High | Rock+Mids+Bright | ALLSWITCHES | XS | 0.85 | -20.0 | 0.0032 | 0.0163 | |
| `SLAMMIN_DUMBLE_FORD_OD_PAB_HIGH_MV_MELLOW_XS` | Overdrive | On | High | — | MELLOW | XS | 0.85 | -21.4 | 0.0029 | 0.0119 | |
| `SLAMMIN_DUMBLE_FORD_OD_PAB_THICK_XS` | Overdrive | On | — | — | THICK | XS | 0.86 | -18.7 | 0.0021 | 0.0101 | |
| `SLAMMIN_DUMBLE_FORD_OD_PAB_HIGH_MV_XS` | Overdrive | On | High | — | HIGH_MV | XS | 0.86 | -17.2 | 0.0025 | 0.0164 | |
| `SLAMMIN_DUMBLE_FORD_OD_PAB_HIGAIN_XS` | Overdrive | On | — | — | HIGAIN | XS | 0.87 | -21.1 | 0.003 | 0.0125 | |
| `SLAMMIN_DUMBLE_FORD_OD_VHIGH_MV_HIGAIN_ALL_XS` | Overdrive | — | Very high | Rock+Mids+Bright | HIGAIN_ALL | XS | 0.89 | -21.6 | 0.0097 | 0.0432 | |

Switch settings are only filled in where the label maps to the creator's own naming rules; blank doesn't mean off.

## Pairing notes

- **IR:** EVM12L speakers are the classic Dumble pairing. The Bogner 2x12 EVM12L pack (`IRs/maestrodimusica-Bogner-2x12-EVM12L.md`) is the direct match, with EVM112 (User IR 5) as a 1x12 alternative. For fatter OD leads, a V30 4x12 (`IRs/outmodedelectronics-Mesa-4x12-V30-SM57.md`) also works.
- **Covers:** replaces the Twin stand-in for the Dumble/Two-Rock slot (the Mayer songs: Everyday I Have the Blues, Waiting on the World to Change, Your Body Is a Wonderland). The clean channel is the Mayer tone; the lowest-gain files are `CLN_KLEAN` and `CLN_WARM`, with `CLN_BALANCED` a touch hotter. The OD channel's smooth, singing leads also fit the Gilmour-style Riverside lead (We Got Used to Us) and In Two Minds better than the preamp-only Rectifier did.
- **Starting points:** `CLN_BALANCED` for Mayer rhythm; `CLN_KLEAN` if it breaks up too early with your pickups. `OD_SMOOTH` or `OD_THICK_LOGAIN` for smooth sustaining leads; `OD_OPEN_ROBBEN` for the classic Ford lead.
