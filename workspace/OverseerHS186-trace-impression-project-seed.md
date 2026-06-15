# OverseerHS186 - Trace Impression Project Seed

Status: Accepted
Role: Overseer
Date: 2026-06-15

## Purpose

Preserve the initial Trace Impression concept as a project seed before any tooling spec or Dev runway.

This records the Human/Overseer alignment that Trace Impression is an orientation and course-plotting utility, not a meaning engine.

## Files Reviewed

- `AGENTS.md`
- `workspace/current.md`
- `workspace/overview.md`
- `docs/statements/lab-utility-consumable-model.md`

## Files Created Or Updated

- `docs/statements/trace-impression-project-seed.md`
- `workspace/OverseerHS186-trace-impression-project-seed.md`
- `workspace/current.md`
- `workspace/overview.md`

## Accepted Seed

Trace Impression should help Aura projects understand code/data shape through source-cited maps.

It serves two parties:

- Overseer: current operational shape for runway shaping and review.
- Human: wider project impression for drift detection and vision coherence.

Core lines:

```txt
Orient with maps.
Prove with traces.
Refresh with audits.
```

```txt
Maps reduce incidental audit.
Audits deliberately refresh maps.
```

## Audience Synthesis

The audience split is the defining feature.

Overseer output should be a claimable seam card:

```txt
Can I responsibly talk about this seam now?
If yes, give the evidence.
If no, name the missing proof.
```

Human output should be a domain map/dashboard:

```txt
Pipeline | Enters From | Becomes | Shown As | Owner | Live/Private Risk | Boundary Pressure | Confidence | Next Question
```

These are not "technical vs simple" versions of the same output. They are different instruments.

The Overseer card helps work move safely.

The Human map helps vision stay coherent.

## Output Landing Model

Accepted durable terms:

- Project-Local Operational Map
- Central Human Orientation Map

Core rule:

```txt
Project-local maps steer work.
Central human maps support vision and recovery.
Source citations support trust.
Owning projects decide meaning.
```

The Project-Local Operational Map should live inside the source project and support current Overseer orientation.

The Central Human Orientation Map should live in Orchestration deep-knowledge synthesis and support cross-project Human inspection and recovery.

Metaphors such as navigation lamp or growth map are explanatory only. They should not become contract terms.

## Deployment Behavior

Trace Impression should deploy as a project-local workflow bundle.

Suggested local bundle:

```txt
workspace/trace-impression/
  README.md
  context.md
  templates/
    project-local-operational-map.md
    central-human-orientation-map.md
  current-overseer-map.md
  history/
```

Lab scaffold created at:

```txt
workspace/trace-impression/
```

Portable Overseer snippet:

```txt
workspace/trace-impression/templates/overseer-snippet.md
```

Preferred project-local output shape:

```txt
workspace/trace-impression/
  current/
    project-local-operational-map.md
    run-log.md
  history/
    YYYY-MM/
      YYYY-MM-DD-trace-subject.md
```

The bundle should be project-agnostic and receive project meaning from `workspace/trace-impression/context.md`.

Support snippet for future local Overseer guides:

```txt
docs/statements/trace-impression-overseer-snippet.md
```

Invocation commands:

```txt
\
```

Local-map mode. Project-local only. Updates Project-Local Operational Map. No central write.

```txt
|
```

Human-sync mode. Requires a current Project-Local Operational Map and may update Central Human Orientation Map from cited/local basis only.

Source priority:

```txt
current.md defines the seam of interest.
overview.md defines the surrounding terrain.
context.md defines how Trace Impression behaves locally.
```

First run creates a baseline. Do not assign maturity from a single impression.

Cleanup rule:

```txt
Default replacement prevents audit sediment.
Selective history preserves retraceability.
A kept snapshot must say why it was kept.
```

The current map shows where the project is now. `current/run-log.md` records how the trace moved. `history/` keeps only snapshots that explain change, risk, growth, or possible regression.

## Two-Pass Shape

Pass 1:

```txt
Overseer Map
```

Bounded by `workspace/current.md`, `workspace/overview.md`, recent accepted handoffs, and the explicit current question.

Pass 2:

```txt
Human Map
```

Built from the Overseer Map, then widened into Domain View -> Pipeline Spine -> Seam Lens so the Human can see shape, drift, fog cleared, and fog exposed.

## Map Sizes

- S - Seam Lens
- M - Pipeline Spine
- L - Domain View

Default useful size is Pipeline Spine.

Human Map may include Domain View by default when the purpose is project impression or drift detection.

## Boundaries

This acceptance does not open implementation work.

It does not create:

- a source trace tool
- source-project edits
- target-project authority
- architecture approval
- universal project truth
- generated outputs as accepted meaning

## Future Pickup

If Human chooses to continue this lane, the next clean step is a planning/spec packet for Trace Impression output shape.

That packet should define:

- project-local landing paths
- current/history replacement rule
- Overseer Map template
- Human Map template
- required source citation format
- `not proven from source` handling
- first prototype trace subject
- provenance labels such as code-observed, doc-stated, accepted-state, human-context, inferred, not found, and not mapped
- Project-Local Operational Map and Central Human Orientation Map landing paths
- local `workspace/trace-impression/context.md` shape
- `\` local-map and `|` human-sync command behavior
- first-run baseline and growth-indicator rules
- current/run-log/history cleanup and retraceability behavior
- portable scaffold files under `workspace/trace-impression/`
