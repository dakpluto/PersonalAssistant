# Cliffs of Dover — Eric Johnson

Bass: Harley Benton P/J, 5-string, passive. Full board.
From *Ah Via Musicom* (1990), ~133 BPM.
This is a guitar showcase, so the bass job is to stay tight, articulate, and out of the way of Eric Johnson's runs — hi-fi and clean, not dirty. Most of the tune is a driving, uptempo groove locked to the main riff and the fast unison lines. There's one exception: the mid-tune interlude, where the band drops back and the guitar goes into a more spacious, atmospheric passage before the reprise and outro shred.

CTL off = the main driving groove (most of the song). CTL on = the interlude, where things open up.

## GP-5 settings

Module order: NR → PRE → DST → AMP → CAB → EQ → MOD → DLY → RVB.

**NR — Gate**
- THRE: 15
- Always on. Low threshold — this tone stays clean and hi-fi, nothing to gate out.

**PRE — Off**
- Compression duties are handled by the Donner Ultimate Comp on the board (see below).

**DST — Off**
**AMP — Off (null)**
**CAB — Off (null)**
- Replaced entirely by the NAM below. No separate drive stage — this tune calls for clarity and note definition, not grit, and stacking a second gain stage would just work against that.

**EQ — Bass EQ 2**
- 50Hz: +2, 120Hz: 0, 400Hz: -3, 800Hz: +3, 4.5kHz: +4, VOL: 55
- Always on, same for both CTL states.
- -3 at 400Hz cuts the boxiness that would otherwise mud up fast passages. +3 at 800Hz and +4 at 4.5kHz push the pick/finger attack and top-end sparkle — this needs to sit crisp and present under Johnson's famously hi-fi guitar tone, not warm and rounded off.

**MOD — B-Chorus — On CTL**
- Depth: 25, Rate: 0.4Hz, VOL: 55
- CTL off: bypassed (main groove — dry and direct). CTL on: engaged (interlude).
- Light touch — just enough shimmer to match the more atmospheric character of the interlude section, not a drenched chorus effect.

**DLY — Off**
- Not used. Keeping this simple — one atmospheric element (the RVB below) is enough for the interlude without cluttering a section that's meant to feel like a held breath before the outro.

**RVB — Room — On CTL**
- Mix: 25, Decay: 35, Trail: On
- CTL off: bypassed (main groove — tight and dry, right in the pocket with the drums). CTL on: engaged (interlude).
- Opens the space up for the interlude's more atmospheric feel, then closes right back down as the tune ramps back to full energy.

## NAM — Darkglass Harmonic Booster (Slot 60)

- Gain: 40
- VOL: 65
- Bass: 55
- Middle: 60
- Treble: 65
- Replaces AMP + CAB entirely (both null in the module chain above).
- The Harmonic Booster is the clean-voiced one of the Darkglass captures — a harmonic-enhancer boost into an Aguilar DB 751, not a drive/distortion pedal. That clean, modern, hi-fi character is exactly what this tune wants: present and articulate without any grit, so it never competes with the guitar for space.
- Encoded directly into the `.prst` as a real, active N->S (SnapTone) reference — no manual loading needed for this one.

## CTL summary

- **CTL Off — Main groove.** The driving uptempo sections and fast unison lines that make up most of the song. Dry, tight, clean.
- **CTL On — Interlude.** Chorus and Room reverb engage together, opening the tone up to match the more spacious, atmospheric passage before the reprise.
- Engage CTL going into the interlude, disengage coming out of it back into the driving main groove.

## Full pedalboard (signal chain order)

**1. Flamma FS-08 Octave — Bypassed**
- Footswitch off. This part needs a single, clean fundamental to stay articulate through fast passages — an octave stack would clutter it.

**2. Donner Ultimate Comp — Engaged**
- COMP: 55
- TONE: 60
- LEVEL: 60
- Mode: TREBLE
- Moderate compression keeps note-to-note consistency even through the tune's faster runs, without squashing the natural attack. TREBLE mode keeps that attack bright and audible ahead of the NAM.

**3. Donner Stylish Fuzz — Bypassed**
- Footswitch off. No fuzz anywhere in this build — it would clash with the clean, hi-fi character the whole tune is built around.

**4. Joyo Tidal Wave — Bypassed**
- Footswitch off, Drive/Blend not engaged. The NAM's own harmonic-boost character is the only "enhancement" this tone needs — stacking another gain stage would just soften the note definition this tune depends on.

**5. Joyo Narcissus — Bypassed**
- Footswitch off. The GP-5's own B-Chorus already covers the interlude's chorus needs — running both at once would just get thick and washy where this section wants shimmer, not mud.

**6. Valeton GP-5** — see settings above.
