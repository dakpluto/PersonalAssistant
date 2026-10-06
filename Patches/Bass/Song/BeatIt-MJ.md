# Beat It — Michael Jackson

Bass: Harley Benton P/J, 5-string, passive. Full board.
From *Thriller* (1982). About 139 BPM, est. In Eb minor.
The bass line is a driving, even eighth-note pulse. On the record it's reportedly an electric bass, with Steve Lukather credited, layered with a Synergy digital synth bass. It's a tight, polished LA-session sound, DI'd and compressed, not an amp in a room.
This patch gets that hybrid from one bass: a studio DI tone, plus a quiet sub-octave from the Flamma for the synth layer.
Pick for the even eighths. Neck (P) forward, bridge (J) at about 70%, tone at about 60%. I haven't verified whether the record was picked or fingered. A pick gets the attack the mix needs.

One sound for the whole song. The bass part doesn't change between sections, so no CTL. That's allowed on bass per the patch rules.

## GP-5 settings

Module order: NR → PRE → DST → AMP → CAB → EQ → MOD → DLY → RVB.

**NR — Gate**
- THRE: 15
- Always on. The line has short, clipped gaps. Light gating keeps them clean without chopping the notes.

**PRE — Off**
- The Donner Ultimate Comp handles compression on the board.

**DST — Off**
- No drive. The record's bass is clean and tight.

**AMP/CAB — NAM SnapTone, slot 52: AvalonAD2022** (always on)
- The `Avalon - 38 dB - Chan 1` NAM: an Avalon AD2022 studio preamp. A DI capture, no cab. That's the snaptone's role: polished 80s pop, LA sessions.
- This record was cut DI in LA by session players. That's exactly the sound.
- Gain: 50, VOL: 75, Bass: 55, Middle: 52, Treble: 56
- Gain 50: as captured. Clean.
- Bass 55: more weight to stand in for the synth layer's low end.
- Middle 52: near flat.
- Treble 56: keeps the pick attack sharp, so the eighths read as separate notes.
- VOL 75: the level Michael set for this snaptone in the 2026-10-02 VOL audit. Trim here if the patch jumps in level.
- AMP and CAB are off in the `.prst`. The N->S block calls slot 52 directly.

**EQ — Bass EQ 2**
- 50Hz: +1, 120Hz: +2, 400Hz: -1, 800Hz: +1, 4.5kHz: +2, VOL: 52
- Always on.
- +2 at 120Hz: the thump of the eighth-note pulse.
- -1 at 400Hz: takes out boxiness. A synth-layered bass is scooped there.
- +2 at 4.5kHz: pick click, which helps the line sit with the drum machine and real drums.

**MOD — Off**
- Not used.

**DLY — Off**
- Not used.

**RVB — Room**
- Mix: 6, Decay: 20, Trail: On
- Always on. Barely there: 80s pop bass is close to dry. It just keeps the DI tone from sounding sterile.

## CTL summary

- No CTL assignment. One fixed sound for the whole song.
- If you want a lift for the guitar solo, the place to add one later is DST Bass OD on CTL at low Blend. It isn't on the record, so it's left out here.

## Full pedalboard (signal chain order)

**1. Flamma FS-08 Octave — Engaged all song**
- -2OCT: 0
- -OCT: 30
- +OCT: 0
- +2OCT: 0
- Dry: 100
- The synth-bass layer. A quiet -1 octave under the bass gives it the smooth, synthetic sub weight of the Synergy part. Dry at 100 keeps your real bass on top. -OCT at 30 keeps it a layer, not a second bass.
- The line is single notes, so polyphonic tracking isn't an issue. If it glitches on fast runs, drop -OCT to 20.

**2. Donner Ultimate Comp — Engaged**
- COMP: 55
- TONE: 55
- LEVEL: 58
- Mode: NORMAL
- 80s session bass was compressed hard. COMP 55 makes every eighth note the same level, like the record. NORMAL mode, since the snaptone's Treble and the EQ already add the pick click.

**3. Donner Stylish Fuzz — Bypassed**
- Footswitch off. No fuzz.

**4. Joyo Tidal Wave — Engaged (preamp/EQ), Drive off**
- Drive: 15
- Blend: 25
- Presence: 55
- Level: 58
- Treble: 55
- Middle: 50
- Bass: 55
- Mid-Frequency: 1000Hz
- Bass-Shift: 80Hz
- Cab-Sim (DI out): Off
- Ground Lift: Off
- Drive footswitch: off all song. The record is clean.
- The preamp and EQ stay active regardless of the footswitch. Bass-Shift 80Hz keeps the low end tight, so the octave layer doesn't turn to mud. Mid-Frequency 1000Hz for attack.

**5. Joyo Narcissus — Bypassed**
- Footswitch off. No chorus.

**6. Valeton GP-5** — see settings above.

## Note on the full board vs. the `.prst`

The `.prst` file only encodes the GP-5's own 9 modules. The Flamma, Donner Ultimate Comp, Donner Stylish Fuzz, Joyo Tidal Wave and Joyo Narcissus settings above are not and cannot be part of that file. They're set by hand on the board, and documented here so the full patch can be rebuilt. The Flamma octave is a real part of this bass sound, so don't skip it.
