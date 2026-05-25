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

- `workspace/OverseerProposalHS72-display-elements-workshop-and-material-bench.md`
- `workspace/OverseerProposalHS72-lab-display-inventory-and-material-contract.md`

Active owner contract:

- `workspace/display-asset-documentation-owner-contract.md`

Accepted M19 support:

- `docs/current-state/m19-instrument-status-band-current-state.md`

Sense has already validated the model by adapting the instrument grammar without adopting Lab state semantics. Treat that as support for the method, not permission to create shared doctrine.

## Core Files

- `workspace/overview.md` is the project map and durable record index.
- `workspace/current.md` is the only active executable work packet.
- `workspace/00-dot-protocol.md` defines the role-sensitive `.` signal.
- `workspace/prompts.md` holds reusable Overseer, Dev, and specialist prompts.
- `workspace/complete/` stores batch-archived milestone handshakes.
- `workspace/workshop/` stores skunkworks/display-idea notes that are not executable until promoted through `workspace/current.md`.
- `workspace/reference/` stores reference and material-bench inputs. It is inspiration and test material, not a task queue.

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
