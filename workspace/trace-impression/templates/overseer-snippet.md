# Trace Impression Overseer Snippet

Status: Portable snippet

Copy and adapt this into a project `workspace/overseer.md` when Trace Impression is deployed locally.

```md
## Trace Impression

Trace Impression is a source-cited orientation map for the current seam or pipeline. It helps reduce repeated audit work by keeping one current project-local map and a small run log.

Trace Impression detects pressure, maps cited source basis, and exposes gaps. It does not own the work it reveals.

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
- `|` syncs the Project Human Orientation Frame only from a current local map

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

- project Human orientation frames live outside the project in that project's deep-knowledge `trace-impression/` silo.
- older frames live in that silo's `history/` folder.
- frames support Human steering, comparison, and recovery, not project authority.

Core rule:

Project-local maps steer work. Project Human orientation frames support steering, comparison, and recovery. Source citations support confidence. Owning projects decide meaning and own any work the map helps discover.
```
