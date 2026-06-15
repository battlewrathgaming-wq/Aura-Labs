# Trace Impression Overseer Snippet

Status: Support snippet
Date: 2026-06-15

## Purpose

This is a short snippet an Overseer may adapt into its local `workspace/overseer.md`.

It is intentionally compact. It points to Trace Impression use without turning the Overseer guide into a second specification.

Portable bundle copy:

```txt
workspace/trace-impression/templates/overseer-snippet.md
```

## Suggested Snippet

```md
## Trace Impression

Trace Impression is a source-cited orientation map for the current seam or pipeline. It helps reduce repeated audit work by keeping one current project-local map and a small run log.

Use it when:

- `workspace/current.md` names a seam, pipeline, or code/data path that needs orientation
- the next packet needs assurance before Engineering, data-trace, Security, or Dev work
- review needs to know what source proves, what is inferred, and what is not proven
- the Human asks for a Human orientation sync

Do not use it as:

- source-project authority
- architecture approval
- a replacement for code review
- a broad audit by default
- Dev authorization

Commands, when locally initialized:

- `\` refreshes the Project-Local Operational Map only
- `|` syncs the Central Human Orientation Map only from a current local map

Read order:

1. `workspace/current.md` defines the seam of interest.
2. `workspace/trace-impression/context.md` defines local trace behavior.
3. `workspace/overview.md` defines surrounding terrain.
4. Recent accepted handoffs only when needed.

Audit trail:

- current map: `workspace/trace-impression/current/project-local-operational-map.md`
- run log: `workspace/trace-impression/current/run-log.md`
- history: keep snapshots only when they explain change, risk, growth, or regression.

Human orientation:

- central Human map lives outside the project in Orchestration deep-knowledge synthesis.
- it supports Human vision and recovery, not project authority.

Core rule:

Project-local maps steer work. Central Human maps support vision and recovery. Source citations support trust. Owning projects decide meaning.
```

## Local Rewording Points

When copying this into a project `workspace/overseer.md`, reword only:

- the local `workspace/trace-impression/context.md` path if different
- the current map path if the project chooses a different local layout
- the central Human map path for that project
- any project-specific stop condition around live/private data

Do not reword the authority split unless the Human explicitly changes it:

```txt
Project-local maps steer work.
Central Human maps support vision and recovery.
Source citations support trust.
Owning projects decide meaning.
```
