# Stream of Consciousness — Dream Theater

Train of Thought, 2003. Instrumental. ~160 BPM, est. (double-time and meter shifts throughout).
John Myung's part here is dense, fast, and technical — this is the instrumental centerpiece of the album, built around a long dynamic arc from a moody, restrained intro/mid-section into full-band unison blast sections.
GP-5 only, P/J bass, no pedalboard.

## AMP: Classic Bass (Ampeg SVT) + CAB: Apg810 IR (User IR 3)

Rebuilt 2026-09-18 off the GP-5's own AMP + a loaded IR — NAMs are off for now (Valeton N->S volume issue, device-side). The old NAM (Darkglass B7K Ultra into an Aguilar/Darkglass rig) was modern, aggressive, and high-mid-forward — the tone for cutting through a dense unison riff without getting swallowed by two guitars. Classic Bass pushed and mid-forward, paired with Apg810 (the most direct SVT-family cab pairing in the loaded IR set), covers the same job; the CTL'd Bass OD below (unchanged from the original design) supplies the extra front-end push for the blast sections, same as it stacked on top of the NAM before.

- Gain: 45 — real front-end push, not fizz. Needed for the growl on the fast picked passages.
- Bass: 55 — enough low end to anchor the riff without getting flabby at speed.
- Middle: 62, MidFreq: 800Hz — pushed hard. This is what lets the part cut through a wall of guitar.
- Treble: 55 — present enough for pick/finger attack to read clearly on fast runs.
- VOL: 62.
- CAB VOL: 60.

## Module chain

**NR — Gate**, always on.
THRE: 30. Fast technical picking at this gain level throws off noise between notes — keeps the low end tight.

**PRE — Micro Boost**, on CTL.
Gain: 40 when engaged.
Off for the intro/moody passages, on for the full-band blast sections — pushes harder into the NAM's front end for extra grit and volume when the whole band hits.

**DST — Bass OD**, on CTL (same footswitch as PRE and RVB).
Gain: 45, Blend: 60, VOL: 60, Bass: 55, Treble: 50.
Off at rest. Stacked with the Micro Boost for the blast sections — adds real grind on top of the amp's own breakup, so the loud sections hit noticeably harder than just "louder," not just a volume bump.

**AMP — Classic Bass**, always on. Gain 45, Bass 55, Middle 62, MidFreq 800Hz, Treble 55, VOL 62.

**CAB — User IR 3 (Apg810)**, always on. VOL 60.

**EQ — Bass EQ 2**, always on.
50Hz: +3, 120Hz: +2, 400Hz: -3, 800Hz: 0, 4.5kHz: +5, VOL: 55.
Small low-end reinforcement, a cut around 400Hz to keep the B7K from getting boxy under the guitars, and a push at 4.5kHz so fast fingerstyle runs stay articulate instead of blurring together.

**MOD — off.** No modulation — this part needs to read as precise and dry, not smeared.

**DLY — off.** Straight, driving part. No delay.

**RVB — Room**, on CTL (same footswitch as PRE and DST).
Mix: 22, Decay: 35, Trail: true.
Off for the intro/moody sections — dry and upfront. On for the blast sections, alongside the boost and drive — gives the loud unison hits a little more size and glue without turning them into a wash.

## CTL footswitch

Three modules on CTL: PRE (Micro Boost), DST (Bass OD), RVB (Room) — all tied to the same footswitch, at the 3-module max.

- **CTL off** — intro/moody-section sound. Dry, tight, just the NAM's own grit. This is the resting state the patch loads into.
- **CTL on** — full-band blast-section sound. Boosted front end, extra drive stacked on, touch of room reverb — same core tone, hits considerably harder and bigger.

Engage CTL going into the unison blast sections, back off for the quieter/moody instrumental passages. One footswitch, one clean two-state split for a song that lives and dies on that dynamic contrast.
