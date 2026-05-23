# Project Docs

This folder is for durable project knowledge only.

Do not create a full documentation hierarchy speculatively during project launch.

Active agent coordination belongs in `workspace/`.

Create docs subfolders only when the project has real durable material:

- `roadmap/` for milestone meaning and accepted direction
- `current-state/` for implemented truth
- `adr/` for accepted architecture decisions
- `contracts/` for stable boundaries and interfaces
- `failures/` for reusable bug classes
- `testing/` for verification strategy
- `audits/` only if the project explicitly keeps audit records outside workspace handshakes
- `terms/`, `schemas/`, `module/`, `research/`, or `templates/` only when the project needs them

The shared structure authority lives at:

`F:\Projects\Docs\Aura-Agent-Coordination\workspace-structure-authority.md`

Aura Lab uses the lean workspace-first launch model. The project starts with coordination in `workspace/current.md` and only grows durable docs when real decisions, milestones, contracts, failures, or verification strategy need to be preserved.
