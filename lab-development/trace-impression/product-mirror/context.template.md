# Trace Impression Context Template

Status: project-filled template

Copy or adapt this file as:

```txt
workspace/trace-impression/context.md
```

This file anchors Trace Impression in the consuming project's local meaning, source boundaries, and safe trace behavior.

It is not project authority by itself.

## Project Purpose

TODO: One or two project-owned sentences describing what this project is for.

## Current Trace Scope

Pilot domain:

```txt
TODO
```

Pilot seam:

```txt
TODO
```

First trace question:

```txt
TODO
```

## Project-Owned Meaning Anchors

Fill only terms that matter for the trace.

| Term | Local meaning / boundary |
| --- | --- |
| TODO | TODO |

## Source Folders To Prefer

List the smallest useful local source/doc paths for trace work.

Suggested categories:

- current packet / workspace state
- source paths for the selected seam
- service/helper paths
- storage/state paths
- display/readout paths, when relevant
- relevant verification scripts

## Folders To Avoid Or Treat Carefully

List archives, deprecated paths, fixtures, generated output, historical docs, or old flows that must not be treated as active truth.

## Must Never Infer

Do not infer:

- project adoption of Trace Impression
- Dev authorization
- architecture approval
- source meaning from Trace Impression output alone
- runtime correctness without inspected source or verification basis
- source truth from Human chat alone
- target-project behavior unless that target was explicitly opened and inspected

Add project-specific must-never-infer rules here.

## Citation Standard

Every supported claim needs source basis:

```txt
file path | symbol/section | observed fact | supports claim because
```

Use confidence labels:

- `code-observed`
- `doc-stated`
- `accepted-state`
- `human-context`
- `inferred`
- `not-found`
- `not-mapped`
- `not-inspected`
- `not-proven`

Do not present `inferred`, `not-found`, `not-mapped`, `not-inspected`, or `not-proven` as verified.

## Naming Discipline

Trace Impression must not mint accepted project terms.

Use `Shape:` for future-facing, inferred, projected, or unaccepted unit labels.

`Shape:` labels are review handles only.

## Output Paths

Project-local operational map:

```txt
workspace/trace-impression/current/project-local-operational-map.md
```

Run log:

```txt
workspace/trace-impression/current/run-log.md
```

Project Human Orientation Frame, if enabled:

```txt
workspace/trace-impression/current/project-human-orientation-frame.md
```

Configured project deep-knowledge Human frame, if enabled:

```txt
F:\Projects\Docs\Aura-Project-Orchestration\deep-knowledge\<ProjectName>\trace-impression\current-human-orientation-frame.md
```

## Validation Owner

TODO: Name the local role or reviewer that decides whether Trace Impression output is fit for local use.
