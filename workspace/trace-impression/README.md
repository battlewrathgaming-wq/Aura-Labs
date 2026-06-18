# Trace Impression Bundle

Status: Portable workflow scaffold

Trace Impression is a project-local workflow for creating source-cited orientation maps.

It is used to reduce repeated audit work by keeping:

- one current Project-Local Operational Map
- a compact run log
- selective history only when useful
- optional Project Human Orientation Frame sync

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

It must not edit source code, create Dev runways, change project authority, or write the project Human orientation frame.

## Human Sync Mode

`|` requires a current local operational map.

It may update the configured Project Human Orientation Frame from cited local basis, project-local source/doc citations, and clearly labeled non-local orientation scaffolds.

Default external deep-knowledge landing shape:

```txt
F:\Projects\Docs\Aura-Project-Orchestration\deep-knowledge\<ProjectName>\trace-impression\
```

Older Human orientation frames belong under that project's `history/` folder.

It shows project structure, pipeline movement, current focus, cohesion/drift markers, visible gaps, and basis labels for Human steering.

`|` maps are orientation frames. The current frame supports steering; older frames support comparison and recovery.

It must not alter source-project meaning.

## Baseline And Rerun Discipline

The current Project-Local Operational Map is the baseline for discussion, not the first proof source for a new run.

For a new `\` run, orient in this order:

1. `workspace/current.md` defines the seam of interest.
2. `context.md` defines local Trace Impression behavior.
3. inspect the current local source/body for the requested seam.
4. build the fresh source-basis view.
5. read existing Trace Impression outputs only as comparison, replacement, history, or rerun context.

Existing Trace Impression outputs must not anchor a new trace before fresh source orientation.

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

Existing Trace Impression outputs may be read after fresh source orientation to understand what the run would replace, what prior gaps recur, and whether comparison/history is needed. They are not primary source basis for new claims.

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

## Naming Discipline

Trace Impression must not mint accepted project terms.

If a map identifies a future-facing, inferred, projected, or unaccepted unit, prefix the label with:

```txt
Shape:
```

Example:

```txt
Shape: projected provider-route work item
```

Treat `Shape:` labels as review handles only. They are not source terms, schema names, enums, accepted product vocabulary, or Dev-ready object names unless the owning project later accepts them through local workflow.

Use accepted project terms without `Shape:` only when source, local docs, or accepted project state already establish them.

## Specialists Reading A Map

A Trace Impression map is an orientation surface, not an answer key.

Specialists may use the current map to move faster, but should still:

- orient from the map's selected seam, boundary mapping, visible gaps, and open edge
- verify important claims against source before extending them
- preserve project-owned terms and meanings
- keep unsupported claims marked as not proven
- avoid promoting map findings directly into schema, implementation, architecture approval, or Dev authorization
- return advisory findings to the owning Overseer or project workflow

Healthy specialist use:

```txt
map -> targeted source checks -> bounded advisory finding -> local review
```

Unhealthy specialist use:

```txt
map -> assumed authority -> schema or Dev direction
```

## Failure Output

If local-map mode cannot produce a usable map, write a small blocked note instead of forcing a weak map.

Blocked note shape:

```txt
why map stopped
what was safe to read
what proof was missing
next safe ask
```

Do not update the Project Human Orientation Frame from a blocked local run.

## Templates

- `templates/project-local-operational-map.md`
- `templates/project-human-orientation-frame.md`
- `templates/overseer-snippet.md`

## Rollout And Assurance

Use this file when explaining what travels with Trace Impression and where its memory surfaces live:

```txt
workspace/trace-impression/portable-shipping-and-memory-surfaces.md
```

Use this file when reviewing assurance activities before rollout:

```txt
workspace/trace-impression/assurance-test-ledger.md
```

Use this file only when an Overseer is questioning Trace Impression accuracy:

```txt
workspace/trace-impression/overseer-quality-indicators.md
```

The quality indicators are not part of the normal operator read path.

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

For Human orientation maps, keep previous frames only when they support comparison, recovery, or visible project-motion review.

When comparing frames, do not report interpretation changes as project movement. Separate direct source/body changes, support-context changes, interpretation changes, map-framing changes, and unknown changes.
