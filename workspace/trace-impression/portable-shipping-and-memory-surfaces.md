# Trace Impression Shipping And Memory Surfaces

Status: portable shipping guide
Audience: Overseer / rollout reviewer

## Purpose

This file explains what Trace Impression is intended to ship with, where its memory surfaces live, and how to inspect the runtime files without guessing.

It is not a Dev runway, target-project deployment record, map output, or acceptance record.

## What Ships

Trace Impression should travel as a project-local workflow bundle:

```txt
workspace/trace-impression/
```

Expected portable contents:

| Surface | Purpose | Ships? | Notes |
| --- | --- | --- | --- |
| `README.md` | Operator workflow, command meaning, read order, rerun discipline. | yes | Normal operator entry. |
| `context.md` | Project-local trace behavior, source boundaries, terms, avoid areas, must-never-infer rules. | yes, project-filled | Must be locally calibrated per project. |
| `templates/project-local-operational-map.md` | `\` local seam trace output shape. | yes | Operator template. |
| `templates/project-human-orientation-frame.md` | `|` Human orientation frame output shape. | yes | Operator template. |
| `templates/overseer-snippet.md` | Small portable snippet for project `workspace/overseer.md`. | yes | Copy/adapt only when deploying. |
| `current/README.md` | Current output folder guide. | yes | Explains replacement behavior. |
| `history/README.md` | History folder guide. | yes | Selective history only. |
| `overseer-quality-indicators.md` | Overseer-only QA aid. | optional but recommended | Not part of normal operator read path. |
| `test-fixtures/` | Local assurance fixtures and reports. | optional / rollout evidence | Do not ship as normal runtime if a project does not need local assurance evidence. |

Do not ship Lab pilot outputs as if they are portable defaults.

Lab-local outputs prove the workflow; they are not template defaults for other projects.

## Memory Surfaces

Trace Impression uses two memory lanes.

### Project-Local Memory

Lives inside the source project:

```txt
workspace/trace-impression/current/
workspace/trace-impression/history/
```

Purpose:

- local seam trace
- run log
- current Project Human Orientation Frame copy, when kept locally
- selective history for retraceability

Project-local memory preserves project authority and local source boundaries.

### Project Deep-Knowledge Memory

Lives outside the source project in that project's deep-knowledge silo:

```txt
F:\Projects\Docs\Aura-Project-Orchestration\deep-knowledge\<ProjectName>\trace-impression\
F:\Projects\Docs\Aura-Project-Orchestration\deep-knowledge\<ProjectName>\trace-impression\history\
```

Purpose:

- Human-facing Project Human Orientation Frame
- flip-book comparison
- recovery and steering

This is still project-siloed. It is not shared synthesis and not cross-project authority.

## Command Outputs

| Command | Writes | Does Not Write |
| --- | --- | --- |
| `\` local seam trace | `workspace/trace-impression/current/project-local-operational-map.md`; `workspace/trace-impression/current/run-log.md` | Human orientation frame, source code, Dev runway, target projects |
| `|` Human orientation sync | configured project deep-knowledge `trace-impression/current-human-orientation-frame.md`; optionally local current frame copy | source code, Dev runway, target projects, project authority |

## Read Order For `\`

For a new `\` run:

1. `workspace/current.md` defines the seam of interest.
2. `workspace/trace-impression/context.md` defines local Trace Impression behavior.
3. Inspect the current local source/body for the requested seam.
4. Build the fresh source-basis view.
5. Read existing Trace Impression outputs only as comparison, replacement, history, or rerun context.

Existing Trace Impression outputs are not primary source basis for new claims.

## Runtime File Inspection Guide

Use this guide when an Overseer or rollout reviewer wants to inspect the shape without guessing.

| File | Inspect For | Healthy Shape |
| --- | --- | --- |
| `README.md` | Command meaning, write boundaries, rerun discipline. | `\` and `|` are separated; old maps do not anchor new traces. |
| `context.md` | Project-local calibration. | Names purpose, source folders, avoid areas, terms, must-never-infer rules, output paths, validation owner. |
| `templates/project-local-operational-map.md` | `\` output structure. | Response, selected seam, source body, gaps, source basis, open edge, blocked output, and `Shape:` naming discipline for unaccepted units. |
| `templates/project-human-orientation-frame.md` | `|` output structure. | Project structure, source body, supporting context, focus, movement, drift/gaps, comparison classes. |
| `templates/overseer-snippet.md` | Deployment pointer. | Short enough for `workspace/overseer.md`; no project-specific claims. |
| `current/project-local-operational-map.md` | Current seam trace. | Source-cited, fresh-source-first, confidence-limited, visible gaps; unaccepted projected units are labeled as `Shape:` review handles. |
| `current/project-human-orientation-frame.md` | Local copy of current Human frame, if present. | Separates project structure, source body, supporting context, and interpretation delta. |
| `current/run-log.md` | Run record. | Names run kind, seam, output, result, verification status, and limitation. |
| `history/` | Selective retraceability. | Contains kept snapshots only when they explain change, risk, growth, or regression. |
| `overseer-quality-indicators.md` | Overseer QA when accuracy is in question. | Gated away from normal operator path. |

## What Must Not Ship As Meaning

Do not treat these as portable project truth:

- Lab pilot results
- Lab presentation-head claims
- target adoption claims
- target mapper behavior
- source-project meaning
- Human chat as accepted state
- advisory review text as active authority
- test fixture outputs as normal runtime maps

## Rollout Check

Before offering Trace Impression to another project, confirm:

- `context.md` is locally filled for that project
- `workspace/current.md` can name a seam of interest
- project-local output paths exist
- project deep-knowledge silo exists
- operators know `\` and `|` are factual orientation commands, not fuzzy discussion
- Overseer-only quality indicators are not part of the normal operator read path
- fresh source orientation happens before comparison with older maps
