# Tim Henson / Polyphia (Bass) — Signature Sound

Artist patch. Bass: Harley Benton P/J, 5-string, passive. Full board.

## The signature sound

Polyphia's bassist is Clay Gober. The bass in the band works like the low end of a modern pop/trap record, not a rock band.
- **The base tone.** Hi-fi, tight, bright. Lots of slap and fingerstyle, with every pop and ghost note clear. It sounds DI'd and produced, not like a miked cab in a room.
- **The heavy sections.** A grindy, upper-mid drive blended under a clean low end, in the modern parallel-drive style. The fundamental stays solid while the grit cuts through the guitars.
- **The production layer.** The trap-influenced tracks lean on 808-style sub bass. I haven't verified which parts on which records are bass vs. programmed sub, so treat the octave below as optional color.
How this patch models it:
- B2 AvalonAD2022, a studio-DI snaptone, is the hi-fi base for the whole patch.
- The heavy-section grind comes from the Joyo Tidal Wave's drive, stomped on and off. Blend at 40 keeps it parallel, so the clean low end stays under the dirt.
- The Flamma -1 octave is the 808-style sub, stomped only for those sections.

No GP-5 CTL. The two sounds are the Tidal Wave drive footswitch, which already does exactly what a CTL drive would. Per the board rules, dirt comes from the Tidal Wave, not the GP-5's Bass OD.

Pickups: both up, bridge (J) at 100%, neck (P) at about 85%, tone at about 80%. The J-forward blend gives slap and pops their snap. Fingers or slap for the clean parts. Hard fingerstyle or a pick for the heavy riffs.

## GP-5 settings

Module order: NR → PRE → DST → AMP → CAB → EQ → MOD → DLY → RVB.

**NR — Gate**, always on.
THRE: 18.
Polyphia riffs have hard stops. A light gate keeps the rests clean when the Tidal Wave drive is on, without choking ghost notes.

**PRE — Off.**
The Donner Ultimate Comp does the compression on the board.

**DST — Off.**
Drive comes from the Tidal Wave. Bass OD is too harsh.

**AMP/CAB — NAM SnapTone, slot 52: AvalonAD2022** (always on)
- The `Avalon - 38 dB - Chan 1` NAM: an Avalon AD2022 studio preamp. A DI capture with no cab. That's the snaptone's role: polished studio DI.
- Modern produced bass is DI-first, which makes this the right base. It's also a finished, DI-style tone for the live rig.
- Gain: 50, VOL: 75, Bass: 55, Middle: 48, Treble: 60
- Gain 50: as captured, clean.
- Bass 55: a little extra weight under the slap.
- Middle 48: a slight scoop, for the hi-fi slap curve.
- Treble 60: pops and string snap on top.
- VOL 75: the level Michael set for this snaptone in the 2026-10-02 VOL audit. Trim here if the patch jumps in level.
- AMP and CAB are off in the `.prst`. The N->S block calls slot 52 directly.

**EQ — Bass EQ 1**, always on.
33Hz: +1, 150Hz: +1, 600Hz: -2, 2kHz: +2, 8kHz: +2, VOL: 50.
The modern slap curve.
+1 at 33Hz: extended low end for the 5-string's low B.
-2 at 600Hz: takes out honk.
+2 at 2kHz: where the Tidal Wave grind and finger attack cut through the guitars.
+2 at 8kHz: string zing on pops.

**MOD — Off.** Not used.

**DLY — Off.** Not used.

**RVB — Room**, always on.
Mix: 6, Decay: 20, Trail: on.
Barely there. Modern produced bass is close to dry, and this just keeps the DI from sounding sterile.

## CTL summary

- No CTL assignment. Allowed on bass.
- The clean-vs-heavy switch is the Tidal Wave drive footswitch. See below.

## Full pedalboard (signal chain order)

**1. Flamma FS-08 Octave — Bypassed by default, stomp for 808-style sections**
- -2OCT: 0
- -OCT: 35
- +OCT: 0
- +2OCT: 0
- Dry: 100
- Stomp it on for the trap-style sections where the track wants a sub layer. Dry 100 keeps your real bass on top. -OCT 35 makes it a layer, not a second bass.
- Keep it off for slap and fast runs. Polyphonic tracking gets glitchy on fast, percussive playing.

**2. Donner Ultimate Comp — Engaged all the time**
- COMP: 55
- TONE: 60
- LEVEL: 55
- Mode: TREBLE
- Slap needs it. COMP 55 brings thumbs and pops to one level. TREBLE mode keeps the pop attack audible.

**3. Donner Stylish Fuzz — Bypassed**
- Footswitch off. No fuzz.

**4. Joyo Tidal Wave — Engaged (preamp/EQ). Drive stomped for heavy sections**
- Drive: 50
- Blend: 40
- Presence: 62
- Level: 55
- Treble: 58
- Middle: 55
- Bass: 55
- Mid-Frequency: 1000Hz
- Bass-Shift: 80Hz
- Cab-Sim (DI out): Off
- Ground Lift: Off
- Drive footswitch: off for clean, slap and fingerstyle parts. On for heavy riffs and breakdowns.
- Blend 40 is the key setting. The dry signal keeps the low end solid, and the drive adds grind on top. That's the parallel-drive sound.
- Presence 62 and Mid-Frequency 1000Hz put the grit in the upper mids, where it cuts through the guitars.
- Bass-Shift 80Hz keeps the drive tight on fast palm-muted riffs and the low B.
- The preamp and EQ stay active either way.

**5. Joyo Narcissus — Bypassed**
- Footswitch off. No chorus.

**6. Valeton GP-5** — see settings above.

## Note on the full board vs. the `.prst`

The `.prst` file only encodes the GP-5's own 9 modules. The Flamma, Donner Ultimate Comp, Donner Stylish Fuzz, Joyo Tidal Wave and Joyo Narcissus settings above are not and cannot be part of that file. They're set by hand on the board, and documented here so the full patch can be rebuilt. The Tidal Wave drive stomp is this patch's second sound, so don't skip it.
