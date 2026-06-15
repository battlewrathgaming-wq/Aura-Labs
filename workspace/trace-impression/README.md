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

## Read Order

```txt
current.md defines the seam of interest.
context.md defines local Trace Impression behavior.
overview.md defines the surrounding terrain.
```

## Templates

- `templates/project-local-operational-map.md`
- `templates/central-human-orientation-map.md`
- `templates/overseer-snippet.md`

## Cleanup

Default replacement prevents audit sediment.

Selective history preserves retraceability.

A kept snapshot must say why it was kept.

