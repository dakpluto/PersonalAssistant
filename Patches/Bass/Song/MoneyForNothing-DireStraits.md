# Money for Nothing — Dire Straits

Bass: Harley Benton P/J, 5-string, passive. Full board.
From *Brothers in Arms* (1985), ~120 BPM.
Mark Knopfler's guitar carries all the grit here — that famous, heavily-processed riff tone. John Illsley's bass job is to stay punchy, clean, and driving underneath it, with just a hint of the glossy mid-80s sheen that's all over this record. Verses are narration-driven and groove-locked; the "money for nothin'" chorus hook opens things up a bit more.

CTL off = the driving verse groove. CTL on = the chorus hook.

## GP-5 settings

Module order: NR → PRE → DST → AMP → CAB → EQ → MOD → DLY → RVB.

**NR — Gate**
- THRE: 15
- Always on. Low threshold — this is a clean, punchy tone, nothing much to clean up.

**PRE — Micro Boost — On CTL**
- Gain: 50
- CTL off: bypassed (verse). CTL on: engaged (chorus).
- Verse groove carries itself under the narration-style vocal. Chorus gets a clean push to sit level with the full hook.

**DST — Off**
- No drive. The guitar owns all the distortion in this song — the bass needs to stay clean and out of its way.

**AMP/CAB — NAM SnapTone, slot 52: AvalonAD2022** (always on)
- Built from the `Avalon - 38 dB - Chan 1 (Avalon AD2022)` NAM and no cab IR (straight DI), combined into one snaptone.
- Avalon AD2022 Class A preamp at 38 dB. A studio DI, not an amp: no speaker coloration.
- Mid-80s hi-fi rock production. Clean, tight DI bass under the big guitar.
- Gain: 50, VOL: 50, Bass: 58, Middle: 50, Treble: 58
- Gain 50: the capture as built.
- Bass 58: more low end.
- Middle 50: flat.
- Treble 58: more top end.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 52 directly.

**EQ — Bass EQ 2**
- 50Hz: +2, 120Hz: +1, 400Hz: -2, 800Hz: +3, 4.5kHz: +3, VOL: 55
- Always on, same for both CTL states.
- +3 at both 800Hz and 4.5kHz keeps this bright and present, matching the glossy, radio-friendly production of the record. -2 at 400Hz keeps it from getting boxy under all that upper-mid push.

**MOD — B-Chorus (Boss CEB-3)**
- Depth: 20, Rate: 0.3Hz, VOL: 55
- Always on, same for both CTL states.
- Very light touch — just enough to add that glossy mid-80s sheen this whole record is soaked in, without ever reading as an obvious "chorus effect." This is the deliberate exception to leaving MOD off entirely: the era calls for it, so it's baked in throughout rather than saved for a CTL moment.

**DLY — Off**
- Not used.

**RVB — Room — On CTL**
- Mix: 20, Decay: 30, Trail: On
- CTL off: bypassed (verse — tight and dry). CTL on: engaged (chorus).
- A touch of room opens the tone up for the "money for nothin'" hook, matching the bigger, more anthemic feel of the chorus.

## CTL summary

- **CTL Off — Verse.** The driving, narration-style groove. Dry, tight, punchy.
- **CTL On — Chorus.** Boost and room reverb engage together for the "money for nothin' and chicks for free" hook.
- Engage CTL right as the chorus hits, back off returning to the verse groove.

## Full pedalboard (signal chain order)

**1. Flamma FS-08 Octave — Bypassed**
- Footswitch off. This groove doesn't call for any octave layering — straightforward and direct.

**2. Donner Ultimate Comp — Engaged**
- COMP: 50
- TONE: 60
- LEVEL: 60
- Mode: TREBLE
- Moderate compression keeps the groove punchy and consistent. TREBLE mode keeps pick/finger attack bright, matching the clean, present character this whole tone is built around.

**3. Donner Stylish Fuzz — Bypassed**
- Footswitch off. No fuzz anywhere — the guitar owns all the grit in this song, the bass stays clean.

**4. Joyo Tidal Wave — Engaged**
- Drive: 15
- Blend: 30
- Presence: 60
- Level: 60
- Treble: 58
- Middle: 55
- Bass: 55
- Mid-Frequency: 1000Hz
- Bass-Shift: 80Hz
- Cab-Sim (DI out): Off
- Ground Lift: Off
- Used lightly here for a touch of preamp presence and EQ shaping rather than overdrive — Drive stays low. Mid-Frequency at 1000Hz and Bass-Shift at 80Hz both push toward attack and articulation over body, matching this song's punchy, driving character.

**5. Joyo Narcissus — Bypassed**
- Footswitch off. The GP-5's own B-Chorus already covers the subtle 80s sheen this patch wants — running a second chorus source would push it from "gloss" into "obvious effect."

**6. Valeton GP-5** — see settings above.
