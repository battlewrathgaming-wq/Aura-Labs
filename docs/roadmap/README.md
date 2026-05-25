# Aura Lab Roadmap

Status: Active durable roadmap scaffold
Last reviewed: 2026-05-25

## Purpose

This folder stores milestone-sized direction for Aura Lab.

Use it to prevent single tasks from becoming whole milestones by accident. A roadmap milestone should describe a meaningful project outcome. `workspace/current.md` should then choose one executable runway inside that outcome.

## Current Phase

Display Material Repeat Cycle.

Aura Lab has closed M29 and M30. It is now using the accepted material library to produce a small repeatable batch of visible display materials without turning support tooling into the product.

## Near Outcomes

- Keep presentation test coverage aligned with renderer capabilities.
- Preserve Summary / Basis / Details readability as new slices are added.
- Prove that accepted material pages can become visible prototypes through repeatable bounded packets.
- Keep SmokeFlash as hidden/gated Lab tooling until a renderer split is earned.
- Defer split/readiness until Human explicitly moves toward export or target consumption.

## Candidate Milestones

| Milestone | Outcome | Status | File |
| --- | --- | --- | --- |
| M29 | Presentation Head Improvement Rail | Complete | `docs/roadmap/m29-presentation-head-improvement-rail.md` |
| M30 | Presentation Resilience Gate | Complete | `docs/roadmap/m30-presentation-resilience-gate.md` |
| M31 | Display Material Repeat Cycle | Active | `docs/roadmap/m31-display-material-repeat-cycle.md` |
| M32 | Export Boundary Review | Candidate | `docs/roadmap/m32-export-boundary-review.md` |

Candidate bank:

- `docs/roadmap/future-candidate-bank.md`
- `docs/roadmap/display-material-repeat-cycle-candidate.md`
- `docs/roadmap/composed-display-output-candidate.md`

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

Guided repeat cycle ready:

- gathered UI/UX references have been reviewed
- candidate materials are concrete display ingredients, not product features
- candidates map to slots/content lanes
- pending material pages and ledger rows are clearly marked pending
- no implementation is authorized by the advisory pass

Implementation repeat cycle ready:

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
