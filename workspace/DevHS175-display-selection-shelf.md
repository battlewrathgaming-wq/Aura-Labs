# DevHS175 - Display Selection Shelf

Status: Complete
Role: Dev
Date: 2026-06-01
Milestone: M48 - Display Selection Shelf

## Summary

Created the target-readable display selection shelf for accepted Lab glass and material features.

The shelf answers:

```txt
Which features do you want from this selection?
```

It is a menu, not a target adapter, package/export specification, bridge/runtime contract, target adoption record, or Dev runway.

## Files Changed

- `workspace/display-selection-shelf.md`
- `workspace/display-assets.md`
- `workspace/DevHS175-display-selection-shelf.md`

## What The Shelf Contains

`workspace/display-selection-shelf.md` includes:

- purpose and usage guidance
- the core boundary: `Targets translate themselves; Lab makes the window worth looking through.`
- accepted glass asset table
- accepted material feature table
- pending/parked items section
- target responsibilities
- what Lab must not imply
- Sense-friendly selection prompt
- optional Atlas selection prompt marked as non-active adoption
- boundaries / non-goals
- canonical index links

## Accepted Glass / Materials Included

Accepted glass:

- Instrument Readout Panel Glass

Accepted material features:

- Availability Reason Treatment
- Long Text Detail Block
- Warning / Gap Edge
- Expandable Status Card
- Table Row Detail Drawer
- Authority Window TTL Strip

Each accepted row names what the item offers, canonical page/file, likely target use, what the target must provide, and what the item must not imply.

## Pending / Parked Handling

Pending and parked items are separated from accepted offers:

- Instrument Readout Strip
- Freshness / Basis Rail
- Progressive Detail Drawer
- Compact Value Stack
- Source / Basis Coverage Marker
- Compact Value Rail
- Connected System / Radius Visualization

The shelf says these are not current target-trial offers and should not become active unless Human/Overseer opens a packet that names them.

## Pointer Update

Updated `workspace/display-assets.md` so Current Accepted Glass points to:

```txt
workspace/display-outputs/instrument-readout-panel-glass.md
```

Also added a small pointer to:

```txt
workspace/display-selection-shelf.md
```

## Boundaries Preserved

This packet did not:

- edit target projects
- create target adapters or mappers
- create package/export files
- create a React scaffold
- change current Lab renderer files
- touch Electron/preload/IPC
- touch SmokeFlash, Pane Board, Wayfinder, or the Lab service registry
- create bridge/runtime contracts
- invent new material/glass capabilities
- turn Lab example states into target labels
- claim target adoption or target fitness

## Verification

Ran from `F:\Projects\AURA- Lab`:

```txt
npm.cmd run verify:all
```

Result:

- Passed: `all checks verified`
- Existing warning-only protected-term discovery candidates in Lab renderer/service files remained; no failures.

Ran from `F:\Projects\Docs\Aura-Project-Orchestration`:

```txt
npm.cmd run verify:terminology
```

Result:

- Passed: `Terminology verification: 62/62 resource checks passed.`
- Existing warning-only Lab tripwires around `trust` / `certainty` in `src/renderer` and `src/services` remained; no failures.

## Recommended Sense Relay Wording

Use:

```txt
Which display features do you want to trial from this selection?
```

Ask Sense to answer with selected features, preserved Sense-owned meaning/mapper/terminology/runtime/adoption boundaries, and any missing package shape Sense needs named.

Do not ask Lab to shape Sense mappings from this shelf.
