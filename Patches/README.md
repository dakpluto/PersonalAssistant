# Patch index

One row per patch in this directory. Built by hand from each `<Name>.json` / `<Name>.md` — update it whenever a patch is added, renamed, or removed (see `Prompts/gp5_prompt.md` step 9).

Patches are split first by Instrument Type (`Patches/Guitar/`, `Patches/Bass/`), then by Type (`Song/`, `Artist/`, `Album/`, `Style/`) — the same two fields `gp5_prompt.md` asks for up front when building a patch. A patch's four files (`.json`, `.prst`, `.md`, `.pdf`) live together in that `<Guitar|Bass>/<Type>/` folder. A Type subfolder only exists once a patch needs it.

## Guitar/

### Song/

| File | Song / Reference | Instrument | Full Board | AMP/CAB substitute | Notes |
|---|---|---|---|---|---|
| `Cassie-Flyleaf` | Cassie — Flyleaf (original studio version) | Strat | Yes | IR: American Twin 2x12 Medium Mix | CTL on DST + DLY (inverted): clean ambient verse vs. heavy chorus wall |
| `ClickClickBoom-Sal` | Click Click Boom — Saliva (100 BPM) | Strat | Yes | IR: British Checkerboard 4x12 Medium Mix | CTL on DST + DLY + RVB: tight verse riff vs. boosted/wet solo lead |
| `Creep-RH` | Creep — Radiohead | Strat | Yes | — | Clean/dirty split, CTL on PRE boost + DST |
| `December-CS` | December — Collective Soul | Strat | No | — | CTL on DST + MOD (inverted) + DLY: clean vibe intro vs. driven riff |
| `EverydayBlues-JM` | Everyday I Have the Blues — John Mayer (*Where the Light Is*) | Strat | Yes | — | Full pedalboard chain |
| `KissMeSNTR` | Kiss Me — Sixpence None the Richer | Strat | No | — | CTL on DST + DLY + RVB: dry verse strum vs. lifted hook/bridge |
| `SisterChristian-NR` | Sister Christian — Night Ranger | Strat | Yes | — | CTL on DST + EQ + DLY (3-module max) |
| `Wonderland-JM` | Your Body is a Wonderland — John Mayer (*Room for Squares*) | Strat | No | NAM: Two-Rock JM Sig #83 + Dumble SSS cab | AMP + CAB both null |

### Album/

| File | Song / Reference | Instrument | Full Board | AMP/CAB substitute | Notes |
|---|---|---|---|---|---|
| `Lion-EW` | *Lion* — Elevation Worship (CCM / modern worship, whole-album build) | Strat | Yes | IR: American Twin 2x12 Medium Mix | CAB null, real AMP (Dark Twin) |

## Bass/

### Song/

Set of 5 for one worship set — full board (Flamma octave, Donner comp, Donner fuzz, Joyo Tidal Wave, Joyo Narcissus) is identical/fixed across all 5; only the GP-5 patch changes song to song. See any patch's "Full Pedalboard" section for the shared board config.

| File | Song / Reference | Instrument | Full Board | AMP/CAB substitute | Notes |
|---|---|---|---|---|---|
| `UnstopGod-EW` | Unstoppable God — Elevation Worship (132 BPM, B) | P/J | Yes | — | CTL on PRE Boost + DST: verse vs. driven chorus/bridge |
| `GivingAll-MG` | Giving It All to You — Michael Gungor (100 BPM, C) | P/J | Yes | — | No CTL — warm, one-sound indie-folk tone throughout |
| `YourLove-UP` | Your Love Changes Everything — United Pursuit (71 BPM, A) | P/J | Yes | — | CTL on PRE Micro Boost + RVB Hall: intimate verse vs. chorus swell |
| `BreadBroken-JD` | The Bread Has Been Broken — Jeff Deyo (~72 BPM, E) | P/J | Yes | — | No CTL — dark, minimal communion tone throughout |
| `Thrive-CC` | Thrive — Casting Crowns (115 BPM, F#) | P/J | Yes | — | CTL on DST: punchy verse vs. driven chorus |
| `DYFAM-SM` | Don't You Forget About Me — Simple Minds (114 BPM) | P/J | Yes | — | Clean 80s pulse; CTL on PRE Boost (+FS-08 octave): verse/chorus vs. outro hook |
| `LoveShack-B52` | Love Shack — The B-52's (134 BPM) | P/J | Yes | — | Bouncy dance-punk groove; CTL on PRE Boost + Bass OD: verse vs. chorus hook |
| `YourWaysBetter-FF` | Your Ways Better — Forrest Frank (~92 BPM, est.) | P/J | Yes | — | Chill lo-fi worship-pop; CTL on DST (Bass OD) + RVB: subtle verse-to-chorus lift, deliberately understated |
| `IWantToKnow-Foreigner` | I Want to Know What Love Is — Foreigner (~67 BPM, est.) | P/J | Yes | NAM: Darkglass B7K Ultra (clean), Slot 64 | CTL on PRE Micro Boost + RVB Hall: intimate verse vs. big choir/chorus swell |
| `CrashIntoMe-DMB` | Crash Into Me — Dave Matthews Band (~70 BPM, est.) | P/J | Yes | NAM: Darkglass Harmonic Booster (clean), Slot 60 | CTL on RVB Room only: understated verse vs. small hook lift, no big swell |
| `Parallels-Yes` | Parallels — Yes (~132 BPM, est.) | P/J | Yes | IR: Sunn215, Slot 8 | No CTL — massive, driven "bass through a church organ amp" tone throughout; V-Roto vibrato for the swirl |
| `You-Candlebox` | You — Candlebox (~78 BPM, est.) | P/J | Yes | NAM: Darkglass Vintage Deluxe, Slot 61 | CTL on PRE Micro Boost + RVB Hall: warm restrained verse vs. driven anthemic chorus |
| `ImSoSick-Flyleaf` | I'm So Sick — Flyleaf (~102 BPM, est.) | P/J | Yes | NAM: Darkglass Alpha Omega (Fuzz), Slot 63 | CTL on PRE Micro Boost + RVB Room: driven verse vs. bigger/thicker chorus wall |
| `DayLife-Beatles` | A Day in the Life — The Beatles (85 BPM, est.) | P/J | Yes | IR: EBS410, Slot 4 | CTL on PRE Micro Boost + RVB Room (inverted): melodic Lennon verse vs. tight, driving McCartney bridge |
| `HeyJealousy-GB` | Hey Jealousy — Gin Blossoms (116 BPM) | P/J | Yes | NAM: Darkglass Vintage Deluxe, Slot 61 | CTL on PRE Micro Boost + RVB Room: laid-back verse vs. pushed, brighter chorus |
| `StillYTMO-ELP` | Still...You Turn Me On — Emerson, Lake & Palmer (~72 BPM, est.) | P/J | Yes | IR: TC410, Slot 9 | Written part, not a note-for-note transcription of Lake's actual bass. CTL on PRE Micro Boost + DST Bass OD + RVB Hall: minimal dry verse vs. driven mid-section |
| `Everlong-FF` | Everlong — Foo Fighters (158 BPM) | P/J | Yes | NAM: Darkglass B7K Ultra, Slot 64 | CTL on PRE Micro Boost + RVB Room: tight driving verse riff vs. big, open chorus |
| `LaGrange-ZZTop` | La Grange — ZZ Top (144 BPM, est.) | P/J | Yes | IR: Apg810, Slot 3 | No dynamic split in the song; CTL on DST (Bass OD): main boogie groove vs. solo/outro push |
| `CliffsOfDover-EJ` | Cliffs of Dover — Eric Johnson (~133 BPM, est.) | P/J | Yes | NAM: Darkglass Harmonic Booster (clean), Slot 60 | CTL on MOD (B-Chorus) + RVB Room: driving main groove vs. spacious mid-tune interlude |
| `GonnaBeMyGirl-Jet` | Are You Gonna Be My Girl — Jet (137 BPM, est.) | P/J | Yes | IR: Hartke410, Slot 6 | Bass through a Marshall (UK 800) for garage-rock bark; CTL on PRE Micro Boost + RVB Room: lean verse vs. fuller chorus |
| `Uprising-Muse` | Uprising — Muse (128 BPM) | P/J | Yes | IR: Sunn215, Slot 8 | Fuzz + octave + envelope filter for a "synth bass" texture; CTL on PRE Toucher (inverted) + DST Bass OD + RVB Room: synth-pulse verse vs. big rock chorus |
| `KnightsOfCydonia-Muse` | Knights of Cydonia — Muse (137 BPM) | P/J | Yes | NAM: Darkglass Alpha Omega (Distortion), Slot 62 | CTL on PRE Micro Boost + RVB Hall: galloping verse riff vs. big chorus/outro |
| `TennesseeWhiskey-Stapleton` | Tennessee Whiskey — Chris Stapleton (68 BPM, est.) | Sire fretless (Passive) | Yes | IR: Apg115, Slot 1 | Warm soul-blues tone, no drive anywhere; CTL on PRE Micro Boost + RVB Room: laid-back verse vs. chorus/solo lift |
| `MoneyForNothing-DireStraits` | Money for Nothing — Dire Straits (120 BPM, est.) | P/J | Yes | IR: EBS410, Slot 4 | Clean, punchy 80s tone with light always-on B-Chorus sheen; CTL on PRE Micro Boost + RVB Room: driving verse vs. chorus hook |
| `Hysteria-Muse` | Hysteria — Muse (129 BPM) | P/J | Yes | IR: Mesa215, Slot 7 | Maximalist fuzz-bass build: Stylish Fuzz + Bass OD + Mess DualV stacked, sub-octave on Flamma; CTL on PRE Micro Boost + RVB Room: main riff vs. chorus push |
| `One-Metallica` | One — Metallica (~85 BPM base, outro ~double-time) | P/J | Yes | IR: V30112 (guitar cab), Slot 10 | Bass through a Marshall (UK 800); CTL on PRE Micro Boost + DST SM Dist + RVB Room (inverted): clean intro/verse vs. heavy machine-gun outro |
| `UnderTheBridge-RHCP` | Under the Bridge — Red Hot Chili Peppers (85 BPM, est.) | P/J | Yes | IR: Apg115410, Slot 2 | Warm, restrained, un-Flea clean tone; CTL on PRE Micro Boost + RVB Hall (big): quiet verse vs. choir-backed outro swell |
| `PurpleRain-Prince` | Purple Rain — Prince (112 BPM, est.) | P/J | Yes | IR: EVM112, Slot 5 | Tasteful supportive part for a song famous for having almost no bass on the record; CTL on PRE Micro Boost + RVB Hall (huge): quiet verse vs. gospel-scale climax |
| `NovemberRain-GNR` | November Rain — Guns N' Roses (~52 BPM, est.) | P/J | Yes | IR: Apg810, Slot 3 | CTL on PRE Micro Boost + DST La Charger + RVB Hall: restrained piano-verse vs. huge driven rock climax |
| `BasketCase-GreenDay` | Basket Case — Green Day (171 BPM) | P/J | Yes | IR: Hartke410, Slot 6 | Bright, punchy pop-punk with always-on Bass OD blend (Dirnt's clean+dirty tone); CTL on PRE Micro Boost + RVB Room: driving verse vs. chorus push |
| `WontBackDown-TomPetty` | I Won't Back Down — Tom Petty (93 BPM, est.) | P/J | Yes | IR: TC410, Slot 9 | Warm, direct heartland rock tone, no drive anywhere; CTL on PRE Micro Boost + RVB Room (subtle): steady verse/chorus vs. gentle hook lift |
| `LikeTheWayIDo-Etheridge` | Like the Way I Do — Melissa Etheridge (~80 BPM, est.) | P/J | Yes | IR: Apg810, Slot 3 | CTL on PRE Micro Boost + DST Darktale + RVB Room (inverted): moody restrained intro/verse vs. raw, dry, driving climax |
| `Kokomo-BeachBoys` | Kokomo — The Beach Boys (104 BPM, est.) | P/J | Yes | IR: EVM112, Slot 5 | Breezy, glossy yacht-pop tone (J-120 CL clean amp) with always-on B-Chorus shimmer; CTL on PRE Micro Boost + RVB Room: main groove vs. gentle hook lift |
| `1234-Feist` | 1234 — Feist (127 BPM, est.) | Sire fretless (Passive) | Yes | IR: Apg115, Slot 1 | Warm, retro upright-adjacent fretless tone, no drive anywhere; CTL on PRE Micro Boost + RVB Room: bouncy main groove vs. gentle build as horns stack up |
| `1979-SmashingPumpkins` | 1979 — The Smashing Pumpkins (126 BPM, est.) | P/J | No (GP-5 only) | IR: EBS410, Slot 4 | Hazy, chorused/delayed dream-pop tone (always-on B-Chorus + Analog delay); CTL on PRE Micro Boost + RVB Room: verse vs. gentle hook lift |
| `AllForYou-SisterHazel` | All for You — Sister Hazel (100 BPM, est.) | P/J | No (GP-5 only) | IR: Apg115410, Slot 2 | Warm, clean 90s alt-rock tone, no drive anywhere; CTL on PRE Micro Boost + RVB Room: relaxed verse vs. gentle chorus-hook lift |
| `Ecstasy-RustedRoot` | Ecstasy — Rusted Root (~102 BPM, est.) | P/J | No (GP-5 only) | IR: Hartke410, Slot 6 | Bass through a Fender Bassman Bright (Bellman 59B); CTL on PRE Micro Boost + DST Green OD + RVB Hall: syncopated tribal-rock groove vs. big cathartic climax |
| `WhenIComeAround-GreenDay` | When I Come Around — Green Day (119 BPM) | P/J | Yes | IR: EBS410, Slot 4 | Laid-back cousin to Basket Case, same Bass OD blend (Dirnt's clean+dirty tone); CTL on PRE Micro Boost + RVB Room: relaxed verse vs. chorus lift |
| `Higher-Creed` | Higher — Creed (85 BPM, est.) | P/J | Yes | NAM: Darkglass B7K Ultra, Slot 64 | Same recipe as Everlong (same quiet-verse/huge-chorus post-grunge DNA); CTL on PRE Micro Boost + RVB Room: restrained verse vs. big chorus |
| `TouchPeelStand-DaysOfTheNew` | Touch, Peel, and Stand — Days of the New (~83 BPM, est.) | P/J | Yes | NAM: Darkglass Alpha Omega (Fuzz), Slot 63 | Dark, doomy acoustic-grunge tone, always-on Room (doesn't grow for chorus); CTL on PRE Micro Boost only: moody verse vs. heavier driven chorus |
| `ProudMary-IkeTina` | Proud Mary — Ike & Tina Turner (117 BPM, slow intro much slower) | P/J | Yes | IR: Apg115, Slot 1 | Classic Motown/soul tone; CTL on PRE Micro Boost + RVB Room (inverted): sultry "nice and easy" slow intro vs. fast, tight "nice and rough" groove |
| `AintNothinBoutYou-BrooksDunn` | Ain't Nothing 'Bout You — Brooks & Dunn (128 BPM, est.) | P/J | Yes | IR: Hartke410, Slot 6 | Clean, bright, driving country-rock tone, no drive anywhere; CTL on PRE Micro Boost + RVB Room: driving verse vs. chorus lift |
| `Hair-GrahamCentralStation` | Hair — Graham Central Station (~104 BPM, est.) | P/J | Yes | IR: Apg810, Slot 3 | Larry Graham slap-bass tone: "smiley face" EQ, two stacked compressors (PRE COMP4 + Ultimate Comp); no CTL — one groove-consistent tone throughout |
| `Machinehead-Bush` | Machinehead — Bush (147 BPM, est.) | P/J | No (GP-5 only) | AMP: Classic Bass + IR: Apg810, Slot 3 | CTL on PRE Micro Boost + RVB Room: dry driving verse groove vs. boosted, roomier chorus |
| `Adrift-LS` | Adrift — Lunatic Soul | Sire fretless (Active) | No (GP-5 only) | AMP: Mess Bass + IR: EBS410, Slot 4 | Atmospheric/ambient prog build; CTL on DLY (Analog) + RVB Hall: dry/close verse vs. big spacious swell |
| `Anthem-GC` | The Anthem — Good Charlotte | P/J | No (GP-5 only) | AMP: Classic Bass + IR: Apg810, Slot 3 | CTL on DST (Bass OD) + RVB Room: tight dry verse punch vs. grittier, bigger chorus |
| `StreamCons-DT` | Stream of Consciousness — Dream Theater (instrumental) | P/J | No (GP-5 only) | AMP: Classic Bass + IR: Apg810, Slot 3 | CTL on PRE Micro Boost + DST Bass OD + RVB Room: moody intro/unison passages vs. full-band blast sections |
| `Metropolis1-DT` | Metropolis Pt. 1, The Miracle and the Sleeper — Dream Theater (~130 BPM, est.) | P/J | No (GP-5 only) | AMP: Classic Bass + always-on DST Bass OD + IR: Hartke410, Slot 6 | CTL on PRE Micro Boost + RVB Room (inverted): quiet intro/interlude vs. driving main riff |
| `PullMeUnder-DT` | Pull Me Under — Dream Theater | P/J | No (GP-5 only) | AMP: Mess Bass + IR: Mesa215, Slot 7 | CTL on DST Bass OD + RVB Room: dry driving verse/chorus groove vs. grittier instrumental-break push |
| `SpiritCarriesOn-DT` | The Spirit Carries On — Dream Theater | Sire fretless (Active) | No (GP-5 only) | AMP: Mess Bass + IR: EBS410, Slot 4 | CTL on PRE Micro Boost + RVB Hall: restrained verse vs. boosted gospel-choir climax |
| `Heaven-LLB` | Heaven — Los Lonely Boys | Sire fretless (Passive) | No (GP-5 only) | IR: Apg115, Slot 1 | Soulful Tejano-rock ballad, clean throughout; CTL on PRE Micro Boost + RVB Hall: dry/close verse vs. boosted, roomier chorus |
| `Homegrown-ZBB` | Homegrown — Zac Brown Band | P/J | No (GP-5 only) | IR: Hartke410, Slot 6 | Bright, punchy country-rock, no drive; CTL on PRE Micro Boost + RVB Room: tight dry verse vs. boosted/brighter chorus |
| `KneeDeep-ZBB` | Knee Deep — Zac Brown Band (feat. Jimmy Buffett) | Sire fretless (Passive) | No (GP-5 only) | IR: TC410, Slot 9 | Chill island-vibe groove; CTL on PRE Micro Boost + RVB Room: laid-back verse vs. fuller chorus |
| `HeadsCarolina-JDM` | Heads Carolina, Tails California — Jo Dee Messina (~118 BPM, est.) | P/J | No (GP-5 only) | IR: TC410, Slot 9 | Bright, bouncy 90s country-pop, no drive; CTL on PRE Micro Boost + RVB Room: dry verse vs. brighter chorus lift |
| `IndependenceDay-MM` | Independence Day — Martina McBride (~120 BPM) | P/J | No (GP-5 only) | IR: Hartke410, Slot 6 | Driving, weighty country-rock, no drive; CTL on PRE Micro Boost + RVB Room: restrained verse vs. driving chorus |
| `NothingAtAll-AK` | When You Say Nothing At All — Alison Krauss | Sire fretless (Passive) | No (GP-5 only) | IR: Apg115, Slot 1 | Warm, sparse, upright-adjacent tone, no drive; CTL on RVB Room only: near-one-sound patch, subtle lift for choruses/bridge |
| `LoveWillTurn-KR` | Love Will Turn You Around — Kenny Rogers | P/J | No (GP-5 only) | IR: EVM112, Slot 5 | Bright, bouncy early-80s pop-country, no drive; CTL on PRE Micro Boost + RVB Room: dry tight verse vs. boosted, brighter chorus |
| `Lucille-KR` | Lucille — Kenny Rogers | Sire fretless (Passive) | No (GP-5 only) | IR: Apg115410, Slot 2 | Warm mid-70s country story-song tone; CTL on PRE Micro Boost + RVB Room: restrained verse vs. slightly lifted chorus |
| `TheGambler-KR` | The Gambler — Kenny Rogers | Sire fretless (Passive) | No (GP-5 only) | IR: TC410, Slot 9 | Laid-back storytelling groove, no drive; CTL on PRE Micro Boost + RVB Room: dry verse vs. lifted "know when to hold 'em" hook |
| `IslandsInStream-KR` | Islands in the Stream — Kenny Rogers (duet w/ Dolly Parton, ~104 BPM, est.) | Sire fretless (Active) | No (GP-5 only) | IR: EBS410, Slot 4 | Smooth, polished pop-country, light always-on B-Chorus sheen; CTL on PRE Micro Boost + RVB Room: dry verse vs. lifted chorus hook |
| `Lady-KR` | Lady — Kenny Rogers (~68 BPM) | Sire fretless (Active) | No (GP-5 only) | AMP: Mess Bass + IR: EBS410, Slot 4 | Silky Lionel Richie-penned soul ballad; CTL on RVB Hall only: dry close verse vs. subtle bridge/final-chorus swell |
| `Comedown-Bush` | Comedown — Bush (~92 BPM, est.) | P/J | No (GP-5 only) | AMP: Classic Bass + always-on DST Bass OD + IR: Sunn215, Slot 8 | Darker/moodier sibling to Machinehead; CTL on PRE Micro Boost + RVB Room: murky restrained verse vs. heavier fuzzed chorus |

### Artist/

| File | Song / Reference | Instrument | Full Board | AMP/CAB substitute | Notes |
|---|---|---|---|---|---|
| `Egan-Fretless` | Mark Egan signature style | Sire fretless | Yes | — | Chorus + always-on delay for fretless glide |
| `Yes-Squire` | Chris Squire signature style (Yes) | P/J | Yes | — | CTL on PRE boost + DST (inverted: on by default, CTL kills them) |
| `SNTR-Bass` | Sixpence None the Richer signature style | P/J | Yes | — | CTL on MOD (B-Chorus) + RVB: dry pop-bounce vs. chorus/reverb dream-pop |

### Style/

| File | Song / Reference | Instrument | Full Board | AMP/CAB substitute | Notes |
|---|---|---|---|---|---|
| `RammGrind` | Industrial metal (Rammstein — Ollie Riedel) | P/J | Yes | NAM: Darkglass Alpha Omega (Distortion), Slot 62 | Fuzz + Tidal Wave feed the NAM's own distortion; CTL on PRE Micro Boost: base grind vs. pushed chorus/breakdown |
