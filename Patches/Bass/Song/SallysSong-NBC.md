# Sally's Song — The Nightmare Before Christmas

Bass: Harley Benton P/J, 5-string, passive. Full board.
From *The Nightmare Before Christmas* (1993). Music and lyrics by Danny Elfman, sung by Catherine O'Hara as Sally.
A slow, sparse, melancholy ballad over a small orchestral arrangement. I can't confirm an electric bass on the recording, so this patch is a soft, upright-like bass guitar voice that supports the song without stepping on the vocal.
Tempo and key: not verified. Slow. No delay in the patch, so nothing needs to lock to tempo.
Fingers, played over the end of the neck for a round, soft attack. Neck (P) pickup only, bridge (J) off. Tone at about 40%.

One sound for the whole song, so no CTL. That's allowed on bass per the patch rules. The song never gets loud, so there's nothing to switch to.

## GP-5 settings

Module order: NR → PRE → DST → AMP → CAB → EQ → MOD → DLY → RVB.

**NR — Gate**
- THRE: 10
- Always on. Very light. Long notes have to decay naturally, so this only catches hum between phrases.

**PRE — Off**
- The Donner Ultimate Comp handles compression on the board.

**DST — Off**
- Clean all song.

**AMP/CAB — NAM SnapTone, slot 51: CleanB15** (always on)
- `Ampeg B18 - Head DI - Bass Chan - Vol 2.5` (B-18N) into the Apg115 IR (User IR 1).
- The cleanest, roundest B-15 on the device. The classic 60s studio bass voice is the closest a bass guitar gets to a soft upright.
- Gain: 45, VOL: 80, Bass: 55, Middle: 50, Treble: 40
- Gain 45: under as-captured. Fully clean, no bloom.
- Bass 55: warmth.
- Middle 50: flat.
- Treble 40: dark. No string click competing with the vocal.
- VOL 80: the level Michael set for this snaptone in the 2026-10-02 VOL audit.
- AMP and CAB are off in the `.prst`. The N->S block calls slot 51 directly.

**EQ — Bass EQ 2**
- 50Hz: 0, 120Hz: +1, 400Hz: +1, 800Hz: 0, 4.5kHz: -3, VOL: 50
- Always on.
- +1 at 120Hz and 400Hz: a woody, upright-like body.
- -3 at 4.5kHz: removes finger noise and fret clack.

**MOD — Off**
- Not used.

**DLY — Off**
- Not used.

**RVB — Hall**
- Mix: 14, Decay: 40, Trail: On
- Always on. A bit more space than usual, so the bass sits in the same room as the strings. Still low enough that the notes don't smear.

## CTL summary

- No CTL assignment. One fixed sound for the whole song.

## Full pedalboard (signal chain order)

**1. Flamma FS-08 Octave — Bypassed**
- -2OCT: 0, -OCT: 0, +OCT: 0, +2OCT: 0, Dry: 100
- Footswitch off. An octave would bury a song this sparse.

**2. Donner Ultimate Comp — Engaged all song**
- COMP: 30
- TONE: 45
- LEVEL: 55
- Mode: NORMAL
- Light. Smooths soft finger dynamics so quiet notes don't drop out. No audible squeeze.

**3. Donner Stylish Fuzz — Bypassed**
- Footswitch off. No fuzz.

**4. Joyo Tidal Wave — Engaged (preamp/EQ), Drive off**
- Drive: 15
- Blend: 20
- Presence: 40
- Level: 55
- Treble: 45
- Middle: 52
- Bass: 55
- Mid-Frequency: 500Hz
- Bass-Shift: 40Hz
- Cab-Sim (DI out): Off
- Ground Lift: Off
- Drive footswitch: off all song. Clean.
- Bass-Shift 40Hz: deeper, rounder low end. The arrangement is sparse, so there's room for it.
- Mid-Frequency 500Hz: body, not attack.
- The preamp and EQ stay active whether the drive is on or off.

**5. Joyo Narcissus — Bypassed**
- Footswitch off. No chorus.

**6. Valeton GP-5** — see settings above.

## Note on the full board vs. the `.prst`

The `.prst` file only encodes the GP-5's own 9 modules. The Flamma, Donner Ultimate Comp, Donner Stylish Fuzz, Joyo Tidal Wave and Joyo Narcissus settings above are not and cannot be part of that file. They're set by hand on the board, and documented here so the full patch can be rebuilt.
