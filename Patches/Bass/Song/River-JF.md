# The River — Jordan Feliz

Jordan Feliz, from *The River* (2015).
Soul-pop CCM. Handclap-stomp groove and a big gospel-flavored chorus. 124 BPM, Bb (per Tunebat/Worship Together; one chart lists Db).
The bass role is a punchy, bouncing pop pocket. It locks with the kick in the verses and digs in for the "down to the river" choruses.
I haven't verified the exact bass parts or gear on the record. The low end on a polished pop production like this may be layered with synth bass. This patch covers the electric part.
Instrument: Harley Benton P/J (passive 5-string). Both pickup volumes full, tone about 75%. The J adds snap so the eighths stay articulate at 124.
Full board. Set song 1 of 4.

## GP-5 Settings

Module order: NR → PRE → DST → AMP → CAB → EQ → MOD → DLY → RVB

**NR — Gate**, always on.
THRE: 15.
Clears hum between the stop-time hits without cutting note tails.

**PRE — COMP4**, always on.
Sustain: 42, Attack: 40, Clip: 35, VOL: 56.
The Donner comp is already on the board, so this one runs light.
It adds the pop-tight evenness this song wants and the ballads don't.
Attack 40 lets the finger transient through, so the groove keeps its bounce.

**DST — off.**
Michael prefers the Tidal Wave's drive section on bass. The GP-5's Bass OD is too harsh. The chorus/bridge dirt comes from stomping the Tidal Wave drive on the board.

**AMP/CAB — NAM SnapTone, slot 52: AvalonAD2022** (always on)
- Built from the `Avalon - 38 dB - Chan 1` NAM (Avalon AD2022 DI preamp). No IR: it's a studio DI capture.
- Polished studio DI. The right voice for a clean, radio-ready pop record, over a miked amp.
- Gain: 52, VOL: 75, Bass: 55, Middle: 52, Treble: 56
- Gain 52: a hair over the capture, for a little density.
- Bass 55: more weight under the kick.
- Middle 52: slight push so it reads on small speakers.
- Treble 56: pop sparkle.
- VOL 75: the level Michael set for this snaptone in the 2026-10-02 VOL audit.
- Same in both CTL states. AMP and CAB are off in the `.prst`. The N->S block calls slot 52 directly.

**EQ — Bass EQ 1**, always on.
33Hz: 0, 150Hz: +3, 600Hz: -3, 2kHz: +3, 8kHz: -1, VOL: 50.
150Hz for punch. The 600Hz cut clears P-pickup boxiness. 2kHz for articulation. 33Hz flat, since the low B already has plenty of sub.

**MOD — off.**
**DLY — off.**
**RVB — off.** A bouncy 124 BPM pocket stays dry and tight against the kick.

### CTL and footswitch choreography
No GP-5 CTL on this patch. The verse/chorus split comes from the board.
- **Verses and pre-choruses:** Tidal Wave drive off. Clean, compressed, punchy DI pop.
- **Choruses and bridge:** Tidal Wave drive on. Warm growl under the claps and gang vocals.

Stomp the drive at the first chorus. Stomp it off for the verses and any breakdown.

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
