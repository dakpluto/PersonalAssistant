# DYFAM-SM — Don't You Forget About Me (Simple Minds, 1985, ~114 BPM)

## Song context

This bass part is a pulse, not a feature.
The track is built on a synth wall — Korg/Oberheim pads, a huge gated snare, that DX7 hook.
Bass has one job: lock the low end down and drive the eighth-note pulse without getting buried or muddying the mix.
Tone is clean, present, and slightly bright — pick/finger attack has to cut, not thicken.
No grit, no fuzz, no distortion — this song was not made with a dirty bass.

Two states:
- **CTL off** — the verse/chorus pulse. Clean, tight, contained. This is 90% of the song.
- **CTL on** — the "hey hey hey" outro hook. Same core tone, but pushed — brighter and louder to sit on top of the vocal ad-libs and the synth swell instead of getting swallowed by them.

## GP-5 settings

Module order: NR → PRE → DST → AMP → CAB → EQ → MOD → DLY → RVB

- **NR — Gate**: THRE 20. Always on.
  Just cleaning up open-string hum and fret noise, nothing aggressive — no need to gate a bass that's playing constantly.

- **PRE — Boost**: Gain 65, +3dB on, Bright on. **CTL module** — off in CTL off, on in CTL on.
  This is the entire "verse vs. hook" split. CTL off leaves the amp's natural level alone for the pulse.
  CTL on kicks the level and brightens the top end for the outro hook, so the bass rides on top instead of sitting under the synths and the "la la la"s.

- **DST — off.**
  No overdrive anywhere in this patch. The real Simple Minds bass tone is clean — adding grit here would just muddy the low end this song needs to stay tight.

- **AMP — Classic Bass** (Ampeg SVT): Gain 40, Bass 60, Middle 65, MidFreq 800Hz, Treble 55, VOL 75. Always on.
  SVT is the right call for 80s pop-rock bass — punchy without being scooped. MidFreq at 800Hz gives upper-mid bite so the bass cuts through the synth pads instead of hiding under them. Gain stays low — this is a clean amp voicing, not a driven one.

- **CAB — AMPG 4x10** (Ampeg SVT-410HE): VOL 70. Always on.
  Direct pairing with the SVT amp model. No bass IR available in the current pack (it's guitar-cab focused), so this is the right default rather than a compromise.

- **EQ — Bass EQ 1**: 33Hz +6, 150Hz +2, 600Hz -6, 2kHz +8, 8kHz +5, VOL 55. Always on.
  600Hz cut clears out boxiness that fights with the synth pads' low-mids. 2kHz and 8kHz push give the classic bright, "clicky" 80s bass attack that cuts through a busy mix. Slight 33Hz lift keeps the fundamental anchored without letting it get flabby.

- **MOD — off.**
  Chorus duty goes to the Joyo Narcissus on the board (see below) — running the GP-5's own MOD chorus on top of it would just be mud. Pick one chorus voice per patch; this patch's is the pedal, not the internal module.

- **DLY — off.**
  Bass doesn't need delay here — it needs to stay a tight, dry pulse. Any slap-echo would smear the eighth-note drive this part depends on.

- **RVB — off.**
  Same logic as delay — verb on bass just adds low-end wash. This part needs to stay focused, not spacious. Space is the synths' job.

## CTL footswitch

- **CTL off** — verse/chorus pulse. PRE Boost bypassed. This is the default resting state and where the patch loads.
- **CTL on** — outro hook ("don't you, forget about, don't don't don't don't"). PRE Boost engaged — louder, brighter, pushes the bass forward to match the vocal ad-libs and the big synth swell.
- Engage CTL for the extended outro vamp only. Everything else in the song — intro, verses, choruses, bridge — stays CTL off.

## Full pedalboard (signal chain order)

**Flamma FS-08 Octave** — bypassed for the whole song by default (footswitch off).
Engage only under the outro vamp, alongside CTL on, for a thickening layer: +OCT 40, -OCT 0, +2OCT 0, -2OCT 0, Dry 80.
A light +1 octave layer under the hook fills things out without turning into a synth-bass effect — Dry stays high so the fundamental doesn't get buried.

**Donner Ultimate Comp** — engaged for the entire song.
COMP 55, TONE 60, LEVEL 60, Mode: TREBLE.
Evens out pick/finger attack across the whole part without an audible squeeze — TREBLE mode keeps that attack articulate feeding into the SVT, which is exactly what a driving 80s pulse bassline needs.

**Donner Stylish Fuzz** — bypassed for the entire song (footswitch off, true bypass).
This song never calls for a fuzzy or gated texture on bass — leave it fully out of the chain.

**Joyo Tidal Wave** — engaged for the entire song, low drive character.
Drive 25, Blend 30, Presence 50, Level 50, Treble 55, Middle 60, Bass 55.
Mid-Frequency: 500Hz (bass body, not attack-focused — the SVT/EQ stage already handles cut-through).
Bass-Shift: 80Hz (tighter low end, keeps this pop bassline articulate instead of muddy).
Cab-Sim (DI out): on, if running a DI to FOH. Ground Lift: off unless hum shows up.
Drive stays low here — it's doing gentle harmonic thickening and acting as a preamp/EQ utility stage, not adding audible dirt. Blend keeps the fundamental intact underneath.

**Joyo Narcissus** — engaged for the entire song. Vintage mode, Width 30, Depth 15, Rate low (~2 o'clock, slow).
This is the patch's one chorus voice — light touch, sitting underneath the tone rather than announcing itself. That's the classic subtle 80s chorus sheen on bass without turning it into an obvious "wet" effect. Vintage mode over Modern — this song's bass tone isn't a drenched/obvious chorus moment, it just needs a little width.

**Valeton GP-5** — see settings above.

## Instrument notes (P/J bass)

Balance both pickup volumes close to even, maybe a slight favor to the P (neck) pickup for low-end foundation, blended with the J (bridge) pickup for the top-end pick attack this song's tone needs.
Tone knob open — most of the way up. This part needs brightness to cut through the mix; don't roll off highs at the instrument.
