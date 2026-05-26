# Layout Intent Board

Status: Lab workspace guidance
Tool name: Pane Board

## Purpose

Layout Intent Board is a Lab-only spatial conversation tool.

It helps the Human sketch spatial intent and lets agents propose alternate arrangements without treating the sketch as product authority.

The board translates words into pixels before anyone treats those pixels as product UI.

## Authority

This folder is advisory and cooperative.

It is not:

- product renderer scope
- product navigation
- Atlas or Sense UI
- a runtime draggable dashboard
- a bridge contract
- a shared component library
- a SmokeFlash replacement
- target-project adoption
- Dev authorization

The board is not the Dev runway. It is the discussion surface before the runway exists.

Saved pane JSON is layout reference material only. It is not product runtime state, user customization state, bridge schema, component API, renderer input shape, target-project adapter contract, or implementation spec.

A layout may become product CSS only after Human/Lab Overseer acceptance and a separate `workspace/current.md` Dev runway.

## Core Workflow

Use the board as a cooperative, reversible design loop:

```text
Human sketch
-> agent proposal
-> Human review
-> accept / adapt / reject
-> later fixed UI bake through a separate Dev runway
```

Human discussion decides fitness, taste, and flow. Files preserve resting state, accepted references, inactive proposals, or action-ready decisions only.

## Board States

Use states that make authorship and authority clear:

| State | Meaning |
| --- | --- |
| `human-sketch` | Human-authored spatial intent. |
| `agent-proposal` | Agent-authored alternate arrangement based on a sketch. |
| `human-accepted` | Human accepted or adapted reference layout. |
| `superseded` | Older sketch/proposal kept for context. |
| `parked` | Interesting but inactive. |
| `rejected` | Reviewed and not used. |

Avoid `final`, `production`, `source of truth`, `spec`, and `implementation`.

## Pane Vocabulary

Pane IDs should stay neutral and reusable:

- `status-band`
- `summary`
- `primary-readout`
- `basis-map`
- `source-stack`
- `attention-list`
- `detail-drawer`
- `diagnostics`
- `actions`
- `timeline`
- `notes`
- `warning-gap`
- `availability`
- `freshness`
- `coverage`

Each pane is a labeled spatial placeholder, not a product component.

Useful pane fields:

```json
{
  "id": "status-band",
  "label": "Status band",
  "role": "summary",
  "importance": "primary",
  "notes": "First-read state and freshness."
}
```

If any pane name feels collision-prone, flag it through the keyword/protected-term advisory model rather than silently renaming source-project meaning.

## Minimum V1 Controls

V1 only needs enough to communicate spatial intent:

- viewport presets: `960x640`, `720x640`
- add pane
- duplicate pane
- delete pane
- drag pane
- resize pane
- 8px snap grid
- edit label
- edit notes
- lock/unlock pane
- save JSON
- load JSON
- export PNG
- create agent proposal from current sketch

Defer auto-layout, layers, constraints, code export, responsive generators, component libraries, live data, target adapters, and broad screenshot matrices.

## JSON Shape

Keep JSON simple, readable, and clearly non-contractual:

```json
{
  "id": "layout-2026-05-26-rscanner-v1",
  "title": "R-Scanner powered-down console sketch",
  "status": "human-sketch",
  "viewport": {
    "preset": "960x640",
    "width": 960,
    "height": 640,
    "grid": 8
  },
  "source": {
    "createdBy": "human",
    "basedOn": null,
    "project": "Aura Lab",
    "context": "layout intent sketch"
  },
  "panes": [
    {
      "id": "status-band",
      "label": "Status band",
      "x": 24,
      "y": 24,
      "w": 912,
      "h": 72,
      "role": "summary",
      "importance": "primary",
      "locked": false,
      "notes": "First-read state and freshness."
    }
  ],
  "review": {
    "humanIntent": "Status should be glanceable. Detail can sit lower. Diagnostics should feel secondary.",
    "agentNotes": "",
    "acceptedByHuman": false
  }
}
```

## Screenshot Expectations

PNG exports should help humans and agents review the layout without opening the tool.

Include visible metadata:

- title
- viewport preset
- state
- layout ID
- timestamp
- pane IDs and labels
- optional grid

A useful screenshot lets an agent answer:

- what is primary
- what is supporting
- what is near what
- what feels crowded
- what can move to detail
- what changes in narrow layout

## Human And Agent Write Rules

Human-owned:

- original sketches
- intent notes
- accepted/adapted layouts
- accept/reject decisions

Agent-owned:

- proposals
- proposal notes
- layout alternatives
- risks and questions

Rules:

- Agents do not overwrite `human-sketch`.
- Agent proposals must include `basedOn`.
- A layout becomes `human-accepted` only by Human action or explicit Human instruction.
- Accepted layouts are reference material only.
- No layout becomes product UI without a separate Dev runway.

## Storage

Use this structure:

```text
workspace/pane-board/
  README.md
  human-sketches/
  agent-proposals/
  accepted-layouts/
  screenshots/
```

## Later Prototype Acceptance Criteria

A V1 prototype is acceptable if:

- it runs as a separate Lab-only Electron entry
- it is not inside the clean presentation head
- it supports `960x640` and `720x640`
- panes move and resize with Pointer Events
- movement/resizing snaps to an 8px grid
- pane IDs and labels are visible
- layouts save/load as JSON
- screenshots export as PNG
- Human sketches and agent proposals are stored separately
- agent proposals cannot overwrite Human sketches by default
- accepted layouts require explicit Human action or instruction
- no bridge/runtime/product contract fields are introduced

## Risks

Watch for:

- sketches treated as product authority
- agents copying dimensions as exact specs
- pane IDs becoming product component names
- JSON becoming a contract
- screenshot capture becoming product direction
- agent proposals overwriting Human intent
- accepted reference mistaken for accepted UI
- tool scope drifting into a draggable dashboard or SmokeFlash replacement

## Non-Goals

Pane Board V1 should not include:

- live data
- bridge payloads
- runtime state
- target-project adapters
- product widgets
- draggable production dashboard
- SmokeFlash replacement
- code generation
- CSS export
- broad screenshot matrices
- auto-generated Dev tasks

## Spirit

Here is the shape of the thought. Compare arrangements before anyone treats it as a build.
