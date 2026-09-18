# Knights of Cydonia — Muse

Bass: Harley Benton P/J, 5-string, passive. Full board.
From *Black Holes and Revelations* (2006), ~137 BPM.
Where "Uprising" is about faking a synthesizer, this one's about pure scale — a galloping riff that has to carry a spaghetti-western-meets-prog-metal wall of sound, building to the huge "no one's gonna take me alive" hook and the massive instrumental outro.

CTL off = the galloping verse riff, tight and driven. CTL on = the big chorus and outro.

## GP-5 settings

Module order: NR → PRE → DST → AMP → CAB → EQ → MOD → DLY → RVB.

**NR — Gate**
- THRE: 28
- Always on. High threshold — this is an aggressive, heavily distorted tone, needs real cleanup between the gallop riff's notes.

**PRE — Micro Boost — On CTL**
- Gain: 55
- CTL off: bypassed (verse). CTL on: engaged (chorus/outro).
- Verse riff is already driving hard on its own. Chorus and outro get a clean push to match the song's escalating scale.

**DST — Bass OD**, always on. Gain 65, Blend 75, VOL 65, Bass 55, Treble 58.
**AMP — Classic Bass**, always on. Gain 48, Bass 58, Middle 60, MidFreq 1.6kHz, Treble 60, VOL 68.
**CAB — User IR 6 (Hartke410)**, always on. VOL 65.
- Bass OD carries the drive, Classic Bass the amp foundation — one thick, unified voice, not several stacked gain stages fighting each other.

**EQ — Bass EQ 1**
- 33Hz: +3, 150Hz: -1, 600Hz: +3, 2kHz: +4, 8kHz: +2, VOL: 55
- Always on, same for both CTL states.
- +3 at 600Hz and +4 at 2kHz give the gallop riff real midrange snarl and pick definition — this needs to cut through a wall of guitar and drums, not sit underneath it. +3 at 33Hz keeps weight under all that upper-mid push.

**MOD — Off**
- No modulation. This tone needs to stay direct and aggressive, not textured.

**DLY — Off**
- Not used.

**RVB — Hall — On CTL**
- Mix: 28, Decay: 45, Trail: On
- CTL off: bypassed (verse — tight and dry). CTL on: engaged (chorus/outro).
- Hall over Room here — this song is going for genuine scale on the hook and outro, and a bigger, longer decay matches that "epic space-rock" reach better than a tighter room ambience would.

## AMP + DST: Classic Bass + Bass OD, CAB: Hartke410 IR (User IR 6)

Rebuilt 2026-09-18 off the GP-5's own AMP/DST + a loaded IR — NAMs are off for now (Valeton N->S volume issue, device-side). The old NAM was the Alpha side of the Darkglass Alpha Omega — the more aggressive distortion voicing, exactly the thick, driven wall this riff needs. Classic Bass + a hard-pushed always-on Bass OD reproduce that; Hartke410's bright, aggressive aluminum-cone voicing is ir.md's own recommended pairing for a driven bass tone running Bass OD. Middle and Treble kept up on both stages so the riff carries its own presence instead of getting buried under the guitar.

## CTL summary

- **CTL Off — Verse.** The galloping main riff. Driven, dry, tight.
- **CTL On — Chorus/outro.** Boost and Hall reverb engage together, matching the song's escalation into its huge hook and instrumental outro.
- Engage CTL right as the "no one's gonna take me alive" hook lands, and again through the instrumental outro build.

## Full pedalboard (signal chain order)

**1. Flamma FS-08 Octave — Bypassed**
- Footswitch off. This song's power comes from the riff and the drive, not layered octaves — an octave stack would just clutter a gallop rhythm that needs to stay tight.

**2. Donner Ultimate Comp — Engaged**
- COMP: 55
- TONE: 55
- LEVEL: 60
- Mode: TREBLE
- Keeps the fast, galloping picking pattern even and consistent. TREBLE mode keeps attack defined ahead of the NAM's own heavy distortion.

**3. Donner Stylish Fuzz — Bypassed**
- Footswitch off. The NAM's own Alpha Omega distortion already carries all the grit this song needs — stacking a fuzz on top of an already-aggressive distortion capture would just turn a 5-string P/J to mush.

**4. Joyo Tidal Wave — Bypassed**
- Footswitch off, Drive/Blend not engaged. Same reasoning — one heavy drive source is enough; piling on more would cost definition on a riff that has to stay tight and articulate at tempo.

**5. Joyo Narcissus — Bypassed**
- Footswitch off. No chorus — matches the MOD-off call on the GP-5. Direct, aggressive rock tone throughout.

**6. Valeton GP-5** — see settings above.
