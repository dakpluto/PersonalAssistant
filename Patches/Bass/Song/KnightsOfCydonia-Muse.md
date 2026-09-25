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
**AMP/CAB — NAM SnapTone, slot 55: BrightSVT** (always on)
- Built from the `SVT SANS BRIGHT DRIVE (SVT-CL)` NAM and the Hartke410 IR, combined into one snaptone.
- Real Ampeg SVT-CL with the bright drive setting, into the aluminum-cone Hartke410 IR.
- Bright, aggressive drive that cuts through the gallop and synths.
- Gain: 52, VOL: 50, Bass: 58, Middle: 60, Treble: 60
- Gain 52: a little over default. This part wants more push than the other BrightSVT patches.
- Bass 58: more low end.
- Middle 60: more midrange.
- Treble 60: more top end.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 55 directly.

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
- Keeps the fast, galloping picking pattern even and consistent. TREBLE mode keeps attack defined ahead of the snaptone's own drive.

**3. Donner Stylish Fuzz — Bypassed**
- Footswitch off. The BrightSVT snaptone's own drive already carries all the grit this song needs — stacking a fuzz on top of an already-aggressive distortion capture would just turn a 5-string P/J to mush.

**4. Joyo Tidal Wave — Bypassed**
- Footswitch off, Drive/Blend not engaged. Same reasoning — one heavy drive source is enough; piling on more would cost definition on a riff that has to stay tight and articulate at tempo.

**5. Joyo Narcissus — Bypassed**
- Footswitch off. No chorus — matches the MOD-off call on the GP-5. Direct, aggressive rock tone throughout.

**6. Valeton GP-5** — see settings above.
