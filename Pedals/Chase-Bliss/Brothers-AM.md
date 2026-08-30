# Chase Bliss Brothers AM

Overdrive/boost pedal built in collaboration with Analog Man, based on the legendary Analogman King of Tone circuit. Three gain circuits in series: two identical, independently-switchable multi-mode gain channels, plus a bonus Rangemaster-style treble booster (inspired by Analog Man's Beano Boost) linked to Channel 1. Sold in a standard graphic finish and a "Monochrome Edition" — same circuit and controls, just a different color/graphics scheme; everything below applies to both.

## Controls
### Per-channel (Channel 1 and Channel 2 each have their own identical set)
- **Volume**: Output level for that channel. When both channels are on, Channel 2's Volume sets the final output level (Channel 1 pushes Channel 2 into more saturation rather than adding its own independent level, unless Master mode is engaged — see Switches).
- **Gain**: Amount of saturation/drive for that channel; also influences overall level somewhat.
- **Tone**: Brightens or darkens that channel's voicing.
- **Mode toggle** (3-way: Boost / OD / Dist): Sets the circuit style — Boost is a clean, loudest-volume boost capable of low-gain overdrive; OD is the classic King of Tone soft-clipping overdrive; Dist is a hard-clipping, more compressed/saturated overdrive. Each mode has a different inherent volume due to clipping character.
- **Presence** (hidden control): Boosts high frequencies for more air/brilliance. Adjust by holding that channel's footswitch and turning its Tone knob. Default/recommended is fully down.

### Shared
- **Treble Booster toggle** (3-way): Off (no booster) / classic Rangemaster voicing (heavy upper-mid emphasis) / a brighter, more cutting alternate voicing. Comes at the very front of the signal chain and is engaged together with Channel 1.
- **Presets toggle**: Left/right recall stored presets; center is live (current settings).

## Footswitches
- Channel 1 footswitch: tap to bypass/engage Channel 1; hold to adjust that channel's hidden Presence (turn the Tone knob while held).
- Channel 2 footswitch: same, for Channel 2.
- Tap both at once: swaps which channel is engaged (handy for quick A/B channel switching).
- Hold right then left (3 sec each) to save to the right preset slot; opposite order for the left slot.
- LED color on each footswitch indicates whether Hi Gain is active for that channel (green = standard, red = Hi Gain).

## Signal chain
Treble Booster (front, tied to Channel 1) → Channel 1 → Channel 2, in series — so Channel 1 can be used purely as a boost into Channel 2's overdrive, or either/both can run independently.

## Connectivity / App-Deep Control
- 9V DC center-negative, ~200mA.
- 8 dip switches (per-channel Hi Gain, MotoByp, Pres Link, plus shared Master and Bank): Hi Gain adds ~25% more gain to all modes on that channel; MotoByp turns that channel's footswitch into momentary (only on while held); Pres Link ties the Presence control to the Tone knob for a more open/transparent sound; Master turns Channel 2's Volume into a true master volume active even when Channel 2 is bypassed (useful for stacking without volume jumps); Bank unlocks 2 extra internal preset slots.
- 4 onboard presets (2 default bank + 2 alt bank via dip switch); MIDI (via Chase Bliss MIDIbox to 1/4" TRS) controls everything including dip switches and Presence settings, beyond what's reachable from the faceplate alone.
- CV (0–5V) and expression control assignable to any knob(s), with selectable range/direction via dip switches.
- MIDI/EXT jack doubles as an external momentary footswitch input for bypassing Channel 2.
- Three internal trim pots (input impedance, output level, and bias for the treble booster circuit) accessible inside the enclosure for fine-tuning the booster to taste — not needed for normal use.

## Notes for patch-building
- Functions as the GP-5's DST-slot pedal (or a pre-DST boost stage) — most natural role is an always-on or switchable overdrive/boost ahead of the GP-5's own amp sim, similar in spirit to a King of Tone on a pedalboard.
- The two channels are fully independent circuits (like the Joyo King of Kings clone elsewhere in this library) — use one as a low-gain rhythm push and the other as a hotter lead boost, or stack both in series for cascading gain.
- Because Channel 1 feeds Channel 2, engaging Channel 1 alone acts as a transparent boost into whatever's downstream (amp or Channel 2), while engaging Channel 2 alone gives a standalone overdrive voice — decide the intended role before setting Gain/Volume balance.
- The treble booster is tied to Channel 1's footswitch, not independently switchable — if a patch needs the booster without Channel 1's gain stage, set Channel 1 to Boost mode with low Gain so it acts as a near-transparent buffer for the treble circuit.
- Hidden Presence and the Hi Gain/Pres Link/Master dip-switch states are not visible on the faceplate — worth documenting explicitly in a patch writeup since another player (or Michael in six months) can't tell they're set just by looking at the knobs.
