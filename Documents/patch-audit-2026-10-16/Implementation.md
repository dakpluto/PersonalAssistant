# Approved patch revisions — implementation record

Completed 2026-10-16. All **195 patches** were revised, encoded and documented.

- 135 bass patches and 60 guitar patches.
- 195 JSON specs, 195 PRST files, 195 Markdown write-ups and 195 PDFs updated.
- Every PRST is 507 bytes, with a valid CRC and settings matching its JSON.
- All model names, parameter keys and numeric ranges validated; no omitted active controls remain.
- CTL stays within three blocks, MIDI stays within the four supported blocks, and the fixed routing is preserved.
- 744 PDF pages rendered and checked for text bounds; visual spot checks covered the final layouts.
- All 195 index rows updated.
- 32 instrument-first screen labels disambiguated; all 195 ten-character screen labels are unique.
- 74 full-board write-ups rebuilt with pedal controls and independent stomps. Shared four-song/five-song worship board controls remain consistent.
- Audited SnapTone volumes and Michael’s explicit patch-level volume adjustments preserved.
- 199 existing patch copies (398 PRST/PDF attachments) refreshed for the 195 patches. EWF-Funk is intentionally attached to five existing pieces, all updated.

## Concrete fixes

Metropolis bass now explicitly sets EQ VOL 50 and uses Mess Bass/User IR 7. Everyday Blues uses Slapback 288ms, within its catalog range; patch VOL 65 and capture VOL 75 stay unchanged. Cassie now encodes loaded User IR 10 at VOL 50. The encoder now fills omitted controls from catalog defaults and rejects out-of-range/non-finite values. Regression checks show the 193 other complete, valid original presets encode identically under the hardened encoder.

## Chosen alternatives

The approved review included mutually exclusive listening alternatives. This implementation selects one coherent baseline per patch. Dryad uses CleanB15, American Pie guitar uses NashClean, Found guitar and Sister Christian use JCM800Clean, Ironic guitar uses TwinClean, and the two additional Myung patches use Mess Bass/User IR 7. December retains ClassicMarshall with reduced front-end level/EQ; a cleaner-capture audition remains optional. Hysteria retains HairySVT with one principal board fuzz. Creep retains its loaded Foxy cab rather than introducing an unassigned IR dependency. Other British Alnico/EVM and capture alternatives remain optional listening comparisons. No hardware audition or measured loudness match was performed.

## Records and recovery

The original JSON and Markdown are preserved in [inventory.json](inventory.json). Exact original binaries/PDFs and the old index are archived locally in [.runtime/before-approved-audit.zip](../../.runtime/before-approved-audit.zip), which is excluded from Git. Current build hashes are in [build-results.json](build-results.json). Upload response URLs and file IDs are in [publication-results.json](publication-results.json). The machine-readable setting changes are in [implementation-manifest.json](implementation-manifest.json); pedal controls and maps are in [implementation-details.json](implementation-details.json).

## Updated patches

| # | Patch | Write-up | Site |
|---|---|---|---|
| 1 | Egan-Fretless | [Settings](../../Patches/Bass/Artist/Egan-Fretless.md) | [Open piece](https://www.dakplutomusic.us/piece/19732f23-8be8-497d-b991-6cac24ef4823) |
| 2 | Polyphia — Clay Gober Signature Bass Sound | [Settings](../../Patches/Bass/Artist/Polyphia-Bass.md) | [Open piece](https://www.dakplutomusic.us/piece/66eb4697-76af-4c0d-b188-5d4da7cac698) |
| 3 | SNTR-Bass — Sixpence None the Richer Signature Bass Tone | [Settings](../../Patches/Bass/Artist/SNTR-Bass.md) | [Open piece](https://www.dakplutomusic.us/piece/e1dafd5b-d4ec-4010-8513-23b0b5aa141a) |
| 4 | Yes — Chris Squire Signature Bass Tone | [Settings](../../Patches/Bass/Artist/Yes-Squire.md) | [Open piece](https://www.dakplutomusic.us/piece/09cc2f4c-7f72-47fb-a7be-91b12dc95ed0) |
| 5 | 10,000 Reasons — Matt Redman | [Settings](../../Patches/Bass/Song/10000Reasons-MR.md) | [Open piece](https://www.dakplutomusic.us/piece/cae6e362-6464-4740-be02-8e671bd7d5a6) |
| 6 | 1234 — Feist | [Settings](../../Patches/Bass/Song/1234-Feist.md) | [Open piece](https://www.dakplutomusic.us/piece/81dded2d-8033-4483-88c9-97858ff6ef7a) |
| 7 | 1979 — The Smashing Pumpkins | [Settings](../../Patches/Bass/Song/1979-SmashingPumpkins.md) | [Open piece](https://www.dakplutomusic.us/piece/de35851d-f01f-42ee-8c79-2d0f9d8de3e8) |
| 8 | Adrift-LS — Adrift by Lunatic Soul | [Settings](../../Patches/Bass/Song/Adrift-LS.md) | [Open piece](https://www.dakplutomusic.us/piece/20fc8bd6-2577-4b96-9da8-185c5c4ff4cf) |
| 9 | After the Love Has Gone — Earth, Wind & Fire | [Settings](../../Patches/Bass/Song/AfterTheLove-EWF.md) | [Open piece](https://www.dakplutomusic.us/piece/abd61b01-2f6e-4802-960e-7bd33585da7a) |
| 10 | Ain't Nothing 'Bout You (GP-5 Only) — Brooks & Dunn | [Settings](../../Patches/Bass/Song/AintNothinBoutYou-BrooksDunn-GP5.md) | [Open piece](https://www.dakplutomusic.us/piece/560212a7-7895-4334-b24b-12219b0af2d8) |
| 11 | Ain't Nothing 'Bout You — Brooks & Dunn | [Settings](../../Patches/Bass/Song/AintNothinBoutYou-BrooksDunn.md) | [Open piece](https://www.dakplutomusic.us/piece/560212a7-7895-4334-b24b-12219b0af2d8) |
| 12 | All for You — Sister Hazel | [Settings](../../Patches/Bass/Song/AllForYou-SisterHazel.md) | [Open piece](https://www.dakplutomusic.us/piece/d13de026-3934-4314-9c73-65e771b334b9) |
| 13 | American Pie — Don McLean | [Settings](../../Patches/Bass/Song/AmericanPie-DonMcLean.md) | [Open piece](https://www.dakplutomusic.us/piece/596f080c-aae0-43f9-a7db-95e1a05b6190) |
| 14 | The Anthem — Good Charlotte | [Settings](../../Patches/Bass/Song/Anthem-GC.md) | [Open piece](https://www.dakplutomusic.us/piece/7e42dafc-dba5-457a-9187-5b71103bf5da) |
| 15 | Basket Case — Green Day | [Settings](../../Patches/Bass/Song/BasketCase-GreenDay.md) | [Open piece](https://www.dakplutomusic.us/piece/2c2d1751-9581-44fa-ac7b-765fd2acec7a) |
| 16 | Beat It — Michael Jackson | [Settings](../../Patches/Bass/Song/BeatIt-MJ.md) | [Open piece](https://www.dakplutomusic.us/piece/2dc735d2-1888-40e1-be78-8347c621c2df) |
| 17 | Believe — Brooks & Dunn | [Settings](../../Patches/Bass/Song/Believe-BrooksDunn.md) | [Open piece](https://www.dakplutomusic.us/piece/180cdf3e-0990-4bae-9f25-27202560f229) |
| 18 | Billie Jean — Chris Cornell | [Settings](../../Patches/Bass/Song/BillieJean-ChrisCornell.md) | [Open piece](https://www.dakplutomusic.us/piece/77fed663-02ce-4773-a61c-46e072373efa) |
| 19 | The Blessing — Kari Jobe, Cody Carnes | [Settings](../../Patches/Bass/Song/Blessing-KJ.md) | [Open piece](https://www.dakplutomusic.us/piece/d4b30607-7d2b-4612-8017-fe27a783b9de) |
| 20 | The Bread Has Been Broken — Jeff Deyo | [Settings](../../Patches/Bass/Song/BreadBroken-JD.md) | [Open piece](https://www.dakplutomusic.us/piece/1ad2cd5b-8884-425d-8045-6b2c29b64bc0) |
| 21 | Bright Size Life — Pat Metheny | [Settings](../../Patches/Bass/Song/BrightSizeLife-Metheny.md) | [Open piece](https://www.dakplutomusic.us/piece/fcf9ea5c-311b-4965-908a-dac5ec84060c) |
| 22 | Bring Me to Life — Evanescence | [Settings](../../Patches/Bass/Song/BringMeToLife-Evanescence.md) | [Open piece](https://www.dakplutomusic.us/piece/e004c0fa-442c-45c9-91e7-4f377742e4b5) |
| 23 | Civil War — Guns N' Roses | [Settings](../../Patches/Bass/Song/CivilWar-GNR.md) | [Open piece](https://www.dakplutomusic.us/piece/09745640-7696-4983-867f-cd7d0bb40fcb) |
| 24 | Cliffs of Dover — Eric Johnson | [Settings](../../Patches/Bass/Song/CliffsOfDover-EJ.md) | [Open piece](https://www.dakplutomusic.us/piece/f4afac73-d96a-4453-9a86-a15b4c5f6b0b) |
| 25 | Comedown — Bush | [Settings](../../Patches/Bass/Song/Comedown-Bush.md) | [Open piece](https://www.dakplutomusic.us/piece/b9347e1e-8929-4d4e-8c9b-63d866f5e764) |
| 26 | Comfortably Numb — Pink Floyd | [Settings](../../Patches/Bass/Song/ComfortablyNumb-PinkFloyd.md) | [Open piece](https://www.dakplutomusic.us/piece/5f0ce2a6-67c2-4296-b499-e9693b997ecf) |
| 27 | Conceiving You — Riverside | [Settings](../../Patches/Bass/Song/ConceivingYou-Riverside.md) | [Open piece](https://www.dakplutomusic.us/piece/818260cd-63c9-44cf-b752-2f885ab2af61) |
| 28 | Crash Into Me — Dave Matthews Band | [Settings](../../Patches/Bass/Song/CrashIntoMe-DMB.md) | [Open piece](https://www.dakplutomusic.us/piece/00ff96e6-6baf-4913-97ee-c1a42f70a8f0) |
| 29 | Creek Mary's Blood — Nightwish | [Settings](../../Patches/Bass/Song/CreekMarysBlood-Nightwish.md) | [Open piece](https://www.dakplutomusic.us/piece/0caf9a44-a8c3-47cd-bda3-56c23088fcda) |
| 30 | DYFAM-SM — Don't You Forget About Me (Simple Minds, 1985, ~114 BPM) | [Settings](../../Patches/Bass/Song/DYFAM-SM.md) | [Open piece](https://www.dakplutomusic.us/piece/222e97bd-6091-4813-83b7-b725fe6e5e42) |
| 31 | Danger Zone — Kenny Loggins | [Settings](../../Patches/Bass/Song/DangerZone-KennyLoggins.md) | [Open piece](https://www.dakplutomusic.us/piece/29a59c09-2372-4fcc-820e-2b3394a79813) |
| 32 | Dawn of Victory — Rhapsody | [Settings](../../Patches/Bass/Song/DawnOfVictory-Rhapsody.md) | [Open piece](https://www.dakplutomusic.us/piece/a7db4eba-b02d-42c2-b7fc-a0c59c734a60) |
| 33 | A Day in the Life — The Beatles (Bass) | [Settings](../../Patches/Bass/Song/DayLife-Beatles.md) | [Open piece](https://www.dakplutomusic.us/piece/a6b9092d-a846-4058-85c1-7212ed383702) |
| 34 | I'm Diggin' You (Like an Old Soul Record) — Meshell Ndegeocello | [Settings](../../Patches/Bass/Song/DigginYou-MN.md) | [Open piece](https://www.dakplutomusic.us/piece/c0bf43b2-22b8-45df-b70a-d7e564f3bcc7) |
| 35 | Dirt Road Anthem — Jason Aldean | [Settings](../../Patches/Bass/Song/DirtRoadAnthem-JasonAldean.md) | [Open piece](https://www.dakplutomusic.us/piece/0b36306b-53b6-4838-a42c-db4947908b0b) |
| 36 | Dryad of the Woods — Pain of Salvation | [Settings](../../Patches/Bass/Song/Dryad-PainOfSalvation.md) | [Open piece](https://www.dakplutomusic.us/piece/0e879be2-b1bc-4a21-a5f7-9c4332181157) |
| 37 | Ecstasy — Rusted Root | [Settings](../../Patches/Bass/Song/Ecstasy-RustedRoot.md) | [Open piece](https://www.dakplutomusic.us/piece/8e9e8045-937a-4243-a8b5-c4329ecee4fc) |
| 38 | Everlong — Foo Fighters | [Settings](../../Patches/Bass/Song/Everlong-FF.md) | [Open piece](https://www.dakplutomusic.us/piece/3a1240e9-8e50-4d71-9459-bddeb5350b92) |
| 39 | Fire — Ohio Players | [Settings](../../Patches/Bass/Song/Fire-OP.md) | [Open piece](https://www.dakplutomusic.us/piece/46b18f60-75f5-4bb4-a780-bbd86a89afa3) |
| 40 | Forever Reign — Hillsong Worship | [Settings](../../Patches/Bass/Song/ForeverReign-HS.md) | [Open piece](https://www.dakplutomusic.us/piece/e535fc33-5a26-4172-b7e8-2a78102223cc) |
| 41 | Found (The Unexpected Flaw of Searching) — Riverside | [Settings](../../Patches/Bass/Song/Found-Riverside.md) | [Open piece](https://www.dakplutomusic.us/piece/8f429d16-4d11-4699-ae06-2cb51b1d1362) |
| 42 | Giving It All to You — Michael Gungor | [Settings](../../Patches/Bass/Song/GivingAll-MG.md) | [Open piece](https://www.dakplutomusic.us/piece/75d3c210-2555-45c4-ab38-51e64e3accc8) |
| 43 | Are You Gonna Be My Girl — Jet | [Settings](../../Patches/Bass/Song/GonnaBeMyGirl-Jet.md) | [Open piece](https://www.dakplutomusic.us/piece/bff7eed7-1a5c-4c6a-a846-cf1fa6d9f3f1) |
| 44 | Hair — Graham Central Station | [Settings](../../Patches/Bass/Song/Hair-GrahamCentralStation.md) | [Open piece](https://www.dakplutomusic.us/piece/63f17f31-ecd3-4700-b75f-4e126dfbc401) |
| 45 | Hanging by a Moment — Lifehouse | [Settings](../../Patches/Bass/Song/HangingByAMoment-Lifehouse.md) | [Open piece](https://www.dakplutomusic.us/piece/7fb67a69-8e23-49df-b5e4-30a4377f4511) |
| 46 | Hard Workin' Man — Brooks & Dunn | [Settings](../../Patches/Bass/Song/HardWorkinMan-BrooksDunn.md) | [Open piece](https://www.dakplutomusic.us/piece/9bcf599a-ae50-4e2d-b089-9574cf4aa04f) |
| 47 | Heads Carolina, Tails California — Jo Dee Messina | [Settings](../../Patches/Bass/Song/HeadsCarolina-JDM.md) | [Open piece](https://www.dakplutomusic.us/piece/59dacbe5-67b3-4950-9ac0-c591f18f15f2) |
| 48 | Heaven-LLB — Heaven by Los Lonely Boys | [Settings](../../Patches/Bass/Song/Heaven-LLB.md) | [Open piece](https://www.dakplutomusic.us/piece/f4759b7b-077f-4629-bfe3-77046513f1c2) |
| 49 | Hey Jealousy — Gin Blossoms | [Settings](../../Patches/Bass/Song/HeyJealousy-GB.md) | [Open piece](https://www.dakplutomusic.us/piece/25aca5f8-5213-4ea9-b3f4-a0caa7b728ab) |
| 50 | Higher — Creed | [Settings](../../Patches/Bass/Song/Higher-Creed.md) | [Open piece](https://www.dakplutomusic.us/piece/fae7dba0-d90d-46ac-8c23-116dd9abaa89) |
| 51 | Hoedown — Emerson, Lake & Palmer | [Settings](../../Patches/Bass/Song/Hoedown-ELP.md) | [Open piece](https://www.dakplutomusic.us/piece/2427cbe5-3927-4b55-af20-d12aeeb7031b) |
| 52 | Homegrown-ZBB — Homegrown by Zac Brown Band | [Settings](../../Patches/Bass/Song/Homegrown-ZBB.md) | [Open piece](https://www.dakplutomusic.us/piece/4ce02c39-72a7-41da-854d-700cc05a440f) |
| 53 | Honky Tonk Truth — Brooks & Dunn | [Settings](../../Patches/Bass/Song/HonkyTonkTruth-BrooksDunn.md) | [Open piece](https://www.dakplutomusic.us/piece/eeb94df8-27c5-4cc9-94bb-0d7d37632a17) |
| 54 | Hotel California — Eagles | [Settings](../../Patches/Bass/Song/HotelCalifornia-Eagles.md) | [Open piece](https://www.dakplutomusic.us/piece/954b2208-bb83-4a5f-be32-5210049f6df7) |
| 55 | Hysteria — Muse | [Settings](../../Patches/Bass/Song/Hysteria-Muse.md) | [Open piece](https://www.dakplutomusic.us/piece/35ebc7ee-ddaf-4cc9-996f-1c511dd5dd75) |
| 56 | I Want to Know What Love Is — Foreigner | [Settings](../../Patches/Bass/Song/IWantToKnow-Foreigner.md) | [Open piece](https://www.dakplutomusic.us/piece/7a7dc420-da91-4ea1-9b73-8bf741ff8668) |
| 57 | I Will Always Love You — Dolly Parton | [Settings](../../Patches/Bass/Song/IWillAlwaysLoveYou-Dolly.md) | [Open piece](https://www.dakplutomusic.us/piece/0b826a63-0162-4d5c-92ca-a0274c7d4dc5) |
| 58 | If You See Her — Brooks & Dunn | [Settings](../../Patches/Bass/Song/IfYouSeeHer-BrooksDunn.md) | [Open piece](https://www.dakplutomusic.us/piece/281df0e1-e30b-4b60-990e-296b1c3ea0ed) |
| 59 | I'll Be There for You — Bon Jovi | [Settings](../../Patches/Bass/Song/IllBeThereForYou-BonJovi.md) | [Open piece](https://www.dakplutomusic.us/piece/fb09bcde-0671-4820-b308-f3d8603412eb) |
| 60 | I'm So Sick — Flyleaf | [Settings](../../Patches/Bass/Song/ImSoSick-Flyleaf.md) | [Open piece](https://www.dakplutomusic.us/piece/74d39056-2e71-44e4-b28f-5bd5d87fbda1) |
| 61 | In Two Minds — Riverside | [Settings](../../Patches/Bass/Song/InTwoMinds-Riverside.md) | [Open piece](https://www.dakplutomusic.us/piece/24052a2b-98cf-4ef8-8374-34baef9a9c7e) |
| 62 | Independence Day - Martina McBride | [Settings](../../Patches/Bass/Song/IndependenceDay-MM.md) | [Open piece](https://www.dakplutomusic.us/piece/88bdf6a9-1a85-482c-ac2a-28fa837cfff4) |
| 63 | Ironic — Alanis Morissette | [Settings](../../Patches/Bass/Song/Ironic-Alanis.md) | [Open piece](https://www.dakplutomusic.us/piece/78aed3bd-eed6-4277-995b-a17b1f00b439) |
| 64 | Islands in the Stream — Kenny Rogers | [Settings](../../Patches/Bass/Song/IslandsInStream-KR.md) | [Open piece](https://www.dakplutomusic.us/piece/257fe772-9c0d-4e1a-9ade-799004e67f19) |
| 65 | It's Not My Time — 3 Doors Down | [Settings](../../Patches/Bass/Song/ItsNotMyTime-3DoorsDown.md) | [Open piece](https://www.dakplutomusic.us/piece/bef80591-50cc-4657-89cb-545e07693596) |
| 66 | Knee Deep — Zac Brown Band | [Settings](../../Patches/Bass/Song/KneeDeep-ZBB.md) | [Open piece](https://www.dakplutomusic.us/piece/1763efc9-81d7-41f8-829e-9f53928ac9d3) |
| 67 | Knights of Cydonia — Muse | [Settings](../../Patches/Bass/Song/KnightsOfCydonia-Muse.md) | [Open piece](https://www.dakplutomusic.us/piece/573019d6-1056-4d99-abd2-ffe31d9b2c7f) |
| 68 | Kokomo — The Beach Boys | [Settings](../../Patches/Bass/Song/Kokomo-BeachBoys.md) | [Open piece](https://www.dakplutomusic.us/piece/959f3375-c7aa-448c-9259-1c9662e66c2d) |
| 69 | La Grange — ZZ Top | [Settings](../../Patches/Bass/Song/LaGrange-ZZTop.md) | [Open piece](https://www.dakplutomusic.us/piece/94dbf535-1e1d-4a79-9036-0f0008cff033) |
| 70 | Lady — Kenny Rogers | [Settings](../../Patches/Bass/Song/Lady-KR.md) | [Open piece](https://www.dakplutomusic.us/piece/5b271d65-2c36-4457-a2eb-9c453804edd5) |
| 71 | Like the Way I Do — Melissa Etheridge | [Settings](../../Patches/Bass/Song/LikeTheWayIDo-Etheridge.md) | [Open piece](https://www.dakplutomusic.us/piece/bc65c73d-1095-47c8-9e59-cd049ab5e64b) |
| 72 | LoveShack-B52 — Love Shack (The B-52's, 1989, ~134 BPM) | [Settings](../../Patches/Bass/Song/LoveShack-B52.md) | [Open piece](https://www.dakplutomusic.us/piece/80955426-3a03-48aa-93e8-1093161d412c) |
| 73 | LoveWillTurn-KR — Love Will Turn You Around by Kenny Rogers | [Settings](../../Patches/Bass/Song/LoveWillTurn-KR.md) | [Open piece](https://www.dakplutomusic.us/piece/be0c7dca-751d-49bb-865c-95f0fe950b98) |
| 74 | Low Rider — War | [Settings](../../Patches/Bass/Song/LowRider-War.md) | [Open piece](https://www.dakplutomusic.us/piece/cf1c1891-ef67-4da7-b6d7-1a9bfd42f597) |
| 75 | Lucille-KR — Lucille by Kenny Rogers | [Settings](../../Patches/Bass/Song/Lucille-KR.md) | [Open piece](https://www.dakplutomusic.us/piece/df517259-19fe-436c-8a4b-0c2d77b45814) |
| 76 | Machinehead — Bush | [Settings](../../Patches/Bass/Song/Machinehead-Bush.md) | [Open piece](https://www.dakplutomusic.us/piece/51a2c52e-494f-4fd2-af10-bf59fa17e9a8) |
| 77 | Man in the Box — Alice In Chains | [Settings](../../Patches/Bass/Song/ManInTheBox-AIC.md) | [Open piece](https://www.dakplutomusic.us/piece/78eaaa1f-9ecb-4378-a4ba-c46c2617648c) |
| 78 | Mary Jane's Last Dance — Tom Petty | [Settings](../../Patches/Bass/Song/MaryJanesLastDance-TomPetty.md) | [Open piece](https://www.dakplutomusic.us/piece/fe264a4b-7fd1-41a9-a52c-a812a23e8412) |
| 79 | Metropolis1-DT — Metropolis Pt. 1, The Miracle and the Sleeper by Dream Theater | [Settings](../../Patches/Bass/Song/Metropolis1-DT.md) | [Open piece](https://www.dakplutomusic.us/piece/0b2140b8-7009-48c0-85ed-b53c26baf178) |
| 80 | Money for Nothing — Dire Straits | [Settings](../../Patches/Bass/Song/MoneyForNothing-DireStraits.md) | [Open piece](https://www.dakplutomusic.us/piece/4d073b76-ab30-4af5-b87c-960eacf3625f) |
| 81 | My Maria — Brooks & Dunn | [Settings](../../Patches/Bass/Song/MyMaria-BrooksDunn.md) | [Open piece](https://www.dakplutomusic.us/piece/836d1722-18c4-4bfd-a4c0-459a8b3c0202) |
| 82 | Neon — John Mayer | [Settings](../../Patches/Bass/Song/Neon-JohnMayer.md) | [Open piece](https://www.dakplutomusic.us/piece/9b019fcf-9f53-47bc-9352-ba028ae147f2) |
| 83 | Neon Moon — Brooks & Dunn | [Settings](../../Patches/Bass/Song/NeonMoon-BrooksDunn.md) | [Open piece](https://www.dakplutomusic.us/piece/b7a134cc-1fe1-4b15-9de5-96d4d532dff7) |
| 84 | When You Say Nothing At All — Alison Krauss | [Settings](../../Patches/Bass/Song/NothingAtAll-AK.md) | [Open piece](https://www.dakplutomusic.us/piece/39768bd3-bc17-4b24-b9a1-a0e80a346b31) |
| 85 | November Rain — Guns N' Roses | [Settings](../../Patches/Bass/Song/NovemberRain-GNR.md) | [Open piece](https://www.dakplutomusic.us/piece/2e9316da-b1f4-4e4b-9b1a-7d2b0f41434c) |
| 86 | One — Metallica | [Settings](../../Patches/Bass/Song/One-Metallica.md) | [Open piece](https://www.dakplutomusic.us/piece/d4faa142-310d-4711-9910-63b002f48e70) |
| 87 | One Last Breath — Creed | [Settings](../../Patches/Bass/Song/OneLastBreath-Creed.md) | [Open piece](https://www.dakplutomusic.us/piece/e5b6f532-0940-483f-b79c-e539788a98e4) |
| 88 | Only in America — Brooks & Dunn | [Settings](../../Patches/Bass/Song/OnlyInAmerica-BrooksDunn.md) | [Open piece](https://www.dakplutomusic.us/piece/d33cb7c7-1f6c-43c9-8cde-04a3350022b7) |
| 89 | Papa Was a Rollin' Stone — The Temptations (Bass) | [Settings](../../Patches/Bass/Song/PapaWasARollinStone-Temptations.md) | [Open piece](https://www.dakplutomusic.us/piece/b5acadac-15a8-4516-a01c-4242915089e8) |
| 90 | Parallels — Yes | [Settings](../../Patches/Bass/Song/Parallels-Yes.md) | [Open piece](https://www.dakplutomusic.us/piece/726eb19c-aa41-4a0a-8a99-160fb4482e8a) |
| 91 | Praise — Elevation Worship | [Settings](../../Patches/Bass/Song/Praise-EW.md) | [Open piece](https://www.dakplutomusic.us/piece/05d4ab54-f5cb-4926-94e6-ae524bc11431) |
| 92 | Proud Mary — Ike & Tina Turner | [Settings](../../Patches/Bass/Song/ProudMary-IkeTina.md) | [Open piece](https://www.dakplutomusic.us/piece/053760e5-435f-4f96-ba81-13612baa76ef) |
| 93 | Puff the Magic Dragon — Peter, Paul and Mary | [Settings](../../Patches/Bass/Song/PuffTheMagicDragon-PPM.md) | [Open piece](https://www.dakplutomusic.us/piece/0a6dec12-c752-471d-a3a4-fa11b1560e10) |
| 94 | Pull Me Under — Dream Theater | [Settings](../../Patches/Bass/Song/PullMeUnder-DT.md) | [Open piece](https://www.dakplutomusic.us/piece/0102b8b3-de6a-46b6-b7c4-c56b0e6a1240) |
| 95 | Purple Rain — Prince | [Settings](../../Patches/Bass/Song/PurpleRain-Prince.md) | [Open piece](https://www.dakplutomusic.us/piece/acb33c13-e760-4e44-add6-53a9416961ce) |
| 96 | Rainbow Connection — Kenny Loggins | [Settings](../../Patches/Bass/Song/RainbowConnection-KennyLoggins.md) | [Open piece](https://www.dakplutomusic.us/piece/3eb16d13-6fc8-4c86-a7da-efa01bd5fdc9) |
| 97 | Red Dirt Road — Brooks & Dunn | [Settings](../../Patches/Bass/Song/RedDirtRoad-BrooksDunn.md) | [Open piece](https://www.dakplutomusic.us/piece/7e50c63c-7aec-4633-aefd-abc1a67cef28) |
| 98 | The River — Jordan Feliz | [Settings](../../Patches/Bass/Song/River-JF.md) | [Open piece](https://www.dakplutomusic.us/piece/0fcef297-aa0c-45cf-98c8-26222d5166f6) |
| 99 | River Down Below — Riverside | [Settings](../../Patches/Bass/Song/RiverDownBelow-Riverside.md) | [Open piece](https://www.dakplutomusic.us/piece/325cea0b-2bd5-4642-b80b-a6cb99aa5cfc) |
| 100 | Sally's Song — The Nightmare Before Christmas | [Settings](../../Patches/Bass/Song/SallysSong-NBC.md) | [Open piece](https://www.dakplutomusic.us/piece/70a66967-b0d4-4190-a20f-663f1c362610) |
| 101 | Somebody Like You — Keith Urban | [Settings](../../Patches/Bass/Song/SomebodyLikeYou-KeithUrban.md) | [Open piece](https://www.dakplutomusic.us/piece/82991522-a96b-4354-a431-6327a5d27744) |
| 102 | Spider-Man Theme (1967 Cartoon) — Bob Harris & Paul Francis Webster | [Settings](../../Patches/Bass/Song/SpiderManTheme1967.md) | [Open piece](https://www.dakplutomusic.us/piece/ae7b21e8-ced3-4e56-9f2b-ff449757165e) |
| 103 | Spider-Man: The Animated Series Theme (1994) — Joe Perry | [Settings](../../Patches/Bass/Song/SpiderManTheme1994.md) | [Open piece](https://www.dakplutomusic.us/piece/daba958f-831d-41a0-8bdf-c59c69d5cc30) |
| 104 | Spidey and His Amazing Friends Theme — Patrick Stump | [Settings](../../Patches/Bass/Song/SpideyFriendsTheme.md) | [Open piece](https://www.dakplutomusic.us/piece/3e238073-12dd-4e53-bad1-94f5a639643c) |
| 105 | SpiritCarriesOn-DT — The Spirit Carries On by Dream Theater | [Settings](../../Patches/Bass/Song/SpiritCarriesOn-DT.md) | [Open piece](https://www.dakplutomusic.us/piece/8cd9ba7e-1a72-49a9-afd3-d9c8d5c7908e) |
| 106 | Stairway to Heaven — Led Zeppelin | [Settings](../../Patches/Bass/Song/Stairway-LedZeppelin.md) | [Open piece](https://www.dakplutomusic.us/piece/f54f114a-5aec-44c4-88ec-b295a20497ff) |
| 107 | Still...You Turn Me On — Emerson, Lake & Palmer | [Settings](../../Patches/Bass/Song/StillYTMO-ELP.md) | [Open piece](https://www.dakplutomusic.us/piece/93ce6d9e-6766-4615-a521-27b3db3bac99) |
| 108 | Storm Corrosion — Storm Corrosion | [Settings](../../Patches/Bass/Song/StormCorrosion-StormCorrosion.md) | [Open piece](https://www.dakplutomusic.us/piece/501a967f-3464-49f6-a064-5bb8a8b1ee8a) |
| 109 | Stream of Consciousness — Dream Theater | [Settings](../../Patches/Bass/Song/StreamCons-DT.md) | [Open piece](https://www.dakplutomusic.us/piece/925ec410-d1e5-4806-9ee8-5b3ff66d3b44) |
| 110 | Sultans of Swing — Dire Straits | [Settings](../../Patches/Bass/Song/SultansOfSwing-DireStraits.md) | [Open piece](https://www.dakplutomusic.us/piece/225390b3-dcce-4348-9ad9-cdbd85b3b882) |
| 111 | Surfin' U.S.A. — The Beach Boys (Bass) | [Settings](../../Patches/Bass/Song/SurfinUSA-BeachBoys.md) | [Open piece](https://www.dakplutomusic.us/piece/f6d3df66-f56c-4ab0-91f0-1bc34dd0a87b) |
| 112 | Sweet Child O' Mine — Guns N' Roses | [Settings](../../Patches/Bass/Song/SweetChild-GNR.md) | [Open piece](https://www.dakplutomusic.us/piece/09aec33c-93f9-430c-beb4-dd6620c187d2) |
| 113 | Sweet Leaf — Black Sabbath | [Settings](../../Patches/Bass/Song/SweetLeaf-BlackSabbath.md) | [Open piece](https://www.dakplutomusic.us/piece/dfbfa157-40b9-4952-827e-1cf7957bfc50) |
| 114 | Tennessee Whiskey — Chris Stapleton | [Settings](../../Patches/Bass/Song/TennesseeWhiskey-Stapleton.md) | [Open piece](https://www.dakplutomusic.us/piece/9b75d82d-232c-48ff-911f-90302567b6b7) |
| 115 | TheGambler-KR — The Gambler by Kenny Rogers | [Settings](../../Patches/Bass/Song/TheGambler-KR.md) | [Open piece](https://www.dakplutomusic.us/piece/61df1c44-5eae-4813-94fa-c4d869b993e0) |
| 116 | This Is Halloween — The Nightmare Before Christmas | [Settings](../../Patches/Bass/Song/ThisIsHalloween-NBC.md) | [Open piece](https://www.dakplutomusic.us/piece/871abbfd-f08d-4bff-8c0f-ddbe2525d258) |
| 117 | Thrive — Casting Crowns | [Settings](../../Patches/Bass/Song/Thrive-CC.md) | [Open piece](https://www.dakplutomusic.us/piece/e17713d2-10de-4443-8143-8909fbe4df88) |
| 118 | (I've Had) The Time of My Life — Bill Medley & Jennifer Warnes | [Settings](../../Patches/Bass/Song/TimeOfMyLife-DirtyDancing.md) | [Open piece](https://www.dakplutomusic.us/piece/2180894d-ffe8-41ce-a9b9-64d1255ab492) |
| 119 | Touch, Peel, and Stand — Days of the New | [Settings](../../Patches/Bass/Song/TouchPeelStand-DaysOfTheNew.md) | [Open piece](https://www.dakplutomusic.us/piece/0c887682-c58d-45b0-97f1-cb5b09f5b421) |
| 120 | Under the Bridge — Red Hot Chili Peppers | [Settings](../../Patches/Bass/Song/UnderTheBridge-RHCP.md) | [Open piece](https://www.dakplutomusic.us/piece/dbd2608d-4ef2-42bd-8122-c58e0d19d5df) |
| 121 | Unstoppable God — Elevation Worship | [Settings](../../Patches/Bass/Song/UnstopGod-EW.md) | [Open piece](https://www.dakplutomusic.us/piece/5700d37f-16bc-4616-946c-f5165975f65d) |
| 122 | Uprising — Muse | [Settings](../../Patches/Bass/Song/Uprising-Muse.md) | [Open piece](https://www.dakplutomusic.us/piece/db8b1f75-813a-4248-a400-d67d48ebab07) |
| 123 | Waiting on the World to Change — John Mayer | [Settings](../../Patches/Bass/Song/WaitingOnTheWorld-JohnMayer.md) | [Open piece](https://www.dakplutomusic.us/piece/291e92f2-c1dd-4ae8-ba3f-14cb458d9a37) |
| 124 | We Got Used to Us — Riverside | [Settings](../../Patches/Bass/Song/WeGotUsedToUs-Riverside.md) | [Open piece](https://www.dakplutomusic.us/piece/93a5f113-27a7-431b-88be-f2a3692c016a) |
| 125 | Werewolves of London — Warren Zevon | [Settings](../../Patches/Bass/Song/WerewolvesOfLondon-Zevon.md) | [Open piece](https://www.dakplutomusic.us/piece/14e0dcaa-4506-4993-8881-49cd130429dc) |
| 126 | What About Now — Daughtry | [Settings](../../Patches/Bass/Song/WhatAboutNow-Daughtry.md) | [Open piece](https://www.dakplutomusic.us/piece/e801ec07-6bc4-4add-aee6-8b1d775ce18c) |
| 127 | When I Come Around — Green Day | [Settings](../../Patches/Bass/Song/WhenIComeAround-GreenDay.md) | [Open piece](https://www.dakplutomusic.us/piece/bb60f60a-6e43-4e1c-a8a8-c7a3b59b8acf) |
| 128 | When Wind Meets Fire — Elevation Worship | [Settings](../../Patches/Bass/Song/WhenWindMeetsFire-EW.md) | [Open piece](https://www.dakplutomusic.us/piece/93fddf31-3919-42be-8108-499d1d7bf870) |
| 129 | I Won't Back Down — Tom Petty | [Settings](../../Patches/Bass/Song/WontBackDown-TomPetty.md) | [Open piece](https://www.dakplutomusic.us/piece/14de19a2-474f-4851-bdb5-3f63cea057e9) |
| 130 | You — Candlebox | [Settings](../../Patches/Bass/Song/You-Candlebox.md) | [Open piece](https://www.dakplutomusic.us/piece/672489bf-fbd0-45a9-bf6b-bcf47d8d085f) |
| 131 | You Don't Know How It Feels — Tom Petty | [Settings](../../Patches/Bass/Song/YouDontKnowHowItFeels-TomPetty.md) | [Open piece](https://www.dakplutomusic.us/piece/a5a29be2-89d0-4580-ad09-693bf6783de9) |
| 132 | Your Love Changes Everything — United Pursuit | [Settings](../../Patches/Bass/Song/YourLove-UP.md) | [Open piece](https://www.dakplutomusic.us/piece/cf973b2f-609e-4aca-a14b-f0ccb59435a5) |
| 133 | Your Ways Better — Forrest Frank | [Settings](../../Patches/Bass/Song/YourWaysBetter-FF.md) | [Open piece](https://www.dakplutomusic.us/piece/4b0e788f-4ffe-40b0-b6aa-ca12ea044232) |
| 134 | Earth, Wind & Fire Style Funk Bass | [Settings](../../Patches/Bass/Style/EWF-Funk.md) | [Open piece](https://www.dakplutomusic.us/piece/752ca050-c9d4-4456-be27-7ac8e2775416) |
| 135 | RammGrind — Industrial Metal Bass (Rammstein Style) | [Settings](../../Patches/Bass/Style/RammGrind.md) | [Open piece](https://www.dakplutomusic.us/piece/57022255-6f12-4602-a6d6-39fa34400f8b) |
| 136 | Lion — Elevation Worship (CCM / Modern Worship) | [Settings](../../Patches/Guitar/Album/Lion-EW.md) | [Open piece](https://www.dakplutomusic.us/piece/dda0f510-c363-42c6-935d-335f6ba96e5c) |
| 137 | *Syndicate* (Guitar) — The Midnight | [Settings](../../Patches/Guitar/Album/Syndicate-TheMidnight.md) | [Open piece](https://www.dakplutomusic.us/piece/6227d722-37b8-4b1e-96bf-aa10c8e480ff) |
| 138 | Tim Henson / Polyphia (Guitar) — Signature Sound | [Settings](../../Patches/Guitar/Artist/Polyphia-Gtr.md) | [Open piece](https://www.dakplutomusic.us/piece/66eb4697-76af-4c0d-b188-5d4da7cac698) |
| 139 | Ain't Nothing 'Bout You (Rhythm Guitar) — Brooks & Dunn | [Settings](../../Patches/Guitar/Song/AintNothinBoutYou-BrooksDunn-RhythmGtr.md) | [Open piece](https://www.dakplutomusic.us/piece/560212a7-7895-4334-b24b-12219b0af2d8) |
| 140 | American Pie (Rhythm Guitar) — Don McLean | [Settings](../../Patches/Guitar/Song/AmericanPie-DonMcLean-RhythmGtr.md) | [Open piece](https://www.dakplutomusic.us/piece/596f080c-aae0-43f9-a7db-95e1a05b6190) |
| 141 | Beat It (Guitar) — Michael Jackson | [Settings](../../Patches/Guitar/Song/BeatIt-MJ-RhythmGtr.md) | [Open piece](https://www.dakplutomusic.us/piece/2dc735d2-1888-40e1-be78-8347c621c2df) |
| 142 | Believe (Rhythm Guitar) — Brooks & Dunn | [Settings](../../Patches/Guitar/Song/Believe-BrooksDunn-RhythmGtr.md) | [Open piece](https://www.dakplutomusic.us/piece/180cdf3e-0990-4bae-9f25-27202560f229) |
| 143 | Billie Jean (Rhythm Guitar) — Chris Cornell | [Settings](../../Patches/Guitar/Song/BillieJean-ChrisCornell-RhythmGtr.md) | [Open piece](https://www.dakplutomusic.us/piece/77fed663-02ce-4773-a61c-46e072373efa) |
| 144 | Bright Size Life (Guitar) — Pat Metheny | [Settings](../../Patches/Guitar/Song/BrightSizeLife-Metheny-Gtr.md) | [Open piece](https://www.dakplutomusic.us/piece/fcf9ea5c-311b-4965-908a-dac5ec84060c) |
| 145 | Bring Me to Life (Rhythm Guitar) — Evanescence | [Settings](../../Patches/Guitar/Song/BringMeToLife-Evanescence-RhythmGtr.md) | [Open piece](https://www.dakplutomusic.us/piece/e004c0fa-442c-45c9-91e7-4f377742e4b5) |
| 146 | Cassie — Flyleaf | [Settings](../../Patches/Guitar/Song/Cassie-Flyleaf.md) | [Open piece](https://www.dakplutomusic.us/piece/d6037790-14ba-485d-8f9e-bc35ec9f127a) |
| 147 | Chalk Outlines (Guitar) — Ren & Chinchilla | [Settings](../../Patches/Guitar/Song/ChalkOutlines-Ren.md) | [Open piece](https://www.dakplutomusic.us/piece/4aa71ebe-3f7b-4992-aeca-211562984ad4) |
| 148 | Civil War (Guitar) — Guns N' Roses | [Settings](../../Patches/Guitar/Song/CivilWar-GNR-RhythmGtr.md) | [Open piece](https://www.dakplutomusic.us/piece/09745640-7696-4983-867f-cd7d0bb40fcb) |
| 149 | Click Click Boom — Saliva | [Settings](../../Patches/Guitar/Song/ClickClickBoom-Sal.md) | [Open piece](https://www.dakplutomusic.us/piece/3880d86f-114f-4ce5-816c-b213ef17fbbb) |
| 150 | Creep - Radiohead | [Settings](../../Patches/Guitar/Song/Creep-RH.md) | [Open piece](https://www.dakplutomusic.us/piece/f8186e41-e139-45e7-bc70-0591f86a491d) |
| 151 | Danger Zone (Rhythm Guitar) — Kenny Loggins | [Settings](../../Patches/Guitar/Song/DangerZone-KennyLoggins-RhythmGtr.md) | [Open piece](https://www.dakplutomusic.us/piece/29a59c09-2372-4fcc-820e-2b3394a79813) |
| 152 | December - Collective Soul | [Settings](../../Patches/Guitar/Song/December-CS.md) | [Open piece](https://www.dakplutomusic.us/piece/3155a185-dbe3-4eaa-9474-91c1302aa132) |
| 153 | I'm Diggin' You (Like an Old Soul Record) (Guitar) — Meshell Ndegeocello | [Settings](../../Patches/Guitar/Song/DigginYou-MN-RhythmGtr.md) | [Open piece](https://www.dakplutomusic.us/piece/c0bf43b2-22b8-45df-b70a-d7e564f3bcc7) |
| 154 | Dirt Road Anthem (Rhythm Guitar) — Jason Aldean | [Settings](../../Patches/Guitar/Song/DirtRoadAnthem-JasonAldean-RhythmGtr.md) | [Open piece](https://www.dakplutomusic.us/piece/0b36306b-53b6-4838-a42c-db4947908b0b) |
| 155 | Everyday I Have the Blues — John Mayer (Where the Light Is) | [Settings](../../Patches/Guitar/Song/EverydayBlues-JM.md) | [Open piece](https://www.dakplutomusic.us/piece/f85eddc5-0fbd-422f-8c63-7f60e74f5154) |
| 156 | Found (The Unexpected Flaw of Searching) (Rhythm Guitar) — Riverside | [Settings](../../Patches/Guitar/Song/Found-Riverside-RhythmGtr.md) | [Open piece](https://www.dakplutomusic.us/piece/8f429d16-4d11-4699-ae06-2cb51b1d1362) |
| 157 | Hanging by a Moment (Rhythm Guitar) — Lifehouse | [Settings](../../Patches/Guitar/Song/HangingByAMoment-Lifehouse-RhythmGtr.md) | [Open piece](https://www.dakplutomusic.us/piece/7fb67a69-8e23-49df-b5e4-30a4377f4511) |
| 158 | Hard Workin' Man (Rhythm Guitar) — Brooks & Dunn | [Settings](../../Patches/Guitar/Song/HardWorkinMan-BrooksDunn-RhythmGtr.md) | [Open piece](https://www.dakplutomusic.us/piece/9bcf599a-ae50-4e2d-b089-9574cf4aa04f) |
| 159 | Heads Carolina, Tails California (Rhythm Guitar) — Jo Dee Messina | [Settings](../../Patches/Guitar/Song/HeadsCarolina-JDM-RhythmGtr.md) | [Open piece](https://www.dakplutomusic.us/piece/59dacbe5-67b3-4950-9ac0-c591f18f15f2) |
| 160 | Higher (Rhythm Guitar) — Creed | [Settings](../../Patches/Guitar/Song/Higher-Creed-Gtr.md) | [Open piece](https://www.dakplutomusic.us/piece/fae7dba0-d90d-46ac-8c23-116dd9abaa89) |
| 161 | Honky Tonk Truth (Rhythm Guitar) — Brooks & Dunn | [Settings](../../Patches/Guitar/Song/HonkyTonkTruth-BrooksDunn-RhythmGtr.md) | [Open piece](https://www.dakplutomusic.us/piece/eeb94df8-27c5-4cc9-94bb-0d7d37632a17) |
| 162 | I Will Always Love You (Rhythm Guitar) — Dolly Parton | [Settings](../../Patches/Guitar/Song/IWillAlwaysLoveYou-Dolly-RhythmGtr.md) | [Open piece](https://www.dakplutomusic.us/piece/0b826a63-0162-4d5c-92ca-a0274c7d4dc5) |
| 163 | If You See Her (Rhythm Guitar) — Brooks & Dunn | [Settings](../../Patches/Guitar/Song/IfYouSeeHer-BrooksDunn-RhythmGtr.md) | [Open piece](https://www.dakplutomusic.us/piece/281df0e1-e30b-4b60-990e-296b1c3ea0ed) |
| 164 | I'll Be There for You (Rhythm Guitar) — Bon Jovi | [Settings](../../Patches/Guitar/Song/IllBeThereForYou-BonJovi-RhythmGtr.md) | [Open piece](https://www.dakplutomusic.us/piece/fb09bcde-0671-4820-b308-f3d8603412eb) |
| 165 | In Two Minds (Lead Guitar) — Riverside | [Settings](../../Patches/Guitar/Song/InTwoMinds-Riverside-LeadGtr.md) | [Open piece](https://www.dakplutomusic.us/piece/24052a2b-98cf-4ef8-8374-34baef9a9c7e) |
| 166 | Ironic (Rhythm Guitar) — Alanis Morissette | [Settings](../../Patches/Guitar/Song/Ironic-Alanis-RhythmGtr.md) | [Open piece](https://www.dakplutomusic.us/piece/78aed3bd-eed6-4277-995b-a17b1f00b439) |
| 167 | It's Not My Time (Rhythm Guitar) — 3 Doors Down | [Settings](../../Patches/Guitar/Song/ItsNotMyTime-3DoorsDown-RhythmGtr.md) | [Open piece](https://www.dakplutomusic.us/piece/bef80591-50cc-4657-89cb-545e07693596) |
| 168 | Kiss Me - Sixpence None the Richer | [Settings](../../Patches/Guitar/Song/KissMeSNTR.md) | [Open piece](https://www.dakplutomusic.us/piece/55f9112d-39f7-48db-bf88-1dad5b42d0ea) |
| 169 | Man in the Box (Rhythm Guitar) — Alice In Chains | [Settings](../../Patches/Guitar/Song/ManInTheBox-AIC-RhythmGtr.md) | [Open piece](https://www.dakplutomusic.us/piece/78eaaa1f-9ecb-4378-a4ba-c46c2617648c) |
| 170 | Mary Jane's Last Dance (Rhythm Guitar) — Tom Petty | [Settings](../../Patches/Guitar/Song/MaryJanesLastDance-TomPetty-RhythmGtr.md) | [Open piece](https://www.dakplutomusic.us/piece/fe264a4b-7fd1-41a9-a52c-a812a23e8412) |
| 171 | My Maria (Rhythm Guitar) — Brooks & Dunn | [Settings](../../Patches/Guitar/Song/MyMaria-BrooksDunn-RhythmGtr.md) | [Open piece](https://www.dakplutomusic.us/piece/836d1722-18c4-4bfd-a4c0-459a8b3c0202) |
| 172 | Neon (Rhythm Guitar) — John Mayer | [Settings](../../Patches/Guitar/Song/Neon-JohnMayer-RhythmGtr.md) | [Open piece](https://www.dakplutomusic.us/piece/9b019fcf-9f53-47bc-9352-ba028ae147f2) |
| 173 | Neon Moon (Rhythm Guitar) — Brooks & Dunn | [Settings](../../Patches/Guitar/Song/NeonMoon-BrooksDunn-RhythmGtr.md) | [Open piece](https://www.dakplutomusic.us/piece/b7a134cc-1fe1-4b15-9de5-96d4d532dff7) |
| 174 | One Last Breath (Rhythm Guitar) — Creed | [Settings](../../Patches/Guitar/Song/OneLastBreath-Creed-RhythmGtr.md) | [Open piece](https://www.dakplutomusic.us/piece/e5b6f532-0940-483f-b79c-e539788a98e4) |
| 175 | Only in America (Rhythm Guitar) — Brooks & Dunn | [Settings](../../Patches/Guitar/Song/OnlyInAmerica-BrooksDunn-RhythmGtr.md) | [Open piece](https://www.dakplutomusic.us/piece/d33cb7c7-1f6c-43c9-8cde-04a3350022b7) |
| 176 | Papa Was a Rollin' Stone — The Temptations (Guitar) | [Settings](../../Patches/Guitar/Song/PapaWasARollinStone-Temptations-RhythmGtr.md) | [Open piece](https://www.dakplutomusic.us/piece/b5acadac-15a8-4516-a01c-4242915089e8) |
| 177 | Praise (Rhythm Guitar) — Elevation Worship | [Settings](../../Patches/Guitar/Song/Praise-EW-RhythmGtr.md) | [Open piece](https://www.dakplutomusic.us/piece/05d4ab54-f5cb-4926-94e6-ae524bc11431) |
| 178 | Puff the Magic Dragon (Rhythm Guitar) — Peter, Paul and Mary | [Settings](../../Patches/Guitar/Song/PuffTheMagicDragon-PPM-RhythmGtr.md) | [Open piece](https://www.dakplutomusic.us/piece/0a6dec12-c752-471d-a3a4-fa11b1560e10) |
| 179 | Rainbow Connection (Rhythm Guitar) — Kenny Loggins | [Settings](../../Patches/Guitar/Song/RainbowConnection-KennyLoggins-RhythmGtr.md) | [Open piece](https://www.dakplutomusic.us/piece/3eb16d13-6fc8-4c86-a7da-efa01bd5fdc9) |
| 180 | Red Dirt Road (Rhythm Guitar) — Brooks & Dunn | [Settings](../../Patches/Guitar/Song/RedDirtRoad-BrooksDunn-RhythmGtr.md) | [Open piece](https://www.dakplutomusic.us/piece/7e50c63c-7aec-4633-aefd-abc1a67cef28) |
| 181 | Sister Christian - Night Ranger | [Settings](../../Patches/Guitar/Song/SisterChristian-NR.md) | [Open piece](https://www.dakplutomusic.us/piece/21a69ee6-d7e2-43ea-8028-4a0081cc5a75) |
| 182 | Somebody Like You (Rhythm Guitar) — Keith Urban | [Settings](../../Patches/Guitar/Song/SomebodyLikeYou-KeithUrban-RhythmGtr.md) | [Open piece](https://www.dakplutomusic.us/piece/82991522-a96b-4354-a431-6327a5d27744) |
| 183 | Spider-Man Theme (1967 Cartoon) (Rhythm Guitar) — Bob Harris & Paul Francis Webster | [Settings](../../Patches/Guitar/Song/SpiderManTheme1967-RhythmGtr.md) | [Open piece](https://www.dakplutomusic.us/piece/ae7b21e8-ced3-4e56-9f2b-ff449757165e) |
| 184 | Spider-Man: The Animated Series Theme (1994) (Rhythm Guitar) — Joe Perry | [Settings](../../Patches/Guitar/Song/SpiderManTheme1994-RhythmGtr.md) | [Open piece](https://www.dakplutomusic.us/piece/daba958f-831d-41a0-8bdf-c59c69d5cc30) |
| 185 | Spidey and His Amazing Friends Theme (Guitar) — Patrick Stump | [Settings](../../Patches/Guitar/Song/SpideyFriendsTheme-RhythmGtr.md) | [Open piece](https://www.dakplutomusic.us/piece/3e238073-12dd-4e53-bad1-94f5a639643c) |
| 186 | Surfin' U.S.A. — The Beach Boys (Guitar) | [Settings](../../Patches/Guitar/Song/SurfinUSA-BeachBoys-RhythmGtr.md) | [Open piece](https://www.dakplutomusic.us/piece/f6d3df66-f56c-4ab0-91f0-1bc34dd0a87b) |
| 187 | Sweet Leaf (Rhythm Guitar) — Black Sabbath | [Settings](../../Patches/Guitar/Song/SweetLeaf-BlackSabbath-RhythmGtr.md) | [Open piece](https://www.dakplutomusic.us/piece/dfbfa157-40b9-4952-827e-1cf7957bfc50) |
| 188 | (I've Had) The Time of My Life (Rhythm Guitar) — Bill Medley & Jennifer Warnes | [Settings](../../Patches/Guitar/Song/TimeOfMyLife-DirtyDancing-RhythmGtr.md) | [Open piece](https://www.dakplutomusic.us/piece/2180894d-ffe8-41ce-a9b9-64d1255ab492) |
| 189 | Waiting on the World to Change (Rhythm Guitar) — John Mayer | [Settings](../../Patches/Guitar/Song/WaitingOnTheWorld-JohnMayer-RhythmGtr.md) | [Open piece](https://www.dakplutomusic.us/piece/291e92f2-c1dd-4ae8-ba3f-14cb458d9a37) |
| 190 | We Got Used to Us (Lead Guitar) — Riverside | [Settings](../../Patches/Guitar/Song/WeGotUsedToUs-Riverside-LeadGtr.md) | [Open piece](https://www.dakplutomusic.us/piece/93a5f113-27a7-431b-88be-f2a3692c016a) |
| 191 | Werewolves of London (Rhythm Guitar) — Warren Zevon | [Settings](../../Patches/Guitar/Song/WerewolvesOfLondon-Zevon-RhythmGtr.md) | [Open piece](https://www.dakplutomusic.us/piece/14e0dcaa-4506-4993-8881-49cd130429dc) |
| 192 | What About Now (Rhythm Guitar) — Daughtry | [Settings](../../Patches/Guitar/Song/WhatAboutNow-Daughtry-RhythmGtr.md) | [Open piece](https://www.dakplutomusic.us/piece/e801ec07-6bc4-4add-aee6-8b1d775ce18c) |
| 193 | When Wind Meets Fire (Rhythm Guitar) — Elevation Worship | [Settings](../../Patches/Guitar/Song/WhenWindMeetsFire-EW-RhythmGtr.md) | [Open piece](https://www.dakplutomusic.us/piece/93fddf31-3919-42be-8108-499d1d7bf870) |
| 194 | Your Body is a Wonderland — John Mayer (Room for Squares) | [Settings](../../Patches/Guitar/Song/Wonderland-JM.md) | [Open piece](https://www.dakplutomusic.us/piece/b9ad64e8-7194-497e-ab3e-edd5b094e1f9) |
| 195 | You Don't Know How It Feels (Rhythm Guitar) — Tom Petty | [Settings](../../Patches/Guitar/Song/YouDontKnowHowItFeels-TomPetty-RhythmGtr.md) | [Open piece](https://www.dakplutomusic.us/piece/a5a29be2-89d0-4580-ad09-693bf6783de9) |
