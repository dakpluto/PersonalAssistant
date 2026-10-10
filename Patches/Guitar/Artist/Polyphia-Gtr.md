# Tim Henson / Polyphia (Guitar) — Signature Sound

Artist patch. Instrument: Stratocaster (HSS). GP-5 only, no pedalboard.

## The signature sound

Polyphia is instrumental guitar music built like modern pop and trap production. Tim Henson's playing is the center of it: hybrid picking, tapping, legato runs, and percussive, almost slap-style right-hand work.
Two tones carry most of the catalog.
- **The clean.** Glassy, compressed, hi-fi. Every note of a tapped or hybrid-picked line comes out at the same level. A light shimmer of chorus, clean digital delay, and a polished plate. Think the clean runs in "G.O.A.T." and "Playing God" (where the original is nylon-string; this is the electric stand-in).
- **The drive.** A tight, mid-forward modern drive for riffs and leads. It's not a wall of saturation. The low end is cut so fast palm-muted figures stay articulate.
The band is known for going direct to digital rigs rather than miking amps in a room. The sound is clean, close and produced. I haven't verified the exact amp profiles behind specific records, so this patch builds to the sound, not to a specific rig.

How this patch models it:
- A hi-fi Mesa Lone Star clean into a V30 IR, with a C4 compressor always on, for the clean.
- CTL swaps three things at once: Crunch Box-style drive on, a tightening EQ on, and the chorus **off**. That gives you the dry, focused drive tone without chorus smearing fast lines.

Pickups: position 2 or 4 for the cleans (the glassiest, quackiest voices on an HSS). Bridge humbucker for CTL on.

## Module chain

Module order: NR → PRE → DST → AMP → CAB → EQ → MOD → DLY → RVB.

**NR — Gate**, always on.
THRE: 32.
Higher than a clean patch needs. The CTL-on drive has stop-start riffs, and the gate has to slam shut on the rests. The compressed clean sits well above it.

**PRE — COMP4 (Keeley C4)**, always on.
Sustain: 58, Attack: 40, Clip: 45, VOL: 55.
The core of the clean sound. Taps and hammer-ons come out as loud as picked notes.
Attack 40 lets some pick and pluck transient through before the squeeze, so hybrid-picked lines keep their snap.
It stays on in CTL-on too. Compression before a drive gives legato leads more sustain and evens them out.

**DST — La Charger (MI Audio Crunch Box)**, on CTL.
Gain: 72, Tone: 58, VOL: 62.
The drive voice. The Crunch Box is a cranked-Marshall-in-a-box: tighter and more amp-like than a Rat into a clean amp.
Gain 72 is enough for riffs and leads without turning to mush. Tone 58 keeps note definition.
VOL 62 puts the drive a little above the compressed clean.

**AMP — L-Star CL (Mesa/Boogie Lone Star Ch. 1)**, always on.
Gain: 38, PRES: 60, VOL: 60, Bass: 45, Middle: 50, Treble: 62.
Hi-fi, tight, very clean at Gain 38. That's the polished clean, and a clean pedal platform for the La Charger.
Bass 45 keeps the low end lean. Treble 62 and PRES 60 add the sparkle.
No snaptone here. CTL off is a pristine clean, and none of the combos fit. The clean ones are Fender/Dumble voices, and everything else is a crunch capture.

**CAB — User IR 10 (V30112)**, always on.
VOL: 60.
A Celestion V30 with a sub mic blended in. It's the modern V30 voice behind most of this kind of drive tone, and it stays smooth on the clean with the Lone Star's top end.

**EQ — Guitar EQ 2**, on CTL.
100Hz: -4, 500Hz: -2, 1kHz: +3, 3kHz: +1, 6kHz: -4, VOL: 52.
Only on with the drive.
-4 at 100Hz tightens palm mutes. +3 at 1kHz gives leads their cut. -4 at 6kHz files off the fizz you get from a drive pedal into a clean amp.
Off in CTL-off so the clean keeps its full, open top end.

**MOD — A-Chorus**, on CTL (inverted: on by default, CTL turns it **off**).
Depth: 22, Rate: 0.8, Tone: 60.
The shimmer on the clean. Light hand per the patch rules: it sits under the tone.
CTL kills it for the drive. Chorus on fast distorted lines just smears them.

**DLY — Pure**, always on.
Mix: 18, Time: 375ms, F.Back: 25, Trail: on.
Clean digital repeats, no tape or analog darkening. That fits the produced sound.
375ms is a dotted eighth at 120 BPM. This is an artist patch, not one song, so set Time to taste per tune (dotted eighth = 45000 / BPM).
Mix 18 keeps fast runs readable. On for both sounds.

**RVB — Plate**, always on.
Mix: 20, Decay: 40, Damp: 45, Trail: on.
A polished studio plate. Decay 40 keeps tapped lines from washing into each other. Damp 45 keeps the top smooth.

## CTL footswitch

On CTL: DST (La Charger), EQ (Guitar EQ 2), MOD (A-Chorus, inverted).

- **CTL off** — The clean. Compressed, glassy Lone Star with chorus, delay and plate. Hybrid-picked lines, tapping, arpeggiated parts, intros. This is the resting state the patch loads into.
- **CTL on** — The drive. La Charger into the Lone Star, low end and fizz trimmed by the EQ, chorus off, delay and plate still there. Riffs, heavier sections, leads.

Stomp CTL when the tune goes heavy. Switch to the bridge humbucker at the same time.
