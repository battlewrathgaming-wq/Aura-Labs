# Bug Catchment

Status: Observation list / not backlog
Owner: Overseer
Updated: 2026-05-28

## Purpose

This file preserves recurring bugs, harness fragility, and unresolved defects so they do not disappear between sessions.

It is not a task queue, Dev runway, acceptance record, project authority file, or replacement for `workspace/current.md`.

Entries become active work only when the Human or Overseer routes them into `workspace/current.md`.

## Use

Add an entry when an issue is recurring, verified, release-relevant, or likely to confuse future agents.

Do not add every one-off smoke artifact, disposable session file, or exploratory observation. If an issue only matters during a live Shape See session, keep it in the relevant session note unless it repeats.

Suggested statuses:

- `observed`: known signal, not active
- `needs-triage`: needs a bounded review before work can be shaped
- `accepted-risk`: understood and allowed for now
- `ready-for-packet`: scoped enough for `workspace/current.md`
- `resolved`: fixed or no longer reproducible
- `parked`: not worth pursuing now

## Entries

| ID | Status | Area | Symptom | Evidence | Suspected layer | Next action |
| --- | --- | --- | --- | --- | --- | --- |
| BUG-001 | observed | Pane Board smoke / capture | Intermittent `UnknownVizError` during `npm.cmd run smoke:pane-board`; clean rerun can pass after cleanup or outside-sandbox launch. | HS152 noted a sandbox `UnknownVizError`; HS158 first Pane Board smoke attempt failed with `UnknownVizError`, then a clean rerun passed. | Electron window capture / smoke harness timing / runtime capture fragility. | Open a bounded smoke reliability review only if it repeats, blocks acceptance, or obscures whether Pane Board itself is stable. |

## Entry Template

```txt
| BUG-### | observed | [area] | [short symptom] | [command/artifact/handoff evidence] | [suspected layer] | [next action or trigger] |
```

## Guardrails

- Do not treat this file as a hidden backlog.
- Do not start Dev work from this file alone.
- Do not use this file to bypass `workspace/current.md`.
- Do not turn disposable smoke dust into project direction.
- Do not treat suspected layer as a confirmed root cause until triaged.
