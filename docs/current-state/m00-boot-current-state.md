# M00 Boot Current State

Status: Accepted
Reviewed: 2026-05-23

## Summary

Aura Lab has completed M00 - Aura Lab Boot.

The project is a light Electron/HTML presentation prototype for Aura project data. It uses the inherited Aura Core scaffold, but the active product direction is Aura Lab's briefing surface and bridge-aware UI states.

## Accepted Capabilities

- Aura Lab project/workspace identity is established.
- `workspace/current.md` is the active work process.
- The first briefing UI presents project coordination state.
- `aura.projectBriefing` provides provisional read-only briefing data through the existing service bridge.
- Bridge test modes are available for local review: Normal, Empty, Stale, Failed, and Partial.
- The renderer exposes a quiet development-scoped mode selector.
- Source, freshness, certainty, and bridge state language are visible in the UI.
- Automated verification passes with `npm.cmd run verify:all`.
- Local Electron runtime is installed and resolves from Aura Lab's own `node_modules`.
- Visual smoke passes from the local runtime without borrowing a sibling Electron binary.

## Verification

Accepted commands:

```powershell
npm.cmd run verify:all
$env:AURA_LAB_ELECTRON_VISUAL_SMOKE='1'; $env:AURA_LAB_VISUAL_SMOKE_DIR='F:\Projects\AURA- Lab\.tmp\electron-visual-smoke'; npm.cmd start
```

Accepted smoke artifact:

```txt
.tmp\electron-visual-smoke\visual-smoke-result.json
status: passed
modes_checked: normal, empty, stale, failed, partial
```

## Boundaries

- No git repository is assumed or initialized.
- `aura.projectBriefing` is provisional and not a durable bridge contract.
- Bridge test modes are development/review helpers, not product data modeling.
- `node_modules` and `.tmp` are local generated artifacts and should not be staged.
- The long briefing title remains a future visual polish item.
- Aura Core seed-readiness lessons were observed here but not implemented in Aura Core.
