# OverseerHS177 - M49 Sense Trial Glass Package Runway

Status: Active runway
Role: Overseer
Date: 2026-06-01
Milestone: M49 - Sense Trial Glass Package

## Human Intent

Sense selected the useful Lab goodies and needs the glass packaged for a local Sense trial.

This is shopping, not buying a house. Lab should package the selected presentation pieces so Sense can bring them in-house, use/adapt/park/reject them, and keep Sense meaning local.

## Sense Selection

Selected for local trial:

- Instrument Readout Panel Glass
- Availability Reason Treatment
- Long Text Detail Block
- Warning / Gap Edge
- maybe Expandable Status Card

Dev should treat Expandable Status Card as optional inspiration unless it is already naturally represented by the existing readout/detail shape.

## Task

Create a small Lab-local static package shape for Sense:

```txt
portable-presentation-starter/packages/sense-trial-glass/
```

The package should include only what Sense needs to inspect or copy the static glass locally.

Expected package contents may include:

- `README.md`
- `MANIFEST.md` or equivalent contents note
- static HTML/CSS/JS/JSON files copied from the accepted static starter, if useful
- selected-material notes, if useful

Prefer copying the minimum already accepted static files over inventing a new build/export system.

## Required Output

- `portable-presentation-starter/packages/sense-trial-glass/`
- `workspace/DevHS177-sense-trial-glass-package.md`

Update existing README/verifier/index files only if needed to make the package discoverable and verified.

## Guardrails

Do not:

- edit Sense
- create a Sense mapper
- create target adapters
- define Sense source meaning
- rename Sense states
- create bridge/runtime contracts
- create React scaffold
- change Electron/preload/IPC
- change current Lab renderer files
- touch SmokeFlash, Pane Board, Wayfinder, or service registry
- invent new glass/material behavior
- claim Sense adoption or product fitness

Lab provides the glass. Sense decides what to show through it.

## Package Boundary Text

The package should preserve this meaning in its README:

```txt
This package is a Lab presentation bundle for local Sense trial.
It is display-only.
Sense owns mapper behavior, source meaning, runtime behavior, product copy, review, and adoption.
Lab example data is not Sense data.
Lab display labels are not Sense state enums.
```

## Stop Conditions

Stop and report if the task requires:

- Sense project edits
- target adapter decisions
- runtime integration decisions
- package manager publishing
- framework selection
- new visual behavior
- live/private/network action

## Verification

Run:

```txt
npm.cmd run verify:static-starter
npm.cmd run verify:all
```

Then from `F:\Projects\Docs\Aura-Project-Orchestration` run:

```txt
npm.cmd run verify:terminology
```

No browser, screenshot, Electron, live, private, network, or target-project testing is required unless the implementation changes visible static behavior enough to need visual proof.

## Acceptance Checks

Overseer should accept only if:

- package exists and is small
- package is static/local
- package is clearly Sense-trial shaped but not Sense-owned meaning
- selected materials are named
- target responsibilities are explicit
- no forbidden tooling/runtime files are pulled in
- verification passes
