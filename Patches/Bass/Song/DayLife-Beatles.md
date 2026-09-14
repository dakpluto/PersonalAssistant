# A Day in the Life — The Beatles (Bass)

## Song context

Sgt. Pepper's closer, 1967.
McCartney played it on his Rickenbacker 4001S.
DI'd straight into the desk, not mic'd off an amp — that's why the tone is so clean and hi-fi.
No cab coloring the top end, just direct signal with all the finger detail intact.

Two distinct bass parts live in this song.
Lennon's verses ("I read the news today...") are dreamy and spacious — McCartney plays long, melodic, ascending/descending lines that carry as much melodic weight as the vocal.
His own bridge ("Woke up, fell out of bed...") is a completely different animal — tight, driving 8th notes, forward and percussive, pushing the song instead of floating under it.

That's a real CTL split, not a stretch.
CTL off = the Lennon-verse melodic sound.
CTL on = the McCartney-bridge driving sound.

Tempo isn't metronomic — Ringo drags and pushes through the song on purpose.
BPM set to 85 as the verse pulse; don't treat it as a click track.

## Why no NAM

Bass NAMs get strong default preference in this rig now, but none of the five Darkglass captures fit here.
They're all Aguilar DB751-into-Darkglass-cab voicings — modern, mid-forward, built for aggressive tones.
This song needs a vintage, DI'd, hi-fi clean sound with almost no amp coloration.
GP-5 AMP + IR gets closer to that than any of the available NAMs, so that's what this patch uses.

## GP-5 settings

Module order: NR → PRE → DST → AMP → CAB → EQ → MOD → DLY → RVB.

**NR — Gate**
- THRE: 18
- Always on, low threshold.
- This is a clean, low-gain patch — barely any noise to gate, just keeping the signal path quiet.

**PRE — Micro Boost — On CTL**
- Gain: 55
- CTL off: bypassed. CTL on: engaged.
- Off state (Lennon verses) needs no push — the part carries itself melodically, don't crowd it.
- On state (McCartney bridge) gets a clean gain bump for extra push and presence on the driving 8th-note line.

**DST — Off**
- Not used. No grit anywhere in this bass part — stays clean start to finish.

**AMP — Classic Bass (Ampeg SVT)**
- Gain: 32
- Bass: 50
- Middle: 62
- MidFreq: 3kHz
- Treble: 62
- VOL: 65
- Always on.
- Gain kept low to stay clean — this is a headroom setting, not a drive setting.
- Middle pushed and MidFreq set to 3kHz for upper-mid definition — that's where McCartney's melodic runs need to cut through, since a real Rickenbacker DI has way more top-end presence than a typical SVT stack. This compensates for that.

**CAB — User IR 4 (EBS410, Slot 4)**
- VOL: 62
- Always on.
- EBS410 has an accentuated high-mid boost around 2-3kHz — closest thing in the IR library to the Rickenbacker's natural brightness. Explicitly the right call for a clean, low-gain bass patch per the pack notes.

**EQ — Bass EQ 1**
- 33Hz: +3
- 150Hz: +2
- 600Hz: -3
- 2kHz: +5
- 8kHz: +3
- VOL: 55
- Always on, same for both CTL states.
- 600Hz cut clears out boxiness. 2kHz and 8kHz boosts add the note definition and top-end sparkle a DI'd Rickenbacker naturally has that the SVT-voiced AMP doesn't fully deliver on its own.

**MOD — Off**
- No modulation. This bass tone is bone dry on the record — a chorus or vibe here would just smear the melodic lines. Skipping the usual light-touch default on purpose.

**DLY — Off**
- Not used. No delay on the bass anywhere in this song.

**RVB — Room — On CTL**
- Mix: 18, Decay: 32, Trail: On
- CTL off: engaged. CTL on: bypassed.
- Off state (Lennon verses) gets a light room to add space and match the dreamy, floating feel of that section.
- On state (McCartney bridge) drops the reverb entirely — tighter and drier to match the driving, forward feel.

## CTL summary

- **CTL Off — Lennon verse sound.** No boost, light room reverb. Melodic, spacious, sits under the vocal.
- **CTL On — McCartney bridge sound.** Clean boost engaged, reverb off. Tighter, punchier, pushes the song.
- Engage CTL right at "Woke up, fell out of bed" and disengage back into the next Lennon verse.

## Full pedalboard (signal chain order)

**1. Flamma FS-08 Octave — Bypassed**
- Footswitch off. No octave layering on this part — McCartney's line is melodic and single-note-focused; an octave stack would clutter it.

**2. Donner Ultimate Comp — Engaged**
- COMP: 40
- TONE: 60
- LEVEL: 60
- Mode: NORMAL
- Light-moderate compression evens out finger dynamics without squashing the melodic phrasing — keeps the DI'd tone consistent the way the original recording's chain would have.
- TONE pushed toward bright to keep finger attack audible before it hits the AMP/EQ stage.

**3. Donner Stylish Fuzz — Bypassed**
- Footswitch off. No fuzz anywhere in this song's bass part.

**4. Joyo Tidal Wave — Bypassed**
- Footswitch off, Drive/Blend not engaged. This patch stays clean through the whole song — no reason to add a driven preamp stage here.

**5. Joyo Narcissus — Bypassed**
- Footswitch off. No chorus on this part — matches the MOD-off call on the GP-5. One dry, articulate voice, not a modulated one.

**6. Valeton GP-5** — see settings above.
