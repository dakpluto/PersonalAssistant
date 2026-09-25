# When You Say Nothing At All — Alison Krauss

I'll Remember You, 1995 (also on the Keith Whitley original, 1988). ~68 BPM, est.
Bluegrass-rooted country ballad, famous for how little is happening — no wall of sound anywhere, ever.
The bass part supports, it doesn't lead. Warm, round, upright-adjacent — closer to a Nashville session P-bass through a flat amp than anything modern.
GP-5 only, Sire fretless (passive), no pedalboard.

## Module chain

**NR — Gate**, always on.
THRE: 25. Light touch — just enough to keep noise floor down between the sparse phrases, doesn't need to fight anything.

**PRE — off.** No boost anywhere. This song doesn't ask for a louder front end, it asks for restraint.

**DST — off.** No drive, ever, on this patch.

**AMP/CAB — NAM SnapTone, slot 51: CleanB15** (always on)
- Built from the `Ampeg B18 - Head DI - Bass Chan - Vol 2.5 (B-18N)` NAM and the Apg115 IR, combined into one snaptone.
- Real Ampeg B-18N fliptop (the B-15 preamp circuit), captured clean at volume 2.5, into the Apg115 B-15 cab IR.
- Acoustic-leaning ballad. A clean B-15 is warm and quiet enough to sit under the dobro and vocal.
- Gain: 50, VOL: 50, Bass: 60, Middle: 55, Treble: 45
- Gain 50: the capture as built.
- Bass 60: Full and round.
- Middle 55: Enough midrange presence for the fretless to read as a note, not just low-end wash.
- Treble 45: Soft top end, matches the flatwound strings and the warm 100Hz-heavy cab.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 51 directly.

**EQ — Bass EQ 2**, always on.
50Hz: +5, 120Hz: +3, 400Hz: -2, 800Hz: 0, 4.5kHz: +2, VOL: 100.
Small low-end reinforcement for that upright-adjacent weight, a slight dip around 400Hz to keep the fretless from getting boxy, a touch of top-end lift so the note attack stays audible under the vocal and dobro/steel.

**MOD — off.** No chorus or vibe — a wet fretless glide would work against how plainspoken this arrangement is.

**DLY — off.** No delay. Dry and direct.

**RVB — Room**, on CTL.
Mix: 22, Decay: 32, Trail: true.
Off for the verses — close, dry, intimate. On for the choruses/bridge — just enough room to open the sound up slightly without turning it into a wash. This song builds almost entirely on vocal harmony and arrangement, not bass dynamics, so the lift here is deliberately subtle.

## CTL footswitch

One module on CTL: RVB (Room). That's the only thing this song asks the patch to do.

- **CTL off** — verse sound. Dry, close, restrained. This is the resting state the patch loads into.
- **CTL on** — chorus/bridge sound. A touch of room air opens things up without changing the fundamental tone.

Nudge CTL on for the choruses and the bridge, off everywhere else. This is a one-sound-mostly patch by design — the song doesn't have the dynamic range to justify more than that, and overbuilding the CTL split here would fight the arrangement instead of serving it.
