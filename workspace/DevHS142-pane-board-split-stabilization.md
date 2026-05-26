# DevHS142 - Pane Board Split Stabilization

Status: Complete
Role: Dev
Date: 2026-05-26

## Request Received

Execute M37 only: split and stabilize Pane Board as Lab-only tooling so it does not contaminate the portable presentation offer.

## Files Changed

- `scripts/verify-pane-board.js`
- `src/main/main.js`
- `src/main/preload.js`
- `src/main/labTooling/README.md`
- `src/main/labTooling/paneBoard/README.md`
- `src/main/labTooling/paneBoard/paneBoard.js`
- `src/renderer/pane-board/README.md`
- `workspace/pane-board/README.md`
- `workspace/pane-board/current-board.json`
- `workspace/pane-board/board-events.ndjson`
- `workspace/pane-board/agent-proposals/layout-2026-05-26-pane-board-v1-smoke-proposal-6.json`
- `workspace/pane-board/agent-proposals/layout-2026-05-26-pane-board-v1-smoke-proposal-7.json`
- `workspace/pane-board/screenshots/layout-2026-05-26-pane-board-v1-smoke-proposal-pane-board-smoke-5.png`
- `workspace/pane-board/screenshots/layout-2026-05-26-pane-board-v1-smoke-proposal-pane-board-smoke-6.png`
- `workspace/current.md`
- `workspace/DevHS142-pane-board-split-stabilization.md`

## Boundary Chosen

M37 used an in-repo Lab-only tooling split, not a separate project clone.

This matches the HS142 runway: move Pane Board helpers out of the general main-process body, keep the explicit Pane Board launch command, and avoid broad Electron restructuring.

The split boundary is:

- portable presentation offer: normal renderer entry and presentation material code
- Lab-only tooling: Pane Board renderer, IPC handlers, persistence, snapshots, event log, PNG export, and Pane Board smoke

## What Moved Out Of General App Code

Moved Pane Board main-process behavior from `src/main/main.js` into:

```txt
src/main/labTooling/paneBoard/paneBoard.js
```

The new module owns:

- Pane Board window creation
- Pane Board IPC registration
- `workspace/pane-board/current-board.json` read/write
- `workspace/pane-board/board-events.ndjson` append events
- snapshot routing for human sketches, agent proposals, and accepted layouts
- agent proposal `basedOn` enforcement
- PNG export through Electron `capturePage`
- Pane Board smoke result writing

`src/main/main.js` now only checks the explicit Pane Board launch flag and lazy-loads the nested Lab-only module when Pane Board mode is active.

Added pointer notes at:

- `src/main/labTooling/README.md`
- `src/main/labTooling/paneBoard/README.md`
- `src/renderer/pane-board/README.md`

These notes tell future agents to go back toward the clean renderer when they are looking for product-facing presentation code.

## What Remains Shared And Why

Shared:

- Electron app bootstrap
- Frame window helper
- normal service/Frame IPC registration
- preload file path

These remain shared because HS142 asked for a clearer boundary without broad Electron restructuring or a separate project/package split.

The preload was also tightened. `src/main/preload.js` now exposes `window.auraPaneBoard` only when:

```txt
AURA_LAB_PANE_BOARD=1
```

This avoids leaving a Pane Board API surface in the normal presentation renderer.

## Normal Launch Result

Normal launch remains independent of Pane Board state.

Normal `src/main/main.js` does not own the Pane Board renderer path, does not own Pane Board persistence details, and lazy-loads the Pane Board module only for the explicit Pane Board mode.

The clean presentation renderer files were not changed:

- `src/renderer/index.html`
- `src/renderer/app.js`
- `src/renderer/styles.css`

## Pane Board Launch / Smoke Result

Pane Board remains behind:

```cmd
npm.cmd run pane-board
```

Pane Board smoke passed:

```cmd
npm.cmd run smoke:pane-board
```

Result artifact:

```txt
.tmp/pane-board-smoke/pane-board-smoke-result.json
status: passed
snapshot: workspace\pane-board\agent-proposals\layout-2026-05-26-pane-board-v1-smoke-proposal-7.json
png: workspace\pane-board\screenshots\layout-2026-05-26-pane-board-v1-smoke-proposal-pane-board-smoke-6.png
based_on: layout-2026-05-26-pane-board-v1
pane_count: 5
```

## Documentation

Updated `workspace/pane-board/README.md` with an M37 boundary note naming:

- portable presentation offer
- Lab-only tooling
- Pane Board renderer / IPC / preload / persistence / snapshot / event log / smoke ownership
- the normal-launch independence requirement

## Verification

Ran:

```cmd
npm.cmd run verify:pane-board
npm.cmd run verify:all
npm.cmd run smoke:electron
npm.cmd run smoke:pane-board
```

Results:

- `verify:pane-board` passed.
- `verify:all` passed, including `verify:pane-board`.
- `smoke:electron` passed in the sandbox on the final nested-boundary run. An earlier pre-nested run failed inside the sandbox with `UnknownVizError`, then passed when rerun through the approved outside-sandbox GUI smoke path.
- `smoke:pane-board` passed.

Ran from `F:\Projects\Docs\Aura-Project-Orchestration`:

```cmd
npm.cmd run verify:terminology
```

Result:

- `verify:terminology` passed 59/59 resource checks.
- Existing warning-only terminology tripwires remain.

## Residual Risks

- Pane Board is split into an in-repo Lab-only tooling boundary, not a separate cloned project or package.
- A future separate app/package split may still be useful if Pane Board grows into sustained tooling.
- `src/main/main.js` still contains a tiny launch gate and lazy module require for Pane Board; this is intentional for HS142 and keeps normal launch independent of Pane Board state.
- The shared preload file still contains the Pane Board API definition, but it is gated behind `AURA_LAB_PANE_BOARD=1`.
- Smoke continues to generate proposal and PNG artifacts; useful proof, but future cleanup or bounded smoke-output policy may be warranted.
- Pane Board layouts remain advisory and must not become product runtime state, a bridge contract, a component API, or target-project adoption authority.
