# Aura Lab Workspace Overview

Status: Active
Last reviewed: 2026-05-24

## Vision Statement

Aura Lab is a light Aura workspace for shaping an HTML presentation layer for Aura project data.

It should use the inherited Aura Core scaffold lightly while developing a bridge-aware presentation surface that can show real project data, empty/loading states, stale or failed bridge states, and clear trust/certainty language.

## Coordination Model

- `workspace/current.md` is the only active executable work packet.
- Handshake files in `workspace/` are active-milestone transaction notes.
- Completed milestone handshakes move in batch to `workspace/complete/milestone-XX/`.
- `docs/` starts lean and grows durable records only when real product or architecture truth exists.
- Deprecated per-task gap folders are not part of the active Aura Lab workflow.
- Git is not assumed for this project unless the human explicitly asks.

## Milestone Plan

| Milestone | Roadmap Source | Status | Notes |
| --- | --- | --- | --- |
| M00 | None yet | Complete | Booted Aura Lab, accepted briefing prototype, bridge test modes, visual smoke, and local Electron runtime readiness. |
| M01 | None yet | Complete | Accepted project-state briefing IA, trust band, Needs Attention slice, six bridge states, and visual smoke coverage. |
| M02 | Human direction after M01 closure | Complete | Accepted Atlas rigging review and neutral bridge-state, visual-smoke, and shell-rigging advisory candidate. |

## Current Direction

Active milestone: None selected
Last completed milestone: M02 - Reusable Rigging Pack
Roadmap source: Human direction after M01 closure, accepted Atlas rigging review
Current packet: `workspace/current.md`
Current sequence: HS20
Latest accepted handshake: workspace/complete/milestone-M02/OverseerHS20-m02-closure.md

## Durable Record Index

### Docs

- `docs/README.md`
- `docs/current-state/m00-boot-current-state.md`
- `docs/current-state/m01-project-state-briefing-current-state.md`

### Shared Coordination Authority

- `F:\Projects\Docs\Aura-Agent-Coordination\workspace-structure-authority.md`
- `F:\Projects\Docs\Aura-Agent-Coordination\agent-coordination-contract.md`
- `F:\Projects\Docs\Aura-Agent-Coordination\project-root-agent-startup-and-permissions.md`
- `F:\Projects\Docs\Aura-Agent-Coordination\agent-chat-retirement-process.md`

### Verification

- `package.json`
- `scripts/verify-all.js`

### Transaction Records

Active advisory handshakes:

- `workspace/UIUXHS16-open-source-presentation-models.md`

Completed milestone handshakes:

- `workspace/complete/`
- `workspace/complete/milestone-M00/`
- `workspace/complete/milestone-M01/`
- `workspace/complete/milestone-M02/`

### Historical Archives

- `workspace/archive/` stores inactive workspace records only when useful. It is not an active work queue.

## Open Questions

- Should Aura Lab open a UI/UX visual concept milestone using UIUXHS16?
- Should Aura Lab request Atlas UI/UX adapter review, Atlas Engineering review, Sense review, or Core suitability review through target-owned packets?
- Should Aura Lab define a durable bridge/data contract later, or keep the bridge provisional while exploring presentation direction?
- Should Aura Core seed-readiness lessons be transferred in a separate Aura Core project session?
