# Fulltone Full-Drive2 v2

Mike Fuller's flagship dual-channel overdrive, built around a JRC4558-based descendant of Fulltone's 1990s Full-Drive circuit with two independently voiced/stackable drive channels and a separate boost footswitch — a more elaborate, switchable-mode sibling to the single-channel OCD. **Manufacturing status**: like the OCD (see `Pedals/Other/Fulltone-OCD.md`), Fulltone shut down its original California operation around 2020 and relaunched in January 2024 under a licensing deal with Jackson Audio, which now manufactures Fulltone USA pedals from a Texas facility while Mike Fuller focuses on circuit design. Fulltone's own site currently lists the Full-Drive2 v2 as an active, in-production model (~$199, serial numbers restarted from 00000 as a "completely new" version, built in the USA) — a full redesign that runs about 30% smaller than the earlier FD2-MOS unit, but confirm current availability given the brand's recent instability.

## Controls
- **Volume**: Overall output level when the pedal is engaged.
- **Drive 1**: Distortion/overdrive amount for the primary channel.
- **Drive 2 (mini-knob)**: Sets the level of the secondary Drive 2 channel, which can be footswitched in to stack on top of Drive 1 as a boost.
- **Tone**: Active treble cut/boost — roughly neutral at 12–1 o'clock; counterclockwise smooths high-gain lead tones, clockwise adds cut/clarity and a less-compressed feel.

## Switches
- **Left clipping-mode toggle (3-position)**: Comp-Cut (a warmer, "anything-but-transparent" 1990s-style voicing that pushes harder into the following amp's input), Vintage (slightly asymmetrical, fat/warm clipping), Flat-Mids (a Fulltone-original mode that feeds signal back onto the clipping diodes to remove the circuit's inherent mid hump, for a warmer/fatter late-90s/early-2000s voicing).
- **Right tone-shaping toggle (3-position)**: Wide (a Mosfet/Schottky hybrid clipping configuration — more clarity, less compression), Standard (the traditional asymmetrical Full-Drive voicing), Half-Clipped (clips only the top half of the waveform, for a more responsive/dynamic feel).

## Footswitches
- **Bypass footswitch**: On/off, true bypass, with Fulltone's "Anti-Pop" switching circuit to suppress switching thump.
- **Channel/boost footswitch**: Switches between the Drive 1 and Drive 2 channels, letting Drive 2 function as an independently-voiced lead boost stacked on Drive 1.

## Notes for patch-building
- Typical placement: drive stage, early-to-mid chain. The dual-channel design maps naturally onto a patch needing two distinct drive voicings (e.g. a rhythm crunch on Drive 1 and a hotter lead boost on Drive 2) — but note the GP-5 workflow's CTL constraint: the pedal's own second footswitch handles this natively in a Full Board chain, it isn't something the GP-5's CTL needs to emulate if this pedal is present physically.
- The two 3-position toggles (6 total clipping/voicing combinations) are a significant character decision, not a minor tweak — document the exact toggle positions used in a patch's write-up alongside the knob settings.
- True bypass with anti-pop circuitry; 9–18VDC operation (2.1mm barrel, center-negative implied by standard Fulltone convention though not independently re-confirmed here), ~10mA current draw, 16-gauge cold-rolled-steel chassis, built in the USA.
- Manufacturing/availability is in flux post-relaunch (see status note above) — treat "currently in production" as accurate only as of this research date and re-verify before specifying this pedal for a build that assumes long-term purchasability.

Sources: [Full-Drive2 v2 — Fulltone USA](https://www.fulltoneusa.com/products/full-drive2-v2), [FULLTONE FULL-DRIVE 2 V2 QUICK START MANUAL — ManualsLib](https://www.manualslib.com/manual/1740042/Fulltone-Full-Drive-2-V2.html), [As hinted at on this very site - Fulltone is officially fully back now — GuitarPedalX](https://www.guitarpedalx.com/news/gpx-blog/as-hinted-at-on-this-very-site---fulltone-is-officially-fully-back-now---with-some-very-significant-help-from-jackson-audio)
