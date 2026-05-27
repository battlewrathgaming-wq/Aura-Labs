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

## M37 Boundary Note

The portable presentation offer is the clean renderer and presentation material work that can later be reviewed for target-owned adoption.

Pane Board is Lab-only tooling. Its renderer, IPC handlers, preload API, persistence, snapshots, event log, and smoke path belong to the layout conversation tool, not the portable presentation offer. Normal launch must not depend on Pane Board state or persistence, and the clean presentation head must not import Pane Board renderer code. The shared preload exposes `auraPaneBoard` only when the explicit Pane Board launch flag is active.

Source-code boundary pointers:

- `src/main/labTooling/README.md`
- `src/main/labTooling/paneBoard/README.md`
- `src/main/labTooling/paneBoard/paneBoard.js`
- `src/renderer/pane-board/README.md`
- `src/renderer/pane-board/`

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

## Stateful At Rest

Pane Board should feel casual while the disk remains explainable.

The active board should always rest at:

```text
workspace/pane-board/current-board.json
```

Meaningful turns should append to:

```text
workspace/pane-board/board-events.ndjson
```

This means the latest board can be overwritten as a working state, while named snapshots preserve moments worth keeping.

Store pane position as snapped grid integers instead of raw pixels. With an 8px grid, `x: 3` means 24px and `w: 114` means 912px. This keeps diffs readable and lets agents propose layout changes without fragile pixel edits.

Stable board state means the current board can be loaded, normalized, saved, and loaded again without changing the meaning of the sketch. The stable fields are:

- board `id`, `title`, `status`, `viewport`, and `updatedAt`
- `source.createdBy`, `source.basedOn`, `source.project`, and `source.context`
- pane `id`, `label`, integer `grid` coordinates, `role`, `importance`, `locked`, `intent`, `notes`, and optional `material`
- `review.humanIntent`, `review.agentNotes`, and `review.acceptedByHuman`
- `collaboration.notes.human`, `collaboration.notes.labs`, and `collaboration.commands`
- `screenNote`

Pane coordinates are grid-unit integers clamped to the active viewport. Labels, notes, lock state, status, review fields, and `basedOn` must survive reload. `updatedAt` may change when a save intentionally writes the current board, but loading alone should not create a new board artifact.

Human placement is expressive, not precise. Pane records may include intent hints so agents can cleanly interpret rough placement:

```json
{
  "id": "status-band",
  "label": "Status band",
  "grid": { "x": 3, "y": 3, "w": 114, "h": 9 },
  "intent": {
    "role": "summary",
    "importance": "primary",
    "anchor": "top",
    "relationship": "above primary readout",
    "notes": "Should be glanceable, not huge."
  }
}
```

## Local Material Cues

Pane Board panes may reference a local PNG as a visual material cue:

```json
{
  "material": {
    "type": "image",
    "path": "materials/example-panel-plate.png",
    "fit": "cover",
    "opacity": 0.35,
    "role": "imagination-paint"
  }
}
```

This is Lab-only Shape See support. The PNG should help Human and Labs discuss surface feel, substrate, panel texture, and visual relationship. It is not source data, not product styling, not an accepted target UI, not a bridge/runtime contract, and not a signal that the target project should adopt the image.

Material paths are constrained to relative PNG files under:

```text
workspace/pane-board/materials/
```

Existing boards do not need material metadata. Clearing a material leaves the pane as a plain shape again.

## Generated Image Hygiene

After any Shape See or material session, decide whether generated PNGs are reference material or disposable session dust.

If a PNG is reference material:

- keep it under `workspace/pane-board/materials/` or `workspace/pane-board/screenshots/`
- give it a descriptive, product-agnostic name
- add a short note that records purpose, source or generation context, what it demonstrates, and what it must not imply
- ensure board JSON references only accepted local materials under `materials/`

If a PNG is disposable:

- delete generated PNGs and transient screenshots/captures
- restore `current-board.json` and `board-events.ndjson` if they were touched only by smoke or test output

Before handoff, run:

```text
npm.cmd run verify:pane-board
git status --short
```

End with a clean tree or an intentionally staged/dirty tree whose purpose is named.

## Grab That State

The Human phrase "grab that state" means:

- read the current board
- assign a snapshot ID/title
- copy it into the right resting folder
- optionally export a PNG
- record the event in the board log
- treat it as a named reference, not a final build instruction

Useful intent phrases:

- "grab that state" -> snapshot current board as `human-sketch`
- "keep both" -> preserve multiple useful variants
- "make a proposal" -> agent forks from a current board or snapshot into `agent-proposal`
- "accept this" -> copy or fork into `human-accepted`
- "park this" -> mark as `parked`
- "compare these" -> produce a short comparison note

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
  captures/
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
