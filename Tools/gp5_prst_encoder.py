"""GP-5 .prst encoder.

Builds a 507-byte GP-5 preset file from a patch-design JSON file (the same
JSON shape Prompts/gp5_prompt.md asks for as its final output). Resolves
model names and parameter names to fxid/algId via the vendored catalog at
Tools/fxid_ring_gp5.json (from drewmerc302/valeton-gp50). Format reference:
Documents/gp5-prst-format.md.

Only the GP-5 container is implemented (not GP-50). No device I/O — this
just writes a .prst file that Valeton Suite can import.

Usage:
    python Tools/gp5_prst_encoder.py <patch.json> [output.prst]

Patch JSON shape:
{
  "patch_name": "December - Collective Soul",
  "patch_vol": 50,                     // optional, default 50
  "bpm": 120,                          // optional, default 120
  "nam": {"name": "...", "slot": 12,   // optional; "slot" is the 1-80 Tone
          "settings": {"Gain": 45, "VOL": 60, "Bass": 55, "Middle": 60, "Treble": 65}},
  "modules": {
    "NR":  {"model": "Gate", "always_on": true, "settings": {"THRE": 35}},
    "DST": {"model": "La Charger", "ctl": true, "ctl_off_state": "off",
            "ctl_on_state": "on", "settings": {"Gain": 55, "Tone": 60, "VOL": 75}},
    "MOD": {"model": null}             // or omit the key -> module unused/off
  }
}

The top-level "nam" field documents a NAM/SnapTone capture used in place of
AMP+CAB. Without "slot", it's informational only (N->S stays inactive in the
.prst, same as always). With "slot" (the Tone Catch N slot number the capture
is actually loaded into on the device -- see NAMs/nams.md), the encoder emits
a real, active N->S block referencing that slot, using "settings" as the
actual param values (Gain/VOL/Bass/Middle/Treble), not just documentation.

For a `ctl`-assigned module, `ctl_off_state` ("on"/"off") sets the saved
bypass bit (the resting state the patch loads into — see the bypass-bit
note in Documents/gp5-prst-format.md). `ctl_on_state` is documentation only;
the file format has no second state to store. `always_on` modules ignore
both state fields and are simply on.
"""

from __future__ import annotations

import json
import struct
import sys
from dataclasses import dataclass
from pathlib import Path

HEADER_GP5 = bytes.fromhex("47502d3500000000000000000000000000000100")
DEVTAG_GP5 = bytes.fromhex("0a454d51")
SENTINEL = b"\xff\xff\xff\xff"
NAME_LEN = 16  # storage width of the name field in the file
PEDAL_NAME_LEN = 10  # the GP-5's screen only displays the first 10 characters

BLK_FF_PREFIX = bytes.fromhex("010004000100000002000400")
BLK_00_PAYLOAD = bytes.fromhex("011004000a0000000210040008000000")

BLOCK_NAMES = ["NR", "PRE", "DST", "AMP", "CAB", "EQ", "MOD", "DLY", "RVB", "N->S"]
# the 9 modules Prompts/gp5_prompt.md and the patch JSON actually model;
# N->S (SnapTone) is always injected as inactive/idx-0 by build_prst itself.
MODULE_BLOCK_NAMES = BLOCK_NAMES[:9]
N_BLOCKS = 10
N_SLOTS_PER_BLOCK = 8

# Fixed chain order for every patch we build: NR, PRE, [DST, N->S, AMP, CAB, EQ]
# (atomic core, N->S always spliced between DST and AMP), MOD, DLY, RVB.
FIXED_ORDER = [0, 1, 2, 9, 3, 4, 5, 6, 7, 8]

CATALOG_PATH = Path(__file__).with_name("fxid_ring_gp5.json")


def crc8(data: bytes, init: int = 0) -> int:
    c = init
    for b in data:
        c ^= b
        for _ in range(8):
            c = ((c << 1) ^ 0x07) & 0xFF if c & 0x80 else (c << 1) & 0xFF
    return c


def _tlv(tag: int, payload: bytes) -> bytes:
    return struct.pack("<HH", tag, len(payload)) + payload


@dataclass
class BlockSpec:
    fxid: int  # (category << 24) | fxlow
    active: bool
    params: dict  # {algId: value}
    ctl: bool = False  # assigned to the CTL footswitch


@dataclass
class PatchSpec:
    name: str
    blocks: dict  # block name -> BlockSpec, for the 9 modules we model
    patch_vol: int = 50
    bpm: int = 120


def _model_record(fxid: int) -> bytes:
    category = (fxid >> 24) & 0xFF
    fxlow = fxid & 0xFFFFFF
    return bytes([fxlow & 0xFF, (fxlow >> 8) & 0xFF, (fxlow >> 16) & 0xFF, category])


def build_prst(spec: PatchSpec) -> bytes:
    # slot 9 (N->S) is always inactive / "no SnapTone" for our patches
    slots = dict(spec.blocks)
    slots.setdefault("N->S", BlockSpec(fxid=0x0F000000, active=False, params={}))

    bypass_mask = 0
    fs_mask = 0
    model_records = bytearray()
    param_floats = [0.0] * (N_BLOCKS * N_SLOTS_PER_BLOCK)

    for k, block in enumerate(BLOCK_NAMES):
        b = slots[block]
        if b.active:
            bypass_mask |= 1 << k
        if b.ctl:
            fs_mask |= 1 << k
        model_records += _model_record(b.fxid)
        base = k * N_SLOTS_PER_BLOCK
        for alg_id, value in b.params.items():
            param_floats[base + alg_id] = float(value)

    rec_bypass = bytes([0x01, 0x30, 0x04, 0x00]) + struct.pack("<I", bypass_mask)
    rec_order = bytes([0x02, 0x30, 0x0A, 0x00]) + bytes(FIXED_ORDER)
    rec_models = bytes([0x03, 0x30, 0x28, 0x00]) + bytes(model_records)
    rec_params = bytes([0x04, 0x30, 0x40, 0x01]) + struct.pack(
        f"<{len(param_floats)}f", *param_floats
    )
    tone_block = rec_bypass + rec_order + rec_models + rec_params
    assert len(tone_block) == 390, f"tone block is {len(tone_block)} bytes, expected 390"

    settings_payload = struct.pack("<BBHi", 1, 0x20, 4, spec.patch_vol) + struct.pack(
        "<BBHi", 2, 0x20, 4, spec.bpm
    )
    # FS1 and FS2 mirrored (see Documents/gp5-prst-format.md, section 2.5)
    trailer_payload = struct.pack("<II", fs_mask, fs_mask)

    body = (
        _tlv(0x00FF, BLK_FF_PREFIX + DEVTAG_GP5)
        + _tlv(0x0000, BLK_00_PAYLOAD)
        + _tlv(0x0001, settings_payload)
        + _tlv(0x0002, tone_block)
        + _tlv(0x0003, trailer_payload)
    )
    assert len(body) == 466, f"body is {len(body)} bytes, expected 466"

    out = bytearray(HEADER_GP5 + b"\x00" + SENTINEL + b"\0" * NAME_LEN + body)
    out[0x19:0x29] = spec.name.encode("latin1", "replace")[:PEDAL_NAME_LEN].ljust(
        NAME_LEN, b"\0"
    )
    out[0x14] = crc8(bytes(out[0x15:]))
    assert len(out) == 507, f"file is {len(out)} bytes, expected 507"
    return bytes(out)


class CatalogError(ValueError):
    pass


class ValidationError(ValueError):
    pass


MAX_CTL_MODULES = 3  # Prompts/gp5_prompt.md hard constraint: one CTL footswitch, up to 3 modules


def validate_patch_json(patch_json: dict) -> None:
    """Pre-flight checks for the prompt-level constraints the catalog lookup
    can't catch: the ≤3-module CTL limit and NAM/IR mutual exclusion with
    AMP/CAB. Raises ValidationError with a message naming the violation."""
    modules = patch_json.get("modules", {})

    ctl_blocks = [b for b in MODULE_BLOCK_NAMES if (modules.get(b) or {}).get("ctl")]
    if len(ctl_blocks) > MAX_CTL_MODULES:
        raise ValidationError(
            f"CTL footswitch can toggle at most {MAX_CTL_MODULES} modules; "
            f"{len(ctl_blocks)} are marked ctl:true: {ctl_blocks}"
        )

    has_nam = "nam" in patch_json
    has_ir = "ir" in patch_json
    if has_nam and has_ir:
        raise ValidationError(
            "patch specifies both 'nam' and 'ir' — pick one AMP/CAB substitute, not both"
        )

    amp_model = (modules.get("AMP") or {}).get("model")
    cab_model = (modules.get("CAB") or {}).get("model")
    if has_nam and (amp_model or cab_model):
        raise ValidationError(
            "patch specifies 'nam' but AMP/CAB model is not null — a NAM capture "
            "replaces both AMP and CAB (set both to model: null)"
        )
    if has_ir and cab_model and not cab_model.strip().startswith("User IR "):
        raise ValidationError(
            "patch specifies 'ir' but CAB model is a built-in cab, not null/User "
            "IR — an IR capture replaces CAB only (set CAB to model: null, or to "
            "'User IR <N>' if the cab's slot is confirmed in IRs/ir.md)"
        )


def load_catalog(path: Path = CATALOG_PATH) -> dict:
    with open(path, "r", encoding="utf-8") as f:
        raw = json.load(f)
    # index by (module, trimmed model name) for lookup, keep fxid ints as keys too
    by_module_name = {}
    # N->S (SnapTone) catalog entries all share name=="Empty" (80 slots, "Tone
    # Catch 1".."Tone Catch 80" in fxtitle) -- by_module_name can't tell them
    # apart, so index those separately by slot number instead.
    by_nam_slot = {}
    for fxid_str, entry in raw.items():
        key = (entry["module"], entry["name"].strip())
        by_module_name[key] = {**entry, "fxid": int(fxid_str)}
        if entry["module"] in ("N->S", "N→S"):
            try:
                slot_num = int(entry["fxtitle"].rsplit(" ", 1)[-1])
            except ValueError:
                continue
            by_nam_slot[slot_num] = {**entry, "fxid": int(fxid_str)}
    return {"by_id": raw, "by_module_name": by_module_name, "by_nam_slot": by_nam_slot}


def _resolve_model(catalog: dict, block: str, model_name: str) -> dict:
    key = (block, model_name.strip())
    entry = catalog["by_module_name"].get(key)
    if entry is None:
        raise CatalogError(
            f"No catalog entry for module={block!r} model={model_name!r}. "
            f"Check the exact name against Modules/{block}.md / the catalog."
        )
    return entry


def _resolve_nam_slot(catalog: dict, slot: int) -> dict:
    entry = catalog["by_nam_slot"].get(slot)
    if entry is None:
        valid = sorted(catalog["by_nam_slot"].keys())
        raise CatalogError(
            f"No N->S (SnapTone) catalog entry for slot {slot}. "
            f"Valid slots: {valid[0]}-{valid[-1]}" if valid else "catalog has no N->S entries"
        )
    return entry


def _settings_to_params(block: str, model_name: str, entry: dict, settings: dict) -> dict:
    param_by_name = {p["name"].strip(): p for p in entry["params"]}
    params = {}
    for setting_name, value in settings.items():
        p = param_by_name.get(setting_name.strip())
        if p is None:
            raise CatalogError(
                f"{block}/{model_name} has no param {setting_name!r}. "
                f"Valid params: {[p['name'].strip() for p in entry['params']]}"
            )
        v = 1.0 if value is True else 0.0 if value is False else float(value)
        params[p["algId"]] = v
    return params


def _default_off_entry(catalog: dict, block: str) -> dict:
    candidates = [
        e for e in catalog["by_module_name"].values() if e["module"] == block
    ]
    if not candidates:
        raise CatalogError(f"No catalog entries at all for module={block!r}")
    return min(candidates, key=lambda e: e["fxid"])


def build_patch_spec(patch_json: dict, catalog: dict) -> PatchSpec:
    validate_patch_json(patch_json)
    modules_in = patch_json.get("modules", {})
    blocks = {}

    for block in MODULE_BLOCK_NAMES:
        mod = modules_in.get(block) or {}
        model_name = mod.get("model")

        if not model_name:
            entry = _default_off_entry(catalog, block)
            blocks[block] = BlockSpec(fxid=entry["fxid"], active=False, params={})
            continue

        entry = _resolve_model(catalog, block, model_name)
        params = _settings_to_params(block, model_name, entry, mod.get("settings") or {})

        always_on = bool(mod.get("always_on"))
        is_ctl = bool(mod.get("ctl"))
        if always_on:
            active = True
        elif is_ctl:
            active = mod.get("ctl_off_state", "off") == "on"
        else:
            # explicit model given but neither always_on nor ctl specified —
            # treat as simply on (static, non-footswitched module).
            active = True

        blocks[block] = BlockSpec(
            fxid=entry["fxid"], active=active, params=params, ctl=is_ctl
        )

    # Optional real N->S (SnapTone) encoding: only when the 'nam' field names
    # a specific slot (1-80) the capture is actually loaded into on the
    # device. Without 'slot', 'nam' stays informational-only (as before) and
    # N->S is left inactive/idx-0 by build_prst's own default.
    nam_spec = patch_json.get("nam")
    if isinstance(nam_spec, dict) and nam_spec.get("slot") is not None:
        slot = int(nam_spec["slot"])
        entry = _resolve_nam_slot(catalog, slot)
        params = _settings_to_params(
            "N->S", f"Tone Catch {slot}", entry, nam_spec.get("settings") or {}
        )
        blocks["N->S"] = BlockSpec(fxid=entry["fxid"], active=True, params=params)

    return PatchSpec(
        name=patch_json.get("patch_name", "Patch"),
        blocks=blocks,
        patch_vol=int(patch_json.get("patch_vol", 50)),
        bpm=int(patch_json.get("bpm", 120)),
    )


def encode_patch_file(patch_json_path: str, output_path: str | None = None) -> str:
    with open(patch_json_path, "r", encoding="utf-8") as f:
        patch_json = json.load(f)

    catalog = load_catalog()
    spec = build_patch_spec(patch_json, catalog)
    data = build_prst(spec)

    if not output_path:
        slug = "".join(c for c in spec.name if c.isalnum())[:20] or "Patch"
        output_path = str(Path("Patches") / f"{slug}.prst")

    with open(output_path, "wb") as f:
        f.write(data)
    return output_path


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print(f"usage: {sys.argv[0]} <patch.json> [output.prst]", file=sys.stderr)
        sys.exit(1)

    patch_path = sys.argv[1]
    out_path = sys.argv[2] if len(sys.argv) > 2 else None
    written = encode_patch_file(patch_path, out_path)
    print(f"wrote {Path(written).stat().st_size} bytes to {written}")
