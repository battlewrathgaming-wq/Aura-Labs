# Aura Lab Workspace

This folder is the project-local coordination surface for Aura Lab agents.

Aura Lab uses the lean workspace-first launch model.

Root `AGENTS.md` is the project bootloader for agents. Read it first when present, then use this workspace folder for active coordination.

## Current Focus

Aura Lab is a display-elements workshop for post-bridge presentation.

The working focus is:

```txt
Build a library of ways information can be displayed, a workshop where new display ideas can be tested without overcommitting, and a material bench that proves those ways hold up under real display pressure.
```

Current proposal:

- `workspace/complete/milestone-M20/OverseerProposalHS72-display-elements-workshop-and-material-bench.md`
- `workspace/complete/milestone-M20/OverseerProposalHS72-lab-display-inventory-and-material-contract.md`

Active owner contract:

- `workspace/display-asset-documentation-owner-contract.md`

Accepted M19 support:

- `docs/current-state/m19-instrument-status-band-current-state.md`

Sense has already validated the model by adapting the instrument grammar without adopting Lab state semantics. Treat that as support for the method, not permission to create shared doctrine.

## Core Files

- `HUMAN.md` is a context refresher for Human communication style. It is not project authority and does not authorize work.
- `workspace/overview.md` is the project map and durable record index.
- `workspace/current.md` is the only active executable work packet.
- `workspace/overseer.md` is the Overseer guide for milestone/runway shaping and acceptance criteria.
- `workspace/00-dot-protocol.md` defines the role-sensitive `.` signal.
- `workspace/prompts.md` holds reusable Overseer, Dev, and specialist prompts.
- `workspace/complete/` stores batch-archived milestone handshakes.
- `workspace/workshop/` stores skunkworks/display-idea notes that are not executable until promoted through `workspace/current.md`.
- `workspace/reference/` stores reference and material-bench inputs. It is inspiration and test material, not a task queue.
- `workspace/pane-board/` stores Layout Intent Board guidance, Human sketches, agent proposals, accepted layout references, and screenshots. It is a spatial discussion surface, not product runtime state or Dev authorization.

## Display Element Contract

Future Lab work should follow this loop unless `workspace/current.md` explicitly narrows or overrides it:

1. Name the display element.
2. Choose the display material.
3. Build or refine one bounded implementation.
4. Verify readability, state behavior, and narrow layout.
5. Catalog what can now be displayed.
6. Park everything else.

Every executable packet should name the element, source of intent, material or fixture pressure, required states, required slots, narrow behavior, verification commands, and expected handoff file.

Workshop notes, reference notes, and proposal files do not authorize Dev work. Dev work starts only from `workspace/current.md`.

The UI development owner may lead display asset documentation shape and inventory productivity under `workspace/display-asset-documentation-owner-contract.md`. This does not make that role the owner of Lab direction, target-project adoption, or Dev runways.

## Roadmap And Runway Rule

Durable milestone direction lives in `docs/roadmap/`.

Use roadmap files to describe milestone-sized outcomes. Use `workspace/current.md` to describe the active executable runway.

Every active runway must include acceptance criteria. The criteria should describe what makes the work complete, useful, reviewable, verified, and bounded.

## SmokeFlash Boundary Note

SmokeFlash is Lab workshop tooling. It may stay hidden/gated while Lab is still maturing the renderer, but it must not shape the offered presentation layer.

Do not:

- make normal launch depend on SmokeFlash or workshop state
- add SmokeFlash fields to a slim envelope or bridge contract
- add product navigation through SmokeFlash
- move material harness state into shared renderer data models

Accepted strategy:

1. Build Lab presentation to ready product state.
2. Keep SmokeFlash as hidden/gated Lab tooling only.
3. When the presentation surface is worth exporting, split SmokeFlash out.
4. Attach the clean renderer/head to Atlas, Sense, or other projects through target-owned adapters.

Durable decision: `docs/adr/0001-smokeflash-split-timing.md`.

## Shared Authority

The shared structure authority lives at:

`F:\Projects\Docs\Aura-Agent-Coordination\workspace-structure-authority.md`

## Shared Role And Command Prompts

Role authority:

- `F:\Projects\Docs\Aura-Agent-Coordination\roles\README.md`
- `F:\Projects\Docs\Aura-Agent-Coordination\roles\[role]\README.md`
- `F:\Projects\Docs\Aura-Agent-Coordination\roles\[role]\prompt.md`

Command protocols:

`F:\Projects\Docs\Aura-Agent-Coordination\relay\command-protocols.md`

## Rule

`workspace/current.md` gives executable direction.

Handshake files record transactions.

`docs/` records durable project knowledge only when the project earns it.

## Keyword Authority Note

If a key word, protected term, bridge-facing label, adapter label, or presentation phrase is unclear, use `F:\Projects\Docs\Aura-Project-Orchestration\terminology\protected-term-working-index.md` as a navigation aid only.

This does not infer ownership, accept shared doctrine, rename Lab or source-project meaning, update protected-word JSON, or authorize Dev work. If the owner, layer, or preserve/translate decision is unclear, stop and ask the Human or project Overseer.

Overseer only: when the Human gives authority, the project Overseer may update `workspace/critical/` or another accepted local resting-state record. Specialists, Dev, and advisory workers should flag the issue in handoff instead of updating authority surfaces themselves.

## Shared Checkpoint Lookup

If a term, workflow, authority boundary, specialist artifact, shared offer, or cross-project concern cannot be resolved from this project root, consult:

`F:\Projects\Docs\Aura-Project-Orchestration\shared-checkpoints\README.md`

Use shared checkpoints as navigation only. They may point, compare, question, and suggest; they do not override Lab `AGENTS.md`, `workspace/current.md`, `workspace/critical/`, accepted handoffs, or durable docs.

After lookup, return to this project root before acting. Dev should consult shared checkpoints only when the active packet or a stop condition requires it.

Lab-specific cautions:

- Pane Board is Lab-only Shape See/tooling, not product runtime.
- Wayfinder is scaffold/orientation material, not active workflow authority.
- SmokeFlash is Lab-local hidden/gated tooling, not offered presentation layer.
- Display materials and composed outputs are Lab presentation candidates, not target adoption.
- PNG/material cues are imagination paint, not product style or data meaning.
- Lab Bridge -> Interface language is Lab-owned only after preserving source meaning.
- Atlas/Sense emitted terms are source-owned, not Lab defaults.
- Target adapters are owned by target projects, not Lab.
