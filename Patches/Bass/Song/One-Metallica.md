# One — Metallica

Bass: Harley Benton P/J, 5-string, passive. Full board.
From *...And Justice for All* (1988). Base tempo ~85 BPM for the intro/verses; the outro "machine gun" section roughly doubles that feel.
This is one of the most dynamically extreme songs in the catalog to patch for — a quiet, clean-toned intro and verses (that famous ambient/clean-arpeggio build) giving way to the all-out thrash assault of the tremolo-picked "machine gun" riff and solo section. One widely-documented bit of trivia worth knowing going in: Jason Newsted's bass on this album was mixed extremely low, a point of long-running dispute in the band. Doesn't change how to build the patch, but it's why "One" isn't a song people typically think of as a bass showcase the way "Hysteria" or "Cliffs of Dover" are.

CTL off = the clean intro/verse. CTL on = the heavy machine-gun outro.

## GP-5 settings

Module order: NR → PRE → DST → AMP → CAB → EQ → MOD → DLY → RVB.

**NR — Gate**
- THRE: 25
- Always on. Moderate threshold — needs to stay clean and quiet for the intro but also handle the outro's distortion without flubbing the fast tremolo picking.

**PRE — Micro Boost — On CTL**
- Gain: 55
- CTL off: bypassed (verse/intro). CTL on: engaged (outro).
- Adds extra push on top of the DST engagement below for the full-throttle machine-gun section.

**DST — SM Dist (Boss DS-1) — On CTL**
- Gain: 70, Tone: 60, VOL: 65
- CTL off: bypassed (verse/intro — amp alone, clean-to-edge). CTL on: engaged (outro).
- This is the module doing the heavy lifting for the transformation. DS-1's hard clipping gives a tight, aggressive edge rather than a loose fuzz wall — important for staying articulate through the fast tremolo-picked riff instead of turning to noise.

**AMP — UK 800 (Marshall JCM800)**
- Gain: 30, PRES: 55, VOL: 65, Bass: 55, Middle: 55, Treble: 50
- Always on, same for both CTL states.
- Marshall JCM800 is genuinely period-correct here — this is exactly the era and amp family thrash metal was built on. Gain kept moderate since this same AMP setting has to serve the clean intro too; the SM Dist module above is what pushes it into full aggression for the outro, not the AMP itself.

**CAB — User IR 10 (V30112)**
- VOL: 60
- Always on, same for both CTL states.
- The one guitar cab in the IR library — a Celestion V30 in an isolation cab with a sub mic blended in for low end, which is exactly why it works for bass here too. V30s are the quintessential modern metal speaker; running the bass through a guitar cab voicing is a deliberate call for a tone that needs to sit alongside (and cut through) a wall of guitars.

**EQ — Bass EQ 1**
- 33Hz: +3, 150Hz: 0, 600Hz: +2, 2kHz: +3, 8kHz: +1, VOL: 55
- Always on, same for both CTL states.
- +3 at 2kHz is the important one here — that's what keeps the machine-gun tremolo picking articulate and readable instead of dissolving into a wash once the DST kicks in. +2 at 600Hz adds a bit of midrange growl for when the distortion engages, without making the clean intro sound boxy.

**MOD — Off**
- No modulation. Direct, dry thrash metal tone.

**DLY — Off**
- Not used.

**RVB — Room — On CTL (inverted)**
- Mix: 20, Decay: 35, Trail: On
- CTL off: engaged (verse/intro). CTL on: bypassed (outro).
- Inverted on purpose — the clean intro and verses have some natural ambience to them, so a touch of room fits there. The machine-gun outro needs to stay completely tight and dry, right in the pocket with the drums, so the reverb drops out the instant CTL engages.

## CAB IR — V30112 (Slot 10)

- Celestion V30 guitar speaker, isolation cab with a sub mic blend for low end, confirmed loaded on User IR slot 10 — the only guitar-voiced cab in the library, and it was captured with that sub-mic blend specifically so it holds up for bass use too.
- Encoded directly into the `.prst` as a real, active CAB reference (`User IR 10`) — no manual loading needed for this one.

## CTL summary

- **CTL Off — Intro/verse.** Clean-to-edge amp tone, a touch of room ambience, no distortion. Matches the song's restrained opening build.
- **CTL On — Machine-gun outro.** SM Dist and Micro Boost engage, Room drops out — tight, dry, and aggressive for the tremolo-picked assault and solo section.
- Engage CTL right as the song breaks into the fast outro riff; there's no need to toggle back since the song stays heavy from there to the end.

## Full pedalboard (signal chain order)

**1. Flamma FS-08 Octave — Bypassed**
- Footswitch off. This part needs clarity for the fast tremolo picking, not layered octaves.

**2. Donner Ultimate Comp — Engaged**
- COMP: 45
- TONE: 55
- LEVEL: 58
- Mode: TREBLE
- Moderate compression — enough to keep the picking consistent without squashing the dynamic contrast that's the whole point of this song. TREBLE mode keeps attack alive through the fast machine-gun section.

**3. Donner Stylish Fuzz — Bypassed**
- Footswitch off. A fuzz's looser, wall-of-noise character works against a riff that needs to stay tight and articulate at high speed — the GP-5's own SM Dist is the better tool here.

**4. Joyo Tidal Wave — Engaged**
- Drive: 30
- Blend: 55
- Presence: 60
- Level: 60
- Treble: 55
- Middle: 55
- Bass: 55
- Mid-Frequency: 1000Hz
- Bass-Shift: 80Hz
- Cab-Sim (DI out): Off
- Ground Lift: Off
- Adds body and presence feeding into the amp. Bass-Shift at 80Hz keeps things tight — critical for the machine-gun section to stay defined instead of turning to mud at speed.

**5. Joyo Narcissus — Bypassed**
- Footswitch off. No chorus — matches the MOD-off call on the GP-5. Direct, dry metal tone throughout.

**6. Valeton GP-5** — see settings above.
