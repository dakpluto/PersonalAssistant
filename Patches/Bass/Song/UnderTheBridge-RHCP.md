# Under the Bridge — Red Hot Chili Peppers

Bass: Harley Benton P/J, 5-string, passive. Full board.
From *Blood Sugar Sex Magik* (1991), ~85 BPM.
Flea's part here is famously the opposite of his usual percussive slap style — warm, restrained, melodic, almost guitar-like. Verses stay quiet and intimate, following the chords under Anthony Kiedis's vocal. Then the outro opens into one of the most cathartic moments in the band's catalog, the choir-backed "under the bridge downtown" swell.

CTL off = the quiet, restrained verse. CTL on = the huge choir-backed outro swell.

## GP-5 settings

Module order: NR → PRE → DST → AMP → CAB → EQ → MOD → DLY → RVB.

**NR — Gate**
- THRE: 12
- Always on. Very low threshold — this tone is clean and quiet from top to bottom, nothing to clean up.

**PRE — Micro Boost — On CTL**
- Gain: 50
- CTL off: bypassed (verse). CTL on: engaged (outro).
- Verse stays soft and understated. Outro gets a clean push to help the bass swell along with the choir and full band.

**DST — Off**
- No drive anywhere. This is a clean, emotional tone top to bottom — the opposite of a typical Flea part.

**AMP — Bellman 59N (Fender 59 Bassman Normal, Clean)**
- Gain: 28, PRES: 55, VOL: 65, Bass: 58, Middle: 52, Treble: 48
- Always on, same for both CTL states.
- A warm, vintage Fender clean voicing rather than a modern bass amp — matches how uncharacteristically warm and unadorned this particular Flea performance is. Gain kept low for genuine clean headroom.

**CAB — User IR 2 (Apg115410)**
- VOL: 60
- Always on, same for both CTL states.
- Summed Ampeg Heritage B-15 + HLF 410 — flat, thunderous response that gives this warm tone real body without coloring it further. Works equally well for the quiet verse and the huge outro swell.

**EQ — Bass EQ 2**
- 50Hz: +3, 120Hz: +1, 400Hz: 0, 800Hz: +1, 4.5kHz: +2, VOL: 55
- Always on, same for both CTL states.
- A gentle, mostly-flat curve — this tone doesn't need aggressive shaping. +3 at 50Hz keeps real low-end weight, +2 at 4.5kHz adds just enough presence to keep the melodic line clear without brightening it past "warm."

**MOD — Off**
- No modulation. This part is plain and direct on the record — texture would work against its sincerity.

**DLY — Off**
- Not used.

**RVB — Hall — On CTL**
- Mix: 32, Decay: 50, Trail: On
- CTL off: bypassed (verse — dry and intimate). CTL on: engaged (outro).
- Hall, and pushed further than usual (Mix 32, Decay 50) — this outro is genuinely massive and cathartic, one of the biggest emotional swells in the band's catalog, and it needs a reverb big enough to actually open the space up for that.

## CAB IR — Apg115410 (Slot 2)

- Summed Ampeg Heritage B-15 + HLF 410, confirmed loaded on User IR slot 2. Flat, thunderous response — a solid, uncolored foundation for a tone built entirely around warmth and restraint rather than aggressive EQ shaping.
- Encoded directly into the `.prst` as a real, active CAB reference (`User IR 2`) — no manual loading needed for this one.

## CTL summary

- **CTL Off — Verse.** Quiet, warm, restrained. Sits back and follows the chords.
- **CTL On — Outro.** Boost and a big Hall reverb engage together, opening the tone up to match the choir-backed climax.
- Engage CTL right as the "under the bridge downtown" outro begins, and leave it on through to the end.

## Full pedalboard (signal chain order)

**1. Flamma FS-08 Octave — Bypassed**
- Footswitch off. This melodic line needs a single clean fundamental — no reason to layer octaves on such a restrained, intimate part.

**2. Donner Ultimate Comp — Engaged**
- COMP: 42
- TONE: 50
- LEVEL: 55
- Mode: NORMAL
- Light-to-moderate compression keeps the melodic phrasing smooth without squashing the natural dynamics of the performance. NORMAL mode over TREBLE — this tone wants warmth, not extra brightness.

**3. Donner Stylish Fuzz — Bypassed**
- Footswitch off. No fuzz anywhere near this patch.

**4. Joyo Tidal Wave — Engaged**
- Drive: 10
- Blend: 20
- Presence: 50
- Level: 55
- Treble: 50
- Middle: 55
- Bass: 58
- Mid-Frequency: 500Hz
- Bass-Shift: 40Hz
- Cab-Sim (DI out): On
- Ground Lift: On
- Used purely as a clean-leaning tone shaper and DI stage, not an overdrive — Drive stays low and Blend stays mostly clean. Bass-Shift at 40Hz keeps the low end full and warm rather than tight, matching this song's unhurried, emotional feel.

**5. Joyo Narcissus — Bypassed**
- Footswitch off. No chorus — matches the MOD-off call on the GP-5. Plain, direct, warm tone throughout.

**6. Valeton GP-5** — see settings above.
