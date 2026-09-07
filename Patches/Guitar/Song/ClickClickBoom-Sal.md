# Click Click Boom — Saliva

**Type:** Song
**Instrument:** Stratocaster (HSS)
**Full Board:** Yes
**BPM:** 100

## The song

"Click Click Boom" (*Every Six Seconds*, 2001).
Post-grunge/nu-metal crossover, not full-on scoop-mid metal.
Verse riff is tight, syncopated, palm-muted, low-string driven.
Chorus and solo open up — more gain, more sustain, bigger and wetter.
Two distinct jobs for this patch: choke the riff down tight, then let the lead breathe.

CTL Off = verse/main rhythm riff.
CTL On = chorus/solo lead tone.

## GP-5 settings

Module order: NR, PRE, DST, AMP, CAB, EQ, MOD, DLY, RVB.

**NR — Gate** (always on)
- THRE: 38
Palm-muted low-string riffing at this gain level needs a real gate or the noise floor gets ugly between hits. 38 is enough to snap the mutes silent without chopping sustain on held chords.

**PRE — off**
Not used. The Donner Ultimate Comp on the board ahead of the GP-5 is already handling dynamics duty. Stacking a second compressor in the chain just squashes twice for no gain.

**DST — Super OD** (CTL)
- Gain: 50, Tone: 62, VOL: 68
- CTL Off = off, CTL On = on
This is the lead kick. Boss SD-1-style asymmetrical clipping pushed into the JCM800 sim adds extra saturation and — more importantly — extra output volume, so the solo actually sits on top of the mix instead of getting buried under the rhythm section. Off for the verse riff so it stays tight and doesn't mush out the palm mutes.

**AMP — UK 800** (always on)
- Gain: 62, PRES: 55, VOL: 68, Bass: 55, Middle: 68, Treble: 62
JCM800 voicing gets you the thick, mid-forward hard-rock crunch this song actually has — Saliva's tone isn't scooped like a metal band, it's a mid-present rock grind with real low-end weight. Middle pushed to 68 keeps the riff present and cutting instead of hollow. Same amp setting serves both CTL states — the DST boost on top is what separates rhythm from lead, not a second amp voicing.

**CAB — off, using IR instead**
See "IR Cab Captures" below.

**EQ — Guitar EQ 2** (always on)
- 100Hz: 0, 500Hz: +5, 1kHz: +8, 3kHz: +3, 6kHz: -6, VOL: 52
Boost at 500Hz/1kHz fattens the riff's mid-punch and keeps single-note lead lines from thinning out. -6 at 6kHz reins in fizz from the high-gain AMP+IR pairing without killing pick attack. Runs the same in both CTL states.

**MOD — off**
Not used on the GP-5. The Joyo Narcissus on the board is carrying the (very light) chorus duty for this patch — no reason to run two modulation sources and risk mud. See "Full Pedalboard" below.

**DLY — Analog** (CTL)
- Mix: 28, Time: 300ms, Feedback: 22, Trail: On
- CTL Off = off, CTL On = on
300ms at 100 BPM lands close to a dotted-16th slap — enough to give sustained lead notes some air and repeat without smearing into a wash. Off for the verse riff; a tight palm-muted riff does not want delay repeats stacking on top of the mutes.

**RVB — Room** (CTL)
- Mix: 25, Decay: 35, Trail: On
- CTL Off = off, CTL On = on
Small room wash opens the lead tone up just enough to feel bigger without going ambient/shoegaze on you. Off for rhythm — the riff needs to stay dry and in-your-face, reverb would just wash out the attack.

### CTL summary
- **CTL Off (verse/rhythm):** NR + AMP (UK 800) + EQ only. Dry, tight, mid-forward crunch built for palm-muted riffing.
- **CTL On (chorus/solo):** adds DST (Super OD boost) + DLY (Analog slap) + RVB (Room wash). Louder, more sustain, more air — built to carry a lead line or a bigger chorus strum over the same amp voicing.
- Hit CTL going into the chorus and for the guitar solo section. Kick it back off for the next verse.

### IR Cab Captures
Using **British Checkerboard 4x12 Medium Mix** (Marshall 1960A, Celestion G12M Greenback) in place of a GP-5 CAB model.
The Greenback's brighter, more articulate voicing is the classic pairing for a JCM800-style amp and gives the riff more bite/definition than a stock CAB model would — CAB stays `model: null` in the JSON/`.prst`; load this IR into a `User IR` slot by hand in Valeton Suite and point the CAB block at it.

## Full Pedalboard

Signal chain order: Flamma FS-08 Octave → Donner Ultimate Comp → Donner Stylish Fuzz → Joyo King of Kings → Joyo Narcissus → Valeton GP-5.

**Flamma FS-08 Octave — bypassed**
- All octave knobs (-2OCT, -OCT, +OCT, +2OCT) at 0, Dry at 100
- Footswitch: off, never engaged for this song
No octave texture anywhere in "Click Click Boom" — this stays fully out of the signal path.

**Donner Ultimate Comp — engaged always**
- COMP: 45, TONE: 55, LEVEL: 55, Mode: NORMAL
Light-to-moderate squeeze evens out pick attack across the palm-muted riff before it hits the fuzz/OD/amp gain stages. NORMAL mode — the JCM800 sim downstream is already bright enough with the Greenback IR, don't need TREBLE mode stacking more top end on top of that.

**Donner Stylish Fuzz — bypassed**
No fuzz texture in this song. Leave off; footswitch never engaged for this patch.

**Joyo King of Kings — Left channel engaged always, Right channel bypassed**
- Left: Volume 55, Gain 35, Tone 55, Clipping toggle: softer/asymmetric position, Feedback toggle: standard position
- Right: off, footswitch not engaged
Left channel run low-gain as a subtle always-on push into the front of the GP-5's UK 800 sim — classic "boost into a cranked Marshall" move, adds extra grind and touch-sensitivity to both CTL states without changing the amp's core voicing. Right channel stays in reserve — if you want the outro or final chorus even bigger live, stack it in manually (separate footswitch from GP-5 CTL), but it's not part of the baseline patch.

**Joyo Narcissus — engaged always**
- Mode: Vintage, Width: 30, Depth: 20, Rate: 25
Light chorus sheen underneath the whole patch, vintage mode kept subtle per the general light-touch MOD rule — this is the patch's only modulation source since the GP-5's own MOD module is off. Runs the same in both CTL states; it's texture, not a rhythm/lead differentiator.

**Valeton GP-5**
See GP-5 settings above.
