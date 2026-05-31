# OverseerHS164 - M42 Static Starter Reference Acceptance

Status: Accepted
Role: Aura Lab Overseer
Date: 2026-05-31

## Reviewed

- `workspace/current.md`
- `workspace/DevHS163-static-portable-presentation-starter-reference.md`
- `portable-presentation-starter/README.md`
- `portable-presentation-starter/examples/static/index.html`
- `portable-presentation-starter/examples/static/example-readouts.json`
- `portable-presentation-starter/examples/static/instrument-readout-panel.css`
- `portable-presentation-starter/examples/static/instrument-readout-panel.js`
- `scripts/verify-static-starter.js`
- `scripts/verify-all.js`
- `package.json`

## Decision

Accept M42 as complete.

The static portable presentation starter reference exists separately from the current renderer and demonstrates:

```txt
neutral display example input -> Instrument Readout Panel -> Readout Detail reveal
```

The reference is plain HTML/CSS/JS, Lab-local, framework-neutral, and does not include React, target adapters, Electron/preload/IPC, SmokeFlash, Pane Board, Wayfinder, or the Lab service registry.

## Accepted Output

- `portable-presentation-starter/README.md`
- `portable-presentation-starter/examples/static/index.html`
- `portable-presentation-starter/examples/static/instrument-readout-panel.css`
- `portable-presentation-starter/examples/static/instrument-readout-panel.js`
- `portable-presentation-starter/examples/static/example-readouts.json`
- `scripts/verify-static-starter.js`
- `workspace/DevHS163-static-portable-presentation-starter-reference.md`

## Boundary Review

Accepted:

- Example input is documented as display-example input only, not a bridge/runtime contract.
- `state`, `availability`, `NO DATA`, and `UNAVAILABLE` are documented as display example fields/labels.
- Sense-owned placeholder examples are qualified through `sourceOwned`.
- React remains deferred.
- Static reference is separate from the current renderer.
- The implementation does not copy the current renderer wholesale.

Overseer tightened `scripts/verify-static-starter.js` during review so implementation files fail if they reference excluded Electron/preload/IPC, SmokeFlash, Pane Board, Wayfinder, React, Lab service registry, or target adapter implementation wiring.

## Verification

Overseer reran:

```txt
npm.cmd run verify:static-starter
npm.cmd run verify:all
```

Results:

- `static starter verified`
- `all checks verified`

Overseer reran from `F:\Projects\Docs\Aura-Project-Orchestration`:

```txt
npm.cmd run verify:terminology
```

Result:

- `Terminology verification: 62/62 resource checks passed.`
- Existing warning-only Lab renderer/service tripwires around `trust` / `certainty` remain; no new starter warnings appeared.

## Visual Evidence Caveat

No screenshot or browser visual acceptance is claimed.

Dev reported that the in-app Browser blocked direct `file://` inspection and temporary `localhost` inspection. During Overseer review, the Human observed a blank local screen/window behavior. Treat visual inspection as a parked manual review, not as completed evidence.

## Parked / Next

Recommended optional next step:

```txt
Static starter visual review
```

Only after visual review should Lab consider:

- optional React example scaffold
- target relay/adoption review
- static starter polish

Still deferred:

- React scaffold implementation
- renderer export/seeding
- SmokeFlash/material-harness split execution
- target-project adapter work
- renderer/export security review
