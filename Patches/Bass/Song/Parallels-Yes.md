# Parallels — Yes

Bass: Harley Benton P/J, 5-string, passive. Full board.
1978 (*Tormato*). ~132 BPM (estimate — no hard chart reference, tempo isn't load-bearing for the tone choices below). A relentless, full-throttle rocker almost start to finish — no big quiet-verse/loud-chorus contrast to build a CTL split around, so this patch is one steady, massive, driven tone throughout. Chris Squire famously tracked this song's bass through a church organ amplifier setup, not a conventional bass rig — the goal here is that huge, cathedral-scale, faintly swirling low end, not a typical Squire bright-and-driven Rickenbacker growl (that's what the existing `Yes-Squire` artist patch already covers).

No CTL on this one — the whole song sits at this level of size and drive.

## GP-5 Settings

Module order: NR → PRE → DST → AMP → CAB → EQ → MOD → DLY → RVB

**NR — Gate**
- THRE: 35
- Always on. A driven, high-gain patch like this needs a real gate to keep the noise floor in check between hits.

**PRE — Off**
Not used. No boost stage needed — this patch is already at full size and drive all the time; there's no "bigger" state to boost into.

**DST — Bass OD** (Boss ODB-3)
- Gain: 75, Blend: 70, VOL: 60, Bass: 45, Treble: 65
- Always on. This is the core of the driven, huge-amp character — high Gain for real grit, Blend at 70 keeps it mostly wet without fully drowning the fundamental (note definition survives under the drive). Bass rolled back to 45 on the pedal itself — low end comes from the snaptone and the note, not a flabby DST signal.

**AMP/CAB — NAM SnapTone, slot 55: BrightSVT** (always on)
- Built from the `SVT SANS BRIGHT DRIVE (SVT-CL)` NAM and the Hartke410 IR, combined into one snaptone.
- Real Ampeg SVT-CL with the bright drive setting, into the aluminum-cone Hartke410 IR.
- Squire's driven Rickenbacker tone. Bright SVT drive plus aluminum cones.
- Gain: 60, VOL: 50, Bass: 55, Middle: 70, Treble: 60
- Gain 60: noticeably over default. This part wants more push than the other BrightSVT patches.
- Bass 55: a touch more low end.
- Middle 70: more midrange.
- Treble 60: more top end.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 55 directly.

**EQ — Bass EQ 1**
- 33Hz: +4, 150Hz: +2, 600Hz: -2, 2kHz: +8, 8kHz: +4, VOL: 55
- Always on. Unlike a mix-conscious rock/metal bass patch, this one actually wants real sub weight (33Hz/150Hz both pushed) — the "massive cathedral organ" character depends on genuine low-end power, not a scooped/tight tone. 600Hz trimmed to avoid boxy mud, 2kHz pushed hard for cut-through bite against the busy arrangement, 8kHz nudged up for edge on the driven amp grit.

**MOD — V-Roto** (BBD Blue Vibrato)
- Depth: 55, Rate: 1.0Hz
- Always on. Heavier than the usual light-touch default, deliberately — this song is specifically known for an unusual, swirling texture (the rotating-speaker/Leslie-adjacent quality of the real recording), which is exactly the exception case for going past a subtle modulation setting. Rate kept slow (~1Hz) for a majestic, "chorale"-speed swirl rather than a fast tremolo-like wobble.

**DLY — Off**
Not used. This arrangement is dense and busy — delay repeats would blur the bass's attack and definition, which this patch can't afford to lose given how hard it's already pushing gain.

**RVB — Hall**
- Mix: 20, Decay: 40, Trail: On
- Always on. A real nod to the recording's actual origin (a church organ amp) — a touch of cathedral-scale space, kept light enough not to wash out the attack this driven a tone still needs.

## Full Pedalboard

Signal chain order: Flamma FS-08 Octave → Donner Ultimate Comp → Donner Stylish Fuzz → Joyo Tidal Wave → Joyo Narcissus → Valeton GP-5.

**Flamma FS-08 Octave — bypassed**
- All octave knobs (-2OCT, -OCT, +OCT, +2OCT) at 0, Dry at 100
- No octave layering — the 5-string's low B plus this patch's already-massive low end covers the range this song needs.

**Donner Ultimate Comp — engaged**
- COMP: 55, TONE: 55, LEVEL: 55, Mode: TREBLE
- Always on. Squashes pick/finger attack into a consistent, driving level — this is a relentless rock part, not a dynamic one. TREBLE mode keeps attack articulate before it hits two more gain stages downstream.

**Donner Stylish Fuzz — engaged**
- Sustain: 45, Treble: 55, Bass: 35, Volume: 55
- Always on. A second layered gain stage ahead of the Tidal Wave and the GP-5's own Bass OD — this huge, driven tone benefits from stacked distortion the same way the RammGrind patch's approach does, though dialed to moderate (not maxed) so it thickens rather than turns to splatter. Bass rolled back on the pedal itself, same reasoning as always: keep the low end controlled at the source.

**Joyo Tidal Wave — engaged**
- Drive: 60, Blend: 55, Presence: 55, Level: 60
- Treble: 55, Middle: 62, Bass: 50
- Mid-Frequency toggle: 500Hz (body and weight, matches this song's massive-not-tight low end goal)
- Bass-Shift toggle: 40Hz (fuller low end — this patch wants real size, not tightness)
- Cab-Sim (DI out): On
- Ground Lift: Off (only flip on if a specific room throws hum)
- Another real gain/preamp stage, not just a glue stage — this patch's size comes from genuinely cascaded drive (fuzz, Tidal Wave, Bass OD, then a hot SVT), matching how big and relentless the actual recording is.

**Joyo Narcissus — bypassed**
Modulation is handled entirely by the GP-5's own MOD module (V-Roto). Stacking a second modulation source here would fight with the vibrato's swirl instead of complementing it.

**Valeton GP-5**
See GP-5 settings above.

## Notes

No CTL choreography needed — this patch loads into its one, full-size, driven tone and stays there for the whole song.
