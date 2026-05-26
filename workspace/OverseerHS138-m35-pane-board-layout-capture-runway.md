# OverseerHS138 - M35 Pane Board Layout Capture Runway

Status: Active runway
Role: Overseer
Date: 2026-05-26

## Purpose

Open M35 as an advisory tooling milestone for a Lab-only Pane Board.

Pane Board is a human-to-agent layout interface. It should let the Human sketch rough spatial zones, let agents propose alternate layouts, and preserve JSON/PNG layout references for review before real presentation UI is built.

This packet is advisory only. It does not authorize implementation.

## Expected Artifact

`workspace/ToolingHS138-pane-board-layout-capture-advisory.md`

## Read First

- `AGENTS.md`
- `workspace/current.md`
- `workspace/overview.md`
- `workspace/README.md`
- `workspace/overseer.md`
- `workspace/critical/README.md`
- `workspace/critical/critical-terms.md`
- `workspace/critical/critical-assets.md`
- `docs/roadmap/m35-pane-board-layout-capture.md`
- `docs/adr/0001-smokeflash-split-timing.md`
- `docs/adr/0002-target-owned-presentation-adapters.md`
- `workspace/display-outputs/instrument-readout-panel.md`
- `F:\Projects\Docs\Aura-Project-Orchestration\terminology\protected-term-working-index.md`

## Task

Produce a Pane Board tooling advisory/spec.

Define a V1 Lab-only Electron tool that supports:

- blank board
- fixed viewport presets such as `960x640` and `720x640`
- neutral preset panes with IDs and labels
- drag panes with Pointer Events
- resize panes with handles
- snap to 8px grid
- save layout JSON
- capture board screenshot
- reset to default layout
- load Human sketch, agent proposal, or accepted layout

Also define the two-way cooperation model:

- Human owns accepted layout state.
- Human sketch carries the current Human intent unless explicitly replaced.
- Agents may write proposal layouts.
- Agents may annotate why a proposal may help.
- Agents may compare layouts and flag risks.
- Agents may not overwrite Human sketches without explicit authority.
- Accepted layouts remain advisory design references, not product implementation authority.
- Dev implementation still requires `workspace/current.md`.

## Suggested Output Paths

Use these as advisory paths, not implementation commitments:

```txt
workspace/layout-captures/current-board.json
workspace/layout-captures/proposals/agent-[id]-[slug].json
workspace/layout-captures/accepted/[layout-id].json
workspace/layout-captures/[layout-id].png
```

## Neutral V1 Pane Set

Start with neutral pane IDs only:

- `summary`
- `basis-map`
- `source-stack`
- `attention-list`
- `detail-drawer`
- `diagnostics`
- `actions`
- `status-band`

If any pane name feels collision-prone, flag it through the keyword/protected-term advisory model rather than silently renaming source-project meaning.

## Required Output

Include:

- files reviewed
- current-state understanding
- Pane Board purpose
- authority and cooperation model
- V1 feature scope
- non-goals
- proposed layout JSON shape
- proposed folder/path model
- pane vocabulary and keyword risks
- screenshot/reference expectations
- agent proposal workflow
- Human acceptance workflow
- later Dev prototype scope
- verification expectations for a later prototype
- risks and stop conditions
- acceptance criteria

## Guardrails

- Advisory only.
- Do not implement code.
- Do not create a Dev runway.
- Do not edit renderer/source files.
- Do not create target adapters.
- Do not define bridge/runtime contracts.
- Do not use Atlas/Sense target terms as defaults.
- Do not replace SmokeFlash or product renderer scope.
- Do not authorize export, split, seeding, or target-project consumption.
- Do not run live/private/network tests.

## Acceptance Criteria

This advisory is acceptable if:

- Pane Board is clearly Lab-only tooling
- Human authority and agent cooperation are both explicit
- JSON/PNG outputs are advisory spatial layout references only
- Human sketch, agent proposal, and accepted layout states are separated
- V1 is small enough for a bounded Dev prototype
- target-project/product/runtime boundaries are preserved
- unclear terms are routed through the protected-term advisory model
