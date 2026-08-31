# JHS 3 Series Oil Can Delay

Electrostatic-delay emulation in JHS's $99 3 Series line, inspired by the vintage oil can delay technology patented by Ray Lubow in 1959 — recreates the warbly, slapback character of oil-filled-drum delay units.

## Controls
- **Mix**: Blend of delayed/echo signal against clean (left less, right more)
- **Speed**: Delay time, 100ms to 330ms (left shorter, right longer)
- **Feedback**: Number of repeats (left fewer, right more)
- **+/- toggle**: Modulation intensity — down is light movement, up is heavier movement; modulation speed tracks the Speed control

## Notes for patch-building
- Inherently warbly/modulated character even at light settings — this is a vibe delay, not a clean utility delay
- Toggle up + longer Speed settings gets closest to the classic wobbly "oil can" warble; toggle down keeps things more subtle
- Mono in/out, 9V DC center-negative (65mA draw) — do not exceed 9V, single footswitch on/off with status LED, true bypass

Sources: [JHS 3 Series Oil Can Delay product page](https://jhspedals.info/products/3-series-oil-can-delay)
