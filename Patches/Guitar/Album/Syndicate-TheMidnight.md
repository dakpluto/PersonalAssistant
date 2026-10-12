# *Syndicate* (Guitar) — The Midnight

*Syndicate* (2025, Ultra Records). Tim McEwan and Tyler Lyle's synthwave duo, with McEwan producing.
Royce Whittaker is credited on guitar. Reviews single out the "Vai-era" solos on "Friction" and "Shadowverse".
I found no gear details for the album, so this patch builds The Midnight's guitar sound from the records, not from a known rig.
Instrument: Stratocaster (HSS).
Full board.

## The Midnight's guitar sound

- **Rhythm.** Glassy, compressed, chorused clean guitar. Funky muted chops, ringing arpeggios and chord stabs that sit inside a wall of synths and gated drums. Pure late-80s pop-rock production.
- **Lead.** Big, singing 80s rock leads that trade lines with the sax. Saturated and sustaining, smoothed by delay and a large reverb. On *Syndicate* the solos push toward Steve Vai: more gain, more sustain, more flash.
- McEwan has shown building guitar parts in the box with a Van Halen-inspired Guitar Rig preset (2021 stream). The lead here aims for that 80s-rock-lead character.

CTL off = the album's overall rhythm sound. CTL on = the album's lead sound.

## GP-5 settings

Module order: NR → PRE → DST → AMP → CAB → EQ → MOD → DLY → RVB.

**NR — Gate**, always on.
- THRE: 25
- The RAT-stacked lead hisses. 25 keeps the gaps quiet. Rhythm chops are staccato, so the gate never fights them.

**PRE — Boost (EP Booster)**, on CTL.
- Gain: 50, +3dB: on, Bright: off
- Hits the RAT harder for more sustain, and lifts the lead's level above the synths.
- Bright off: the lead needs smooth, singing top, not spiky top.
- CTL off: bypassed. CTL on: engaged.

**DST — Darktale (ProCo RAT)**, on CTL.
- Gain: 62, Filter: 40, VOL: 58
- The 80s rock-lead distortion. A boosted RAT into a clean Dumble gives the thick, compressed sustain the solos need.
- Filter 40 rounds off the fizz. Higher values get harsh against bright synths.
- CTL off: bypassed. CTL on: engaged.

**AMP/CAB — NAM SnapTone, slot 66: MayerDumble** (always on)
- The `SLAMMIN_DUMBLE_FORD_CLN_BALANCED_S` (Dumble ODS clean) NAM into the `Bogner 2x12 EVM12L - SM57 1 - Cap Edge` IR, combined into one snaptone.
- A Dumble clean into EVM12L speakers. Glassy and articulate enough for 80s chorused rhythm.
- It also takes drive pedals beautifully, which is the 80s LA-session way of getting a singing lead from a clean amp.
- A clean CTL-off tone, so the snaptone gets strong preference. With no known amp to model, there's no direct-model GP-5 amp to prefer over it.
- Gain: 45, VOL: 70, Bass: 48, Middle: 50, Treble: 58
- Gain 45: a little under as-captured, so the rhythm stays fully clean under hard chops.
- Bass 48: lean lows. 80s rhythm guitar stays out of the synth bass.
- Treble 58: the glassy top.
- VOL 70: the level Michael set for this snaptone in the 2026-10-01 VOL audit. Trim here if the patch jumps in level.
- Same in both CTL states. AMP and CAB are off in the `.prst`. The N->S block calls slot 66 directly.

**EQ — Guitar EQ 2**, always on.
- 100Hz: -2, 500Hz: -1, 1kHz: +1, 3kHz: +2, 6kHz: +1, VOL: 50
- -2 at 100Hz and -1 at 500Hz: lean and glassy, the 80s production curve. It leaves room for the synths.
- +2 at 3kHz: pick definition on the chops, and cut for the lead.

**MOD — A-Chorus (Arion SCH-1)**, loads on. MIDI toggle (see MIDI toggles).
- Depth: 45, Rate: 0.8Hz, Tone: 60
- Chorus is a core part of The Midnight's sound, so it runs heavier than the usual light-touch default. That's the exception the patch rules allow for songs known for an obvious chorus.
- It's on the GP-5, after the drive, not on the board's Narcissus before it. Chorus after distortion is the 80s rack placement. It keeps the lead wide and smooth instead of warbly.
- Same in both CTL states: chorused rhythm, and a wide chorused lead.

**DLY — Pure**, on CTL.
- Mix: 26, Time: 433ms, F.Back: 32, Trail: on
- The big digital lead delay of 80s rack rigs. Clean repeats that don't muddy the sustain.
- 433ms is a dotted eighth at 104 BPM, a typical tempo for the band. Album tempos vary, so reset it per song: dotted eighth (ms) = 45000 ÷ BPM.
- CTL off: bypassed, so the rhythm chops stay tight. CTL on: engaged.
- Trail on so the solo's last notes ring out into the next section.

**RVB — Hall**, always on.
- Mix: 20, Decay: 45, Trail: on
- The big synthwave space. Wet enough for the album's huge production, short enough to keep the muted chops rhythmic.

## CTL footswitch

On CTL: PRE (Boost), DST (Darktale), DLY (Pure).

- **CTL off — Rhythm.** Glassy, chorused Dumble clean in a big hall. Position 2 (bridge+middle) or position 4 (neck+middle) for the quacky 80s funk chops. Position 3 (middle) for arpeggios. This is the resting state the patch loads into.
- **CTL on — Lead.** Boosted RAT, chorus, and long digital delay. Bridge humbucker.
- Engage CTL for solos and sax-trade lead lines. Drop back for verses and choruses.

## MIDI toggles

MIDI = True (added 2026-10-12). With no MIDI controller connected, the patch loads and plays exactly as before: CTL and the board work the same. MIDI adds single-block toggles on top.

On MIDI: PRE (Boost), DST (Darktale), DLY (Pure) — all also on CTL — and MOD (A-Chorus), MIDI-only, loads on.

Sounds:
- **Clean rhythm** (default). CTL off. Glassy chorused Dumble.
- **Clean echo.** CTL off, MIDI DLY on. Arpeggios and ringing clean melodies with the dotted-eighth repeats, a staple of the band's sound.
- **Crunch rhythm.** CTL off, MIDI DST on. The RAT alone, without the boost: 80s rock rhythm for the album's heavier tracks.
- **Dry funk chops.** CTL off, MIDI MOD off. Tight muted chops without the chorus wobble.
- **Lead** (CTL on). Boost + RAT + delay, with chorus.
- **Dry fast lead.** CTL on, MIDI DLY off. Fast runs and the Vai-style flurries without delay smear.
- The King of Kings Right channel stomp from the board section still stacks on any lead state for the showcase solos.
- **Shared CTL/MIDI blocks:** CTL flips every block assigned to it, whatever state it's in (confirmed by Michael, 2026-10-12). A CTL block you switched by MIDI ends up the opposite of the designed CTL sound. So before pressing CTL, switch it back by MIDI. Changing a block by MIDI *after* pressing CTL is always safe.


## Full pedalboard (signal chain order)

Flamma FS-08 Octave → Donner Ultimate Comp → Donner Stylish Fuzz → Joyo King of Kings → Joyo Narcissus → Valeton GP-5.

**1. Flamma FS-08 Octave — bypassed**
- -2OCT: 0, -OCT: 0, +OCT: 0, +2OCT: 0, Dry: 100
- Footswitch off. The synths already cover the octave layers. On guitar it would also glitch on fast lead runs.

**2. Donner Ultimate Comp — engaged all song**
- COMP: 50
- TONE: 58
- LEVEL: 55
- Mode: TREBLE
- The squashed, even 80s studio clean. Every muted chop lands at the same level.
- In the lead it adds sustain going into the boost and RAT.
- TREBLE mode keeps the chops snappy through the chorus and hall.

**3. Donner Stylish Fuzz — bypassed**
- Footswitch off. Fuzz is the wrong era and texture for synthwave leads.

**4. Joyo King of Kings — Left channel bypassed. Right channel engaged only for the big solos.**

*Left channel:*
- Bypassed all song, footswitch off.

*Right channel (big-solo stack):*
- Volume: 50
- Gain: 40
- Tone: 55
- Clipping toggle: harder setting (more edge and saturation)
- Feedback toggle: higher-gain setting (more sustain)
- Stomp it on together with CTL for the showcase solos, like "Friction" and "Shadowverse". It stacks into the boost and RAT for Vai-level saturation and sustain.
- For ordinary lead lines and sax trades, leave it off. CTL alone is enough.

**5. Joyo Narcissus — bypassed**
- Footswitch off. The GP-5's A-Chorus handles chorus after the drive, which is the right place for it. Running both would get seasick.

**6. Valeton GP-5** — see settings above.

## Note on the full board vs. the `.prst`

The `.prst` file only encodes the GP-5's own 9 modules. The Flamma, Donner Ultimate Comp, Donner Stylish Fuzz, Joyo King of Kings and Joyo Narcissus settings above are not and cannot be part of that file. They're set by hand on the board, and documented here so the full patch can be rebuilt.
