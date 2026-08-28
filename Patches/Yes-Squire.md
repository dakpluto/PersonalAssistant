# Yes — Chris Squire Signature Bass Tone

Chris Squire is the reason "bright, driven bass" is a genre unto itself.
Rickenbacker 4001 into a split rig — one side clean, one side cranked — blended back together.
Pick attack up front, mids pushed for that vocal "growl," top end left wide open.
No scoop. This is not a modern hi-fi bass tone — it's aggressive and present, sitting almost like a rhythm guitar in the mix.

This patch models that blend using the GP-5's own gain stages (boost + Bass OD, blended) instead of running two physical amps, and adds a second, cleaner CTL state for Yes's more open, arpeggiated passages (intros, builds, sections like "Roundabout"'s intro or "And You and I").

## GP-5 Settings

Module order: NR → PRE → DST → AMP → CAB → EQ → MOD → DLY → RVB

**NR — Gate**
- THRE: 25
- Always on. Light gate — just enough to clean up hiss from the boost/OD stack without chopping sustain on longer notes.

**PRE — B-Boost** (Xotic BB Preamp Overdrive)
- Gain: 60, VOL: 55, Bass: 55, Treble: 65
- **CTL switch.** Off = engaged, On = bypassed.
- This is the "second amp" in Squire's split-signal trick — a preamp push that adds grit and top-end bite ahead of the OD stage. Off state (growl) runs it engaged; On state (clean) bypasses it entirely so the clean arpeggiated tone stays uncolored.

**DST — Bass OD** (bass-specific overdrive with wet/dry blend)
- Gain: 65, Blend: 60, VOL: 60, Bass: 55, Treble: 70
- **CTL switch.** Off = engaged, On = bypassed.
- Blend at 60 (not maxed) keeps the fundamental intact under the drive — this is the Blend knob doing the job Squire's amp-splitting rig did physically. Treble pushed hard (70) for the aggressive top-end snap that defines the tone. Off = the driven growl (main Yes sound). On = fully clean for open/arpeggiated sections.

**AMP — Foxy Bass** (Vox AC-100)
- VOL: 60, Bass: 55, Treble: 70
- Always on, both CTL states. Squire ran Vox alongside his Marshall for the top-end snap — Foxy Bass is the closest voicing in this catalog to that brightness. Treble pushed to keep the amp itself bright regardless of which CTL state is active.

**CAB — AMPG 4x10** (Ampeg SVT-410HE)
- VOL: 55
- Always on. Only true bass cab in the catalog — gives the amp sim real low-end foundation under the brightness.

**EQ — Bass EQ 1**
- 33Hz: +8, 150Hz: -5, 600Hz: +8, 2kHz: +12, 8kHz: +15, VOL: 50
- Always on, both states. This is the Squire signature curve: solid low-end anchor (33Hz), a dip at 150Hz to keep it from getting muddy, then a rising shelf from 600Hz up through 8kHz for the vocal midrange growl and the glassy top-end snap. Not scooped — Squire's mids are pushed, not cut.

**MOD — B-Chorus** (Boss CE-2B for Bass)
- Depth: 20, Rate: 0.8Hz, VOL: 50
- **CTL switch.** Off = bypassed, On = engaged.
- Light touch, per the usual MOD rule — this isn't a drenched chorus tone. Off (growl state) stays dry, all the character comes from the drive. On (clean state) adds a light shimmer under the open/arpeggiated playing, which is where Yes recordings do occasionally use a touch of chorus-y width on cleaner bass parts.

**DLY — Off**
Not used. Squire's tone (and Yes's studio bass sound generally) is dry — no delay character associated with the signature tone.

**RVB — Off**
Not used, on either CTL state. Keeping the bass dry and upfront — any room/hall character on a Yes record comes from the mix, not the bass tone itself.

### CTL Summary (GP-5)
- **CTL Off — Driven Squire growl (main tone):** B-Boost + Bass OD both engaged, no chorus. This is the tone for verses, riffs, and anything with real drive and attack — the core Yes bass sound.
- **CTL On — Clean/arpeggiated:** Both gain stages bypassed, light chorus engaged. Use for intros, builds, and open sections where the part needs to breathe and shimmer instead of push.

## Full Pedalboard (signal chain order)

**1. Flamma FS-08 Octave — Bypassed, whole patch.**
Squire didn't build his tone around octave layering. Leave the four octave knobs at 0 and Dry at 100 so there's no surprise if the footswitch gets bumped; footswitch stays off throughout.

**2. Donner Ultimate Comp — Engaged, whole patch.**
- COMP: 45
- TONE: 55
- LEVEL: 55
- Mode: TREBLE
Sits ahead of everything, evens out pick attack before the drive stages — Squire played with a pick, hard, and compression is part of keeping that attack consistent without losing note-to-note evenness. TREBLE mode keeps pick attack audible feeding into the darker Ampeg-voiced cab downstream. Runs continuously through both CTL states — it's gluing dynamics, not part of the growl/clean split.

**3. Donner Stylish Fuzz — Bypassed, whole patch.**
Squire's tone is driven, not fuzzed — a full fuzz wall would bury the note definition his lines depend on. True bypass throughout.

**4. Joyo Tidal Wave — Engaged for CTL Off (growl) sections, bypassed for CTL On (clean) sections.**
- Drive: 40
- Blend: 55
- Presence: 60
- Level: 55
- Treble: 60, Middle: 55, Bass: 50
- Mid-Frequency toggle: 500Hz (bass body, not pick-attack cut)
- Bass-Shift toggle: 80Hz (tighter low end — keeps this from stacking mud with the GP-5's own Bass OD)
- Cab-Sim (DI out): On — useful if this patch ever gets DI'd to a board or interface
- Ground Lift: Off unless hum shows up in a given room
This is the second grit stage in the "split signal" trick — physically bypass it for the clean CTL-on sections (step off the footswitch) so nothing colors the open/arpeggiated tone. Engage it for CTL-off growl sections; it stacks with the GP-5's own PRE/DST to build the layered, amp-splitting character of the real rig instead of relying on one gain stage alone.

**5. Joyo Narcissus — Bypassed, whole patch.**
The GP-5's own B-Chorus module (CTL On state) is the primary chorus voice for this patch. Per the pedal's own notes, don't run both at once — stacking two choruses just gets mushy. True bypass throughout.

**6. Valeton GP-5 — as detailed above.**

## Footswitch Choreography

- **Verses / riffs / driven sections (main Yes tone):** GP-5 CTL off, Tidal Wave engaged. Comp running underneath the whole time. This is the core patch — reach for this by default.
- **Intros / builds / open arpeggiated sections:** GP-5 CTL on, Tidal Wave bypassed (step off at the same moment you hit CTL). Comp stays on.
- Octave and Fuzz stay bypassed for the entire patch — this build is two gain stages (PRE boost + Bass OD) plus one grit pedal (Tidal Wave), not a texture pile.
