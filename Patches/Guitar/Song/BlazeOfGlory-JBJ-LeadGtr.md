# Blaze of Glory - Jon Bon Jovi (Lead Guitar)

## Target and instrument
Song patch for the original studio recording's expressive electric lead role.
Full Board: True. Guitar: Michael's HSS Stratocaster. MIDI: False.
Board Option: Neither. Leave American Sound and White Tape out of this build, or bypass either if already connected.
GP-5 display name: BlazeGlory. Patch VOL: 50.
BPM: 79, estimated working tempo. Delay is fixed in milliseconds, not tap-synchronized.

Jeff Beck played the featured leads.
Producer Danny Kortchmar describes Beck recording the solos in his first-person Guitar Player interview.
Jon Bon Jovi recalls Beck using a rented amp without pedals for the album sessions.
Those accounts support a direct, touch-sensitive approach.
They do not establish the exact amp model or mix processing for this track.
ClassicMarshall is a practical tonal choice from the loaded library, not a claim about Beck's studio amplifier.

Aim for a vocal midrange, a gritty attack and singing bends.
Keep enough transient detail for thumb, fingers and vibrato-bar inflections.
This patch covers lead fills and the featured solo, not the acoustic backing arrangement.

## Board choice and signal chain
Neither optional pedal earns a separate job here.
American Sound would add another amp-like gain stage before an already driven capture.
White Tape would duplicate the GP-5's available echo without a necessary separate song-section sound.
No extra board stomps are required.
The Full Board remains connected with its other pedals bypassed.

Chain: Flamma FS-08 > Ultimate Comp > Stylish Fuzz > King of Kings > Narcissus > GP-5.
GP-5 module order: NR > PRE > DST > AMP > CAB > EQ > MOD > DLY > RVB.
The encoded N->S capture sits between DST and the bypassed AMP/CAB stages.

## GP-5 settings and reasoning
All numbers are GP-5 control values unless marked ms.

**NR - Gate - always on**
THRE 10.
The encoder catalog exposes only THRE for Gate; no separate NR volume is encoded.
Low threshold limits idle noise while preserving quiet bends and volume-knob cleanup.
If a sustained note closes early, lower THRE before adding compression.
Not assigned to CTL.

**PRE - off**
No compressor or boost.
Preserve the attack and guitar-volume response.
Not assigned to CTL.

**DST - off**
The capture supplies the overdrive.
No Tube Screamer, distortion or fuzz is needed in front.
Not assigned to CTL.

**N->S - ClassicMarshall - always on**
Loaded SnapTone slot 68, G8 ClassicMarshall.
NAM: JCM800 2203 - P5 B5 M5 T5 MV5 G4 - AZG - 700.
IR already inside the SnapTone: V7X_dc, Marshall 1960AV.
Gain 50. VOL 50. Bass 48. Middle 56. Treble 48.
Gain 50 preserves the captured drive rather than piling on saturation.
VOL 50 follows Michael's audited level for this capture.
Small bass and treble reductions keep the note rounded.
Middle 56 brings the singing center forward.
This is a medium-drive lead voice, not a modern high-gain patch.
No separate IR load is required.
Not assigned to CTL.

**AMP and CAB - off**
Both models are null in the JSON.
The SnapTone already contains the amp and cabinet.
Not assigned to CTL.

**EQ - Guitar EQ 1 - CTL**
125Hz -2. 400Hz +1. 800Hz +3. 1.6kHz +2. 4kHz -1. VOL 54.
CTL off: bypassed. CTL on: engaged.
The small mid emphasis separates the solo from the acoustic guitars and vocals.
VOL 54 provides a modest post-capture lift rather than more preamp saturation.
These EQ numbers are control values, not verified acoustic dB.
Match the actual solo lift at playing volume; reduce EQ VOL first if the jump is excessive.

**MOD - off**
No chorus, pitch shift or automatic vibrato.
Use the guitar and hands for pitch movement.
Not assigned to CTL.

**DLY - Analog - CTL**
Mix 16. Time 380 ms. Feedback 20. Trail true.
CTL off: bypassed. CTL on: engaged.
380 ms is approximately an eighth note at the estimated 79 BPM.
This is a practical solo-space setting, not a measured studio delay claim.
Low mix and feedback leave the attack in front and put restrained repeats behind held notes.
Trails remain after CTL is released.
One fixed setting in both CTL states; only bypass changes.

**RVB - Plate - always on**
Mix 11. Decay 28. Damp 58. Trail true.
A short, subdued plate keeps the main lead from sounding disconnected from the track.
Damping reduces bright splashes around bends.
Not assigned to CTL.

## CTL and song map
Only EQ and DLY are assigned to CTL: 2 of the 3 available blocks.
The patch loads with both bypassed.
Each CTL press flips both blocks together.
There are no parameter changes between the two sounds.

CTL off - lead fills and exposed phrases.
ClassicMarshall plus a little plate.
Use guitar volume around 7-8 for the lighter responses around the vocal.
Use volume 10 when a fill needs more bite.
All external pedals remain bypassed.

CTL on - featured solo and prominent closing lead phrases.
EQ adds the level/mid lift. Analog delay adds space.
Use guitar volume 10.
All external pedals remain bypassed.
Return CTL off when moving back behind the vocal.
The repeating tail can continue briefly after the switch.

## Full Board settings in signal order
The following are explicit parking settings for bypassed pedals, not extra active processing.
The PRST encodes only GP-5 processing, including the loaded SnapTone reference.
External pedal positions must be set by hand.

**Flamma FS-08 - bypassed throughout**
-2OCT 0. -OCT 0. +OCT 0. +2OCT 0. Dry 100.
SAVE/SELECT: leave the current slot unchanged; no save operation is needed.
No octave layer on the lead.

**Donner Ultimate Comp - bypassed throughout**
COMP 9 o'clock. TONE noon. LEVEL noon. Mode NORMAL.
The driven capture already supplies sustain.
Extra compression would reduce the contrast between soft and hard attacks.

**Donner Stylish Fuzz - bypassed throughout**
Sustain minimum. Treble noon. Bass noon. Volume noon.
No fuzz texture is required.

**Joyo King of Kings - both channels bypassed throughout**
Left first: Volume noon. Gain minimum. Tone noon.
Left Clipping toggle: softer clipping. Left Feedback toggle: standard gain.
Right second: Volume noon. Gain minimum. Tone noon.
Right Clipping toggle: softer clipping. Right Feedback toggle: standard gain.
No additional drive stomp is needed for the solo.
The GP-5's post-capture EQ handles its level change.

**Joyo American Sound - not selected**
Omit from this build or keep bypassed if connected.
No active knob settings are required.

**Joyo Narcissus - bypassed throughout**
Width minimum. Depth minimum. Rate minimum. Mode Vintage.
Leave the lead's pitch movement to the player.

**Valeton GP-5**
Use BlazeGlory with the settings and CTL map above.
Keep cabinet processing enabled through SnapTone slot 68 when feeding a full-range system or Michael's usual return setup.

**Donner White Tape - not selected**
Omit from this build or keep bypassed if connected after the GP-5.
No active knob settings are required.

## Playing and level check
Start on the neck single coil, guitar tone around 8 and volume 8.
Use volume 10 for the solo before deciding that the patch needs more gain.
Try the bridge humbucker only for phrases needing a harder edge; it will also drive the capture harder.
Use fingers or thumb for the rounded attack, and a pick when a phrase needs a sharper transient.
Shape sustained notes with deliberate bends and controlled vibrato-bar movement where the guitar setup permits it.
Mute adjacent strings carefully.
Do not use a pitch effect to imitate those gestures.
Check gate release on your quietest held note and CTL level against the backing track.
Settings are a designed starting point; the patch has not been auditioned on Michael's physical rig.

## Sources
Danny Kortchmar, first-person interview: Guitar Player, My Career in Five Songs, December 9, 2020.
https://www.guitarplayer.com/players/danny-kortchmar-my-career-in-five-songs
Jon Bon Jovi's session recollection, reported by Guitar World, May 4, 2023.
https://www.guitarworld.com/news/jon-bon-jovi-jeff-beck
Device settings and loaded-slot references: Modules/, Pedals/Fixed-Board/, NAMs/snaptone_combos.md and Tools/fxid_ring_gp5.json.
Created October 16, 2026.
