# Aura Lab Roadmap

Status: Active durable roadmap scaffold
Last reviewed: 2026-06-01

## Purpose

This folder stores milestone-sized direction for Aura Lab.

Use it to prevent single tasks from becoming whole milestones by accident. A roadmap milestone should describe a meaningful project outcome. `workspace/current.md` should then choose one executable runway inside that outcome.

## Current Phase

Post-M44 static starter safety-floor corrections. Lab has the first Lab-local framework-neutral static starter reference, and the Human visual pass accepted it as a clean baseline with polish deferred. Lab now has a lightweight polish floor and safety floor for deciding when a head is fit to offer; M44 applied the small HS167 README/verifier cautions before target relay.

Aura Lab has accepted the Instrument Readout Panel as the first composed display output and accepted a Lab-local visible prototype. M35 accepted Pane Board as human-led, agent-cooperative layout-reference tooling. M36 accepted the first Lab-only Pane Board prototype. M37 accepted the first in-repo Pane Board split so future tooling work does not become removal work for the presentation offer. M38 accepted the stable Pane Board capability loop. M39 accepted ownership and view-state clarity fixes before broader collaboration affordances. M40 accepted a bounded Pane Board collaboration loop. M41 accepted the portable presentation starter-kit contents specification before implementation. M42 accepted the first static starter reference. M43 accepted the polish and safety floor for presentation head handoff. M44 accepted the small safety-floor docs/verifier corrections recommended by SecEngHS167.

## Near Outcomes

- Keep the static starter baseline available for future target relay/adoption review, optional React example, or bounded visual polish.
- Use the M43 handoff standard before asking what ships.
- Keep the first starter implementation Lab-local and framework-neutral.
- Keep React optional and deferred until the Human explicitly chooses that lane.
- Keep Pane Board output advisory and separate from the clean presentation head.
- Keep Summary / Basis / Details readability stable.
- Keep accepted material and output pages aligned with prototype observations.
- Keep SmokeFlash as hidden/gated Lab tooling until a renderer split is earned.
- Defer renderer extraction, split/readiness execution, and React scaffold implementation until Human explicitly chooses one of those lanes.

## Candidate Milestones

| Milestone | Outcome | Status | File |
| --- | --- | --- | --- |
| M29 | Presentation Head Improvement Rail | Complete | `docs/roadmap/m29-presentation-head-improvement-rail.md` |
| M30 | Presentation Resilience Gate | Complete | `docs/roadmap/m30-presentation-resilience-gate.md` |
| M31 | Display Material Repeat Cycle | Complete | `docs/roadmap/m31-display-material-repeat-cycle.md` |
| M32 | Export Boundary Review | Complete | `docs/roadmap/m32-export-boundary-review.md` |
| M33 | Composed Display Output | Complete | `docs/roadmap/m33-composed-display-output.md` |
| M34 | Instrument Readout Panel Prototype | Complete | `docs/roadmap/m34-instrument-readout-panel-prototype.md` |
| M35 | Pane Board Layout Capture | Complete | `docs/roadmap/m35-pane-board-layout-capture.md` |
| M36 | Pane Board V1 Prototype | Complete | `docs/roadmap/m36-pane-board-v1-prototype.md` |
| M37 | Pane Board Split Stabilization | Complete | `docs/roadmap/m37-pane-board-split-stabilization.md` |
| M38 | Pane Board Capability Stabilization | Complete | `docs/roadmap/m38-pane-board-capability-stabilization.md` |
| M39 | Pane Board Ownership And View Clarity | Complete | `docs/roadmap/m39-pane-board-ownership-view-clarity.md` |
| M40 | Pane Board Collaboration Loop | Complete | `docs/roadmap/m40-pane-board-collaboration-loop.md` |
| M41 | Portable Presentation Starter Kit Contents | Complete | `docs/roadmap/m41-portable-presentation-seed-kit-contents.md` |
| M42 | Static Portable Presentation Starter Reference | Complete | `docs/roadmap/m42-static-portable-presentation-starter-reference.md` |
| M43 | Presentation Head Handoff Standard | Complete | `docs/roadmap/m43-presentation-head-handoff-standard.md` |
| M44 | Static Starter Safety Floor Corrections | Complete | `docs/roadmap/m44-static-starter-safety-floor-corrections.md` |

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

Post-prototype polish ready:

- accepted output has a visible prototype
- Human or UI/UX has concrete visual notes
- the packet stays bounded to presentation polish
- no split/export/adapter work is implied

Pane Board tooling ready:

- Human sketch, agent proposal, and accepted layout states are distinct
- JSON/PNG output is an advisory spatial layout reference only
- V1 is small enough to build
- no product renderer, target adapter, or bridge/runtime contract is implied

Pane Board V1 ready:

- latest visible board rests at `workspace/pane-board/current-board.json`
- pane positions persist as grid-unit integers
- snapshots can preserve "grab that state" moments
- Human sketches and agent proposals remain separate
- clean presentation head remains independent

Pane Board capability stabilization ready:

- Human sketch state rests on disk and reloads predictably
- agent proposals are separate and reference `basedOn`
- screenshot capture is gated by explicit smoke or user/tool action
- verification checks stable-state and overwrite-boundary behavior
- qualitative Human-agent visual communication is preserved without making sketches product specs

Pane Board collaboration affordances ready:

- a real Human sketch and agent proposal exist as references
- Human confirms the two-way spatial communication model is useful
- next work stays focused on navigation, comparison, acceptance, parking, and note lanes
- no product renderer, adapter, code generation, or product-authoritative layout work is implied

Pane Board ownership/view clarity ready:

- invalid current-board ownership states are rejected
- visible UI distinguishes Human sketch from proposal-like state
- refresh/redraw and return-to-sketch behavior are available
- saved proposal viewing does not silently overwrite Human sketch state
- existing Pane Board smoke remains green

## Parked Work

- target-project adapters
- Atlas/Sense implementation
- shared bridge/runtime contracts
- broad SmokeFlash workbench expansion
- broad visual-smoke matrices
- Core ownership claims
- export/seeding until the export boundary is reviewed
- target consumption until SmokeFlash split/readiness is explicitly opened

## Roadmap Use

Before opening a new milestone or runway, the Overseer should read this file and the candidate milestone file.

Use roadmap files to identify outcome-sized work.

Use `workspace/current.md` only for the active executable packet.

Use workspace handshake files for transaction records.

Do not use this folder as a hidden backlog.
