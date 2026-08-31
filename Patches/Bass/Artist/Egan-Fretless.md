# Egan-Fretless

**Type:** Artist — Mark Egan
**Instrument:** Sire V7 2nd Gen 5-String Fretless (flatwound), run **Active**
**Full Board:** True

## The signature sound

Egan built his voice on the Pat Metheny Group records and his own fusion output (*American Garage*, *Offramp*, *Beyond Words*) around three things: heavy compression that turns a plucked note into a sustained, vocal-like line; a wide, lush chorus that's mixed loud enough to be a texture, not a sheen; and a clean, hi-fi amp tone with real top-end presence so the fretless mwah and harmonics cut through a dense fusion mix instead of getting buried. No grit, no fuzz, no drive — the "aggression" in his playing comes from touch and legato phrasing, not the signal chain. This patch chases that: a squashed, singing low end, a bright EQ push instead of a mid-scoop, and chorus/delay/reverb stacked to build the same wide, ECM-ish space his tone lives in.

Active electronics on the Sire — the flatwounds already round off the attack, so the extra headroom and lower noise floor from the active preamp matters more than passive warmth here, especially feeding two compression stages downstream.

## Module order & settings

**NR — Gate** (always on)
THRE: 28. Just enough to clean up hiss from stacking two compressors (this one and the Ultimate Comp pedal) without choking sustain — Egan's whole thing is long decay, so this gate stays loose.

**PRE — COMP4 (Keeley C4)** (always on)
Sustain: 65, Attack: 45, Clip: 50, VOL: 60.
This is the single most important block in the patch. Medium attack lets enough pluck through to keep the note readable, then the compressor takes over and holds it — that's the "singing" quality Egan's known for. Not on CTL: it's not a sound he turns off, it's the foundation.

**DST — off.**
No drive anywhere in this signal path. Egan's tone is clean top to bottom; distortion would kill the sustain-driven phrasing this patch is built around.

**AMP — Mess Bass (Mesa/Boogie Bass 400)** (always on)
Gain: 45, VOL: 70, Bass: 55, Middle: 55, Treble: 68.
Picked over Classic Bass (Ampeg SVT) because the 400 is a hi-fi, headroom-first design — same family of amp session/fusion bassists reached for when they wanted clean and bright rather than warm and dark. Treble pushed to 68 to give the fretless's harmonic content somewhere to live.

**CAB — AMPG 4x10 (Ampeg SVT-410HE)** (always on)
VOL: 80. Only real bass cab in the catalog — no NAM or IR in the library covers bass amps or bass cabs (the NAM list is all guitar amps, the IR pack is all guitar speakers), so built-in AMP/CAB is the right call here, not a compromise.

**EQ — Bass EQ 1** (always on)
33Hz: +6, 150Hz: 0, 600Hz: -8, 2kHz: +5, 8kHz: +10, VOL: 58.
The 8kHz band is why this EQ over Bass EQ 2 — that's where fretless mwah and chorus shimmer actually sit. Cut 600Hz to clear out the boxy mud flatwounds tend to build up, small sub push at 33Hz to keep the low end felt under all that top-end lift.

**MOD — B-Chorus (Boss CEB-3)** — **on CTL**
Depth: 70, Rate: 0.6Hz, VOL: 100.
This is the deliberate exception to the usual light-touch MOD rule — Egan is a textbook case of an artist known for a drenched, obvious chorus, so it gets pushed instead of held back. It's on CTL because the Joyo Narcissus pedal downstream is already running as the baseline chorus voice at all times — this module is the second layer that gets stacked on top for the full wash.
- **CTL Off:** Narcissus only. Grounded, present tone — for rhythmic/supporting lines, or any passage where you want the note fundamental clearly audible.
- **CTL On:** Narcissus + B-Chorus stacked. Full drenched, wide swirl — the "floating on top of the mix" Egan lead voice, for melodic statements and solos.

**DLY — Analog** (always on)
Mix: 18, Time: 450ms, Feedback: 12, Trail: On.
Low in the mix on purpose — this isn't a rhythmic delay, it's there to thicken the tail of the chorus and reverb into one continuous wash, the way Egan's tone always sounds like it's decaying into a room rather than stopping dead. Trail on so the tail doesn't get cut off if you kill the patch mid-note.

**RVB — Hall** (always on)
Mix: 25, Decay: 45, Trail: On.
Hall over Plate/Room for the bigger, more spacious ECM-label ambiance that's all over the Metheny Group records this tone comes from.

## CTL summary

- **CTL Off:** Supporting/rhythm voice. Compressed, bright, chorused (Narcissus only), spacious — but the fundamental stays clear enough to sit under a band.
- **CTL On:** Lead/solo voice. Adds the GP-5's own B-Chorus on top of the Narcissus for the full drenched, singing wash Egan uses when the bass steps forward melodically.

## Full pedalboard (signal chain order)

**1. Flamma FS-08 Octave** — bypassed (footswitch off) for the core patch.
-2OCT: 0, -OCT: 0, +OCT: 15, +2OCT: 0, Dry: 100.
Not part of Egan's actual sound — he doesn't run synth-bass layers — but the +OCT knob is parked at a light setting in case you want to kick in a subtle high-octave shimmer on a sustained note for a highlight moment. Leave it off otherwise.

**2. Donner Ultimate Comp** — engaged (footswitch on).
COMP: 40, TONE: 60, LEVEL: 55, Mode: TREBLE.
Second compression stage, ahead of the GP-5's own COMP4. TREBLE mode is the key call here — stacking two compressors this hard can dull pick/finger attack fast, and flatwounds are already dark, so TREBLE mode keeps articulation alive under all that squash.

**3. Donner Stylish Fuzz** — bypassed, off.
Doesn't belong in this patch at all. No fuzz texture anywhere in Egan's tone — leave this one out of the chain mentally.

**4. Joyo Tidal Wave** — engaged (footswitch on), used as a clean-leaning tone shaper, not an overdrive.
Drive: 10, Blend: 20, Presence: 55, Level: 55, Treble: 60, Middle: 50, Bass: 55.
Toggles: Mid-Frequency 500Hz (bass body, not attack-focused — matches Egan's smooth fingerstyle over a percussive slap approach), Bass-Shift 40Hz (fuller low end — this patch wants body, not extra tightness), Cab-Sim (DI) On, Ground Lift On.
Drive stays low — this pedal's job here is a touch of preamp warmth and DI routing, not grit. Blend at 20 keeps it mostly clean signal.

**5. Joyo Narcissus** — engaged (footswitch on), Vintage mode.
Width: 65, Depth: 55, Rate: 35.
This is the baseline, always-on chorus voice for the patch — the thing that's "always there" in Egan's tone, with the GP-5's B-Chorus (on CTL) as the extra layer for lead passages. Vintage mode for the warmer, more analog swirl over the more synthetic Modern mode.

**6. Valeton GP-5** — as documented above.

## Note on the full board vs. the `.prst`

The `.prst` file only encodes the GP-5's own 9 modules (NR through RVB). The Flamma octave, Donner Ultimate Comp, Donner Stylish Fuzz, and Joyo Tidal Wave/Narcissus settings above are not and cannot be part of that file — they're pedals you set by hand on the board, documented here so the full patch is reproducible.
