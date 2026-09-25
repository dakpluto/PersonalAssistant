# Bright Size Life — Pat Metheny

Pat Metheny, 1976, with Jaco Pastorius on fretless bass. BPM est., brisk swing. Jaco's tone here is clean, bridge-pickup-forward, singing, with the fretless mwah in the upper mids and a natural, dry ECM room around it. Built from that well-known sound; the exact amp and studio chain on the record are not verified. The Sire has flatwound strings, which are darker than Jaco's roundwounds, so the patch pushes upper mids and top end to make up the difference.
Instrument: Sire V7 2nd Gen 5-string fretless, flatwound. Run Active. Favor the bridge pickup for the mwah, roll the neck pickup in for the walking and rhythm sections.
GP-5 only, Sire V7 fretless (Active), no pedalboard.

## Module chain

**NR — Gate**, always on.
THRE: 8.
Clean, low-gain tone with active electronics. 8 is barely there and will not clip note decay.

**PRE — COMP**, always on.
Sustain: 35, VOL: 58.
Light Ross-style leveling. 35 evens the plucks and adds sustain, but keeps the dynamics that make fretless phrasing sing.

**DST — Bass OD**, on CTL.
Gain: 15, Blend: 28, VOL: 60, Bass: 45, Treble: 55.
On CTL. Gain 15 and Blend 28 add only a little edge to the mwah on melodic lines. Not a distortion sound.

**AMP/CAB — NAM SnapTone, slot 52: AvalonAD2022** (always on)
- Built from the `Avalon - 38 dB - Chan 1 (Avalon AD2022)` NAM and no cab IR (straight DI), combined into one snaptone.
- Avalon AD2022 Class A preamp at 38 dB. A studio DI, not an amp: no speaker coloration.
- Jaco's fretless on this record is clear and woody. A clean DI keeps every harmonic intact.
- Gain: 44, VOL: 50, Bass: 50, Middle: 58, Treble: 58
- Gain 44: noticeably under default. This part wants less push than the other AvalonAD2022 patches.
- Bass 50: flat.
- Middle 58: more midrange.
- Treble 58: more top end.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 52 directly.

**EQ — Bass EQ 2**, on CTL.
50Hz: 0, 120Hz: 0, 400Hz: 0, 800Hz: +5, 4.5kHz: +2, VOL: 52.
On CTL. Flat when off. When on, +5 at 800Hz brings out the mwah and +2 at 4.5kHz adds pluck definition.

**MOD — off.** No modulation. The record is dry and natural.

**DLY — off.** No delay. Keeps the small-group feel.

**RVB — Room**, always on.
Mix: 8, Decay: 20, Trail: off.
Always on. A small natural room, like the record. Mix 8 is barely there.

## CTL footswitch

On CTL: DST (Bass OD), EQ (Bass EQ 2).

- **CTL off** — Head melody, walking lines and rhythm. Clean, round, present, near-dry. Neck pickup more in the blend. This is the resting state the patch loads into.
- **CTL on** — Melodic lines and solos. EQ mid boost brings out the mwah and a barely-there Bass OD adds a touch of edge. Bridge pickup forward.

Engage CTL for the melodic head lines and any solo. Back off for walking and comping.
