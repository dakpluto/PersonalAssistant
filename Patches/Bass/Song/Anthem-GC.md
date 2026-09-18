# The Anthem — Good Charlotte

*The Young and the Hopeless*, 2002. ~176 BPM, est.
Pop-punk bass — tight low end, upfront pick attack, driving eighth notes under the verse riff, bigger and more open for the "I don't wanna be" hook.
GP-5 only, P/J bass, no pedalboard.

## AMP: Classic Bass (Ampeg SVT) + CAB: Apg810 IR (User IR 3)

Rebuilt 2026-09-18 off the GP-5's own AMP + a loaded IR — NAMs are off for now (Valeton N->S volume issue, device-side). Same Ampeg-family target as the discontinued V4B capture, dialed brighter and cleaner than the Bush patch below — this is early-2000s pop-punk, not grunge, needs pick clarity over amp breakup. Apg810 is a direct real-world match for the SVT-family AMP model (same "Ampeg 8x10" cab the original NAM capture used).

- Gain: 45 — enough amp character to feel like a real rig, not clean-DI flat; lower than a NAM-equivalent 55 since Classic Bass's own gain structure runs hotter for the same feel.
- Bass: 62 — full low end to anchor the palm-muted verse riff.
- Middle: 55, MidFreq: 800Hz — present, not scooped, so the bass cuts through two guitars.
- Treble: 55 — brighter than a grunge dial-in. Pick attack needs to read clearly at this tempo.
- VOL: 68.
- CAB VOL: 62.

## Module chain

**NR — Gate**, always on.
THRE: 25. Light gate, just enough to clean up string noise between fast eighth-note runs.

**PRE — off.** Not needed — the NAM's own front end and the CTL'd Bass OD below cover the dynamic range this patch needs.

**DST — Bass OD**, on CTL.
Gain: 45, Blend: 60, VOL: 60, Bass: 55, Treble: 55.
Off for the verse — clean punchy V4B tone, all pick and low end.
On for the chorus — Bass OD stacked on top adds grit and push without burying the note, blended at 60% so it thickens rather than fuzzes out.

**AMP — Classic Bass**, always on. Gain 45, Bass 62, Middle 55, MidFreq 800Hz, Treble 55, VOL 68.

**CAB — User IR 3 (Apg810)**, always on. VOL 62.

**EQ — Bass EQ 2**, always on.
50Hz: +3, 120Hz: +2, 400Hz: -3, 800Hz: 0, 4.5kHz: +6, VOL: 55.
Small low-end reinforcement, a scoop around 400Hz to stay out of the guitars' rhythm-chug range, and a solid push at 4.5kHz for that pick-attack snap pop-punk bass needs to sit up front in the mix.

**MOD — off.** No modulation — straight, driving pop-punk part.

**DLY — off.** No delay. This is a tight, dry rhythm-section tone.

**RVB — Room**, on CTL.
Mix: 20, Decay: 30, Trail: true.
Off for the verse — dry and right on the beat.
On for the chorus, alongside the Bass OD — a touch of room size to match the bigger, more open chorus arrangement without smearing the part.

## CTL footswitch

Two modules on CTL: DST (Bass OD) and RVB (Room).

- **CTL off** — verse/pre-chorus sound. Clean V4B punch, dry, tight, all pick attack. This is the resting state the patch loads into.
- **CTL on** — chorus/hook sound. Bass OD grit plus a little room size, same core amp tone, bigger and pushier for the "I don't wanna be" hook.

Engage CTL going into each chorus, back off for the verses. Simple two-state song patch.
