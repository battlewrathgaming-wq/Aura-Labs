# Trace Impression Bundle

Status: Portable workflow scaffold

Trace Impression is a project-local workflow for creating source-cited orientation maps.

It is used to reduce repeated audit work by keeping:

- one current Project-Local Operational Map
- a compact run log
- selective history only when useful
- optional Central Human Orientation Map sync

## Commands

When this bundle is locally initialized:

- `\` runs local-map mode.
- `|` runs human-sync mode.

These commands are factual orientation commands, not fuzzy discussion.

## Local Mode

`\` updates only:

```txt
workspace/trace-impression/current/project-local-operational-map.md
workspace/trace-impression/current/run-log.md
```

It must not edit source code, create Dev runways, change project authority, or write the central Human map.

## Human Sync Mode

`|` requires a current local operational map.

It may update the configured Central Human Orientation Map from cited/local-map basis only.

It must not alter source-project meaning.

## Baseline And Rerun Discipline

The current Project-Local Operational Map is the baseline for discussion.

Specialist input should first discuss, annotate, or challenge the current map. Do not rerun Trace Impression just because advice arrived.

Rerun local-map mode only when:

- source changed materially
- `workspace/current.md` focus changed
- the map is stale or disputed
- a material source gap was identified
- Human or Overseer asks for refresh
- Human sync needs a current local basis

Do not rerun only because:

- a specialist gave advisory input
- a small wording issue was found
- uncertainty is already marked as not proven
- the existing map can answer the question

Investigation mode is allowed when the active packet explicitly needs repeated focused traces.

In investigation mode:

- each trace answers a specific question
- repeated traces may support Engineering/data-trace work
- only the reviewed landing should refresh the current map
- Human map sync waits for a meaningful landing

## Read Order

```txt
current.md defines the seam of interest.
context.md defines local Trace Impression behavior.
overview.md defines the surrounding terrain.
```

## Citation Standard

Every supported claim needs a citation in this shape:

```txt
file path | symbol/section | observed fact | supports claim because
```

Use stable provenance labels:

- `code-observed`
- `doc-stated`
- `accepted-state`
- `human-context`
- `inferred`
- `not-found`
- `not-mapped`

Do not present `inferred`, `not-found`, or `not-mapped` as verified.

If tests, runtime calls, bridge files, or target-specific paths were not inspected, the map must not imply verification for those layers.

## Failure Output

If local-map mode cannot produce a usable map, write a small blocked note instead of forcing a weak map.

Blocked note shape:

```txt
why map stopped
what was safe to read
what proof was missing
next safe ask
```

Do not update the Central Human Orientation Map from a blocked local run.

## Templates

- `templates/project-local-operational-map.md`
- `templates/central-human-orientation-map.md`
- `templates/overseer-snippet.md`

## Advisory Review

Use this file when asking another project Overseer or specialist for constructive input:

```txt
workspace/trace-impression/advisory-review-intake.md
```

Sense advisory disposition:

```txt
workspace/trace-impression/sense-advisory-disposition.md
```

## Cleanup

Default replacement prevents audit sediment.

Selective history preserves retraceability.

A kept snapshot must say why it was kept.
