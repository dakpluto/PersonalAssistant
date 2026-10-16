# Patch index

The 195 patches present for the approved 2026-10-16 audit were revised in that pass. See the [implementation record](../Documents/patch-audit-2026-10-16/Implementation.md) for chosen alternatives, verification and site links. New patches are listed below as they are built.

One row per patch in this directory. Built by hand from each `<Name>.json` / `<Name>.md` — update it whenever a patch is added, renamed, or removed (see `Prompts/gp5_prompt.md` step 9).

Patches are split first by Instrument Type (`Patches/Guitar/`, `Patches/Bass/`), then by Type (`Song/`, `Artist/`, `Album/`, `Style/`) — the same two fields `gp5_prompt.md` asks for up front when building a patch. A patch's four files (`.json`, `.prst`, `.md`, `.pdf`) live together in that `<Guitar|Bass>/<Type>/` folder. A Type subfolder only exists once a patch needs it.

The Joyo American Sound joined both Full Boards on 2026-10-12, after the King of Kings / Tidal Wave. Full Board patches built before then don't list it: treat it as bypassed for those. All of them were checked the same day, and none needed it.

## Guitar/

### Song/

| File | Song / Reference | Instrument | Full Board | AMP/CAB substitute | Notes |
|---|---|---|---|---|---|
| `BlazeOfGlory-JBJ-LeadGtr` | Blaze of Glory - Jon Bon Jovi, lead guitar | HSS Strat | Yes; neither optional pedal | SnapTone: ClassicMarshall (slot 68) | Created 2026-10-16. CTL off: lead fills. CTL on: EQ lift + Analog echo for solo. External pedals bypassed. |
| `TennesseeWhiskey-Stapleton-LeadGtr` | Tennessee Whiskey - Chris Stapleton, lead guitar | HSS Strat | Yes; neither optional pedal | SnapTone: EdgyTwang (slot 63) | Created 2026-10-16. CTL: low-drive Green OD + EQ solo lift. Spring always on. |
| `FarBehind-Candlebox-LeadGtr` | Far Behind - Candlebox, lead guitar | HSS Strat | Yes; neither optional pedal | SnapTone: ClassicMarshall (slot 68) | Created 2026-10-16. CTL: Green OD + EQ + Analog lead echo. |
| `NoRain-BlindMelon-Gtr` | No Rain - Blind Melon | HSS Strat | Yes; neither optional pedal | SnapTone: EdgyTwang (slot 63) | Created 2026-10-16. CTL off: hook/rhythm; on: EQ lift + short echo for solo. |
| `Lifeline-TFK-CleanGtr` | Lifeline - Thousand Foot Krutch, clean companion | HSS Strat | Yes; neither optional pedal | SnapTone: NashClean (slot 62) | Created 2026-10-16. CTL adds EQ + clean accent echo. Pair with HeavyGtr. |
| `Lifeline-TFK-HeavyGtr` | Lifeline - Thousand Foot Krutch, heavy rhythm/lead | HSS Strat | Yes; neither optional pedal | AMP: Mess DualM; IR: V30112 (User IR 10) | Created 2026-10-16. CTL: EQ lift + lead echo. Separate CleanGtr for lighter passages. |
| `BeSomebody-TFK-CleanGtr` | Be Somebody - Thousand Foot Krutch, clean companion | HSS Strat | Yes; neither optional pedal | SnapTone: NashClean (slot 62) | Created 2026-10-16. CTL adds EQ + clean accent echo. Pair with HeavyGtr. |
| `BeSomebody-TFK-HeavyGtr` | Be Somebody - Thousand Foot Krutch, heavy rhythm/lead | HSS Strat | Yes; neither optional pedal | SnapTone: RectifierCrunch (slot 72) | Created 2026-10-16. CTL: EQ lift + lead echo. Separate CleanGtr for lighter passages. |
| `AttackDeadMen-Sabaton-Gtr` | The Attack of the Dead Men - Sabaton | HSS Strat | Yes; neither optional pedal | AMP: Eagle 120; IR: V30112 (User IR 10) | Created 2026-10-16. CTL off: tight rhythm; on: EQ lift + 375 ms lead echo. |
| `ChristmasTruce-Sabaton-Gtr` | Christmas Truce - Sabaton | HSS Strat | Yes; neither optional pedal | AMP: Eagle 120; IR: V30112 (User IR 10) | Created 2026-10-16. CTL off: broad rhythm; on: EQ lift + 470 ms lead echo. |
| `BeatIt-MJ-RhythmGtr` | Beat It — Michael Jackson (~139 BPM, est.; Eb minor) | Strat | Yes | SnapTone: CrankedDeluxe (slot 79) | Revised 2026-10-16. CTL: DST + DLY. Board: American Sound bypassed. See write-up for exact states. |
| `Cassie-Flyleaf` | Cassie — Flyleaf (original studio version) | Strat | Yes | IR: V30112 (User IR 10) | Revised 2026-10-16. CTL: DST + DLY. Board: American Sound bypassed. See write-up for exact states. |
| `ChalkOutlines-Ren` | Chalk Outlines — Ren & Chinchilla (123 BPM, measured; C#m, capo 4) | Strat | Yes | SnapTone: Fen65DlxKl (slot 78) | Revised 2026-10-16. CTL: DST + DLY. Board: American Sound bypassed. See write-up for exact states. |
| `CivilWar-GNR-RhythmGtr` | Civil War — Guns N' Roses (~70 BPM, est.; Eb standard) | Strat | Yes | SnapTone: JCM800Clean (slot 80) | Revised 2026-10-16. CTL: DST + DLY. Board: American Sound bypassed. See write-up for exact states. |
| `ClickClickBoom-Sal` | Click Click Boom — Saliva (100 BPM) | Strat | Yes | SnapTone: ModernRect (slot 76) | Revised 2026-10-16. CTL: DST + EQ + RVB. Board: White Tape. See write-up for exact states. |
| `Creep-RH` | Creep — Radiohead | Strat | Yes | AMP: Foxy 30N; CAB: Foxy 2x12 | Revised 2026-10-16. CTL: DST. Board: American Sound bypassed. See write-up for exact states. |
| `December-CS` | December — Collective Soul | Strat | No | SnapTone: ClassicMarshall (slot 68) | Revised 2026-10-16. CTL: DST + MOD + DLY. See write-up for exact states. |
| `EverydayBlues-JM` | Everyday I Have the Blues — John Mayer (*Where the Light Is*) | Strat | Yes | SnapTone: MayerDumble (slot 66) | Revised 2026-10-16. CTL: DST + DLY. Board: White Tape. See write-up for exact states. |
| `KissMeSNTR` | Kiss Me — Sixpence None the Richer | Strat | No | SnapTone: TwinClean (slot 61) | Revised 2026-10-16. CTL: EQ + DLY + RVB. See write-up for exact states. |
| `SisterChristian-NR` | Sister Christian — Night Ranger | Strat | Yes | SnapTone: JCM800Clean (slot 80) | Revised 2026-10-16. CTL: DST + EQ + DLY. MIDI: DST. Board: American Sound bypassed. See write-up for exact states. |
| `Wonderland-JM` | Your Body is a Wonderland — John Mayer (*Room for Squares*) | Strat | No | SnapTone: MayerDumble (slot 66) | Revised 2026-10-16. CTL: EQ + RVB. See write-up for exact states. |
| `BrightSizeLife-Metheny-Gtr` | Bright Size Life — Pat Metheny, guitar (~170 BPM, est.) | Strat | No (GP-5 only) | SnapTone: BrightTwin (slot 64) | Revised 2026-10-16. CTL: DLY. See write-up for exact states. |
| `InTwoMinds-Riverside-LeadGtr` | In Two Minds, lead guitar — Riverside (~100 BPM, est.) | Strat | No (GP-5 only) | SnapTone: ProgDumble (slot 73) | Revised 2026-10-16. CTL: PRE + EQ + DLY. See write-up for exact states. |
| `WeGotUsedToUs-Riverside-LeadGtr` | We Got Used to Us, lead guitar — Riverside (~90 BPM, est.) | Strat | No (GP-5 only) | SnapTone: ProgDumble (slot 73) | Revised 2026-10-16. CTL: DST + DLY. See write-up for exact states. |
| `Found-Riverside-RhythmGtr` | Found (The Unexpected Flaw of Searching), rhythm guitar — Riverside (~100 BPM, est.) | Strat | No (GP-5 only) | SnapTone: JCM800Clean (slot 80) | Revised 2026-10-16. CTL: DST + RVB. See write-up for exact states. |
| `HeadsCarolina-JDM-RhythmGtr` | Heads Carolina, Tails California, rhythm guitar — Jo Dee Messina (~118 BPM, est.) | Strat | No (GP-5 only) | SnapTone: EdgyTwang (slot 63) | Revised 2026-10-16. CTL: DST. See write-up for exact states. |
| `Higher-Creed-Gtr` | Higher, rhythm guitar — Creed (~85 BPM, est.) | Strat | No (GP-5 only) | IR: V30112 (User IR 10) | Revised 2026-10-16. CTL: DST + EQ + MOD. See write-up for exact states. |
| `IWillAlwaysLoveYou-Dolly-RhythmGtr` | I Will Always Love You, rhythm guitar — Dolly Parton (~66 BPM, est.) | Strat | No (GP-5 only) | SnapTone: TwinClean (slot 61) | Revised 2026-10-16. CTL: DST + DLY. See write-up for exact states. |
| `MaryJanesLastDance-TomPetty-RhythmGtr` | Mary Jane's Last Dance, rhythm guitar — Tom Petty and the Heartbreakers (~84 BPM, est.) | Strat | No (GP-5 only) | IR: EVM112 (User IR 5) | Revised 2026-10-16. CTL: DST + DLY. See write-up for exact states. |
| `WhenWindMeetsFire-EW-RhythmGtr` | When Wind Meets Fire, rhythm guitar — Elevation Worship (~72 BPM, est.) | Strat | No (GP-5 only) | IR: V30112 (User IR 10) | Revised 2026-10-16. CTL: DST. MIDI: DST, DLY. See write-up for exact states. |
| `SpiderManTheme1994-RhythmGtr` | Spider-Man: The Animated Series theme (1994), rhythm guitar — Joe Perry (driving hard-rock tempo, est.) | Strat | No (GP-5 only) | SnapTone: BritishCrunch (slot 69) | Revised 2026-10-16. CTL: PRE + EQ + DLY. See write-up for exact states. |
| `SpiderManTheme1967-RhythmGtr` | Spider-Man Theme (1967 cartoon), rhythm guitar — Bob Harris & Paul Francis Webster (fast swing, est.) | Strat | No (GP-5 only) | SnapTone: TwinClean (slot 61) | Revised 2026-10-16. CTL: DST. See write-up for exact states. |
| `SpideyFriendsTheme-RhythmGtr` | Spidey and His Amazing Friends theme (Disney Junior, 2021) — Patrick Stump (~150 BPM, est.) | Strat | Yes | SnapTone: JCM800Clean (slot 80) | Revised 2026-10-16. CTL: DST + DLY. Board: American Sound bypassed. See write-up for exact states. |
| `DigginYou-MN-RhythmGtr` | I'm Diggin' You (Like an Old Soul Record) — Meshell Ndegeocello (~92 BPM, est.) | Strat | Yes | SnapTone: TwinClean (slot 61) | Revised 2026-10-16. CTL: PRE + DST + DLY. Board: American Sound bypassed. See write-up for exact states. |
| `MyMaria-BrooksDunn-RhythmGtr` | My Maria, rhythm guitar — Brooks & Dunn (~96 BPM, est.) | Strat | Yes (White Tape) | SnapTone: NashClean (slot 62) | Revised 2026-10-16. CTL: DST + DLY. Board: White Tape. See write-up for exact states. |
| `OnlyInAmerica-BrooksDunn-RhythmGtr` | Only in America, rhythm guitar — Brooks & Dunn (~120 BPM, est.) | Strat | No (GP-5 only) | SnapTone: BritishCrunch (slot 69) | Revised 2026-10-16. CTL: PRE + EQ + DLY. See write-up for exact states. |
| `HardWorkinMan-BrooksDunn-RhythmGtr` | Hard Workin' Man, rhythm guitar — Brooks & Dunn (~150 BPM, est.) | Strat | No (GP-5 only) | SnapTone: Fen65DlxKl (slot 78) | Revised 2026-10-16. CTL: DST. See write-up for exact states. |
| `NeonMoon-BrooksDunn-RhythmGtr` | Neon Moon, rhythm guitar — Brooks & Dunn (~100 BPM, est.) | Strat | Yes (White Tape) | SnapTone: NashClean (slot 62) | Revised 2026-10-16. CTL: DST + DLY. Board: White Tape. See write-up for exact states. |
| `HonkyTonkTruth-BrooksDunn-RhythmGtr` | Honky Tonk Truth, rhythm guitar — Brooks & Dunn (~160 BPM, est.) | Strat | No (GP-5 only) | SnapTone: EdgyTwang (slot 63) | Revised 2026-10-16. CTL: DST. See write-up for exact states. |
| `AintNothinBoutYou-BrooksDunn-RhythmGtr` | Ain't Nothing 'Bout You, rhythm guitar — Brooks & Dunn (~128 BPM, est.) | Strat | No (GP-5 only) | SnapTone: EdgyTwang (slot 63) | Revised 2026-10-16. CTL: DST. See write-up for exact states. |
| `RedDirtRoad-BrooksDunn-RhythmGtr` | Red Dirt Road, rhythm guitar — Brooks & Dunn (~96 BPM, est.) | Strat | No (GP-5 only) | SnapTone: Fen65DlxKl (slot 78) | Revised 2026-10-16. CTL: DST + DLY. See write-up for exact states. |
| `Believe-BrooksDunn-RhythmGtr` | Believe, rhythm guitar — Brooks & Dunn (~66 BPM, est.) | Strat | No (GP-5 only) | SnapTone: NashClean (slot 62) | Revised 2026-10-16. CTL: PRE + DST. MIDI: DST. See write-up for exact states. |
| `IfYouSeeHer-BrooksDunn-RhythmGtr` | If You See Her ("If You See Him/If You See Her", w/ Reba), rhythm guitar — Brooks & Dunn (~70 BPM, est.) | Strat | No (GP-5 only) | SnapTone: NashClean (slot 62) | Revised 2026-10-16. CTL: DST + DLY. See write-up for exact states. |
| `TimeOfMyLife-DirtyDancing-RhythmGtr` | (I've Had) The Time of My Life, rhythm guitar — Bill Medley & Jennifer Warnes (~108 BPM, est.) | Strat | No (GP-5 only) | IR: EVM112 (User IR 5) | Revised 2026-10-16. CTL: DST + DLY. See write-up for exact states. |
| `DangerZone-KennyLoggins-RhythmGtr` | Danger Zone, rhythm guitar — Kenny Loggins (~158 BPM, est.) | Strat | No (GP-5 only) | IR: V30112 (User IR 10) | Revised 2026-10-16. CTL: PRE + EQ + DLY. See write-up for exact states. |
| `YouDontKnowHowItFeels-TomPetty-RhythmGtr` | You Don't Know How It Feels, rhythm guitar — Tom Petty (~92 BPM, est.) | Strat | No (GP-5 only) | IR: EVM112 (User IR 5) | Revised 2026-10-16. CTL: DST + DLY. See write-up for exact states. |
| `WerewolvesOfLondon-Zevon-RhythmGtr` | Werewolves of London, rhythm guitar — Warren Zevon (~104 BPM, est.) | Strat | No (GP-5 only) | IR: EVM112 (User IR 5) | Revised 2026-10-16. CTL: DST + DLY. See write-up for exact states. |
| `RainbowConnection-KennyLoggins-RhythmGtr` | Rainbow Connection, rhythm guitar — Kenny Loggins (~72 BPM, est.) | Strat | No (GP-5 only) | SnapTone: BrightTwin (slot 64) | Revised 2026-10-16. CTL: EQ + DLY. See write-up for exact states. |
| `WaitingOnTheWorld-JohnMayer-RhythmGtr` | Waiting on the World to Change, rhythm guitar — John Mayer (~88 BPM, est.) | Strat | No (GP-5 only) | SnapTone: MayerDumble (slot 66) | Revised 2026-10-16. CTL: DST + DLY. See write-up for exact states. |
| `Ironic-Alanis-RhythmGtr` | Ironic, rhythm guitar — Alanis Morissette (~116 BPM, est.) | Strat | No (GP-5 only) | SnapTone: TwinClean (slot 61) | Revised 2026-10-16. CTL: DST + RVB. See write-up for exact states. |
| `PuffTheMagicDragon-PPM-RhythmGtr` | Puff the Magic Dragon, rhythm guitar — Peter, Paul and Mary (~110 BPM, est.) | Strat | No (GP-5 only) | SnapTone: BrightTwin (slot 64) | Revised 2026-10-16. CTL: EQ. See write-up for exact states. |
| `Neon-JohnMayer-RhythmGtr` | Neon, rhythm guitar — John Mayer (~104 BPM, est.) | Strat | No (GP-5 only) | SnapTone: BrightTwin (slot 64) | Revised 2026-10-16. CTL: DST + DLY. See write-up for exact states. |
| `AmericanPie-DonMcLean-RhythmGtr` | American Pie, rhythm guitar — Don McLean (~138 BPM band sections, est.) | Strat | No (GP-5 only) | SnapTone: NashClean (slot 62) | Revised 2026-10-16. CTL: DST + DLY. See write-up for exact states. |
| `ManInTheBox-AIC-RhythmGtr` | Man in the Box, rhythm guitar — Alice In Chains (~108 BPM, est.; Eb tuning) | Strat | No (GP-5 only) | SnapTone: HotMarshall (slot 71) | Revised 2026-10-16. CTL: PRE + DLY. See write-up for exact states. |
| `SweetLeaf-BlackSabbath-RhythmGtr` | Sweet Leaf, rhythm guitar — Black Sabbath (~94 BPM, est.; C# tuning) | Strat | No (GP-5 only) | SnapTone: CleanPlexi (slot 74) | Revised 2026-10-16. CTL: EQ + DLY. See write-up for exact states. |
| `Praise-EW-RhythmGtr` | Praise, rhythm guitar — Elevation Worship (~127 BPM, est.) | Strat | No (GP-5 only) | IR: V30112 (User IR 10) | Revised 2026-10-16. CTL: PRE + DLY. MIDI: DST. See write-up for exact states. |
| `PapaWasARollinStone-Temptations-RhythmGtr` | Papa Was a Rollin' Stone, guitar — The Temptations (~120 BPM, est.) | Strat | Yes | SnapTone: TwinClean (slot 61) | Revised 2026-10-16. CTL: PRE. Board: American Sound bypassed. See write-up for exact states. |
| `SurfinUSA-BeachBoys-RhythmGtr` | Surfin' U.S.A., guitar — The Beach Boys (~158 BPM, est.) | Strat | Yes | SnapTone: TwinClean (slot 61) | Revised 2026-10-16. CTL: DST + DLY. Board: American Sound bypassed. See write-up for exact states. |
| `WhatAboutNow-Daughtry-RhythmGtr` | What About Now, rhythm guitar — Daughtry (~74 BPM, est.) | Strat | No (GP-5 only) | SnapTone: MayerDumble (slot 66) | Revised 2026-10-16. CTL: DST + DLY. See write-up for exact states. |
| `OneLastBreath-Creed-RhythmGtr` | One Last Breath, rhythm guitar — Creed (~62 BPM, est.) | Strat | No (GP-5 only) | IR: V30112 (User IR 10) | Revised 2026-10-16. CTL: DST + EQ. MIDI: DLY. See write-up for exact states. |
| `IllBeThereForYou-BonJovi-RhythmGtr` | I'll Be There for You, rhythm guitar — Bon Jovi (~68 BPM, est.) | Strat | No (GP-5 only) | SnapTone: JCM800Clean (slot 80) | Revised 2026-10-16. CTL: DST + DLY. See write-up for exact states. |
| `SomebodyLikeYou-KeithUrban-RhythmGtr` | Somebody Like You, rhythm guitar — Keith Urban (~120 BPM, est.) | Strat | Yes (White Tape) | SnapTone: EdgyTwang (slot 63) | Revised 2026-10-16. CTL: DST + DLY. Board: White Tape. See write-up for exact states. |
| `DirtRoadAnthem-JasonAldean-RhythmGtr` | Dirt Road Anthem, rhythm guitar — Jason Aldean (~86 BPM, est.) | Strat | No (GP-5 only) | SnapTone: RythymDeluxe (slot 65) | Revised 2026-10-16. CTL: DST. See write-up for exact states. |
| `ItsNotMyTime-3DoorsDown-RhythmGtr` | It's Not My Time, rhythm guitar — 3 Doors Down (~100 BPM, est.) | Strat | No (GP-5 only) | SnapTone: RectifierCrunch (slot 72) | Revised 2026-10-16. CTL: EQ + DLY. See write-up for exact states. |
| `HangingByAMoment-Lifehouse-RhythmGtr` | Hanging by a Moment, rhythm guitar — Lifehouse (~124 BPM, est.) | Strat | No (GP-5 only) | SnapTone: ClassicMarshall (slot 68) | Revised 2026-10-16. CTL: DST + DLY. See write-up for exact states. |
| `BringMeToLife-Evanescence-RhythmGtr` | Bring Me to Life, rhythm guitar — Evanescence (~95 BPM, est.) | Strat | No (GP-5 only) | IR: V30112 (User IR 10) | Revised 2026-10-16. CTL: EQ + DLY. See write-up for exact states. |
| `BillieJean-ChrisCornell-RhythmGtr` | Billie Jean (Carry On studio version), rhythm guitar — Chris Cornell (~70 BPM, est.) | Strat | No (GP-5 only) | SnapTone: Fen65DlxKl (slot 78) | Revised 2026-10-16. CTL: DST + DLY. See write-up for exact states. |

### Album/

| File | Song / Reference | Instrument | Full Board | AMP/CAB substitute | Notes |
|---|---|---|---|---|---|
| `Syndicate-TheMidnight` | *Syndicate* — The Midnight (2025, synthwave, whole-album build) | Strat | Yes | SnapTone: MayerDumble (slot 66) | Revised 2026-10-16. CTL: PRE + DST + DLY. MIDI: PRE, DST, MOD, DLY. Board: White Tape. See write-up for exact states. |
| `Lion-EW` | *Lion* — Elevation Worship (CCM / modern worship, whole-album build) | Strat | Yes | IR: V30112 (User IR 10) | Revised 2026-10-16. CTL: DST. MIDI: DST, MOD, DLY. Board: White Tape. See write-up for exact states. |

### Artist/

| File | Song / Reference | Instrument | Full Board | AMP/CAB substitute | Notes |
|---|---|---|---|---|---|
| `Polyphia-Gtr` | Tim Henson / Polyphia signature sound | Strat | No (GP-5 only) | IR: V30112 (User IR 10) (User IR 10) | Revised 2026-10-16. CTL: DST + EQ + MOD. MIDI: MOD, DLY. See write-up for exact states. |

## Bass/

### Song/

Set of 5 for one worship set — full board (Flamma octave, Donner comp, Donner fuzz, Joyo Tidal Wave, Joyo Narcissus) is identical/fixed across all 5; only the GP-5 patch changes song to song. See any patch's "Full Pedalboard" section for the shared board config.

| File | Song / Reference | Instrument | Full Board | AMP/CAB substitute | Notes |
|---|---|---|---|---|---|
| `UnstopGod-EW` | Unstoppable God — Elevation Worship (132 BPM, B) | P/J | Yes | SnapTone: WorshipSVT (slot 59) | Revised 2026-10-16. CTL: PRE. Board: American Sound bypassed. See write-up for exact states. |
| `GivingAll-MG` | Giving It All to You — Michael Gungor (100 BPM, C) | P/J | Yes | SnapTone: FullB15 (slot 54) | Revised 2026-10-16. CTL: none. Board: American Sound bypassed. See write-up for exact states. |
| `YourLove-UP` | Your Love Changes Everything — United Pursuit (71 BPM, A) | P/J | Yes | SnapTone: FullB15 (slot 54) | Revised 2026-10-16. CTL: PRE + RVB. Board: American Sound bypassed. See write-up for exact states. |
| `BreadBroken-JD` | The Bread Has Been Broken — Jeff Deyo (~72 BPM, E) | P/J | Yes | SnapTone: WorshipSVT (slot 59) | Revised 2026-10-16. CTL: none. Board: American Sound bypassed. See write-up for exact states. |
| `Thrive-CC` | Thrive — Casting Crowns (115 BPM, F#) | P/J | Yes | SnapTone: WorshipSVT (slot 59) | Revised 2026-10-16. CTL: DST. Board: American Sound bypassed. See write-up for exact states. |
| `DYFAM-SM` | Don't You Forget About Me — Simple Minds (114 BPM) | P/J | Yes | SnapTone: AvalonAD2022 (slot 52) | Revised 2026-10-16. CTL: PRE. Board: American Sound bypassed. See write-up for exact states. |
| `LoveShack-B52` | Love Shack — The B-52's (134 BPM) | P/J | Yes | SnapTone: AvalonAD2022 (slot 52) | Revised 2026-10-16. CTL: PRE. Board: American Sound bypassed. See write-up for exact states. |
| `YourWaysBetter-FF` | Your Ways Better — Forrest Frank (~92 BPM, est.) | P/J | Yes | SnapTone: AvalonAD2022 (slot 52) | Revised 2026-10-16. CTL: RVB. Board: American Sound bypassed. See write-up for exact states. |
| `IWantToKnow-Foreigner` | I Want to Know What Love Is — Foreigner (~67 BPM, est.) | P/J | Yes | SnapTone: AvalonAD2022 (slot 52) | Revised 2026-10-16. CTL: PRE + RVB. Board: American Sound bypassed. See write-up for exact states. |
| `CrashIntoMe-DMB` | Crash Into Me — Dave Matthews Band (~70 BPM, est.) | P/J | Yes | SnapTone: CleanSVT (slot 53) | Revised 2026-10-16. CTL: RVB. Board: American Sound bypassed. See write-up for exact states. |
| `Parallels-Yes` | Parallels — Yes (~132 BPM, est.) | P/J | Yes | SnapTone: BrightSVT (slot 55) | Revised 2026-10-16. CTL: none. Board: American Sound bypassed. See write-up for exact states. |
| `You-Candlebox` | You — Candlebox (~78 BPM, est.) | P/J | Yes | SnapTone: CleanSVT (slot 53) | Revised 2026-10-16. CTL: PRE + RVB. Board: American Sound bypassed. See write-up for exact states. |
| `ImSoSick-Flyleaf` | I'm So Sick — Flyleaf (~102 BPM, est.) | P/J | Yes | SnapTone: HairySVT (slot 58) | Revised 2026-10-16. CTL: PRE. Board: American Sound bypassed. See write-up for exact states. |
| `DayLife-Beatles` | A Day in the Life — The Beatles (85 BPM, est.) | P/J | Yes | SnapTone: AvalonAD2022 (slot 52) | Revised 2026-10-16. CTL: PRE + RVB. Board: American Sound bypassed. See write-up for exact states. |
| `HeyJealousy-GB` | Hey Jealousy — Gin Blossoms (116 BPM) | P/J | Yes | SnapTone: GrittySVT (slot 57) | Revised 2026-10-16. CTL: PRE + RVB. Board: American Sound bypassed. See write-up for exact states. |
| `StillYTMO-ELP` | Still...You Turn Me On — Emerson, Lake & Palmer (~72 BPM, est.) | P/J | Yes | SnapTone: CleanSVT (slot 53) | Revised 2026-10-16. CTL: DST + RVB. Board: American Sound bypassed. See write-up for exact states. |
| `Everlong-FF` | Everlong — Foo Fighters (158 BPM) | P/J | Yes | SnapTone: GrittySVT (slot 57) | Revised 2026-10-16. CTL: PRE. Board: American Sound bypassed. See write-up for exact states. |
| `LaGrange-ZZTop` | La Grange — ZZ Top (144 BPM, est.) | P/J | Yes | SnapTone: GrittySVT (slot 57) | Revised 2026-10-16. CTL: none. Board: American Sound bypassed. See write-up for exact states. |
| `CliffsOfDover-EJ` | Cliffs of Dover — Eric Johnson (~133 BPM, est.) | P/J | Yes | SnapTone: AvalonAD2022 (slot 52) | Revised 2026-10-16. CTL: MOD + RVB. Board: American Sound bypassed. See write-up for exact states. |
| `GonnaBeMyGirl-Jet` | Are You Gonna Be My Girl — Jet (137 BPM, est.) | P/J | Yes | SnapTone: GrittySVT (slot 57) | Revised 2026-10-16. CTL: PRE. Board: American Sound bypassed. See write-up for exact states. |
| `Uprising-Muse` | Uprising — Muse (128 BPM) | P/J | Yes | SnapTone: HairySVT (slot 58) | Revised 2026-10-16. CTL: PRE. Board: American Sound bypassed. See write-up for exact states. |
| `KnightsOfCydonia-Muse` | Knights of Cydonia — Muse (137 BPM) | P/J | Yes | SnapTone: BrightSVT (slot 55) | Revised 2026-10-16. CTL: PRE + RVB. Board: American Sound bypassed. See write-up for exact states. |
| `TennesseeWhiskey-Stapleton` | Tennessee Whiskey — Chris Stapleton (68 BPM, est.) | Sire fretless (Passive) | Yes | SnapTone: CleanB15 (slot 51) | Revised 2026-10-16. CTL: PRE + RVB. Board: American Sound bypassed. See write-up for exact states. |
| `MoneyForNothing-DireStraits` | Money for Nothing — Dire Straits (120 BPM, est.) | P/J | Yes | SnapTone: AvalonAD2022 (slot 52) | Revised 2026-10-16. CTL: PRE + RVB. Board: American Sound bypassed. See write-up for exact states. |
| `Hysteria-Muse` | Hysteria — Muse (129 BPM) | P/J | Yes | SnapTone: HairySVT (slot 58) | Revised 2026-10-16. CTL: PRE. Board: American Sound bypassed. See write-up for exact states. |
| `One-Metallica` | One — Metallica (~85 BPM base, outro ~double-time) | P/J | Yes | SnapTone: GrittySVT (slot 57) | Revised 2026-10-16. CTL: RVB. Board: American Sound bypassed. See write-up for exact states. |
| `UnderTheBridge-RHCP` | Under the Bridge — Red Hot Chili Peppers (85 BPM, est.) | P/J | Yes | SnapTone: CleanSVT (slot 53) | Revised 2026-10-16. CTL: PRE + RVB. Board: American Sound bypassed. See write-up for exact states. |
| `PurpleRain-Prince` | Purple Rain — Prince (112 BPM, est.) | P/J | Yes | SnapTone: CleanSVT (slot 53) | Revised 2026-10-16. CTL: PRE + RVB. Board: American Sound bypassed. See write-up for exact states. |
| `NovemberRain-GNR` | November Rain — Guns N' Roses (~52 BPM, est.) | P/J | Yes | SnapTone: CleanSVT (slot 53) | Revised 2026-10-16. CTL: RVB. Board: American Sound bypassed. See write-up for exact states. |
| `BeatIt-MJ` | Beat It — Michael Jackson (~139 BPM, est.; Eb minor) | P/J | Yes | SnapTone: AvalonAD2022 (slot 52) | Revised 2026-10-16. CTL: none. Board: American Sound bypassed. See write-up for exact states. |
| `CivilWar-GNR` | Civil War — Guns N' Roses (~70 BPM, est.; Eb standard) | P/J | Yes | SnapTone: GrittySVT (slot 57) | Revised 2026-10-16. CTL: none. Board: American Sound bypassed. See write-up for exact states. |
| `BasketCase-GreenDay` | Basket Case — Green Day (171 BPM) | P/J | Yes | SnapTone: BrightSVT (slot 55) | Revised 2026-10-16. CTL: PRE. Board: American Sound bypassed. See write-up for exact states. |
| `WontBackDown-TomPetty` | I Won't Back Down — Tom Petty (93 BPM, est.) | P/J | Yes | SnapTone: AvalonAD2022 (slot 52) | Revised 2026-10-16. CTL: PRE + RVB. Board: American Sound bypassed. See write-up for exact states. |
| `LikeTheWayIDo-Etheridge` | Like the Way I Do — Melissa Etheridge (~80 BPM, est.) | P/J | Yes | SnapTone: CleanSVT (slot 53) | Revised 2026-10-16. CTL: RVB. Board: American Sound bypassed. See write-up for exact states. |
| `Kokomo-BeachBoys` | Kokomo — The Beach Boys (104 BPM, est.) | P/J | Yes | SnapTone: AvalonAD2022 (slot 52) | Revised 2026-10-16. CTL: PRE + RVB. Board: American Sound bypassed. See write-up for exact states. |
| `1234-Feist` | 1234 — Feist (127 BPM, est.) | Sire fretless (Passive) | Yes | SnapTone: FullB15 (slot 54) | Revised 2026-10-16. CTL: PRE + RVB. Board: American Sound bypassed. See write-up for exact states. |
| `1979-SmashingPumpkins` | 1979 — The Smashing Pumpkins (126 BPM, est.) | P/J | No (GP-5 only) | SnapTone: CleanSVT (slot 53) | Revised 2026-10-16. CTL: PRE + RVB. See write-up for exact states. |
| `AllForYou-SisterHazel` | All for You — Sister Hazel (100 BPM, est.) | P/J | No (GP-5 only) | SnapTone: CleanSVT (slot 53) | Revised 2026-10-16. CTL: PRE + RVB. See write-up for exact states. |
| `Ecstasy-RustedRoot` | Ecstasy — Rusted Root (~102 BPM, est.) | P/J | No (GP-5 only) | SnapTone: FullB15 (slot 54) | Revised 2026-10-16. CTL: DST + RVB. See write-up for exact states. |
| `WhenIComeAround-GreenDay` | When I Come Around — Green Day (119 BPM) | P/J | Yes | SnapTone: BrightSVT (slot 55) | Revised 2026-10-16. CTL: PRE + RVB. Board: American Sound bypassed. See write-up for exact states. |
| `Higher-Creed` | Higher — Creed (85 BPM, est.) | P/J | Yes | SnapTone: GrittySVT (slot 57) | Revised 2026-10-16. CTL: PRE + RVB. Board: American Sound bypassed. See write-up for exact states. |
| `TouchPeelStand-DaysOfTheNew` | Touch, Peel, and Stand — Days of the New (~83 BPM, est.) | P/J | Yes | SnapTone: HairySVT (slot 58) | Revised 2026-10-16. CTL: PRE. Board: American Sound bypassed. See write-up for exact states. |
| `ProudMary-IkeTina` | Proud Mary — Ike & Tina Turner (117 BPM, slow intro much slower) | P/J | Yes | SnapTone: FullB15 (slot 54) | Revised 2026-10-16. CTL: PRE + RVB. Board: American Sound bypassed. See write-up for exact states. |
| `AintNothinBoutYou-BrooksDunn` | Ain't Nothing 'Bout You — Brooks & Dunn (128 BPM, est.) | P/J | Yes | SnapTone: CleanB15 (slot 51) | Revised 2026-10-16. CTL: PRE + RVB. Board: American Sound bypassed. See write-up for exact states. |
| `Hair-GrahamCentralStation` | Hair — Graham Central Station (~104 BPM, est.) | P/J | Yes | SnapTone: FullB15 (slot 54) | Revised 2026-10-16. CTL: none. Board: American Sound bypassed. See write-up for exact states. |
| `Machinehead-Bush` | Machinehead — Bush (147 BPM, est.) | P/J | No (GP-5 only) | SnapTone: GrittySVT (slot 57) | Revised 2026-10-16. CTL: PRE + RVB. See write-up for exact states. |
| `Adrift-LS` | Adrift — Lunatic Soul | Sire fretless (Active) | No (GP-5 only) | SnapTone: AvalonAD2022 (slot 52) | Revised 2026-10-16. CTL: DLY + RVB. See write-up for exact states. |
| `Anthem-GC` | The Anthem — Good Charlotte | P/J | No (GP-5 only) | SnapTone: BrightSVT (slot 55) | Revised 2026-10-16. CTL: DST. See write-up for exact states. |
| `StreamCons-DT` | Stream of Consciousness — Dream Theater (instrumental) | P/J | No (GP-5 only) | IR: Mesa215 (User IR 7) | Revised 2026-10-16. CTL: DST + RVB. See write-up for exact states. |
| `Metropolis1-DT` | Metropolis Pt. 1, The Miracle and the Sleeper — Dream Theater (~130 BPM, est.) | P/J | No (GP-5 only) | IR: Mesa215 (User IR 7) | Revised 2026-10-16. CTL: PRE + RVB. See write-up for exact states. |
| `PullMeUnder-DT` | Pull Me Under — Dream Theater | P/J | No (GP-5 only) | IR: Mesa215 (User IR 7) | Revised 2026-10-16. CTL: DST + RVB. See write-up for exact states. |
| `SpiritCarriesOn-DT` | The Spirit Carries On — Dream Theater | Sire fretless (Active) | No (GP-5 only) | IR: EBS410 (User IR 4) | Revised 2026-10-16. CTL: PRE + RVB. See write-up for exact states. |
| `Heaven-LLB` | Heaven — Los Lonely Boys | Sire fretless (Passive) | No (GP-5 only) | SnapTone: FullB15 (slot 54) | Revised 2026-10-16. CTL: PRE + RVB. See write-up for exact states. |
| `Homegrown-ZBB` | Homegrown — Zac Brown Band | P/J | No (GP-5 only) | SnapTone: CleanB15 (slot 51) | Revised 2026-10-16. CTL: PRE + RVB. See write-up for exact states. |
| `KneeDeep-ZBB` | Knee Deep — Zac Brown Band (feat. Jimmy Buffett) | Sire fretless (Passive) | No (GP-5 only) | SnapTone: CleanB15 (slot 51) | Revised 2026-10-16. CTL: PRE + RVB. See write-up for exact states. |
| `HeadsCarolina-JDM` | Heads Carolina, Tails California — Jo Dee Messina (~118 BPM, est.) | P/J | No (GP-5 only) | SnapTone: CleanB15 (slot 51) | Revised 2026-10-16. CTL: PRE + RVB. See write-up for exact states. |
| `IndependenceDay-MM` | Independence Day — Martina McBride (~120 BPM) | P/J | No (GP-5 only) | SnapTone: CleanB15 (slot 51) | Revised 2026-10-16. CTL: PRE + RVB. See write-up for exact states. |
| `NothingAtAll-AK` | When You Say Nothing At All — Alison Krauss | Sire fretless (Passive) | No (GP-5 only) | SnapTone: CleanB15 (slot 51) | Revised 2026-10-16. CTL: RVB. See write-up for exact states. |
| `LoveWillTurn-KR` | Love Will Turn You Around — Kenny Rogers | P/J | No (GP-5 only) | SnapTone: AvalonAD2022 (slot 52) | Revised 2026-10-16. CTL: PRE + RVB. See write-up for exact states. |
| `Lucille-KR` | Lucille — Kenny Rogers | Sire fretless (Passive) | No (GP-5 only) | SnapTone: CleanB15 (slot 51) | Revised 2026-10-16. CTL: PRE + RVB. See write-up for exact states. |
| `TheGambler-KR` | The Gambler — Kenny Rogers | Sire fretless (Passive) | No (GP-5 only) | SnapTone: CleanB15 (slot 51) | Revised 2026-10-16. CTL: PRE + RVB. See write-up for exact states. |
| `IslandsInStream-KR` | Islands in the Stream — Kenny Rogers (duet w/ Dolly Parton, ~104 BPM, est.) | Sire fretless (Active) | No (GP-5 only) | SnapTone: AvalonAD2022 (slot 52) | Revised 2026-10-16. CTL: PRE + RVB. See write-up for exact states. |
| `Lady-KR` | Lady — Kenny Rogers (~68 BPM) | Sire fretless (Active) | No (GP-5 only) | SnapTone: AvalonAD2022 (slot 52) | Revised 2026-10-16. CTL: RVB. See write-up for exact states. |
| `Comedown-Bush` | Comedown — Bush (~92 BPM, est.) | P/J | No (GP-5 only) | SnapTone: HairySVT (slot 58) | Revised 2026-10-16. CTL: PRE + RVB. See write-up for exact states. |
| `Fire-OP` | Fire — Ohio Players (~116 BPM, est.) | P/J | No (GP-5 only) | SnapTone: CleanSVT (slot 53) | Revised 2026-10-16. CTL: EQ. See write-up for exact states. |
| `LowRider-War` | Low Rider — War (~106 BPM, est.) | P/J | No (GP-5 only) | SnapTone: FullB15 (slot 54) | Revised 2026-10-16. CTL: none. See write-up for exact states. |
| `InTwoMinds-Riverside` | In Two Minds — Riverside (~100 BPM, est.) | P/J | No (GP-5 only) | SnapTone: ProgSVT (slot 56) | Revised 2026-10-16. CTL: DST. See write-up for exact states. |
| `WeGotUsedToUs-Riverside` | We Got Used to Us — Riverside (~90 BPM, est.) | P/J | No (GP-5 only) | SnapTone: FullB15 (slot 54) | Revised 2026-10-16. CTL: RVB. See write-up for exact states. |
| `RiverDownBelow-Riverside` | River Down Below — Riverside (~100 BPM, est.) | P/J | No (GP-5 only) | SnapTone: ProgSVT (slot 56) | Revised 2026-10-16. CTL: DST + RVB. See write-up for exact states. |
| `Found-Riverside` | Found (The Unexpected Flaw of Searching) — Riverside (~100 BPM, est.) | P/J | No (GP-5 only) | SnapTone: ProgSVT (slot 56) | Revised 2026-10-16. CTL: DST + RVB. See write-up for exact states. |
| `ConceivingYou-Riverside` | Conceiving You — Riverside (~95 BPM, est.) | P/J | No (GP-5 only) | SnapTone: ProgSVT (slot 56) | Revised 2026-10-16. CTL: DST + RVB. See write-up for exact states. |
| `DawnOfVictory-Rhapsody` | Dawn of Victory — Rhapsody (~170 BPM, est.) | P/J | No (GP-5 only) | SnapTone: BrightSVT (slot 55) | Revised 2026-10-16. CTL: DST. See write-up for exact states. |
| `StormCorrosion-StormCorrosion` | Storm Corrosion — Storm Corrosion (~65 BPM, est.) | P/J | No (GP-5 only) | SnapTone: FullB15 (slot 54) | Revised 2026-10-16. CTL: RVB. See write-up for exact states. |
| `Hoedown-ELP` | Hoedown — Emerson, Lake & Palmer (~165 BPM, est.) | P/J | No (GP-5 only) | SnapTone: CleanSVT (slot 53) | Revised 2026-10-16. CTL: EQ. See write-up for exact states. |
| `CreekMarysBlood-Nightwish` | Creek Mary's Blood — Nightwish (~90 BPM, est.) | P/J | No (GP-5 only) | SnapTone: BrightSVT (slot 55) | Revised 2026-10-16. CTL: DST + RVB. See write-up for exact states. |
| `Dryad-PainOfSalvation` | Dryad of the Woods — Pain of Salvation (~100 BPM, est.) | P/J | No (GP-5 only) | SnapTone: CleanB15 (slot 51) | Revised 2026-10-16. CTL: RVB. See write-up for exact states. |
| `BrightSizeLife-Metheny` | Bright Size Life — Pat Metheny (~170 BPM, est.) | Sire fretless (Active) | No (GP-5 only) | SnapTone: AvalonAD2022 (slot 52) | Revised 2026-10-16. CTL: EQ. See write-up for exact states. |
| `ComfortablyNumb-PinkFloyd` | Comfortably Numb — Pink Floyd (~64 BPM) | P/J | No (GP-5 only) | SnapTone: CleanSVT (slot 53) | Revised 2026-10-16. CTL: RVB. See write-up for exact states. |
| `SultansOfSwing-DireStraits` | Sultans of Swing — Dire Straits (~148 BPM) | P/J | No (GP-5 only) | SnapTone: FullB15 (slot 54) | Revised 2026-10-16. CTL: PRE + RVB. See write-up for exact states. |
| `SweetChild-GNR` | Sweet Child O' Mine — Guns N' Roses (~125 BPM) | P/J | No (GP-5 only) | SnapTone: GrittySVT (slot 57) | Revised 2026-10-16. CTL: DST. See write-up for exact states. |
| `Stairway-LedZeppelin` | Stairway to Heaven — Led Zeppelin (~72 BPM, accelerates) | P/J | No (GP-5 only) | SnapTone: AvalonAD2022 (slot 52) | Revised 2026-10-16. CTL: DST. See write-up for exact states. |
| `HotelCalifornia-Eagles` | Hotel California — Eagles (~74 BPM) | P/J | No (GP-5 only) | SnapTone: FullB15 (slot 54) | Revised 2026-10-16. CTL: RVB. See write-up for exact states. |
| `AfterTheLove-EWF` | After the Love Has Gone — Earth, Wind & Fire (~66 BPM, est.) | P/J | No (GP-5 only) | SnapTone: AvalonAD2022 (slot 52) | Revised 2026-10-16. CTL: RVB. See write-up for exact states. |
| `IWillAlwaysLoveYou-Dolly` | I Will Always Love You — Dolly Parton (~66 BPM, est.) | P/J | No (GP-5 only) | SnapTone: CleanB15 (slot 51) | Revised 2026-10-16. CTL: RVB. See write-up for exact states. |
| `MaryJanesLastDance-TomPetty` | Mary Jane's Last Dance — Tom Petty and the Heartbreakers (~84 BPM, est.) | P/J | No (GP-5 only) | SnapTone: FullB15 (slot 54) | Revised 2026-10-16. CTL: none. See write-up for exact states. |
| `WhenWindMeetsFire-EW` | When Wind Meets Fire — Elevation Worship (~72 BPM, est.) | P/J | No (GP-5 only) | SnapTone: WorshipSVT (slot 59) | Revised 2026-10-16. CTL: DST + RVB. See write-up for exact states. |
| `SpiderManTheme1994` | Spider-Man: The Animated Series theme (1994) — Joe Perry (driving hard-rock tempo, est.) | P/J | No (GP-5 only) | SnapTone: BrightSVT (slot 55) | Revised 2026-10-16. CTL: DST. See write-up for exact states. |
| `SpiderManTheme1967` | Spider-Man Theme (1967 cartoon) — Bob Harris & Paul Francis Webster (fast swing, est.) | P/J | No (GP-5 only) | SnapTone: CleanB15 (slot 51) | Revised 2026-10-16. CTL: DST. See write-up for exact states. |
| `SpideyFriendsTheme` | Spidey and His Amazing Friends theme (Disney Junior, 2021) — Patrick Stump (~150 BPM, est.) | P/J | Yes | SnapTone: BrightSVT (slot 55) | Revised 2026-10-16. CTL: none. Board: American Sound bypassed. See write-up for exact states. |
| `ThisIsHalloween-NBC` | This Is Halloween — The Nightmare Before Christmas (Danny Elfman, 1993; tempo not verified) | P/J | Yes | SnapTone: FullB15 (slot 54) | Revised 2026-10-16. CTL: none. Board: American Sound bypassed. See write-up for exact states. |
| `SallysSong-NBC` | Sally's Song — The Nightmare Before Christmas (Danny Elfman, sung by Catherine O'Hara, 1993; tempo not verified) | P/J | Yes | SnapTone: CleanB15 (slot 51) | Revised 2026-10-16. CTL: none. Board: American Sound bypassed. See write-up for exact states. |
| `DigginYou-MN` | I'm Diggin' You (Like an Old Soul Record) — Meshell Ndegeocello (~92 BPM, est.) | P/J | Yes | SnapTone: CleanB15 (slot 51) | Revised 2026-10-16. CTL: none. Board: American Sound bypassed. See write-up for exact states. |
| `MyMaria-BrooksDunn` | My Maria — Brooks & Dunn (~96 BPM, est.) | P/J | No (GP-5 only) | SnapTone: CleanB15 (slot 51) | Revised 2026-10-16. CTL: none. See write-up for exact states. |
| `OnlyInAmerica-BrooksDunn` | Only in America — Brooks & Dunn (~120 BPM, est.) | P/J | No (GP-5 only) | SnapTone: CleanSVT (slot 53) | Revised 2026-10-16. CTL: DST + RVB. See write-up for exact states. |
| `HardWorkinMan-BrooksDunn` | Hard Workin' Man — Brooks & Dunn (~150 BPM, est.) | P/J | No (GP-5 only) | SnapTone: CleanB15 (slot 51) | Revised 2026-10-16. CTL: RVB. See write-up for exact states. |
| `NeonMoon-BrooksDunn` | Neon Moon — Brooks & Dunn (~100 BPM, est.) | P/J | No (GP-5 only) | SnapTone: CleanB15 (slot 51) | Revised 2026-10-16. CTL: RVB. See write-up for exact states. |
| `HonkyTonkTruth-BrooksDunn` | Honky Tonk Truth — Brooks & Dunn (~160 BPM, est.) | P/J | No (GP-5 only) | SnapTone: CleanB15 (slot 51) | Revised 2026-10-16. CTL: EQ. See write-up for exact states. |
| `AintNothinBoutYou-BrooksDunn-GP5` | Ain't Nothing 'Bout You (GP-5 only version) — Brooks & Dunn (~128 BPM, est.) | P/J | No (GP-5 only) | SnapTone: CleanB15 (slot 51) | Revised 2026-10-16. CTL: EQ + RVB. See write-up for exact states. |
| `RedDirtRoad-BrooksDunn` | Red Dirt Road — Brooks & Dunn (~96 BPM, est.) | P/J | No (GP-5 only) | SnapTone: CleanB15 (slot 51) | Revised 2026-10-16. CTL: DST + RVB. See write-up for exact states. |
| `Believe-BrooksDunn` | Believe — Brooks & Dunn (~66 BPM, est.) | P/J | No (GP-5 only) | SnapTone: CleanB15 (slot 51) | Revised 2026-10-16. CTL: RVB. See write-up for exact states. |
| `IfYouSeeHer-BrooksDunn` | If You See Her ("If You See Him/If You See Her", w/ Reba) — Brooks & Dunn (~70 BPM, est.) | P/J | No (GP-5 only) | SnapTone: CleanB15 (slot 51) | Revised 2026-10-16. CTL: RVB. See write-up for exact states. |
| `TimeOfMyLife-DirtyDancing` | (I've Had) The Time of My Life — Bill Medley & Jennifer Warnes (~108 BPM, est.) | P/J | No (GP-5 only) | SnapTone: AvalonAD2022 (slot 52) | Revised 2026-10-16. CTL: MOD + RVB. See write-up for exact states. |
| `DangerZone-KennyLoggins` | Danger Zone — Kenny Loggins (~158 BPM, est.) | P/J | No (GP-5 only) | SnapTone: AvalonAD2022 (slot 52) | Revised 2026-10-16. CTL: PRE + DST. See write-up for exact states. |
| `YouDontKnowHowItFeels-TomPetty` | You Don't Know How It Feels — Tom Petty (~92 BPM, est.) | P/J | No (GP-5 only) | SnapTone: FullB15 (slot 54) | Revised 2026-10-16. CTL: RVB. See write-up for exact states. |
| `WerewolvesOfLondon-Zevon` | Werewolves of London — Warren Zevon (~104 BPM, est.) | P/J | No (GP-5 only) | SnapTone: AvalonAD2022 (slot 52) | Revised 2026-10-16. CTL: none. See write-up for exact states. |
| `RainbowConnection-KennyLoggins` | Rainbow Connection — Kenny Loggins (~72 BPM, est.) | P/J | No (GP-5 only) | SnapTone: CleanB15 (slot 51) | Revised 2026-10-16. CTL: RVB. See write-up for exact states. |
| `WaitingOnTheWorld-JohnMayer` | Waiting on the World to Change — John Mayer (~88 BPM, est.) | Sire fretless (Passive) | No (GP-5 only) | SnapTone: FullB15 (slot 54) | Revised 2026-10-16. CTL: RVB. See write-up for exact states. |
| `Ironic-Alanis` | Ironic — Alanis Morissette (~116 BPM, est.) | P/J | No (GP-5 only) | SnapTone: CleanSVT (slot 53) | Revised 2026-10-16. CTL: DST. See write-up for exact states. |
| `PuffTheMagicDragon-PPM` | Puff the Magic Dragon — Peter, Paul and Mary (~110 BPM, est.) | P/J | No (GP-5 only) | SnapTone: CleanB15 (slot 51) | Revised 2026-10-16. CTL: none. See write-up for exact states. |
| `Neon-JohnMayer` | Neon — John Mayer (~104 BPM, est.) | P/J | No (GP-5 only) | SnapTone: FullB15 (slot 54) | Revised 2026-10-16. CTL: RVB. See write-up for exact states. |
| `AmericanPie-DonMcLean` | American Pie — Don McLean (~138 BPM band sections, est.) | P/J | No (GP-5 only) | SnapTone: CleanB15 (slot 51) | Revised 2026-10-16. CTL: EQ. See write-up for exact states. |
| `ManInTheBox-AIC` | Man in the Box — Alice In Chains (~108 BPM, est.; Eb tuning) | P/J | No (GP-5 only) | SnapTone: HairySVT (slot 58) | Revised 2026-10-16. CTL: EQ. See write-up for exact states. |
| `SweetLeaf-BlackSabbath` | Sweet Leaf — Black Sabbath (~94 BPM, est.; C# tuning) | P/J | No (GP-5 only) | SnapTone: HairySVT (slot 58) | Revised 2026-10-16. CTL: PRE. See write-up for exact states. |
| `Praise-EW` | Praise — Elevation Worship (~127 BPM, est.) | P/J | No (GP-5 only) | SnapTone: WorshipSVT (slot 59) | Revised 2026-10-16. CTL: DST. See write-up for exact states. |
| `PapaWasARollinStone-Temptations` | Papa Was a Rollin' Stone — The Temptations (~120 BPM, est.) | P/J | Yes | SnapTone: CleanB15 (slot 51) | Revised 2026-10-16. CTL: none. Board: American Sound bypassed. See write-up for exact states. |
| `SurfinUSA-BeachBoys` | Surfin' U.S.A. — The Beach Boys (~158 BPM, est.) | P/J | Yes | SnapTone: CleanB15 (slot 51) | Revised 2026-10-16. CTL: PRE. Board: American Sound bypassed. See write-up for exact states. |
| `WhatAboutNow-Daughtry` | What About Now — Daughtry (~74 BPM, est.) | P/J | No (GP-5 only) | SnapTone: CleanSVT (slot 53) | Revised 2026-10-16. CTL: DST + RVB. See write-up for exact states. |
| `OneLastBreath-Creed` | One Last Breath — Creed (~62 BPM, est.) | P/J | No (GP-5 only) | SnapTone: CleanSVT (slot 53) | Revised 2026-10-16. CTL: DST + RVB. See write-up for exact states. |
| `IllBeThereForYou-BonJovi` | I'll Be There for You — Bon Jovi (~68 BPM, est.) | P/J | No (GP-5 only) | SnapTone: AvalonAD2022 (slot 52) | Revised 2026-10-16. CTL: RVB. See write-up for exact states. |
| `SomebodyLikeYou-KeithUrban` | Somebody Like You — Keith Urban (~120 BPM, est.) | P/J | No (GP-5 only) | SnapTone: CleanB15 (slot 51) | Revised 2026-10-16. CTL: EQ + RVB. See write-up for exact states. |
| `DirtRoadAnthem-JasonAldean` | Dirt Road Anthem — Jason Aldean (~86 BPM, est.) | P/J | No (GP-5 only) | SnapTone: FullB15 (slot 54) | Revised 2026-10-16. CTL: DST. See write-up for exact states. |
| `ItsNotMyTime-3DoorsDown` | It's Not My Time — 3 Doors Down (~100 BPM, est.) | P/J | No (GP-5 only) | SnapTone: GrittySVT (slot 57) | Revised 2026-10-16. CTL: DST + RVB. See write-up for exact states. |
| `HangingByAMoment-Lifehouse` | Hanging by a Moment — Lifehouse (~124 BPM, est.) | P/J | No (GP-5 only) | SnapTone: CleanSVT (slot 53) | Revised 2026-10-16. CTL: DST + RVB. See write-up for exact states. |
| `BringMeToLife-Evanescence` | Bring Me to Life — Evanescence (~95 BPM, est.) | P/J | No (GP-5 only) | SnapTone: GrittySVT (slot 57) | Revised 2026-10-16. CTL: DST. See write-up for exact states. |
| `BillieJean-ChrisCornell` | Billie Jean (Carry On studio version) — Chris Cornell (~70 BPM, est.) | P/J | No (GP-5 only) | SnapTone: FullB15 (slot 54) | Revised 2026-10-16. CTL: DST + RVB. See write-up for exact states. |

Set of 4 for a second worship set (2026-10-05). Board knobs are fixed across all 4; footswitches are free. Donner comp on (COMP 40) all set. Tidal Wave preamp on all set; its drive section (Drive 42, Blend 40) is the set's only drive, stomped per song in place of the GP-5 Bass OD. FOH comes from the DC210XLT's DI, so every patch keeps its cab sim. Flamma (-OCT 35) only for The Blessing's bridge/climax. Fuzz and Narcissus off. Only the GP-5 patch's settings change song to song. See any of the 4 patches' "Full Pedalboard" section for the exact settings.

| File | Song / Reference | Instrument | Full Board | AMP/CAB substitute | Notes |
|---|---|---|---|---|---|
| `River-JF` | The River — Jordan Feliz (124 BPM, Bb) | P/J | Yes (set board) | SnapTone: AvalonAD2022 (slot 52) | Revised 2026-10-16. CTL: none. Board: American Sound bypassed. See write-up for exact states. |
| `10000Reasons-MR` | 10,000 Reasons — Matt Redman (~73 BPM, G) | P/J | Yes (set board) | SnapTone: CleanB15 (slot 51) | Revised 2026-10-16. CTL: PRE. Board: American Sound bypassed. See write-up for exact states. |
| `ForeverReign-HS` | Forever Reign — Hillsong Worship (~83 BPM, C) | P/J | Yes (set board) | SnapTone: WorshipSVT (slot 59) | Revised 2026-10-16. CTL: PRE. Board: American Sound bypassed. See write-up for exact states. |
| `Blessing-KJ` | The Blessing — Kari Jobe, Cody Carnes (70 BPM, B) | P/J | Yes (set board) | SnapTone: WorshipSVT (slot 59) | Revised 2026-10-16. CTL: none. Board: American Sound bypassed. See write-up for exact states. |

### Artist/

| File | Song / Reference | Instrument | Full Board | AMP/CAB substitute | Notes |
|---|---|---|---|---|---|
| `Egan-Fretless` | Mark Egan signature style | Sire fretless | Yes | SnapTone: AvalonAD2022 (slot 52) | Revised 2026-10-16. CTL: MOD. MIDI: DLY. Board: American Sound bypassed. See write-up for exact states. |
| `Yes-Squire` | Chris Squire signature style (Yes) | P/J | Yes | SnapTone: BrightSVT (slot 55) | Revised 2026-10-16. CTL: DST + MOD. MIDI: DST. Board: American Sound bypassed. See write-up for exact states. |
| `SNTR-Bass` | Sixpence None the Richer signature style | P/J | Yes | SnapTone: CleanSVT (slot 53) | Revised 2026-10-16. CTL: MOD + RVB. MIDI: MOD. Board: American Sound bypassed. See write-up for exact states. |
| `Polyphia-Bass` | Tim Henson / Polyphia signature sound (Clay Gober's bass) | P/J | Yes | SnapTone: AvalonAD2022 (slot 52) | Revised 2026-10-16. CTL: none. MIDI: PRE. Board: American Sound bypassed. See write-up for exact states. |

### Style/

| File | Song / Reference | Instrument | Full Board | AMP/CAB substitute | Notes |
|---|---|---|---|---|---|
| `RammGrind` | Industrial metal (Rammstein — Ollie Riedel) | P/J | Yes | SnapTone: BrightSVT (slot 55) | Revised 2026-10-16. CTL: PRE. Board: American Sound bypassed. See write-up for exact states. |
| `EWF-Funk` | Earth, Wind & Fire funk (Verdine White; Louis Johnson, Rocco Prestia) | P/J | No (GP-5 only) | SnapTone: AvalonAD2022 (slot 52) | Revised 2026-10-16. CTL: EQ. MIDI: MOD. See write-up for exact states. |
