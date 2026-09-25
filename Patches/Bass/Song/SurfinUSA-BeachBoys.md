# Surfin' U.S.A. — The Beach Boys (Bass)

Bass: Harley Benton P/J, 5-string, passive. Full board.
1963. ~158 BPM (estimate).
A straight-8th boogie line borrowed from the Chuck Berry playbook. Root-fifth-sixth walks under every chord, locked to the rhythm guitar's chug.
Early Beach Boys bass is picked, punchy and mid-forward. It follows the guitar pattern rather than sitting underneath as a sub-bass thump.
The bass is most often credited to Brian Wilson on this record.

Instrument setup:
- P pickup volume: full. J pickup volume: 0.
- Tone knob: about 60%. A little rolled off, with enough top left for the pick attack.
- Play with a medium pick, between the pickups. A light palm mute at the bridge keeps the 8ths short and bouncing.

CTL off = the verse/chorus line. CTL on = a small lift for the instrumental break and final choruses.

## GP-5 settings

Module order: NR → PRE → DST → AMP → CAB → EQ → MOD → DLY → RVB.

**NR — Gate** (always on)
- THRE: 15
Low threshold. Only cleanup between phrases. The short picked notes are already clean.

**PRE — Micro Boost** (CTL)
- Gain: 30
- CTL off: bypassed. CTL on: engaged.
About +3dB clean lift. The line doesn't change, but the break and final choruses get louder around it.

**DST — off**
Clean record.

**AMP/CAB — NAM SnapTone, slot 51: CleanB15** (always on)
- Built from the `Ampeg B18 - Head DI - Bass Chan - Vol 2.5 (B-18N)` NAM and the Apg115 IR, combined into one snaptone.
- Real Ampeg B-18N fliptop (the B-15 preamp circuit), captured clean at volume 2.5, into the Apg115 B-15 cab IR.
- Period-correct: the B-15 was the standard studio bass amp in the early 60s.
- Gain: 54, VOL: 50, Bass: 55, Middle: 55, Treble: 50
- Gain 54: a little over default. This part wants more push than the other CleanB15 patches.
- Bass 55: a touch more low end.
- Middle 55: a touch more midrange.
- Treble 50: flat.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 51 directly.

**EQ — Bass EQ 2** (always on)
- 50Hz: -2, 120Hz: +2, 400Hz: -1, 800Hz: +3, 4.5kHz: -2, VOL: 52
-2 at 50Hz takes out the 5-string's sub rumble. Nothing on a 1963 record lives down there.
+2 at 120Hz is the punch.
+3 at 800Hz reinforces the pick attack.
-2 at 4.5kHz takes off pick clack, so it stays round instead of clicky.
Same in both CTL states.

**MOD — off**
No modulation.

**DLY — off**
Not used.

**RVB — off**
The guitar and vocals carry the reverb on this record. Keeping the bass dry keeps the groove tight.

## CTL summary

- **CTL Off — Verses/choruses.** Picked, punchy, dry boogie line.
- **CTL On — Instrumental break and final choruses.** Same tone, about +3dB.
- Engage CTL going into the break. Drop it for the next verse. Engage again for the last chorus run and outro.

## Full pedalboard (signal chain order)

**1. Flamma FS-08 Octave — Bypassed**
- -2OCT: 0, -OCT: 0, +OCT: 0, +2OCT: 0, Dry: 100
- Footswitch off.
No octave. It would muddy a fast 8th line.

**2. Donner Ultimate Comp — Engaged**
- COMP: 35
- TONE: 55
- LEVEL: 55
- Mode: NORMAL
Evens out the picked 8ths so every note hits at the same level.
NORMAL mode. The pick is already putting enough attack on each note.

**3. Donner Stylish Fuzz — Bypassed**
- Footswitch off.
No fuzz.

**4. Joyo Tidal Wave — Engaged (as a clean EQ preamp; Drive not engaged)**
- Drive: 0
- Blend: 0
- Presence: 40
- Level: 55
- Treble: 50
- Middle: 58
- Bass: 55
- Mid-Frequency: 1000Hz
- Bass-Shift: 80Hz
- Cab-Sim (DI out): Off. Ground Lift: Off. Only matters if you're using the DI out.
Blend 0 keeps the drive path out entirely. It's only used for EQ.
Mid-Frequency 1000Hz with Middle 58 pushes the finger/pick attack band. It works together with the GP-5's 800Hz boost.
Bass-Shift 80Hz tightens the low end so the 5-string doesn't boom.
Drive stays off for the whole song.

**5. Joyo Narcissus — Bypassed**
- Footswitch off.
No chorus.

**6. Valeton GP-5** — see settings above.

The `.prst` only carries the GP-5's 9 modules. The pedalboard settings above are not stored in the file. Set them by hand.
