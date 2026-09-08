# Cassie — Flyleaf

**Type:** Song
**Instrument:** Stratocaster (HSS)
**Full Board:** Yes
**BPM:** ~138 (estimate — no hard chart reference, tempo isn't load-bearing for this build)

## The song

"Cassie" (*Flyleaf*, 2005). Original studio version, not the later acoustic re-record.
Textbook loud/quiet dynamic. Verse is clean, ambient, chorus-drenched — chiming arpeggios with real space around them.
Chorus/bridge detonates into a thick, tight, mid-2000s alt-metal wall. Not a scooped death-metal tone — dense, present, and articulate, the way a lot of Howard Benson-produced records from this era sit in a mix.
The trick here is getting real heaviness out of a genuinely clean amp plus one hot pedal in front of it, not out of a built-in hi-gain amp sim. That's how a lot of records from this scene were actually tracked — a clean, high-headroom amp getting hit hard by a pedal gives you a tighter, more controllable heavy tone than dialing an amp sim's own gain all the way up.

CTL Off = clean, ambient verse.
CTL On = heavy chorus/bridge riff.

## GP-5 settings

Module order: NR, PRE, DST, AMP, CAB, EQ, MOD, DLY, RVB.

**NR — Gate** (always on)
- THRE: 32
La Charger cranked hard into a clean amp will hiss between hits. 32 keeps the heavy state tight without choking off the clean verse's reverb/delay tails — those are well above the noise floor, so the gate doesn't touch them.

**PRE — off**
Not used. Donner Ultimate Comp on the board is handling dynamics duty ahead of the GP-5 — see "Full Pedalboard" below.

**DST — La Charger** (CTL)
- Gain: 78, Tone: 58, VOL: 78
- CTL Off = off, CTL On = on
This is the whole heavy/clean switch. Crunch Box-style pedals are a genuinely common choice for exactly this job in modern rock/metal — tight, aggressive, and built to slam a clean amp's front end rather than relying on an amp's own gain stage. Off for the verse: the Twin sits there clean and glassy on its own. On for the chorus: pushes way past crunch into a real wall.

**AMP — Dark Twin** (Fender 65 Twin Reverb) (always on)
- Gain: 30, VOL: 72, Bass: 55, Middle: 55, Treble: 62, Bright: On
Same amp setting for both CTL states — La Charger is what separates clean from heavy, not a second amp voicing. Gain 30 keeps this genuinely clean and headroomy on its own — that's the point, this needs to be a real clean amp, not a low-gain "hi-gain amp turned down." Bright on adds the extra sparkle the ambient verse wants, and keeps the heavy tone articulate instead of mushy once La Charger is slamming it.

**CAB — off, using IR instead**
See "IR Cab Captures" below.

**EQ — Guitar EQ 2** (always on)
- 100Hz: +2, 500Hz: -6, 1kHz: +5, 3kHz: +8, 6kHz: +3, VOL: 55
-6 at 500Hz carves out the boxy low-mid buildup that a pedal-driven clean amp gets under heavy gain. +5/+8 at 1kHz/3kHz is where this riff's presence and pick-attack live — keeps it cutting instead of collapsing into mush. Small +2 at 100Hz keeps some low-end weight without letting it get flabby. Runs the same in both CTL states — it's shaping the whole signal path, not one section.

**MOD — off**
Not used on the GP-5. Joyo Narcissus on the board is the only modulation source for this patch — no reason to run two chorus sources.

**DLY — Analog** (CTL, inverted)
- Mix: 32, Time: 380ms, Feedback: 28, Trail: On
- CTL Off = on, CTL On = off
This is backwards from a typical rhythm/lead CTL split, and that's deliberate — the ambient verse is what wants the delay (space, shimmer, repeats trailing off into the chorus texture underneath the arpeggios), and the heavy riff explicitly does not (repeats stacking on top of a tight palm-muted wall just smears it). On for CTL Off (verse), off for CTL On (chorus).

**RVB — Hall** (always on)
- Mix: 30, Decay: 45, Trail: On
Stays on in both states, unlike the delay. A Hall reverb at moderate decay gives the verse real ambient depth, and kept light, it still glues the heavy riff together instead of drying it out completely — full-dry heavy tones can sound harsh on a bright clean-amp-plus-pedal rig like this one. This is doing cohesion duty, not the "ambient" job — that's the delay's job.

### CTL summary
- **CTL Off (verse):** NR + AMP (clean Dark Twin) + EQ + DLY (Analog) + RVB (Hall). Clean, chiming, spacious — the record's ambient/dream-pop side.
- **CTL On (chorus/bridge):** adds DST (La Charger, hard) and drops DLY. Thick, tight, heavy wall — same amp, same EQ, completely different weight.
- Hit CTL going into the first chorus. Back off for the return to verse. Stay on CTL for the bridge's heavier passages; back off again for any quiet vocal-forward moment before the final chorus push.

### IR Cab Captures
Using **American Twin 2x12 Medium Mix** (Fender Twin Reverb, JBL D120F) in place of a GP-5 CAB model.
Direct match for the Dark Twin amp model — that hi-fi, detailed JBL top end is exactly what the ambient clean verse wants, and it keeps the pedal-driven heavy tone from getting dark or woolly. CAB stays `model: null` in the JSON/`.prst`; load this IR into a `User IR` slot by hand in Valeton Suite and point the CAB block at it.

## Full Pedalboard

Signal chain order: Flamma FS-08 Octave → Donner Ultimate Comp → Donner Stylish Fuzz → Joyo King of Kings → Joyo Narcissus → Valeton GP-5.

**Flamma FS-08 Octave — bypassed**
- All octave knobs (-2OCT, -OCT, +OCT, +2OCT) at 0, Dry at 100
- Footswitch: off, never engaged for this song
No octave texture in "Cassie" — stays fully out of the signal path.

**Donner Ultimate Comp — engaged always**
- COMP: 40, TONE: 55, LEVEL: 55, Mode: NORMAL
Evens out sustain across the clean ambient arpeggios (that shimmery, even-level quality this kind of verse wants) and tames pick dynamics before they hit La Charger for the heavy state. NORMAL mode — Dark Twin with Bright on is already plenty sparkly, don't need TREBLE mode stacking more top end on top of that.

**Donner Stylish Fuzz — bypassed**
No fuzz texture in this song. Leave off; footswitch never engaged for this patch.

**Joyo King of Kings — both channels bypassed**
Not used. GP-5's own La Charger is doing 100% of the heavy lift here — the whole point of this patch is a genuinely clean amp on one side and one hot pedal on the other. Stacking a board OD in front would leak drive into the verse's clean tone even at low gain, since it can't be footswitched independently of the GP-5's CTL.

**Joyo Narcissus — engaged always**
- Mode: Vintage, Width: 35, Depth: 25, Rate: 25
Sole modulation source — the GP-5's own MOD module is off. Vintage mode keeps it musical rather than warbly; settings are a touch more present than the usual "light touch" default since the ambient verse is a genuine character element of this song, not incidental texture. Runs the same in both CTL states — subtle width under the heavy riff, more noticeably chorused under the clean verse.

**Valeton GP-5**
See GP-5 settings above.
