# Hey Jealousy — Gin Blossoms

Bass: Harley Benton P/J, 5-string, passive. Full board.
1992 alt-rock/power-pop from *New Miserable Experience*, ~116 BPM.
Bill Leen's part here isn't a melodic showcase — it's a steady, punchy rock pulse holding down the bottom while those chiming 12-strings do the jangle.
Straightforward roots-and-fifths, driven by feel more than by fancy movement.

The song has a clean dynamic arc: verses sit back a little, more relaxed.
The chorus ("And I don't want to know if you are lonely...") is the hook — bigger, brighter, more forward.
That's the CTL split.
CTL off = verse. CTL on = chorus.

## GP-5 settings

Module order: NR → PRE → DST → AMP → CAB → EQ → MOD → DLY → RVB.

**NR — Gate**
- THRE: 18
- Always on, low threshold. Clean signal, not much to gate.

**PRE — Micro Boost — On CTL**
- Gain: 55
- CTL off: bypassed (verse). CTL on: engaged (chorus).
- Verse stays laid-back and unforced. Chorus gets a clean push so the bass sits forward with the hook instead of getting buried under the guitars.

**DST — Off**
- Not used. The amp's own gain carries the drive character this song needs — stacking a pedal on top would just get muddy.

**AMP — Classic Bass**, always on. Gain 40, Bass 52, Middle 58, MidFreq 450Hz, Treble 60, VOL 65.

**CAB — User IR 1 (Apg115)**, always on. VOL 60.

**EQ — Bass EQ 1**
- 33Hz: +2
- 150Hz: +1
- 600Hz: -2
- 2kHz: +5
- 8kHz: +2
- VOL: 55
- Always on, same for both CTL states.
- Slight low-mid scoop at 600Hz keeps things from getting boxy against the jangly guitars. 2kHz and 8kHz boosts add the pick-attack presence this power-pop tone wants — bright and cutting, not buried.

**MOD — Off**
- No modulation. This bass part is dry and direct — a chorus/vibe here would just soften the attack this song needs.

**DLY — Off**
- Not used.

**RVB — Room — On CTL**
- Mix: 20, Decay: 35, Trail: On
- CTL off: bypassed (verse). CTL on: engaged (chorus).
- Verse stays tight and dry. Chorus gets a touch of room to swell with the hook — same "lift together" logic as the PRE boost, both kick in on the same footswitch press.

## AMP: Classic Bass (Ampeg SVT) + CAB: Apg115 IR (User IR 1)

Rebuilt 2026-09-18 off the GP-5's own AMP + a loaded IR — NAMs are off for now (Valeton N->S volume issue, device-side). The old NAM was the Darkglass Vintage Deluxe — a lower-gain, vintage-voiced bass drive giving warmth and harmonic girth without turning into an overdrive pedal, present and a little gritty on pick attack, not clean-hi-fi and not distorted. Classic Bass dialed moderate (not maxed) covers the same territory; Apg115 (Ampeg Heritage B-15, the vintage 1x15 with a girth-adding 100Hz peak) is the vintage-flavored counterpart in the loaded IR set, a better fit for this early-90s alt-rock production than the more modern SVT-810 stack.

- Gain: 40 — moderate, enough natural amp breakup for the vintage push, not clean, not maxed-aggressive.
- Bass: 52, Middle: 58, MidFreq: 450Hz — a lower-mid-leaning frequency for the vintage character, rather than the more aggressive 800Hz used elsewhere in this set.
- Treble: 60.
- VOL: 65.
- CAB VOL: 60.

## CTL summary

- **CTL Off — Verse.** No boost, dry. Bass sits back, holds the pocket.
- **CTL On — Chorus.** Boost engaged, light room reverb swells in. Bass pushes forward with the hook.
- Engage CTL right as the chorus hits, disengage back into the next verse.

## Full pedalboard (signal chain order)

**1. Flamma FS-08 Octave — Bypassed**
- Footswitch off. No octave layering — this part is a straight rock pulse, not a texture piece.

**2. Donner Ultimate Comp — Engaged**
- COMP: 42
- TONE: 65
- LEVEL: 60
- Mode: TREBLE
- Moderate compression evens out the pick attack driving this song's energy.
- TREBLE mode keeps that attack audible and bright before it hits the NAM's own drive stage — important since the NAM adds some low-end girth that could otherwise dull the pick transient.

**3. Donner Stylish Fuzz — Bypassed**
- Footswitch off. No fuzz — this song's bass grit comes from the NAM's own vintage drive character, not a stompbox fuzz wall.

**4. Joyo Tidal Wave — Bypassed**
- Footswitch off, Drive/Blend not engaged. Stacking another preamp/drive stage on top of the NAM would overdo the grit for a pop-rock tune this bright and clean-driven.

**5. Joyo Narcissus — Bypassed**
- Footswitch off. No chorus — matches the MOD-off call on the GP-5. This bass stays dry and direct throughout.

**6. Valeton GP-5** — see settings above.
