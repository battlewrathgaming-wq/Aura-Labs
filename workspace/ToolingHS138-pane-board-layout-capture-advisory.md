# ToolingHS138 - Pane Board Layout Capture Advisory

Status: Advisory
Role: Tooling / UIUX advisory under Lab Overseer
Milestone: M35 - Pane Board Layout Capture
Date: 2026-05-26

## Files Reviewed

- `AGENTS.md`
- `workspace/current.md`
- `workspace/overview.md`
- `workspace/README.md`
- `workspace/overseer.md`
- `workspace/critical/README.md`
- `workspace/critical/critical-terms.md`
- `workspace/critical/critical-assets.md`
- `docs/roadmap/m35-pane-board-layout-capture.md`
- `workspace/OverseerHS138-m35-pane-board-layout-capture-runway.md`
- `docs/adr/0001-smokeflash-split-timing.md`
- `docs/adr/0002-target-owned-presentation-adapters.md`
- `workspace/display-outputs/instrument-readout-panel.md`
- `workspace/pane-board/README.md`
- `F:\Projects\Docs\Aura-Project-Orchestration\terminology\protected-term-working-index.md`

## Current-State Understanding

Aura Lab has accepted the Instrument Readout Panel prototype and is not currently exporting, seeding, or attaching Lab renderer code to Atlas, Sense, or Core. M35 is a tooling advisory milestone only.

The Human has identified a communication gap: spoken or written layout intent is slower and less precise than a rough spatial sketch. Pane Board should bridge that gap without turning sketches into product authority.

## Pane Board Purpose

Pane Board should be framed as a Lab-only spatial conversation tool.

One-line purpose:

```txt
Pane Board helps the Human sketch spatial intent and lets agents propose alternate arrangements without treating the sketch as product authority.
```

Its job is to show relationships, prominence, grouping, and pressure before product UI is built. It does not define final components, CSS, contracts, runtime behavior, target-project UI, bridge payloads, or Dev authorization.

## Authority And Cooperation Model

The board is cooperative and reversible:

```txt
Human sketch
-> agent proposal
-> Human review
-> accept / adapt / reject
-> later fixed UI bake through a separate Dev runway
```

Human-owned:

- original sketches
- intent notes
- accepted or adapted layouts
- accept / reject decisions

Agent-owned:

- proposal layouts
- proposal notes
- alternate arrangements
- risks and questions

Rules:

- Agents do not overwrite `human-sketch`.
- Agent proposals must include `basedOn`.
- A layout becomes `human-accepted` only by Human action or explicit Human instruction.
- Accepted layouts are reference material only.
- No layout becomes product UI without a separate `workspace/current.md` Dev runway.

## V1 Feature Scope

V1 should include only enough controls to communicate spatial intent:

- viewport presets: `960x640`, `720x640`
- add pane
- duplicate pane
- delete pane
- drag pane
- resize pane
- 8px snap grid
- edit label
- edit notes
- lock / unlock pane
- save JSON
- load JSON
- export PNG
- create agent proposal from current sketch

Recommended implementation posture for a later prototype:

- separate Lab-only Electron entry
- not inside the clean presentation head
- native Pointer Events
- CSS absolute positioning
- CSS transforms during drag
- local JSON write through Electron main-process boundary
- screenshot capture through Electron only inside the Lab tooling entry

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
- split/export/seeding work

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

## Pane Vocabulary And Keyword Risks

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

`source-stack`, `attention-list`, `status-band`, `warning-gap`, `availability`, `freshness`, and `coverage` should remain Lab presentation placeholders unless a source project explicitly maps its own meaning to them. If a pane name feels collision-prone, flag it through the protected-term advisory model rather than silently renaming source-project meaning.

## Proposed Layout JSON Shape

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

The JSON is a saved sketch format only. It is not a bridge contract, runtime fixture schema, renderer input shape, component API, target adapter contract, or implementation spec.

## Proposed Folder / Path Model

Use:

```txt
workspace/pane-board/
  README.md
  human-sketches/
  agent-proposals/
  accepted-layouts/
  screenshots/
```

This folder model has already been scaffolded locally and should remain a resting-state surface, not a hidden backlog.

## Screenshot / Reference Expectations

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

Screenshots are layout references. They are not product UI, implementation specs, or visual regression baselines unless a later packet explicitly says so.

## Later Dev Prototype Scope

A later Dev runway can be bounded to:

1. Create a separate Lab-only Electron entry.
2. Render a blank board with `960x640` and `720x640` presets.
3. Add neutral labeled panes.
4. Support drag/resize with Pointer Events and 8px grid snap.
5. Save/load JSON through the Lab tooling folder model.
6. Export a PNG screenshot with visible layout metadata.
7. Enforce separate Human sketch, agent proposal, and accepted layout paths.

That runway should not alter product renderer behavior, the clean presentation head, bridge contracts, target adapters, or SmokeFlash split policy.

## Verification Expectations For Later Prototype

For advisory only, no runtime verification is required.

For a future prototype, minimum verification should include:

- `npm.cmd run verify:all`
- a Pane Board-specific script that validates JSON shape and path separation
- Electron smoke only for the Pane Board entry if UI code is added

Do not run live/private/network tests.

## Risks And Stop Conditions

Risks:

- sketches treated as product authority
- agents copying dimensions as exact specs
- pane IDs becoming product component names
- JSON becoming a contract
- screenshot capture becoming product direction
- agent proposals overwriting Human intent
- accepted reference mistaken for accepted UI
- tool scope drifting into a draggable dashboard or SmokeFlash replacement

Stop if the work requires:

- product renderer changes
- target-project adoption
- bridge/runtime contract fields
- live data or adapters
- clean-head export or split
- broad screenshot matrix expansion
- source-project meaning decisions

## Acceptance Criteria

This advisory meets M35 if:

- Pane Board is clearly Lab-only tooling.
- Human authority and agent cooperation are explicit.
- JSON/PNG outputs are advisory spatial layout references only.
- Human sketch, agent proposal, and accepted layout states are separated.
- V1 is small enough for a bounded Dev prototype.
- target-project/product/runtime boundaries are preserved.
- unclear terms are routed through the protected-term advisory model.

## Recommendation

Proceed with Pane Board as `Layout Intent Board` / `Pane Board`: a small Lab-only tool for turning spatial intent into reviewable layout references.

The spirit should remain:

```txt
Here is the shape of the thought. Compare arrangements before anyone treats it as a build.
```
