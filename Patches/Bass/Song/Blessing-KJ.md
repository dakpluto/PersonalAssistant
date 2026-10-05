# The Blessing — Kari Jobe, Cody Carnes

Kari Jobe and Cody Carnes, with Elevation Worship. From *The Blessing* (Kari Jobe) and *Graves into Gardens* (Elevation), 2020. Written by Chris Brown, Cody Carnes, Kari Jobe and Steven Furtick.
Slow, long-form build. 70 BPM, B.
The bass sits out or plays very sparse in the opening. It holds long, deep notes under the pads in the verses. Then it drives the long "May His favor be upon you" bridge into the "Amen" climax.
I haven't verified the exact bass parts or gear. The low end on modern Elevation/Kari Jobe live records may be layered with synth bass. This patch covers the electric part and leans sub-heavy so it sits like one.
Instrument: Harley Benton P/J (passive 5-string). Both pickup volumes full, tone about 55%.
Full board. Set song 4 of 4.

## GP-5 Settings

Module order: NR → PRE → DST → AMP → CAB → EQ → MOD → DLY → RVB

**NR — Gate**, always on.
THRE: 8.
The lowest in the set. Whole notes at 70 BPM need to ring out fully.

**PRE — off.**
The Donner comp on the board is enough. This song lives on dynamics.

**DST — off.**
Michael prefers the Tidal Wave's drive section on bass. The GP-5's Bass OD is too harsh. The bridge/climax dirt comes from stomping the Tidal Wave drive on the board.

**AMP/CAB — NAM SnapTone, slot 59: WorshipSVT** (always on)
- Built from the `SVT CLEAN PUSHED (SVT-CL)` NAM and the Ampeg SVT Bright Beta52 IR, combined into one snaptone.
- Real Ampeg SVT-CL on the clean-pushed setting, into a bright, Beta 52-miked SVT 4x10 IR. Modern worship bass.
- Gain: 48, VOL: 55, Bass: 62, Middle: 46, Treble: 44
- Darker than Forever Reign on the same snaptone. The verses want a sub-forward, synth-adjacent bottom.
- Gain 48: slightly cleaner than captured.
- Bass 62: deep and round.
- Middle 46: scooped a touch, out of the vocal.
- Treble 44: soft top.
- VOL 55: the level Michael set for this snaptone in the 2026-10-02 VOL audit.
- Same in both CTL states. AMP and CAB are off in the `.prst`. The N->S block calls slot 59 directly.

**EQ — Bass EQ 2**, always on.
50Hz: +4, 120Hz: +1, 400Hz: -3, 800Hz: 0, 4.5kHz: -3, VOL: 52.
50Hz is the sub foundation. The 400Hz cut clears mud under the pads. 4.5kHz down keeps the verses smooth. The Tidal Wave drive's Presence brings edge back at the bridge.

**MOD — off.**
**DLY — off.**
**RVB — off.** Keep the sub tight. The pads supply the wash.

### CTL and footswitch choreography
No GP-5 CTL on this patch. Adding a GP-5 boost would mean three switches on the bridge downbeat. The Tidal Wave drive's blend gives enough lift on its own.
- **Intro, verses, choruses:** Tidal Wave drive off. Flamma FS-08 off. Deep, round, sub-forward SVT under the pads.
- **Bridge ("May His favor") and "Amen" climax:** Tidal Wave drive on and Flamma FS-08 on, both stomped as the drums kick in. Driven, huge, with a sub-octave under it. Move the B root to the A string (2nd fret) so the -OCT voice supplies the low B.
- **Quiet tag after the climax:** both off.

## Full Pedalboard — Fixed For This Set

This patch is one of 4 built for one worship set: The River (Jordan Feliz), 10,000 Reasons (Matt Redman), Forever Reign (Hillsong Worship), The Blessing (Kari Jobe). Every pedal ahead of the GP-5 has its knobs set once for the whole set. Knobs can't change between songs. Footswitches can: any pedal can be stomped on or off between or during songs. The GP-5 patch is the only thing whose settings change.
The set is one 124 BPM soul-pop groove plus three ballads from 83 down to 70 BPM. So the board does the foundation work (even dynamics, preamp EQ) and supplies the set's only drive stage, the Tidal Wave, stomped per song. Song-specific voicing lives in the GP-5 patch.
Rig: the GP-5 feeds the DC210XLT's effects return, bypassing the amp's preamp. FOH comes from the amp's DI. The amp is only a personal monitor.
So the GP-5 output has to be a finished, cab-simmed tone. Every patch in this set keeps its cab on. CleanB15 and WorshipSVT have their IR built into the snaptone. AvalonAD2022 is a studio-DI capture, which is already FOH-ready as is.
None of this is in the `.prst` file. The `.prst` only holds the GP-5's own 9 modules.

**1. Flamma FS-08 Octave — Off, except The Blessing's bridge and "Amen" climax.**
- -2OCT: 0, -OCT: 35, +OCT: 0, +2OCT: 0, Dry: 100
- One sub-octave voice under full dry. That adds synth-bass-style weight, not an obvious octave effect.
- Only The Blessing uses it. Those live records may layer synth bass at the peaks, and slow held notes at 70 BPM are the best case for polyphonic tracking.
- The River, 10,000 Reasons and Forever Reign: off the whole song.
- In The Blessing's bridge, play the B root on the A string (2nd fret, 61.7Hz), not the open low B. The -OCT voice then fills in the low B at 30.9Hz. An octave under the open low B lands at 15Hz, which is just mud that eats headroom.

**2. Donner Ultimate Comp — On, entire set.**
- COMP: 40
- TONE: 50
- LEVEL: 55
- Mode: NORMAL
- COMP 40 is a compromise. The River wants even, punchy eighths. 10,000 Reasons, Forever Reign and The Blessing need room to swell from soft to loud.
- 40 holds The River steady without flattening the ballad builds. The River also gets a light COMP4 on the GP-5 for the extra control.
- NORMAL keeps it neutral. Brightness is set per song on the GP-5 instead.
- It stays on even though it could be switched. The three ballads run no GP-5 compressor, so this is their only compression.

**3. Donner Stylish Fuzz — Off, entire set.**
- Sustain: 20, Treble: 40, Bass: 60, Volume: 40 (parked)
- No song in this set calls for fuzz.
- Parked low, so a bumped footswitch is a mild surprise, not a blast.

**4. Joyo Tidal Wave — Preamp on all set. Drive section stomped per song (see the list below).**
- Drive: 42
- Blend: 40
- Presence: 55
- Level: 55
- Treble: 52, Middle: 55, Bass: 55
- Mid-Frequency toggle: 500Hz
- Bass-Shift toggle: 80Hz
- Cab-Sim (DI out): n/a. The Tidal Wave's DI isn't used.
- Ground Lift: n/a. Same reason.
- The footswitch only toggles the drive section. The preamp EQ and Level stay active either way.
- This is the set's only drive stage. Michael prefers it over the GP-5's Bass OD, which is too harsh on bass. No patch in this set uses Bass OD.
- Drive 42 at Blend 40 covers all three dirt moments: The River's choruses, Forever Reign's bridge and The Blessing's climax. Blend 40 keeps the clean low end underneath, so the bottom doesn't thin out.
- Presence 55 gives the drive enough edge to cut through a full band and choir.
- 500Hz mids give body for the three slow builds.
- 80Hz Bass-Shift tightens the low end of the drive under keys pads and kick. 40Hz would turn the ballads to mud.
**5. Joyo Narcissus — Off, entire set.**
- Width: 30, Depth: 25, Rate: 20, Mode: Vintage (parked)
- No song in this set wants chorus on the bass.
- Parked on light Vintage settings, so a bumped footswitch just adds a faint shimmer.

**6. Valeton GP-5 — as detailed above.** This is the only thing that changes between songs.

### Set order and footswitch states

1. **River-JF:** Comp on. Tidal Wave drive off for the verses, **on for the choruses and bridge**. Flamma, Fuzz, Narcissus off.
2. **10KReasons-MR:** Comp on. Tidal Wave drive off the whole song. Flamma, Fuzz, Narcissus off.
3. **ForeverReign-HS:** Comp on. Tidal Wave drive off for the verses, **on for the bridge and final choruses** (with the GP-5 CTL). Flamma, Fuzz, Narcissus off.
4. **Blessing-KJ:** Comp on. **Tidal Wave drive and Flamma on for the bridge and "Amen" climax only.** Fuzz, Narcissus off.

Every song starts with the Tidal Wave drive off. Make sure it's off at the end of each song.

All 4 patches are at patch VOL 55, so the level stays consistent through the set. Trim per song only if one jumps in the room.
