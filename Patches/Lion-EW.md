# Lion — Elevation Worship (CCM / Modern Worship)

HSS Stratocaster. Full board.
Album-level build, modeled on the overall guitar approach across Elevation Worship's *Lion* (2022) and their wider catalog — the modern CCM "wall of sound": ambient, heavily modulated clean tones under verses, swelling into a bigger, saturated anthem tone for choruses and lead lines, all of it soaked in delay and reverb the whole time.
That wash never goes away between the two states — only the gain does. That's the core design decision here: MOD/DLY/RVB/EQ/AMP stay fixed and always on, CTL only swaps the gain stages.

## GP-5 Settings

Module order: NR → PRE → DST → AMP → CAB → EQ → MOD → DLY → RVB

**AMP/CAB — uses an IR for CAB**
- AMP: **Dark Twin** (Fender 65 Twin Reverb) — Gain 35, VOL 65, Bass 50, Middle 60, Treble 55, Bright off.
- IR: **American Twin 2x12 Medium Mix** (from `IRs/ir.md`) — the suggested pairing for Dark Twin in that file. Medium blend chosen specifically because this cab has to work for both CTL states: Bright Mix would get brittle once the drive stages kick in for the anthem state, Dark Mix would dull the ambient clean shimmer too much.
- `CAB` is off (`model: null`) in the `.prst`, same reasoning as a NAM: no way to know which of the 20 `User IR` slots this file is sitting in on the device, or whether it's loaded at all right now. Load **American Twin 2x12 Medium Mix** into a `User IR` slot in Valeton Suite and point the device's CAB block at it before using this patch.
- Bright switch on the amp itself is left off — the American Twin IR (JBL D120F) is already a hi-fi, extended-top-end speaker; stacking the amp's own bright switch on top would get harsh once EQ and the 6kHz lift are added downstream.

**NR — Gate**
- THRE: 20
- Always on. Light — this patch lives on long decaying swells and delay/reverb tails, so the gate can't be aggressive enough to chop them off.

**PRE — Boost** (Xotic EP Booster)
- Gain: 60, +3dB: On, Bright: On
- **CTL switch.** Off = bypassed, On = engaged.
- The "size" switch for the anthem state — clean, transparent volume/edge boost that pushes the amp and DST harder without adding its own character. Off for the ambient rhythm sound, on for the lead/chorus lift.

**DST — Green OD** (Tube Screamer / TS-808)
- Gain: 40, Tone: 60, VOL: 65
- **CTL switch.** Off = bypassed, On = engaged.
- Moderate, not metal — this is the smooth, singing mid-gain crunch that defines the modern worship "anthem" guitar tone, not a rock distortion. Off for rhythm, on for lead, stacking with the Boost and the King of Kings right channel (see pedalboard) for the full swell.

**EQ — Guitar EQ 2**
- 100Hz: -3, 500Hz: -2, 1kHz: 0, 3kHz: +4, 6kHz: +5, VOL: 50
- Always on. Low end trimmed so the guitar doesn't fight bass/pads in a dense worship mix; slight 500Hz cut to keep it out of the boxy zone; 3kHz/6kHz lifted for the airy, cutting shimmer that sits on top of a big band mix without needing raw volume.

**MOD — A-Chorus** (Arion SCH-1)
- Depth: 55, Rate: 0.6Hz, Tone: 60
- Always on, both CTL states. Heavier than this workflow's usual light-touch MOD default — deliberately, because a drenched, obvious chorus shimmer is the whole point of this style, not an accident. This is doing a lot of the "ambient wall" work by itself.

**DLY — Tape**
- Mix: 35, Time: 450ms, F.Back: 35, Trail: On
- Always on, both CTL states. Long, warm, saturated repeats — this genre's guitar sound is inseparable from delay. Same delay under both the quiet rhythm parts and the big lead swells, which is exactly how these records are built.

**RVB — Sweet Space**
- Mix: 40, Decay: 70, Damp: 40, Mod: 35, Trail: On
- Always on, both CTL states. Long, modulated, spacious reverb — the Mod parameter adds a subtle shimmer/movement to the tail that's very characteristic of this modern-CCM ambient sound. This is the "room" the whole track lives in.

### CTL Summary (GP-5)
- **CTL Off — Rhythm (verses, ambient sections):** Clean Dark Twin/American Twin tone, no PRE boost, no drive. The wash (chorus/delay/reverb) carries the sound. This is the main texture of the patch.
- **CTL On — Lead (choruses, anthem sections):** Boost + Green OD both kick in on top of the same amp/cab/wash, pushing into a bigger, saturated, sustained tone — same ambient character, just louder and driven. Pair with the King of Kings right channel for the full swell.

## Full Pedalboard (signal chain order)

**1. Flamma FS-08 Octave — Engaged, light shimmer layer, whole song.**
- +OCT: 25, all other octave knobs (-2OCT, -OCT, +2OCT): 0
- Dry: 80
A subtle octave-up layer underneath the dry signal — this is a real Elevation Worship production trick, a quiet shimmer pad sitting under the clean arpeggios. Kept low enough (+OCT 25) that it reads as texture, not a separate voice. Since it's polyphonic and best on sustained material, it works well here because this patch is built around sustained chords and swells, not fast lead runs.

**2. Donner Ultimate Comp — Engaged, whole song.**
- COMP: 50
- TONE: 55
- LEVEL: 55
- Mode: NORMAL
Evens out dynamics for sustained ambient swells — critical for this style, where notes need to bloom and hold evenly under all that delay/reverb. NORMAL mode (not TREBLE) because the EQ module and MOD/DLY/RVB chain already add plenty of top end; stacking more brightness pre-drive would get harsh once the Boost/Green OD kick in.

**3. Donner Stylish Fuzz — Bypassed, whole song.**
Not a fuzz style — the anthem lift comes from smooth, singing overdrive (Boost + Green OD + King of Kings), not garage fuzz character. True bypass throughout.

**4. Joyo King of Kings — Left channel engaged whole song, Right channel engaged only for CTL On / lead sections.**

*Left channel (always on — low-gain glue):*
- Volume: 55
- Gain: 20
- Tone: 55
- Clipping toggle: softer setting
- Feedback toggle: standard setting

A quiet, always-on push that adds warmth and a little extra harmonic content under the clean ambient tone — very common in modern worship rigs, an always-on low-gain stage that "glues" the tone even before anything else engages.

*Right channel (CTL On / lead only):*
- Volume: 65
- Gain: 55
- Tone: 60
- Clipping toggle: harder setting
- Feedback toggle: higher setting

Stacks with the left channel, the GP-5's Boost, and Green OD for the full anthem swell — this is the extra saturation and sustain that makes the chorus/lead sections feel huge without turning harsh. Step on together with the GP-5 CTL switch.

**5. Joyo Narcissus — Bypassed, whole song.**
The GP-5's own A-Chorus (always on) is the primary chorus/shimmer voice for this patch, already pushed harder than usual on purpose. Stacking a second chorus pedal on top would turn the wash to mud. True bypass throughout.

**6. Valeton GP-5 — as detailed above.**

## Footswitch Choreography

- **Rhythm / verses / ambient sections:** GP-5 CTL off, King of Kings right channel off. Comp and Octave shimmer running underneath the whole time.
- **Chorus / lead / anthem sections:** GP-5 CTL on (engages PRE Boost + Green OD together) at the same moment you step on the King of Kings right channel. All three come off together when dropping back to a verse/rhythm section.
- Fuzz and Narcissus stay bypassed for the entire patch — the wash comes from the GP-5's own MOD/DLY/RVB, not from stacking extra modulation/fuzz pedals.
