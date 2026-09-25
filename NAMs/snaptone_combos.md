# Snaptone combo plan (NAM + IR)

Drafted 2026-09-25 (G6/G13 updated the same day when the Dumble ODS pack was added) from the NAM/IR pack files in `NAMs/` and `IRs/`, mapped against every existing patch using the per-song "ideal rig" picks from the same session. One combo per patch: a GP-5 patch has a single N->S block, so any clean-vs-dirty CTL switching still comes from DST/PRE, not from swapping snaptones. Counts are unique songs/parts (the one Brooks & Dunn GP-5-only duplicate is counted once): 114 bass, 44 guitar. Every patch is covered by exactly one combo. Record the SnapTone slot (1-80) in the Slot column once a combo is loaded. Bass B1-B10 loaded 2026-09-25 into slots 51-60 (the Snaptone name column is the name each was saved under on the device); guitar G1-G20 loaded into slots 61-80. All 30 slots from 51 to 80 are now in use.

## Caveats

- **Origin Effects IRs** (Brown Deluxe, British Alnico, British Straight): Michael confirmed 2026-09-25 he has the files, so the primary IR in each combo is the one used. G7, G9 and G10 were built with the Origin Effects IR, not the fallback. The fallbacks listed for the combos that aren't loaded yet are only there in case a file turns up missing.
- **Preamp-only NAMs:** the SVT-CL and Rectifier packs have no power-amp stage (see their pack files). That affects B3 and B5-B9 on bass and G12 and G16 on guitar. Test those combos in the builder before committing slots.
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

## Bass (10 combos, 114 songs)

| # | NAM file | IR | Role | Songs | Count | Slot | Snaptone name |
|---|---|---|---|---|---|---|---|
| B1 | `Ampeg B18 - Head DI - Bass Chan - Vol 2.5` (B-18N) | Apg115 (User IR 1) | Classic clean B-15: Nashville, Motown, 60s-70s studio | Ain't Nothin' 'Bout You, American Pie, Believe, Hard Workin' Man, Heads Carolina, Homegrown, Honky Tonk Truth, If You See Her, Independence Day, I Will Always Love You, Knee Deep, Lucille, My Maria, Neon Moon, When You Say Nothing At All, Papa Was a Rollin' Stone, Puff the Magic Dragon, Rainbow Connection, Red Dirt Road, Spider-Man '67, Surfin' U.S.A., Tennessee Whiskey, The Gambler | 23 | 51 | CleanB15 |
| B2 | `Avalon - 38 dB - Chan 1` (Avalon AD2022) | none; fallback `Ampeg SVT D-I-Out` if the builder requires an IR | Studio DI: polished 80s pop, LA sessions, fretless | Egan Fretless, Adrift, After the Love Has Gone, Bright Size Life, Cliffs of Dover, Danger Zone, Don't You Forget About Me, EWF Funk, Islands in the Stream, I Want to Know What Love Is, Kokomo, Lady, Love Shack, Love Will Turn You Around, Money for Nothing, Stairway to Heaven, Time of My Life, Werewolves of London, I Won't Back Down, Your Ways Better | 20 | 52 | AvalonAD2022 |
| B3 | `SVT CLEAN` (SVT-CL) | Apg810 (User IR 3) | Clean SVT 8x10: rock/pop baseline | SNTR Bass, 1979, All for You, Comfortably Numb, Crash Into Me, Fire, Hoedown, Ironic, Like the Way I Do, November Rain, Only in America, Purple Rain, Still...You Turn Me On, Under the Bridge, You | 15 | 53 | CleanSVT |
| B4 | `Ampeg B18 - Head DI - Bass Chan - Vol 5` (B-18N) | Apg115410 (User IR 2) | Warmer, fuller B-15 with a 4x10 edge: 70s rock, indie, Mayer/Petty | 1234, A Day in the Life, Giving It All to You, Hotel California, Mary Jane's Last Dance, Neon, Storm Corrosion, Sultans of Swing, Waiting on the World to Change, We Got Used to Us, You Don't Know How It Feels, Your Love Changes Everything | 12 | 54 | FullB15 |
| B5 | `SVT SANS BRIGHT DRIVE` (SVT-CL) | Hartke410 (User IR 6) | Bright, aggressive drive: pop-punk, power metal, Squire's Rickenbacker clank | The Anthem, Basket Case, When I Come Around, Knights of Cydonia, Dawn of Victory, Spider-Man '94, Creek Mary's Blood, RammGrind, Yes Squire, Parallels | 10 | 55 | BrightSVT |
| B6 | `SVT CLEAN PUSHED` (SVT-CL) | Mesa215 (User IR 7) | Prog: stand-in for the Mesa Bass 400+ (Dream Theater) and the Riverside/prog parts | Metropolis Pt. 1, Pull Me Under, The Spirit Carries On, Stream of Consciousness, Conceiving You, Found, In Two Minds, River Down Below, Dryad of the Woods | 9 | 56 | ProgSVT |
| B7 | `SVT PUSHED` (SVT-CL) | Apg810 (User IR 3) | Gritty SVT rock | Everlong, Hey Jealousy, Machinehead, La Grange, Are You Gonna Be My Girl, Sweet Child O' Mine, Higher, One | 8 | 57 | GrittySVT |
| B8 | `SVT SANS HAIRY DRIVE` (SVT-CL) | Sunn215 (User IR 8) | Fuzz/doom/grunge | Comedown, I'm So Sick, Touch Peel and Stand, Man in the Box, Hysteria, Uprising, Sweet Leaf | 7 | 58 | HairySVT |
| B9 | `SVT CLEAN PUSHED` (SVT-CL) | `Ampeg SVT Bright Beta52` (SVT pack) | Modern worship 4x10 | The Bread Has Been Broken, Praise, Thrive, Unstoppable God, When Wind Meets Fire | 5 | 59 | WorshipSVT |
| B10 | `Ampeg B18 - Head DI - Bass Chan - Vol 7.5` (B-18N) | Apg115 (User IR 1) | Gritty vintage tube growl: soul/funk/rock | Ecstasy, Hair, Heaven, Low Rider, Proud Mary | 5 | 60 | SoulB18 |

Total 114. B1 + B2 + B3 alone cover 58 songs (just over half).

## Guitar (20 combos, 44 songs)

G1-G16 cover every current guitar patch. G17-G20 add range the current patches don't need but future ones likely will.

| # | NAM file | IR (fallback) | Role | Songs | Count | Slot | Snaptone name |
|---|---|---|---|---|---|---|---|
| G1 | `Tim R Fender TwinVerb Norm Bright` (Twin) | `TWIN REVERB __ CLEAN` (vulturized Twin) | Glassy Twin clean: Motown, surf, pop, 80s clean | Papa Was a Rollin' Stone, Surfin' U.S.A., Kiss Me, Spider-Man '67, Time of My Life (JC-120 stand-in), I Will Always Love You | 6 | 61 | TwinClean |
| G2 | `CLEANEST - Fender Deluxe Reverb 1965 [Hyper Accuracy]` | Brown Deluxe 1x12 Medium Mix (fallback: EVM112, User IR 5) | Nashville clean ballads | Believe, If You See Her, Neon Moon, My Maria | 4 | 62 | NashClean |
| G3 | `EDGY - Fender Deluxe Reverb 1965 [Hyper Accuracy]` | Brown Deluxe 1x12 Medium Mix (fallback: EVM112) | Twang with a little hair: chicken pickin', country-pop | Ain't Nothin' 'Bout You, Heads Carolina, Honky Tonk Truth, American Pie | 4 | 63 | EdgyTwang |
| G4 | `Tim R Fender TwinVerb Vibrato Bright` (Twin) | `TWIN REVERB __ BALANCED` (vulturized Twin) | Warm, round clean: jazz and the acoustic stand-ins | Bright Size Life, Puff the Magic Dragon, Rainbow Connection, Neon | 4 | 64 | BrightTwin |
| G5 | `RYTHM - Fender Deluxe Reverb 1965 [Hyper Accuracy]` | Brown Deluxe 1x12 Medium Mix (fallback: EVM112) | Gritty country-rock / 70s rhythm (also the tweed Bassman stand-in) | Hard Workin' Man, Red Dirt Road, Werewolves of London | 3 | 65 | RythymDeluxe |
| G6 | `SLAMMIN_DUMBLE_FORD_CLN_BALANCED_S` (Dumble ODS) | `Bogner 2x12 EVM12L - SM57 1 - Cap Edge` | Dumble clean into EVM12Ls: the Mayer tone (`CLN_KLEAN` if it breaks up too early) | Everyday I Have the Blues, Waiting on the World to Change, Your Body Is a Wonderland | 3 | 66 | MayerDumble |
| G7 | `SLAMMIN_VOX_AC30_TB_V3_TC0_B4_T7_BRIGHT_S` | British Alnico 2x12 Medium Mix (fallback: `TWIN REVERB __ BALANCED`) | Chimey AC30: modern worship | Lion, Praise, When Wind Meets Fire | 3 | 67 | WorshipAC30 |
| G8 | `JCM800 2203 - P5 B5 M5 T5 MV5 G4 - AZG - 700` | `V7X_dc` (1960AV) | Classic Marshall crunch (also the Mesa Mark stand-in for Found) | December, Ironic, Found | 3 | 68 | ClassicMarshall |
| G9 | `Marshall JTM45 I Crunch BAL DI` | British Straight 4x12 Medium Mix (fallback: `BlendOfAll_dc`, 1960AV) | 60s/70s British crunch (Plexi slot; also the Laney stand-in) | Only in America, Spider-Man '94, Sweet Leaf | 3 | 69 | BritishCrunch |
| G10 | `SLAMMIN_VOX_AC30_N_V3_TC0_S` | British Alnico 2x12 Medium Mix (fallback: `TWIN REVERB __ BALANCED`) | Glassy AC30 Normal-channel clean | You Don't Know How It Feels, Creep | 2 | 70 | GlassyAC30 |
| G11 | `JCM800 2203 - P5 B5 M5 T5 MV6 G7 - AZG - 700` | `BlendOfAll_dc` (1960AV) | Hot Marshall rhythm | Man in the Box, Sister Christian | 2 | 71 | HotMarshall |
| G12 | `1. MESA DUAL RECTIFIER 2025 \| CRUNCH \| RHYTHM #1` | `V30 UR 4FB 4x12 SM57 0.50in 0.0in 7603` (Mesa V30) | Rectifier crunch/rhythm | Higher, Cassie | 2 | 72 | RectifierCrunch |
| G13 | `SLAMMIN_DUMBLE_FORD_OD_SMOOTH_S` (Dumble ODS) | `V30 UR 4FB 4x12 SM57 1.00in 0.0in 7603` (Mesa V30) | Smooth, singing prog lead (Gilmour-style; Mesa Mark stand-in) | In Two Minds, We Got Used to Us | 2 | 73 | ProgDumble |
| G14 | `SLAMMIN_VOX_AC30_TB_V7_TC0_B7_T8_PUSH_S` | British Alnico 2x12 Medium Mix (fallback: `TWIN REVERB __ MIDS`) | Pushed AC30 crunch: Petty/Campbell | Mary Jane's Last Dance | 1 | 74 | PushedAC30 |
| G15 | `JCM800 2203 - P5 B5 M5 T5 MV6 G10 - AZG - 700` | `V30 UR 4FB 4x12 SM57 0.50in 0.0in 7603` (Mesa V30) | Full-gain 80s lead (Soldano stand-in) | Danger Zone | 1 | 75 | 80sLeadJCM800 |
| G16 | `4. MESA DUAL RECTIFIER 2025 \| RHYTHM #4` | `V30 LR 4FB 4x12 SM57 0.75in 0.0in 7603` (Mesa V30) | Heavy modern Recto | Click Click Boom | 1 | | 76 | ModernRect |
| G17 | `SLAMMIN_VOX_AC30_N_V10_TC0_DALLASTREBLE_6_S` | British Alnico 2x12 Medium Mix (fallback: `TWIN REVERB __ MIDS`) | Range: treble-boosted AC30 lead (Brian May / Rory Gallagher) | future patches | 0 | | 77 | TrebleBoostAC30 |
| G18 | `Tim R Fender Twin Reverb Ch1 BR G08` (Twin) | `TWIN REVERB __ MIDS` (vulturized Twin) | Range: cranked Twin crunch / blues lead | future patches | 0 | | 78 | CrankedTwin |
| G19 | `HOT - Fender Deluxe Reverb 1965 [Hyper Accuracy]` | Brown Deluxe 1x12 Medium Mix (fallback: EVM112) | Range: cranked small-Fender grind (Neil Young / roots rock) | future patches | 0 | | 79 | CrankedDeluxe |
| G20 | `JCM800 2203 - P5 B5 M5 T5 MV5 G1 - AZG - 700` | `BlendOfAll_dc` (1960AV) | Range: Marshall edge-of-breakup clean for classic rock rhythm | future patches | 0 | | 80 | JCM800Clean |

Total 44 across G1-G16. G1-G6 (the Fender cleans and edge-of-breakup) cover 24 of the 44.
