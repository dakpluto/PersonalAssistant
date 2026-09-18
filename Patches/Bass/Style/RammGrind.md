# RammGrind — Industrial Metal Bass (Rammstein Style)

**Rebuild 2026-09-08:** switched to the Darkglass Alpha Omega (Distortion) NAM (slot 62) in place of the GP-5's own DST/AMP/CAB.
**Rebuild 2026-09-18:** switched back. NAMs are off for now — Michael is hitting a volume issue with the Valeton's N->S slot itself (device-side bug, not a tooling problem). Back to real GP-5 AMP/DST plus a loaded IR for CAB (the bass IR slots didn't exist yet at the original 2026-09-08 rebuild — Hartke410 now covers the job the built-in AMPG 4x10 cab used to). Settings below are the original real-AMP design, restored — same style target, same CTL concept throughout all three builds.

## Style reference

This patch chases Oliver "Ollie" Riedel's Rammstein bass tone.

Not a "bass tone" in the usual sense.
It's a distorted low-end doubling of the guitar riff, built to be one wall of sound, not a separate instrument.
Tight, percussive, mid-forward, buzzsaw-grindy — not boomy, not scooped.

Same territory: Paul Barker (Ministry), Jeordie White / Twiggy Ramirez (Marilyn Manson) — industrial and industrial-adjacent metal bassists who treat the bass as a distortion source that reinforces the guitar wall, not a low-end cushion under it.

Two CTL states cover the dynamic range this style actually uses:
verse/groove sections stay controlled and tight, choruses and breakdown hits get pushed harder.
Rammstein's mix rarely goes "clean" — even the restrained sections carry grit. Only the amount of push changes.

## Back to real AMP/DST/CAB

With NAMs off, the gain-staging logic goes back to the original build: Bass OD (GP-5 DST) plus a real Classic Bass (Ampeg SVT) amp model do the core distortion work, fed by a genuinely hot board (Fuzz + Tidal Wave both pushed hard, same values as the original). CAB is the one thing that improves on the original — Hartke410 (a loaded IR, bright and aggressive, ir.md's own recommended pairing for a driven bass tone running Bass OD) stands in for the built-in AMPG 4x10, which was the only option back when this patch was first built (the bass IR slots didn't exist yet). Same layered-pedals concept throughout: Ollie Riedel really does stack drives, and this build lets three gain stages (Fuzz, Tidal Wave, Bass OD) do that job together, backed by a real amp instead of a single all-in-one capture.

## GP-5 module chain

Module order is fixed: NR, PRE, DST, AMP, CAB, EQ, MOD, DLY, RVB.

### NR — Gate
- THRE: 42
- Always on. Industrial rhythm playing is staccato and palm-muted hard. A tight gate keeps the mutes dead silent between hits instead of smearing into a wash of fuzz noise.

### PRE — Micro Boost
- Gain: 70
- CTL switch. Off at rest, engaged on CTL press.
- CTL off: leaner grind — DST alone drives the tone. Covers verses and groove sections.
- CTL on: extra clean gain shoved into the DST stage for choruses, breakdowns, and big unison hits — thickens and compresses the distortion without changing its color.

### DST — Bass OD
- Gain: 78
- Blend: 70
- VOL: 60
- Bass: 45
- Treble: 68
- Always on. This is the core of the patch — modeled on the Boss ODB-3, a real metal-bass-distortion staple. High Gain gets the buzzsaw edge. Blend at 70 keeps it mostly wet but doesn't fully drown the dry fundamental — that's what keeps note definition intact under heavy distortion instead of collapsing into undifferentiated fuzz. Bass rolled back to 45 on the pedal itself so the low end doesn't get flabby before it hits the amp stage — let AMP/CAB supply the low end, DST supplies the grind.

### AMP — Classic Bass (Ampeg SVT)
- Gain: 60
- Bass: 50
- Middle: 65
- MidFreq: 800Hz
- Treble: 62
- VOL: 70
- Always on. SVT is the classic aggressive rock/metal bass amp voicing — present, not scooped. MidFreq at 800Hz is the growl-and-cut frequency: this is what lets the bass punch through a wall of distorted guitars instead of hiding under them. Bass held at 50, not cranked — low end comes from the note and the cab, not amp boom, which keeps the tone tight instead of woolly.

### CAB — User IR 6 (Hartke410)
- VOL: 70
- Always on. Hartke410's bright, aggressive aluminum-cone voicing is ir.md's own named pairing for a driven bass tone running Bass OD — a loaded IR wasn't an option when this patch was first built, so the built-in AMPG 4x10 did the job back then; this is the direct upgrade now that the bass IR slots are loaded.

### EQ — Bass EQ 1
- 33Hz: -8
- 150Hz: -6
- 600Hz: +12
- 2kHz: +10
- 8kHz: +6
- VOL: 55
- Always on.
- Sub (33Hz) and low-mid boom (150Hz) both cut — this style has zero interest in sub-bass weight, that just competes with the kick and turns the wall to mud. 600Hz and 2kHz both pushed hard — that's the grinding midrange bite and pick/finger attack that lets the bass cut through the guitar wall on a system that can't reproduce much below 80Hz live. 8kHz nudged up for string-noise edge/buzz on top.

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
- COMP: 65
- TONE: 55
- LEVEL: 55
- Mode: TREBLE
- Always on. Squashes pick/finger attack into a consistent, aggressive, always-the-same-level groove — industrial rhythm parts need to sound machine-tight, not human-dynamic. TREBLE mode keeps attack articulate before it hits two more gain stages downstream.

### 3. Donner Stylish Fuzz — engaged
- Sustain: 55
- Treble: 60
- Bass: 35
- Volume: 55
- Always on. This is half of the signature grind — stacking a fuzz stage ahead of the Tidal Wave's own drive and the GP-5's Bass OD is what gets the layered, buzzsaw-dense distortion instead of one clean gain stage doing all the work. Sustain kept moderate (not maxed) — full Sustain gets gated and splattery, which reads as sloppy, not industrial-tight. Bass rolled back on the pedal itself for the same reason as the DST stage: keep the low end controlled downstream, not flubby at the source.

### 4. Joyo Tidal Wave — engaged
- Drive: 70
- Blend: 65
- Presence: 60
- Level: 60
- Treble: 60
- Middle: 65
- Bass: 50
- Mid-Frequency: 1000Hz
- Bass-Shift: 80Hz
- Cab-Sim (DI out): On
- Ground Lift: Off (engage only if hum shows up on the DI feed)
- Always on — this is the main preamp/drive stage of the whole chain. Blend at 65 keeps it mostly-driven but not fully wet, same note-definition logic as the DST stage. Mid-Frequency at 1000Hz over 500Hz — this style wants pick/finger attack and cut-through, not round low-mid body. Bass-Shift at 80Hz tightens the low end so it doesn't stack mud on top of everything already piled up from the fuzz and DST stages before it.

### 5. Joyo Narcissus — bypassed
- Mode: Vintage, Width/Depth/Rate: low (default light-chorus values)
- Footswitch off. This style is dry and direct — no chorus anywhere in the signal. Left dialed to safe defaults in case a future patch wants it, but it stays off here.

### 6. Valeton GP-5
- Settings as documented above, including the Darkglass Alpha Omega NAM in Slot 62.

## When to engage what

- **Base tone (CTL off):** Gate, Comp, Fuzz, Tidal Wave, Bass OD, Classic Bass/Hartke410, EQ — everything on except the PRE boost and the octave. This is the sound for the whole song, verses included. It's already distorted and aggressive at rest — that's the point.
- **CTL on:** Punch in for choruses, big unison stabs, and breakdown hits — pushes the Bass OD harder via the Micro Boost for a thicker, more compressed wall.
- **Octave stomp:** Reserve for song-ending swells/outros only — not a default-on effect.
