# GP-5 `.prst` file format — reverse-engineered spec + encoder mapping

Source of truth for this document: `drewmerc302/valeton-gp50` (MIT-licensed, GitHub),
specifically `patch/prst_format.py`, `app/patchlib.py`, `patch/convert.py`,
`re/DEVICE_BLOCKORDER.md`, and the model catalog `patch/fxid_ring_gp5.json`. Every
byte offset and record below was cross-checked by running that repo's own decoder
against its two real GP-5 factory-export fixtures (`app/tests/fixtures/gp5/65-Puppy.prst`,
`67-OerdriveM.prst`) — not just read from their docs. Where something is inferred
rather than confirmed against real hardware data, it's marked **unconfirmed** below.

The GP-5 and GP-50 share this exact container, wire protocol, and effect catalog
(GP-5's catalog is a strict subset of GP-50's). Everything here is GP-5-specific
(507 bytes total); the GP-50 variant is 552 bytes and differs only in the header,
device tag, and a couple of settings/trailer field widths (see `patch/convert.py`
in the source repo if the GP-50 is ever needed).

## 1. Top-level byte layout

| Offset | Len | Field | Value (GP-5) |
|---|---|---|---|
| `0x00` | 20 | Header | constant `"GP-5\0"` + zero padding + trailing `01 00` — `HEADER_GP5` |
| `0x14` | 1 | File CRC | CRC-8 over `prst[0x15:]` (see §6) |
| `0x15` | 4 | Sentinel | constant `FF FF FF FF` |
| `0x19` | 16 | Patch name | latin1, NUL-padded, **16-byte storage cap, but the GP-5's screen only displays the first 10 characters** — confirmed by the pedal's owner, not derivable from the file format alone |
| `0x29` | 466 | Body | sequence of top-level TLV records, see §2 |

Total file length: `0x29 + 466 = 507` bytes. This is fixed — the GP-5 does not vary
file length by patch content.

## 2. Body — top-level TLV records

Body = five back-to-back TLV records, each `u16 tag (LE) + u16 len (LE) + payload`,
concatenated with no padding:

| Tag | Payload len | Content |
|---|---|---|
| `0x00FF` | 16 | Device identity block (constant + 4-byte device tag) |
| `0x0000` | 16 | Device capability block (constant: declares 10 blocks × 8 param slots) |
| `0x0001` | 16 | Patch settings: VOL + BPM |
| `0x0002` | 390 | **The "tone block"** — bypass mask, chain order, model records, param floats |
| `0x0003` | 8 | Footswitch (CTL) trailer: FS1 + FS2 block masks |

`4 + 16 + 4 + 16 + 4 + 16 + 4 + 390 + 4 + 8 = 466` ✓ matches the body length.

### 2.1 `0x00FF` — device identity (constant, copy verbatim)

Payload = `01 00 04 00 01 00 00 00 02 00 04 00` (12 bytes, constant) + 4-byte device
tag `0A 45 4D 51` (GP-5's `DEVTAG_GP5`). Nothing here is patch-specific. **Not
modeled in our internal representation — doesn't need to be; just hardcode it.**

### 2.2 `0x0000` — device capability (constant, copy verbatim)

Payload = `01 10 04 00 0A 00 00 00 02 10 04 00 08 00 00 00` (16 bytes, constant).
Decodes as two 8-byte fields: id=1 → value 10 (block count), id=2 → value 8 (param
slots per block). Same on every patch. **Not modeled; hardcode it.**

### 2.3 `0x0001` — patch settings

Two 8-byte records, each `id:u8, group:u8(=0x20), len:u16(=4), value:i32(LE)`:

- id `0x01` = **patch VOL**, 0–100 (confirmed against hardware; default 50)
- id `0x02` = **BPM**, integer (confirmed against hardware; default 120)

**Gap:** our internal patch JSON has no `patch_vol` or `bpm` field at all. The
encoder needs to default these (VOL=50, BPM=120, or derive BPM from the song's
actual tempo as a nice-to-have) since nothing upstream currently produces them.

### 2.4 `0x0002` — the tone block (390 bytes)

Four sub-records, found by magic bytes (not fixed offset — always search for the
magic within the TLV payload), concatenated in this order:

| Magic | Payload | Record |
|---|---|---|
| `01 30 04 00` | 4 (u32) | **Bypass mask** |
| `02 30 0A 00` | 10 (bytes) | **Chain order** |
| `03 30 28 00` | 40 (10×4 bytes) | **Model records** |
| `04 30 40 01` | 320 (80×f32) | **Param floats** |

`8 + 14 + 44 + 324 = 390` ✓.

#### Block index / name table

There are **10 fixed storage slots**, not 9. Slot index is used consistently for
the bypass bitmask, the model records, and the base offset into the param array:

```
index: 0    1    2    3    4    5    6    7    8    9
block: NR   PRE  DST  AMP  CAB  EQ   MOD  DLY  RVB  N->S
```

**`N->S` (index 9, category `0x0F`) is the SnapTone-capture slot.** It's not
optional storage-wise: every `.prst` has this 10th model record and this 10th
bypass bit, whether or not a SnapTone is in use. `idx=0` in that record means "no
SnapTone" (confirmed: both real fixtures have `N->S` inactive with idx 0). The
encoder always emits `N->S` as inactive/idx-0 by default, but it must still be
*present* and correctly *positioned* — see chain order below.

**Update 2026-09-08 — the 80 storage slots are real and now used.** The vendored
catalog (`Tools/fxid_ring_gp5.json`) has 80 `N->S`-category entries, `fxtitle`
"Tone Catch 1".."Tone Catch 80" (`fxid = 0x0F000000 | (slot-1)`, i.e. slot 12 →
fxlow `11`) — the on-device SnapTone equivalent of the 20 `User IR` slots. Every
one of these catalog entries shares the literal `name: "Empty"` (a static factory
dump, no visibility into what a specific device actually has loaded into each
slot) — `by_module_name`'s normal `(module, name)` lookup can't tell them apart,
so the encoder indexes them separately by slot number (`by_nam_slot`, keyed off
the `fxtitle` suffix) instead. `Tools/gp5_prst_encoder.py`'s `build_patch_spec`
now populates a real, active `N->S` block (bypass bit set, correct fxid, real
Gain/VOL/Bass/Middle/Treble param floats) whenever the patch JSON's `"nam"` field
includes `"slot": <1-80>` — see that file's module docstring and
`Prompts/gp5_prompt.md`'s "NAM Captures" section. Without `slot`, behavior is
unchanged (informational-only, `N->S` stays inactive) — verified byte-identical
against every previously-committed patch that has no `slot` field.
**Not yet verified against real hardware/Valeton Suite** — this is confirmed
correct against the catalog's own data and the file-format math (bypass bit,
model record, param floats all land exactly where expected), but no one has
yet loaded a `.prst` built this way onto a real GP-5 and confirmed the pedal's
screen shows the right capture. Treat the first real-world test as the actual
confirmation, not this doc.

**Bypass mask** (`01 30 04 00` + u32): bit `k` = block index `k` is active/on. Bits
are independent of chain-order position. `N->S`'s bit (bit 9) should always be 0
for us.

**Chain order** (`02 30 0A 00` + 10 bytes): `order[chain_position] = storage_slot_index`.
It's a permutation of `0..9`. Confirmed from both real fixtures plus
`re/DEVICE_BLOCKORDER.md`: the five "core" blocks — **DST, N->S, AMP, CAB, EQ** —
are a fixed, contiguous, atomic run that always appears in that exact
relative sequence (DST, then N->S, then AMP, then CAB, then EQ), never
reordered internally. The five "movable" blocks — NR, PRE, MOD, DLY, RVB — can sit
anywhere before/after/around that run (any permutation, any split).

This means **our module order (NR→PRE→DST→AMP→CAB→EQ→MOD→DLY→RVB) does NOT map to
the identity permutation `[0,1,2,3,4,5,6,7,8,9]`** — N->S has to be spliced in
between DST and AMP:

```
our order:        NR   PRE  DST  [N->S]  AMP  CAB  EQ   MOD  DLY  RVB
storage indices:   0    1    2     9      3    4    5    6    7    8
REC_ORDER bytes:  [0,   1,   2,    9,     3,   4,   5,   6,   7,   8]
```

This exact array (`[0,1,2,9,3,4,5,6,7,8]`) is confirmed present verbatim in the
`67-OerdriveM.prst` fixture. This is the correct, constant `REC_ORDER` value for
*every* patch we build, since we never reorder modules (matches the CLAUDE.md /
`gp5_prompt.md` hard constraint on module order already) and never place NR/PRE
after the core or MOD/DLY/RVB before it.

**Model records** (`03 30 28 00` + 10×4 bytes): stored at the fixed slot indices
above (NOT chain-order positions). Each record is
`[fxlow_b0][fxlow_b1][fxlow_b2][category]`, little-endian 3-byte model index +
1-byte category. `fxid = (category << 24) | fxlow`. Category is redundant with
slot index for our purposes (each slot always holds one category, e.g. slot 2 is
always DST/category `0x03`) except AMP, which uses category `0x07` for
electric/bass amps and `0x08` for... (unconfirmed which AMP entries use `0x08` —
none of our catalog dump's AMP entries showed `0x08`; treat `0x07` as the AMP
category unless a specific model's catalog entry says otherwise).

**Important: "off" is a bypass-bit concept, not a model-selection concept.** A
disabled block still stores a real model record (both real fixtures leave unused
blocks pointing at that category's model index 0 — e.g. unused DST always shows
"Green OD" idx 0) with the bypass bit simply cleared. Our `Prompts/gp5_prompt.md`
output format says "Module off" for blocks not used at all — **the encoder needs a
concrete convention for what model record to emit in that case** (recommend:
category index 0, mirroring observed real-device behav8ior) since the format has
no "empty" state for a model slot.

**Param floats** (`04 30 40 01` + 80×f32): flat array, `slot = storage_slot_index * 8 + algId`.
`algId` is **not** the same as "which line in `Modules/*.md`" — it's an explicit
per-model field in the catalog (see §3) and is sparse (e.g. a model with 3 params
might use algIds `0, 1, 2` while another in the same block uses `0, 2, 3` — gaps are
normal and unused slots are left `0.0`). **Our `Modules/*.md` files do not record
algId at all** — they just list parameter names in prose order — so the encoder
cannot derive slot position from those docs; it needs the catalog (or a
hand-maintained equivalent) as the actual source of per-parameter slot numbers.

Values are stored as plain engineering units matching what's in `Modules/*.md`
almost exactly — raw 0–100 for most controls, real dB for EQ bands (`-50.0..50.0`),
real Hz for LFO rates, real ms for delay time, `0.0`/`1.0` for on/off toggles
(`toggle: true` params like Trail). No normalization step is needed; a control's
"visible" value in `Modules/*.md` units is exactly the float to write.

### 2.5 `0x0003` — footswitch (CTL) trailer

Payload = two u32 LE bitmasks, same bit numbering as the bypass mask (storage slot
index, 0–9):

- `FS1` (bytes 0–3): blocks assigned to footswitch 1
- `FS2` (bytes 4–7): blocks assigned to footswitch 2

**This is the biggest real mismatch with our internal model, and it's not fully
resolved — flagging rather than guessing:**

- `Prompts/gp5_prompt.md` and `CLAUDE.md` describe the GP-5 as having **one** CTL
  footswitch that toggles **up to 3** modules on/off.
- The `.prst` format has **two** independent u32 masks (FS1, FS2).
- The upstream repo's own edit-validation code caps each mask at 2 blocks
  (`app/patchlib.py: apply_edits_bytes`, comment "device allows at most 2 per FS")
  — but that appears to be an **unverified UI-layer assumption in that repo**, not
  a confirmed hardware/format limit: the actual bitmask is a full `u32`, and...
- **Both real GP-5 fixtures we decoded have `FS1 == FS2 == 0b111` (3 bits set: NR,
  PRE, DST)** — a real on-disk example with 3 blocks in one mask, directly
  contradicting the "max 2" assumption, and with FS1 exactly mirroring FS2.

Two explanations are consistent with this evidence and neither is confirmed:

1. The GP-5's single physical CTL switch is stored as one logical assignment that
   gets **written into both FS1 and FS2 identically** (i.e., FS2 is vestigial on
   this device, inherited from the GP-50's two-footswitch layout).
2. FS1/FS2 are genuinely independent even on the GP-5, and both fixtures just
   happen to carry the same untouched factory-default CTL group.

**Recommendation for the encoder until this is verified against a real Valeton
Suite export with a deliberately distinctive CTL assignment:** write the same
mask into both FS1 and FS2 (hypothesis 1 — matches every real example we have,
and is harmless even if hypothesis 2 turns out to be true, since it just means
"both footswitches do the same thing").

## 3. Model catalog (`patch/fxid_ring_gp5.json`)

131 entries, keyed by `fxid` (string) = `(category << 24) | fxlow`. Each entry:

```json
{
  "module": "DST", "moduleId": 2, "name": "La Charger", "fxtitle": "Crunchist",
  "type": "Distortion", "origin": "MI Audio Crunch Box",
  "params": [
    {"name": "Gain",  "algId": 0, "toggle": false, "unit": "", "min": 0.0, "max": 100.0, "step": 1.0, "default": 50.0},
    {"name": "Tone",  "algId": 1, "toggle": false, "unit": "", "min": 0.0, "max": 100.0, "step": 1.0, "default": 50.0},
    {"name": "VOL",   "algId": 2, "toggle": false, "unit": "", "min": 0.0, "max": 100.0, "step": 1.0, "default": 50.0}
  ]
}
```

`moduleId` corresponds 1:1 with the storage-slot index table in §2.4 (NR=0 … RVB=8;
N->S entries use `module: "N→S"`, category `0x0F`, `moduleId` presumably 9).

Model names in this catalog match `Modules/*.md` names almost exactly (verified
every entry in NR/PRE/DST/AMP/CAB/EQ/MOD/DLY/RVB against our files) — good news for
reusing our existing patch-building prompt output as the encoder's input. A few
discrepancies found while cross-checking (see §5, data-quality notes) — worth
fixing in `Modules/*.md` independently of the encoder work.

## 4. CRC

CRC-8/SMBUS: polynomial `0x07`, no reflection, no final XOR, initial value 0.
Computed over `prst[0x15:]` (sentinel + name + entire body) and stored at
`prst[0x14]`. Any edit to name or body requires recomputing and rewriting this one
byte last.

```python
def crc8(data, init=0):
    c = init
    for b in data:
        c ^= b
        for _ in range(8):
            c = ((c << 1) ^ 0x07) & 0xFF if c & 0x80 else (c << 1) & 0xFF
    return c
```
Known test vector: `crc8(b"123456789") == 0xF4`.

## 5. Mapping: our internal patch JSON → `.prst`

Using the "December" patch JSON produced earlier in this session as the concrete
mapping example:

| Our field | `.prst` field | Notes |
|---|---|---|
| `patch_name` | name (`0x19`, 16 bytes) | **Truncated to 10 chars, latin1** — the field stores 16 bytes, but the pedal's screen only shows the first 10, so the encoder truncates to 10 (not 16) before NUL-padding to 16. "December - Collective Soul - Stratocaster" (43 chars) doesn't fit either cap — needs a short-name convention (e.g. "DecemberCS") before encoding. The 16-char file-name-on-disk vs. 10-char on-pedal-display distinction matters: the `.prst` filename can use the full descriptive name, only the in-file name field is capped at 10. Not currently produced by the prompt at all. |
| `modules.<BLOCK>.model` | model record `fxlow`/`category` at that block's storage slot | Model name → fxid via the catalog (§3), by exact name match within the right `module`. |
| `modules.<BLOCK>.settings.*` | param floats at `slot*8 + algId` | Needs the catalog's `algId` per param name — **not derivable from `Modules/*.md` alone.** |
| `modules.<BLOCK>.always_on` / `ctl` on/off state | bypass mask bit | `always_on: true` → bit always 1. A `ctl`-controlled module's *default/rest* on/off state (the state before any footswitch press) — **ambiguous, see below.** |
| `ctl_summary` / which modules are `ctl: true` | FS1 and FS2 masks (mirrored) | Set bit for every block with `ctl: true`, in both masks. |
| module order (fixed) | chain order (`REC_ORDER`) | Constant `[0,1,2,9,3,4,5,6,7,8]` for every patch we build (§2.4) — never varies since we never reorder blocks. |
| *(none)* | N->S model record + bypass bit | Always inactive, idx 0, category `0x0F`. |
| *(none)* | patch VOL, BPM | Default 50 / 120; not currently modeled. |
| *(none)* | `0x00FF`, `0x0000` blocks, header, sentinel, devtag | Fully constant for GP-5; hardcode. |

### The bypass-bit ambiguity for CTL modules

This is the one open modeling question in our *own* patch representation, not just
the file format: for a `ctl`-controlled module, our JSON has `ctl_off_state` and
`ctl_on_state` (e.g. DST: off for CTL-off, on for CTL-on) — but the `.prst` bypass
mask is a **single static bit**, not two states. The physical pedal presumably
flips that bit live when the footswitch is pressed and it isn't something a
*saved preset file* encodes as two states — the saved file just needs **one**
resting bypass value. Which resting value is correct (the CTL-off state, matching
what you hear before pressing the switch, or the CTL-on state) needs to be decided
by the encoder design, most likely: **use the CTL-off state as the bypass mask's
value**, since that's the sound the patch loads into. This needs confirming
against how Valeton Suite itself represents a CTL-assigned block's default bypass
state (open question, not yet investigated here).

## 6. Data-quality notes found in `Modules/*.md` while cross-checking the catalog

Not part of the encoder, but worth fixing since the encoder will consult these
files as its human-facing reference:

- `Modules/DST.md`: "Greed OD" should be **"Green OD"** (catalog name; likely a typo). Fixed.
- `Modules/DLY.md`: all delay models list Time range as "20ms - 1000ms"; the real
  catalog range is **20ms – 4000ms** for every DLY model checked.
- `Modules/PRE.md`: missing the **"Detune"** pitch-shift model (catalog has
  PRE → Pitch → Detune, fxid `16777257`, alongside Octa and Pitch).
- `Modules/PRE.md`: "MicroBoost" vs. catalog's "Micro Boost" (cosmetic, two words).

## 7. Status

The encoder is built: `Tools/gp5_prst_encoder.py` takes a patch JSON (schema
defined in `Prompts/gp5_prompt.md`) and the vendored catalog at
`Tools/fxid_ring_gp5.json` (copied verbatim from
`drewmerc302/valeton-gp50:patch/fxid_ring_gp5.json`) and writes a `.prst`.
Round-trip verified byte-for-byte against the original `December-CS.prst`
fixture (only the CRC and name-field bytes legitimately differ when the input
name string differs).

Resolved:
- §5's bypass-bit resting-state question: the encoder uses `ctl_off_state` as
  the saved bypass bit, per the recommendation in that section.
- §7 point 3 (name convention): the JSON's `patch_name` is used as-is and
  truncated to 10 chars by the encoder; callers should pick a short name if
  they want the full name to survive on the pedal's screen.
- §7 point 4 (catalog): vendored into `Tools/fxid_ring_gp5.json` rather than
  fetched at encode time.

Still open (not yet needed for normal patch-building use):
1. Confirm the FS1/FS2 mirroring hypothesis (§2.5) against a real Valeton-Suite
   export with a deliberately distinctive CTL group, ideally on a patch with more
   than 3 blocks assigned if the pedal even allows it.
