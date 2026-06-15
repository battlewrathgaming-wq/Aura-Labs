# Trace Impression Pilot Frame

Status: M53 shaping artifact
Owner: Overseer
Date: 2026-06-15

## Request Answered

`workspace/current.md` asks for a non-Dev pilot frame for Trace Impression before any implementation, runner, or target-project deployment.

This artifact defines:

- the practical pilot acceptance bar
- the `\` local seam trace output shape
- the `|` Human orientation sync output shape
- skill / agent-use needs
- the first Lab-local pilot candidate
- stop conditions and non-goals

No Trace Impression pilot was run.

No code, runner, target adapter, target-project deployment, or central Human map update was created.

## Current State Understanding

Trace Impression is a Lab-developed utility scaffold for source-cited orientation maps.

It should reduce incidental audit pressure by helping Overseers and the Human see source/data shape without rebuilding the same trace from scratch every time.

It is not source-project authority, architecture approval, project meaning, Dev authorization, or proof that a product direction is correct.

Accepted seed:

```txt
Orient with maps.
Prove with traces.
Refresh with audits.
```

Working value test:

```txt
My job just got easier.
```

## Pilot Purpose

The first pilot should test whether Trace Impression can make source/code orientation easier without becoming a broad audit, a doctrine document, or a hidden work queue.

The pilot should answer:

- Can an Overseer see a seam faster?
- Can the map show what is proven versus inferred?
- Can the map show where proof is missing?
- Can the map support a better next packet with less rereading?
- Can the Human get a useful orientation view without turning that view into authority?

The pilot should not answer every architecture question.

The pilot should not prove Trace Impression is ready for Atlas, Sense, Core, or Orchestration.

## Success Bar

A pilot is successful if the reviewer can honestly say:

```txt
My job just got easier.
```

Observable checks:

- The local seam map identifies the current seam in the first screen.
- The source path is compact enough to inspect without a broad reread.
- Every supported claim has a citation or an explicit basis label.
- Inferred, not-found, not-mapped, and not-inspected items are visible.
- Missing links are treated as findings, not hidden as absence.
- The next safe ask is clearer after reading the map.
- The map does not create Dev work by itself.
- The Human orientation view helps boundary steering without becoming a steering authority.

Failure checks:

- The output reads like a broad project essay.
- It hides uncertainty to feel complete.
- It repeats existing docs without improving orientation.
- It requires more context load than the audit it was meant to replace.
- It upgrades conversation, advisory input, Lab scaffold, or non-local material into proof.
- It opens implementation pressure before local review.

## Command Model

Trace Impression commands are context-exposure controls.

They define what kind of context may influence the output.

### `\` Local Seam Trace

Purpose:

```txt
Narrow. Project-local. Source-cited. Resistant to chat and vision drift.
```

Use when the project needs a current operational map of one seam, pipeline, or boundary.

Allowed basis:

- `workspace/current.md`
- `workspace/trace-impression/context.md`
- `workspace/overview.md`
- project-local source files
- project-local accepted docs and handoffs
- verification files or scripts when inspected

Guardrail:

```txt
\ protects project-local stateful observations from Human discussion, preference,
metaphor, future vision, and exploratory chat.
```

Output path:

```txt
workspace/trace-impression/current/project-local-operational-map.md
workspace/trace-impression/current/run-log.md
```

### `|` Human Orientation Sync

Purpose:

```txt
Broader. Still basis-labeled. Helps the Human see the current shape of the project without turning that view into authority.
```

Use when the Human needs a wider orientation map for boundary steering, project recovery, growth marks, or drift detection.

Allowed basis:

- current Project-Local Operational Map
- project-local source/code/doc citations when needed
- configured non-local orientation scaffolds
- accepted local state
- explicitly labeled Human context

Guardrail:

```txt
| may broaden resolution for Human boundary steering, but it must preserve basis
labels, avoid certainty promotion, and never treat Human vision, Lab material,
Orchestration material, advisory input, or inferred structure as proof of
project-local runtime behavior or accepted meaning.
```

Core distinction:

```txt
The map's authority comes from accuracy of display, not decision power.
```

## `\` Output Shape

Recommended local seam map sections:

```txt
Title
Authority Label
Freshness
Current Seam
Basis Mix
Confidence Ceiling
Compact Source Path
Observed Claims
Inferred / Not-Proven Items
Missing Links
Boundary Pressure
Verification Surface
Stop Conditions Hit
Next Safe Asks
Run Log Entry
```

Minimum useful table:

```txt
Step | File / Symbol | Observed Fact | Basis | Supports Claim Because | Gap
```

Required labels:

- `code-observed`
- `doc-stated`
- `accepted-state`
- `human-context`
- `inferred`
- `not-found`
- `not-mapped`
- `not-inspected`

Authority label:

```txt
This map is an orientation aid, not project authority.
It does not authorize work, rename terms, accept recommendations, or define source-project meaning.
```

Confidence ceiling:

```txt
Confidence ceiling: source-map only.
No runtime execution, browser inspection, live/private path read, provider call, or manual flow validation was performed unless explicitly listed.
```

Freshness markers:

- generated date
- source commit
- active milestone at time of run
- `workspace/current.md` status at time of run
- first run or replacement

## `|` Output Shape

Recommended Human orientation sections:

```txt
Title
Authority Label
Freshness
Current Project Impression
Domain View
Pipeline Spine
Seam Lens
Basis Mix
Boundary Pressure
Growth Marks
Fog Cleared
Fog Exposed
Unresolved Questions
Project-Local Checks Needed
```

Useful Human row shape:

```txt
Pipeline | Enters From | Becomes | Shown As | Owner | Live/Private Risk | Boundary Pressure | Confidence | Next Question
```

Human orientation may be wider than the local seam trace, but it must stay honest about basis.

It may show:

- high-resolution local seam facts where cited
- lower-resolution domain orientation where summarized
- explicit non-local/reference labels where used
- visible unknowns and gaps
- no certainty promotion

It must not show:

- project meaning as decided by the map
- accepted product direction from Human exploration alone
- architecture approval
- Dev authorization
- inferred runtime behavior as verified fact

## Skill / Agent-Use Review

Trace Impression should eventually be usable by an agent without a broad context hunt.

The local bundle should provide:

- `workspace/trace-impression/README.md`
- `workspace/trace-impression/context.md`
- `workspace/trace-impression/templates/project-local-operational-map.md`
- `workspace/trace-impression/templates/central-human-orientation-map.md`
- `workspace/trace-impression/templates/overseer-snippet.md`
- `workspace/trace-impression/current/`
- `workspace/trace-impression/history/`

The agent should need only:

1. project root
2. command mode: `\` or `|`
3. current local packet from `workspace/current.md`
4. local Trace Impression context
5. named output path

`workspace/trace-impression/context.md` should define:

- project purpose
- main domains and pipelines
- project-owned terms
- source folders to prefer
- folders to avoid
- live/private boundaries
- citation/proof expectations
- usual verification commands
- central Human map path
- local validation owner
- must-never-infer rules

What should remain project-local:

- whether the trace is meaningful
- project-owned terms and meanings
- accepted state
- proof expectations
- local validation and acceptance
- any Dev runway based on the trace

What Lab may provide:

- portable folder shape
- templates
- command meaning
- scaffold wording
- future runner or helper, if separately accepted

Lab should not become a continuing owner of source maps once a consumable version is adopted.

## First Pilot Candidate

Candidate:

```txt
Lab presentation head bridge/import boundary
```

Why this is a good first pilot:

- It is Lab-local.
- It has real source shape.
- It touches presentation utility without involving target projects.
- It can test source path mapping without live/private work.
- It has known boundaries around static starter, clean head, and presentation glass.

Candidate seam:

```txt
main/preload or entry boundary
-> renderer/static starter access path
-> portable-presentation-starter examples/package
-> verifier surface
```

What it would test:

- Can `\` stay narrow and source-cited?
- Can the map distinguish source-observed facts from inferred runtime behavior?
- Can it show what the presentation head depends on and does not own?
- Can it surface missing proof without forcing a weak claim?
- Can it prepare a later `|` Human orientation view?

What it must not claim:

- target-project adoption
- target adapter correctness
- runtime security approval
- Electron behavior beyond inspected source/verification
- Atlas/Sense compatibility
- package/export readiness beyond cited files

This candidate is step 2/3. It is not executed by this packet.

## Stop Conditions

Stop before producing or accepting a Trace Impression output if:

- the seam is not named from `workspace/current.md` or explicit Human/Overseer instruction
- `workspace/trace-impression/context.md` is too empty for safe local use
- the source path is too broad
- the output would require live/private/network work
- the output would require target-project meaning decisions
- the map cannot distinguish observed, inferred, not-found, not-mapped, and not-inspected
- the Human orientation sync has no current local basis
- the output would imply verification for layers not inspected
- the output would create a Dev runway by implication

Blocked output is better than weak output.

Blocked note shape:

```txt
why map stopped
what was safe to read
what proof was missing
next safe ask
```

## Non-Goals

This packet does not:

- implement runner code
- update templates
- run the first pilot
- edit target projects
- deploy into Atlas, Sense, Core, or Orchestration
- create source maps
- create a Central Human Orientation Map
- create Dev work
- decide package/export architecture
- replace code review or bounded source traces

## Recommended Next Move

If this frame is accepted, the next smallest useful packet is:

```txt
Update Trace Impression templates to include:
- authority label
- basis mix
- confidence ceiling
- freshness markers
- \ local seam trace sections
- | Human orientation sync sections
```

After that, run the first Lab-local pilot against the presentation head bridge/import boundary.

Atlas should remain out of scope until the Lab/Sense-scale proof can demonstrate practical usefulness.
