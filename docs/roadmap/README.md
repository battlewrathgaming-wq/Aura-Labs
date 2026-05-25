# Aura Lab Roadmap

Status: Initial durable roadmap scaffold
Last reviewed: 2026-05-25

## Purpose

This folder stores milestone-sized direction for Aura Lab.

Use it to prevent single tasks from becoming whole milestones by accident. A roadmap milestone should describe a meaningful project outcome. `workspace/current.md` should then choose one executable runway inside that outcome.

## Current Phase

Presentation Head Improvement Rail.

Aura Lab is improving the product-facing presentation head before deciding whether it is good enough to split, protect, or offer to target projects. Material prototypes and workshop tooling support that goal, but they are not the main road.

## Near Outcomes

- Make loading a first-class presentation state or explicitly defer it.
- Add `viewIntent` as a renderer/test axis after family and state.
- Prove one expressive view intent, likely confidence-first or source-first.
- Keep presentation test coverage aligned with new renderer capabilities.
- Keep SmokeFlash as hidden/gated Lab tooling until a renderer split is earned.
- Close the phase by reviewing whether split/readiness work is justified.

## Candidate Milestones

| Milestone | Outcome | Status | File |
| --- | --- | --- | --- |
| M29 | Presentation Head Improvement Rail | Candidate | `docs/roadmap/m29-presentation-head-improvement-rail.md` |
| M30 | Display Material Repeat Cycle | Candidate | `docs/roadmap/m30-display-material-repeat-cycle.md` |
| M31 | Composed Display Output | Candidate | `docs/roadmap/m31-composed-display-output.md` |
| M32 | Export Boundary Review | Candidate | `docs/roadmap/m32-export-boundary-review.md` |

Candidate bank:

- `docs/roadmap/future-candidate-bank.md`

## Promotion Gates

Presentation head improvement accepted:

- new state or view axis is deliberate
- renderer behavior is visible and reviewable
- smoke/test coverage tracks the new capability
- default presentation remains stable
- SmokeFlash remains workshop-only

Individual material accepted:

- has a stable purpose and slot set
- renders intentional states
- handles narrow layout and text pressure
- names minimum verification
- avoids source-project doctrine drift

Repeat cycle ready:

- at least two material prototypes are accepted or one is accepted plus a strong second candidate is scoped
- acceptance criteria are repeatable
- material pages and the ledger remain aligned
- SmokeFlash remains workshop-only

Composed output ready:

- component materials are accepted
- the composition has a clear display use
- the output does not become a target adapter
- verification covers the combined behavior without broadening into a tooling project

Export review ready:

- a clean renderer/head candidate exists
- SmokeFlash split requirements are known
- target projects have their own adapter/adoption path
- Lab can describe what travels as presentation structure and what stays Lab-local

## Parked Work

- target-project adapters
- Atlas/Sense implementation
- shared bridge/runtime contracts
- broad SmokeFlash workbench expansion
- broad visual-smoke matrices
- Core ownership claims
- export/seeding until the export boundary is reviewed

## Roadmap Use

Before opening a new milestone or runway, the Overseer should read this file and the candidate milestone file.

Use roadmap files to identify outcome-sized work.

Use `workspace/current.md` only for the active executable packet.

Use workspace handshake files for transaction records.

Do not use this folder as a hidden backlog.
