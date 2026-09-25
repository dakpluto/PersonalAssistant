# Purple Rain — Prince

Bass: Harley Benton P/J, 5-string, passive. Full board.
From *Purple Rain* (1984), ~112 BPM.
Worth knowing going in: the studio recording is widely reported to have little to no traditional bass guitar through most of the song — it's carried almost entirely by guitar, organ, and orchestration, with Prince and the Revolution deliberately leaving that space open. So this patch isn't chasing an existing bass part — it's a tasteful, supportive line built to fit the song's actual harmonic and dynamic arc, the way a full band would want to fill that role live or on a cover. Quiet and restrained through the verses, opening up into the huge, gospel-tinged climax behind the guitar solo.

CTL off = the quiet verse, sitting back. CTL on = the big climactic swell.

## GP-5 settings

Module order: NR → PRE → DST → AMP → CAB → EQ → MOD → DLY → RVB.

**NR — Gate**
- THRE: 12
- Always on. Very low threshold — clean, warm tone throughout, nothing to clean up.

**PRE — Micro Boost — On CTL**
- Gain: 48
- CTL off: bypassed (verse). CTL on: engaged (climax).
- Verse stays understated, well back in the mix. Climax gets a gentle push to help the bass swell along with the guitar solo and the rest of the arrangement.

**DST — Off**
- No drive. This part exists to support, not to draw attention to itself.

**AMP/CAB — NAM SnapTone, slot 53: CleanSVT** (always on)
- Built from the `SVT CLEAN (SVT-CL)` NAM and the Apg810 IR, combined into one snaptone.
- Real Ampeg SVT-CL preamp on its clean setting, into the Apg810 8x10 IR.
- Clean and huge. The SVT 8x10 supplies the size without grit.
- Gain: 49, VOL: 50, Bass: 58, Middle: 52, Treble: 52
- Gain 49: a little under default. This part wants less push than the other CleanSVT patches.
- Bass 58: more low end.
- Middle 52: a touch more midrange.
- Treble 52: a touch more top end.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 53 directly.

**EQ — Bass EQ 2**
- 50Hz: +3, 120Hz: +1, 400Hz: 0, 800Hz: +1, 4.5kHz: +1, VOL: 54
- Always on, same for both CTL states.
- Nearly flat by design — this part isn't fighting for space against a wall of guitars, it's filling a gap left wide open in the arrangement. +3 at 50Hz keeps real low-end weight; everything else stays gentle.

**MOD — B-Chorus (Boss CEB-3)**
- Depth: 15, Rate: 0.3Hz, VOL: 54
- Always on, same for both CTL states.
- A very light touch of period-correct 80s chorus gloss — subtle enough to add sheen without ever reading as an obvious effect, in keeping with the record's polished mid-80s production.

**DLY — Off**
- Not used.

**RVB — Hall — On CTL**
- Mix: 35, Decay: 55, Trail: On
- CTL off: bypassed (verse — dry and restrained). CTL on: engaged (climax).
- Pushed even further than the "Under the Bridge" build — this is one of the most epic, cathedral-scale climaxes in pop music, and the reverb needs real size to do that moment justice.

## CTL summary

- **CTL Off — Verse.** Quiet, restrained, sitting back in the space the arrangement leaves open.
- **CTL On — Climax.** Boost and a big Hall reverb engage together for the huge, gospel-tinged swell behind the guitar solo.
- Engage CTL as the song builds into its final climactic section, and leave it on through to the end.

## Full pedalboard (signal chain order)

**1. Flamma FS-08 Octave — Bypassed**
- Footswitch off. This part needs to stay simple and supportive — no reason to layer octaves on it.

**2. Donner Ultimate Comp — Engaged**
- COMP: 45
- TONE: 50
- LEVEL: 55
- Mode: NORMAL
- Light-to-moderate compression for even, sustained notes through the ballad's slower phrasing. NORMAL mode keeps this warm rather than pushing extra brightness.

**3. Donner Stylish Fuzz — Bypassed**
- Footswitch off. No fuzz anywhere in this patch.

**4. Joyo Tidal Wave — Engaged**
- Drive: 10
- Blend: 20
- Presence: 50
- Level: 55
- Treble: 52
- Middle: 55
- Bass: 58
- Mid-Frequency: 500Hz
- Bass-Shift: 40Hz
- Cab-Sim (DI out): On
- Ground Lift: On
- Used as a clean tone shaper and DI stage, not an overdrive — Drive stays low, Blend stays mostly clean. Bass-Shift at 40Hz keeps the low end full and warm, matching the song's unhurried, spacious feel.

**5. Joyo Narcissus — Bypassed**
- Footswitch off. The GP-5's own light B-Chorus already covers the subtle 80s sheen this patch wants — running a second chorus source would push it past "gloss."

**6. Valeton GP-5** — see settings above.
