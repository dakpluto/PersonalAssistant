# La Grange — ZZ Top

Bass: Harley Benton P/J, 5-string, passive. Full board.
From *Tres Hombres* (1973), ~144 BPM shuffle.
Dusty Hill's part is a rolling boogie-shuffle riff that tracks Billy Gibbons' famous fuzz-guitar hook almost note for note. It stays in the pocket the whole song — no big dynamic swing like a verse/chorus song — the only real lift is the guitar solo and the extended outro vamp, where the band leans harder.

CTL off = the main boogie groove. CTL on = the extra push for the solo and outro.

## GP-5 settings

Module order: NR → PRE → DST → AMP → CAB → EQ → MOD → DLY → RVB.

**NR — Gate**
- THRE: 20
- Always on. Low threshold — this tone stays close to clean, nothing to gate out except string noise between notes.

**PRE — Off**
- Compression duties are handled by the Donner Ultimate Comp on the board (see below) — no need to stack a second comp stage here.

**DST — Bass OD — On CTL**
- Gain: 55, Blend: 65, VOL: 62, Bass: 60, Treble: 50
- CTL off: bypassed (main groove). CTL on: engaged (solo/outro).
- Blend keeps 35% of the clean signal in the mix even with the OD engaged, so the fundamental doesn't disappear when this kicks in. This is the extra grind for when Gibbons opens up on the solo — the main groove doesn't need it, it already has enough bite from the amp and the Tidal Wave up front.

**AMP/CAB — NAM SnapTone, slot 57: GrittySVT** (always on)
- Built from the `SVT PUSHED (SVT-CL)` NAM and the Apg810 IR, combined into one snaptone.
- Real Ampeg SVT-CL pushed into grit, into the Apg810 8x10 IR.
- Dusty Hill's boogie growl. Pushed SVT gives the edge-of-breakup grit.
- Gain: 55, VOL: 50, Bass: 60, Middle: 58, Treble: 50
- Gain 55: noticeably over default. This part wants more push than the other GrittySVT patches.
- Bass 60: more low end.
- Middle 58: more midrange.
- Treble 50: flat.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 57 directly.

**EQ — Bass EQ 1**
- 33Hz: +4, 150Hz: -2, 600Hz: +3, 2kHz: +4, 8kHz: +2, VOL: 55
- Always on, same for both CTL states.
- +4 at 33Hz keeps real low-end weight under the shuffle. -2 at 150Hz trims the boxiness a pushed SVT stacks up there. +3 at 600Hz and +4 at 2kHz add the pick/finger attack and midrange snarl that lets this cut alongside a fuzz guitar without getting swallowed by it.

**MOD — Off**
- No modulation. This is a straight, dry blues-rock groove — nothing here calls for chorus or vibrato.

**DLY — Off**
- Not used. Tres Hombres is a tight, dry-sounding record — no delay on this part.

**RVB — Off**
- Not used, for the same reason as DLY. Keeping this bone-dry matches the original record's tight, close-mic'd production.

## CTL summary

- **CTL Off — Main groove.** The boogie shuffle riff, all the way through verses and choruses. Warm, punchy SVT growl, no extra drive stage.
- **CTL On — Solo / outro.** Bass OD kicks in for extra push and grind, matching the extra intensity when Gibbons takes the solo and through the extended outro vamp.
- Engage CTL going into the guitar solo section, leave it on through the outro, back off for a quieter return to the main riff if the arrangement calls for it.

## Full pedalboard (signal chain order)

**1. Flamma FS-08 Octave — Bypassed**
- Footswitch off. This riff needs to stay a single, clean fundamental — an octave stack would clutter the boogie pattern's picking.

**2. Donner Ultimate Comp — Engaged**
- COMP: 50
- TONE: 55
- LEVEL: 60
- Mode: TREBLE
- Moderate compression evens out the shuffle's constant eighth-note picking without squashing the natural attack. TREBLE mode keeps that attack audible before it hits the Tidal Wave and the GP-5's own gain stages.

**3. Donner Stylish Fuzz — Bypassed**
- Footswitch off. The fuzz character in this song belongs to Gibbons' guitar — stacking a bass fuzz on top would clash with it instead of complementing it. The GP-5's own Bass OD (on CTL) covers the bass's own extra grind when it's needed.

**4. Joyo Tidal Wave — Engaged**
- Drive: 40
- Blend: 60
- Presence: 55
- Level: 60
- Treble: 55
- Middle: 60
- Bass: 55
- Mid-Frequency: 500Hz
- Bass-Shift: 80Hz
- Cab-Sim (DI out): Off
- Ground Lift: Off
- This is the baseline grit for the main groove — moderate Drive with a 60% Blend keeps the clean fundamental intact while adding the edge-of-breakup growl the boogie riff wants. Bass-Shift at 80Hz keeps the low end tight enough to stay articulate against the drums; Mid-Frequency at 500Hz reinforces the "bass body" push, matching the AMP's own midrange character.

**5. Joyo Narcissus — Bypassed**
- Footswitch off. No chorus — matches the MOD-off call on the GP-5. Dry, direct blues-rock tone throughout.

**6. Valeton GP-5** — see settings above.
