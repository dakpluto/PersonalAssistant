# JHS Hard Drive

Original high-gain distortion pedal (not a clone of an existing circuit) — JHS's first dedicated high-gain offering, aimed at '90s-style hard rock/modern high-gain distortion tones.

## Controls
- **Volume**: Overall output level. Left is less, right is more.
- **Drive**: Amount of drive/distortion. Left is less, right is more.
- **Bass**: Bass frequency level. Noon is flat, left cuts, right boosts.
- **Middle**: Mid frequency level. Noon is flat, left scoops, right boosts.
- **Mid Freq**: Sets which mid frequency the Middle knob boosts or scoops — a sweepable-mid control layered on top of the Middle knob, giving more precise tone-shaping than a fixed-frequency mid control.
- **Treble**: Treble frequency level. Noon is flat, left cuts, right boosts.

## Notes for patch-building
- A front-end gain stage — sits where a distortion/DST module would in a signal chain, typically after any compressor/boost and before the amp.
- The Mid Freq control makes this unusually flexible for dialing in a specific harmonic "voice" of high-gain distortion (scooped modern metal vs. mid-forward classic rock), similar in role to stacking a parametric-ish EQ with the drive itself.
- Uses silent soft-touch switching with **buffered bypass** (not true bypass) — safe to place anywhere in a chain without signal-loss concerns, but worth noting for anyone building a strictly true-bypass board.
- Standard 9V DC center-negative, 78mA draw.
