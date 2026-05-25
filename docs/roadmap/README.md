# Aura Lab Roadmap

Status: Initial durable roadmap scaffold
Last reviewed: 2026-05-25

## Purpose

This folder stores milestone-sized direction for Aura Lab.

Use it to prevent single tasks from becoming whole milestones by accident. A roadmap milestone should describe a meaningful project outcome. `workspace/current.md` should then choose one executable runway inside that outcome.

## Current Phase

Display Material Proving Bench.

Aura Lab is moving from accepted material schemas into visible, inspectable HTML presentation materials. The goal is to learn which display materials are strong enough to become reusable Lab ingredients without treating workshop tooling, screenshot checks, or target-project adapters as the product.

## Near Outcomes

- Prove a small set of individual display materials.
- Define what makes a material complete, useful, and reviewable.
- Keep SmokeFlash as hidden/gated Lab tooling until a renderer split is earned.
- Prepare a repeat-cycle for future material production.
- Delay composed display outputs until individual materials are strong enough to combine.

## Candidate Milestones

| Milestone | Outcome | Status | File |
| --- | --- | --- | --- |
| M29 | Display Material Proving Bench | Candidate | `docs/roadmap/m29-display-material-proving-bench.md` |
| M30 | Display Material Repeat Cycle | Candidate | `docs/roadmap/m30-display-material-repeat-cycle.md` |
| M31 | Composed Display Output | Candidate | `docs/roadmap/m31-composed-display-output.md` |
| M32 | Export Boundary Review | Candidate | `docs/roadmap/m32-export-boundary-review.md` |

Candidate bank:

- `docs/roadmap/future-candidate-bank.md`

## Promotion Gates

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
