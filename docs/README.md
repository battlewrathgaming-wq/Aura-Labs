# Aura Lab Docs

This folder is for durable Aura Lab project knowledge only.

Start at:

- `docs/index.md`

Active agent coordination belongs in `workspace/`. `workspace/current.md` is the executable packet; docs are not task queues.

Roadmap direction belongs in `docs/roadmap/`. Roadmap files describe milestone-sized outcomes; they do not authorize work by themselves.

## Documentation Boundary

Aura Lab documentation should preserve the project boundary:

```txt
Portable post-bridge display mapping and presentation tooling.
```

Lab docs should explain how bridge-shaped data is displayed, tested, styled, and verified after it reaches the presentation layer. They should not decide target-project product meaning, Atlas evidence doctrine, Sense tactical doctrine, or Aura Core ownership.

## Folder Creation Rule

Do not create a full documentation hierarchy speculatively.

Create docs subfolders only when the project has real durable material:

- `roadmap/` for milestone meaning and accepted direction
- `current-state/` for implemented truth
- `adr/` for accepted architecture decisions
- `contracts/` for stable boundaries and interfaces
- `failures/` for reusable bug classes
- `testing/` for verification strategy
- `audits/` only if the project explicitly keeps audit records outside workspace handshakes
- `statements/` for durable boundary statements broader than one implementation slice
- `terms/`, `schemas/`, `module/`, `research/`, or `templates/` only when the project needs them

The shared structure authority lives at:

`F:\Projects\Docs\Aura-Agent-Coordination\workspace-structure-authority.md`

Aura Lab uses the lean workspace-first launch model. The project starts with coordination in `workspace/current.md` and only grows durable docs when real decisions, milestones, contracts, failures, or verification strategy need to be preserved.

## Drift Checks

Before adding a new doc, ask:

- Is this durable Lab truth, or just a handoff?
- Is this about post-bridge presentation tooling, or product content direction?
- Does this belong in a target project instead?
- Is this a Core-neutral candidate that still needs a Core-owned packet?
- Would updating `docs/index.md` be enough?
