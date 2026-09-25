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

**AMP/CAB — NAM SnapTone, slot 57: GrittySVT** (always on)
- Built from the `SVT PUSHED (SVT-CL)` NAM and the Apg810 IR, combined into one snaptone.
- Real Ampeg SVT-CL pushed into grit, into the Apg810 8x10 IR.
- Late-80s thrash bass wants grit. A pushed SVT gets there on a real bass amp.
- Gain: 42, VOL: 50, Bass: 55, Middle: 55, Treble: 50
- Gain 42: noticeably under default. This part wants less push than the other GrittySVT patches.
- Bass 55: a touch more low end.
- Middle 55: a touch more midrange.
- Treble 50: flat.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 57 directly.

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
