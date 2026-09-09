# I'm So Sick — Flyleaf

Bass: Harley Benton P/J, 5-string, passive. Full board.
2005 (self-titled *Flyleaf*, same album as "Cassie" — see the guitar patch for that one). ~102 BPM (estimate — no hard chart reference, tempo isn't load-bearing for the tone choices below). This is Flyleaf's heaviest track, and a very different animal from "Cassie": no clean ambient verse here, the whole song is driven and aggressive, tight palm-muted riffing in the verse building to an even bigger, thicker wall in the chorus, with the genre's usual quiet breakdown mid-song for contrast. The bass job is to reinforce that riff, not sit under it — present, gritty, mid-forward.

CTL Off = verse (driven, controlled). CTL On = chorus (bigger, thicker wall).

## Why a NAM here

Darkglass Alpha Omega (Fuzz) — the Omega side, Slot 63. Unlike the precise, tight, buzzsaw-industrial Alpha (Distortion) side already used for RammGrind, the Fuzz/Omega side has a thicker, looser, more organic gated-fuzz character — a better match for Flyleaf's alt-metal/nu-metal-adjacent heaviness than the industrial precision Rammstein's tone wants. Per the current NAM weighting (bass NAMs get strong preference), this beats a built-in AMP/CAB or an IR for this patch.

A NAM can't be footswitched mid-patch (one capture per preset), so the verse-to-chorus dynamic comes from the same mechanism used across this set: a CTL-assigned boost and reverb around a constant NAM voice.

## GP-5 Settings

Module order: NR → PRE → DST → AMP → CAB → EQ → MOD → DLY → RVB

**NR — Gate**
- THRE: 40
- Always on. Real distortion at real gain needs a firm gate — tight palm-muted riffing at this intensity gets ugly between hits without one.

**PRE — Micro Boost** (MXR M133 Micro Amp)
- Gain: 60
- **CTL switch.** Off = bypassed, On = engaged.
- Off (verse) keeps the riff driven but controlled. On (chorus) pushes it into the bigger, thicker wall the payoff needs — a clean lift, not a tone change.

**DST — Off**
Not used. The Alpha Omega Fuzz NAM already carries this patch's entire distortion character — a second GP-5 drive stage on top would just turn it to mush.

**AMP / CAB — Off (NAM in use)**
- **NAM: Darkglass Alpha Omega (Fuzz), Slot 63.**
- Settings: Gain 75, VOL 62, Bass 42, Middle 68, Treble 62.
- Gain pushed hard for real aggression. Bass rolled back to 42 — low end comes from the note and the mix, not amp boom, keeping the tone tight instead of woolly. Middle at 68 for the mid-forward growl that lets the bass reinforce the riff instead of hiding under it. Treble at 62 for buzz/edge on top.
- `AMP` and `CAB` both `model: null` — a NAM always replaces both.

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
