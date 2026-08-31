# Analogman King of Tone

Hand-built, boutique dual overdrive from Mike Piera's Analog Man (analog.man), based on a heavily modified circuit descended from the discontinued Marshall Bluesbreaker pedal. Famous for its long hand-built waitlist — parts scarcity and one-at-a-time construction mean waits have historically run into years, capped at four pedals per customer. Current version is V4 (developed 2005). Note: this repo's `Pedals/Fixed-Board/Joyo-King-of-Kings.md` documents the Joyo King of Kings, a clone of this circuit that's actually on Michael's board — this file documents the real Analogman King of Tone's own controls for reference/comparison.

## Controls (per side — Left and Right channels, fully independent)
- **Volume**: Output level for that channel
- **Drive**: Overdrive/gain amount for that channel
- **Tone**: Frequency shaping for that channel

## Footswitches / Switches
- Left footswitch: engages/bypasses the left channel
- Right footswitch: engages/bypasses the right channel — channels can be used independently or stacked in series (left feeding right) for a hotter, more saturated lead tone
- Internal DIP switches (4 total, paired 2-per-side): set each channel's mode independently between **Normal overdrive**, **Clean boost** (reduced compression), or **Distortion** (harder clipping, more compression/gain)
- Internal treble trim pot (one per side): fine-tunes brightness by hand/screwdriver, useful for matching the pedal to a dull-sounding guitar or amp

## Notes for patch-building
- Each channel is a fully independent overdrive circuit, not a shared gain stage with two voicings — the natural "two distinct drive voicings in one pedal" tool, e.g. left = low-gain clean boost/rhythm push, right = higher-gain lead drive.
- The internal DIP-switch mode choice (OD/Clean/Distortion) is set once per side, not something to plan around as a live-switchable option — pick the mode for each channel before finalizing a patch, the same way the Joyo King of Kings' clipping/feedback toggles are treated as fixed per-channel choices.
- True bypass; hand-made in the USA in small batches, which is also why exact production timelines/waitlist length should be checked directly with Analog Man rather than assumed.
- Typical placement: boost/second gain stage feeding a GP-5 AMP model's own drive, similar to how the Joyo King of Kings clone sits on Michael's board (after fuzz, before the amp stage) rather than as the sole distortion source.
- When only one channel is needed, leave the other bypassed — it's true bypass per side, so an idle channel should stay off rather than set to a unity/clean pass-through.

Sources: [King Of Tone — Analog Man](https://www.analogman.com/kingtone.htm), [King of Tone — Wikipedia](https://en.wikipedia.org/wiki/King_of_Tone), [Analog Man King Of Tone overdrive Ver 4 manual (PDF)](https://www.analogman.com/manuals/PDFs%20(may%20be%20older)/kotver4.pdf)
