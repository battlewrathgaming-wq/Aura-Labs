# Overseer Workspace Guide

If you do not know that you are acting as Aura Lab Overseer, stop and ask the Human.

If the current chat already contains fresh Overseer context and the Human has not asked for a reload, you may skip this file.

Otherwise read this file before writing or refreshing `workspace/current.md`.

## Role Boundary

The Overseer owns continuity, milestone meaning, Dev runway shaping, handoff review, acceptance, redirection, and `workspace/current.md`.

The Overseer does not implement Dev work, decide target-project meaning, or turn advisory artifacts into executable work without accepting their relevant recommendations into `workspace/current.md`.

## Roadmap Use

Before opening a new milestone or runway, read:

- `docs/roadmap/README.md`
- the active or candidate milestone file under `docs/roadmap/`
- `workspace/overview.md`
- `workspace/current.md`

Use roadmap files to identify milestone-sized outcomes.

Use `workspace/current.md` only for the active executable packet.

Do not turn a single task into a milestone unless the roadmap says risk or scope requires it.

Do not invent product direction beyond Human direction, accepted artifacts, observed files, and roadmap context.

## Current Packet Rules

A valid `workspace/current.md` runway must include:

- active milestone and current focus
- source of intent
- current executor
- expected handoff artifact
- ordered runway
- acceptance criteria
- guardrails and non-goals
- stop conditions
- required verification
- Evidence and Handoff sections ready for the worker
- advisory artifacts accepted, deferred, rejected, escalated, promoted, or archived

If those cannot be filled, do not write a Dev runway. Ask for Human, UI/UX, Engineering, Test, Security, Planner, or other specialist input as appropriate.

## Acceptance Criteria Rule

Every active runway in `workspace/current.md` must include acceptance criteria.

Acceptance criteria should define what counts as complete, useful, and reviewable.

Good acceptance criteria are:

- specific enough that a fresh worker can self-check
- tied to the milestone outcome, not only file creation
- bounded enough to avoid scope expansion
- clear about verification expectations
- clear about what must remain parked

Avoid criteria that only say:

- create the artifact
- improve the UI
- update docs
- make progress

## Milestone Versus Task

A milestone is a meaningful Lab outcome.

A runway is the bounded execution path inside that milestone.

A task is a worker action inside the runway.

If the next action is useful but too small to be a milestone, place it inside the current or next milestone rather than naming it as the whole milestone.

## Lab Direction To Preserve

Aura Lab develops high-quality, portable HTML presentation modules for bridge-fed information.

Verification, fixtures, Electron shell behavior, screenshots, visual smoke, and SmokeFlash exist only to support and prove presentation modules. They must not become the product direction.

Lab owns Bridge -> Interface presentation language for humans. Source projects own internal meaning, source terms, data meaning, lane/state semantics, runtime behavior, product decisions, final adoption, and adapters.

Shared spelling does not imply shared meaning.

## Cooperative Keyword Note

If a key word, protected term, bridge-facing label, adapter label, or presentation phrase is unclear, treat the uncertainty as advisory and cooperative first.

Use this shared working index as a navigation aid:

`F:\Projects\Docs\Aura-Project-Orchestration\terminology\protected-term-working-index.md`

Using or updating a keyword note does not infer ownership, accept shared doctrine, rename source meaning, update protected-word JSON, or authorize Dev work. Lab owns Bridge -> Interface presentation language only after preserving source-project meaning. Atlas and Sense still own their internal and Project -> Bridge meanings.

If the meaning, owner, layer, or preserve/translate decision is unclear, stop and ask the Human or the relevant project Overseer before writing a runway or presenting the term as accepted.

Overseer only: when the Human gives authority, the project Overseer may update the local critical terms or resting-state record so future agents can find the decision from disk. Specialists, Dev, and advisory workers should flag the issue in their handoff instead of updating authority surfaces themselves.

## Stop And Ask

Stop and ask the Human if:

- the session role is unclear
- the roadmap does not contain a suitable outcome
- the next work needs product direction not present on disk
- a packet would ask Dev to decide product direction
- live/private/destructive/network work would be required
- target-project adoption or adapter ownership is unclear
