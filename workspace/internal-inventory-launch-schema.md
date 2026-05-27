# Internal Inventory And Launch Point Schema

Status: Agnostic inventory schema
Owner: Project-local Overseer
Date: 2026-05-27

## Purpose

Use this schema to document internal project assets, launch points, tools, scripts, app entries, and support surfaces so a fresh agent can understand what exists before proposing work.

This is not a feature request, not a Dev runway, not product doctrine, and not an adoption contract. It is a low-friction map of project-local knowledge.

## Direction

Start with what exists:

```txt
thing
-> owner / boundary
-> location
-> launch or access path
-> purpose
-> safe use
-> risks / do-not-touch notes
-> current readiness
```

The goal is to reduce rediscovery and drift. It should help an agent answer: "What is this, how do I inspect it, and what must I not accidentally treat it as?"

## Schema

```md
# Internal Inventory: [Project] / [Thing Name]

Status: Inventory only
Project:
Prepared by:
Date:

## 1. Item Summary

Item name:
Item type:
- app entry
- renderer surface
- main-process module
- preload/bridge boundary
- script
- verifier
- smoke harness
- fixture/sample data
- workspace artifact
- documentation hub
- local tool
- external dependency
- other: [name]

One-sentence purpose:
Current readiness:
- active
- stable
- prototype
- scaffold-only
- parked
- deprecated
- historical
- unknown

## 2. Ownership And Boundary

Local owner:
Primary user:
Authority boundary:
What this item owns:
What this item does not own:
Related terms that may be collision-prone:

## 3. Location

Primary path:
Supporting paths:
Generated output paths:
Ignored/transient paths:
Durable docs:

## 4. Launch / Access Point

How to open or run:

```txt
[command, flag, file path, or manual access route]
```

Required working directory:
Required environment variables or flags:
Expected visible result:
Expected output files:
How to stop or close:

## 5. Safe Inspection

Read first:
- [file]

Useful inspection commands:

```txt
[command]
```

Safe no-write checks:
Known verification command, if any:
GUI/manual check needed?
Network/private/live access needed?

## 6. Write Boundary

Files this item may write:
Files this item must not write:
Human-owned files:
Agent-owned files:
Generated files:
Cleanup expectations:

## 7. Dependencies

Runtime dependencies:
Project-local dependencies:
External dependencies:
Shared docs or authority files:
Assumptions:

## 8. State And Persistence

State at rest:
State in memory:
Append-only logs:
Snapshots/captures:
Config:
What counts as disposable:
What counts as evidence:

## 9. Normal Use

Normal workflow:

```txt
step 1
-> step 2
-> step 3
```

Who normally drives it:
What good output looks like:
What completion looks like:

## 10. Risks And Drift Traps

Do not confuse this with:
Common wrong assumptions:
Known fragile areas:
Security/privacy considerations:
Terminology risks:
When to stop and ask:

## 11. Restart Notes

If context is stale, check:
- [file]

Current known state:
Last accepted use:
Next likely use:
Parked follow-ons:

## 12. Minimal Inventory Row

| Item | Type | Status | Primary path | Launch/access | Owner | Do not confuse with | Verification |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [name] | [type] | [status] | [path] | [command/path] | [owner] | [boundary] | [command/none] |
```

## Minimum Useful Entry

If time is tight, fill only:

- item name
- item type
- readiness
- primary path
- launch/access point
- owner/boundary
- safe inspection
- do-not-confuse-with
- verification, if known

That is enough to prevent a future agent from treating scaffolding as product, tooling as runtime, or historical artifacts as active work.

