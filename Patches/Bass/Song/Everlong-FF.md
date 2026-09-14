# Everlong — Foo Fighters

Bass: Harley Benton P/J, 5-string, passive. Full board.
From *The Colour and the Shape* (1997), ~158 BPM.
Nate Mendel's part tracks the guitar riff closely — tight, syncopated, palm-muted-tight in the verses, doubling the drive of that famous tremolo-picked riff. Then the song blows wide open for the huge "And I wonder..." chorus — bigger, more open, more sustain.

That dynamic swing is the whole song. CTL off = the driving verse riff. CTL on = the big chorus.

## GP-5 settings

Module order: NR → PRE → DST → AMP → CAB → EQ → MOD → DLY → RVB.

**NR — Gate**
- THRE: 22
- Always on. A bit higher threshold than a clean patch needs — the NAM below adds some grind, so there's more to clean up between notes on a fast, syncopated part.

**PRE — Micro Boost — On CTL**
- Gain: 58
- CTL off: bypassed (verse). CTL on: engaged (chorus).
- Verse riff doesn't need help — it's already driving and tight, sitting in the pocket with the guitar. Chorus gets a clean push so the bass matches the song's own explosion in energy.

**DST — Off**
**AMP — Off (null)**
**CAB — Off (null)**
- AMP/CAB replaced by the NAM below. No separate DST stage — the NAM already carries all the grit this part needs; stacking another gain stage would just get mushy on a fast, syncopated line like this.

**EQ — Bass EQ 1**
- 33Hz: +3, 150Hz: +1, 600Hz: -3, 2kHz: +6, 8kHz: +3, VOL: 56
- Always on, same for both CTL states.
- Heavy 600Hz cut and strong 2kHz/8kHz push — this part has to cut through a wall of distorted guitar, so it needs to be bright and present, not warm and round. 33Hz boost keeps some real low-end weight underneath all that upper-mid push.

**MOD — Off**
- No modulation. This is a straight-ahead driving rock part — nothing here calls for it.

**DLY — Off**
- Not used.

**RVB — Room — On CTL**
- Mix: 22, Decay: 38, Trail: On
- CTL off: bypassed (verse). CTL on: engaged (chorus).
- Verse stays tight and dry, right in the pocket with the drums. Chorus opens up with a touch of room to match the bigger, more anthemic space that section lives in.

## NAM — Darkglass B7K Ultra (Slot 64)

- Gain: 62
- VOL: 65
- Bass: 55
- Middle: 62
- Treble: 62
- Replaces AMP + CAB entirely (both null in the module chain above).
- The B7K Ultra is a modern, punchy bass drive/preamp — exactly the territory this song lives in. Gain pushed fairly hard for real grind and presence, Middle and Treble both up to keep the part cutting through the guitars instead of getting buried under them.

## CTL summary

- **CTL Off — Verse riff.** Dry, tight, driving. Locked in with the guitar's syncopation.
- **CTL On — Chorus.** Boost and room reverb engage together. Bigger, more open, matches the song's own explosion.
- Engage CTL right as the chorus hits ("And I wonder..."), disengage back into the next verse riff.

## Full pedalboard (signal chain order)

**1. Flamma FS-08 Octave — Bypassed**
- Footswitch off. No octave layering — this part tracks the guitar riff directly, an octave stack would clutter the syncopation.

**2. Donner Ultimate Comp — Engaged**
- COMP: 55
- TONE: 65
- LEVEL: 60
- Mode: TREBLE
- Fairly compressed to keep the fast, syncopated picking even and consistent note-to-note — this riff has no room for dynamic unevenness.
- TREBLE mode keeps pick/finger attack audible and bright before it hits the NAM's own drive stage.

**3. Donner Stylish Fuzz — Bypassed**
- Footswitch off. The NAM's own drive already covers the grit this song needs — a fuzz stacked on top would just mud out the syncopated riff.

**4. Joyo Tidal Wave — Bypassed**
- Footswitch off, Drive/Blend not engaged. Same reasoning — one drive source (the NAM) is enough; more would fight for definition on a fast part like this.

**5. Joyo Narcissus — Bypassed**
- Footswitch off. No chorus — matches the MOD-off call on the GP-5. This stays a dry, direct rock tone throughout.

**6. Valeton GP-5** — see settings above.
