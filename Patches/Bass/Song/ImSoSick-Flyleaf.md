# I'm So Sick — Flyleaf

Bass: Harley Benton P/J, 5-string, passive. Full board.
2005 (self-titled *Flyleaf*, same album as "Cassie" — see the guitar patch for that one). ~102 BPM (estimate — no hard chart reference, tempo isn't load-bearing for the tone choices below). This is Flyleaf's heaviest track, and a very different animal from "Cassie": no clean ambient verse here, the whole song is driven and aggressive, tight palm-muted riffing in the verse building to an even bigger, thicker wall in the chorus, with the genre's usual quiet breakdown mid-song for contrast. The bass job is to reinforce that riff, not sit under it — present, gritty, mid-forward.

CTL Off = verse (driven, controlled). CTL On = chorus (bigger, thicker wall).

## GP-5 Settings

Module order: NR → PRE → DST → AMP → CAB → EQ → MOD → DLY → RVB

**NR — Gate**
- THRE: 40
- Always on. Real distortion at real gain needs a firm gate — tight palm-muted riffing at this intensity gets ugly between hits without one.

**PRE — Micro Boost** (MXR M133 Micro Amp)
- Gain: 60
- **CTL switch.** Off = bypassed, On = engaged.
- Off (verse) keeps the riff driven but controlled. On (chorus) pushes it into the bigger, thicker wall the payoff needs — a clean lift, not a tone change.

**DST — Bass OD**, always on.
- Gain: 72, Blend: 78, VOL: 65, Bass: 45, Treble: 60 — pushed hard for real aggression, blended nearly-wet.

**AMP/CAB — NAM SnapTone, slot 58: HairySVT** (always on)
- Built from the `SVT SANS HAIRY DRIVE (SVT-CL)` NAM and the Sunn215 IR, combined into one snaptone.
- Real Ampeg SVT-CL with the hairy drive setting, into the Sunn215 2x15 IR.
- Heavy, fuzzy nu-metal bass. Hairy SVT drive.
- Gain: 51, VOL: 50, Bass: 42, Middle: 68, Treble: 62
- Gain 51: a little over default. This part wants more push than the other HairySVT patches.
- Bass 42: low end pulled back noticeably.
- Middle 68: Mid-forward growl that lets the bass reinforce the riff instead of hiding under it.
- Treble 62: Buzz/edge on top.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 58 directly.

**EQ — Bass EQ 1**
- 33Hz: -4, 150Hz: -3, 600Hz: +6, 2kHz: +8, 8kHz: +3, VOL: 55
- Always on, both CTL states. Sub and low-mid both cut — this song's wall of sound has no use for sub weight, it just competes with the kick. 600Hz and 2kHz both pushed for the grinding midrange presence that cuts through a dense alt-metal mix. Not quite as extreme a cut/push as the RammGrind patch — Flyleaf's tone is heavy but not quite as scooped-and-precise as Rammstein's industrial buzzsaw.

**MOD / DLY — Off**
No modulation, no delay. Tight, dry, direct — a heavy riff like this doesn't want anything blurring its attack.

**RVB — Room**
- Mix: 20, Decay: 35, Trail: On
- **CTL switch.** Off = bypassed, On = engaged.
- Off (verse) stays tight and dry. On (chorus) opens up just enough to add scale to the bigger wall, without turning ambient — this is still a heavy, present tone even at its biggest, not a wash.

### CTL Summary (GP-5)
- **CTL Off — Verse:** Micro Boost and Room both bypassed. Driven and tight, reinforcing the palm-muted riff.
- **CTL On — Chorus:** Micro Boost and Room both engaged. A real push plus a touch of space for the thicker wall.

## Full Pedalboard

Signal chain order: Flamma FS-08 Octave → Donner Ultimate Comp → Donner Stylish Fuzz → Joyo Tidal Wave → Joyo Narcissus → Valeton GP-5.

**Flamma FS-08 Octave — bypassed**
- All octave knobs (-2OCT, -OCT, +OCT, +2OCT) at 0, Dry at 100
- No octave texture anywhere in this song.

**Donner Ultimate Comp — engaged**
- COMP: 55, TONE: 55, LEVEL: 55, Mode: TREBLE
- Always on. Squashes pick/finger attack into a consistent, driving level for tight palm-muted riffing. TREBLE mode keeps attack articulate before it hits the already-hot NAM.

**Donner Stylish Fuzz — bypassed**
Not used. The Alpha Omega Fuzz NAM already supplies this patch's entire distortion character — stacking a board fuzz stage on top of an already-fuzz-voiced NAM would just turn the tone to mush.

**Joyo Tidal Wave — engaged**
- Drive: 25, Blend: 35, Presence: 55, Level: 58
- Treble: 55, Middle: 60, Bass: 50
- Mid-Frequency toggle: 1000Hz (pick/finger attack and cut-through — this is a tight, busy alt-metal mix, not a spacious ballad)
- Bass-Shift toggle: 80Hz (tight low end for a dense full-band mix)
- Cab-Sim (DI out): On
- Ground Lift: Off (only flip on if a specific room throws hum)
- Light-moderate glue and a consistent DI feed — the NAM carries the actual distortion character, this pedal isn't a second full gain stage.

**Joyo Narcissus — bypassed**
No modulation anywhere in this patch — dry and direct by design.

**Valeton GP-5**
See GP-5 settings above.

## Footswitch Choreography

- **Verse:** GP-5 CTL off. Comp and Tidal Wave running underneath, unchanged.
- **Chorus:** GP-5 CTL on. Step on it going into the bigger wall, off again coming back down to the next verse.
