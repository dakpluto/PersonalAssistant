# GP-5 patch audit — 2026-10-16

**Historical audit snapshot.** These recommendations were approved and implemented. See [implementation record](Implementation.md) for the final choices and verification.

Reviewed **195 patches: 135 bass and 60 guitar**. This is a design and file audit with proposed listening trials. **No patch settings, presets, PDFs, index entries or site uploads were changed.**

The main recommendation is to simplify several signal chains before replacing their amps. Many bass presets put a driven capture behind another drive and an input boost, then add room/hall at the loudest section. Several older guitar presets similarly stack compression, distortion, large presence boosts and extra gain on the board. That can make a patch bigger in isolation while reducing its attack and useful level contrast in a band.

## How to read this review

- **Critical:** a definite configuration defect with potentially severe playback consequences.
- **High:** a substantial design conflict, major outlier, unresolved sound dependency, or factual premise that affects the design.
- **Medium:** a worthwhile focused comparison; the architecture generally makes sense.
- **Low:** keep the main design; the proposed changes are small or optional.

Priority counts: **High 55 · Low 63 · Medium 76 · Critical 1**. Priority is an order for review, not proof of bad sound.

All proposed numeric values are **starting points for an A/B comparison**, not measured corrections. A Mix value of 25 does not prove 25% wet; a VOL value of 50 does not prove unity; EQ numbers below are GP-5 control values, not calibrated dB. Reducing several stages changes perceived volume, so do not judge the result until it is level-matched. The strong dry-bass preference here applies to supporting bass parts; Egan, Adrift and explicitly synth/ambient adaptations keep their purposeful effects.

## Start with these patches

| Order | Patch | First action |
|---|---|---|
| 1 | [Metropolis1-DT — Metropolis Pt. 1, The Miracle and the Sleeper by Dream Theater](#patch-79) | Add missing active EQ VOL; then review the drive/EQ stack. |
| 2 | [Everyday I Have the Blues — John Mayer (Where the Light Is)](#patch-155) | Resolve Slapback 320ms outside its catalog range; retain Michael’s levels. |
| 3 | [Cassie — Flyleaf](#patch-146) | Resolve the manual IR dependency, then simplify the heavy state. |
| 4 | [Sister Christian - Night Ranger](#patch-181) | Reduce the comp/drive/EQ stack and check whether the verse cleans up. |
| 5 | [December - Collective Soul](#patch-152) | Reduce extreme EQ and front-end level; verify the clean/dirty contrast. |
| 6 | [Parallels — Yes](#patch-90) | Correct the organ/bass premise before revising the sound. |
| 7 | [Hysteria — Muse](#patch-55) | Compare one fuzz source against the current multi-drive stack. |
| 8 | [RammGrind — Industrial Metal Bass (Rammstein Style)](#patch-135) | Recover low-mid body and remove redundant industrial drive stages. |
| 9 | [Yes — Chris Squire Signature Bass Tone](#patch-4) | Reduce repeated treble/drive boosts; preserve the intentional inverse CTL. |
| 10 | [I'm So Sick — Flyleaf](#patch-60) | Recover note attack from the heavy drive/gate stack. |
| 11 | [When You Say Nothing At All — Alison Krauss](#patch-84) | Investigate EQ VOL 100 and the fretless gate. |
| 12 | [Your Ways Better — Forrest Frank](#patch-133) | Remove redundant compressor with VOL 100 as the first trial. |
| 13 | [Click Click Boom — Saliva](#patch-149) | Make the lead lift after the capture, and keep the riff dry. |
| 14 | [Lion — Elevation Worship (CCM / Modern Worship)](#patch-136) | Keep the ambient palette but create a less processed foundation. |
| 15 | [SpiritCarriesOn-DT — The Spirit Carries On by Dream Theater](#patch-105) | Reduce the very wet Hall and protect fretless sustain. |

## Definite file findings and scope

- All 195 JSON specs have matching Markdown, PDF and PRST files. PDFs were checked for existence/nonzero size, not rendered or text-audited.
- All 195 PRST files are 507 bytes, with the expected header/sentinel and valid CRC. Stored screen names, patch VOL/BPM, fixed chain order, active model references, supplied parameter values, initial active states and CTL masks agree with the JSON in the fields checked. FS1 and FS2 agree. This establishes file consistency, not successful import or playback on the pedal.
- Every named model and supplied parameter key resolves against the vendored catalog; all supplied numeric values are within its min/max except **EverydayBlues-JM Slapback Time 320**, above its 300ms maximum. The encoder currently checks names but does not reject this range error.
- **Metropolis1-DT** omits EQ VOL. Its active Bass EQ 2 output parameter is stored as **0**, rather than the catalog’s default 50. Add VOL explicitly. The precise effect of zero on hardware has not been auditioned.
- No preset exceeds three CTL modules; the documented CTL states invert. MIDI flags use only PRE/DST/MOD/DLY. No NAM preset uses a dropped slot (60 or 67), stacks an AMP/CAB model, or also declares an IR.
- **Cassie-Flyleaf** is the only IR patch whose CAB is null. This is allowed by the project workflow, but the preset alone does not supply the documented cab; the manual load/assignment is essential.
- No Python installation was available through python or the Windows py launcher. Binary checks used a read-only Node parser based on the local format specification. The existing Python encoder was not run, no files were regenerated, and there was no hardware or recording audition.

Source inputs: every patch JSON and Markdown file was loaded into the inventory; module settings, intent and relevant board instructions were reviewed across the library. The reference basis is Prompts/gp5_prompt.md, Modules, the vendored catalog, NAMs/snaptone_combos.md, IRs/ir.md, fixed-board pedal files and Documents/gp5-prst-format.md. This is not a forensic verification of all historical session rigs, release dates, tuning, tempo or note-for-note section maps. Unverified claims are explicitly left for verification rather than replaced with invented certainty. The current [Valeton product page](https://www.valeton.net/product/gp-5/) confirms the general SnapTone/user-IR capability; the local fixed routing and confirmed CTL behavior remain this project’s working constraints.

## Library-wide changes I would make

1. **Preserve tested level decisions.** Keep all audited SnapTone VOL values and the explicit Michael-adjusted patch VOL 70 on Believe guitar and patch VOL 65/capture VOL 75 on Everyday Blues. Match new versions to the current patches using the actual rig; identical numeric patch VOL never guarantees equal loudness.
2. **Separate distortion from a solo level lift.** PRE/DST sit before the capture/amp. Once that stage is compressed, more input can mainly add saturation. Use a mild CTL EQ output lift after it when an actual volume lift is required. A trial EQ VOL around 52–54 must be level-matched, not described as a guaranteed dB increase.
3. **Keep supporting bass mostly dry.** Start with no delay, little/no reverb, and one primary added drive. Add space only when it solves a specific musical role. Preserve deliberate ambient and synth effects; do not make all bass patches identical.
4. **Keep clean fundamental claims honest.** Bass OD Blend retains a dry component inside that block, but the resulting signal still passes through the downstream capture. A driven capture is not a separate clean low-frequency path. Stacking serial blended drives is not equivalent to a split clean/dirty rig.
5. **Fix board instructions.** Tidal Wave drive-off leaves its preamp/EQ/Level active. Every full-board bass write-up needs those controls even if it calls the pedal bypassed. Specify physical knob/toggle positions, distinguish Donner TONE from its NORMAL/TREBLE switch, and never imply CTL operates a board pedal. Cassie’s claim that a board OD cannot be stomped independently is wrong.
6. **Respect fixed set boards.** Keep the four-song and five-song worship boards fixed across their sets. Per-patch changes to their GP-5 settings are independent trials; a shared board-control change must be reviewed across the whole set. The six shared White Tape slap patches keep one 120ms setting. Lion’s 700ms ambient setting needs a reset or separate set plan when sharing that board.
7. **Describe the gate accurately.** NR is ahead of PRE/DST/amp. It can reduce signal entering the following stages during rests, but it is not a post-drive gate that directly removes all hiss generated downstream. Tune THRE on the actual guitar, including soft notes, harmonics and fretless decay. Suggested lower thresholds below are listening trials, not proof the current gate is clipping notes.
8. **Correct reference drift.** The catalog’s B-Chorus origin is CE-2B while Modules/MOD.md calls it CEB-3; resolve that provenance conflict before repeating it as fact. Modules/EQ.md labels ±50 as dB without a calibration basis in the catalog; use control values until verified. Modules/DLY.md gives Slapback the generic 1000ms upper bound even though the catalog says 300ms. Several write-ups also retain old amp/cab names after capture replacements.
9. **Make switching maps reliable.** Keep the existing shared CTL/MIDI reset warning. Name every sound by actual block states and board stomps; CTL flips current states, so “CTL on” alone is insufficient after MIDI edits. Remove labels such as “dry” where fixed reverb remains on. Newly proposed maps below must be rechecked against the three-block limit before implementation.
10. **Improve preset identification.** Sixteen cross-instrument pairs share the same first ten screen characters. That is harmless in separate sets, confusing in a combined library. On the next naming pass, put an instrument marker near the front (for example G-BeatIt/B-BeatIt), preserving song-level site grouping and avoiding blind filename changes.

## Suggested comparison procedure

Work on copies. Address the definite Metropolis EQ omission and Everyday Blues range mismatch first. Then take one high-priority patch at a time. Start with its amp/capture and required cab; bring the compressor, primary drive and essential effects back individually. Compare with the original at matched perceived output, using the same pickup, guitar volume, articulation and monitoring path. Listen both alone and against the song/band. Check low B, quiet notes, chord attack and held-note decay. Exercise every CTL/MIDI/board transition. Keep changes that improve the musical role; discard a proposed number if the current setting wins. Only then regenerate the four deliverables, update the index and upload under the existing song-level site title.

## Per-patch review


### Bass / Artist

<a id="patch-1"></a>

#### 1. Egan-Fretless — High

[Source write-up](../../Patches/Bass/Artist/Egan-Fretless.md) · [JSON](../../Patches/Bass/Artist/Egan-Fretless.json)

**Current foundation:** patch VOL 55; BPM 92; SnapTone slot 52; Gain 58, VOL 75, Bass 55, Middle 55, Treble 68.

**NR Gate** (fixed): THRE 28 · **PRE COMP4** (fixed): Sustain 65, Attack 45, Clip 50, VOL 60 · **EQ Bass EQ 1** (fixed): 33Hz 6, 150Hz 0, 600Hz -8, 2kHz 5, 8kHz 10, VOL 58 · **MOD B-Chorus** (CTL off → on): Depth 70, Rate 0.6, VOL 100 · **DLY Analog** (MIDI, loads on): Mix 18, Time 450, Feedback 12, Trail true · **RVB Hall** (fixed): Mix 25, Decay 45, Trail true.

**Proposed changes:** Keep Avalon and the wet artist concept. Lower Gate THRE 28→10; COMP4 Sustain 65→45; B-Chorus VOL 100→50 as an initial level-matching trial. Reduce EQ 33Hz +6→0, 600Hz -8→-2 and 8kHz +10→+3. Keep Narcissus as the baseline chorus, but reduce its Depth 55→30 before stacking B-Chorus Depth 70. Hall Mix 25→15. This retains the vocal fretless effect while giving the fundamental and decay room. Correct the artist history: Offramp belongs to the later Metheny lineup; verify credits before retaining the Egan attribution.

**Source check:** [Pat Metheny’s Offramp personnel](https://www.patmetheny.com/music/detail.cfm?id=39) names Steve Rodby, not Egan.

<a id="patch-2"></a>

#### 2. Tim Henson / Polyphia (Bass) — Signature Sound — Low

[Source write-up](../../Patches/Bass/Artist/Polyphia-Bass.md) · [JSON](../../Patches/Bass/Artist/Polyphia-Bass.json)

**Current foundation:** patch VOL 55; BPM 120; SnapTone slot 52; Gain 50, VOL 75, Bass 55, Middle 48, Treble 60.

**NR Gate** (fixed): THRE 18 · **PRE COMP4** (MIDI, loads off): Sustain 55, Attack 35, Clip 40, VOL 55 · **EQ Bass EQ 1** (fixed): 33Hz 1, 150Hz 1, 600Hz -2, 2kHz 2, 8kHz 2, VOL 50 · **RVB Room** (fixed): Mix 6, Decay 20, Trail true.

**Proposed changes:** Keep the Avalon/Tidal Wave architecture and no CTL. Try COMP4 Sustain 55→35 for the MIDI slap option because the Donner is already at COMP 55. Keep the sub-octave optional and test it above the bass's lowest register. Rename the title around Clay Gober/Polyphia rather than Tim Henson; the write-up already identifies the bassist correctly.

<a id="patch-3"></a>

#### 3. SNTR-Bass — Sixpence None the Richer Signature Bass Tone — High

[Source write-up](../../Patches/Bass/Artist/SNTR-Bass.md) · [JSON](../../Patches/Bass/Artist/SNTR-Bass.json)

**Current foundation:** patch VOL 55; BPM 172; SnapTone slot 53; Gain 52, VOL 65, Bass 60, Middle 50, Treble 55.

**NR Gate** (fixed): THRE 20 · **EQ Bass EQ 2** (fixed): 50Hz 2, 120Hz 4, 400Hz -3, 800Hz 2, 4.5kHz 3, VOL 55 · **MOD B-Chorus** (CTL off → on + MIDI): Depth 40, Rate 2.5, VOL 55 · **RVB Air** (CTL off → on): Mix 35, Decay 45, Damp 40, Trail true.

**Proposed changes:** B-Chorus Rate 2.5→0.6Hz, Depth 40→25; Air Mix 35→12 and Decay 45→30. The current atmospheric state is much more animated and wet than the stated supporting bass role. Keep the dry state. Correct the stale 4x10 description to the slot's 8x10 and verify the There She Goes release attribution. Remove the unsupported claim that the bassist never used overdrive.

**Additional finding:** Rewrite Tidal Wave “bypassed” as “drive off, preamp active.”

<a id="patch-4"></a>

#### 4. Yes — Chris Squire Signature Bass Tone — High

[Source write-up](../../Patches/Bass/Artist/Yes-Squire.md) · [JSON](../../Patches/Bass/Artist/Yes-Squire.json)

**Current foundation:** patch VOL 55; BPM 120; SnapTone slot 55; Gain 50, VOL 60, Bass 55, Middle 50, Treble 70.

**NR Gate** (fixed): THRE 25 · **PRE B-Boost** (CTL on → off): Gain 60, VOL 55, Bass 55, Treble 65 · **DST Bass OD** (CTL on → off + MIDI): Gain 65, Blend 60, VOL 60, Bass 55, Treble 70 · **EQ Bass EQ 1** (fixed): 33Hz 8, 150Hz -5, 600Hz 8, 2kHz 12, 8kHz 15, VOL 50 · **MOD B-Chorus** (CTL off → on): Depth 20, Rate 0.8, VOL 50.

**Proposed changes:** Use one principal added drive. Remove PRE B-Boost; reduce Bass OD Gain 65→30 and Blend 60→35, then compare with Tidal Wave drive alone. EQ 33Hz +8→0, 2kHz +12→+4, 8kHz +15→+3; capture Treble 70→58. This is several serial treble/drive boosts masquerading as a parallel rig. Clarify that the Bass OD dry blend still passes through the driven capture, and that Tidal Wave drive-off leaves its preamp active. Preserve the intentionally inverted CTL.


### Bass / Song

<a id="patch-5"></a>

#### 5. 10,000 Reasons — Matt Redman — Low

[Source write-up](../../Patches/Bass/Song/10000Reasons-MR.md) · [JSON](../../Patches/Bass/Song/10000Reasons-MR.json)

**Current foundation:** patch VOL 55; BPM 73; SnapTone slot 51; Gain 52, VOL 80, Bass 58, Middle 52, Treble 46.

**NR Gate** (fixed): THRE 10 · **PRE Micro Boost** (CTL off → on): Gain 32 · **EQ Bass EQ 1** (fixed): 33Hz 1, 150Hz 2, 600Hz -2, 2kHz 0, 8kHz -3, VOL 52.

**Proposed changes:** Keep the dry CleanB15 foundation and shared board settings. Test Micro Boost Gain 32→20 for the last chorus; use only enough to increase harmonic presence, since this sits before the capture and cannot guarantee a clean output lift. Retain the current setting if the capture stays clean and levels match.

<a id="patch-6"></a>

#### 6. 1234 — Feist — Medium

[Source write-up](../../Patches/Bass/Song/1234-Feist.md) · [JSON](../../Patches/Bass/Song/1234-Feist.json)

**Current foundation:** patch VOL 54; BPM 127; SnapTone slot 54; Gain 51, VOL 80, Bass 50, Middle 50, Treble 50.

**NR Gate** (fixed): THRE 15 · **PRE Micro Boost** (CTL off → on): Gain 45 · **EQ Bass EQ 1** (fixed): 33Hz 3, 150Hz 1, 600Hz -2, 2kHz 2, 8kHz 3, VOL 55 · **RVB Room** (CTL off → on): Mix 20, Decay 30, Trail true.

**Proposed changes:** Micro Boost Gain 45→25; Room Mix 20→8. EQ 33Hz +3→0 and 8kHz +3→0. A retro rounded fretless pocket benefits more from attack consistency than extra subs and room. Keep the passive Sire and FullB15.

<a id="patch-7"></a>

#### 7. 1979 — The Smashing Pumpkins — High

[Source write-up](../../Patches/Bass/Song/1979-SmashingPumpkins.md) · [JSON](../../Patches/Bass/Song/1979-SmashingPumpkins.json)

**Current foundation:** patch VOL 53; BPM 126; SnapTone slot 53; Gain 52, VOL 65, Bass 56, Middle 50, Treble 58.

**NR Gate** (fixed): THRE 12 · **PRE Micro Boost** (CTL off → on): Gain 45 · **EQ Bass EQ 2** (fixed): 50Hz 3, 120Hz 1, 400Hz -1, 800Hz 1, 4.5kHz 3, VOL 55 · **MOD B-Chorus** (fixed): Depth 35, Rate 0.5, VOL 56 · **DLY Analog** (fixed): Mix 15, Time 380, Feedback 15, Trail true · **RVB Room** (CTL off → on): Mix 22, Decay 35, Trail true.

**Proposed changes:** Bypass the always-on Analog delay first; lower B-Chorus Depth 35→18 and Room Mix 22→8. Micro Boost Gain 45→25. The production's haze does not establish a need for delayed bass notes; the rhythmic line should remain distinct.

<a id="patch-8"></a>

#### 8. Adrift-LS — Adrift by Lunatic Soul — Medium

[Source write-up](../../Patches/Bass/Song/Adrift-LS.md) · [JSON](../../Patches/Bass/Song/Adrift-LS.json)

**Current foundation:** patch VOL 50; BPM 100; SnapTone slot 52; Gain 50, VOL 75, Bass 60, Middle 45, Treble 50.

**NR Gate** (fixed): THRE 20 · **EQ Bass EQ 2** (fixed): 50Hz 3, 120Hz 2, 400Hz -3, 800Hz -2, 4.5kHz 2, VOL 52 · **MOD B-Chorus** (fixed): Depth 22, Rate 0.35, VOL 52 · **DLY Analog** (CTL off → on): Mix 30, Time 450, Feedback 25, Trail true · **RVB Hall** (CTL off → on): Mix 35, Decay 55, Trail true.

**Proposed changes:** Keep the atmospheric CTL concept. Start DLY Mix 30→18, Hall Mix 35→18, capture Bass 60→55 and EQ 50Hz +3→+1. Lower THRE 20→8 for fretless decay. Correct the assumption that active electronics automatically improve input headroom; set the Sire preamp near flat and check peaks.

<a id="patch-9"></a>

#### 9. After the Love Has Gone — Earth, Wind & Fire — Medium

[Source write-up](../../Patches/Bass/Song/AfterTheLove-EWF.md) · [JSON](../../Patches/Bass/Song/AfterTheLove-EWF.json)

**Current foundation:** patch VOL 52; BPM 66; SnapTone slot 52; Gain 46, VOL 75, Bass 60, Middle 50, Treble 42.

**NR Gate** (fixed): THRE 10 · **PRE COMP** (fixed): Sustain 40, VOL 60 · **EQ Bass EQ 2** (fixed): 50Hz 2, 120Hz 2, 400Hz 0, 800Hz 1, 4.5kHz -3, VOL 52 · **RVB Plate** (CTL off → on): Mix 20, Decay 45, Damp 55, Trail true.

**Proposed changes:** Keep Avalon and the warm clean voice. Plate Mix 20→8, Decay 45→30; capture Bass 60→55. Let long notes sustain through compression and touch rather than a large reverberant low end.

<a id="patch-10"></a>

#### 10. Ain't Nothing 'Bout You (GP-5 Only) — Brooks & Dunn — Low

[Source write-up](../../Patches/Bass/Song/AintNothinBoutYou-BrooksDunn-GP5.md) · [JSON](../../Patches/Bass/Song/AintNothinBoutYou-BrooksDunn-GP5.json)

**Current foundation:** patch VOL 52; BPM 128; SnapTone slot 51; Gain 50, VOL 80, Bass 58, Middle 50, Treble 54.

**NR Gate** (fixed): THRE 14 · **PRE COMP4** (fixed): Sustain 45, Attack 50, Clip 40, VOL 58 · **EQ Bass EQ 1** (CTL off → on): 33Hz 2, 150Hz -1, 600Hz 2, 2kHz 3, 8kHz 2, VOL 56 · **RVB Room** (CTL off → on): Mix 16, Decay 26, Trail true.

**Proposed changes:** Keep the GP-5 compressor substitution and CTL EQ lift. Room Mix 16→8; EQ CTL VOL 56→52 as a first level-match trial. The current EQ switch also boosts output and high mids, so verify it reads as a chorus lift rather than a second bass channel.

<a id="patch-11"></a>

#### 11. Ain't Nothing 'Bout You — Brooks & Dunn — Medium

[Source write-up](../../Patches/Bass/Song/AintNothinBoutYou-BrooksDunn.md) · [JSON](../../Patches/Bass/Song/AintNothinBoutYou-BrooksDunn.json)

**Current foundation:** patch VOL 55; BPM 128; SnapTone slot 51; Gain 50, VOL 80, Bass 58, Middle 50, Treble 56.

**NR Gate** (fixed): THRE 14 · **PRE Micro Boost** (CTL off → on): Gain 48 · **EQ Bass EQ 1** (fixed): 33Hz 2, 150Hz -1, 600Hz 2, 2kHz 4, 8kHz 3, VOL 55 · **RVB Room** (CTL off → on): Mix 16, Decay 26, Trail true.

**Proposed changes:** Micro Boost Gain 48→25; Room Mix 16→8. Keep the shared country foundation clean. Compare this version against the GP-5-only version at matched perceived level; their patch volumes and gain stages differ, so they are not interchangeable at present.

<a id="patch-12"></a>

#### 12. All for You — Sister Hazel — Medium

[Source write-up](../../Patches/Bass/Song/AllForYou-SisterHazel.md) · [JSON](../../Patches/Bass/Song/AllForYou-SisterHazel.json)

**Current foundation:** patch VOL 54; BPM 100; SnapTone slot 53; Gain 50, VOL 65, Bass 56, Middle 54, Treble 54.

**NR Gate** (fixed): THRE 12 · **PRE Micro Boost** (CTL off → on): Gain 45 · **EQ Bass EQ 2** (fixed): 50Hz 3, 120Hz 1, 400Hz 0, 800Hz 2, 4.5kHz 2, VOL 55 · **RVB Room** (CTL off → on): Mix 18, Decay 28, Trail true.

**Proposed changes:** Room Mix 18→8; Micro Boost Gain 45→25. Keep CleanSVT and the supportive midrange. The chorus should become more assertive through playing, with only a small pedal contribution.

<a id="patch-13"></a>

#### 13. American Pie — Don McLean — Medium

[Source write-up](../../Patches/Bass/Song/AmericanPie-DonMcLean.md) · [JSON](../../Patches/Bass/Song/AmericanPie-DonMcLean.json)

**Current foundation:** patch VOL 52; BPM 138; SnapTone slot 51; Gain 49, VOL 80, Bass 58, Middle 52, Treble 40.

**NR Gate** (fixed): THRE 10 · **PRE COMP** (fixed): Sustain 36, VOL 58 · **DST Bass OD** (CTL off → on): Gain 18, Blend 20, VOL 55, Bass 52, Treble 48 · **EQ Bass EQ 2** (fixed): 50Hz 1, 120Hz 2, 400Hz 0, 800Hz 1, 4.5kHz -3, VOL 52.

**Proposed changes:** Remove the Bass OD chorus lift; move CTL to a mild output/EQ lift using Bass EQ 2 with the present curve and VOL 54 as a starting point. Keep the verse curve effectively unchanged by moving its small tonal offsets into the capture if needed. No documented need for added dirt in this warm folk-rock target.

<a id="patch-14"></a>

#### 14. The Anthem — Good Charlotte — Medium

[Source write-up](../../Patches/Bass/Song/Anthem-GC.md) · [JSON](../../Patches/Bass/Song/Anthem-GC.json)

**Current foundation:** patch VOL 52; BPM 176; SnapTone slot 55; Gain 50, VOL 60, Bass 62, Middle 55, Treble 55.

**NR Gate** (fixed): THRE 25 · **DST Bass OD** (CTL off → on): Gain 45, Blend 60, VOL 60, Bass 55, Treble 55 · **EQ Bass EQ 2** (fixed): 50Hz 3, 120Hz 2, 400Hz -3, 800Hz 0, 4.5kHz 6, VOL 55 · **RVB Room** (CTL off → on): Mix 20, Decay 30, Trail true.

**Proposed changes:** Keep BrightSVT. Bass OD Gain 45→25, Blend 60→35; Room Mix 20→0/bypassed. EQ 4.5kHz +6→+3 and capture Bass 62→56. This should produce clearer fast eighths without losing pick bite.

<a id="patch-15"></a>

#### 15. Basket Case — Green Day — High

[Source write-up](../../Patches/Bass/Song/BasketCase-GreenDay.md) · [JSON](../../Patches/Bass/Song/BasketCase-GreenDay.json)

**Current foundation:** patch VOL 55; BPM 171; SnapTone slot 55; Gain 50, VOL 60, Bass 55, Middle 58, Treble 62.

**NR Gate** (fixed): THRE 22 · **PRE Micro Boost** (CTL off → on): Gain 50 · **DST Bass OD** (fixed): Gain 55, Blend 65, VOL 60, Bass 55, Treble 60 · **EQ Bass EQ 1** (fixed): 33Hz 2, 150Hz -2, 600Hz 2, 2kHz 5, 8kHz 4, VOL 55 · **RVB Room** (CTL off → on): Mix 18, Decay 28, Trail true.

**Proposed changes:** Remove the always-on GP-5 Bass OD and use the board Tidal Wave as the main added drive; retain BrightSVT. Micro Boost Gain 50→25, Room Mix 18→0/bypassed. The current Tidal Wave + Bass OD + driven capture stack risks replacing the bass's attack with saturation. Update the stomp map with the revised drive source.

<a id="patch-16"></a>

#### 16. Beat It — Michael Jackson — Low

[Source write-up](../../Patches/Bass/Song/BeatIt-MJ.md) · [JSON](../../Patches/Bass/Song/BeatIt-MJ.json)

**Current foundation:** patch VOL 55; BPM 139; SnapTone slot 52; Gain 50, VOL 75, Bass 55, Middle 52, Treble 56.

**NR Gate** (fixed): THRE 15 · **EQ Bass EQ 2** (fixed): 50Hz 1, 120Hz 2, 400Hz -1, 800Hz 1, 4.5kHz 2, VOL 52 · **RVB Room** (fixed): Mix 6, Decay 20, Trail true.

**Proposed changes:** Keep the clean Avalon core and single board compressor. Make Flamma optional rather than continuously necessary: compare dry against the documented octave blend and favor dry if the lowest notes blur. Room Mix 6 is already restrained. No automatic amp change.

<a id="patch-17"></a>

#### 17. Believe — Brooks & Dunn — Medium

[Source write-up](../../Patches/Bass/Song/Believe-BrooksDunn.md) · [JSON](../../Patches/Bass/Song/Believe-BrooksDunn.json)

**Current foundation:** patch VOL 52; BPM 66; SnapTone slot 51; Gain 49, VOL 80, Bass 60, Middle 48, Treble 42.

**NR Gate** (fixed): THRE 10 · **PRE COMP4** (fixed): Sustain 42, Attack 40, Clip 40, VOL 58 · **DST Bass OD** (CTL off → on): Gain 22, Blend 22, VOL 55, Bass 55, Treble 45 · **EQ Bass EQ 1** (fixed): 33Hz 2, 150Hz 1, 600Hz -2, 2kHz 0, 8kHz -3, VOL 52 · **RVB Hall** (CTL off → on): Mix 12, Decay 40, Trail true.

**Proposed changes:** Remove CTL Bass OD; keep the Hall option at Mix 12→6 or use CTL for an EQ/output lift instead. Capture Bass 60→56. Preserve the gospel build through level and playing dynamics rather than introducing distortion by default.

<a id="patch-18"></a>

#### 18. Billie Jean — Chris Cornell — Low

[Source write-up](../../Patches/Bass/Song/BillieJean-ChrisCornell.md) · [JSON](../../Patches/Bass/Song/BillieJean-ChrisCornell.json)

**Current foundation:** patch VOL 50; BPM 70; SnapTone slot 54; Gain 50, VOL 80, Bass 56, Middle 52, Treble 46.

**NR Gate** (fixed): THRE 12 · **PRE COMP** (fixed): Sustain 45, VOL 58 · **DST Bass OD** (CTL off → on): Gain 40, Blend 45, VOL 56, Bass 55, Treble 52 · **EQ Bass EQ 2** (fixed): 50Hz 2, 120Hz 2, 400Hz -2, 800Hz 1, 4.5kHz -1, VOL 52 · **RVB Room** (CTL off → on): Mix 12, Decay 32, Trail true.

**Proposed changes:** Keep FullB15 and the dark main line. Test CTL Bass OD Gain 40→25, Blend 45→30; Room Mix 12→6. This keeps the heavy section focused on the recurring bass figure instead of extra wash.

<a id="patch-19"></a>

#### 19. The Blessing — Kari Jobe, Cody Carnes — Medium

[Source write-up](../../Patches/Bass/Song/Blessing-KJ.md) · [JSON](../../Patches/Bass/Song/Blessing-KJ.json)

**Current foundation:** patch VOL 55; BPM 70; SnapTone slot 59; Gain 48, VOL 55, Bass 62, Middle 46, Treble 44.

**NR Gate** (fixed): THRE 8 · **EQ Bass EQ 2** (fixed): 50Hz 4, 120Hz 1, 400Hz -3, 800Hz 0, 4.5kHz -3, VOL 52.

**Proposed changes:** Keep the shared board settings unchanged. Capture Bass 62→56 and EQ 50Hz +4→+1. Make the Flamma climax layer optional and register-limited; a low-B fundamental plus added octave can spend headroom without adding useful pitch definition.

<a id="patch-20"></a>

#### 20. The Bread Has Been Broken — Jeff Deyo — High

[Source write-up](../../Patches/Bass/Song/BreadBroken-JD.md) · [JSON](../../Patches/Bass/Song/BreadBroken-JD.json)

**Current foundation:** patch VOL 48; BPM 72; SnapTone slot 59; Gain 50, VOL 55, Bass 58, Middle 45, Treble 42.

**NR Gate** (fixed): THRE 18 · **PRE COMP** (fixed): Sustain 35, VOL 52 · **EQ Bass EQ 2** (fixed): 50Hz 5, 120Hz 2, 400Hz -3, 800Hz -3, 4.5kHz -5, VOL 48 · **RVB Church** (fixed): Mix 20, Decay 60, Trail true.

**Proposed changes:** Remove GP-5 COMP while retaining the shared Donner setting. Church Mix 20→6, Decay 60→30; EQ 50Hz +5→+1, 800Hz -3→0. A communion part needs audible note identity at low level, not a scooped sub-heavy reverberant floor. Keep patch VOL 48 pending a set-level listening check.

<a id="patch-21"></a>

#### 21. Bright Size Life — Pat Metheny — Medium

[Source write-up](../../Patches/Bass/Song/BrightSizeLife-Metheny.md) · [JSON](../../Patches/Bass/Song/BrightSizeLife-Metheny.json)

**Current foundation:** patch VOL 50; BPM 170; SnapTone slot 52; Gain 44, VOL 75, Bass 50, Middle 58, Treble 58.

**NR Gate** (fixed): THRE 8 · **PRE COMP** (fixed): Sustain 35, VOL 58 · **DST Bass OD** (CTL off → on): Gain 15, Blend 28, VOL 60, Bass 45, Treble 55 · **EQ Bass EQ 2** (CTL off → on): 50Hz 0, 120Hz 0, 400Hz 0, 800Hz 5, 4.5kHz 2, VOL 52 · **RVB Room** (fixed): Mix 8, Decay 20, Trail false.

**Proposed changes:** Remove CTL Bass OD; keep the EQ-only melodic lift. EQ 800Hz +5→+3, VOL 52 unchanged initially. Keep the low gate and restrained room. This gives clean fretless expression without a distortion block unrelated to the stated target.

<a id="patch-22"></a>

#### 22. Bring Me to Life — Evanescence — Medium

[Source write-up](../../Patches/Bass/Song/BringMeToLife-Evanescence.md) · [JSON](../../Patches/Bass/Song/BringMeToLife-Evanescence.json)

**Current foundation:** patch VOL 50; BPM 95; SnapTone slot 57; Gain 50, VOL 55, Bass 56, Middle 55, Treble 56.

**NR Gate** (fixed): THRE 20 · **PRE COMP** (fixed): Sustain 50, VOL 58 · **DST Bass OD** (CTL off → on): Gain 50, Blend 55, VOL 56, Bass 56, Treble 58 · **EQ Bass EQ 1** (fixed): 33Hz 3, 150Hz 0, 600Hz -3, 2kHz 3, 8kHz 1, VOL 54 · **RVB Room** (CTL off → on): Mix 10, Decay 28, Trail true.

**Proposed changes:** Bass OD Gain 50→30, Blend 55→35; bypass CTL Room and reduce PRE Sustain 50→40 if note attacks flatten. Keep GrittySVT. The chorus needs solid low notes beneath the guitars more than another dense gain layer.

<a id="patch-23"></a>

#### 23. Civil War — Guns N' Roses — Medium

[Source write-up](../../Patches/Bass/Song/CivilWar-GNR.md) · [JSON](../../Patches/Bass/Song/CivilWar-GNR.json)

**Current foundation:** patch VOL 55; BPM 70; SnapTone slot 57; Gain 48, VOL 55, Bass 56, Middle 58, Treble 56.

**NR Gate** (fixed): THRE 20 · **DST Bass OD** (CTL off → on): Gain 42, Blend 45, VOL 60, Bass 52, Treble 56 · **EQ Bass EQ 1** (fixed): 33Hz 1, 150Hz 1, 600Hz 2, 2kHz 3, 8kHz 1, VOL 54 · **RVB Room** (fixed): Mix 10, Decay 25, Trail true.

**Proposed changes:** Replace CTL Bass OD with the existing Tidal Wave drive stomp: trial Drive 30, Blend 35 while keeping the preamp settings. Remove GP-5 Room or reduce Mix 10→5. Keep GrittySVT and the P/J pick voice. Write the extra stomp explicitly rather than pretending CTL can operate the board.

<a id="patch-24"></a>

#### 24. Cliffs of Dover — Eric Johnson — Medium

[Source write-up](../../Patches/Bass/Song/CliffsOfDover-EJ.md) · [JSON](../../Patches/Bass/Song/CliffsOfDover-EJ.json)

**Current foundation:** patch VOL 55; BPM 133; SnapTone slot 52; Gain 55, VOL 75, Bass 55, Middle 60, Treble 65.

**NR Gate** (fixed): THRE 15 · **EQ Bass EQ 2** (fixed): 50Hz 2, 120Hz 0, 400Hz -3, 800Hz 3, 4.5kHz 4, VOL 55 · **MOD B-Chorus** (CTL off → on): Depth 25, Rate 0.4, VOL 55 · **RVB Room** (CTL off → on): Mix 25, Decay 35, Trail true.

**Proposed changes:** Keep Avalon. Room Mix 25→8; capture Treble 65→58 and EQ 4.5kHz +4→+2. The interlude may open up without putting a quarter-wet bass behind the guitar. Fix the Tidal Wave bypass language and document its continuously active preamp controls.

**Additional finding:** Give explicit Tidal Wave Level/EQ/toggle settings even with drive off; use the agreed set-wide board settings, or a documented neutral starting point if this is standalone.

<a id="patch-25"></a>

#### 25. Comedown — Bush — High

[Source write-up](../../Patches/Bass/Song/Comedown-Bush.md) · [JSON](../../Patches/Bass/Song/Comedown-Bush.json)

**Current foundation:** patch VOL 50; BPM 92; SnapTone slot 58; Gain 46, VOL 55, Bass 55, Middle 45, Treble 38.

**NR Gate** (fixed): THRE 30 · **PRE Micro Boost** (CTL off → on): Gain 42 · **DST Bass OD** (fixed): Gain 65, Blend 75, VOL 62, Bass 55, Treble 40 · **EQ Bass EQ 2** (fixed): 50Hz 3, 120Hz 1, 400Hz -5, 800Hz -1, 4.5kHz 4, VOL 55 · **RVB Room** (CTL off → on): Mix 20, Decay 35, Trail true.

**Proposed changes:** Remove the always-on Bass OD first; audition HairySVT alone for the main line. If more drive is needed, use Bass OD on CTL at Gain 25, Blend 30 instead of fixed Gain 65/Blend 75. Lower THRE 30→15, Room Mix 20→6. Keep the recognizable bass figure forward and avoid assuming fuzz because the guitars are grungy.

<a id="patch-26"></a>

#### 26. Comfortably Numb — Pink Floyd — Medium

[Source write-up](../../Patches/Bass/Song/ComfortablyNumb-PinkFloyd.md) · [JSON](../../Patches/Bass/Song/ComfortablyNumb-PinkFloyd.json)

**Current foundation:** patch VOL 52; BPM 64; SnapTone slot 53; Gain 46, VOL 65, Bass 62, Middle 48, Treble 40.

**NR Gate** (fixed): THRE 12 · **PRE COMP** (fixed): Sustain 40, VOL 60 · **DST Bass OD** (CTL off → on): Gain 15, Blend 30, VOL 60, Bass 55, Treble 45 · **EQ Bass EQ 1** (fixed): 33Hz 3, 150Hz 2, 600Hz -2, 2kHz 0, 8kHz -3, VOL 52 · **RVB Hall** (CTL off → on): Mix 22, Decay 50, Trail true.

**Proposed changes:** Remove CTL Bass OD; Hall Mix 22→6 and Decay 50→30. Capture Bass 62→56; EQ 33Hz +3→0. Keep CleanSVT and gentle compression. The bass should hold the harmonic floor while the guitar supplies the soaring effect.

<a id="patch-27"></a>

#### 27. Conceiving You — Riverside — Medium

[Source write-up](../../Patches/Bass/Song/ConceivingYou-Riverside.md) · [JSON](../../Patches/Bass/Song/ConceivingYou-Riverside.json)

**Current foundation:** patch VOL 50; BPM 95; SnapTone slot 56; Gain 50, VOL 60, Bass 60, Middle 55, Treble 40.

**NR Gate** (fixed): THRE 25 · **PRE COMP** (fixed): Sustain 55, VOL 58 · **DST Bass OD** (CTL off → on): Gain 45, Blend 58, VOL 60, Bass 55, Treble 42 · **EQ Bass EQ 2** (fixed): 50Hz 3, 120Hz 2, 400Hz -1, 800Hz 2, 4.5kHz -1, VOL 50 · **RVB Room** (CTL off → on): Mix 12, Decay 25, Trail false.

**Proposed changes:** Bass OD Gain 45→25, Blend 58→35; PRE Sustain 55→40 and Gate THRE 25→12. Keep ProgSVT provisionally. The write-up derives the sound from the band generally, so confirm this particular arrangement before committing to a heavy section map.

<a id="patch-28"></a>

#### 28. Crash Into Me — Dave Matthews Band — Medium

[Source write-up](../../Patches/Bass/Song/CrashIntoMe-DMB.md) · [JSON](../../Patches/Bass/Song/CrashIntoMe-DMB.json)

**Current foundation:** patch VOL 52; BPM 70; SnapTone slot 53; Gain 49, VOL 65, Bass 58, Middle 55, Treble 52.

**NR Gate** (fixed): THRE 16 · **PRE COMP** (fixed): Sustain 40, VOL 55 · **EQ Bass EQ 1** (fixed): 33Hz 3, 150Hz 1, 600Hz -2, 2kHz 2, 8kHz 0, VOL 52 · **MOD A-Chorus** (fixed): Depth 12, Rate 0.4, Tone 45 · **RVB Room** (CTL off → on): Mix 20, Decay 35, Trail true.

**Proposed changes:** Bypass GP-5 COMP and A-Chorus first, keeping the Donner and CleanSVT. Room Mix 20→8. A dry, lightly controlled melodic bass is a better starting point than dual compression plus continuous chorus; retain modulation only if the actual part calls for it.

<a id="patch-29"></a>

#### 29. Creek Mary's Blood — Nightwish — Low

[Source write-up](../../Patches/Bass/Song/CreekMarysBlood-Nightwish.md) · [JSON](../../Patches/Bass/Song/CreekMarysBlood-Nightwish.json)

**Current foundation:** patch VOL 50; BPM 90; SnapTone slot 55; Gain 46, VOL 60, Bass 58, Middle 55, Treble 45.

**NR Gate** (fixed): THRE 20 · **PRE COMP** (fixed): Sustain 50, VOL 58 · **DST Bass OD** (CTL off → on): Gain 42, Blend 55, VOL 60, Bass 55, Treble 50 · **EQ Bass EQ 2** (fixed): 50Hz 2, 120Hz 2, 400Hz 0, 800Hz 2, 4.5kHz 1, VOL 50 · **RVB Hall** (CTL off → on): Mix 15, Decay 35, Trail false.

**Proposed changes:** Keep BrightSVT and the clean/heavy split. Bass OD Gain 42→30, Blend 55→40; Hall Mix 15→6. Use Trail on if the transition is intended to preserve long held notes; Trail off is valid when a hard stop is required.

<a id="patch-30"></a>

#### 30. DYFAM-SM — Don't You Forget About Me (Simple Minds, 1985, ~114 BPM) — High

[Source write-up](../../Patches/Bass/Song/DYFAM-SM.md) · [JSON](../../Patches/Bass/Song/DYFAM-SM.json)

**Current foundation:** patch VOL 55; BPM 114; SnapTone slot 52; Gain 55, VOL 75, Bass 60, Middle 65, Treble 55.

**NR Gate** (fixed): THRE 20 · **PRE Boost** (CTL off → on): Gain 65, +3dB true, Bright true · **EQ Bass EQ 1** (fixed): 33Hz 6, 150Hz 2, 600Hz -6, 2kHz 8, 8kHz 5, VOL 55.

**Proposed changes:** Boost Gain 65→25 and +3dB on→off; EQ 33Hz +6→0, 600Hz -6→-2, 2kHz +8→+3. Capture Middle 65→55. The current 'clean' patch includes substantial pre-capture boosting and multiple presence boosts. Replace the Narcissus '2 o'clock, slow' contradiction with an unambiguous low Rate position around 9 o'clock.

<a id="patch-31"></a>

#### 31. Danger Zone — Kenny Loggins — Medium

[Source write-up](../../Patches/Bass/Song/DangerZone-KennyLoggins.md) · [JSON](../../Patches/Bass/Song/DangerZone-KennyLoggins.json)

**Current foundation:** patch VOL 52; BPM 158; SnapTone slot 52; Gain 50, VOL 75, Bass 55, Middle 52, Treble 60.

**NR Gate** (fixed): THRE 20 · **PRE OCTA** (CTL off → on): Low 45, High 0, Dry 80 · **DST Bass OD** (CTL off → on): Gain 30, Blend 30, VOL 55, Bass 50, Treble 55 · **EQ Bass EQ 1** (fixed): 33Hz 2, 150Hz 0, 600Hz -3, 2kHz 3, 8kHz 1, VOL 52.

**Proposed changes:** OCTA Low 45→20, Dry 80→100; Bass OD Gain 30→15 and Blend 30→20. Keep octave off for low-register passages where the generated sub adds little useful pitch. Explicitly frame this as an electric-bass adaptation of a synth part.

<a id="patch-32"></a>

#### 32. Dawn of Victory — Rhapsody — Low

[Source write-up](../../Patches/Bass/Song/DawnOfVictory-Rhapsody.md) · [JSON](../../Patches/Bass/Song/DawnOfVictory-Rhapsody.json)

**Current foundation:** patch VOL 50; BPM 170; SnapTone slot 55; Gain 45, VOL 60, Bass 50, Middle 55, Treble 55.

**NR Gate** (fixed): THRE 25 · **PRE COMP4** (fixed): Sustain 55, Attack 45, Clip 50, VOL 58 · **DST Bass OD** (CTL off → on): Gain 30, Blend 40, VOL 60, Bass 45, Treble 55 · **EQ Bass EQ 2** (fixed): 50Hz 1, 120Hz 1, 400Hz -3, 800Hz 3, 4.5kHz 3, VOL 50.

**Proposed changes:** Keep the dry power-metal layout. Bass OD Gain 30→20, Blend 40→30 and COMP4 Sustain 55→40 as a clarity trial. Verify Gate THRE 25 against fast soft notes before lowering it. No amp substitution needed.

<a id="patch-33"></a>

#### 33. A Day in the Life — The Beatles (Bass) — Medium

[Source write-up](../../Patches/Bass/Song/DayLife-Beatles.md) · [JSON](../../Patches/Bass/Song/DayLife-Beatles.json)

**Current foundation:** patch VOL 54; BPM 85; SnapTone slot 52; Gain 50, VOL 75, Bass 50, Middle 62, Treble 62.

**NR Gate** (fixed): THRE 18 · **PRE Micro Boost** (CTL off → on): Gain 55 · **EQ Bass EQ 1** (fixed): 33Hz 3, 150Hz 2, 600Hz -3, 2kHz 5, 8kHz 3, VOL 55 · **RVB Room** (CTL on → off): Mix 18, Decay 32, Trail true.

**Proposed changes:** Micro Boost Gain 55→25; Room Mix 18→6. Capture Treble 62→55 and EQ 2kHz +5→+2. Keep Avalon. Rewrite the exact original DI/rig assertions as unverified unless supported by a session source; the modern Avalon capture is a tonal substitute.

**Additional finding:** Document Tidal Wave drive off with preamp still active and specify its Level/EQ/toggles; the current bypass instruction does not remove it from the chain.

<a id="patch-34"></a>

#### 34. I'm Diggin' You (Like an Old Soul Record) — Meshell Ndegeocello — Low

[Source write-up](../../Patches/Bass/Song/DigginYou-MN.md) · [JSON](../../Patches/Bass/Song/DigginYou-MN.json)

**Current foundation:** patch VOL 55; BPM 92; SnapTone slot 51; Gain 50, VOL 80, Bass 56, Middle 54, Treble 50.

**NR Gate** (fixed): THRE 12 · **EQ Bass EQ 2** (fixed): 50Hz 0, 120Hz 2, 400Hz -1, 800Hz 2, 4.5kHz 0, VOL 50 · **RVB Room** (fixed): Mix 6, Decay 20, Trail true.

**Proposed changes:** Keep the clean, nearly dry soul architecture and one compressor. Try EQ 400Hz -1→+1 for more vocal low-mid identity instead of more bass. Retain the current curve if that crowds the arrangement. No forced CTL addition.

<a id="patch-35"></a>

#### 35. Dirt Road Anthem — Jason Aldean — Medium

[Source write-up](../../Patches/Bass/Song/DirtRoadAnthem-JasonAldean.md) · [JSON](../../Patches/Bass/Song/DirtRoadAnthem-JasonAldean.json)

**Current foundation:** patch VOL 50; BPM 86; SnapTone slot 54; Gain 50, VOL 80, Bass 58, Middle 50, Treble 46.

**NR Gate** (fixed): THRE 12 · **PRE COMP** (fixed): Sustain 50, VOL 58 · **DST Bass OD** (CTL off → on): Gain 28, Blend 30, VOL 56, Bass 55, Treble 50 · **EQ Bass EQ 2** (fixed): 50Hz 3, 120Hz 2, 400Hz -2, 800Hz 1, 4.5kHz -1, VOL 52 · **RVB Room** (CTL off → on): Mix 12, Decay 30, Trail true.

**Proposed changes:** Bass OD Gain 28→15, Blend 30→20; Room Mix 12→0/bypassed. EQ 50Hz +3→+1. Keep FullB15 and compression. Deep hip-hop-influenced bass benefits from a stable clean fundamental rather than added ambience.

<a id="patch-36"></a>

#### 36. Dryad of the Woods — Pain of Salvation — High

[Source write-up](../../Patches/Bass/Song/Dryad-PainOfSalvation.md) · [JSON](../../Patches/Bass/Song/Dryad-PainOfSalvation.json)

**Current foundation:** patch VOL 50; BPM 100; SnapTone slot 56; Gain 50, VOL 60, Bass 58, Middle 50, Treble 45.

**NR Gate** (fixed): THRE 10 · **PRE COMP4** (fixed): Sustain 45, Attack 40, Clip 45, VOL 58 · **DST Bass OD** (CTL off → on): Gain 30, Blend 40, VOL 60, Bass 50, Treble 45 · **EQ Bass EQ 1** (fixed): 33Hz 0, 150Hz 2, 600Hz 1, 2kHz 1, 8kHz -1, VOL 50 · **RVB Plate** (CTL off → on): Mix 13, Decay 30, Damp 50, Trail false.

**Proposed changes:** Recheck the actual song arrangement before retaining the generic prog-metal dirty state. Start by removing Bass OD and using CleanB15 slot 51, Gain 50/VOL 80/Bass 53/Middle 53/Treble 48, with the existing light EQ and Plate Mix 6. This is a provisional clean/woody alternative, not a claim about the recorded rig; compare against the recording before replacing ProgSVT.

<a id="patch-37"></a>

#### 37. Ecstasy — Rusted Root — High

[Source write-up](../../Patches/Bass/Song/Ecstasy-RustedRoot.md) · [JSON](../../Patches/Bass/Song/Ecstasy-RustedRoot.json)

**Current foundation:** patch VOL 55; BPM 102; SnapTone slot 54; Gain 52, VOL 80, Bass 56, Middle 55, Treble 55.

**NR Gate** (fixed): THRE 20 · **PRE Micro Boost** (CTL off → on): Gain 52 · **DST Green OD** (CTL off → on): Gain 60, Tone 55, VOL 62 · **EQ Bass EQ 1** (fixed): 33Hz 3, 150Hz -1, 600Hz 2, 2kHz 4, 8kHz 2, VOL 55 · **RVB Hall** (CTL off → on): Mix 25, Decay 38, Trail true.

**Proposed changes:** Remove Green OD Gain 60 from the bass path; it has no clean Blend control. Use FullB15 alone first, or CTL Bass OD Gain 20/Blend 25/VOL 55 if a dirty layer is actually needed. Remove Micro Boost from the same CTL move and lower Hall Mix 25→6. Preserve the syncopated fundamental through the climax.

<a id="patch-38"></a>

#### 38. Everlong — Foo Fighters — High

[Source write-up](../../Patches/Bass/Song/Everlong-FF.md) · [JSON](../../Patches/Bass/Song/Everlong-FF.json)

**Current foundation:** patch VOL 56; BPM 158; SnapTone slot 57; Gain 50, VOL 55, Bass 55, Middle 62, Treble 62.

**NR Gate** (fixed): THRE 22 · **PRE Micro Boost** (CTL off → on): Gain 58 · **DST Bass OD** (fixed): Gain 65, Blend 75, VOL 62, Bass 55, Treble 60 · **EQ Bass EQ 1** (fixed): 33Hz 3, 150Hz 1, 600Hz -3, 2kHz 6, 8kHz 3, VOL 56 · **RVB Room** (CTL off → on): Mix 22, Decay 38, Trail true.

**Proposed changes:** Remove always-on Bass OD Gain 65/Blend 75. Keep GrittySVT as the main drive voice; Micro Boost Gain 58→25 and Room Mix 22→0/bypassed. EQ 2kHz +6→+3. Tight fast bass needs definition before more saturation and room.

**Additional finding:** The Tidal Wave footswitch leaves its preamp active: specify its Level/EQ/toggles rather than calling the entire pedal bypassed.

<a id="patch-39"></a>

#### 39. Fire — Ohio Players — Medium

[Source write-up](../../Patches/Bass/Song/Fire-OP.md) · [JSON](../../Patches/Bass/Song/Fire-OP.json)

**Current foundation:** patch VOL 52; BPM 116; SnapTone slot 53; Gain 55, VOL 65, Bass 60, Middle 62, Treble 55.

**NR Gate** (fixed): THRE 20 · **PRE COMP** (fixed): Sustain 55, VOL 65 · **DST Bass OD** (CTL off → on): Gain 30, Blend 55, VOL 68, Bass 55, Treble 52 · **EQ Bass EQ 1** (fixed): 33Hz 5, 150Hz -3, 600Hz 4, 2kHz 5, 8kHz 3, VOL 52 · **RVB Room** (CTL off → on): Mix 18, Decay 25, Trail false.

**Proposed changes:** Remove the CTL Bass OD and Room combination; use a modest CTL EQ lift if a second state proves useful. PRE Sustain 55→40; EQ 33Hz +5→0 and 2kHz +5→+2. Keep the mid-forward CleanSVT funk core.

<a id="patch-40"></a>

#### 40. Forever Reign — Hillsong Worship — Low

[Source write-up](../../Patches/Bass/Song/ForeverReign-HS.md) · [JSON](../../Patches/Bass/Song/ForeverReign-HS.json)

**Current foundation:** patch VOL 55; BPM 83; SnapTone slot 59; Gain 50, VOL 55, Bass 58, Middle 50, Treble 48.

**NR Gate** (fixed): THRE 10 · **PRE Micro Boost** (CTL off → on): Gain 30 · **EQ Bass EQ 1** (fixed): 33Hz 1, 150Hz 2, 600Hz -2, 2kHz 1, 8kHz -3, VOL 52.

**Proposed changes:** Keep WorshipSVT and the shared Tidal Wave stomp map. Test Micro Boost Gain 30→20 only when combined with the board drive; both stages add capture input level. Preserve the fixed set-wide board controls.

<a id="patch-41"></a>

#### 41. Found (The Unexpected Flaw of Searching) — Riverside — Medium

[Source write-up](../../Patches/Bass/Song/Found-Riverside.md) · [JSON](../../Patches/Bass/Song/Found-Riverside.json)

**Current foundation:** patch VOL 50; BPM 100; SnapTone slot 56; Gain 40, VOL 60, Bass 55, Middle 52, Treble 48.

**NR Gate** (fixed): THRE 10 · **PRE COMP** (fixed): Sustain 40, VOL 58 · **DST Bass OD** (CTL off → on): Gain 25, Blend 38, VOL 60, Bass 48, Treble 50 · **EQ Bass EQ 2** (fixed): 50Hz 2, 120Hz 2, 400Hz 0, 800Hz -1, 4.5kHz 1, VOL 50 · **MOD B-Chorus** (fixed): Depth 14, Rate 0.7, VOL 50 · **RVB Hall** (CTL off → on): Mix 16, Decay 38, Trail false.

**Proposed changes:** Keep the light chorus and ProgSVT provisionally. Bass OD Gain 25→15, Blend 38→20; Hall Mix 16→8. Consider removing dirt entirely if the particular bass part stays clean; avoid inferring its settings from the heavier Riverside songs.

<a id="patch-42"></a>

#### 42. Giving It All to You — Michael Gungor — Medium

[Source write-up](../../Patches/Bass/Song/GivingAll-MG.md) · [JSON](../../Patches/Bass/Song/GivingAll-MG.json)

**Current foundation:** patch VOL 52; BPM 100; SnapTone slot 54; Gain 54, VOL 80, Bass 55, Middle 50, Treble 50.

**NR Gate** (fixed): THRE 20 · **PRE COMP** (fixed): Sustain 45, VOL 55 · **EQ Bass EQ 1** (fixed): 33Hz 4, 150Hz 2, 600Hz 0, 2kHz -2, 8kHz -3, VOL 52 · **MOD A-Chorus** (fixed): Depth 15, Rate 0.5, Tone 40 · **RVB Room** (fixed): Mix 12, Decay 30, Trail true.

**Proposed changes:** Remove GP-5 COMP and continuous A-Chorus; keep the shared Donner and board foundation. EQ 33Hz +4→0 and Room Mix 12→6. A warm organic pocket needs low-mid note body and dynamics more than a generic chorus texture.

<a id="patch-43"></a>

#### 43. Are You Gonna Be My Girl — Jet — High

[Source write-up](../../Patches/Bass/Song/GonnaBeMyGirl-Jet.md) · [JSON](../../Patches/Bass/Song/GonnaBeMyGirl-Jet.json)

**Current foundation:** patch VOL 55; BPM 137; SnapTone slot 57; Gain 52, VOL 55, Bass 55, Middle 60, Treble 55.

**NR Gate** (fixed): THRE 25 · **PRE Micro Boost** (CTL off → on): Gain 55 · **DST Bass OD** (fixed): Gain 50, Blend 70, VOL 60, Bass 58, Treble 55 · **EQ Bass EQ 1** (fixed): 33Hz 3, 150Hz -2, 600Hz 2, 2kHz 5, 8kHz 3, VOL 55 · **RVB Room** (CTL off → on): Mix 20, Decay 30, Trail true.

**Proposed changes:** Remove GP-5 Bass OD and use one principal added drive: the Tidal Wave at trial Drive 25/Blend 35 into GrittySVT. Micro Boost Gain 55→25; Room Mix 20→0/bypassed. Keep the exposed riff articulate before increasing dirt.

<a id="patch-44"></a>

#### 44. Hair — Graham Central Station — High

[Source write-up](../../Patches/Bass/Song/Hair-GrahamCentralStation.md) · [JSON](../../Patches/Bass/Song/Hair-GrahamCentralStation.json)

**Current foundation:** patch VOL 56; BPM 104; SnapTone slot 54; Gain 52, VOL 80, Bass 62, Middle 48, Treble 58.

**NR Gate** (fixed): THRE 20 · **PRE COMP4** (fixed): Sustain 70, Attack 40, Clip 15, VOL 60 · **EQ Bass EQ 1** (fixed): 33Hz 5, 150Hz -2, 600Hz -4, 2kHz 3, 8kHz 5, VOL 56 · **RVB Room** (fixed): Mix 12, Decay 22, Trail true.

**Proposed changes:** Keep the Donner as the first compressor; COMP4 Sustain 70→35, Clip 15→40 as an input-sensitivity trial, then compare with PRE bypassed. EQ 33Hz +5→0 and 8kHz +5→+2; capture Bass 62→56. Recheck actual peak behavior rather than assuming two heavy compressors improve slap.

<a id="patch-45"></a>

#### 45. Hanging by a Moment — Lifehouse — Low

[Source write-up](../../Patches/Bass/Song/HangingByAMoment-Lifehouse.md) · [JSON](../../Patches/Bass/Song/HangingByAMoment-Lifehouse.json)

**Current foundation:** patch VOL 50; BPM 124; SnapTone slot 53; Gain 50, VOL 65, Bass 54, Middle 54, Treble 54.

**NR Gate** (fixed): THRE 14 · **PRE COMP** (fixed): Sustain 45, VOL 58 · **DST Bass OD** (CTL off → on): Gain 35, Blend 40, VOL 56, Bass 54, Treble 55 · **EQ Bass EQ 2** (fixed): 50Hz 1, 120Hz 2, 400Hz -2, 800Hz 2, 4.5kHz 1, VOL 52 · **RVB Room** (CTL off → on): Mix 10, Decay 28, Trail true.

**Proposed changes:** Keep CleanSVT, COMP and the CTL drive option. Bass OD Gain 35→25, Blend 40→30; Room Mix 10→5. This is a modest refinement rather than an amp redesign.

<a id="patch-46"></a>

#### 46. Hard Workin' Man — Brooks & Dunn — Low

[Source write-up](../../Patches/Bass/Song/HardWorkinMan-BrooksDunn.md) · [JSON](../../Patches/Bass/Song/HardWorkinMan-BrooksDunn.json)

**Current foundation:** patch VOL 52; BPM 150; SnapTone slot 51; Gain 50, VOL 80, Bass 56, Middle 50, Treble 55.

**NR Gate** (fixed): THRE 14 · **PRE COMP4** (fixed): Sustain 45, Attack 50, Clip 40, VOL 58 · **EQ Bass EQ 1** (fixed): 33Hz 0, 150Hz 1, 600Hz 1, 2kHz 2, 8kHz 0, VOL 52 · **RVB Room** (CTL off → on): Mix 12, Decay 25, Trail true.

**Proposed changes:** Keep CleanB15 and COMP4. Reduce CTL Room Mix 12→6 or leave it bypassed; use playing dynamics for the chorus. No added drive needed.

<a id="patch-47"></a>

#### 47. Heads Carolina, Tails California — Jo Dee Messina — High

[Source write-up](../../Patches/Bass/Song/HeadsCarolina-JDM.md) · [JSON](../../Patches/Bass/Song/HeadsCarolina-JDM.json)

**Current foundation:** patch VOL 52; BPM 118; SnapTone slot 51; Gain 60, VOL 80, Bass 55, Middle 55, Treble 65.

**NR Gate** (fixed): THRE 25 · **PRE Micro Boost** (CTL off → on): Gain 45 · **EQ Bass EQ 2** (fixed): 50Hz 2, 120Hz 3, 400Hz -3, 800Hz 0, 4.5kHz 6, VOL 55 · **RVB Room** (CTL off → on): Mix 20, Decay 35, Trail true.

**Proposed changes:** Capture Gain 60→50 and Treble 65→56; Gate THRE 25→12; EQ 4.5kHz +6→+2. Micro Boost Gain 45→25 and Room Mix 20→6. The bright clean target is currently pushed at several consecutive stages. Correct the album attribution in the write-up after checking the release.

<a id="patch-48"></a>

#### 48. Heaven-LLB — Heaven by Los Lonely Boys — Medium

[Source write-up](../../Patches/Bass/Song/Heaven-LLB.md) · [JSON](../../Patches/Bass/Song/Heaven-LLB.json)

**Current foundation:** patch VOL 50; BPM 76; SnapTone slot 54; Gain 50, VOL 80, Bass 65, Middle 55, Treble 45.

**NR Gate** (fixed): THRE 20 · **PRE Micro Boost** (CTL off → on): Gain 35 · **EQ Bass EQ 2** (fixed): 50Hz 3, 120Hz 2, 400Hz -2, 800Hz 0, 4.5kHz 2, VOL 55 · **RVB Hall** (CTL off → on): Mix 30, Decay 45, Trail true.

**Proposed changes:** Capture Bass 65→56, EQ 50Hz +3→+1; Hall Mix 30→8 and Decay 45→30. Gate THRE 20→10 for fretless decay. Keep FullB15 and passive Sire; the soulful lift should retain a clear front edge.

<a id="patch-49"></a>

#### 49. Hey Jealousy — Gin Blossoms — Medium

[Source write-up](../../Patches/Bass/Song/HeyJealousy-GB.md) · [JSON](../../Patches/Bass/Song/HeyJealousy-GB.json)

**Current foundation:** patch VOL 54; BPM 116; SnapTone slot 57; Gain 48, VOL 55, Bass 52, Middle 58, Treble 60.

**NR Gate** (fixed): THRE 18 · **PRE Micro Boost** (CTL off → on): Gain 55 · **EQ Bass EQ 1** (fixed): 33Hz 2, 150Hz 1, 600Hz -2, 2kHz 5, 8kHz 2, VOL 55 · **RVB Room** (CTL off → on): Mix 20, Decay 35, Trail true.

**Proposed changes:** Micro Boost Gain 55→25, Room Mix 20→6 and EQ 2kHz +5→+3. Keep GrittySVT and one board compressor. Let the guitars carry the broad chorus space.

**Additional finding:** Specify Tidal Wave preamp controls even with drive off; footswitch-off is not whole-pedal bypass.

<a id="patch-50"></a>

#### 50. Higher — Creed — High

[Source write-up](../../Patches/Bass/Song/Higher-Creed.md) · [JSON](../../Patches/Bass/Song/Higher-Creed.json)

**Current foundation:** patch VOL 55; BPM 85; SnapTone slot 57; Gain 50, VOL 55, Bass 55, Middle 60, Treble 60.

**NR Gate** (fixed): THRE 24 · **PRE Micro Boost** (CTL off → on): Gain 58 · **DST Bass OD** (fixed): Gain 63, Blend 75, VOL 62, Bass 55, Treble 58 · **EQ Bass EQ 1** (fixed): 33Hz 3, 150Hz 0, 600Hz -2, 2kHz 5, 8kHz 3, VOL 56 · **RVB Room** (CTL off → on): Mix 22, Decay 36, Trail true.

**Proposed changes:** Remove the always-on Bass OD Gain 63/Blend 75. Keep GrittySVT, Micro Boost Gain 58→25, Room Mix 22→6. Compare the verse at matched level before adding any dirt back; its current permanent saturation conflicts with the restrained-verse description.

**Additional finding:** Specify Tidal Wave preamp controls even with drive off; footswitch-off is not whole-pedal bypass.

<a id="patch-51"></a>

#### 51. Hoedown — Emerson, Lake & Palmer — Medium

[Source write-up](../../Patches/Bass/Song/Hoedown-ELP.md) · [JSON](../../Patches/Bass/Song/Hoedown-ELP.json)

**Current foundation:** patch VOL 50; BPM 165; SnapTone slot 53; Gain 52, VOL 65, Bass 50, Middle 60, Treble 58.

**NR Gate** (fixed): THRE 20 · **PRE COMP** (fixed): Sustain 45, VOL 58 · **DST Bass OD** (fixed): Gain 30, Blend 50, VOL 62, Bass 50, Treble 58 · **EQ Bass EQ 2** (CTL off → on): 50Hz -2, 120Hz 0, 400Hz 2, 800Hz 6, 4.5kHz 4, VOL 52.

**Proposed changes:** Keep the dry CleanSVT foundation. Bass OD Blend 50→30, Gain 30→20; CTL EQ 800Hz +6→+3 and 4.5kHz +4→+2. Preserve fast-note separation rather than making the unison passages aggressively nasal.

<a id="patch-52"></a>

#### 52. Homegrown-ZBB — Homegrown by Zac Brown Band — High

[Source write-up](../../Patches/Bass/Song/Homegrown-ZBB.md) · [JSON](../../Patches/Bass/Song/Homegrown-ZBB.json)

**Current foundation:** patch VOL 54; BPM 100; SnapTone slot 51; Gain 60, VOL 80, Bass 55, Middle 60, Treble 65.

**NR Gate** (fixed): THRE 30 · **PRE Micro Boost** (CTL off → on): Gain 35 · **EQ Bass EQ 1** (fixed): 33Hz 2, 150Hz 1, 600Hz -2, 2kHz 4, 8kHz 3, VOL 55 · **RVB Room** (CTL off → on): Mix 20, Decay 35, Trail true.

**Proposed changes:** Gate THRE 30→12; capture Gain 60→50, Treble 65→56. Room Mix 20→6. Keep Micro Boost initially at 35 and compare its on-state against the clean target; this chain is already bright without the extra capture gain.

<a id="patch-53"></a>

#### 53. Honky Tonk Truth — Brooks & Dunn — Low

[Source write-up](../../Patches/Bass/Song/HonkyTonkTruth-BrooksDunn.md) · [JSON](../../Patches/Bass/Song/HonkyTonkTruth-BrooksDunn.json)

**Current foundation:** patch VOL 52; BPM 160; SnapTone slot 51; Gain 49, VOL 80, Bass 55, Middle 52, Treble 55.

**NR Gate** (fixed): THRE 14 · **PRE COMP4** (fixed): Sustain 45, Attack 50, Clip 40, VOL 58 · **DST Bass OD** (CTL off → on): Gain 18, Blend 22, VOL 55, Bass 50, Treble 52 · **EQ Bass EQ 2** (fixed): 50Hz 0, 120Hz 2, 400Hz -2, 800Hz 1, 4.5kHz 0, VOL 52.

**Proposed changes:** Remove the optional Bass OD for the clean dancehall target. Either leave one consistent tone or repurpose CTL to a small EQ output lift. Keep CleanB15, COMP4 and the existing modest EQ.

<a id="patch-54"></a>

#### 54. Hotel California — Eagles — Medium

[Source write-up](../../Patches/Bass/Song/HotelCalifornia-Eagles.md) · [JSON](../../Patches/Bass/Song/HotelCalifornia-Eagles.json)

**Current foundation:** patch VOL 52; BPM 74; SnapTone slot 54; Gain 51, VOL 80, Bass 62, Middle 50, Treble 42.

**NR Gate** (fixed): THRE 12 · **PRE COMP** (fixed): Sustain 45, VOL 60 · **DST Bass OD** (CTL off → on): Gain 18, Blend 30, VOL 60, Bass 55, Treble 48 · **EQ Bass EQ 2** (fixed): 50Hz 3, 120Hz 2, 400Hz 0, 800Hz 1, 4.5kHz -2, VOL 52 · **RVB Plate** (CTL off → on): Mix 18, Decay 40, Damp 50, Trail true.

**Proposed changes:** Remove Bass OD and reduce Plate Mix 18→6. Capture Bass 62→56 and EQ 50Hz +3→+1. Keep the warm FullB15 pulse; the dual-guitar outro does not itself require distorted or wetter bass.

<a id="patch-55"></a>

#### 55. Hysteria — Muse — High

[Source write-up](../../Patches/Bass/Song/Hysteria-Muse.md) · [JSON](../../Patches/Bass/Song/Hysteria-Muse.json)

**Current foundation:** patch VOL 56; BPM 129; SnapTone slot 58; Gain 58, VOL 55, Bass 58, Middle 58, Treble 55.

**NR Gate** (fixed): THRE 30 · **PRE Micro Boost** (CTL off → on): Gain 55 · **DST Bass OD** (fixed): Gain 70, Blend 75, VOL 62, Bass 62, Treble 55 · **EQ Bass EQ 1** (fixed): 33Hz 4, 150Hz -1, 600Hz 4, 2kHz 4, 8kHz 1, VOL 55 · **RVB Room** (CTL off → on): Mix 20, Decay 32, Trail true.

**Proposed changes:** Rebuild around one fuzz source rather than every drive available: keep Stylish Fuzz, turn Tidal Wave drive off and remove GP-5 Bass OD; start capture Gain 58→50. Remove CTL Room and reduce Micro Boost Gain 55→25. Compare Flamma off/on and retain only a quiet octave blend if the riff remains intelligible. HairySVT already adds dirt; if it obscures the riff, trial CleanSVT slot 53 at audited VOL 65 behind the fuzz.

<a id="patch-56"></a>

#### 56. I Want to Know What Love Is — Foreigner — High

[Source write-up](../../Patches/Bass/Song/IWantToKnow-Foreigner.md) · [JSON](../../Patches/Bass/Song/IWantToKnow-Foreigner.json)

**Current foundation:** patch VOL 52; BPM 67; SnapTone slot 52; Gain 49, VOL 75, Bass 58, Middle 55, Treble 55.

**NR Gate** (fixed): THRE 18 · **PRE Micro Boost** (CTL off → on): Gain 48 · **EQ Bass EQ 1** (fixed): 33Hz 4, 150Hz 1, 600Hz -2, 2kHz 3, 8kHz 1, VOL 52 · **MOD B-Chorus** (fixed): Depth 15, Rate 0.4, VOL 50 · **RVB Hall** (CTL off → on): Mix 33, Decay 58, Trail true.

**Proposed changes:** Hall Mix 33→8 and Decay 58→35; Micro Boost Gain 48→25; EQ 33Hz +4→0. Keep Avalon and optional subtle chorus. A large choir can carry the spaciousness while the bass remains centered and defined.

<a id="patch-57"></a>

#### 57. I Will Always Love You — Dolly Parton — Low

[Source write-up](../../Patches/Bass/Song/IWillAlwaysLoveYou-Dolly.md) · [JSON](../../Patches/Bass/Song/IWillAlwaysLoveYou-Dolly.json)

**Current foundation:** patch VOL 52; BPM 66; SnapTone slot 51; Gain 48, VOL 80, Bass 60, Middle 48, Treble 38.

**NR Gate** (fixed): THRE 10 · **PRE COMP** (fixed): Sustain 35, VOL 58 · **EQ Bass EQ 2** (fixed): 50Hz 1, 120Hz 2, 400Hz 0, 800Hz 0, 4.5kHz -4, VOL 52 · **RVB Room** (CTL off → on): Mix 16, Decay 30, Trail true.

**Proposed changes:** Keep the dark CleanB15/COMP voice. Room Mix 16→6; capture Bass 60→56 only if the low strings boom. No drive or forced extra state.

<a id="patch-58"></a>

#### 58. If You See Her — Brooks & Dunn — Low

[Source write-up](../../Patches/Bass/Song/IfYouSeeHer-BrooksDunn.md) · [JSON](../../Patches/Bass/Song/IfYouSeeHer-BrooksDunn.json)

**Current foundation:** patch VOL 52; BPM 70; SnapTone slot 51; Gain 48, VOL 80, Bass 58, Middle 50, Treble 44.

**NR Gate** (fixed): THRE 10 · **PRE COMP** (fixed): Sustain 38, VOL 58 · **EQ Bass EQ 2** (fixed): 50Hz 1, 120Hz 2, 400Hz -1, 800Hz 1, 4.5kHz -3, VOL 52 · **RVB Plate** (CTL off → on): Mix 18, Decay 42, Damp 55, Trail true.

**Proposed changes:** Keep the clean ballad core. Plate Mix 18→7 and Decay 42→30. Preserve the current EQ; its small upper-mid lift helps long notes speak without adding dirt.

<a id="patch-59"></a>

#### 59. I'll Be There for You — Bon Jovi — Medium

[Source write-up](../../Patches/Bass/Song/IllBeThereForYou-BonJovi.md) · [JSON](../../Patches/Bass/Song/IllBeThereForYou-BonJovi.json)

**Current foundation:** patch VOL 50; BPM 68; SnapTone slot 52; Gain 50, VOL 75, Bass 52, Middle 48, Treble 55.

**NR Gate** (fixed): THRE 12 · **PRE COMP4** (fixed): Sustain 50, Attack 45, Clip 35, VOL 56 · **DST Bass OD** (CTL off → on): Gain 20, Blend 25, VOL 55, Bass 52, Treble 52 · **EQ Bass EQ 2** (fixed): 50Hz 1, 120Hz 1, 400Hz -2, 800Hz 1, 4.5kHz 2, VOL 52 · **RVB Room** (CTL off → on): Mix 12, Decay 32, Trail true.

**Proposed changes:** Remove CTL Bass OD and use Room Mix 12→6 as an optional space change, or choose an EQ/output lift. COMP4 Sustain 50→40. Preserve the clean Avalon voice for the polished ballad.

<a id="patch-60"></a>

#### 60. I'm So Sick — Flyleaf — High

[Source write-up](../../Patches/Bass/Song/ImSoSick-Flyleaf.md) · [JSON](../../Patches/Bass/Song/ImSoSick-Flyleaf.json)

**Current foundation:** patch VOL 56; BPM 102; SnapTone slot 58; Gain 51, VOL 55, Bass 42, Middle 68, Treble 62.

**NR Gate** (fixed): THRE 40 · **PRE Micro Boost** (CTL off → on): Gain 60 · **DST Bass OD** (fixed): Gain 72, Blend 78, VOL 65, Bass 45, Treble 60 · **EQ Bass EQ 1** (fixed): 33Hz -4, 150Hz -3, 600Hz 6, 2kHz 8, 8kHz 3, VOL 55 · **RVB Room** (CTL off → on): Mix 20, Decay 35, Trail true.

**Proposed changes:** Remove fixed Bass OD Gain 72/Blend 78 and keep HairySVT plus a restrained Tidal Wave drive if needed. Micro Boost Gain 60→25; Room Mix 20→0/bypassed; Gate THRE 40→20. Capture Middle 68→58 and EQ 2kHz +8→+3. Keep aggression without the severe gate and repeated mid/drive stacking.

<a id="patch-61"></a>

#### 61. In Two Minds — Riverside — Medium

[Source write-up](../../Patches/Bass/Song/InTwoMinds-Riverside.md) · [JSON](../../Patches/Bass/Song/InTwoMinds-Riverside.json)

**Current foundation:** patch VOL 50; BPM 100; SnapTone slot 56; Gain 50, VOL 60, Bass 55, Middle 62, Treble 52.

**NR Gate** (fixed): THRE 22 · **PRE COMP** (fixed): Sustain 50, VOL 58 · **DST Bass OD** (CTL off → on): Gain 40, Blend 50, VOL 60, Bass 50, Treble 55 · **EQ Bass EQ 2** (fixed): 50Hz 2, 120Hz 2, 400Hz -2, 800Hz 3, 4.5kHz 2, VOL 50.

**Proposed changes:** Bass OD Gain 40→25, Blend 50→30; COMP Sustain 50→40; Gate THRE 22→12. Keep ProgSVT and the dry routing. Confirm the actual section contrast rather than relying on a general Riverside-metal description.

<a id="patch-62"></a>

#### 62. Independence Day - Martina McBride — High

[Source write-up](../../Patches/Bass/Song/IndependenceDay-MM.md) · [JSON](../../Patches/Bass/Song/IndependenceDay-MM.json)

**Current foundation:** patch VOL 50; BPM 120; SnapTone slot 51; Gain 60, VOL 80, Bass 62, Middle 55, Treble 58.

**NR Gate** (fixed): THRE 35 · **PRE Micro Boost** (CTL off → on): Gain 55 · **RVB Room** (CTL off → on): Mix 22, Decay 40, Trail false.

**Proposed changes:** Gate THRE 35→12; capture Gain 60→50 and Bass 62→56; Micro Boost Gain 55→25. Room Mix 22→6, Decay 40→25. This is a clean country bass role with unnecessarily firm gating and a heavily boosted input.

<a id="patch-63"></a>

#### 63. Ironic — Alanis Morissette — Low

[Source write-up](../../Patches/Bass/Song/Ironic-Alanis.md) · [JSON](../../Patches/Bass/Song/Ironic-Alanis.json)

**Current foundation:** patch VOL 52; BPM 116; SnapTone slot 53; Gain 48, VOL 65, Bass 56, Middle 55, Treble 48.

**NR Gate** (fixed): THRE 14 · **PRE COMP** (fixed): Sustain 40, VOL 58 · **DST Bass OD** (CTL off → on): Gain 40, Blend 38, VOL 55, Bass 52, Treble 52 · **EQ Bass EQ 2** (fixed): 50Hz 1, 120Hz 2, 400Hz -1, 800Hz 2, 4.5kHz -2, VOL 52.

**Proposed changes:** Keep CleanSVT and the dry clean/dirty split. Bass OD Gain 40→25, Blend 38→30 as a first comparison. Retain the stronger setting only if the bass itself needs that edge in the arrangement.

<a id="patch-64"></a>

#### 64. Islands in the Stream — Kenny Rogers — Medium

[Source write-up](../../Patches/Bass/Song/IslandsInStream-KR.md) · [JSON](../../Patches/Bass/Song/IslandsInStream-KR.json)

**Current foundation:** patch VOL 50; BPM 104; SnapTone slot 52; Gain 52, VOL 75, Bass 55, Middle 60, Treble 55.

**NR Gate** (fixed): THRE 22 · **PRE Micro Boost** (CTL off → on): Gain 35 · **EQ Bass EQ 2** (fixed): 50Hz 2, 120Hz 1, 400Hz -2, 800Hz 1, 4.5kHz 3, VOL 55 · **MOD B-Chorus** (fixed): Depth 15, Rate 0.6, VOL 55 · **RVB Room** (CTL off → on): Mix 28, Decay 40, Trail true.

**Proposed changes:** Gate THRE 22→10; Room Mix 28→8 and Decay 40→25. Keep Avalon and the light B-Chorus, but compare MOD bypassed for the main groove. Avoid treating glossy production as proof of chorused bass.

<a id="patch-65"></a>

#### 65. It's Not My Time — 3 Doors Down — High

[Source write-up](../../Patches/Bass/Song/ItsNotMyTime-3DoorsDown.md) · [JSON](../../Patches/Bass/Song/ItsNotMyTime-3DoorsDown.json)

**Current foundation:** patch VOL 50; BPM 100; SnapTone slot 57; Gain 50, VOL 55, Bass 55, Middle 58, Treble 58.

**NR Gate** (fixed): THRE 22 · **PRE Micro Boost** (CTL off → on): Gain 55 · **DST Bass OD** (fixed): Gain 45, Blend 60, VOL 58, Bass 55, Treble 56 · **EQ Bass EQ 1** (fixed): 33Hz 2, 150Hz 0, 600Hz -2, 2kHz 4, 8kHz 2, VOL 54 · **RVB Room** (CTL off → on): Mix 14, Decay 30, Trail true.

**Proposed changes:** Remove permanent Bass OD and keep GrittySVT as the rhythm voice. Use CTL Bass OD Gain 25/Blend 30 instead of Micro Boost Gain 55 if extra chorus grit is needed; remove Room or lower Mix 14→5. This makes the gain change explicit and reduces serial saturation.

<a id="patch-66"></a>

#### 66. Knee Deep — Zac Brown Band — High

[Source write-up](../../Patches/Bass/Song/KneeDeep-ZBB.md) · [JSON](../../Patches/Bass/Song/KneeDeep-ZBB.json)

**Current foundation:** patch VOL 50; BPM 82; SnapTone slot 51; Gain 50, VOL 80, Bass 60, Middle 50, Treble 40.

**NR Gate** (fixed): THRE 25 · **PRE Micro Boost** (CTL off → on): Gain 35 · **MOD B-Chorus** (fixed): Depth 20, Rate 0.8, VOL 100 · **RVB Room** (CTL off → on): Mix 30, Decay 45, Trail true.

**Proposed changes:** B-Chorus VOL 100→50 as a level-match starting point; Gate THRE 25→10; Room Mix 30→8 and Decay 45→25. Compare chorus bypassed before committing to it. Keep passive Sire/CleanB15 and a relaxed, present note attack.

<a id="patch-67"></a>

#### 67. Knights of Cydonia — Muse — High

[Source write-up](../../Patches/Bass/Song/KnightsOfCydonia-Muse.md) · [JSON](../../Patches/Bass/Song/KnightsOfCydonia-Muse.json)

**Current foundation:** patch VOL 56; BPM 137; SnapTone slot 55; Gain 52, VOL 60, Bass 58, Middle 60, Treble 60.

**NR Gate** (fixed): THRE 28 · **PRE Micro Boost** (CTL off → on): Gain 55 · **DST Bass OD** (fixed): Gain 65, Blend 75, VOL 65, Bass 55, Treble 58 · **EQ Bass EQ 1** (fixed): 33Hz 3, 150Hz -1, 600Hz 3, 2kHz 4, 8kHz 2, VOL 55 · **RVB Hall** (CTL off → on): Mix 28, Decay 45, Trail true.

**Proposed changes:** Remove fixed Bass OD Gain 65/Blend 75, retain BrightSVT, and reduce Micro Boost Gain 55→25. Hall Mix 28→6. The fast gallop needs articulation; more distortion and large reverb are poor substitutes for a bigger arrangement.

**Additional finding:** Specify Tidal Wave preamp controls even with drive off; footswitch-off is not whole-pedal bypass.

<a id="patch-68"></a>

#### 68. Kokomo — The Beach Boys — Medium

[Source write-up](../../Patches/Bass/Song/Kokomo-BeachBoys.md) · [JSON](../../Patches/Bass/Song/Kokomo-BeachBoys.json)

**Current foundation:** patch VOL 53; BPM 104; SnapTone slot 52; Gain 50, VOL 75, Bass 55, Middle 50, Treble 52.

**NR Gate** (fixed): THRE 12 · **PRE Micro Boost** (CTL off → on): Gain 42 · **EQ Bass EQ 2** (fixed): 50Hz 3, 120Hz 1, 400Hz -1, 800Hz 1, 4.5kHz 2, VOL 54 · **MOD B-Chorus** (fixed): Depth 25, Rate 0.4, VOL 55 · **RVB Room** (CTL off → on): Mix 20, Decay 30, Trail true.

**Proposed changes:** Keep Avalon and single compression. B-Chorus Depth 25→15; Room Mix 20→6; Micro Boost Gain 42→25. Remove the stale J-120 reference in the compressor explanation, since the patch now uses Avalon.

<a id="patch-69"></a>

#### 69. La Grange — ZZ Top — High

[Source write-up](../../Patches/Bass/Song/LaGrange-ZZTop.md) · [JSON](../../Patches/Bass/Song/LaGrange-ZZTop.json)

**Current foundation:** patch VOL 55; BPM 144; SnapTone slot 57; Gain 55, VOL 55, Bass 60, Middle 58, Treble 50.

**NR Gate** (fixed): THRE 20 · **DST Bass OD** (CTL off → on): Gain 55, Blend 65, VOL 62, Bass 60, Treble 50 · **EQ Bass EQ 1** (fixed): 33Hz 4, 150Hz -2, 600Hz 3, 2kHz 4, 8kHz 2, VOL 55.

**Proposed changes:** Remove CTL Bass OD Gain 55/Blend 65. Keep GrittySVT with a lighter Tidal Wave Drive 40→25/Blend 60→35, or use that board drive only for the solo/outro. Capture Bass 60→55 and EQ 33Hz +4→0. Let the shuffle retain note edges.

<a id="patch-70"></a>

#### 70. Lady — Kenny Rogers — Medium

[Source write-up](../../Patches/Bass/Song/Lady-KR.md) · [JSON](../../Patches/Bass/Song/Lady-KR.json)

**Current foundation:** patch VOL 50; BPM 68; SnapTone slot 52; Gain 48, VOL 75, Bass 58, Middle 50, Treble 48.

**NR Gate** (fixed): THRE 20 · **EQ Bass EQ 2** (fixed): 50Hz 2, 120Hz 0, 400Hz -3, 800Hz 0, 4.5kHz 2, VOL 55 · **MOD B-Chorus** (fixed): Depth 12, Rate 0.5, VOL 55 · **RVB Hall** (CTL off → on): Mix 25, Decay 45, Trail true.

**Proposed changes:** Gate THRE 20→8, Hall Mix 25→7 and Decay 45→30. Keep Avalon; compare continuous chorus off. Bring EQ 400Hz -3→0 if the flatwound line loses body beneath strings.

<a id="patch-71"></a>

#### 71. Like the Way I Do — Melissa Etheridge — High

[Source write-up](../../Patches/Bass/Song/LikeTheWayIDo-Etheridge.md) · [JSON](../../Patches/Bass/Song/LikeTheWayIDo-Etheridge.json)

**Current foundation:** patch VOL 55; BPM 80; SnapTone slot 53; Gain 50, VOL 65, Bass 58, Middle 55, Treble 52.

**NR Gate** (fixed): THRE 22 · **PRE Micro Boost** (CTL off → on): Gain 55 · **DST Darktale** (CTL off → on): Gain 65, Filter 45, VOL 62 · **EQ Bass EQ 1** (fixed): 33Hz 3, 150Hz 0, 600Hz 3, 2kHz 3, 8kHz 1, VOL 55 · **RVB Room** (CTL on → off): Mix 20, Decay 30, Trail true.

**Proposed changes:** Remove CTL Darktale Gain 65 and Micro Boost. Use the Tidal Wave drive stomp for the climax at trial Drive 25/Blend 35; Room Mix 20→6 in the restrained state. A non-blended guitar distortion ahead of the bass capture risks stripping note body. Keep CleanSVT.

<a id="patch-72"></a>

#### 72. LoveShack-B52 — Love Shack (The B-52's, 1989, ~134 BPM) — High

[Source write-up](../../Patches/Bass/Song/LoveShack-B52.md) · [JSON](../../Patches/Bass/Song/LoveShack-B52.json)

**Current foundation:** patch VOL 55; BPM 134; SnapTone slot 52; Gain 58, VOL 75, Bass 62, Middle 60, Treble 60.

**NR Gate** (fixed): THRE 15 · **PRE Boost** (CTL off → on): Gain 60, +3dB true, Bright true · **DST Bass OD** (CTL off → on): Gain 45, Blend 40, VOL 70, Bass 55, Treble 65 · **EQ Bass EQ 2** (fixed): 50Hz 4, 120Hz 2, 400Hz -5, 800Hz 6, 4.5kHz 6, VOL 55.

**Proposed changes:** Remove CTL Bass OD: the write-up explicitly specifies clean throughout. Boost Gain 60→20 with +3dB off, or remove it. Capture Gain 58→50 and Bass 62→55; EQ 50Hz +4→+1, 400Hz -5→-2, 800Hz +6→+2, 4.5kHz +6→+2. Keep the dance pocket rather than a scooped, overdriven chorus.

<a id="patch-73"></a>

#### 73. LoveWillTurn-KR — Love Will Turn You Around by Kenny Rogers — Medium

[Source write-up](../../Patches/Bass/Song/LoveWillTurn-KR.md) · [JSON](../../Patches/Bass/Song/LoveWillTurn-KR.json)

**Current foundation:** patch VOL 50; BPM 126; SnapTone slot 52; Gain 50, VOL 75, Bass 55, Middle 50, Treble 58.

**NR Gate** (fixed): THRE 25 · **PRE Micro Boost** (CTL off → on): Gain 35 · **EQ Bass EQ 2** (fixed): 50Hz 3, 120Hz 2, 400Hz -2, 800Hz 0, 4.5kHz 4, VOL 52 · **RVB Room** (CTL off → on): Mix 22, Decay 30, Trail true.

**Proposed changes:** Gate THRE 25→12; Room Mix 22→6. Keep Avalon and the mild Micro Boost, but compare Gain 35→20 if CTL adds grit rather than clean presence. The clean uptempo role does not need an ambient second state.

<a id="patch-74"></a>

#### 74. Low Rider — War — High

[Source write-up](../../Patches/Bass/Song/LowRider-War.md) · [JSON](../../Patches/Bass/Song/LowRider-War.json)

**Current foundation:** patch VOL 50; BPM 106; SnapTone slot 54; Gain 48, VOL 80, Bass 65, Middle 45, Treble 35.

**NR Gate** (fixed): THRE 15 · **PRE COMP** (fixed): Sustain 45, VOL 60 · **DST Bass OD** (CTL off → on): Gain 22, Blend 45, VOL 62, Bass 50, Treble 45 · **EQ Bass EQ 2** (fixed): 50Hz 4, 120Hz 3, 400Hz 2, 800Hz -3, 4.5kHz -4, VOL 50 · **RVB Room** (CTL off → on): Mix 15, Decay 22, Trail false.

**Proposed changes:** Remove CTL Bass OD and Room; one dry tone suits the riff. Capture Bass 65→55, Middle 45→50; EQ 50Hz +4→0, 120Hz +3→+1, 800Hz -3→0. The existing dark high end is sufficient; repeated bass boosts and mid cuts risk hiding the defining line.

<a id="patch-75"></a>

#### 75. Lucille-KR — Lucille by Kenny Rogers — High

[Source write-up](../../Patches/Bass/Song/Lucille-KR.md) · [JSON](../../Patches/Bass/Song/Lucille-KR.json)

**Current foundation:** patch VOL 50; BPM 100; SnapTone slot 51; Gain 56, VOL 80, Bass 60, Middle 55, Treble 45.

**NR Gate** (fixed): THRE 30 · **PRE Micro Boost** (CTL off → on): Gain 30 · **RVB Room** (CTL off → on): Mix 25, Decay 30, Trail false.

**Proposed changes:** Gate THRE 30→8 for passive fretless. Room Mix 25→6; capture Gain 56→50. Keep the warm CleanB15 and mild CTL lift. Let note muting create the short country envelope rather than gating the decay.

<a id="patch-76"></a>

#### 76. Machinehead — Bush — Medium

[Source write-up](../../Patches/Bass/Song/Machinehead-Bush.md) · [JSON](../../Patches/Bass/Song/Machinehead-Bush.json)

**Current foundation:** patch VOL 52; BPM 147; SnapTone slot 57; Gain 52, VOL 55, Bass 60, Middle 58, Treble 42.

**NR Gate** (fixed): THRE 28 · **PRE Micro Boost** (CTL off → on): Gain 38 · **EQ Bass EQ 2** (fixed): 50Hz 4, 120Hz 2, 400Hz -4, 800Hz -2, 4.5kHz 5, VOL 55 · **RVB Room** (CTL off → on): Mix 24, Decay 38, Trail true.

**Proposed changes:** Room Mix 24→6; EQ 400Hz -4→-1, 800Hz -2→+1 and 4.5kHz +5→+2. Gate THRE 28→15. Keep GrittySVT and the modest boost, restoring low-mid definition instead of scooping it while boosting edge.

<a id="patch-77"></a>

#### 77. Man in the Box — Alice In Chains — Medium

[Source write-up](../../Patches/Bass/Song/ManInTheBox-AIC.md) · [JSON](../../Patches/Bass/Song/ManInTheBox-AIC.json)

**Current foundation:** patch VOL 52; BPM 108; SnapTone slot 58; Gain 48, VOL 55, Bass 58, Middle 58, Treble 48.

**NR Gate** (fixed): THRE 25 · **PRE COMP** (fixed): Sustain 40, VOL 58 · **DST Bass OD** (fixed): Gain 50, Blend 45, VOL 55, Bass 55, Treble 50 · **EQ Bass EQ 2** (CTL off → on): 50Hz 1, 120Hz 1, 400Hz 2, 800Hz 3, 4.5kHz 0, VOL 56.

**Proposed changes:** Keep HairySVT, but trial Bass OD bypassed; if the riff loses needed edge, restore at Gain 25/Blend 30. CTL EQ VOL 56→52 and 800Hz +3 unchanged initially. Avoid making the chorus simply much louder and more compressed.

<a id="patch-78"></a>

#### 78. Mary Jane's Last Dance — Tom Petty — Low

[Source write-up](../../Patches/Bass/Song/MaryJanesLastDance-TomPetty.md) · [JSON](../../Patches/Bass/Song/MaryJanesLastDance-TomPetty.json)

**Current foundation:** patch VOL 52; BPM 84; SnapTone slot 54; Gain 52, VOL 80, Bass 55, Middle 55, Treble 48.

**NR Gate** (fixed): THRE 15 · **PRE COMP** (fixed): Sustain 40, VOL 58 · **DST Bass OD** (CTL off → on): Gain 25, Blend 30, VOL 55, Bass 50, Treble 50 · **EQ Bass EQ 2** (fixed): 50Hz 0, 120Hz 2, 400Hz -1, 800Hz 2, 4.5kHz -2, VOL 52.

**Proposed changes:** Keep FullB15, compression and the dry EQ. Remove optional CTL Bass OD unless the actual bass part needs grit; this is otherwise a well restrained roots-rock voice. No replacement effects needed.

<a id="patch-79"></a>

#### 79. Metropolis1-DT — Metropolis Pt. 1, The Miracle and the Sleeper by Dream Theater — Critical

[Source write-up](../../Patches/Bass/Song/Metropolis1-DT.md) · [JSON](../../Patches/Bass/Song/Metropolis1-DT.json)

**Current foundation:** patch VOL 55; BPM 130; SnapTone slot 56; Gain 54, VOL 60, Bass 60, Middle 55, Treble 60.

**NR Gate** (fixed): THRE 30 · **PRE Micro Boost** (CTL off → on): Gain 45 · **DST Bass OD** (fixed): Gain 68, Blend 75, VOL 65, Bass 58, Treble 55 · **EQ Bass EQ 2** (fixed): 50Hz 0, 120Hz -3, 400Hz -6, 800Hz 8, 4.5kHz 10 · **RVB Room** (CTL on → off): Mix 35, Decay 45, Trail true.

**Proposed changes:** Explicitly add EQ VOL 50. It is absent from the JSON and therefore encoded as 0 in an active EQ block; hardware attenuation must be checked, but the missing output value is a definite configuration defect. Then audition Mess Bass + User IR 7 for consistency with the other Myung patches: Gain 40/VOL 62/Bass 54/Middle 58/Treble 52, CAB VOL 58. Remove fixed Bass OD first; if needed use Gain 25/Blend 30. Room Mix 35→6; EQ 400Hz -6→-2, 800Hz +8→+3, 4.5kHz +10→+3. This deserves the first rebuild trial.

<a id="patch-80"></a>

#### 80. Money for Nothing — Dire Straits — Medium

[Source write-up](../../Patches/Bass/Song/MoneyForNothing-DireStraits.md) · [JSON](../../Patches/Bass/Song/MoneyForNothing-DireStraits.json)

**Current foundation:** patch VOL 55; BPM 120; SnapTone slot 52; Gain 50, VOL 75, Bass 58, Middle 50, Treble 58.

**NR Gate** (fixed): THRE 15 · **PRE Micro Boost** (CTL off → on): Gain 50 · **EQ Bass EQ 2** (fixed): 50Hz 2, 120Hz 1, 400Hz -2, 800Hz 3, 4.5kHz 3, VOL 55 · **MOD B-Chorus** (fixed): Depth 20, Rate 0.3, VOL 55 · **RVB Room** (CTL off → on): Mix 20, Decay 30, Trail true.

**Proposed changes:** Micro Boost Gain 50→25, Room Mix 20→6. Keep Avalon and compare B-Chorus Depth 20→12 or bypassed. The clean pulse should stay closer to the drummer than the guitar's processed space.

<a id="patch-81"></a>

#### 81. My Maria — Brooks & Dunn — Low

[Source write-up](../../Patches/Bass/Song/MyMaria-BrooksDunn.md) · [JSON](../../Patches/Bass/Song/MyMaria-BrooksDunn.json)

**Current foundation:** patch VOL 52; BPM 96; SnapTone slot 51; Gain 50, VOL 80, Bass 56, Middle 54, Treble 48.

**NR Gate** (fixed): THRE 12 · **PRE COMP** (fixed): Sustain 40, VOL 58 · **DST Bass OD** (CTL off → on): Gain 20, Blend 25, VOL 55, Bass 50, Treble 50 · **EQ Bass EQ 2** (fixed): 50Hz 0, 120Hz 2, 400Hz -1, 800Hz 2, 4.5kHz -2, VOL 52.

**Proposed changes:** Keep the warm CleanB15/COMP foundation. Remove Bass OD as a default chorus requirement; retain it only as an explicitly optional cover-arrangement color. Existing EQ is restrained.

<a id="patch-82"></a>

#### 82. Neon — John Mayer — Low

[Source write-up](../../Patches/Bass/Song/Neon-JohnMayer.md) · [JSON](../../Patches/Bass/Song/Neon-JohnMayer.json)

**Current foundation:** patch VOL 52; BPM 104; SnapTone slot 54; Gain 48, VOL 80, Bass 55, Middle 52, Treble 55.

**NR Gate** (fixed): THRE 12 · **PRE COMP4** (fixed): Sustain 45, Attack 50, Clip 40, VOL 58 · **EQ Bass EQ 2** (fixed): 50Hz 0, 120Hz 2, 400Hz -2, 800Hz 2, 4.5kHz 0, VOL 52 · **RVB Room** (CTL off → on): Mix 10, Decay 25, Trail true.

**Proposed changes:** Keep the current dry, articulate FullB15/COMP4 setup. Room Mix 10→5 or bypassed for the chorus. No amp or gain redesign needed.

<a id="patch-83"></a>

#### 83. Neon Moon — Brooks & Dunn — Low

[Source write-up](../../Patches/Bass/Song/NeonMoon-BrooksDunn.md) · [JSON](../../Patches/Bass/Song/NeonMoon-BrooksDunn.json)

**Current foundation:** patch VOL 52; BPM 100; SnapTone slot 51; Gain 48, VOL 80, Bass 60, Middle 48, Treble 38.

**NR Gate** (fixed): THRE 10 · **PRE COMP** (fixed): Sustain 35, VOL 58 · **EQ Bass EQ 2** (fixed): 50Hz 1, 120Hz 2, 400Hz 0, 800Hz 0, 4.5kHz -4, VOL 52 · **RVB Room** (CTL off → on): Mix 15, Decay 30, Trail true.

**Proposed changes:** Keep CleanB15 and the dark, simple pocket. Room Mix 15→6. If rolling the bass tone down plus capture Treble 38 plus EQ 4.5kHz -4 obscures pitch, lift capture Treble to 44 before adding output level.

<a id="patch-84"></a>

#### 84. When You Say Nothing At All — Alison Krauss — High

[Source write-up](../../Patches/Bass/Song/NothingAtAll-AK.md) · [JSON](../../Patches/Bass/Song/NothingAtAll-AK.json)

**Current foundation:** patch VOL 50; BPM 68; SnapTone slot 51; Gain 50, VOL 80, Bass 60, Middle 55, Treble 45.

**NR Gate** (fixed): THRE 25 · **EQ Bass EQ 2** (fixed): 50Hz 5, 120Hz 3, 400Hz -2, 800Hz 0, 4.5kHz 2, VOL 100 · **RVB Room** (CTL off → on): Mix 25, Decay 35, Trail true.

**Proposed changes:** EQ VOL 100→50 as the first level-match trial; Gate THRE 25→8. EQ 50Hz +5→+1 and 120Hz +3→+1; Room Mix 25→6. Keep passive Sire/CleanB15. The EQ level is an unexplained outlier, and the upright-like target needs body without excessive sub weight.

<a id="patch-85"></a>

#### 85. November Rain — Guns N' Roses — High

[Source write-up](../../Patches/Bass/Song/NovemberRain-GNR.md) · [JSON](../../Patches/Bass/Song/NovemberRain-GNR.json)

**Current foundation:** patch VOL 55; BPM 52; SnapTone slot 53; Gain 49, VOL 65, Bass 58, Middle 54, Treble 50.

**NR Gate** (fixed): THRE 20 · **PRE Micro Boost** (CTL off → on): Gain 52 · **DST La Charger** (CTL off → on): Gain 60, Tone 58, VOL 62 · **EQ Bass EQ 1** (fixed): 33Hz 3, 150Hz 0, 600Hz 2, 2kHz 3, 8kHz 1, VOL 55 · **RVB Hall** (CTL off → on): Mix 30, Decay 48, Trail true.

**Proposed changes:** Remove CTL La Charger Gain 60 and Micro Boost Gain 52. Use the Tidal Wave drive stomp as the added grit at Drive 25/Blend 35; Hall Mix 30→8. Keep CleanSVT. Add subtle B-Chorus only as an optional listening comparison if the Duff-style texture needs width; do not add it just from the artist's general reputation.

<a id="patch-86"></a>

#### 86. One — Metallica — High

[Source write-up](../../Patches/Bass/Song/One-Metallica.md) · [JSON](../../Patches/Bass/Song/One-Metallica.json)

**Current foundation:** patch VOL 55; BPM 85; SnapTone slot 57; Gain 42, VOL 55, Bass 55, Middle 55, Treble 50.

**NR Gate** (fixed): THRE 25 · **PRE Micro Boost** (CTL off → on): Gain 55 · **DST SM Dist** (CTL off → on): Gain 70, Tone 60, VOL 65 · **EQ Bass EQ 1** (fixed): 33Hz 3, 150Hz 0, 600Hz 2, 2kHz 3, 8kHz 1, VOL 55 · **RVB Room** (CTL on → off): Mix 20, Decay 35, Trail true.

**Proposed changes:** Remove SM Dist Gain 70 and the simultaneous Micro Boost. Use board Tidal Wave drive for the heavy sections at its existing Drive 30, reducing Blend 55→35 for the trial. Room Mix 20→5 in the intro. Keep GrittySVT provisionally, but compare CleanSVT if the intro never cleans up. No serial guitar-distortion wall on a fast bass line.

<a id="patch-87"></a>

#### 87. One Last Breath — Creed — Medium

[Source write-up](../../Patches/Bass/Song/OneLastBreath-Creed.md) · [JSON](../../Patches/Bass/Song/OneLastBreath-Creed.json)

**Current foundation:** patch VOL 50; BPM 62; SnapTone slot 53; Gain 50, VOL 65, Bass 56, Middle 54, Treble 52.

**NR Gate** (fixed): THRE 16 · **PRE COMP** (fixed): Sustain 45, VOL 58 · **DST Bass OD** (CTL off → on): Gain 50, Blend 55, VOL 58, Bass 55, Treble 56 · **EQ Bass EQ 1** (fixed): 33Hz 2, 150Hz 0, 600Hz -2, 2kHz 3, 8kHz 1, VOL 54 · **RVB Room** (CTL off → on): Mix 14, Decay 34, Trail true.

**Proposed changes:** Bass OD Gain 50→30, Blend 55→35; Room Mix 14→6. Keep CleanSVT and the clean verse. Correct the Weathered-era bassist attribution: verify the album credits rather than assigning the part to Brian Marshall.

<a id="patch-88"></a>

#### 88. Only in America — Brooks & Dunn — Low

[Source write-up](../../Patches/Bass/Song/OnlyInAmerica-BrooksDunn.md) · [JSON](../../Patches/Bass/Song/OnlyInAmerica-BrooksDunn.json)

**Current foundation:** patch VOL 52; BPM 120; SnapTone slot 53; Gain 50, VOL 65, Bass 55, Middle 56, Treble 50.

**NR Gate** (fixed): THRE 14 · **PRE COMP** (fixed): Sustain 42, VOL 58 · **DST Bass OD** (CTL off → on): Gain 28, Blend 30, VOL 55, Bass 50, Treble 50 · **EQ Bass EQ 2** (fixed): 50Hz 1, 120Hz 2, 400Hz -1, 800Hz 2, 4.5kHz -1, VOL 52 · **RVB Room** (CTL off → on): Mix 12, Decay 28, Trail true.

**Proposed changes:** Keep CleanSVT and the modest CTL Bass OD option. Trial Gain 28→18, Blend 30→25 and Room Mix 12→6. Keep the anthem weight through note length and attack.

<a id="patch-89"></a>

#### 89. Papa Was a Rollin' Stone — The Temptations (Bass) — Medium

[Source write-up](../../Patches/Bass/Song/PapaWasARollinStone-Temptations.md) · [JSON](../../Patches/Bass/Song/PapaWasARollinStone-Temptations.json)

**Current foundation:** patch VOL 55; BPM 120; SnapTone slot 51; Gain 53, VOL 80, Bass 62, Middle 46, Treble 34.

**NR Gate** (fixed): THRE 15 · **PRE Micro Boost** (CTL off → on): Gain 32 · **EQ Bass EQ 2** (fixed): 50Hz 1, 120Hz 3, 400Hz -2, 800Hz 2, 4.5kHz -7, VOL 52.

**Proposed changes:** Keep the dry CleanB15 thump and pickup instructions. Reduce capture Bass 62→56 and EQ 120Hz +3→+1 only if the repeated figure booms. Remove the automatic Micro Boost lift if it changes the pocket; one tone is legitimate here. Verify the credited bassist before retaining the Bob Babbitt assertion.

<a id="patch-90"></a>

#### 90. Parallels — Yes — High

[Source write-up](../../Patches/Bass/Song/Parallels-Yes.md) · [JSON](../../Patches/Bass/Song/Parallels-Yes.json)

**Current foundation:** patch VOL 58; BPM 132; SnapTone slot 55; Gain 60, VOL 60, Bass 55, Middle 70, Treble 60.

**NR Gate** (fixed): THRE 35 · **DST Bass OD** (fixed): Gain 75, Blend 70, VOL 60, Bass 45, Treble 65 · **EQ Bass EQ 1** (fixed): 33Hz 4, 150Hz 2, 600Hz -2, 2kHz 8, 8kHz 4, VOL 55 · **MOD V-Roto** (fixed): Depth 55, Rate 1 · **RVB Hall** (fixed): Mix 20, Decay 40, Trail true.

**Proposed changes:** Correct the premise before tonal revision: Parallels is on Going for the One (1977), and the official credits distinguish Wakeman's church organ from Squire's bass. Remove the unsupported church-organ-amplified-bass claim. Bypass V-Roto Depth 55, remove Bass OD Gain 75 and use BrightSVT with a restrained board drive. Capture Gain 60→50/Middle 70→58; Gate 35→18; Hall Mix 20→6; EQ 2kHz +8→+3. The present processing is built around a mistaken instrument attribution.

**Source check:** [Yes’s official Going for the One credits](https://www.yesworld.com/discography/going-for-the-one/) establish the album/year and separate bass guitar from church organ.

<a id="patch-91"></a>

#### 91. Praise — Elevation Worship — Medium

[Source write-up](../../Patches/Bass/Song/Praise-EW.md) · [JSON](../../Patches/Bass/Song/Praise-EW.json)

**Current foundation:** patch VOL 52; BPM 127; SnapTone slot 59; Gain 50, VOL 55, Bass 58, Middle 52, Treble 48.

**NR Gate** (fixed): THRE 10 · **PRE COMP4** (fixed): Sustain 50, Attack 35, Clip 40, VOL 58 · **DST Bass OD** (CTL off → on): Gain 32, Blend 35, VOL 55, Bass 55, Treble 50 · **EQ Bass EQ 1** (fixed): 33Hz 0, 150Hz 2, 600Hz -2, 2kHz 2, 8kHz -2, VOL 52.

**Proposed changes:** Keep WorshipSVT and COMP4. Bass OD Gain 32→20, Blend 35→25; COMP4 Sustain 50→40 if the groove feels flat. Keep the dry architecture. Confirm any specific section cues against the version being played.

<a id="patch-92"></a>

#### 92. Proud Mary — Ike & Tina Turner — Medium

[Source write-up](../../Patches/Bass/Song/ProudMary-IkeTina.md) · [JSON](../../Patches/Bass/Song/ProudMary-IkeTina.json)

**Current foundation:** patch VOL 55; BPM 117; SnapTone slot 54; Gain 50, VOL 80, Bass 58, Middle 58, Treble 54.

**NR Gate** (fixed): THRE 15 · **PRE Micro Boost** (CTL off → on): Gain 50 · **EQ Bass EQ 1** (fixed): 33Hz 3, 150Hz 0, 600Hz 2, 2kHz 4, 8kHz 2, VOL 55 · **RVB Room** (CTL on → off): Mix 20, Decay 30, Trail true.

**Proposed changes:** Room Mix 20→6 in the slow intro; Micro Boost Gain 50→25. Keep the inverted reverb transition into the fast section. The tempo/feel change itself supplies the energy, so avoid a large gain jump on top.

<a id="patch-93"></a>

#### 93. Puff the Magic Dragon — Peter, Paul and Mary — Low

[Source write-up](../../Patches/Bass/Song/PuffTheMagicDragon-PPM.md) · [JSON](../../Patches/Bass/Song/PuffTheMagicDragon-PPM.json)

**Current foundation:** patch VOL 52; BPM 110; SnapTone slot 51; Gain 47, VOL 80, Bass 58, Middle 55, Treble 22.

**NR Gate** (fixed): THRE 18 · **PRE COMP** (fixed): Sustain 28, VOL 58 · **EQ Bass EQ 2** (fixed): 50Hz -2, 120Hz 2, 400Hz 3, 800Hz -1, 4.5kHz -8, VOL 52 · **RVB Room** (fixed): Mix 12, Decay 22, Trail true.

**Proposed changes:** Keep the upright approximation, compression and mid body. Room Mix 12→5 and Gate THRE 18→8. Let palm muting shape short notes; avoid using the gate as an envelope control.

<a id="patch-94"></a>

#### 94. Pull Me Under — Dream Theater — Medium

[Source write-up](../../Patches/Bass/Song/PullMeUnder-DT.md) · [JSON](../../Patches/Bass/Song/PullMeUnder-DT.json)

**Current foundation:** patch VOL 55; BPM 116; IR: Mesa215; CAB User IR 7.

**NR Gate** (fixed): THRE 30 · **DST Bass OD** (CTL off → on): Gain 55, Blend 70, VOL 65, Bass 60, Treble 50 · **AMP Mess Bass** (fixed): Gain 42, VOL 68, Bass 62, Middle 55, Treble 50 · **CAB User IR 7** (fixed): VOL 62 · **EQ Bass EQ 2** (fixed): 50Hz 3, 120Hz 2, 400Hz -3, 800Hz -2, 4.5kHz 4, VOL 55 · **RVB Room** (CTL off → on): Mix 22, Decay 35, Trail true.

**Proposed changes:** Keep Mess Bass/User IR 7. Bass OD Gain 55→25, Blend 70→35; Room Mix 22→5; AMP Bass 62→55 and EQ 800Hz -2→+1. The current heavy state obscures the precise Myung role with drive and a scooped low-mid voice.

<a id="patch-95"></a>

#### 95. Purple Rain — Prince — High

[Source write-up](../../Patches/Bass/Song/PurpleRain-Prince.md) · [JSON](../../Patches/Bass/Song/PurpleRain-Prince.json)

**Current foundation:** patch VOL 53; BPM 112; SnapTone slot 53; Gain 49, VOL 65, Bass 58, Middle 52, Treble 52.

**NR Gate** (fixed): THRE 12 · **PRE Micro Boost** (CTL off → on): Gain 48 · **EQ Bass EQ 2** (fixed): 50Hz 3, 120Hz 1, 400Hz 0, 800Hz 1, 4.5kHz 1, VOL 54 · **MOD B-Chorus** (fixed): Depth 15, Rate 0.3, VOL 54 · **RVB Hall** (CTL off → on): Mix 35, Decay 55, Trail true.

**Proposed changes:** Keep the clean SVT core; Hall Mix 35→8, Decay 55→35, Micro Boost Gain 48→25. Remove the unsupported claim of little/no bass guitar on the title track and verify track-specific credits before describing this as a newly invented bass part. The official album credits list BrownMark on bass, which is enough to flag the write-up for correction but not establish every note of the title-track mix.

**Source check:** [Prince’s official Purple Rain album credits](https://discography.prince.com/albums/purple-rain) list BrownMark on bass. Album-level credits alone do not settle track-level mix details.

<a id="patch-96"></a>

#### 96. Rainbow Connection — Kenny Loggins — Low

[Source write-up](../../Patches/Bass/Song/RainbowConnection-KennyLoggins.md) · [JSON](../../Patches/Bass/Song/RainbowConnection-KennyLoggins.json)

**Current foundation:** patch VOL 52; BPM 72; SnapTone slot 51; Gain 47, VOL 80, Bass 58, Middle 50, Treble 30.

**NR Gate** (fixed): THRE 8 · **PRE COMP** (fixed): Sustain 32, VOL 58 · **EQ Bass EQ 2** (fixed): 50Hz 0, 120Hz 2, 400Hz 1, 800Hz -1, 4.5kHz -5, VOL 52 · **RVB Hall** (CTL off → on): Mix 14, Decay 40, Trail true.

**Proposed changes:** Keep the gentle upright-like CleanB15 voice. Hall Mix 14→5 and Decay 40→25. No dirt or additional CTL function needed.

<a id="patch-97"></a>

#### 97. Red Dirt Road — Brooks & Dunn — Low

[Source write-up](../../Patches/Bass/Song/RedDirtRoad-BrooksDunn.md) · [JSON](../../Patches/Bass/Song/RedDirtRoad-BrooksDunn.json)

**Current foundation:** patch VOL 52; BPM 96; SnapTone slot 51; Gain 50, VOL 80, Bass 58, Middle 50, Treble 45.

**NR Gate** (fixed): THRE 12 · **PRE COMP** (fixed): Sustain 40, VOL 58 · **DST Bass OD** (CTL off → on): Gain 24, Blend 28, VOL 55, Bass 52, Treble 48 · **EQ Bass EQ 2** (fixed): 50Hz 1, 120Hz 2, 400Hz -1, 800Hz 1, 4.5kHz -2, VOL 52 · **RVB Room** (CTL off → on): Mix 12, Decay 30, Trail true.

**Proposed changes:** Keep CleanB15 and compression. Bass OD Gain 24→15, Blend 28→20; Room Mix 12→6. Treat the grit as optional, since the current tonal description only calls for a warm chorus swell.

<a id="patch-98"></a>

#### 98. The River — Jordan Feliz — Low

[Source write-up](../../Patches/Bass/Song/River-JF.md) · [JSON](../../Patches/Bass/Song/River-JF.json)

**Current foundation:** patch VOL 55; BPM 124; SnapTone slot 52; Gain 52, VOL 75, Bass 55, Middle 52, Treble 56.

**NR Gate** (fixed): THRE 15 · **PRE COMP4** (fixed): Sustain 42, Attack 40, VOL 56, Clip 35 · **EQ Bass EQ 1** (fixed): 33Hz 0, 150Hz 3, 600Hz -3, 2kHz 3, 8kHz -1, VOL 50.

**Proposed changes:** Keep the shared board settings and Avalon. Compare COMP4 bypassed against Sustain 42→30; the Donner already compresses the source. Preserve whichever retains the handclap groove's attack. No forced CTL.

<a id="patch-99"></a>

#### 99. River Down Below — Riverside — Medium

[Source write-up](../../Patches/Bass/Song/RiverDownBelow-Riverside.md) · [JSON](../../Patches/Bass/Song/RiverDownBelow-Riverside.json)

**Current foundation:** patch VOL 50; BPM 100; SnapTone slot 56; Gain 47, VOL 60, Bass 60, Middle 55, Treble 45.

**NR Gate** (fixed): THRE 18 · **PRE COMP** (fixed): Sustain 48, VOL 58 · **DST Bass OD** (CTL off → on): Gain 35, Blend 45, VOL 60, Bass 52, Treble 48 · **EQ Bass EQ 1** (fixed): 33Hz 2, 150Hz 2, 600Hz -1, 2kHz 2, 8kHz 0, VOL 50 · **RVB Hall** (CTL off → on): Mix 18, Decay 40, Trail false.

**Proposed changes:** Capture Bass 60→55; Bass OD Gain 35→20, Blend 45→30; Hall Mix 18→8 and Trail off→on for smooth sustained transitions. Keep ProgSVT provisionally and verify the specific recording rather than the band's general rig.

<a id="patch-100"></a>

#### 100. Sally's Song — The Nightmare Before Christmas — Low

[Source write-up](../../Patches/Bass/Song/SallysSong-NBC.md) · [JSON](../../Patches/Bass/Song/SallysSong-NBC.json)

**Current foundation:** patch VOL 55; BPM 120 (encoder default; not a verified tempo); SnapTone slot 51; Gain 45, VOL 80, Bass 55, Middle 50, Treble 40.

**NR Gate** (fixed): THRE 10 · **EQ Bass EQ 2** (fixed): 50Hz 0, 120Hz 1, 400Hz 1, 800Hz 0, 4.5kHz -3, VOL 50 · **RVB Hall** (fixed): Mix 14, Decay 40, Trail true.

**Proposed changes:** Keep the upright-like CleanB15 and single board compressor. Hall Mix 14→6, Decay 40→25. Leave BPM explicitly unverified in the write-up; the encoder's 120 default is not a measured song tempo.

<a id="patch-101"></a>

#### 101. Somebody Like You — Keith Urban — Low

[Source write-up](../../Patches/Bass/Song/SomebodyLikeYou-KeithUrban.md) · [JSON](../../Patches/Bass/Song/SomebodyLikeYou-KeithUrban.json)

**Current foundation:** patch VOL 50; BPM 120; SnapTone slot 51; Gain 50, VOL 80, Bass 55, Middle 52, Treble 50.

**NR Gate** (fixed): THRE 12 · **PRE COMP** (fixed): Sustain 45, VOL 58 · **DST Bass OD** (CTL off → on): Gain 18, Blend 22, VOL 56, Bass 52, Treble 50 · **EQ Bass EQ 2** (fixed): 50Hz 0, 120Hz 2, 400Hz -1, 800Hz 2, 4.5kHz 0, VOL 52 · **RVB Room** (CTL off → on): Mix 10, Decay 28, Trail true.

**Proposed changes:** Keep the CleanB15 pulse. Remove CTL Bass OD as the default clean-country lift; Room Mix 10→5. If a second sound is useful, use a mild EQ level lift instead of adding dirt and ambience together.

<a id="patch-102"></a>

#### 102. Spider-Man Theme (1967 Cartoon) — Bob Harris & Paul Francis Webster — Low

[Source write-up](../../Patches/Bass/Song/SpiderManTheme1967.md) · [JSON](../../Patches/Bass/Song/SpiderManTheme1967.json)

**Current foundation:** patch VOL 52; BPM 150; SnapTone slot 51; Gain 48, VOL 80, Bass 60, Middle 50, Treble 30.

**NR Gate** (fixed): THRE 12 · **PRE COMP** (fixed): Sustain 30, VOL 58 · **DST Bass OD** (CTL off → on): Gain 35, Blend 35, VOL 55, Bass 50, Treble 55 · **EQ Bass EQ 2** (fixed): 50Hz 0, 120Hz 3, 400Hz 1, 800Hz -1, 4.5kHz -5, VOL 52 · **RVB Room** (fixed): Mix 10, Decay 25, Trail true.

**Proposed changes:** Keep the dry upright-style baseline and clearly labeled rock-cover option. Room Mix 10→5; CTL Bass OD Gain 35→25, Blend 35→25. The contrasting sound is valid because it is explicitly an adaptation rather than a claim about the original.

<a id="patch-103"></a>

#### 103. Spider-Man: The Animated Series Theme (1994) — Joe Perry — Low

[Source write-up](../../Patches/Bass/Song/SpiderManTheme1994.md) · [JSON](../../Patches/Bass/Song/SpiderManTheme1994.json)

**Current foundation:** patch VOL 52; BPM 140; SnapTone slot 55; Gain 48, VOL 60, Bass 55, Middle 58, Treble 55.

**NR Gate** (fixed): THRE 20 · **PRE COMP4** (fixed): Sustain 45, Attack 50, Clip 40, VOL 58 · **DST Bass OD** (CTL off → on): Gain 40, Blend 40, VOL 55, Bass 50, Treble 55 · **EQ Bass EQ 2** (fixed): 50Hz 0, 120Hz 2, 400Hz -2, 800Hz 2, 4.5kHz 1, VOL 52.

**Proposed changes:** Keep BrightSVT, COMP4 and the dry hard-rock structure. Trial Bass OD Gain 40→25, Blend 40→30. No broader redesign needed.

<a id="patch-104"></a>

#### 104. Spidey and His Amazing Friends Theme — Patrick Stump — Low

[Source write-up](../../Patches/Bass/Song/SpideyFriendsTheme.md) · [JSON](../../Patches/Bass/Song/SpideyFriendsTheme.json)

**Current foundation:** patch VOL 55; BPM 150; SnapTone slot 55; Gain 45, VOL 60, Bass 56, Middle 52, Treble 55.

**NR Gate** (fixed): THRE 18 · **EQ Bass EQ 2** (fixed): 50Hz 0, 120Hz 2, 400Hz -2, 800Hz 1, 4.5kHz 2, VOL 50 · **RVB Room** (fixed): Mix 5, Decay 18, Trail true.

**Proposed changes:** Keep the one-compressor, board-drive architecture. BrightSVT plus Tidal Wave may already supply enough hook grit; compare Drive 35→25/Blend 30 unchanged. Room Mix 5 is appropriate. No extra GP-5 CTL for its own sake.

<a id="patch-105"></a>

#### 105. SpiritCarriesOn-DT — The Spirit Carries On by Dream Theater — High

[Source write-up](../../Patches/Bass/Song/SpiritCarriesOn-DT.md) · [JSON](../../Patches/Bass/Song/SpiritCarriesOn-DT.json)

**Current foundation:** patch VOL 50; BPM 76; IR: EBS410; CAB User IR 4.

**NR Gate** (fixed): THRE 25 · **PRE Micro Boost** (CTL off → on): Gain 35 · **AMP Mess Bass** (fixed): Gain 30, VOL 62, Bass 55, Middle 50, Treble 48 · **CAB User IR 4** (fixed): VOL 58 · **EQ Bass EQ 2** (fixed): 50Hz 3, 120Hz 2, 400Hz -3, 800Hz -1, 4.5kHz 3, VOL 55 · **MOD B-Chorus** (fixed): Depth 18, Rate 0.4, VOL 52 · **RVB Hall** (CTL off → on): Mix 45, Decay 65, Trail true.

**Proposed changes:** Hall Mix 45→10 and Decay 65→35; Gate THRE 25→8 for fretless. Keep Mess Bass/User IR 4, but EQ 400Hz -3→0 and 800Hz -1→+1 to retain pitch through the climax. Keep B-Chorus subtle and audition it bypassed before committing.

<a id="patch-106"></a>

#### 106. Stairway to Heaven — Led Zeppelin — Medium

[Source write-up](../../Patches/Bass/Song/Stairway-LedZeppelin.md) · [JSON](../../Patches/Bass/Song/Stairway-LedZeppelin.json)

**Current foundation:** patch VOL 54; BPM 72; SnapTone slot 52; Gain 51, VOL 75, Bass 60, Middle 55, Treble 50.

**NR Gate** (fixed): THRE 15 · **PRE Micro Boost** (CTL off → on): Gain 45 · **DST Bass OD** (CTL off → on): Gain 35, Blend 40, VOL 60, Bass 52, Treble 52 · **EQ Bass EQ 1** (fixed): 33Hz 2, 150Hz 2, 600Hz 1, 2kHz 2, 8kHz -1, VOL 54 · **RVB Room** (fixed): Mix 12, Decay 25, Trail true.

**Proposed changes:** Choose one CTL push: keep Bass OD at Gain 20/Blend 25 and remove Micro Boost Gain 45. Room Mix 12→5; capture Bass 60→55. Keep Avalon provisionally and let the performance's accelerating build supply the scale.

<a id="patch-107"></a>

#### 107. Still...You Turn Me On — Emerson, Lake & Palmer — High

[Source write-up](../../Patches/Bass/Song/StillYTMO-ELP.md) · [JSON](../../Patches/Bass/Song/StillYTMO-ELP.json)

**Current foundation:** patch VOL 52; BPM 72; SnapTone slot 53; Gain 49, VOL 65, Bass 55, Middle 55, Treble 45.

**NR Gate** (fixed): THRE 15 · **PRE Micro Boost** (CTL off → on): Gain 55 · **DST Bass OD** (CTL off → on): Gain 60, Blend 65, VOL 60, Bass 45, Treble 55 · **EQ Bass EQ 1** (fixed): 33Hz 2, 150Hz 2, 600Hz 0, 2kHz 1, 8kHz -1, VOL 52 · **RVB Hall** (CTL off → on): Mix 25, Decay 45, Trail true.

**Proposed changes:** Remove the simultaneous Micro Boost + Bass OD chorus stack. Use board Tidal Wave drive for the heavy adaptation if needed, or Bass OD alone at Gain 25/Blend 30. Hall Mix 25→8. Keep CleanSVT and the write-up's distinction between a cover arrangement and the actual recorded part.

**Additional finding:** Specify Tidal Wave preamp controls even with drive off; footswitch-off is not whole-pedal bypass.

<a id="patch-108"></a>

#### 108. Storm Corrosion — Storm Corrosion — Medium

[Source write-up](../../Patches/Bass/Song/StormCorrosion-StormCorrosion.md) · [JSON](../../Patches/Bass/Song/StormCorrosion-StormCorrosion.json)

**Current foundation:** patch VOL 50; BPM 65; SnapTone slot 54; Gain 44, VOL 80, Bass 62, Middle 45, Treble 30.

**NR Gate** (fixed): THRE 8 · **PRE COMP** (fixed): Sustain 35, VOL 58 · **DST Bass OD** (CTL off → on): Gain 20, Blend 30, VOL 60, Bass 50, Treble 35 · **EQ Bass EQ 2** (fixed): 50Hz 3, 120Hz 3, 400Hz 1, 800Hz -3, 4.5kHz -5, VOL 50 · **RVB Deepsea** (CTL off → on): Mix 25, Decay 55, Trail false.

**Proposed changes:** Remove CTL Bass OD initially; Deepsea Mix 25→12, Trail off→on. Capture Bass 62→56 and EQ 800Hz -3→0. Keep the dark FullB15 atmosphere, but retain a discernible note center beneath the low ambient tail.

<a id="patch-109"></a>

#### 109. Stream of Consciousness — Dream Theater — High

[Source write-up](../../Patches/Bass/Song/StreamCons-DT.md) · [JSON](../../Patches/Bass/Song/StreamCons-DT.json)

**Current foundation:** patch VOL 50; BPM 160; SnapTone slot 56; Gain 52, VOL 60, Bass 55, Middle 62, Treble 55.

**NR Gate** (fixed): THRE 30 · **PRE Micro Boost** (CTL off → on): Gain 40 · **DST Bass OD** (CTL off → on): Gain 45, Blend 60, VOL 60, Bass 55, Treble 50 · **EQ Bass EQ 2** (fixed): 50Hz 3, 120Hz 2, 400Hz -3, 800Hz 0, 4.5kHz 5, VOL 55 · **RVB Room** (CTL off → on): Mix 22, Decay 35, Trail true.

**Proposed changes:** Trial Mess Bass + User IR 7 against ProgSVT using the same starting values proposed for Metropolis, with a separate level match. Remove simultaneous Micro Boost; Bass OD Gain 45→25/Blend 60→35 and Room Mix 22→5. Gate THRE 30→18 if soft fast notes drop out. Use the direct modeled amp as a candidate, without claiming it proves the exact Train of Thought rig.

<a id="patch-110"></a>

#### 110. Sultans of Swing — Dire Straits — Medium

[Source write-up](../../Patches/Bass/Song/SultansOfSwing-DireStraits.md) · [JSON](../../Patches/Bass/Song/SultansOfSwing-DireStraits.json)

**Current foundation:** patch VOL 52; BPM 148; SnapTone slot 54; Gain 50, VOL 80, Bass 55, Middle 50, Treble 55.

**NR Gate** (fixed): THRE 12 · **PRE Micro Boost** (CTL off → on): Gain 50 · **EQ Bass EQ 2** (fixed): 50Hz 1, 120Hz 2, 400Hz 0, 800Hz 2, 4.5kHz 1, VOL 55 · **RVB Room** (CTL off → on): Mix 15, Decay 25, Trail true.

**Proposed changes:** Keep FullB15 and the modest EQ. Micro Boost Gain 50→25; Room Mix 15→5. Consider a light COMP in PRE instead of a chorus boost if the moving line needs control; match output before deciding.

<a id="patch-111"></a>

#### 111. Surfin' U.S.A. — The Beach Boys (Bass) — Low

[Source write-up](../../Patches/Bass/Song/SurfinUSA-BeachBoys.md) · [JSON](../../Patches/Bass/Song/SurfinUSA-BeachBoys.json)

**Current foundation:** patch VOL 55; BPM 158; SnapTone slot 51; Gain 54, VOL 80, Bass 55, Middle 55, Treble 50.

**NR Gate** (fixed): THRE 15 · **PRE Micro Boost** (CTL off → on): Gain 30 · **EQ Bass EQ 2** (fixed): 50Hz -2, 120Hz 2, 400Hz -1, 800Hz 3, 4.5kHz -2, VOL 52.

**Proposed changes:** Keep CleanB15, the mid-forward curve and the single board compressor. Compare CTL Micro Boost Gain 30→20 for a restrained lift. The basic boogie voice does not need extra ambience.

<a id="patch-112"></a>

#### 112. Sweet Child O' Mine — Guns N' Roses — Low

[Source write-up](../../Patches/Bass/Song/SweetChild-GNR.md) · [JSON](../../Patches/Bass/Song/SweetChild-GNR.json)

**Current foundation:** patch VOL 55; BPM 125; SnapTone slot 57; Gain 48, VOL 55, Bass 55, Middle 60, Treble 58.

**NR Gate** (fixed): THRE 20 · **PRE COMP4** (fixed): Sustain 50, Attack 40, Clip 30, VOL 60 · **DST Bass OD** (CTL off → on): Gain 38, Blend 42, VOL 62, Bass 50, Treble 55 · **EQ Bass EQ 1** (fixed): 33Hz 0, 150Hz 1, 600Hz 2, 2kHz 3, 8kHz 1, VOL 54.

**Proposed changes:** Keep GrittySVT and dry Duff-style pick attack. Bass OD Gain 38→25, Blend 42→30; COMP4 Sustain 50→40 if the repeated line loses bounce. No mandatory chorus addition.

<a id="patch-113"></a>

#### 113. Sweet Leaf — Black Sabbath — Medium

[Source write-up](../../Patches/Bass/Song/SweetLeaf-BlackSabbath.md) · [JSON](../../Patches/Bass/Song/SweetLeaf-BlackSabbath.json)

**Current foundation:** patch VOL 52; BPM 94; SnapTone slot 58; Gain 50, VOL 55, Bass 60, Middle 58, Treble 45.

**NR Gate** (fixed): THRE 25 · **PRE Micro Boost** (CTL off → on): Gain 40 · **DST Bass OD** (fixed): Gain 55, Blend 50, VOL 55, Bass 58, Treble 48 · **EQ Bass EQ 2** (fixed): 50Hz 1, 120Hz 2, 400Hz 2, 800Hz 1, 4.5kHz -3, VOL 52.

**Proposed changes:** Keep HairySVT, but remove the fixed Bass OD first. If more saturation is needed, restore at Gain 25/Blend 30; reduce Micro Boost Gain 40→25. Capture Bass 60→55. Clarify that standard 5-string fingering must produce the recording's actual C# pitches; 'off the low B' is not a complete transposition instruction.

<a id="patch-114"></a>

#### 114. Tennessee Whiskey — Chris Stapleton — Medium

[Source write-up](../../Patches/Bass/Song/TennesseeWhiskey-Stapleton.md) · [JSON](../../Patches/Bass/Song/TennesseeWhiskey-Stapleton.json)

**Current foundation:** patch VOL 52; BPM 68; SnapTone slot 51; Gain 53, VOL 80, Bass 62, Middle 52, Treble 45.

**NR Gate** (fixed): THRE 15 · **PRE Micro Boost** (CTL off → on): Gain 45 · **EQ Bass EQ 1** (fixed): 33Hz 4, 150Hz 1, 600Hz -3, 2kHz 2, 8kHz 4, VOL 55 · **RVB Room** (CTL off → on): Mix 18, Decay 30, Trail true.

**Proposed changes:** Keep passive Sire/CleanB15. EQ 33Hz +4→0, 8kHz +4→0; Room Mix 18→6, Micro Boost Gain 45→25 and capture Bass 62→56. The current low-sub and high-air boosts work against the intended warm soul pocket.

<a id="patch-115"></a>

#### 115. TheGambler-KR — The Gambler by Kenny Rogers — Medium

[Source write-up](../../Patches/Bass/Song/TheGambler-KR.md) · [JSON](../../Patches/Bass/Song/TheGambler-KR.json)

**Current foundation:** patch VOL 50; BPM 104; SnapTone slot 51; Gain 50, VOL 80, Bass 60, Middle 50, Treble 45.

**NR Gate** (fixed): THRE 20 · **PRE Micro Boost** (CTL off → on): Gain 35 · **EQ Bass EQ 1** (fixed): 33Hz 3, 150Hz 4, 600Hz -2, 2kHz -3, 8kHz 2, VOL 50 · **RVB Room** (CTL off → on): Mix 20, Decay 35, Trail true.

**Proposed changes:** Gate THRE 20→8; Room Mix 20→6; EQ 33Hz +3→0, 150Hz +4→+2, 2kHz -3→0. Keep passive Sire/CleanB15 and a small CTL push only if it helps the arrangement.

<a id="patch-116"></a>

#### 116. This Is Halloween — The Nightmare Before Christmas — Low

[Source write-up](../../Patches/Bass/Song/ThisIsHalloween-NBC.md) · [JSON](../../Patches/Bass/Song/ThisIsHalloween-NBC.json)

**Current foundation:** patch VOL 55; BPM 120 (encoder default; not a verified tempo); SnapTone slot 54; Gain 52, VOL 80, Bass 58, Middle 55, Treble 42.

**NR Gate** (fixed): THRE 15 · **EQ Bass EQ 2** (fixed): 50Hz 1, 120Hz 2, 400Hz 1, 800Hz -1, 4.5kHz -2, VOL 50 · **RVB Hall** (fixed): Mix 10, Decay 30, Trail true.

**Proposed changes:** Keep the orchestral-bass adaptation and board drive for ensemble shouts. Hall Mix 10→5 and Tidal Wave Drive 40→25 as a first comparison; preserve the staccato articulation. Leave tempo unverified rather than promoting the encoder default to a song fact.

<a id="patch-117"></a>

#### 117. Thrive — Casting Crowns — High

[Source write-up](../../Patches/Bass/Song/Thrive-CC.md) · [JSON](../../Patches/Bass/Song/Thrive-CC.json)

**Current foundation:** patch VOL 55; BPM 115; SnapTone slot 59; Gain 60, VOL 55, Bass 55, Middle 58, Treble 58.

**NR Gate** (fixed): THRE 25 · **PRE COMP4** (fixed): Sustain 50, Attack 35, VOL 58, Clip 30 · **DST Bass OD** (CTL off → on): Gain 55, Blend 50, VOL 60, Bass 55, Treble 62 · **EQ Bass EQ 2** (fixed): 50Hz 4, 120Hz 0, 400Hz -3, 800Hz 5, 4.5kHz 5, VOL 52.

**Proposed changes:** Remove GP-5 COMP4 while retaining the shared Donner. Capture Gain 60→50; Bass OD Gain 55→25/Blend 50→30; EQ 50Hz +4→+1, 800Hz +5→+2 and 4.5kHz +5→+2. Keep the shared board unchanged while reducing serial compression and drive inside this patch.

<a id="patch-118"></a>

#### 118. (I've Had) The Time of My Life — Bill Medley & Jennifer Warnes — Low

[Source write-up](../../Patches/Bass/Song/TimeOfMyLife-DirtyDancing.md) · [JSON](../../Patches/Bass/Song/TimeOfMyLife-DirtyDancing.json)

**Current foundation:** patch VOL 52; BPM 108; SnapTone slot 52; Gain 46, VOL 75, Bass 55, Middle 50, Treble 58.

**NR Gate** (fixed): THRE 14 · **PRE COMP4** (fixed): Sustain 50, Attack 45, Clip 40, VOL 58 · **EQ Bass EQ 1** (fixed): 33Hz 1, 150Hz 1, 600Hz -2, 2kHz 2, 8kHz 1, VOL 52 · **MOD B-Chorus** (CTL off → on): Depth 20, Rate 0.8, VOL 55 · **RVB Plate** (CTL off → on): Mix 12, Decay 35, Damp 55, Trail true.

**Proposed changes:** Keep Avalon and the restrained CTL chorus/Plate concept. Plate Mix 12→6; COMP4 Sustain 50→40 if pops and sustained notes flatten excessively. Existing modulation depth is reasonable.

<a id="patch-119"></a>

#### 119. Touch, Peel, and Stand — Days of the New — High

[Source write-up](../../Patches/Bass/Song/TouchPeelStand-DaysOfTheNew.md) · [JSON](../../Patches/Bass/Song/TouchPeelStand-DaysOfTheNew.json)

**Current foundation:** patch VOL 55; BPM 83; SnapTone slot 58; Gain 46, VOL 55, Bass 60, Middle 55, Treble 45.

**NR Gate** (fixed): THRE 26 · **PRE Micro Boost** (CTL off → on): Gain 55 · **DST Bass OD** (fixed): Gain 62, Blend 75, VOL 60, Bass 58, Treble 42 · **EQ Bass EQ 1** (fixed): 33Hz 4, 150Hz 1, 600Hz -1, 2kHz 3, 8kHz 1, VOL 55 · **RVB Room** (fixed): Mix 18, Decay 32, Trail true.

**Proposed changes:** Remove permanent Bass OD Gain 62/Blend 75 and audition HairySVT alone. Micro Boost Gain 55→25, fixed Room Mix 18→5, EQ 33Hz +4→0 and capture Bass 60→55. Preserve the dark character without smearing the groove beneath the acoustic guitar.

**Additional finding:** Specify Tidal Wave preamp controls even with drive off; footswitch-off is not whole-pedal bypass.

<a id="patch-120"></a>

#### 120. Under the Bridge — Red Hot Chili Peppers — High

[Source write-up](../../Patches/Bass/Song/UnderTheBridge-RHCP.md) · [JSON](../../Patches/Bass/Song/UnderTheBridge-RHCP.json)

**Current foundation:** patch VOL 53; BPM 85; SnapTone slot 53; Gain 48, VOL 65, Bass 58, Middle 52, Treble 48.

**NR Gate** (fixed): THRE 12 · **PRE Micro Boost** (CTL off → on): Gain 50 · **EQ Bass EQ 2** (fixed): 50Hz 3, 120Hz 1, 400Hz 0, 800Hz 1, 4.5kHz 2, VOL 55 · **RVB Hall** (CTL off → on): Mix 32, Decay 50, Trail true.

**Proposed changes:** Hall Mix 32→8 and Decay 50→35; Micro Boost Gain 50→25; EQ 50Hz +3→+1. Keep CleanSVT and the single board compressor. The choir supplies the outro's space; the melodic bass should stay present.

<a id="patch-121"></a>

#### 121. Unstoppable God — Elevation Worship — High

[Source write-up](../../Patches/Bass/Song/UnstopGod-EW.md) · [JSON](../../Patches/Bass/Song/UnstopGod-EW.json)

**Current foundation:** patch VOL 55; BPM 132; SnapTone slot 59; Gain 60, VOL 55, Bass 58, Middle 55, Treble 60.

**NR Gate** (fixed): THRE 25 · **PRE Boost** (CTL off → on): Gain 55, +3dB true, Bright false · **DST Bass OD** (CTL off → on): Gain 50, Blend 45, VOL 58, Bass 55, Treble 60 · **EQ Bass EQ 2** (fixed): 50Hz 6, 120Hz 2, 400Hz -4, 800Hz 4, 4.5kHz 6, VOL 52.

**Proposed changes:** Remove GP-5 Bass OD first and reduce Boost Gain 55→25/+3dB off while keeping the shared Tidal Wave settings. Capture Gain 60→50; EQ 50Hz +6→+1 and 4.5kHz +6→+2. This trims the repeated low/treble boosts and drive layers without changing the set's board foundation.

<a id="patch-122"></a>

#### 122. Uprising — Muse — High

[Source write-up](../../Patches/Bass/Song/Uprising-Muse.md) · [JSON](../../Patches/Bass/Song/Uprising-Muse.json)

**Current foundation:** patch VOL 55; BPM 128; SnapTone slot 58; Gain 54, VOL 55, Bass 55, Middle 55, Treble 55.

**NR Gate** (fixed): THRE 25 · **PRE Toucher** (CTL on → off): Sense 60, Range 55, Q 50, Mix 70, Mode 1 · **DST Bass OD** (CTL off → on): Gain 55, Blend 65, VOL 60, Bass 58, Treble 52 · **EQ Bass EQ 2** (fixed): 50Hz 4, 120Hz 1, 400Hz -3, 800Hz 3, 4.5kHz 3, VOL 55 · **MOD O-Phase** (fixed): Rate 0.35 · **RVB Room** (CTL off → on): Mix 22, Decay 32, Trail true.

**Proposed changes:** Keep the synth-bass adaptation, but audition without the permanent O-Phase. Toucher Mix 70→45; remove added Bass OD first and use the board fuzz as the principal synth distortion. Room Mix 22→0/bypassed and EQ 50Hz +4→+1. Check filter tracking with the board compressor: a heavily flattened envelope can make Sense adjustments misleading.

<a id="patch-123"></a>

#### 123. Waiting on the World to Change — John Mayer — Low

[Source write-up](../../Patches/Bass/Song/WaitingOnTheWorld-JohnMayer.md) · [JSON](../../Patches/Bass/Song/WaitingOnTheWorld-JohnMayer.json)

**Current foundation:** patch VOL 52; BPM 88; SnapTone slot 54; Gain 47, VOL 80, Bass 58, Middle 52, Treble 35.

**NR Gate** (fixed): THRE 10 · **PRE COMP** (fixed): Sustain 38, VOL 58 · **EQ Bass EQ 2** (fixed): 50Hz 0, 120Hz 2, 400Hz 1, 800Hz 0, 4.5kHz -3, VOL 52 · **RVB Room** (CTL off → on): Mix 10, Decay 25, Trail true.

**Proposed changes:** Keep passive Sire, FullB15 and the dry muted pocket. Room Mix 10→5. Correct the blanket assertion that active mode inherently adds headroom or hi-fi tone; here passive is a musical choice, not an electrical guarantee.

<a id="patch-124"></a>

#### 124. We Got Used to Us — Riverside — Medium

[Source write-up](../../Patches/Bass/Song/WeGotUsedToUs-Riverside.md) · [JSON](../../Patches/Bass/Song/WeGotUsedToUs-Riverside.json)

**Current foundation:** patch VOL 50; BPM 90; SnapTone slot 54; Gain 49, VOL 80, Bass 60, Middle 48, Treble 38.

**NR Gate** (fixed): THRE 12 · **PRE COMP** (fixed): Sustain 42, VOL 58 · **DST Bass OD** (CTL off → on): Gain 25, Blend 32, VOL 60, Bass 50, Treble 42 · **EQ Bass EQ 2** (fixed): 50Hz 3, 120Hz 2, 400Hz 1, 800Hz -2, 4.5kHz -3, VOL 50 · **MOD B-Chorus** (fixed): Depth 12, Rate 0.5, VOL 50 · **RVB Plate** (CTL off → on): Mix 14, Decay 30, Damp 50, Trail false.

**Proposed changes:** Remove CTL Bass OD initially; Plate Mix 14→7 with Trail on for sustained transitions. Capture Bass 60→55 and EQ 800Hz -2→0. Keep the light chorus, provided it remains underneath the melody.

<a id="patch-125"></a>

#### 125. Werewolves of London — Warren Zevon — Low

[Source write-up](../../Patches/Bass/Song/WerewolvesOfLondon-Zevon.md) · [JSON](../../Patches/Bass/Song/WerewolvesOfLondon-Zevon.json)

**Current foundation:** patch VOL 52; BPM 104; SnapTone slot 52; Gain 48, VOL 75, Bass 58, Middle 52, Treble 42.

**NR Gate** (fixed): THRE 12 · **PRE COMP** (fixed): Sustain 35, VOL 58 · **DST Bass OD** (CTL off → on): Gain 20, Blend 22, VOL 55, Bass 52, Treble 48 · **EQ Bass EQ 2** (fixed): 50Hz 1, 120Hz 2, 400Hz 0, 800Hz 1, 4.5kHz -3, VOL 52.

**Proposed changes:** Keep Avalon and the clean 70s pocket. Remove optional Bass OD unless the cover arrangement specifically benefits from grit. The current modest EQ and single COMP already serve the described job.

<a id="patch-126"></a>

#### 126. What About Now — Daughtry — Low

[Source write-up](../../Patches/Bass/Song/WhatAboutNow-Daughtry.md) · [JSON](../../Patches/Bass/Song/WhatAboutNow-Daughtry.json)

**Current foundation:** patch VOL 50; BPM 74; SnapTone slot 53; Gain 50, VOL 65, Bass 55, Middle 50, Treble 48.

**NR Gate** (fixed): THRE 12 · **PRE COMP** (fixed): Sustain 45, VOL 58 · **DST Bass OD** (CTL off → on): Gain 30, Blend 35, VOL 56, Bass 52, Treble 52 · **EQ Bass EQ 2** (fixed): 50Hz 1, 120Hz 2, 400Hz -2, 800Hz 1, 4.5kHz 0, VOL 52 · **RVB Room** (CTL off → on): Mix 12, Decay 32, Trail true.

**Proposed changes:** Keep CleanSVT and the clean/heavy split. Bass OD Gain 30→20, Blend 35→25; Room Mix 12→6. Let the chorus gain weight without moving the bass behind the band.

<a id="patch-127"></a>

#### 127. When I Come Around — Green Day — High

[Source write-up](../../Patches/Bass/Song/WhenIComeAround-GreenDay.md) · [JSON](../../Patches/Bass/Song/WhenIComeAround-GreenDay.json)

**Current foundation:** patch VOL 55; BPM 119; SnapTone slot 55; Gain 48, VOL 60, Bass 55, Middle 56, Treble 58.

**NR Gate** (fixed): THRE 20 · **PRE Micro Boost** (CTL off → on): Gain 45 · **DST Bass OD** (fixed): Gain 48, Blend 68, VOL 58, Bass 55, Treble 56 · **EQ Bass EQ 1** (fixed): 33Hz 2, 150Hz -1, 600Hz 2, 2kHz 4, 8kHz 3, VOL 55 · **RVB Room** (CTL off → on): Mix 16, Decay 26, Trail true.

**Proposed changes:** Remove permanent GP-5 Bass OD and keep BrightSVT plus a lighter Tidal Wave Drive 25/Blend 35. Micro Boost Gain 45→25 and Room Mix 16→5. This retains pick punch while reducing the three serial dirt sources.

<a id="patch-128"></a>

#### 128. When Wind Meets Fire — Elevation Worship — Medium

[Source write-up](../../Patches/Bass/Song/WhenWindMeetsFire-EW.md) · [JSON](../../Patches/Bass/Song/WhenWindMeetsFire-EW.json)

**Current foundation:** patch VOL 52; BPM 72; SnapTone slot 59; Gain 48, VOL 55, Bass 62, Middle 45, Treble 40.

**NR Gate** (fixed): THRE 10 · **PRE COMP4** (fixed): Sustain 45, Attack 40, Clip 40, VOL 58 · **DST Bass OD** (CTL off → on): Gain 30, Blend 30, VOL 55, Bass 55, Treble 45 · **EQ Bass EQ 1** (fixed): 33Hz 2, 150Hz 1, 600Hz -2, 2kHz 1, 8kHz -3, VOL 52 · **RVB Hall** (CTL off → on): Mix 12, Decay 40, Trail true.

**Proposed changes:** Keep WorshipSVT. Capture Bass 62→56, Middle 45→50; Bass OD Gain 30→20/Blend 30→25; Hall Mix 12→6. Sustain the roots without a scooped, sub-heavy voice underneath keys.

<a id="patch-129"></a>

#### 129. I Won't Back Down — Tom Petty — Low

[Source write-up](../../Patches/Bass/Song/WontBackDown-TomPetty.md) · [JSON](../../Patches/Bass/Song/WontBackDown-TomPetty.json)

**Current foundation:** patch VOL 54; BPM 93; SnapTone slot 52; Gain 50, VOL 75, Bass 56, Middle 52, Treble 54.

**NR Gate** (fixed): THRE 12 · **PRE Micro Boost** (CTL off → on): Gain 42 · **EQ Bass EQ 2** (fixed): 50Hz 3, 120Hz 1, 400Hz 0, 800Hz 2, 4.5kHz 2, VOL 55 · **RVB Room** (CTL off → on): Mix 15, Decay 25, Trail true.

**Proposed changes:** Keep Avalon and the one-compressor roots-rock layout. Micro Boost Gain 42→25; Room Mix 15→5. No need to rebuild the basic voice.

<a id="patch-130"></a>

#### 130. You — Candlebox — Medium

[Source write-up](../../Patches/Bass/Song/You-Candlebox.md) · [JSON](../../Patches/Bass/Song/You-Candlebox.json)

**Current foundation:** patch VOL 54; BPM 78; SnapTone slot 53; Gain 54, VOL 65, Bass 55, Middle 58, Treble 55.

**NR Gate** (fixed): THRE 24 · **PRE Micro Boost** (CTL off → on): Gain 55 · **EQ Bass EQ 1** (fixed): 33Hz 2, 150Hz 1, 600Hz -3, 2kHz 6, 8kHz 2, VOL 54 · **MOD B-Chorus** (fixed): Depth 12, Rate 0.4, VOL 50 · **RVB Hall** (CTL off → on): Mix 28, Decay 45, Trail true.

**Proposed changes:** Hall Mix 28→8 and Micro Boost Gain 55→25; EQ 2kHz +6→+3 and Gate THRE 24→12. Keep CleanSVT; compare the continuous chorus bypassed so the default verse can remain intimate and centered.

<a id="patch-131"></a>

#### 131. You Don't Know How It Feels — Tom Petty — Low

[Source write-up](../../Patches/Bass/Song/YouDontKnowHowItFeels-TomPetty.md) · [JSON](../../Patches/Bass/Song/YouDontKnowHowItFeels-TomPetty.json)

**Current foundation:** patch VOL 52; BPM 92; SnapTone slot 54; Gain 48, VOL 80, Bass 60, Middle 50, Treble 38.

**NR Gate** (fixed): THRE 10 · **PRE COMP** (fixed): Sustain 35, VOL 58 · **EQ Bass EQ 2** (fixed): 50Hz 1, 120Hz 2, 400Hz 0, 800Hz 0, 4.5kHz -4, VOL 52 · **RVB Room** (CTL off → on): Mix 12, Decay 25, Trail true.

**Proposed changes:** Keep the muted FullB15/COMP foundation. Room Mix 12→5. No additional drive, modulation or amp substitution needed.

<a id="patch-132"></a>

#### 132. Your Love Changes Everything — United Pursuit — High

[Source write-up](../../Patches/Bass/Song/YourLove-UP.md) · [JSON](../../Patches/Bass/Song/YourLove-UP.json)

**Current foundation:** patch VOL 50; BPM 71; SnapTone slot 54; Gain 50, VOL 80, Bass 55, Middle 50, Treble 55.

**NR Gate** (fixed): THRE 22 · **PRE Micro Boost** (CTL off → on): Gain 50 · **EQ Bass EQ 1** (fixed): 33Hz 5, 150Hz 0, 600Hz -2, 2kHz 2, 8kHz 2, VOL 50 · **MOD B-Chorus** (fixed): Depth 15, Rate 0.4, VOL 50 · **RVB Hall** (CTL off → on): Mix 30, Decay 55, Trail true.

**Proposed changes:** Hall Mix 30→8, Decay 55→35; Micro Boost Gain 50→25; EQ 33Hz +5→0; Gate THRE 22→10. Compare B-Chorus off for the verse. Keep the shared five-song board settings fixed while making the GP-5 voice less diffuse.

<a id="patch-133"></a>

#### 133. Your Ways Better — Forrest Frank — High

[Source write-up](../../Patches/Bass/Song/YourWaysBetter-FF.md) · [JSON](../../Patches/Bass/Song/YourWaysBetter-FF.json)

**Current foundation:** patch VOL 52; BPM 92; SnapTone slot 52; Gain 49, VOL 75, Bass 60, Middle 50, Treble 42.

**NR Gate** (fixed): THRE 20 · **PRE COMP4** (fixed): Sustain 55, Attack 55, VOL 100, Clip 30 · **DST Bass OD** (CTL off → on): Gain 22, Blend 22, VOL 55, Bass 55, Treble 45 · **EQ Bass EQ 2** (fixed): 50Hz 4, 120Hz 2, 400Hz -3, 800Hz -2, 4.5kHz 0, VOL 52 · **MOD B-Chorus** (fixed): Depth 12, Rate 0.4, VOL 50 · **RVB Room** (CTL off → on): Mix 18, Decay 30, Trail true.

**Proposed changes:** Bypass GP-5 COMP4 first; the Donner already handles compression and COMP4 VOL 100 is a major gain-stage outlier. Remove Bass OD from the clean lo-fi default; Room Mix 18→6; EQ 50Hz +4→+1 and 800Hz -2→0. Keep Avalon and compare chorus bypassed. Preserve a soft, round note rather than generating warmth by repeated saturation and filtering.


### Bass / Style

<a id="patch-134"></a>

#### 134. Earth, Wind & Fire Style Funk Bass — Medium

[Source write-up](../../Patches/Bass/Style/EWF-Funk.md) · [JSON](../../Patches/Bass/Style/EWF-Funk.json)

**Current foundation:** patch VOL 52; BPM 126; SnapTone slot 52; Gain 48, VOL 75, Bass 55, Middle 55, Treble 60.

**NR Gate** (fixed): THRE 15 · **PRE COMP4** (fixed): Sustain 55, Attack 45, Clip 30, VOL 60 · **EQ Bass EQ 2** (CTL off → on): 50Hz 4, 120Hz 1, 400Hz -5, 800Hz -1, 4.5kHz 5, VOL 58 · **MOD B-Chorus** (MIDI, loads off): Depth 30, Rate 0.7, VOL 50.

**Proposed changes:** Keep Avalon and the MIDI chorus option. CTL EQ 50Hz +4→+1, 400Hz -5→-2, 4.5kHz +5→+2 and VOL 58→52. COMP4 Sustain 55→40 if ghost notes lose articulation. Keep the solo/slap option as a modest alternative, not a large smile-EQ/output jump.

<a id="patch-135"></a>

#### 135. RammGrind — Industrial Metal Bass (Rammstein Style) — High

[Source write-up](../../Patches/Bass/Style/RammGrind.md) · [JSON](../../Patches/Bass/Style/RammGrind.json)

**Current foundation:** patch VOL 55; BPM 122; SnapTone slot 55; Gain 58, VOL 60, Bass 50, Middle 65, Treble 62.

**NR Gate** (fixed): THRE 42 · **PRE Micro Boost** (CTL off → on): Gain 70 · **DST Bass OD** (MIDI, loads on): Gain 78, Blend 70, VOL 60, Bass 45, Treble 68 · **EQ Bass EQ 1** (fixed): 33Hz -8, 150Hz -6, 600Hz 12, 2kHz 10, 8kHz 6, VOL 55.

**Proposed changes:** Choose one principal added drive: keep Tidal Wave and remove the MIDI Bass OD initially. Boost Gain 70→25; Gate THRE 42→22; EQ 150Hz -6→0, 600Hz +12→+4, 2kHz +10→+3, 8kHz +6→+2; capture Middle 65→56. Keep BrightSVT and the dry industrial concept. Recover low-mid note body before chasing more grind.


### Guitar / Album

<a id="patch-136"></a>

#### 136. Lion — Elevation Worship (CCM / Modern Worship) — High

[Source write-up](../../Patches/Guitar/Album/Lion-EW.md) · [JSON](../../Patches/Guitar/Album/Lion-EW.json)

**Current foundation:** patch VOL 55; BPM 72; IR: V30112; CAB User IR 10.

**NR Gate** (fixed): THRE 20 · **PRE Boost** (CTL off → on + MIDI): Gain 60, +3dB true, Bright true · **DST Green OD** (CTL off → on + MIDI): Gain 40, Tone 60, VOL 65 · **AMP Foxy 30TB** (fixed): Gain 32, Tone Cut 40, VOL 60, Bass 45, Treble 62, Char 0 · **CAB User IR 10** (fixed): VOL 60 · **EQ Guitar EQ 2** (fixed): 100Hz -3, 500Hz -2, 1kHz 0, 3kHz 4, 6kHz 5, VOL 50 · **MOD A-Chorus** (MIDI, loads on): Depth 55, Rate 0.6, Tone 60 · **DLY Tape** (MIDI, loads on): Mix 35, Time 450, F.Back 35, Trail true · **RVB Sweet Space** (fixed): Mix 40, Decay 70, Damp 40, Mod 35, Trail true.

**Proposed changes:** Retain the ambient album concept, but create a playable foundation: A-Chorus Depth 55→30, Tape Mix 35→25, Sweet Space Mix 40→25/Mod 35→15. Use Flamma only for pad sections; keep the shared White Tape 700ms setting as an optional ambient layer. Remove PRE Boost from CTL initially; use Green OD plus one King of Kings channel, leaving the second for exceptional peaks. EQ 6kHz +5→+1. Rename 'Dry tight strum' to 'Reduced-effects strum' unless reverb can also be bypassed: RVB remains fixed and fairly wet.

<a id="patch-137"></a>

#### 137. *Syndicate* (Guitar) — The Midnight — Medium

[Source write-up](../../Patches/Guitar/Album/Syndicate-TheMidnight.md) · [JSON](../../Patches/Guitar/Album/Syndicate-TheMidnight.json)

**Current foundation:** patch VOL 50; BPM 104; SnapTone slot 66; Gain 45, VOL 70, Bass 48, Middle 50, Treble 58.

**NR Gate** (fixed): THRE 25 · **PRE Boost** (CTL off → on + MIDI): Gain 50, +3dB true, Bright false · **DST Darktale** (CTL off → on + MIDI): Gain 62, Filter 40, VOL 58 · **EQ Guitar EQ 2** (fixed): 100Hz -2, 500Hz -1, 1kHz 1, 3kHz 2, 6kHz 1, VOL 50 · **MOD A-Chorus** (MIDI, loads on): Depth 45, Rate 0.8, Tone 60 · **DLY Pure** (CTL off → on + MIDI): Mix 26, Time 433, F.Back 32, Trail true · **RVB Hall** (fixed): Mix 20, Decay 45, Trail true.

**Proposed changes:** Keep MayerDumble so the clean synthwave chops remain clean. Reduce simultaneous Boost Gain 50→25/+3dB off; let Darktale provide the lead saturation. Hall Mix 20→12 and chorus Depth 45→30 as a starting comparison. Retain the independently stomped shared White Tape slap. Confirm whether Pure 433ms is intended as dotted eighth at 104 BPM (approximately correct), and keep the note-value explanation explicit.

**Additional finding:** Leave King of Kings Right off in the first lead comparison: the RAT plus capture already supplies substantial saturation. Rename “Dry funk chops” as reduced-modulation chops unless Hall can also be bypassed.


### Guitar / Artist

<a id="patch-138"></a>

#### 138. Tim Henson / Polyphia (Guitar) — Signature Sound — Medium

[Source write-up](../../Patches/Guitar/Artist/Polyphia-Gtr.md) · [JSON](../../Patches/Guitar/Artist/Polyphia-Gtr.json)

**Current foundation:** patch VOL 50; BPM 120; IR: V30112 (User IR 10); CAB User IR 10.

**NR Gate** (fixed): THRE 32 · **PRE COMP4** (fixed): Sustain 58, Attack 40, Clip 45, VOL 55 · **DST La Charger** (CTL off → on): Gain 72, Tone 58, VOL 62 · **AMP L-Star CL** (fixed): Gain 38, PRES 60, VOL 60, Bass 45, Middle 50, Treble 62 · **CAB User IR 10** (fixed): VOL 60 · **EQ Guitar EQ 2** (CTL off → on): 100Hz -4, 500Hz -2, 1kHz 3, 3kHz 1, 6kHz -4, VOL 52 · **MOD A-Chorus** (CTL on → off + MIDI): Depth 22, Rate 0.8, Tone 60 · **DLY Pure** (MIDI, loads on): Mix 18, Time 375, F.Back 25, Trail true · **RVB Plate** (fixed): Mix 20, Decay 40, Damp 45, Trail true.

**Proposed changes:** Gate THRE 32→15, Plate Mix 20→10 and Pure Mix 18→12. La Charger Gain 72→55 for the lead trial. Keep the clean L-Star/IR voice provisionally; trial a brighter/open-backed cab separately if V30112 sounds too boxed-in. Label the Playing God acoustic/nylon reference as an adaptation: the HSS signal cannot acquire that instrument's attack simply from amp EQ.


### Guitar / Song

<a id="patch-139"></a>

#### 139. Ain't Nothing 'Bout You (Rhythm Guitar) — Brooks & Dunn — Low

[Source write-up](../../Patches/Guitar/Song/AintNothinBoutYou-BrooksDunn-RhythmGtr.md) · [JSON](../../Patches/Guitar/Song/AintNothinBoutYou-BrooksDunn-RhythmGtr.json)

**Current foundation:** patch VOL 50; BPM 128; SnapTone slot 63; Gain 50, VOL 70, Bass 45, Middle 50, Treble 58.

**NR Gate** (fixed): THRE 18 · **PRE COMP4** (fixed): Sustain 50, Attack 45, Clip 40, VOL 58 · **DST Super OD** (CTL off → on): Gain 35, Tone 55, VOL 68 · **EQ Guitar EQ 2** (fixed): 100Hz -3, 500Hz -1, 1kHz 0, 3kHz 2, 6kHz -1, VOL 50 · **DLY Slapback** (fixed): Mix 16, Time 100, F.Back 6, Trail true · **RVB Spring** (fixed): Mix 14, Decay 32, Trail true.

**Proposed changes:** Keep EdgyTwang and the country rhythm/lead split. COMP4 Sustain 50→40, Slapback Mix 16→12. Verify the HSS position-2 wiring before promising Tele-like quack: bridge humbucker plus middle is not necessarily auto-split on this guitar.

<a id="patch-140"></a>

#### 140. American Pie (Rhythm Guitar) — Don McLean — Medium

[Source write-up](../../Patches/Guitar/Song/AmericanPie-DonMcLean-RhythmGtr.md) · [JSON](../../Patches/Guitar/Song/AmericanPie-DonMcLean-RhythmGtr.json)

**Current foundation:** patch VOL 50; BPM 138; SnapTone slot 63; Gain 48, VOL 70, Bass 48, Middle 45, Treble 56.

**NR Gate** (fixed): THRE 12 · **PRE COMP** (fixed): Sustain 40, VOL 55 · **DST Green OD** (CTL off → on): Gain 26, Tone 55, VOL 66 · **EQ Guitar EQ 2** (fixed): 100Hz -1, 500Hz -2, 1kHz 0, 3kHz 2, 6kHz 1, VOL 50 · **DLY Analog** (CTL off → on): Mix 12, Time 330, Feedback 15, Trail true · **RVB Room** (fixed): Mix 16, Decay 32, Trail true.

**Proposed changes:** Trial NashClean slot 62 instead of EdgyTwang for the acoustic-like verse: Gain 45/VOL 75/Bass 48/Middle 48/Treble 56. Keep the CTL Green OD for the explicitly adapted electric fills. Room Mix 16→10. A capture already at breakup is a weaker starting point for an acoustic stand-in.

<a id="patch-141"></a>

#### 141. Beat It (Guitar) — Michael Jackson — Medium

[Source write-up](../../Patches/Guitar/Song/BeatIt-MJ-RhythmGtr.md) · [JSON](../../Patches/Guitar/Song/BeatIt-MJ-RhythmGtr.json)

**Current foundation:** patch VOL 50; BPM 139; SnapTone slot 79; Gain 55, VOL 60, Bass 52, Middle 58, Treble 52.

**NR Gate** (fixed): THRE 32 · **PRE Boost** (CTL off → on): Gain 55, +3dB true, Bright true · **DST Super OD** (CTL off → on): Gain 45, Tone 58, VOL 62 · **EQ Guitar EQ 2** (fixed): 100Hz 1, 500Hz 1, 1kHz 2, 3kHz 0, 6kHz -2, VOL 50 · **DLY Sweet Echo** (CTL off → on): Mix 15, Time 216, F.Back 18, Trail true · **RVB Plate** (fixed): Mix 12, Decay 25, Damp 50, Trail true.

**Proposed changes:** Keep CrankedDeluxe for the rhythm-first compromise, but reduce capture Gain 55→48 and CTL Boost Gain 55→25/+3dB off. Use Super OD alone first for solo saturation, keeping Sweet Echo. If the solo needs a fundamentally different amp, use a separate EVH-oriented preset rather than pretending CTL can change the capture. Rewrite exact historical rig claims as reported/uncertain until sourced.

<a id="patch-142"></a>

#### 142. Believe (Rhythm Guitar) — Brooks & Dunn — Low

[Source write-up](../../Patches/Guitar/Song/Believe-BrooksDunn-RhythmGtr.md) · [JSON](../../Patches/Guitar/Song/Believe-BrooksDunn-RhythmGtr.json)

**Current foundation:** patch VOL 70; BPM 66; SnapTone slot 62; Gain 50, VOL 75, Bass 48, Middle 52, Treble 54.

**NR Gate** (fixed): THRE 14 · **PRE Boost** (CTL off → on): Gain 42, +3dB true, Bright false · **DST Green OD** (CTL off → on + MIDI): Gain 36, Tone 55, VOL 64 · **EQ Guitar EQ 2** (fixed): 100Hz -3, 500Hz -1, 1kHz 0, 3kHz 1, 6kHz -1, VOL 50 · **DLY Tape** (fixed): Mix 16, Time 450, F.Back 25, Trail true · **RVB Hall** (fixed): Mix 24, Decay 50, Trail true.

**Proposed changes:** Keep NashClean, CTL drive and the existing patch VOL 70. Check the write-up for the reason behind that level before any normalization; compare it at matched perceived level to the other ballads. Hall Mix 24→14; Boost Gain 42→25/+3dB off if the two simultaneous input pushes make the lead compressed rather than louder.

**Additional finding:** The write-up explicitly identifies patch VOL 70 as Michael’s 2026-10-01 adjustment. Preserve it.

<a id="patch-143"></a>

#### 143. Billie Jean (Rhythm Guitar) — Chris Cornell — Low

[Source write-up](../../Patches/Guitar/Song/BillieJean-ChrisCornell-RhythmGtr.md) · [JSON](../../Patches/Guitar/Song/BillieJean-ChrisCornell-RhythmGtr.json)

**Current foundation:** patch VOL 50; BPM 70; SnapTone slot 78; Gain 40, VOL 70, Bass 50, Middle 52, Treble 44.

**NR Gate** (fixed): THRE 22 · **DST Darktale** (CTL off → on): Gain 45, Filter 45, VOL 62 · **EQ Guitar EQ 2** (fixed): 100Hz -2, 500Hz 1, 1kHz 1, 3kHz -1, 6kHz -2, VOL 50 · **DLY Analog** (CTL off → on): Mix 20, Time 643, Feedback 28, Trail true · **RVB Spring** (fixed): Mix 20, Decay 40, Trail true.

**Proposed changes:** Keep Fen65DlxKl and the dark build. Spring Mix 20→12; Analog Mix 20→15. Keep 643ms only if the intended feel is dotted eighth at the estimated 70 BPM; otherwise retime to the version being played. No compulsory amp replacement.

<a id="patch-144"></a>

#### 144. Bright Size Life (Guitar) — Pat Metheny — Medium

[Source write-up](../../Patches/Guitar/Song/BrightSizeLife-Metheny-Gtr.md) · [JSON](../../Patches/Guitar/Song/BrightSizeLife-Metheny-Gtr.json)

**Current foundation:** patch VOL 50; BPM 170; SnapTone slot 64; Gain 50, VOL 75, Bass 55, Middle 50, Treble 35.

**NR Gate** (fixed): THRE 10 · **PRE COMP** (fixed): Sustain 30, VOL 55 · **DST Green OD** (CTL off → on): Gain 12, Tone 40, VOL 65 · **EQ Guitar EQ 1** (fixed): 125Hz 0, 400Hz 2, 800Hz 0, 1.6kHz -2, 4kHz -5, VOL 50 · **DLY Tape** (CTL off → on): Mix 14, Time 320, F.Back 22, Trail true · **RVB Room** (fixed): Mix 12, Decay 25, Trail false.

**Proposed changes:** Remove Green OD from the clean jazz lead state and use delay alone or a small CTL EQ lift. Keep BrightTwin. Test capture Treble 35→42 before adding more output: guitar tone at 4–5 plus EQ 4kHz -5 may remove too much articulation. Room Mix 12→8.

<a id="patch-145"></a>

#### 145. Bring Me to Life (Rhythm Guitar) — Evanescence — Medium

[Source write-up](../../Patches/Guitar/Song/BringMeToLife-Evanescence-RhythmGtr.md) · [JSON](../../Patches/Guitar/Song/BringMeToLife-Evanescence-RhythmGtr.json)

**Current foundation:** patch VOL 50; BPM 95; IR: V30112; CAB User IR 10.

**NR Gate** (fixed): THRE 42 · **PRE Boost** (CTL off → on): Gain 45, +3dB true, Bright false · **DST Green OD** (fixed): Gain 8, Tone 55, VOL 72 · **AMP Mess DualM** (fixed): Gain 60, PRES 55, VOL 60, Bass 56, Middle 46, Treble 56 · **CAB User IR 10** (fixed): VOL 60 · **EQ Guitar EQ 2** (fixed): 100Hz 0, 500Hz -3, 1kHz 1, 3kHz 2, 6kHz -2, VOL 50 · **DLY Analog** (CTL off → on): Mix 18, Time 474, Feedback 25, Trail true · **RVB Room** (fixed): Mix 12, Decay 30, Trail true.

**Proposed changes:** Keep Mess DualM + User IR 10 and the low-gain Green OD tightening stage. Remove the additional PRE Boost first; use CTL for delay alone or an EQ output lift if lead level is required. Analog Mix 18→12; AMP Bass 56→50. Gate THRE 42 should be tested on held notes before lowering it; retain hard stops if they work.

<a id="patch-146"></a>

#### 146. Cassie — Flyleaf — High

[Source write-up](../../Patches/Guitar/Song/Cassie-Flyleaf.md) · [JSON](../../Patches/Guitar/Song/Cassie-Flyleaf.json)

**Current foundation:** patch VOL 55; BPM 138; IR: American Twin 2x12 Medium Mix; CAB off/manual assignment required.

**NR Gate** (fixed): THRE 32 · **DST La Charger** (CTL off → on): Gain 78, Tone 58, VOL 78 · **AMP Dark Twin** (fixed): Gain 30, VOL 72, Bass 55, Middle 55, Treble 62, Bright true · **EQ Guitar EQ 2** (fixed): 100Hz 2, 500Hz -6, 1kHz 5, 3kHz 8, 6kHz 3, VOL 55 · **DLY Analog** (CTL on → off): Mix 32, Time 380, Feedback 28, Trail true · **RVB Hall** (fixed): Mix 30, Decay 45, Trail true.

**Proposed changes:** Resolve the unassigned cab first: trial loaded User IR 10 VOL 50 for the heavy-state compromise, or load the selected American Twin IR and document its confirmed slot before encoding. Keep the clean amp/CTL distortion concept. La Charger Gain 78→55/VOL 78→60; EQ 500Hz -6→-2, 1kHz +5→+2, 3kHz +8→+2, 6kHz +3→0. Hall Mix 30→12 and Analog Mix 32→20. Stomp Narcissus off for heavy sections if the chorus becomes blurry; the current always-on ambience does not deliver a tight heavy state.

**Additional finding:** Correct the assertion that a board OD cannot be stomped independently of CTL. It can; keeping it bypassed is a tonal choice, not a hardware restriction.

<a id="patch-147"></a>

#### 147. Chalk Outlines (Guitar) — Ren & Chinchilla — Low

[Source write-up](../../Patches/Guitar/Song/ChalkOutlines-Ren.md) · [JSON](../../Patches/Guitar/Song/ChalkOutlines-Ren.json)

**Current foundation:** patch VOL 50; BPM 123; SnapTone slot 78; Gain 45, VOL 70, Bass 50, Middle 52, Treble 55.

**NR Gate** (fixed): THRE 18 · **DST Green OD** (CTL off → on): Gain 40, Tone 55, VOL 62 · **EQ Guitar EQ 2** (fixed): 100Hz -1, 500Hz 0, 1kHz 1, 3kHz 1, 6kHz -1, VOL 50 · **DLY Analog** (CTL off → on): Mix 16, Time 366, Feedback 22, Trail true · **RVB Plate** (fixed): Mix 14, Decay 30, Damp 50, Trail true.

**Proposed changes:** Keep the Michael-confirmed electric-guitar role, measured tempo and Fen65DlxKl. Trial Green OD Gain 40→25 because the capture already contains a Klon push; keep the existing bridge board stomp only if it adds a useful extra step. Do not replace measured song context with generic acoustic assumptions.

<a id="patch-148"></a>

#### 148. Civil War (Guitar) — Guns N' Roses — Medium

[Source write-up](../../Patches/Guitar/Song/CivilWar-GNR-RhythmGtr.md) · [JSON](../../Patches/Guitar/Song/CivilWar-GNR-RhythmGtr.json)

**Current foundation:** patch VOL 50; BPM 70; SnapTone slot 80; Gain 55, VOL 60, Bass 55, Middle 60, Treble 52.

**NR Gate** (fixed): THRE 30 · **PRE Boost** (fixed): Gain 45, +3dB false, Bright false · **DST Green OD** (CTL off → on): Gain 28, Tone 55, VOL 66 · **EQ Guitar EQ 2** (fixed): 100Hz 0, 500Hz 2, 1kHz 2, 3kHz 0, 6kHz -2, VOL 50 · **DLY Analog** (CTL off → on): Mix 18, Time 430, Feedback 22, Trail true · **RVB Plate** (fixed): Mix 12, Decay 30, Damp 50, Trail true.

**Proposed changes:** Keep JCM800Clean but bypass fixed PRE Boost initially, lower Gate THRE 30→18 and capture Gain 55→50. This should make guitar-volume cleanup for the intro easier. Keep CTL Green OD + delay and the intro-only Narcissus map; state that no wah/talk-box reproduction is encoded. Avoid another King of Kings layer unless the outro needs it after a level-matched trial.

<a id="patch-149"></a>

#### 149. Click Click Boom — Saliva — High

[Source write-up](../../Patches/Guitar/Song/ClickClickBoom-Sal.md) · [JSON](../../Patches/Guitar/Song/ClickClickBoom-Sal.json)

**Current foundation:** patch VOL 55; BPM 100; SnapTone slot 76; Gain 50, VOL 40, Bass 55, Middle 68, Treble 62.

**NR Gate** (fixed): THRE 38 · **DST Super OD** (CTL off → on): Gain 50, Tone 62, VOL 68 · **EQ Guitar EQ 2** (fixed): 100Hz 0, 500Hz 5, 1kHz 8, 3kHz 3, 6kHz -6, VOL 52 · **RVB Room** (CTL off → on): Mix 25, Decay 35, Trail true.

**Proposed changes:** Use the free CTL slot for a post-capture EQ lead lift, not another input boost. Remove the always-on King of Kings push and Narcissus for the dry riff. Super OD Gain 50→15/Tone 62→55; capture Middle 68→56, Treble 62→55. EQ 500Hz +5→+1 and 1kHz +8→+2; Room Mix 25→10. Keep the White Tape solo stomp. The claim that OD before a saturated Rectifier guarantees more solo output is incorrect: it can mainly add compression.

<a id="patch-150"></a>

#### 150. Creep - Radiohead — High

[Source write-up](../../Patches/Guitar/Song/Creep-RH.md) · [JSON](../../Patches/Guitar/Song/Creep-RH.json)

**Current foundation:** patch VOL 50; BPM 92; Built-in AMP/CAB.

**NR Gate** (fixed): THRE 25 · **PRE Boost** (CTL off → on): Gain 55, +3dB true, Bright true · **DST SM Dist** (CTL off → on): Gain 65, Tone 55, VOL 80 · **AMP Foxy 30N** (fixed): Gain 45, Tone Cut 40, VOL 50, Bright true · **CAB Foxy 2x12** (fixed): VOL 50 · **EQ Guitar EQ 1** (fixed): 125Hz 0, 400Hz -3, 800Hz 0, 1.6kHz 6, 4kHz 10, VOL 60 · **RVB Room** (fixed): Mix 18, Decay 30, Trail true.

**Proposed changes:** Trial British Alnico 2x12 Medium Mix instead of built-in Foxy cab, documenting manual loading until its slot is known; retain Foxy 2x12 if the trial is worse. EQ 1.6kHz +6→+2, 4kHz +10→+3, VOL 60→50. Use SM Dist alone first; remove simultaneous Boost and board fuzz, then add one layer only if the chord blasts need it. Room Mix 18→10. Specify Donner TONE as an actual knob value and NORMAL as the mode switch. Give a clear chorus sustain map, not just momentary chunk hits.

<a id="patch-151"></a>

#### 151. Danger Zone (Rhythm Guitar) — Kenny Loggins — Medium

[Source write-up](../../Patches/Guitar/Song/DangerZone-KennyLoggins-RhythmGtr.md) · [JSON](../../Patches/Guitar/Song/DangerZone-KennyLoggins-RhythmGtr.json)

**Current foundation:** patch VOL 50; BPM 158; IR: V30112; CAB User IR 10.

**NR Gate** (fixed): THRE 38 · **PRE Boost** (CTL off → on): Gain 50, +3dB true, Bright false · **AMP Solo100 OD** (fixed): Gain 58, PRES 55, VOL 60, Bass 50, Middle 58, Treble 58 · **CAB User IR 10** (fixed): VOL 60 · **EQ Guitar EQ 2** (fixed): 100Hz -2, 500Hz 0, 1kHz 1, 3kHz 1, 6kHz -2, VOL 50 · **MOD A-Chorus** (fixed): Depth 15, Rate 0.6, Tone 50 · **DLY Analog** (CTL off → on): Mix 22, Time 380, Feedback 30, Trail true · **RVB Plate** (fixed): Mix 14, Decay 35, Damp 50, Trail true.

**Proposed changes:** Keep Solo100 OD as a tonal choice, but remove any claim it was the recorded amp without a source; the source patch itself says the rig is unverified. Boost Gain 50→25/+3dB off. Analog Mix 22→16. Add a mild CTL EQ lift if the solo needs output, since an input boost into a driven amp chiefly changes saturation.

<a id="patch-152"></a>

#### 152. December - Collective Soul — High

[Source write-up](../../Patches/Guitar/Song/December-CS.md) · [JSON](../../Patches/Guitar/Song/December-CS.json)

**Current foundation:** patch VOL 50; BPM 120; SnapTone slot 68; Gain 52, VOL 50, Bass 55, Middle 60, Treble 65.

**NR Gate** (fixed): THRE 35 · **PRE COMP4** (fixed): Sustain 40, Attack 60, VOL 100, Clip 50 · **DST La Charger** (CTL off → on): Gain 55, Tone 60, VOL 75 · **EQ Guitar EQ 2** (fixed): 100Hz 5, 500Hz -5, 1kHz 8, 3kHz 10, 6kHz 5, VOL 60 · **MOD M-Vibe** (CTL on → off): Depth 25, Rate 0.6 · **DLY Analog** (CTL off → on): Mix 30, Time 320, Feedback 25, Trail true · **RVB Room** (fixed): Mix 25, Decay 35, Trail true.

**Proposed changes:** COMP4 VOL 100→55; Gate THRE 35→15; EQ 100Hz +5→0, 500Hz -5→-1, 1kHz +8→+2, 3kHz +10→+2, 6kHz +5→0, VOL 60→50. Capture Treble 65→55; La Charger Gain 55→35/VOL 75→60. Analog Mix 30→12; Room Mix 25→10. Trial a genuinely clean capture (TwinClean slot 61, Gain 45/VOL 75/flat EQ) if ClassicMarshall will not clean up; preserve the vibe-to-drive CTL design. Correct the stale JTM45 reference to JCM800. Verify the intro/riff description against the selected recording before a larger arrangement rewrite.

<a id="patch-153"></a>

#### 153. I'm Diggin' You (Like an Old Soul Record) (Guitar) — Meshell Ndegeocello — Medium

[Source write-up](../../Patches/Guitar/Song/DigginYou-MN-RhythmGtr.md) · [JSON](../../Patches/Guitar/Song/DigginYou-MN-RhythmGtr.json)

**Current foundation:** patch VOL 50; BPM 92; SnapTone slot 61; Gain 50, VOL 75, Bass 50, Middle 54, Treble 52.

**NR Gate** (fixed): THRE 20 · **PRE Toucher** (CTL off → on): Sense 55, Range 50, Q 55, Mix 60, Mode 0 · **DST Green OD** (CTL off → on): Gain 20, Tone 55, VOL 60 · **EQ Guitar EQ 2** (fixed): 100Hz -2, 500Hz 0, 1kHz 1, 3kHz 1, 6kHz -1, VOL 50 · **DLY Analog** (CTL off → on): Mix 15, Time 326, Feedback 18, Trail true · **RVB Spring** (fixed): Mix 15, Decay 30, Trail true.

**Proposed changes:** Keep TwinClean and clean comping. Make Toucher independent from the lead lift through MIDI if explicitly enabled, or retain CTL filter as an intentional effect sound rather than the only lead voice. Toucher Mix 60→40; Narcissus Depth 30→15 or bypass; Spring Mix 15→10. Verify filter triggering with the Donner engaged, since compression reduces the dynamics the envelope follows.

<a id="patch-154"></a>

#### 154. Dirt Road Anthem (Rhythm Guitar) — Jason Aldean — Low

[Source write-up](../../Patches/Guitar/Song/DirtRoadAnthem-JasonAldean-RhythmGtr.md) · [JSON](../../Patches/Guitar/Song/DirtRoadAnthem-JasonAldean-RhythmGtr.json)

**Current foundation:** patch VOL 50; BPM 86; SnapTone slot 65; Gain 42, VOL 65, Bass 50, Middle 52, Treble 52.

**NR Gate** (fixed): THRE 22 · **PRE Boost** (CTL off → on): Gain 40, +3dB true, Bright false · **DST Super OD** (CTL off → on): Gain 45, Tone 52, VOL 64 · **EQ Guitar EQ 2** (fixed): 100Hz -2, 500Hz 0, 1kHz 1, 3kHz 1, 6kHz -2, VOL 50 · **DLY Slapback** (fixed): Mix 12, Time 110, F.Back 5, Trail true · **RVB Room** (fixed): Mix 14, Decay 30, Trail true.

**Proposed changes:** Keep RythymDeluxe and the short slap. Remove simultaneous PRE Boost initially; Super OD Gain 45→30 should provide the chorus step by itself. Room Mix 14→10. Preserve the dry verse groove.

<a id="patch-155"></a>

#### 155. Everyday I Have the Blues — John Mayer (Where the Light Is) — High

[Source write-up](../../Patches/Guitar/Song/EverydayBlues-JM.md) · [JSON](../../Patches/Guitar/Song/EverydayBlues-JM.json)

**Current foundation:** patch VOL 65; BPM 104; SnapTone slot 66; Gain 55, VOL 75, Bass 55, Middle 65, Treble 60.

**NR Gate** (fixed): THRE 28 · **PRE COMP4** (fixed): Sustain 30, Attack 60, VOL 55, Clip 50 · **DST Green OD** (CTL off → on): Gain 45, Tone 55, VOL 65 · **EQ Guitar EQ 2** (fixed): 100Hz -2, 500Hz 3, 1kHz 2, 3kHz 0, 6kHz -3, VOL 50 · **DLY Slapback** (CTL off → on): Mix 30, Time 320, F.Back 20, Trail true · **RVB Spring** (fixed): Mix 20, Decay 30, Trail true.

**Proposed changes:** Preserve Michael's patch VOL 65 and capture VOL 75. Remove GP-5 COMP4, keeping the Donner. Make Green OD the principal solo drive; leave King of Kings Right off initially instead of stacking both board channels with Green OD. DLY Mix 30→15, Spring Mix 20→12; Gate THRE 28→15. Keep the shared 120ms White Tape for fills and do not stack it automatically with the solo delay. Correct 320ms: at 104 BPM it is neither an exact eighth (288ms) nor a conventional slap; label it free-time or trial 288ms.

**Additional finding:** The catalog limits Slapback Time to 20–300ms, while this patch stores 320ms. For a 320ms free echo, change the algorithm to Analog (parameter key Feedback); for an eighth at 104 BPM, Slapback 288ms is within range. This range mismatch is definite; the pedal’s response to 320ms has not been observed.

<a id="patch-156"></a>

#### 156. Found (The Unexpected Flaw of Searching) (Rhythm Guitar) — Riverside — Medium

[Source write-up](../../Patches/Guitar/Song/Found-Riverside-RhythmGtr.md) · [JSON](../../Patches/Guitar/Song/Found-Riverside-RhythmGtr.json)

**Current foundation:** patch VOL 50; BPM 100; SnapTone slot 68; Gain 50, VOL 50, Bass 50, Middle 50, Treble 45.

**NR Gate** (fixed): THRE 12 · **PRE COMP** (fixed): Sustain 30, VOL 55 · **DST Green OD** (CTL off → on): Gain 25, Tone 50, VOL 62 · **EQ Guitar EQ 2** (fixed): 100Hz -2, 500Hz -1, 1kHz 0, 3kHz 1, 6kHz 1, VOL 50 · **MOD A-Chorus** (fixed): Depth 20, Rate 0.6, Tone 50 · **RVB Hall** (CTL off → on): Mix 15, Decay 40, Trail false.

**Proposed changes:** Trial a cleaner base for the explicitly clean verses: JCM800Clean slot 80 Gain 40/VOL 60, or TwinClean slot 61 Gain 45/VOL 75 if slot 80 still crunches. Keep CTL Green OD; Hall Mix 15→10 and Trail on for ringing arpeggios. ClassicMarshall at captured G4 may be too gritty even with the drive off.

<a id="patch-157"></a>

#### 157. Hanging by a Moment (Rhythm Guitar) — Lifehouse — Low

[Source write-up](../../Patches/Guitar/Song/HangingByAMoment-Lifehouse-RhythmGtr.md) · [JSON](../../Patches/Guitar/Song/HangingByAMoment-Lifehouse-RhythmGtr.json)

**Current foundation:** patch VOL 50; BPM 124; SnapTone slot 68; Gain 48, VOL 50, Bass 50, Middle 58, Treble 56.

**NR Gate** (fixed): THRE 28 · **DST Super OD** (CTL off → on): Gain 35, Tone 55, VOL 68 · **EQ Guitar EQ 2** (fixed): 100Hz -2, 500Hz -1, 1kHz 1, 3kHz 2, 6kHz -1, VOL 50 · **DLY Analog** (CTL off → on): Mix 16, Time 363, Feedback 20, Trail true · **RVB Room** (fixed): Mix 14, Decay 30, Trail true.

**Proposed changes:** Keep ClassicMarshall and the rhythm-first design. Analog Mix 16→10 for chorus rhythm; raise it only if the part is actually a lead. Super OD Gain 35→25 as a saturation comparison. Do not infer a solo role solely because CTL is available.

<a id="patch-158"></a>

#### 158. Hard Workin' Man (Rhythm Guitar) — Brooks & Dunn — Low

[Source write-up](../../Patches/Guitar/Song/HardWorkinMan-BrooksDunn-RhythmGtr.md) · [JSON](../../Patches/Guitar/Song/HardWorkinMan-BrooksDunn-RhythmGtr.json)

**Current foundation:** patch VOL 50; BPM 150; SnapTone slot 78; Gain 40, VOL 70, Bass 48, Middle 50, Treble 56.

**NR Gate** (fixed): THRE 22 · **PRE COMP4** (fixed): Sustain 50, Attack 45, Clip 40, VOL 58 · **DST Super OD** (CTL off → on): Gain 24, Tone 60, VOL 66 · **EQ Guitar EQ 2** (fixed): 100Hz -3, 500Hz -1, 1kHz 1, 3kHz 2, 6kHz -1, VOL 50 · **DLY Slapback** (fixed): Mix 18, Time 95, F.Back 6, Trail true · **RVB Spring** (fixed): Mix 12, Decay 30, Trail true.

**Proposed changes:** Keep the user-approved Fen65DlxKl rebuild. COMP4 Sustain 50→40, Slapback Mix 18→12. Do not revert to the older Deluxe capture without a comparison; the write-up explicitly preserves that previous version as an option.

<a id="patch-159"></a>

#### 159. Heads Carolina, Tails California (Rhythm Guitar) — Jo Dee Messina — Low

[Source write-up](../../Patches/Guitar/Song/HeadsCarolina-JDM-RhythmGtr.md) · [JSON](../../Patches/Guitar/Song/HeadsCarolina-JDM-RhythmGtr.json)

**Current foundation:** patch VOL 50; BPM 118; SnapTone slot 63; Gain 51, VOL 70, Bass 45, Middle 55, Treble 58.

**NR Gate** (fixed): THRE 15 · **PRE COMP** (fixed): Sustain 40, VOL 55 · **DST Green OD** (CTL off → on): Gain 30, Tone 60, VOL 62 · **EQ Guitar EQ 1** (fixed): 125Hz -1, 400Hz -1, 800Hz 0, 1.6kHz 2, 4kHz 2, VOL 50 · **DLY Slapback** (fixed): Mix 12, Time 110, F.Back 8, Trail false · **RVB Spring** (fixed): Mix 15, Decay 25, Trail false.

**Proposed changes:** Keep EdgyTwang, short slap and modest spring. Trial Green OD Gain 30→20/Tone 60→55 for a clearer lead. No need for an amp redesign or a larger ambience layer.

<a id="patch-160"></a>

#### 160. Higher (Rhythm Guitar) — Creed — Medium

[Source write-up](../../Patches/Guitar/Song/Higher-Creed-Gtr.md) · [JSON](../../Patches/Guitar/Song/Higher-Creed-Gtr.json)

**Current foundation:** patch VOL 50; BPM 85; IR: V30112; CAB User IR 10.

**NR Gate** (fixed): THRE 25 · **PRE Boost** (CTL off → on): Gain 45, +3dB true, Bright false · **DST La Charger** (CTL off → on): Gain 55, Tone 55, VOL 62 · **AMP Match CL** (fixed): Gain 30, PRES 50, VOL 62, Bass 50, Middle 52, Treble 50 · **CAB User IR 10** (fixed): VOL 60 · **EQ Guitar EQ 2** (fixed): 100Hz -2, 500Hz 0, 1kHz 1, 3kHz 1, 6kHz -1, VOL 50 · **MOD A-Chorus** (fixed): Depth 15, Rate 0.5, Tone 50 · **RVB Hall** (fixed): Mix 14, Decay 35, Trail false.

**Proposed changes:** Keep the single clean amp plus switched-distortion compromise. Remove simultaneous PRE Boost initially and use La Charger alone; add a mild CTL EQ output lift if needed. Put A-Chorus on inverted CTL with DST if it should be clean-only (still within 3 blocks with the revised map). Hall Mix 14→10. Do not substitute a fixed dirty Rectifier capture if the clean verse is essential.

<a id="patch-161"></a>

#### 161. Honky Tonk Truth (Rhythm Guitar) — Brooks & Dunn — Low

[Source write-up](../../Patches/Guitar/Song/HonkyTonkTruth-BrooksDunn-RhythmGtr.md) · [JSON](../../Patches/Guitar/Song/HonkyTonkTruth-BrooksDunn-RhythmGtr.json)

**Current foundation:** patch VOL 50; BPM 160; SnapTone slot 63; Gain 50, VOL 70, Bass 44, Middle 55, Treble 60.

**NR Gate** (fixed): THRE 22 · **PRE COMP4** (fixed): Sustain 52, Attack 45, Clip 40, VOL 58 · **DST Green OD** (CTL off → on): Gain 35, Tone 60, VOL 68 · **EQ Guitar EQ 2** (fixed): 100Hz -3, 500Hz -1, 1kHz 1, 3kHz 2, 6kHz -1, VOL 50 · **DLY Slapback** (fixed): Mix 18, Time 90, F.Back 6, Trail true · **RVB Spring** (fixed): Mix 12, Decay 30, Trail true.

**Proposed changes:** Keep EdgyTwang. COMP4 Sustain 52→40 and Slapback Mix 18→12; Green OD Gain 35→25. Retain the fast country attack and existing restrained EQ.

<a id="patch-162"></a>

#### 162. I Will Always Love You (Rhythm Guitar) — Dolly Parton — Low

[Source write-up](../../Patches/Guitar/Song/IWillAlwaysLoveYou-Dolly-RhythmGtr.md) · [JSON](../../Patches/Guitar/Song/IWillAlwaysLoveYou-Dolly-RhythmGtr.json)

**Current foundation:** patch VOL 50; BPM 66; SnapTone slot 61; Gain 49, VOL 75, Bass 45, Middle 45, Treble 58.

**NR Gate** (fixed): THRE 12 · **PRE COMP** (fixed): Sustain 35, VOL 55 · **DST Green OD** (CTL off → on): Gain 18, Tone 55, VOL 68 · **EQ Guitar EQ 2** (fixed): 100Hz -2, 500Hz 0, 1kHz 0, 3kHz 1, 6kHz -2, VOL 50 · **DLY Analog** (CTL off → on): Mix 18, Time 450, Feedback 20, Trail true · **RVB Spring** (fixed): Mix 22, Decay 40, Trail true.

**Proposed changes:** Keep TwinClean and the gentle lead option. Spring Mix 22→12, Decay 40→30; Analog Mix 18→12. Check Green OD VOL 68 against the clean state before assuming it is a modest lift.

<a id="patch-163"></a>

#### 163. If You See Her (Rhythm Guitar) — Brooks & Dunn — Low

[Source write-up](../../Patches/Guitar/Song/IfYouSeeHer-BrooksDunn-RhythmGtr.md) · [JSON](../../Patches/Guitar/Song/IfYouSeeHer-BrooksDunn-RhythmGtr.json)

**Current foundation:** patch VOL 50; BPM 70; SnapTone slot 62; Gain 50, VOL 75, Bass 46, Middle 50, Treble 55.

**NR Gate** (fixed): THRE 12 · **PRE COMP** (fixed): Sustain 32, VOL 55 · **DST Green OD** (CTL off → on): Gain 30, Tone 55, VOL 70 · **EQ Guitar EQ 2** (fixed): 100Hz -3, 500Hz 0, 1kHz 0, 3kHz 1, 6kHz -1, VOL 50 · **MOD A-Chorus** (fixed): Depth 18, Rate 0.6, Tone 50 · **DLY Analog** (CTL off → on): Mix 18, Time 430, Feedback 22, Trail true · **RVB Hall** (fixed): Mix 20, Decay 45, Trail true.

**Proposed changes:** Keep NashClean and the subtle chorus. Hall Mix 20→12 and Analog Mix 18→12. Green OD VOL 70 should be level-matched to the clean state; lower its Gain 30→20 if it pushes past the intended ballad lead.

<a id="patch-164"></a>

#### 164. I'll Be There for You (Rhythm Guitar) — Bon Jovi — Low

[Source write-up](../../Patches/Guitar/Song/IllBeThereForYou-BonJovi-RhythmGtr.md) · [JSON](../../Patches/Guitar/Song/IllBeThereForYou-BonJovi-RhythmGtr.json)

**Current foundation:** patch VOL 50; BPM 68; SnapTone slot 80; Gain 42, VOL 60, Bass 50, Middle 55, Treble 55.

**NR Gate** (fixed): THRE 22 · **DST Super OD** (CTL off → on): Gain 40, Tone 55, VOL 68 · **EQ Guitar EQ 2** (fixed): 100Hz -2, 500Hz 0, 1kHz 2, 3kHz 1, 6kHz -1, VOL 50 · **MOD A-Chorus** (fixed): Depth 20, Rate 0.7, Tone 55 · **DLY Analog** (CTL off → on): Mix 22, Time 662, Feedback 28, Trail true · **RVB Plate** (fixed): Mix 18, Decay 45, Damp 40, Trail true.

**Proposed changes:** Keep JCM800Clean and the glossy ballad concept. Analog Mix 22→16/Feedback 28→22; Plate Mix 18→12. Keep 662ms if dotted eighth at 68 BPM is intentional. Trial Super OD Gain 40→30 before adding any further gain stage.

<a id="patch-165"></a>

#### 165. In Two Minds (Lead Guitar) — Riverside — Medium

[Source write-up](../../Patches/Guitar/Song/InTwoMinds-Riverside-LeadGtr.md) · [JSON](../../Patches/Guitar/Song/InTwoMinds-Riverside-LeadGtr.json)

**Current foundation:** patch VOL 50; BPM 100; SnapTone slot 73; Gain 53, VOL 65, Bass 45, Middle 60, Treble 55.

**NR Gate** (fixed): THRE 25 · **PRE Boost** (CTL off → on): Gain 60, +3dB true, Bright false · **DST Green OD** (fixed): Gain 30, Tone 55, VOL 60 · **EQ Guitar EQ 2** (fixed): 100Hz -3, 500Hz 1, 1kHz 2, 3kHz 2, 6kHz -1, VOL 50 · **DLY Analog** (CTL off → on): Mix 25, Time 420, Feedback 30, Trail true · **RVB Hall** (fixed): Mix 12, Decay 35, Trail false.

**Proposed changes:** Keep ProgDumble and the lead-only brief. Remove fixed Green OD initially; the capture is already an overdriven amp voice. Boost Gain 60→25/+3dB off, Analog Mix 25→18. Gate THRE 25→12 and Hall Trail on for sustained leads. If solo level is insufficient, use a post-capture EQ lift rather than more front-end gain.

<a id="patch-166"></a>

#### 166. Ironic (Rhythm Guitar) — Alanis Morissette — High

[Source write-up](../../Patches/Guitar/Song/Ironic-Alanis-RhythmGtr.md) · [JSON](../../Patches/Guitar/Song/Ironic-Alanis-RhythmGtr.json)

**Current foundation:** patch VOL 50; BPM 116; SnapTone slot 68; Gain 49, VOL 50, Bass 48, Middle 50, Treble 58.

**NR Gate** (fixed): THRE 25 · **PRE COMP** (fixed): Sustain 38, VOL 55 · **DST Darktale** (CTL off → on): Gain 55, Filter 45, VOL 62 · **EQ Guitar EQ 2** (fixed): 100Hz -3, 500Hz -1, 1kHz 0, 3kHz 2, 6kHz 0, VOL 50 · **RVB Room** (CTL off → on): Mix 14, Decay 30, Trail true.

**Proposed changes:** Trial TwinClean slot 61 Gain 45/VOL 75/Bass 48/Middle 50/Treble 55 for the acoustic-like verse while retaining Darktale for the electric chorus. ClassicMarshall's captured crunch undermines the claimed clean contrast. Gate THRE 25→12 and Darktale Gain 55→40. Keep the clear statement that the Strat is adapting an acoustic part.

<a id="patch-167"></a>

#### 167. It's Not My Time (Rhythm Guitar) — 3 Doors Down — Low

[Source write-up](../../Patches/Guitar/Song/ItsNotMyTime-3DoorsDown-RhythmGtr.md) · [JSON](../../Patches/Guitar/Song/ItsNotMyTime-3DoorsDown-RhythmGtr.json)

**Current foundation:** patch VOL 50; BPM 100; SnapTone slot 72; Gain 55, VOL 70, Bass 52, Middle 55, Treble 55.

**NR Gate** (fixed): THRE 38 · **PRE Boost** (CTL off → on): Gain 50, +3dB true, Bright false · **DST Green OD** (fixed): Gain 10, Tone 55, VOL 70 · **EQ Guitar EQ 2** (fixed): 100Hz -1, 500Hz -2, 1kHz 1, 3kHz 2, 6kHz -2, VOL 50 · **DLY Analog** (CTL off → on): Mix 20, Time 450, Feedback 25, Trail true · **RVB Room** (fixed): Mix 12, Decay 30, Trail true.

**Proposed changes:** Keep the approved RectifierCrunch rebuild. Remove additional PRE Boost first; the fixed Green OD already tightens and pushes the capture. Analog Mix 20→14. If needed repurpose the free CTL slot for a mild post-capture EQ lift instead of more saturation.

<a id="patch-168"></a>

#### 168. Kiss Me - Sixpence None the Richer — High

[Source write-up](../../Patches/Guitar/Song/KissMeSNTR.md) · [JSON](../../Patches/Guitar/Song/KissMeSNTR.json)

**Current foundation:** patch VOL 50; BPM 145; SnapTone slot 61; Gain 50, VOL 75, Bass 45, Middle 45, Treble 65.

**NR Gate** (fixed): THRE 15 · **PRE COMP4** (fixed): Sustain 30, Attack 70, VOL 55, Clip 20 · **DST Yellow OD** (CTL off → on): Gain 20, VOL 65 · **EQ Guitar EQ 1** (fixed): 125Hz -5, 400Hz -8, 800Hz -3, 1.6kHz 8, 4kHz 10, VOL 55 · **MOD A-Chorus** (fixed): Depth 18, Rate 1, Tone 55 · **DLY Slapback** (CTL off → on): Mix 22, Time 110, F.Back 15, Trail true · **RVB Room** (CTL off → on): Mix 28, Decay 40, Trail true.

**Proposed changes:** EQ 400Hz -8→-2, 1.6kHz +8→+2, 4kHz +10→+3, VOL 55→50; capture Treble 65→56. Room Mix 28→10, Slapback Mix 22→14. Keep TwinClean and light chorus. Remove Yellow OD from CTL if the hook should stay clean, using an EQ/output lift instead; this should jangle rather than become thin and piercing.

<a id="patch-169"></a>

#### 169. Man in the Box (Rhythm Guitar) — Alice In Chains — Medium

[Source write-up](../../Patches/Guitar/Song/ManInTheBox-AIC-RhythmGtr.md) · [JSON](../../Patches/Guitar/Song/ManInTheBox-AIC-RhythmGtr.json)

**Current foundation:** patch VOL 50; BPM 108; SnapTone slot 71; Gain 57, VOL 40, Bass 55, Middle 62, Treble 52.

**NR Gate** (fixed): THRE 45 · **PRE Toucher** (CTL off → on): Sense 60, Range 55, Q 65, Mix 70, Mode 0 · **DST Green OD** (fixed): Gain 20, Tone 45, VOL 70 · **EQ Guitar EQ 2** (fixed): 100Hz 0, 500Hz 1, 1kHz 1, 3kHz 0, 6kHz -3, VOL 50 · **DLY Analog** (CTL off → on): Mix 14, Time 330, Feedback 20, Trail true · **RVB Room** (fixed): Mix 10, Decay 25, Trail true.

**Proposed changes:** Keep HotMarshall and the explicitly limited talk-box substitute. Reduce fixed Green OD Gain 20→8, VOL 70→60 and Toucher Mix 70→50/Q 65→50. Test Gate THRE 45 against sustained notes; lower toward 25 if it chokes them. An envelope filter follows pick dynamics and cannot reproduce controlled speech or a foot-wah trajectory.

<a id="patch-170"></a>

#### 170. Mary Jane's Last Dance (Rhythm Guitar) — Tom Petty — Low

[Source write-up](../../Patches/Guitar/Song/MaryJanesLastDance-TomPetty-RhythmGtr.md) · [JSON](../../Patches/Guitar/Song/MaryJanesLastDance-TomPetty-RhythmGtr.json)

**Current foundation:** patch VOL 50; BPM 84; IR: EVM112; CAB User IR 5.

**NR Gate** (fixed): THRE 20 · **DST Green OD** (CTL off → on): Gain 35, Tone 55, VOL 68 · **AMP Foxy 30TB** (fixed): Gain 38, Tone Cut 45, VOL 60, Bass 50, Treble 58, Char 0 · **CAB User IR 5** (fixed): VOL 60 · **EQ Guitar EQ 2** (fixed): 100Hz -3, 500Hz 0, 1kHz 1, 3kHz 1, 6kHz -2, VOL 50 · **DLY Analog** (CTL off → on): Mix 14, Time 360, Feedback 18, Trail true · **RVB Room** (fixed): Mix 14, Decay 30, Trail true.

**Proposed changes:** Keep Foxy 30TB/User IR 5 provisionally. Trial British Alnico Medium Mix separately if the EVM cab feels too neutral, with manual-load documentation until its slot is known. Room Mix 14→10 and Green OD Gain 35→25. Avoid swapping the amp simply to make the library more uniform.

<a id="patch-171"></a>

#### 171. My Maria (Rhythm Guitar) — Brooks & Dunn — Low

[Source write-up](../../Patches/Guitar/Song/MyMaria-BrooksDunn-RhythmGtr.md) · [JSON](../../Patches/Guitar/Song/MyMaria-BrooksDunn-RhythmGtr.json)

**Current foundation:** patch VOL 50; BPM 96; SnapTone slot 62; Gain 54, VOL 75, Bass 48, Middle 52, Treble 58.

**NR Gate** (fixed): THRE 18 · **PRE COMP** (fixed): Sustain 35, VOL 55 · **DST Green OD** (CTL off → on): Gain 32, Tone 58, VOL 68 · **EQ Guitar EQ 2** (fixed): 100Hz -2, 500Hz 0, 1kHz 1, 3kHz 1, 6kHz -2, VOL 50 · **DLY Analog** (CTL off → on): Mix 15, Time 340, Feedback 18, Trail true · **RVB Spring** (fixed): Mix 16, Decay 35, Trail true.

**Proposed changes:** Keep NashClean and the separate White Tape fills/GP-5 lead echo roles. Verify that only one compressor is actually engaged in the complete board map. Spring Mix 16→12; Green OD Gain 32→25. Preserve the common 120ms board setting across its set.

**Additional finding:** The complete write-up has the Donner compressor bypassed, so PRE COMP is the sole compressor. Keep that clear in the board instructions.

<a id="patch-172"></a>

#### 172. Neon (Rhythm Guitar) — John Mayer — Medium

[Source write-up](../../Patches/Guitar/Song/Neon-JohnMayer-RhythmGtr.md) · [JSON](../../Patches/Guitar/Song/Neon-JohnMayer-RhythmGtr.json)

**Current foundation:** patch VOL 50; BPM 104; SnapTone slot 64; Gain 52, VOL 75, Bass 52, Middle 45, Treble 55.

**NR Gate** (fixed): THRE 14 · **PRE COMP4** (fixed): Sustain 48, Attack 55, Clip 40, VOL 58 · **DST Green OD** (CTL off → on): Gain 26, Tone 52, VOL 66 · **EQ Guitar EQ 2** (fixed): 100Hz 1, 500Hz -2, 1kHz 0, 3kHz 2, 6kHz 0, VOL 50 · **DLY Analog** (CTL off → on): Mix 12, Time 290, Feedback 15, Trail true · **RVB Room** (fixed): Mix 12, Decay 25, Trail true.

**Proposed changes:** Keep BrightTwin, but reduce COMP4 Sustain 48→35 so thumb slaps and chord pops retain contrast. Capture Middle 45→50 and EQ 500Hz -2→0 if the strum sounds hollow. Room Mix 12→8. Label the CTL overdrive as an electric-cover lead option rather than an acoustic replication.

<a id="patch-173"></a>

#### 173. Neon Moon (Rhythm Guitar) — Brooks & Dunn — Medium

[Source write-up](../../Patches/Guitar/Song/NeonMoon-BrooksDunn-RhythmGtr.md) · [JSON](../../Patches/Guitar/Song/NeonMoon-BrooksDunn-RhythmGtr.json)

**Current foundation:** patch VOL 50; BPM 100; SnapTone slot 62; Gain 49, VOL 75, Bass 46, Middle 46, Treble 55.

**NR Gate** (fixed): THRE 12 · **PRE COMP** (fixed): Sustain 32, VOL 55 · **DST Green OD** (CTL off → on): Gain 20, Tone 55, VOL 68 · **EQ Guitar EQ 2** (fixed): 100Hz -2, 500Hz 0, 1kHz 0, 3kHz 1, 6kHz -2, VOL 50 · **DLY Analog** (CTL off → on): Mix 18, Time 450, Feedback 22, Trail true · **RVB Spring** (fixed): Mix 22, Decay 42, Trail true.

**Proposed changes:** Keep NashClean and the shared White Tape slap. Spring Mix 22→12/Decay 42→30 and Analog Mix 18→12. Avoid automatically using both delays together. Green OD Gain 20 is reasonable, but level-match VOL 68 before calling it a subtle fill lift.

<a id="patch-174"></a>

#### 174. One Last Breath (Rhythm Guitar) — Creed — Medium

[Source write-up](../../Patches/Guitar/Song/OneLastBreath-Creed-RhythmGtr.md) · [JSON](../../Patches/Guitar/Song/OneLastBreath-Creed-RhythmGtr.json)

**Current foundation:** patch VOL 50; BPM 62; IR: V30112; CAB User IR 10.

**NR Gate** (fixed): THRE 25 · **PRE Boost** (CTL off → on): Gain 45, +3dB true, Bright false · **DST La Charger** (CTL off → on): Gain 58, Tone 52, VOL 62 · **AMP Match CL** (fixed): Gain 30, PRES 50, VOL 62, Bass 50, Middle 52, Treble 52 · **CAB User IR 10** (fixed): VOL 60 · **EQ Guitar EQ 2** (fixed): 100Hz -2, 500Hz 0, 1kHz 1, 3kHz 1, 6kHz -1, VOL 50 · **DLY Analog** (MIDI, loads on): Mix 14, Time 726, Feedback 22, Trail true · **RVB Hall** (fixed): Mix 15, Decay 40, Trail true.

**Proposed changes:** Keep Match CL + User IR 10 for the clean/dirty compromise. Remove simultaneous PRE Boost initially; La Charger Gain 58→45. Delay loads on via MIDI, so trial start_state off for clear exposed arpeggios and turn it on for fills. Correct 'a Rectifier can't give the clean verse': the limitation here is switching this one fixed GP-5 amp/capture voice, not a blanket inability of real Rectifiers to produce clean sounds.

<a id="patch-175"></a>

#### 175. Only in America (Rhythm Guitar) — Brooks & Dunn — Low

[Source write-up](../../Patches/Guitar/Song/OnlyInAmerica-BrooksDunn-RhythmGtr.md) · [JSON](../../Patches/Guitar/Song/OnlyInAmerica-BrooksDunn-RhythmGtr.json)

**Current foundation:** patch VOL 50; BPM 120; SnapTone slot 69; Gain 46, VOL 67, Bass 50, Middle 58, Treble 56.

**NR Gate** (fixed): THRE 28 · **PRE Boost** (CTL off → on): Gain 45, +3dB true, Bright false · **EQ Guitar EQ 2** (fixed): 100Hz -3, 500Hz 0, 1kHz 1, 3kHz 1, 6kHz -2, VOL 50 · **DLY Analog** (CTL off → on): Mix 15, Time 375, Feedback 22, Trail true · **RVB Hall** (fixed): Mix 14, Decay 35, Trail true.

**Proposed changes:** Keep BritishCrunch and the modest lead-delay concept. Boost Gain 45→25/+3dB off; Hall Mix 14→10. Use a post-capture EQ lift only if lead notes remain buried at matched gain.

<a id="patch-176"></a>

#### 176. Papa Was a Rollin' Stone — The Temptations (Guitar) — Medium

[Source write-up](../../Patches/Guitar/Song/PapaWasARollinStone-Temptations-RhythmGtr.md) · [JSON](../../Patches/Guitar/Song/PapaWasARollinStone-Temptations-RhythmGtr.json)

**Current foundation:** patch VOL 52; BPM 120; SnapTone slot 61; Gain 48, VOL 75, Bass 42, Middle 58, Treble 62.

**NR Gate** (fixed): THRE 20 · **PRE Toucher** (CTL off → on): Sense 62, Range 55, Q 68, Mix 85, Mode 0 · **EQ Guitar EQ 1** (fixed): 125Hz -8, 400Hz -2, 800Hz 3, 1.6kHz 4, 4kHz 1, VOL 52 · **RVB Room** (fixed): Mix 14, Decay 30, Trail true.

**Proposed changes:** Keep TwinClean and the wah-style CTL voice. Toucher Mix 85→60 and Q 68→50 as a less peaky starting point; calibrate Sense at the actual guitar volume with the Donner engaged. Room Mix 14→8. Preserve the strong low cut for rhythmic guitar, but compare EQ 125Hz -8→-4 if the HSS gets too thin.

<a id="patch-177"></a>

#### 177. Praise (Rhythm Guitar) — Elevation Worship — Low

[Source write-up](../../Patches/Guitar/Song/Praise-EW-RhythmGtr.md) · [JSON](../../Patches/Guitar/Song/Praise-EW-RhythmGtr.json)

**Current foundation:** patch VOL 50; BPM 127; IR: V30112; CAB User IR 10.

**NR Gate** (fixed): THRE 22 · **PRE Boost** (CTL off → on): Gain 40, +3dB true, Bright false · **DST Green OD** (MIDI, loads on): Gain 30, Tone 60, VOL 62 · **AMP Foxy 30TB** (fixed): Gain 32, Tone Cut 40, VOL 60, Bass 45, Treble 58, Char 0 · **CAB User IR 10** (fixed): VOL 60 · **EQ Guitar EQ 2** (fixed): 100Hz -3, 500Hz -1, 1kHz 1, 3kHz 2, 6kHz 0, VOL 50 · **DLY Tape** (CTL off → on): Mix 25, Time 354, F.Back 28, Trail true · **RVB Plate** (fixed): Mix 18, Decay 35, Damp 50, Trail true.

**Proposed changes:** Keep Foxy 30TB, the dry rhythm emphasis and dotted-eighth 354ms timing at the stated 127 BPM. Tape Mix 25→18 and Feedback 28→22; Boost Gain 40→25/+3dB off. Preserve MIDI drive selection without inventing new song cues.

<a id="patch-178"></a>

#### 178. Puff the Magic Dragon (Rhythm Guitar) — Peter, Paul and Mary — Medium

[Source write-up](../../Patches/Guitar/Song/PuffTheMagicDragon-PPM-RhythmGtr.md) · [JSON](../../Patches/Guitar/Song/PuffTheMagicDragon-PPM-RhythmGtr.json)

**Current foundation:** patch VOL 50; BPM 110; SnapTone slot 64; Gain 50, VOL 75, Bass 50, Middle 42, Treble 55.

**NR Gate** (fixed): THRE 10 · **PRE COMP** (fixed): Sustain 45, VOL 55 · **DST Green OD** (CTL off → on): Gain 10, Tone 52, VOL 68 · **EQ Guitar EQ 2** (fixed): 100Hz 0, 500Hz -3, 1kHz -1, 3kHz 2, 6kHz 2, VOL 50 · **RVB Room** (fixed): Mix 16, Decay 30, Trail true.

**Proposed changes:** Keep the explicitly acoustic-adjacent adaptation. COMP Sustain 45→30; Room Mix 16→10. Replace CTL Green OD with a small EQ/output lift if melody should stay clean. Restore capture Middle 42→48 if the Fender/scooped-pickup combination hollows out the fingerpicking.

<a id="patch-179"></a>

#### 179. Rainbow Connection (Rhythm Guitar) — Kenny Loggins — Medium

[Source write-up](../../Patches/Guitar/Song/RainbowConnection-KennyLoggins-RhythmGtr.md) · [JSON](../../Patches/Guitar/Song/RainbowConnection-KennyLoggins-RhythmGtr.json)

**Current foundation:** patch VOL 50; BPM 72; SnapTone slot 64; Gain 50, VOL 75, Bass 50, Middle 45, Treble 52.

**NR Gate** (fixed): THRE 10 · **PRE COMP** (fixed): Sustain 42, VOL 55 · **DST Green OD** (CTL off → on): Gain 12, Tone 50, VOL 68 · **EQ Guitar EQ 2** (fixed): 100Hz -1, 500Hz -2, 1kHz 0, 3kHz 2, 6kHz 1, VOL 50 · **MOD A-Chorus** (fixed): Depth 14, Rate 0.5, Tone 55 · **DLY Tape** (CTL off → on): Mix 16, Time 420, F.Back 22, Trail true · **RVB Hall** (fixed): Mix 24, Decay 50, Trail true.

**Proposed changes:** Hall Mix 24→12/Decay 50→35 and COMP Sustain 42→30. Remove CTL Green OD from the gentle melody role; delay plus a modest EQ lift is a cleaner contrast. Compare A-Chorus bypassed before retaining it as a permanent layer.

<a id="patch-180"></a>

#### 180. Red Dirt Road (Rhythm Guitar) — Brooks & Dunn — Low

[Source write-up](../../Patches/Guitar/Song/RedDirtRoad-BrooksDunn-RhythmGtr.md) · [JSON](../../Patches/Guitar/Song/RedDirtRoad-BrooksDunn-RhythmGtr.json)

**Current foundation:** patch VOL 50; BPM 96; SnapTone slot 78; Gain 45, VOL 70, Bass 48, Middle 52, Treble 55.

**NR Gate** (fixed): THRE 22 · **DST Green OD** (CTL off → on): Gain 20, Tone 55, VOL 64 · **EQ Guitar EQ 2** (fixed): 100Hz -3, 500Hz 0, 1kHz 1, 3kHz 1, 6kHz -2, VOL 50 · **DLY Analog** (CTL off → on): Mix 16, Time 470, Feedback 24, Trail true · **RVB Room** (fixed): Mix 16, Decay 35, Trail true.

**Proposed changes:** Keep the user-approved Fen65DlxKl version. Room Mix 16→10 and Analog Mix 16→12. Green OD Gain 20 is appropriately restrained; retain it unless a level-matched comparison shows no useful difference.

<a id="patch-181"></a>

#### 181. Sister Christian - Night Ranger — High

[Source write-up](../../Patches/Guitar/Song/SisterChristian-NR.md) · [JSON](../../Patches/Guitar/Song/SisterChristian-NR.json)

**Current foundation:** patch VOL 55; BPM 101; SnapTone slot 71; Gain 43, VOL 40, Bass 55, Middle 60, Treble 62.

**NR Gate** (fixed): THRE 30 · **PRE COMP4** (fixed): Sustain 45, Attack 55, VOL 100, Clip 40 · **DST La Charger** (CTL off → on + MIDI): Gain 60, Tone 65, VOL 80 · **EQ Guitar EQ 2** (CTL off → on): 100Hz 0, 500Hz 5, 1kHz 10, 3kHz 12, 6kHz 5, VOL 65 · **DLY Analog** (CTL off → on): Mix 25, Time 380, Feedback 20, Trail true · **RVB Room** (fixed): Mix 22, Decay 35, Trail true.

**Proposed changes:** Bypass GP-5 COMP4 first, keeping one light board compressor; VOL 100 is not a neutral setting. Trial JCM800Clean slot 80 Gain 45/VOL 60 instead of HotMarshall if the verse cannot clean up. La Charger Gain 60→40/Tone 65→55/VOL 80→60. CTL EQ 500Hz +5→+1, 1kHz +10→+2, 3kHz +12→+3, 6kHz +5→0, VOL 65→53. Room Mix 22→10; Analog Mix 25→18. Leave King of Kings Right off initially. Fix Donner TONE vs NORMAL mode labeling, and preserve the shared CTL/MIDI reset instructions.

<a id="patch-182"></a>

#### 182. Somebody Like You (Rhythm Guitar) — Keith Urban — Medium

[Source write-up](../../Patches/Guitar/Song/SomebodyLikeYou-KeithUrban-RhythmGtr.md) · [JSON](../../Patches/Guitar/Song/SomebodyLikeYou-KeithUrban-RhythmGtr.json)

**Current foundation:** patch VOL 50; BPM 120; SnapTone slot 63; Gain 48, VOL 70, Bass 46, Middle 52, Treble 58.

**NR Gate** (fixed): THRE 18 · **PRE COMP4** (fixed): Sustain 55, Attack 40, Clip 40, VOL 56 · **DST Green OD** (CTL off → on): Gain 35, Tone 60, VOL 66 · **EQ Guitar EQ 2** (fixed): 100Hz -3, 500Hz -1, 1kHz 1, 3kHz 2, 6kHz 0, VOL 50 · **DLY Analog** (CTL off → on): Mix 18, Time 375, Feedback 20, Trail true · **RVB Spring** (fixed): Mix 12, Decay 30, Trail true.

**Proposed changes:** Keep EdgyTwang and the shared White Tape slap. COMP4 Sustain 55→40 and Analog Mix 18→12. The intro's percussion should come from touch; excess compression and stacked echoes weaken it. Keep the six-string-banjo limitation explicit.

<a id="patch-183"></a>

#### 183. Spider-Man Theme (1967 Cartoon) (Rhythm Guitar) — Bob Harris & Paul Francis Webster — Low

[Source write-up](../../Patches/Guitar/Song/SpiderManTheme1967-RhythmGtr.md) · [JSON](../../Patches/Guitar/Song/SpiderManTheme1967-RhythmGtr.json)

**Current foundation:** patch VOL 50; BPM 150; SnapTone slot 61; Gain 51, VOL 75, Bass 48, Middle 50, Treble 60.

**NR Gate** (fixed): THRE 20 · **DST Super OD** (CTL off → on): Gain 45, Tone 55, VOL 66 · **EQ Guitar EQ 2** (fixed): 100Hz -2, 500Hz 0, 1kHz 1, 3kHz 2, 6kHz -1, VOL 50 · **DLY Slapback** (fixed): Mix 16, Time 110, F.Back 8, Trail true · **RVB Spring** (fixed): Mix 22, Decay 45, Trail true.

**Proposed changes:** Keep the intentional surf/spy adaptation. Super OD Gain 45→30, Slapback Mix 16→12 and Spring Mix 22→16. A more obvious spring is defensible here, so do not strip it back to the generic dry-rock settings.

<a id="patch-184"></a>

#### 184. Spider-Man: The Animated Series Theme (1994) (Rhythm Guitar) — Joe Perry — Low

[Source write-up](../../Patches/Guitar/Song/SpiderManTheme1994-RhythmGtr.md) · [JSON](../../Patches/Guitar/Song/SpiderManTheme1994-RhythmGtr.json)

**Current foundation:** patch VOL 50; BPM 140; SnapTone slot 69; Gain 50, VOL 67, Bass 50, Middle 60, Treble 58.

**NR Gate** (fixed): THRE 35 · **PRE Boost** (CTL off → on): Gain 50, +3dB true, Bright false · **EQ Guitar EQ 2** (fixed): 100Hz -2, 500Hz 0, 1kHz 1, 3kHz 1, 6kHz -2, VOL 50 · **DLY Analog** (CTL off → on): Mix 16, Time 380, Feedback 22, Trail true · **RVB Room** (fixed): Mix 12, Decay 30, Trail true.

**Proposed changes:** Keep BritishCrunch and the modest delay. Boost Gain 50→25/+3dB off and Gate THRE 35→20 as a sustain trial. If more lead level is required, add a mild post-capture EQ lift within the CTL limit.

<a id="patch-185"></a>

#### 185. Spidey and His Amazing Friends Theme (Guitar) — Patrick Stump — Medium

[Source write-up](../../Patches/Guitar/Song/SpideyFriendsTheme-RhythmGtr.md) · [JSON](../../Patches/Guitar/Song/SpideyFriendsTheme-RhythmGtr.json)

**Current foundation:** patch VOL 50; BPM 150; SnapTone slot 80; Gain 55, VOL 60, Bass 52, Middle 58, Treble 56.

**NR Gate** (fixed): THRE 35 · **PRE Boost** (CTL off → on): Gain 40, +3dB true, Bright false · **DST Green OD** (CTL off → on): Gain 35, Tone 58, VOL 62 · **EQ Guitar EQ 2** (fixed): 100Hz 0, 500Hz -1, 1kHz 2, 3kHz 2, 6kHz -1, VOL 50 · **DLY Analog** (CTL off → on): Mix 18, Time 200, Feedback 20, Trail true · **RVB Room** (fixed): Mix 10, Decay 25, Trail true.

**Proposed changes:** Keep JCM800Clean; remove the simultaneous PRE Boost and use Green OD alone for the hook. Analog Mix 18→12, Gate THRE 35→20. The three-block CTL move need not mean three concurrent layers of compression/gain.

**Additional finding:** Keep the board King of Kings Left as the rhythm push for the initial comparison; removing PRE Boost avoids piling two new pushes onto that baseline.

<a id="patch-186"></a>

#### 186. Surfin' U.S.A. — The Beach Boys (Guitar) — Medium

[Source write-up](../../Patches/Guitar/Song/SurfinUSA-BeachBoys-RhythmGtr.md) · [JSON](../../Patches/Guitar/Song/SurfinUSA-BeachBoys-RhythmGtr.json)

**Current foundation:** patch VOL 52; BPM 158; SnapTone slot 61; Gain 51, VOL 75, Bass 45, Middle 50, Treble 66.

**NR Gate** (fixed): THRE 18 · **DST Green OD** (CTL off → on): Gain 18, Tone 60, VOL 68 · **EQ Guitar EQ 1** (fixed): 125Hz -3, 400Hz -2, 800Hz 1, 1.6kHz 3, 4kHz 3, VOL 50 · **DLY Slapback** (CTL off → on): Mix 20, Time 110, F.Back 8, Trail true · **RVB Spring** (fixed): Mix 26, Decay 40, Trail true.

**Proposed changes:** Keep TwinClean and the period-style Spring character. Capture Treble 66→58 and EQ 4kHz +3→+1 before increasing output. Spring Mix 26→18, Slapback Mix 20→12. Correct references to an amp Bright switch: this patch uses a capture with Gain/VOL/Bass/Middle/Treble only.

<a id="patch-187"></a>

#### 187. Sweet Leaf (Rhythm Guitar) — Black Sabbath — Medium

[Source write-up](../../Patches/Guitar/Song/SweetLeaf-BlackSabbath-RhythmGtr.md) · [JSON](../../Patches/Guitar/Song/SweetLeaf-BlackSabbath-RhythmGtr.json)

**Current foundation:** patch VOL 50; BPM 94; SnapTone slot 74; Gain 50, VOL 70, Bass 55, Middle 60, Treble 48.

**NR Gate** (fixed): THRE 35 · **PRE Boost** (fixed): Gain 35, +3dB false, Bright true · **DST Sora Fuzz** (CTL off → on): Fuzz 55, VOL 62 · **EQ Guitar EQ 2** (fixed): 100Hz 1, 500Hz 2, 1kHz 1, 3kHz -1, 6kHz -3, VOL 50 · **DLY Tape** (CTL off → on): Mix 16, Time 380, F.Back 22, Trail true · **RVB Room** (fixed): Mix 10, Decay 25, Trail true.

**Proposed changes:** Keep the approved CleanPlexi choice and fixed low boost. Trial removing Sora Fuzz from CTL, using a mild post-capture EQ lift with delay instead; the core target is boosted-amp weight, not necessarily a separate fuzz layer. Gate THRE 35→20 for the jam's sustained notes. Retain fuzz as an explicitly optional heavier interpretation if preferred.

<a id="patch-188"></a>

#### 188. (I've Had) The Time of My Life (Rhythm Guitar) — Bill Medley & Jennifer Warnes — Medium

[Source write-up](../../Patches/Guitar/Song/TimeOfMyLife-DirtyDancing-RhythmGtr.md) · [JSON](../../Patches/Guitar/Song/TimeOfMyLife-DirtyDancing-RhythmGtr.json)

**Current foundation:** patch VOL 50; BPM 108; IR: EVM112; CAB User IR 5.

**NR Gate** (fixed): THRE 16 · **PRE COMP** (fixed): Sustain 40, VOL 55 · **DST Super OD** (CTL off → on): Gain 45, Tone 58, VOL 70 · **AMP J-120 CL** (fixed): VOL 60, Bass 45, Middle 50, Treble 58, Bright false · **CAB User IR 5** (fixed): VOL 60 · **EQ Guitar EQ 2** (fixed): 100Hz -3, 500Hz -1, 1kHz 0, 3kHz 2, 6kHz 0, VOL 50 · **MOD A-Chorus** (fixed): Depth 30, Rate 0.8, Tone 55 · **DLY Analog** (CTL off → on): Mix 18, Time 420, Feedback 25, Trail true · **RVB Plate** (fixed): Mix 18, Decay 40, Damp 45, Trail true.

**Proposed changes:** Keep J-120 CL + User IR 5 and the bright rhythm role. A-Chorus Depth 30→20; Plate Mix 18→12 and Analog Mix 18→12. Super OD Gain 45→30. Treat the JC-style amp choice as a useful clean platform, not verified track gear.

<a id="patch-189"></a>

#### 189. Waiting on the World to Change (Rhythm Guitar) — John Mayer — Low

[Source write-up](../../Patches/Guitar/Song/WaitingOnTheWorld-JohnMayer-RhythmGtr.md) · [JSON](../../Patches/Guitar/Song/WaitingOnTheWorld-JohnMayer-RhythmGtr.json)

**Current foundation:** patch VOL 50; BPM 88; SnapTone slot 66; Gain 45, VOL 70, Bass 50, Middle 58, Treble 52.

**NR Gate** (fixed): THRE 14 · **PRE COMP** (fixed): Sustain 30, VOL 55 · **DST Green OD** (CTL off → on): Gain 28, Tone 50, VOL 66 · **EQ Guitar EQ 2** (fixed): 100Hz -2, 500Hz 1, 1kHz 1, 3kHz 0, 6kHz -2, VOL 50 · **DLY Analog** (CTL off → on): Mix 14, Time 340, Feedback 18, Trail true · **RVB Room** (fixed): Mix 14, Decay 30, Trail true.

**Proposed changes:** Keep MayerDumble and the restrained Green OD lift. Room Mix 14→10; compare Analog Mix 14→10 for fills. The current amp/EQ structure is sensible and does not need a rebuild.

<a id="patch-190"></a>

#### 190. We Got Used to Us (Lead Guitar) — Riverside — Low

[Source write-up](../../Patches/Guitar/Song/WeGotUsedToUs-Riverside-LeadGtr.md) · [JSON](../../Patches/Guitar/Song/WeGotUsedToUs-Riverside-LeadGtr.json)

**Current foundation:** patch VOL 50; BPM 90; SnapTone slot 73; Gain 47, VOL 65, Bass 50, Middle 55, Treble 50.

**NR Gate** (fixed): THRE 18 · **PRE COMP** (fixed): Sustain 35, VOL 55 · **DST Green OD** (CTL off → on): Gain 35, Tone 50, VOL 65 · **EQ Guitar EQ 1** (fixed): 125Hz -1, 400Hz 0, 800Hz 2, 1.6kHz 1, 4kHz -2, VOL 50 · **DLY Tape** (CTL off → on): Mix 25, Time 480, F.Back 30, Trail true · **RVB Plate** (fixed): Mix 15, Decay 40, Damp 50, Trail false.

**Proposed changes:** Keep ProgDumble and the singing lead brief. Green OD Gain 35→20, Tape Mix 25→18 and Feedback 30→24; Plate Trail on. Preserve the delay-led sense of space while keeping the note front clear.

<a id="patch-191"></a>

#### 191. Werewolves of London (Rhythm Guitar) — Warren Zevon — Low

[Source write-up](../../Patches/Guitar/Song/WerewolvesOfLondon-Zevon-RhythmGtr.md) · [JSON](../../Patches/Guitar/Song/WerewolvesOfLondon-Zevon-RhythmGtr.json)

**Current foundation:** patch VOL 50; BPM 104; IR: EVM112; CAB User IR 5.

**NR Gate** (fixed): THRE 18 · **DST Green OD** (CTL off → on): Gain 38, Tone 55, VOL 68 · **AMP Bellman 59N** (fixed): Gain 42, PRES 50, VOL 62, Bass 45, Middle 58, Treble 52 · **CAB User IR 5** (fixed): VOL 60 · **EQ Guitar EQ 2** (fixed): 100Hz -3, 500Hz 0, 1kHz 1, 3kHz 0, 6kHz -2, VOL 50 · **DLY Analog** (CTL off → on): Mix 14, Time 290, Feedback 18, Trail true · **RVB Room** (fixed): Mix 14, Decay 30, Trail true.

**Proposed changes:** Keep Bellman 59N/User IR 5 as a tonal option. Room Mix 14→8; Green OD Gain 38→25. The source write-up says the recorded rig is unverified, so remove any reference-index claim that this is a confirmed direct model of the real session amp.

<a id="patch-192"></a>

#### 192. What About Now (Rhythm Guitar) — Daughtry — Low

[Source write-up](../../Patches/Guitar/Song/WhatAboutNow-Daughtry-RhythmGtr.md) · [JSON](../../Patches/Guitar/Song/WhatAboutNow-Daughtry-RhythmGtr.json)

**Current foundation:** patch VOL 50; BPM 74; SnapTone slot 66; Gain 45, VOL 70, Bass 48, Middle 52, Treble 55.

**NR Gate** (fixed): THRE 20 · **PRE COMP4** (fixed): Sustain 40, Attack 50, Clip 35, VOL 55 · **DST La Charger** (CTL off → on): Gain 50, Tone 55, VOL 64 · **EQ Guitar EQ 2** (fixed): 100Hz -2, 500Hz -1, 1kHz 1, 3kHz 2, 6kHz -1, VOL 50 · **MOD A-Chorus** (fixed): Depth 15, Rate 0.6, Tone 55 · **DLY Pure** (CTL off → on): Mix 18, Time 608, F.Back 25, Trail true · **RVB Hall** (fixed): Mix 18, Decay 40, Trail true.

**Proposed changes:** Keep the clean MayerDumble/La Charger contrast. Hall Mix 18→12 and Pure Mix 18→14. If the distorted chorus loses attack, lower La Charger Gain 50→40 before adding EQ. Existing light chorus is within the restrained range.

<a id="patch-193"></a>

#### 193. When Wind Meets Fire (Rhythm Guitar) — Elevation Worship — Medium

[Source write-up](../../Patches/Guitar/Song/WhenWindMeetsFire-EW-RhythmGtr.md) · [JSON](../../Patches/Guitar/Song/WhenWindMeetsFire-EW-RhythmGtr.json)

**Current foundation:** patch VOL 50; BPM 72; IR: V30112; CAB User IR 10.

**NR Gate** (fixed): THRE 18 · **PRE Boost** (CTL off → on + MIDI): Gain 45, +3dB true, Bright false · **DST Green OD** (CTL off → on + MIDI): Gain 38, Tone 58, VOL 64 · **AMP Foxy 30TB** (fixed): Gain 35, Tone Cut 40, VOL 62, Bass 48, Treble 58, Char 0 · **CAB User IR 10** (fixed): VOL 60 · **EQ Guitar EQ 2** (fixed): 100Hz -3, 500Hz -1, 1kHz 0, 3kHz 2, 6kHz 1, VOL 50 · **DLY Tape** (MIDI, loads on): Mix 22, Time 625, F.Back 30, Trail true · **RVB Sweet Space** (fixed): Mix 30, Decay 60, Damp 45, Mod 25, Trail true.

**Proposed changes:** Keep Foxy 30TB and the worship-delay role. Remove simultaneous PRE Boost initially; Green OD alone can provide the driven step. Sweet Space Mix 30→22/Mod 25→15. Retain 625ms as dotted eighth at the stated 72 BPM, subject to checking the actual version. Trial British Alnico separately only if V30112 proves too mid-focused.

<a id="patch-194"></a>

#### 194. Your Body is a Wonderland — John Mayer (Room for Squares) — High

[Source write-up](../../Patches/Guitar/Song/Wonderland-JM.md) · [JSON](../../Patches/Guitar/Song/Wonderland-JM.json)

**Current foundation:** patch VOL 55; BPM 82; SnapTone slot 66; Gain 50, VOL 70, Bass 50, Middle 50, Treble 50.

**NR Gate** (fixed): THRE 20 · **PRE COMP** (fixed): Sustain 35, VOL 55 · **DST Green OD** (CTL off → on): Gain 25, Tone 55, VOL 60 · **EQ Guitar EQ 2** (fixed): 100Hz 0, 500Hz 2, 1kHz 1, 3kHz 3, 6kHz 2, VOL 50 · **MOD A-Chorus** (fixed): Depth 30, Rate 1, Tone 55 · **RVB Room** (CTL off → on): Mix 30, Decay 40, Trail true.

**Proposed changes:** Resolve the contradiction between 'bigger, not dirtier' and CTL Green OD: remove DST and use CTL EQ/output lift instead. A-Chorus Depth 30→18/Rate 1→0.5Hz; Room Mix 30→10. Keep MayerDumble, reducing EQ 3kHz +3→+1 if the rhythm becomes sharp. The intended light clean groove should remain a light clean groove.

<a id="patch-195"></a>

#### 195. You Don't Know How It Feels (Rhythm Guitar) — Tom Petty — Low

[Source write-up](../../Patches/Guitar/Song/YouDontKnowHowItFeels-TomPetty-RhythmGtr.md) · [JSON](../../Patches/Guitar/Song/YouDontKnowHowItFeels-TomPetty-RhythmGtr.json)

**Current foundation:** patch VOL 50; BPM 92; IR: EVM112; CAB User IR 5.

**NR Gate** (fixed): THRE 16 · **DST Green OD** (CTL off → on): Gain 30, Tone 52, VOL 68 · **AMP Foxy 30N** (fixed): Gain 42, Tone Cut 50, VOL 50, Bright false · **CAB User IR 5** (fixed): VOL 60 · **EQ Guitar EQ 2** (fixed): 100Hz -2, 500Hz 0, 1kHz 1, 3kHz 0, 6kHz -2, VOL 50 · **DLY Analog** (CTL off → on): Mix 12, Time 320, Feedback 15, Trail true · **RVB Room** (fixed): Mix 10, Decay 25, Trail true.

**Proposed changes:** Keep Foxy 30N/User IR 5 and the dry roots-rock approach. Green OD Gain 30→20; Analog Mix 12→8 if repeats interfere with the laid-back pulse. No amp or capture change required.

