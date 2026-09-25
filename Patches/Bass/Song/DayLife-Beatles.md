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

## Why the Avalon DI snaptone

This song needs a vintage, DI'd, hi-fi clean sound with almost no amp coloration.
The AvalonAD2022 snaptone is a studio DI capture with no cab, so it's the closest match in the set.

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

**AMP/CAB — NAM SnapTone, slot 52: AvalonAD2022** (always on)
- Built from the `Avalon - 38 dB - Chan 1 (Avalon AD2022)` NAM and no cab IR (straight DI), combined into one snaptone.
- Avalon AD2022 Class A preamp at 38 dB. A studio DI, not an amp: no speaker coloration.
- McCartney's Rickenbacker on this record has a DI'd, hi-fi clean sound with almost no amp coloration. The Avalon DI is exactly that.
- Gain: 50, VOL: 50, Bass: 50, Middle: 62, Treble: 62
- Gain 50: the capture as built.
- Bass 50: flat.
- Middle 62: more midrange.
- Treble 62: more top end.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 52 directly.

**EQ — Bass EQ 1**
- 33Hz: +3
- 150Hz: +2
- 600Hz: -3
- 2kHz: +5
- 8kHz: +3
- VOL: 55
- Always on, same for both CTL states.
- 600Hz cut clears out boxiness. 2kHz and 8kHz boosts add the note definition and top-end sparkle a DI'd Rickenbacker naturally has that a flat DI doesn't add on its own.

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
- TONE pushed toward bright to keep finger attack audible before it hits the snaptone/EQ stage.

**3. Donner Stylish Fuzz — Bypassed**
- Footswitch off. No fuzz anywhere in this song's bass part.

**4. Joyo Tidal Wave — Bypassed**
- Footswitch off, Drive/Blend not engaged. This patch stays clean through the whole song — no reason to add a driven preamp stage here.

**5. Joyo Narcissus — Bypassed**
- Footswitch off. No chorus on this part — matches the MOD-off call on the GP-5. One dry, articulate voice, not a modulated one.

**6. Valeton GP-5** — see settings above.
