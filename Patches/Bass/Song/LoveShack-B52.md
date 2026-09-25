# LoveShack-B52 — Love Shack (The B-52's, 1989, ~134 BPM)

## Song context

This is a party-rock dance bassline — bouncy, syncopated, staccato hits that drive the whole groove.
No wash, no smear, no low-end mud — every note has to pop cleanly through a busy arrangement (surf guitar, organ stabs, group vocals, cowbell).
Tone is bright, punchy, and a little funky — the "boing" character comes from staccato playing and compression, not from any modulation or octave trick.
This song is clean throughout — no need to fake grit into it.

Two states:
- **CTL off** — the verse groove. Bouncy, syncopated, contained.
- **CTL on** — the "Love Shack, baby" chorus hook. Same core tone, pushed louder and a little grittier to match the call-and-response energy and the full-band chorus hit.

## GP-5 settings

Module order: NR → PRE → DST → AMP → CAB → EQ → MOD → DLY → RVB

- **NR — Gate**: THRE 15. Always on.
  Light touch — this bassline is busy and mostly legato-staccato, not much dead space to worry about, so the gate just needs to catch open-string noise.

- **PRE — Boost**: Gain 60, +3dB on, Bright on. **CTL module** — off in CTL off, on in CTL on.
  First half of the chorus lift — pushes level and brightness for "Love Shack, baby."

- **DST — Bass OD**: Gain 45, Blend 40, VOL 70, Bass 55, Treble 65. **CTL module** — off in CTL off, on in CTL on.
  Second half of the chorus lift. Blend at 40 keeps the low end clean underneath while stacking in upper-harmonic edge — gives the chorus a little extra bite and excitement without turning into a distorted bass tone. Paired with PRE Boost, this is the full verse-to-chorus jump.

**AMP/CAB — NAM SnapTone, slot 52: AvalonAD2022** (always on)
- Built from the `Avalon - 38 dB - Chan 1 (Avalon AD2022)` NAM and no cab IR (straight DI), combined into one snaptone.
- Avalon AD2022 Class A preamp at 38 dB. A studio DI, not an amp: no speaker coloration.
- Bouncy, clean party bass. The DI keeps the bounce punchy.
- Gain: 58, VOL: 50, Bass: 62, Middle: 60, Treble: 60
- Gain 58: noticeably over default. This part wants more push than the other AvalonAD2022 patches.
- Bass 62: more low end.
- Middle 60: more midrange.
- Treble 60: more top end.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 52 directly.

- **EQ — Bass EQ 2**: 50Hz +4, 120Hz +2, 400Hz -5, 800Hz +6, 4.5kHz +6, VOL 55. Always on.
  400Hz cut clears out boxiness so the staccato hits stay punchy instead of thick. 800Hz push adds funk snap, 4.5kHz push adds the bright top-end "pop" this bouncy line needs to cut through the surf guitar and organ.

- **MOD — off.**
  No modulation on this bass at all — see Joyo Narcissus note below, this song doesn't want any chorus wash.

- **DLY — off.**
  Delay would smear the syncopation this part depends on. Stays dry.

- **RVB — off.**
  Same reasoning — this bass needs to stay tight and up-front, not spacious.

## CTL footswitch

- **CTL off** — verse groove. PRE Boost and Bass OD both bypassed. Default resting state, where the patch loads.
- **CTL on** — chorus hook. Both PRE Boost and Bass OD engaged together — louder and a touch grittier, matching the full-band "Love Shack, baby" hit.
- Engage CTL for every chorus hit; drop back to CTL off for verses and the spoken/sung "tin roof... rusted" section, which sits back in the groove rather than pushing forward.

## Full pedalboard (signal chain order)

**Flamma FS-08 Octave** — bypassed for the entire song (footswitch off, true bypass).
This bassline's bounce comes from staccato playing and compression, not an octave layer — adding one here would turn a real bass line into something closer to a synth-bass patch, which isn't the vibe.

**Donner Ultimate Comp** — engaged for the entire song.
COMP 60, TONE 65, LEVEL 60, Mode: TREBLE.
Slightly heavier compression than a typical clean-bass patch — this line is all staccato pops and syncopated hits, and consistent compression is what gives it that springy, "boing" consistency note to note. TREBLE mode keeps the attack articulate.

**Donner Stylish Fuzz** — bypassed for the entire song (footswitch off, true bypass).
No fuzz texture anywhere in this song — leave it fully out of the chain.

**Joyo Tidal Wave** — engaged for the entire song, light drive character.
Drive 30, Blend 35, Presence 60, Level 55, Treble 60, Middle 55, Bass 50.
Mid-Frequency: 1000Hz (pick/finger attack and cut-through — right call for this funkier, more percussive line, vs. a "body"-focused 500Hz).
Bass-Shift: 80Hz (tight, articulate — keeps the staccato hits defined instead of blurring together).
Cab-Sim (DI out): on, if running a DI to FOH. Ground Lift: off unless hum shows up.
Drive stays low — gentle analog thickening and preamp/EQ shaping, not audible dirt. The main gain difference for the chorus comes from the GP-5's CTL switch, not this pedal.

**Joyo Narcissus** — bypassed for the entire song (footswitch off).
No chorus anywhere in this patch, pedal or GP-5 MOD module — this bassline needs to stay dry and punchy. Any wash would blur the syncopation that makes this groove work.

**Valeton GP-5** — see settings above.

## Instrument notes (P/J bass)

Balance both pickup volumes close to even, maybe a slight favor to the J (bridge) pickup here — this line wants pick/finger attack and top-end snap more than low-end weight.
Tone knob open, most of the way up. Bright and present is the whole point of this tone.
