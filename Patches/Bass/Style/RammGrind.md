# RammGrind — Industrial Metal Bass (Rammstein Style)

**Rebuild 2026-09-08:** now uses the Darkglass Alpha Omega (Distortion) NAM (slot 62) in place of the GP-5's own DST/AMP/CAB. Same style target, same CTL concept — the tone-generation approach changed, the musical intent didn't.

## Style reference

This patch chases Oliver "Ollie" Riedel's Rammstein bass tone.

Not a "bass tone" in the usual sense.
It's a distorted low-end doubling of the guitar riff, built to be one wall of sound, not a separate instrument.
Tight, percussive, mid-forward, buzzsaw-grindy — not boomy, not scooped.

Same territory: Paul Barker (Ministry), Jeordie White / Twiggy Ramirez (Marilyn Manson) — industrial and industrial-adjacent metal bassists who treat the bass as a distortion source that reinforces the guitar wall, not a low-end cushion under it.

Two CTL states cover the dynamic range this style actually uses:
verse/groove sections stay controlled and tight, choruses and breakdown hits get pushed harder.
Rammstein's mix rarely goes "clean" — even the restrained sections carry grit. Only the amount of push changes.

## Why a NAM this time

The Darkglass Alpha Omega pedal's Alpha (distortion) side is built for exactly this job — precise, aggressive, digital-flavored saturation designed to cut through a wall of guitars, not a vintage-fuzzy or subtle-boost character. The capture chain (`Alpha Omega (Alpha Side) -> Aguilar DB 751 -> Darkglass DG412ES cabinet -> Shure SM7B`) already bakes in pedal, amp, and cab together — GP-5's own DST/AMP/CAB modules step aside entirely (`model: null` on all three) rather than layering a second distortion stage on top of one that's already captured mid-chain.

That changes the gain-staging logic from the original GP-5-AMP-based build: previously, Bass OD (GP-5 DST) plus a real SVT amp model did the core distortion work, fed by a fairly hot board (Fuzz + Tidal Wave both pushed hard). Now the NAM itself is already a full distorted-amp-through-cab capture, so the board pedals ahead of it are dialed back from the original — they're doing pre-glue/thickening duty, not a second full gain stage, to avoid stacking three-deep distortion into mush. The layered-pedals concept itself stays (Ollie Riedel really does stack drives), just with headroom left for the NAM to be the dominant distortion voice instead of competing with it.

## GP-5 module chain

Module order is fixed: NR, PRE, DST, AMP, CAB, EQ, MOD, DLY, RVB.

### NR — Gate
- THRE: 45
- Always on.
- Slightly higher than the original build's 42 — a real amp+cab+mic NAM capture carries a touch more inherent noise floor than a synthetic AMP sim, and this patch is running hotter into it from the board. Still tight enough to keep staccato mutes dead silent between hits.

### PRE — Micro Boost
- Gain: 70
- CTL switch. Off at rest, engaged on CTL press.
- CTL off: leaner grind — the NAM's own baked-in distortion carries the tone alone. Covers verses and groove sections.
- CTL on: extra clean gain shoved into the NAM's input for choruses, breakdowns, and big unison hits — thickens and compresses without changing color. Exactly the same job as the original build; a clean boost ahead of a drive stage works the same whether that drive stage is GP-5's own DST or a NAM capture downstream.

### DST — Off
- Not used. The Alpha Omega distortion is already baked into the NAM capture — running GP-5's own Bass OD in front of an already-distorted amp+cab capture doubles up on the wrong side of the signal chain and just turns the tone to fizz. The NAM *is* this patch's DST stage now, functionally.

### AMP / CAB — Off (NAM in use)
- **NAM: Darkglass Alpha Omega (Distortion), Slot 62.**
- Settings: Gain 70, VOL 65, Bass 45, Middle 70, Treble 65.
- Gain 70 keeps the buzzsaw edge the Alpha side is known for. Bass held at 45, not cranked — same logic as the original patch's DST stage: low end comes from the note and the mix, not amp/cab boom, keeping the tone tight instead of woolly. Middle pushed to 70 for the growl-and-cut presence that lets the bass punch through a wall of distorted guitars. Treble at 65 for the string-noise/attack edge on top.
- `AMP` and `CAB` both `model: null` — a NAM always replaces both.

### EQ — Bass EQ 1
- 33Hz: -8
- 150Hz: -6
- 600Hz: +10
- 2kHz: +10
- 8kHz: +4
- VOL: 55
- Always on.
- Same shaping logic as the original build: sub and low-mid boom both cut hard (this style has zero interest in sub weight — it competes with the kick and turns the wall to mud), 600Hz/2kHz pushed for the grinding midrange bite that cuts on systems that can't reproduce much below 80Hz live. 8kHz pulled back slightly from the original's +6 to +4 — the NAM's own captured cab/mic character already contributes some top-end edge, so less additional EQ push was needed to avoid fizz stacking on fizz.

### MOD / DLY / RVB — Off
- No modulation, no delay, no reverb.
- This style is dry and direct by design — a chorus or delay would soften the attack and blur the tightness the whole patch is built around. Unchanged from the original build.

## Full pedalboard (signal chain order)

The `.prst` only encodes the GP-5's own 9 modules plus the NAM. Everything below is manual — set it on the pedals themselves; it's not in the file.

### 1. Flamma FS-08 Octave — bypassed by default
- -2OCT: 0, -OCT: 20, +OCT: 0, +2OCT: 0, Dry: 100
- Footswitch off for the main tone — the 5-string's low B already covers the fundamental range this style needs, and a sub-octave voice under an already-distorted signal turns to mud fast.
- Optional engage: stomp on for big stadium-ending "wall" hits (the "Sonne" / "Mein Herz Brennt" outro-swell move) — the modest -OCT level at 20 adds weight without swallowing the note.

### 2. Donner Ultimate Comp — engaged
- COMP: 60
- TONE: 55
- LEVEL: 55
- Mode: TREBLE
- Always on. Squashes pick/finger attack into a consistent, aggressive, always-the-same-level groove — industrial rhythm parts need to sound machine-tight, not human-dynamic. TREBLE mode keeps attack articulate before it hits the fuzz and Tidal Wave downstream. Dialed back slightly from the original's 65 — less headroom needed to squash since the NAM contributes its own saturation-driven evenness further down the chain.

### 3. Donner Stylish Fuzz — engaged
- Sustain: 42
- Treble: 58
- Bass: 35
- Volume: 55
- Always on, but pulled back from the original build's Sustain 55. With the NAM now doing the heavy-lifting distortion job, this fuzz stage's role changed from "half the signature grind" to "pre-glue texture feeding into an already-hot NAM" — pushing it as hard as before stacks a third full gain stage and collapses note definition into undifferentiated noise. Bass still rolled back on the pedal itself, same reasoning as always: keep the low end controlled at the source.

### 4. Joyo Tidal Wave — engaged
- Drive: 50
- Blend: 50
- Presence: 55
- Level: 60
- Treble: 55
- Middle: 60
- Bass: 48
- Mid-Frequency: 1000Hz
- Bass-Shift: 80Hz
- Cab-Sim (DI out): On
- Ground Lift: Off (engage only if hum shows up on the DI feed)
- Always on — still the main preamp/drive stage ahead of the GP-5, but Drive and Blend both dialed back from the original's 70/65. Same reasoning as the fuzz stage: the NAM is now the dominant, already-saturated voice in the chain, so this pedal's job shifted from "second heavy gain stage" to "pre-drive glue and consistent DI feed." Mid-Frequency stays at 1000Hz (pick/finger attack and cut-through, not round low-mid body) and Bass-Shift stays at 80Hz (tight low end, doesn't stack mud ahead of the NAM).

### 5. Joyo Narcissus — bypassed
- Mode: Vintage, Width/Depth/Rate: low (default light-chorus values)
- Footswitch off. This style is dry and direct — no chorus anywhere in the signal. Left dialed to safe defaults in case a future patch wants it, but it stays off here.

### 6. Valeton GP-5
- Settings as documented above, including the Darkglass Alpha Omega NAM in Slot 62.

## When to engage what

- **Base tone (CTL off):** Gate, Comp, Fuzz, Tidal Wave, NAM (Alpha Omega), EQ — everything on except the PRE boost and the octave. This is the sound for the whole song, verses included. It's already distorted and aggressive at rest — that's the point.
- **CTL on:** Punch in for choruses, big unison stabs, and breakdown hits — pushes the NAM's input harder via the Micro Boost for a thicker, more compressed wall.
- **Octave stomp:** Reserve for song-ending swells/outros only — not a default-on effect.
