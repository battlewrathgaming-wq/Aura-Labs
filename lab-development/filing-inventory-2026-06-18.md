# Lab Development Filing Inventory

Status: filing inventory / no moves authorized
Date: 2026-06-18
Audience: Lab Overseer

## Purpose

This inventory maps flat `workspace/` materials into likely subject homes before any physical filing pass.

It is a planning surface only.

No files are moved by this document.

## Filing Actions

| Action | Meaning |
| --- | --- |
| leave | Keep in current location for now. |
| summarize | Preserve the conclusion in a development record or decision trail instead of moving the file. |
| move-later | Candidate for a future physical filing pass after review. |
| mirror-source | Source/product material that should remain where code/docs expect it, but may be indexed by a product mirror. |

## Move Rule

Move only when all are true:

- the artifact is completed or accepted
- the artifact clearly belongs to one subject
- it is not active in `workspace/current.md`
- the new home is stronger than flat `workspace/`
- the path change will not break known read paths

Prefer summaries over moving when a handoff is one of many and only the conclusion matters.

## Subject Homes

| Subject | Development Home | Decision Trail |
| --- | --- | --- |
| Trace Impression | `lab-development/trace-impression/` | `workspace/decision-trail/trace-impression.md` |
| Presentation Glass | `lab-development/presentation-glass/` | `workspace/decision-trail/presentation-glass.md` |
| Pane Board | `lab-development/pane-board/` | `workspace/decision-trail/pane-board.md` |
| Cross-cutting | `lab-development/` or leave in `workspace/` | `workspace/decision-trail/cross-cutting.md` |

## Trace Impression Candidates

| File / Area | Suggested Home | Action | Why | Risk If Moved |
| --- | --- | --- | --- | --- |
| `workspace/trace-impression/` | Current workbench; later compare to `lab-development/trace-impression/product-mirror/` | leave | Active Trace Impression memory/output workbench and current pilot outputs still live here. | Moving now could break current packet references and local output paths. |
| `workspace/trace-impression/assurance-test-ledger.md` | `lab-development/trace-impression/development-materials/development-record.md` summary | summarize | The ledger is development assurance, not runtime input. | Moving the full ledger may break existing current-state references during settling. |
| `workspace/trace-impression/test-fixtures/` | `lab-development/trace-impression/development-materials/history/` | move-later | Test fixtures are development evidence only. | Moving before final packaging may obscure how pilot assurance was produced. |
| `workspace/trace-impression/trial-drops/` | `lab-development/trace-impression/development-materials/history/` | move-later | Trial drops are rollout evidence, not product defaults. | Moving too early may make Atlas trial provenance harder to inspect. |
| `workspace/trace-impression/warm-start.md` and `warm-start-seeds.md` | `lab-development/trace-impression/development-materials/` | summarize | Warm-start material is development continuity. | Could be mistaken for current workflow if left too prominent, but path is still referenced in `current.md`. |
| `workspace/TraceImpressionPilotFrameHS187-trace-impression-pilot-frame.md` | `lab-development/trace-impression/development-materials/history/` | summarize | Seed framing is now captured by docs and development record. | Moving may disrupt overview transaction index until overview is cleaned. |
| `workspace/TraceImpressionContextMinimumHS188-lab-context-minimum.md` | `lab-development/trace-impression/development-materials/history/` | summarize | Context minimum is reflected in current context/template work. | Same overview/reference risk. |
| `workspace/OverseerHS186-trace-impression-project-seed.md` | `lab-development/trace-impression/development-materials/history/` | summarize | Project seed has durable statement doc and decision trail. | Move only after workspace overview no longer lists it as active transaction record. |

## Presentation Glass Candidates

| File / Area | Suggested Home | Action | Why | Risk If Moved |
| --- | --- | --- | --- | --- |
| `portable-presentation-starter/` | `lab-development/presentation-glass/product-mirror/` index only for now | mirror-source | Likely source of future glass product mirror. | Moving source/package now may break verifier paths and target package assumptions. |
| `workspace/display-materials/` | `lab-development/presentation-glass/product-mirror/` index later | mirror-source | Material pages are part of glass/material library. | Moving may break existing display shelf references. |
| `workspace/display-outputs/` | `lab-development/presentation-glass/product-mirror/` index later | mirror-source | Composed display references belong to glass. | Moving may break current overview/anchors. |
| `workspace/display-selection-shelf.md` | `lab-development/presentation-glass/development-materials/` or product mirror docs | summarize | Target-readable feature menu; may become part of product mirror after review. | Needs review to decide if it is neutral enough to ship. |
| `workspace/glass-inventory-spine.md` | `lab-development/presentation-glass/development-materials/` | summarize | Development framework for glass primitives. | Could accidentally become product doctrine if moved into product mirror too early. |
| `workspace/display-assets.md` | `lab-development/presentation-glass/development-materials/` | summarize | Inventory/support material for glass asset thinking. | May be too broad/noisy for product mirror. |
| `workspace/GlassDefinitionHS173-presentation-glass-value-definition.md` | `lab-development/presentation-glass/development-materials/history/` | summarize | Accepted value definition is now durable in docs/statements and boundaries. | Moving before overview cleanup may break recovery references. |
| `workspace/StarterKitSpecHS160-portable-presentation-contents.md` | `lab-development/presentation-glass/development-materials/history/` | summarize | Starter kit spec informed current static/glass package. | Historical detail may still be useful while packaging stabilizes. |
| `workspace/HS168-sense-relay-lab-static-starter-head-presentation-pressure-extract.md` | `lab-development/presentation-glass/development-materials/history/` | summarize | Sense pressure input for glass polish. | Target-specific pressure should not ship as product default. |
| `workspace/UIUXHS170-static-starter-presentation-pressure-polish.md` | `lab-development/presentation-glass/development-materials/history/` | summarize | UI/UX polish advisory for static starter. | Moving may hide useful provenance unless summarized. |
| `workspace/UIUXHS180-glass-primitive-react-readiness-map.md` | `lab-development/presentation-glass/development-materials/history/` | summarize | React/readiness advisory belongs to glass development. | Not product mirror until React/wrapper direction is accepted. |
| `workspace/DevHS163-static-portable-presentation-starter-reference.md` | `lab-development/presentation-glass/development-materials/history/` | summarize | Dev evidence for static starter. | Source code remains in `portable-presentation-starter/`; moving handoff may disrupt overview references. |
| `workspace/DevHS168-static-starter-safety-floor-corrections.md` | `lab-development/presentation-glass/development-materials/history/` | summarize | Safety floor correction evidence. | Should remain findable until safety floor is fully reflected in product mirror. |
| `workspace/DevHS171-static-starter-absence-relay-polish.md` | `lab-development/presentation-glass/development-materials/history/` | summarize | Presentation polish evidence. | Same provenance risk. |
| `workspace/DevHS175-display-selection-shelf.md` | `lab-development/presentation-glass/development-materials/history/` | summarize | Display selection shelf implementation evidence. | Moving before display shelf path is stable may confuse target selection references. |
| `workspace/DevHS177-sense-trial-glass-package.md` | `lab-development/presentation-glass/development-materials/history/` | summarize | Sense trial package evidence. | Target-trial specific; should not ship as product default. |
| `workspace/DevHS182-glass-primitive-css-starter.md` | `lab-development/presentation-glass/development-materials/history/` | summarize | CSS primitive starter evidence. | Source paths should remain in place until product mirror extraction. |

## Pane Board Candidates

| File / Area | Suggested Home | Action | Why | Risk If Moved |
| --- | --- | --- | --- | --- |
| `workspace/pane-board/` | Runtime/workspace state; internal tooling index only | leave | Holds live board state/materials/docs. | Moving could break Pane Board runtime and user habits. |
| `src/main/labTooling/paneBoard/` | internal tooling source; possible future externalized mirror only if opened | mirror-source | Main-process tool code. | Moving source code is a Dev/refactor task, not filing. |
| `src/renderer/pane-board/` | internal tooling source; possible future externalized mirror only if opened | mirror-source | Renderer/tool code. | Moving source code could break launch/smoke. |
| `workspace/bug-catchment.md` | `lab-development/pane-board/development-materials/` summary for Pane bugs | summarize | Current entries are Pane Board-oriented. | File is cross-project/cross-subject pattern; moving whole file may hide future non-Pane bugs. |
| `workspace/ToolingHS138-pane-board-layout-capture-advisory.md` | `lab-development/pane-board/development-materials/history/` | summarize | First Pane Board advisory. | Historical context useful but not product default. |
| `workspace/DevHS140-pane-board-v1-prototype.md` | `lab-development/pane-board/development-materials/history/` | summarize | V1 implementation evidence. | Moving before overview cleanup may break recovery references. |
| `workspace/DevHS142-pane-board-split-stabilization.md` | `lab-development/pane-board/development-materials/history/` | summarize | Split/stabilization evidence. | Same overview/reference risk. |
| `workspace/DevHS144-pane-board-capability-stabilization.md` | `lab-development/pane-board/development-materials/history/` | summarize | Capability stabilization evidence. | Same provenance risk. |
| `workspace/DevHS148-pane-board-ownership-view-clarity.md` | `lab-development/pane-board/development-materials/history/` | summarize | Ownership/view clarity evidence. | Same provenance risk. |
| `workspace/DevHS151-pane-board-collaboration-loop.md` | `lab-development/pane-board/development-materials/history/` | summarize | Collaboration loop evidence. | Same provenance risk. |
| `workspace/DevHS157-pane-board-orientation-and-at-rest-capture.md` | `lab-development/pane-board/development-materials/history/` | summarize | Orientation/at-rest capture evidence. | Same provenance risk. |
| `workspace/OverseerHS138` through `OverseerHS158` Pane Board sequence | `lab-development/pane-board/development-materials/history/` | summarize | Acceptance/runway chain should become one development history summary, not many active workspace files. | Moving individually creates path churn; summary first is safer. |
| `workspace/UIUXHS154-png-backed-surface-materials-advisory.md` | Pane Board or Presentation Glass, pending review | leave | PNG material cues touch Pane Board material enrichment and visual display thinking. | Ambiguous subject; avoid filing until reviewed. |

## Cross-Cutting / Leave In Workspace

| File / Area | Suggested Home | Action | Why | Risk If Moved |
| --- | --- | --- | --- | --- |
| `workspace/current.md` | workspace root | leave | Active executable packet. | Must not move. |
| `workspace/overview.md` | workspace root, later slimmed | leave | Current orientation cache. | Should be cleaned after filing decisions, not before. |
| `workspace/overseer.md` | workspace root | leave | Local Overseer operating shape. | Moving would break startup expectations. |
| `workspace/critical/` | workspace root | leave | Protected terms/assets. | Must remain standard project-local guardrail. |
| `workspace/decision-trail/` | workspace root | leave | New routing surface. | Should stay near current/overview. |
| `workspace/archive/` | workspace root | leave | Inactive recoverable history. | Existing archive semantics remain useful. |
| `workspace/complete/` | workspace root | leave | Completed milestone bundles. | Do not disturb without a dedicated filing pass. |
| `workspace/request_display.md` | workspace root | leave | Active/cooperative request surface. | Cross-subject and workflow-level. |
| `workspace/display-request-cooperation-contract.md` | workspace root or docs later | leave | Cross-project workflow contract. | Not a product subject yet. |
| `workspace/display-schema-ledger.md` | Presentation Glass, but still live index | leave | Ledger/index used by display materials. | Moving may break human/agent lookup. |
| `workspace/display-asset-documentation-owner-contract.md` | Presentation Glass or docs later | leave | Asset documentation owner contract. | Needs review before filing. |
| `workspace/internal-inventory-launch-schema.md` | cross-cutting / display workflow | leave | Inventory/request workflow support. | Needs review before subject filing. |
| `workspace/surface-discovery-schema.md` | cross-cutting / display workflow | leave | Surface discovery support. | Needs review before subject filing. |
| `workspace/reference/`, `workspace/workshop/`, `workspace/wayfinder/` | workspace root | leave | Existing support/workshop areas. | Not part of this pass. |

## Product Material Locations To Index Later

These are not move candidates in this pass.

| Material Location | Subject | Current Posture |
| --- | --- | --- |
| `portable-presentation-starter/` | Presentation Glass | Source/package location; index from product mirror later. |
| `workspace/display-materials/` | Presentation Glass | Material library; keep until product pass. |
| `workspace/display-outputs/` | Presentation Glass | Composed outputs; keep until product pass. |
| `workspace/pane-board/` | Pane Board | Live internal tool workspace/state; keep out of product pass unless explicitly opened. |
| `src/main/labTooling/paneBoard/` | Pane Board | Tool source; moving requires Dev/refactor runway. |
| `src/renderer/pane-board/` | Pane Board | Tool renderer source; moving requires Dev/refactor runway. |

## First Safe Follow-Up

Recommended next cleanup step:

```txt
Summarize each subject's accepted development chain into its development-record.md.
Do not move the original HS files yet.
```

Suggested order:

1. Trace Impression development record is already closest to current.
2. Presentation Glass development record should summarize M41-M52.
3. Pane Board development record should summarize M35-M40 plus HS146-HS158.
4. Only after summaries are accepted, consider physical filing of old HS files.
