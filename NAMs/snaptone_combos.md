# Snaptone combo plan (NAM + IR)

Drafted 2026-09-25 (G6/G13 updated the same day when the Dumble ODS pack was added) from the NAM/IR pack files in `NAMs/` and `IRs/`, mapped against every existing patch using the per-song "ideal rig" picks from the same session. One combo per patch: a GP-5 patch has a single N->S block, so any clean-vs-dirty CTL switching still comes from DST/PRE, not from swapping snaptones. Counts are unique songs/parts (the one Brooks & Dunn GP-5-only duplicate is counted once): 114 bass, 44 guitar. Every patch is covered by exactly one combo. Record the SnapTone slot (1-80) in the Slot column once a combo is loaded. Bass B1-B10 loaded 2026-09-25 into slots 51-60 (the Snaptone name column is the name each was saved under on the device); guitar G1-G20 loaded into slots 61-80. All 30 slots from 51 to 80 were filled; the original G18 (CrankedTwin, slot 78) was dropped 2026-10-01, and the four AC30 combos (G7, G10, G14, G17) were dropped the same day. B10 (slot 60) was dropped 2026-10-02, so 24 combos are usable. On 2026-10-04 slot 78 was reloaded with a new G18, Fen65DlxKl (a '65 Deluxe Reverb boosted by a Klon), and slot 77 with a new G17, Frd100TSSS (a Tube Screamer-boosted Friedman BE-100). Both are full rig captures with the cab built in. Slot 74 was reloaded the same day with a new G14, CleanPlexi (a clean-boosted JTM45 paired with a Matchless ES212 Greenback cab). Michael checked all three the same day: each is very nice at VOL 70 and **usable**. Slot 70 was also reloaded that day with a new G10, an EVH 5150 I capture, which Michael checked and approved at VOL 70. That makes 28 usable combos.

## Caveats

- **Origin Effects IRs** (Brown Deluxe, British Alnico, British Straight): Michael confirmed 2026-09-25 he has the files, so the primary IR in each combo is the one used. G7, G9 and G10 were built with the Origin Effects IR, not the fallback. The fallbacks listed for the combos that aren't loaded yet are only there in case a file turns up missing.
- **Preamp-only NAMs:** the SVT-CL and Rectifier packs have no power-amp stage (see their pack files). That affects B3 and B5-B9 on bass and G12 and G16 on guitar. Test those combos in the builder before committing slots. On guitar, both play fine on the device: G12 and G16 passed the 2026-10-01 VOL audit, and Michael singled out G12 RectifierCrunch as sounding really nice. A Higher/Cassie rebuild around it, or a new Rectifier-rhythm patch, is worth considering.
- **Provenance:** `Ampeg SVT Bright Beta52` and `Ampeg SVT D-I-Out` come from the unknown-provenance pack (`IRs/morenoteslesstalk-Ampeg-SVT-8x10-4x10-DI.md`), so they're fine for personal use but not for anything published.
- **No NAM yet** for Mesa Mark, Soldano, Laney, tweed Bassman, JC-120, Mesa bass, Acoustic 360 or Hiwatt. Those songs use the nearest stand-in below and are worth revisiting if packs turn up.

## Patch pass 2026-09-25

NAMs were re-enabled and every existing patch was re-checked against these combos. 152 patches moved to their snaptone. Changes from the tables below:

- **A Day in the Life (bass)** moved from B4 to **B2** (AvalonAD2022). Its write-up argues for a DI'd, hi-fi Rickenbacker sound, which the DI capture fits better than the fuller B-15.
- **Kept on the GP-5's own AMP + IR** (7 patches):
  - Pull Me Under and The Spirit Carries On (bass): Mess Bass directly models Myung's Mesa rig. B6 was a stand-in.
  - Danger Zone (guitar): Solo100 OD directly models the Soldano. G15 was a JCM800 stand-in, and it's high-gain.
  - (I've Had) The Time of My Life (guitar): J-120 CL directly models the JC-120. G1 was a stand-in.
  - Werewolves of London (guitar): Bellman 59N directly models the '59 Bassman. G5 was a stand-in.
  - Higher and Cassie (guitar): CTL off is a clean part on a clean amp, and G12 is a crunch capture.
- So **G12 (RectifierCrunch) and G15 (80sLeadJCM800) aren't used by any patch right now.** They stay loaded for future high-gain patches, or for a Higher/Cassie rebuild around a Rectifier rhythm tone.

## Patch pass 2026-10-04

Four guitar patches moved to the new or newly cleared snaptones. The previous settings are also kept in a "Previous version" section at the end of each patch's write-up.

- **Hard Workin' Man** and **Red Dirt Road** moved from G5 RythymDeluxe (slot 65) to **G18 Fen65DlxKl** (slot 78). Michael wanted to hear them on it and may switch back. To revert:
  - Hard Workin' Man: N->S slot 65, Gain 50, VOL 65, Bass 50, Middle 50, Treble 50. DST Super OD Gain 38, Tone 58, VOL 68.
  - Red Dirt Road: N->S slot 65, Gain 50, VOL 65, Bass 48, Middle 56, Treble 55. DST Green OD Gain 32, Tone 56, VOL 66.
- **It's Not My Time** (guitar) moved from Mess DualV + V30112 (User IR 10) to **G12 RectifierCrunch** (slot 72), after Michael cleared G10, G12, G17 and G20 for high-gain use. To revert: AMP Mess DualV Gain 55, PRES 52, VOL 60, Bass 52, Middle 55, Treble 55. CAB User IR 10 VOL 60.
- Re-checked under that rule and kept as they are: Higher, Cassie and One Last Breath (CTL off is clean, and every fitting combo is crunch), Danger Zone (Solo100 OD directly models the Soldano), and Bring Me to Life (needs Modern-mode saturation, and G12 is a crunch capture). The snaptone patches on G8, G9, G11 and G16 already fit their songs.
- **Sweet Leaf** moved from G9 BritishCrunch (slot 69) to **G14 CleanPlexi** (slot 74): a boosted JTM45 is a closer stand-in for Iommi's boosted Laney. To revert: N->S slot 69, Gain 55, VOL 67, Bass 55, Middle 62, Treble 50. PRE Boost Gain 60, +3dB on, Bright on.

## Rebuild 2026-09-26: G1 and G4

Both Tim R clean Twin captures (`TwinVerb Norm Bright`, `TwinVerb Vibrato Bright`) were too quiet on the GP-5 no matter how the snaptone was set, so Michael dropped them. The Tim R `Ch1 BR` breakup captures are fine. The library has no other clean Twin NAM, so G1 (TwinClean, slot 61) and G4 (BrightTwin, slot 64) were rebuilt on the Deluxe `CLEANEST` capture, which is blackface like the Twin and the loudest clean file in the library (-14.0 dB vs -21). Each combo keeps its original Twin IR. G2 (NashClean) uses the same NAM with the Brown Deluxe 1x12 IR. Slot numbers, snaptone names and patch assignments are unchanged. Michael loaded both rebuilt snaptones the same day and confirmed they sound much better. A true clean Twin NAM is still worth finding.

## VOL audit

VOL 50 was too quiet on every snaptone, so new patches start at 80 (2026-09-27). Michael checked each combo for its working VOL. Guitar audit finished 2026-10-01 and bass 2026-10-02. Every snaptone patch was updated to these levels the day its audit finished.

| NAM | Combos | VOL | Checked |
|---|---|---|---|
| Deluxe `CLEANEST` | G1, G2, G4 | 75 minimum | 2026-10-01 |
| Deluxe `EDGY` | G3 | 70 minimum | 2026-10-01 |
| Deluxe `RYTHM` | G5 | 65 minimum | 2026-10-01 |
| Dumble `CLN_BALANCED` | G6 | 70 | 2026-10-01 |
| AC30 TB `BRIGHT` | G7 | 75 | 2026-10-01 |
| JCM800 `G4` | G8 | 50 | 2026-10-01 |
| JTM45 `Crunch` | G9 | 67 | 2026-10-01 |
| AC30 `N_V3` (Normal) | old G10 | 50 (dropped) | 2026-10-01 |
| EVH 5150 I | G10 | 70 | 2026-10-04 |
| JCM800 `G7` | G11 | 40 | 2026-10-01 |
| Dumble `OD_SMOOTH` | G13 | 65 | 2026-10-01 |
| AC30 TB `PUSH` | old G14 | 70 (dropped) | 2026-10-01 |
| JTM45 + clean boost (CleanPlexi) | G14 | 70 | 2026-10-04 |
| Rectifier `RHYTHM #4` | G16 | 40 | 2026-10-01 |
| Rectifier `CRUNCH RHYTHM #1` | G12 | 70 | 2026-10-01 |
| JCM800 `G10` | G15 | 60 | 2026-10-01 |
| AC30 `N_V10 DALLASTREBLE` | old G17 | 70 (dropped) | 2026-10-01 |
| Friedman BE-100 + TS (Frd100TSSS) | G17 | 70 | 2026-10-04 |
| Deluxe `HOT` | G19 | 60 | 2026-10-01 |
| JCM800 `G3` | G20 | 60 | 2026-10-01 |
| Tim R Twin `Ch1 BR G08` | old G18 | dropped | 2026-10-01 |
| '65 Deluxe + Klon (Fen65DlxKl) | G18 | 70 | 2026-10-04 |
| B-18N `Vol 2.5` | B1 | 80 | 2026-10-02 |
| Avalon AD2022 `38 dB Chan 1` | B2 | 75 | 2026-10-02 |
| SVT-CL `SVT CLEAN` | B3 | 65 | 2026-10-02 |
| B-18N `Vol 5` | B4 | 80 | 2026-10-02 |
| SVT-CL `SANS BRIGHT DRIVE` | B5 | 60 | 2026-10-02 |
| SVT-CL `CLEAN PUSHED` + Mesa215 | B6 | 60 | 2026-10-02 |
| SVT-CL `PUSHED` | B7 | 55 | 2026-10-02 |
| SVT-CL `SANS HAIRY DRIVE` | B8 | 55 | 2026-10-02 |
| SVT-CL `CLEAN PUSHED` + SVT Bright Beta52 | B9 | 55 | 2026-10-02 |
| B-18N `Vol 7.5` | B10 | dropped | 2026-10-02 |

Audit notes (2026-10-01):

- **All AC30 combos dropped (G7, G10, G14, G17):** Michael wasn't happy enough with the slamminmofo AC30 captures. Until he finds a better AC30 NAM, AC30 patches use the GP-5's own Foxy 30N / Foxy 30TB with a CAB IR. The six patches on them (Lion, Praise, When Wind Meets Fire, Mary Jane's Last Dance, You Don't Know How It Feels, Creep) were moved to Foxy the same day. Slot 67 stays loaded but is off-limits for patches. Slots 70, 74 and 77 were reloaded 2026-10-04 with the EVH 5150 I, CleanPlexi and Frd100TSSS (see the Guitar table).
- **G18 CrankedTwin dropped:** it sounded bad on the device. Slot 78 was reloaded 2026-10-04 with Fen65DlxKl (see the Guitar table), which Michael checked and approved the same day.
- **G17 TrebleBoostAC30** works but is only so-so. Michael may look for a better AC30 NAM in general.
- **G19 CrankedDeluxe** and **G20 JCM800Clean** both sound great. G20 was rebuilt on the JCM800 `G3` capture (light crunch) instead of `G1`; slot and snaptone name unchanged.
- **G12 RectifierCrunch** sounds really nice (see Caveats).

Bass audit notes (2026-10-02):

- **B10 SoulB18 dropped:** Michael didn't like it. Its five songs (Ecstasy, Hair, Heaven, Low Rider, Proud Mary) moved to **B4 FullB15**, the same B-18N amp captured at volume 5 instead of 7.5, with their knob settings unchanged. Slot 60 stays loaded but is off-limits for patches.
- All 113 bass snaptone patches were updated to these levels the same day.

## Bass (10 combos, 9 usable, 114 songs)

| # | NAM file | IR | Role | Songs | Count | Slot | Snaptone name |
|---|---|---|---|---|---|---|---|
| B1 | `Ampeg B18 - Head DI - Bass Chan - Vol 2.5` (B-18N) | Apg115 (User IR 1) | Classic clean B-15: Nashville, Motown, 60s-70s studio | Ain't Nothin' 'Bout You, American Pie, Believe, Hard Workin' Man, Heads Carolina, Homegrown, Honky Tonk Truth, If You See Her, Independence Day, I Will Always Love You, Knee Deep, Lucille, My Maria, Neon Moon, When You Say Nothing At All, Papa Was a Rollin' Stone, Puff the Magic Dragon, Rainbow Connection, Red Dirt Road, Spider-Man '67, Surfin' U.S.A., Tennessee Whiskey, The Gambler, Somebody Like You | 24 | 51 | CleanB15 |
| B2 | `Avalon - 38 dB - Chan 1` (Avalon AD2022) | none; fallback `Ampeg SVT D-I-Out` if the builder requires an IR | Studio DI: polished 80s pop, LA sessions, fretless | Egan Fretless, Adrift, After the Love Has Gone, Bright Size Life, Cliffs of Dover, Danger Zone, Don't You Forget About Me, EWF Funk, Islands in the Stream, I Want to Know What Love Is, Kokomo, Lady, Love Shack, Love Will Turn You Around, Money for Nothing, Stairway to Heaven, Time of My Life, Werewolves of London, I Won't Back Down, Your Ways Better, I'll Be There for You | 21 | 52 | AvalonAD2022 |
| B3 | `SVT CLEAN` (SVT-CL) | Apg810 (User IR 3) | Clean SVT 8x10: rock/pop baseline | SNTR Bass, 1979, All for You, Comfortably Numb, Crash Into Me, Fire, Hoedown, Ironic, Like the Way I Do, November Rain, Only in America, Purple Rain, Still...You Turn Me On, Under the Bridge, You, What About Now, One Last Breath, Hanging by a Moment | 18 | 53 | CleanSVT |
| B4 | `Ampeg B18 - Head DI - Bass Chan - Vol 5` (B-18N) | Apg115410 (User IR 2) | Warmer, fuller B-15 with a 4x10 edge: 70s rock, indie, Mayer/Petty | 1234, A Day in the Life, Ecstasy, Giving It All to You, Hair, Heaven, Hotel California, Low Rider, Mary Jane's Last Dance, Neon, Proud Mary, Storm Corrosion, Sultans of Swing, Waiting on the World to Change, We Got Used to Us, You Don't Know How It Feels, Your Love Changes Everything, Dirt Road Anthem, Billie Jean | 19 | 54 | FullB15 |
| B5 | `SVT SANS BRIGHT DRIVE` (SVT-CL) | Hartke410 (User IR 6) | Bright, aggressive drive: pop-punk, power metal, Squire's Rickenbacker clank | The Anthem, Basket Case, When I Come Around, Knights of Cydonia, Dawn of Victory, Spider-Man '94, Creek Mary's Blood, RammGrind, Yes Squire, Parallels | 10 | 55 | BrightSVT |
| B6 | `SVT CLEAN PUSHED` (SVT-CL) | Mesa215 (User IR 7) | Prog: stand-in for the Mesa Bass 400+ (Dream Theater) and the Riverside/prog parts | Metropolis Pt. 1, Pull Me Under, The Spirit Carries On, Stream of Consciousness, Conceiving You, Found, In Two Minds, River Down Below, Dryad of the Woods | 9 | 56 | ProgSVT |
| B7 | `SVT PUSHED` (SVT-CL) | Apg810 (User IR 3) | Gritty SVT rock | Everlong, Hey Jealousy, Machinehead, La Grange, Are You Gonna Be My Girl, Sweet Child O' Mine, Higher, One, It's Not My Time, Bring Me to Life | 10 | 57 | GrittySVT |
| B8 | `SVT SANS HAIRY DRIVE` (SVT-CL) | Sunn215 (User IR 8) | Fuzz/doom/grunge | Comedown, I'm So Sick, Touch Peel and Stand, Man in the Box, Hysteria, Uprising, Sweet Leaf | 7 | 58 | HairySVT |
| B9 | `SVT CLEAN PUSHED` (SVT-CL) | `Ampeg SVT Bright Beta52` (SVT pack) | Modern worship 4x10 | The Bread Has Been Broken, Praise, Thrive, Unstoppable God, When Wind Meets Fire | 5 | 59 | WorshipSVT |
| ~~B10~~ | ~~`Ampeg B18 - Head DI - Bass Chan - Vol 7.5` (B-18N)~~ | ~~Apg115 (User IR 1)~~ | **Dropped 2026-10-02: Michael didn't like it.** Songs moved to B4 | none | 0 | ~~60~~ (dropped 2026-10-02) | ~~SoulB18~~ |

Total 114. B1 + B2 + B3 alone cover 58 songs (just over half).

## Guitar (20 combos, 44 songs)

G1-G16 cover every current guitar patch. G17-G20 add range the current patches don't need but future ones likely will.

| # | NAM file | IR (fallback) | Role | Songs | Count | Slot | Snaptone name |
|---|---|---|---|---|---|---|---|
| G1 | `CLEANEST - Fender Deluxe Reverb 1965 [Hyper Accuracy]` (blackface Deluxe standing in for the Twin's amp half) | `TWIN REVERB __ CLEAN` (vulturized Twin) | Glassy Twin clean: Motown, surf, pop, 80s clean | Papa Was a Rollin' Stone, Surfin' U.S.A., Kiss Me, Spider-Man '67, Time of My Life (JC-120 stand-in), I Will Always Love You | 6 | 61 | TwinClean |
| G2 | `CLEANEST - Fender Deluxe Reverb 1965 [Hyper Accuracy]` | Brown Deluxe 1x12 Medium Mix (fallback: EVM112, User IR 5) | Nashville clean ballads | Believe, If You See Her, Neon Moon, My Maria | 4 | 62 | NashClean |
| G3 | `EDGY - Fender Deluxe Reverb 1965 [Hyper Accuracy]` | Brown Deluxe 1x12 Medium Mix (fallback: EVM112) | Twang with a little hair: chicken pickin', country-pop | Ain't Nothin' 'Bout You, Heads Carolina, Honky Tonk Truth, American Pie, Somebody Like You | 5 | 63 | EdgyTwang |
| G4 | `CLEANEST - Fender Deluxe Reverb 1965 [Hyper Accuracy]` (blackface Deluxe standing in for the Twin's amp half) | `TWIN REVERB __ BALANCED` (vulturized Twin) | Warm, round clean: jazz and the acoustic stand-ins | Bright Size Life, Puff the Magic Dragon, Rainbow Connection, Neon | 4 | 64 | BrightTwin |
| G5 | `RYTHM - Fender Deluxe Reverb 1965 [Hyper Accuracy]` | Brown Deluxe 1x12 Medium Mix (fallback: EVM112) | Gritty country-rock / 70s rhythm (also the tweed Bassman stand-in) | Werewolves of London, Dirt Road Anthem | 2 | 65 | RythymDeluxe |
| G6 | `SLAMMIN_DUMBLE_FORD_CLN_BALANCED_S` (Dumble ODS) | `Bogner 2x12 EVM12L - SM57 1 - Cap Edge` | Dumble clean into EVM12Ls: the Mayer tone (`CLN_KLEAN` if it breaks up too early) | Everyday I Have the Blues, Waiting on the World to Change, Your Body Is a Wonderland, What About Now | 4 | 66 | MayerDumble |
| ~~G7~~ | `SLAMMIN_VOX_AC30_TB_V3_TC0_B4_T7_BRIGHT_S` | British Alnico 2x12 Medium Mix (fallback: `TWIN REVERB __ BALANCED`) | Chimey AC30: modern worship | Lion, Praise, When Wind Meets Fire | 3 | ~~67~~ (dropped 2026-10-01) | ~~WorshipAC30~~ |
| G8 | `JCM800 2203 - P5 B5 M5 T5 MV5 G4 - AZG - 700` | `V7X_dc` (1960AV) | Classic Marshall crunch (also the Mesa Mark stand-in for Found) | December, Ironic, Found, Hanging by a Moment | 4 | 68 | ClassicMarshall |
| G9 | `Marshall JTM45 I Crunch BAL DI` | British Straight 4x12 Medium Mix (fallback: `BlendOfAll_dc`, 1960AV) | 60s/70s British crunch (Plexi slot; also the Laney stand-in) | Only in America, Spider-Man '94 | 2 | 69 | BritishCrunch |
| G10 | EVH 5150 I; capture details not recorded yet. Replaces the AC30 GlassyAC30, dropped 2026-10-01 | not recorded yet | High-gain EVH 5150. Michael 2026-10-04: "very nice" | none yet | 0 | 70 | not recorded yet |
| G11 | `JCM800 2203 - P5 B5 M5 T5 MV6 G7 - AZG - 700` | `BlendOfAll_dc` (1960AV) | Hot Marshall rhythm | Man in the Box, Sister Christian | 2 | 71 | HotMarshall |
| G12 | `1. MESA DUAL RECTIFIER 2025 \| CRUNCH \| RHYTHM #1` | `V30 UR 4FB 4x12 SM57 0.50in 0.0in 7603` (Mesa V30) | Rectifier crunch/rhythm. Exempt from the high-gain rule (Michael 2026-10-04: "sounded fantastic") | It's Not My Time | 1 | 72 | RectifierCrunch |
| G13 | `SLAMMIN_DUMBLE_FORD_OD_SMOOTH_S` (Dumble ODS) | `V30 UR 4FB 4x12 SM57 1.00in 0.0in 7603` (Mesa V30) | Smooth, singing prog lead (Gilmour-style; Mesa Mark stand-in) | In Two Minds, We Got Used to Us | 2 | 73 | ProgDumble |
| G14 | Marshall JTM45 with a clean boost in front; source capture not recorded yet. Replaces the AC30 PushedAC30, dropped 2026-10-01 | Matchless ES212 2x12, Celestion G12M-25 Greenbacks | Boosted Plexi lead. Michael 2026-10-04: "very nice", "great lead sound" | Sweet Leaf | 1 | 74 | CleanPlexi |
| G15 | `JCM800 2203 - P5 B5 M5 T5 MV6 G10 - AZG - 700` | `V30 UR 4FB 4x12 SM57 0.50in 0.0in 7603` (Mesa V30) | Full-gain 80s lead (Soldano stand-in) | Danger Zone | 1 | 75 | 80sLeadJCM800 |
| G16 | `4. MESA DUAL RECTIFIER 2025 \| RHYTHM #4` | `V30 LR 4FB 4x12 SM57 0.75in 0.0in 7603` (Mesa V30) | Heavy modern Recto | Click Click Boom | 1 | 76 | ModernRect |
| G17 | Friedman BE-100 with a Tube Screamer in front and an MXR EQ in the FX loop, into a Mesa oversized cab with one V30 (Sennheiser e609) and one Greenback (Royer R-121), both mics through an SSL Revival preamp. Full rig capture (amp + cab); source pack not recorded yet. Replaces the AC30 TrebleBoostAC30, dropped 2026-10-01 | none (cab is in the capture) | Range: boosted modern-Marshall high gain (hot-rodded Plexi). Michael 2026-10-04: "very nice" | none yet | 0 | 77 | Frd100TSSS |
| G18 | Fender '65 Deluxe Reverb (Volume 5, Tone 6, Bass 4) boosted by a Klon Centaur (Gain 10). Full rig capture (amp + cab); source pack not recorded yet | none (cab is in the capture) | Edge-of-breakup Fender Deluxe, Klon-pushed. Michael 2026-10-04: "very nice" | Hard Workin' Man, Red Dirt Road, Billie Jean | 3 | 78 | Fen65DlxKl |
| G19 | `HOT - Fender Deluxe Reverb 1965 [Hyper Accuracy]` | Brown Deluxe 1x12 Medium Mix (fallback: EVM112) | Range: cranked small-Fender grind (Neil Young / roots rock) | future patches | 0 | 79 | CrankedDeluxe |
| G20 | `JCM800 2203 - P5 B5 M5 T5 MV5 G3 - AZG - 700` (rebuilt from `G1` 2026-10-01) | `BlendOfAll_dc` (1960AV) | Range: Marshall light crunch for classic rock rhythm. Exempt from the high-gain rule (Michael 2026-10-04: "sounded fantastic") | I'll Be There for You | 1 | 80 | JCM800Clean |

Total 44 across G1-G16. G1-G6 (the Fender cleans and edge-of-breakup) cover 24 of the 44.
