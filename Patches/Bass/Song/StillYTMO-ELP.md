# Still...You Turn Me On — Emerson, Lake & Palmer

Bass: Harley Benton P/J, 5-string, passive. Full board.
From *Brain Salad Surgery* (1973), ~72 BPM.

## A note on this patch

Greg Lake plays both the 12-string acoustic and bass on this track, alongside Emerson's keys — this isn't a bass-free recording.
No note-for-note transcription of Lake's actual bass part here, though — this patch is a written supportive part built to match the song's own dynamic arc (minimal under the acoustic verses, driven under the loud mid-section), not a claim that it reproduces what he played.

Verses stay minimal and warm — long sustained root notes under the acoustic guitar, out of the way of the vocal.
The mid-section is the payoff: that's where the record gets loud and dramatic (heavily effected electric guitar, Emerson's keys swelling underneath). A bass would push forward and get some grit there to match the intensity.

## GP-5 settings

Module order: NR → PRE → DST → AMP → CAB → EQ → MOD → DLY → RVB.

**NR — Gate**
- THRE: 15
- Always on, low threshold — clean, controlled part, minimal noise floor to manage.

**PRE — Micro Boost — On CTL**
- Gain: 55
- CTL off: bypassed (verse). CTL on: engaged (mid-section).
- Verse needs zero push — it should sit back, not compete with the vocal and 12-string. Mid-section gets a clean lift to bring the bass forward into the drama.

**DST — Bass OD — On CTL**
- Gain: 60, Blend: 65, VOL: 60, Bass: 45, Treble: 55
- CTL off: bypassed (verse). CTL on: engaged (mid-section).
- This is the module doing the heavy lifting for the dynamic contrast. Verse stays completely clean. Mid-section gets real grit — matching the intensity of that famously wild, heavily-processed electric guitar passage without trying to literally imitate it.

**AMP — Classic Bass (Ampeg SVT)**
- Gain: 30, Bass: 55, Middle: 55, MidFreq: 800Hz, Treble: 45, VOL: 60
- Always on, same for both CTL states.
- Low gain keeps this headroom-only, not a drive source — the DST module handles all the grit. MidFreq at 800Hz and a rolled-back Treble keep the tone warm and rounded, matching the intimate, unplugged character of the verses without fighting the acoustic 12-string's own top end.

**CAB — User IR 9 (TC410, Slot 9)**
- VOL: 58
- Always on.
- TC410 has a simple, near-flat response with a mild 100Hz boost — a neutral, honest pairing that doesn't push its own character onto a part that isn't a transcription of Lake's original tone.

**EQ — Bass EQ 1**
- 33Hz: +2, 150Hz: +2, 600Hz: 0, 2kHz: +1, 8kHz: -1, VOL: 52
- Always on, same for both CTL states.
- Gentle low-end lift for warmth and foundation, top end pulled back slightly — keeps the bass supportive and out of the vocal/acoustic-guitar frequency range rather than cutting through.

**MOD — Off**
- No modulation. This part stays plain and direct in both sections — modulation would work against the "supportive, not attention-grabbing" job this bass is doing.

**DLY — Off**
- Not used.

**RVB — Hall — On CTL**
- Mix: 25, Decay: 45, Trail: On
- CTL off: bypassed (verse). CTL on: engaged (mid-section).
- Verse stays dry and close, matching the intimate solo-acoustic feel. Mid-section gets a hall swell to sit inside the bigger, more dramatic space that section opens up into.

## CTL summary

- **CTL Off — Verse.** Clean, dry, minimal. Long sustained notes, entirely out of the way.
- **CTL On — Mid-section.** Boost, drive, and hall reverb all engage together. Forward, driven, and big — matching the record's own dramatic shift.
- Engage CTL where the mid-section breaks open; disengage back into the return to the acoustic outro.

## Full pedalboard (signal chain order)

**1. Flamma FS-08 Octave — Bypassed**
- Footswitch off. No octave layering — nothing about this part calls for it.

**2. Donner Ultimate Comp — Engaged**
- COMP: 35
- TONE: 50
- LEVEL: 55
- Mode: NORMAL
- Light compression keeps the sustained verse notes smooth and even, without adding any obvious "squeeze." NORMAL mode — no need for extra brightness here, the GP-5 EQ already handles that.

**3. Donner Stylish Fuzz — Bypassed**
- Footswitch off. The GP-5's own Bass OD (on CTL) already covers the mid-section's grit — stacking a second gain stage would overdo it and muddy the drive character.

**4. Joyo Tidal Wave — Bypassed**
- Footswitch off, Drive/Blend not engaged. Same reasoning as the fuzz — one drive source (Bass OD) is enough here; more would fight for definition.

**5. Joyo Narcissus — Bypassed**
- Footswitch off. No chorus — matches the MOD-off call on the GP-5.

**6. Valeton GP-5** — see settings above.
