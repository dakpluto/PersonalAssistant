# Your Body is a Wonderland — John Mayer (Room for Squares)

GP-5 only build, no pedalboard. HSS Stratocaster.
Mid-tempo, around 82 BPM.
The whole song lives on one tone: warm, clean, compressed, lightly chorused.
No hard lead break — the chorus/outro sections just get a little bigger, not dirtier.
This patch uses a NAM capture for the amp/cab instead of the GP-5's built-in AMP/CAB modules — see below.

## GP-5 Settings

Module order: NR → PRE → DST → AMP → CAB → EQ → MOD → DLY → RVB

**AMP/CAB — replaced by NAM**
- NAM: **Two-Rock John Mayer Signature Prototype Signature #83 + CAB Dumble Steel String Singer**
- Settings: Gain 35, VOL 60, Bass 50, Middle 55, Treble 60
- Not on the device by default. Load this specific NAM file into an N->S slot in Valeton Suite and dial in these five settings by hand — the `.prst` cannot reference it, so this write-up is the only record of the values.
- Chosen because it's literally Mayer's own amp, and it's a clean/low-gain capture — exactly the case where a NAM conversion holds up well on the GP-5, per the usual NAM weighting rule.
- `AMP` and `CAB` are both off (`model: null`) in the `.prst` — they'd otherwise stack a second amp/cab on top of the NAM capture.

**NR — Gate**
- THRE: 20
- Always on. Single coils plus a boost stage need a floor, but 20 is light enough not to chop the fingerstyle note decay.

**PRE — COMP** (Ross Compressor)
- Sustain: 35, VOL: 55
- Always on, both CTL states. This is the backbone of the tone — evens out pick/finger attack for the smooth, consistent clean dynamic the record is built on.

**DST — Green OD** (Tube Screamer / TS-808), very light
- Gain: 25, Tone: 55, VOL: 60
- **CTL switch.** Off = bypassed, On = engaged.
- Not distortion at Gain 25 — a gentle push that lifts presence for the fuller chorus/outro sections without ever crossing into dirty.

**EQ — Guitar EQ 2**
- 100Hz: 0, 500Hz: +2, 1kHz: +1, 3kHz: +3, 6kHz: +2, VOL: 50
- Always on. Modest lift through the upper-mids and treble for single-coil sparkle/quack on top of the warm Dumble-style low end.

**MOD — A-Chorus** (Arion SCH-1)
- Depth: 30, Rate: 1.0Hz, Tone: 55
- Always on, both CTL states. This song's clean tone has a subtle chorus shimmer baked into its identity throughout, not just one section — light enough to sit underneath, present enough to be felt.

**DLY — Off**
Not used. The record's rhythm tone is close and dry; delay isn't part of the signature sound here.

**RVB — Room**
- Mix: 30, Decay: 40, Trail: On
- **CTL switch.** Off = bypassed (dry, tight verses), On = engaged (a touch of room air for the fuller chorus/outro swells).

### CTL Summary
- **CTL Off — Verse/main tone:** Dry, compressed, chorused clean. This is the patch's default — reach for this most of the time.
- **CTL On — Chorus/outro lift:** Same amp, same chorus, with the light Green OD push and Room reverb both kicked in for size. A subtle shift by design — this song doesn't have a hard guitar solo, so "lead" here means bigger, not dirtier.

## Pedalboard

None. Full Board = False — this patch is GP-5 only.
