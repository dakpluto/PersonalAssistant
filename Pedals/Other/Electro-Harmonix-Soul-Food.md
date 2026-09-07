# Electro-Harmonix Soul Food

Budget-friendly transparent overdrive built around the same core topology as the Klon Centaur (shares a TL072 op-amp and the Centaur's interactive dual-gang gain behavior), offering a large chunk of Klon-style clean-boost-to-light-overdrive character and touch dynamics at a fraction of the price. Reviewers have found it a bit brighter than a real Centaur, generally needing a touch of treble compensation for a closer match, but praised for the same core trick: it can function purely as an honest, transparent clean boost with minimal added coloration, or be pushed into rich, dynamic overdrive.

## Controls

- **Drive**: Sets input gain, from clean boost at minimum to classic transparent overdrive/distortion at maximum. Interacts with Volume in Klon-style fashion (shared gain-staging behavior rather than fully independent gain/level controls).
- **Treble**: Tone control — centered (12 o'clock / 50%) is roughly neutral; clockwise brightens, counterclockwise darkens/adds bass weight.
- **Volume**: Sets output level; clockwise increases output, capable of a substantial clean boost on top of any added drive.

## Switches

- **Bypass mode (internal)**: A small internal switch (below the output jack) selects True Bypass (factory default, upper position) or Buffered Bypass (lower position) — useful if the Soul Food needs to drive a long cable run or feed fussier pedals downstream and a buffer is wanted.

## Jacks

- **Input**: 1/4", 1MΩ input impedance.
- **Amp (Output)**: 1/4", output impedance roughly 650Ω–3.3kΩ.

## Notes for patch-building

- Typical placement: drive stage, early-to-mid chain ahead of modulation/delay/reverb, same as most overdrives — also works well as a low-gain "always-on" boost placed ahead of a higher-gain drive/amp stage for extra push, in the classic Klon tradition.
- Bypass defaults to true bypass but is switchable to buffered via the internal switch — worth noting explicitly in a patch write-up if the buffered mode is intentionally selected (e.g., to condition the signal for fuzz pedals placed downstream, a documented Klon/buffer use case).
- Drive and Volume are dual-gang/interactive in the Klon-derived circuit style — for a specific transparent-boost vs. overdrive setting, document both knob positions together rather than describing gain level alone.
- Low current draw (22mA at 9VDC) — an easy fit on most shared power supplies.
- Internal trim pots (if any beyond the bypass-mode switch) were not confirmed in this research — treat the three external knobs plus the bypass switch as the complete user-facing control set unless further verified.

Sources: [Electro-Harmonix Soul Food Review — Premier Guitar](https://www.premierguitar.com/gear/electro-harmonix-soul-food-review), [Soul Food Manual — ehx.com](https://www.ehx.com/wp-content/uploads/2021/01/soul-food-manual.pdf), [Soul Food & Buffered output — Electro-Harmonix forum](https://www.ehx.com/topic/soul-food-buffered-output/), [The EHX Soul Food Rules (A REAL Owner's Guide) — Traveling Guitarist](https://travelingguitarist.com/the-ehx-soul-food-rules-a-real-owners-guide/)
