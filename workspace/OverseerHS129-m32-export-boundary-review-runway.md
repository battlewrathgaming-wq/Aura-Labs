# OverseerHS129 - M32 Export Boundary Review Runway

Status: Active runway
Role: Overseer
Date: 2026-05-25

## Purpose

Open M32 as an advisory export-boundary review after M31 accepted two Lab-local material prototypes.

This packet does not authorize implementation, export, splitting, target adapters, or target-project adoption. It asks for a bounded Engineering/Security review of what must stay Lab-local before any future clean renderer/head or display material is offered outward.

## Why Now

M31 proved additional display materials inside the Lab renderer and SmokeFlash/material harness path. That is useful, but it increases the need to keep a clear boundary between:

- product-facing presentation head candidates
- Lab-only workshop/SmokeFlash/material harness tooling
- visual smoke support code
- target-project-owned adapters

ADR 0001 allows continued Lab-local material prototyping, but says SmokeFlash must split before export/seeding/target-project consumption. ADR 0002 says target projects own adapters.

M32 should clarify the boundary before Lab opens another outward-facing or export-shaped milestone.

## Expected Next Artifact

`workspace/EngineeringHS129-export-boundary-review.md`

## Review Scope

Read:

- `AGENTS.md`
- `workspace/current.md`
- `workspace/overview.md`
- `workspace/critical/README.md`
- `workspace/critical/critical-assets.md`
- `workspace/critical/critical-terms.md`
- `docs/roadmap/m32-export-boundary-review.md`
- `docs/adr/0001-smokeflash-split-timing.md`
- `docs/adr/0002-target-owned-presentation-adapters.md`
- `workspace/display-materials/README.md`
- `workspace/display-schema-ledger.md`
- `workspace/display-materials/authority-window-ttl-strip.md`
- `workspace/display-materials/long-text-detail-block.md`
- `workspace/display-materials/availability-reason-treatment.md`
- `src/renderer/index.html`
- `src/renderer/app.js`
- `src/renderer/styles.css`
- `src/main/main.js`
- `scripts/electron-visual-smoke.ps1`
- `scripts/verify-renderer-shell.js`
- `package.json`

Inspect as needed:

- `src/preload/`
- `src/services/`
- `scripts/`

## Task

Produce a bounded export-boundary review.

Answer:

1. What parts of the current renderer are plausible clean presentation-head candidates?
2. What parts are clearly Lab-only workshop/SmokeFlash/material-harness tooling?
3. What current code, DOM, CSS, smoke logic, or state naming would be risky if exported as-is?
4. What must split before target-project consumption?
5. What can safely continue for Lab-local material prototyping?
6. What adapter boundaries must target projects own?
7. Whether M32 should recommend:
   - continue Lab-local material prototyping
   - open a clean-head split milestone
   - open a composed display output milestone first
   - park export/seeding until more product-facing surface exists

## Guardrails

- Advisory only.
- Do not implement code.
- Do not edit files outside the expected review artifact unless explicitly directed later.
- Do not split SmokeFlash.
- Do not create target adapters.
- Do not define a durable bridge/runtime contract.
- Do not rename Lab or target-project terms.
- Do not import Atlas/Sense doctrine.
- Do not run live/private/network tests.
- Do not make export/seeding permission claims.

## Verification

No verification is required unless the reviewer changes files beyond the expected artifact.

If the reviewer chooses to run read-only/local checks for orientation, use only:

```powershell
npm.cmd run verify:all
```

Do not run Electron smoke unless the reviewer changes visual/runtime behavior, which this advisory packet should not do.

## Expected Output

The artifact should include:

- files reviewed
- current-state understanding
- clean presentation-head candidates
- Lab-only workshop/harness/tooling inventory
- export-as-is risks
- split-before-export requirements
- target-owned adapter boundary reaffirmation
- what can continue Lab-local
- recommended next milestone direction
- stop conditions
- unresolved questions

## Acceptance Criteria

This advisory is acceptable if:

- it is grounded in current disk state
- it distinguishes clean presentation surface from Lab-only tooling
- it preserves ADR 0001 and ADR 0002
- it does not authorize implementation or export
- it gives Overseer/Human a concrete next decision
- it keeps verification/tooling as support, not product direction
