# Trace Impression Lab Context Minimum

Status: M54 shaping artifact
Owner: Overseer
Date: 2026-06-15

## Request Answered

`workspace/current.md` asks for the minimum Lab-local Trace Impression context needed before the first primitive seam pilot.

This artifact defines:

- why `workspace/trace-impression/context.md` is currently too empty for safe local use
- minimum context for the first `\` pilot
- fields that can be filled from accepted Lab state now
- fields that should remain parked or TODO
- whether to fill context before pilot or test missing-context behavior first
- the next recommended packet

No Trace Impression pilot was run.

No templates, runner code, source files, target projects, or central Human maps were changed.

## Current State Understanding

Trace Impression is accepted as a Lab utility scaffold for source-cited orientation maps.

M53 accepted the first pilot frame:

```txt
\ = local seam trace
| = Human orientation sync
The map's authority comes from accuracy of display, not decision power.
```

The first candidate pilot remains:

```txt
Lab presentation head bridge/import boundary
```

M53 also clarified that the local `\` output should be a claimable seam card first, not a broad project essay.

## Why Context Is Currently Too Empty

`workspace/trace-impression/context.md` is still a portable template with TODOs in the sections that determine safe local behavior.

The risky gaps are:

- project purpose is not stated
- main domains and pipelines are not named
- project-owned terms are not listed
- preferred source folders are generic placeholders
- avoid/careful folders are generic placeholders
- live/private boundaries are undefined
- project-specific proof expectations are missing
- central Human map path is still TODO
- local validation owner is TODO
- must-never-infer rules are TODO

If a `\` pilot runs against that state, the correct behavior would be a blocked note, not a seam card.

That is a useful stop-condition test, but it does not prove whether Trace Impression can make a real seam easier to inspect.

## Minimum Context For First `\` Pilot

For the first primitive pilot, context only needs to cover the Lab presentation head bridge/import boundary.

Minimum context:

```txt
Project purpose:
Aura Lab develops portable post-bridge display mapping and presentation tooling.

Pilot domain:
Presentation glass / static starter / portable presentation starter.

Pilot seam:
Presentation head bridge/import boundary.

Source folders to prefer:
- portable-presentation-starter/
- scripts/
- src/main/
- src/renderer/
- docs/statements/
- workspace/

Folders to avoid or treat carefully:
- workspace/complete/
- workspace/archive/
- workspace/trace-impression/history/
- generated smoke/capture output
- target-project folders outside this repo

Live/private boundaries:
- no live/private/network work
- no clipboard
- no target-project runtime
- no Electron behavior claim unless source or verification was inspected

Proof expectations:
- cite files for every supported claim
- mark inferred, not-found, not-mapped, and not-inspected directly
- do not imply runtime/security/package readiness from static source alone

Validation owner:
Human / Lab Overseer.

Must never infer:
- target adoption
- target adapter correctness
- source-project meaning
- runtime security approval
- Electron behavior beyond cited source/verification
- Atlas/Sense compatibility
- package/export readiness beyond cited files
```

This is enough to let the first seam card test real usefulness without making the context file pretend to describe all of Lab.

## Fill-Now Fields

These fields can be filled from accepted Lab state now:

- project purpose
- current pilot domain
- current pilot seam
- source folders to prefer for this pilot
- folders to avoid or treat carefully
- live/private boundaries
- citation/proof expectations
- usual verification command: `npm.cmd run verify:all`
- local validation owner
- must-never-infer rules for the first pilot

These should be phrased as Lab-local context, not shared Aura doctrine.

## Parked Or TODO Fields

These should remain parked or explicitly scoped for later:

- full Lab domain catalog
- all possible Lab pipelines
- central Human Orientation Map path
- strong growth indicators
- conflicting-context test cases
- source-changed-since-last-run diff behavior
- runner behavior
- target-project deployment behavior
- Atlas/Sense/Core local context details

Reason:

The first primitive proof should test the seam-card motion, not force the entire Trace Impression ecosystem into a finished shape.

## Missing-Context Test Versus Context Fill

There are two useful tests:

1. Missing-context blocked behavior.
2. Correct-context seam-card behavior.

Recommendation:

```txt
Fill minimal Lab context before the first real pilot.
```

Reason:

- The missing-context behavior is already predictable: the map should block.
- A blocked run would prove the stop condition but not prove practical usefulness.
- The next valuable proof is whether a minimally anchored context lets an agent produce a useful seam card.

Keep the missing-context and conflicting-context tests as a later testing regime after the primitive useful path has been proven once.

Later testing regime:

```txt
missing context -> blocked note
correct context -> useful seam card
conflicting context -> contradiction flagged, no silent merge
```

## Recommended Next Packet

Open a small context-fill packet:

```txt
Fill workspace/trace-impression/context.md with minimum Lab-local context for the presentation head bridge/import boundary.
```

Scope:

- update only `workspace/trace-impression/context.md`
- keep context limited to the first pilot seam
- do not run Trace Impression
- do not update templates
- do not create runner code
- do not deploy to target projects

Acceptance:

- no TODO remains in fields required for the first pilot
- parked fields stay explicitly parked
- context says it is minimum pilot context, not complete Lab context
- `npm.cmd run verify:all` passes

After that, open the template/spec update packet or run a controlled first `\` pilot, depending on whether the templates already support the accepted seam-card shape.
