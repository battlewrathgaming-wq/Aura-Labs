# Trace Impression Project Seed

Status: Accepted project seed
Date: 2026-06-15

## Purpose

Trace Impression is a Lab tooling concept for helping Aura projects see code and data movement as source-cited orientation maps.

It is meant to reduce incidental audit pressure. It should help Overseers and the Human understand system shape without forcing every agent to rebuild the same traces from scattered files.

It is not source-project authority, architecture approval, product doctrine, or proof that a meaning is correct.

## Core Lines

```txt
Orient with maps.
Prove with traces.
Refresh with audits.
```

```txt
Maps reduce incidental audit.
Audits deliberately refresh maps.
```

```txt
Map enough to orient.
Lens enough to act.
```

```txt
Lab provides the lens.
The project owns the trace it produces.
```

## What Trace Impression Serves

Trace Impression serves two parties:

- Overseer, who needs enough current operational shape to scope runways, review handoffs, and avoid drift.
- Human, who needs a readable project impression to catch drift, see growth, and decide whether the system still matches the intended vision.

Both outputs should cite source where they make source claims.

Both outputs should mark uncertainty directly.

## Two-Pass Workflow

Trace Impression should normally run in two passes.

### Pass 1: Overseer Map

Purpose: reduce agent load and give the immediate operational shape.

Starts from:

- `workspace/current.md`
- `workspace/overview.md`
- recent accepted handoffs
- the explicit current question

Outputs:

- current operational focus
- pipeline spine
- relevant seam lens
- source citations
- not-proven items
- current risks
- next runway or review questions

The Overseer Map is automatically bounded by recent milestone and overview context. It should not try to become a full project map.

The primary Overseer unit is a claimable seam card:

```txt
Can I responsibly talk about this seam now?
If yes, give the evidence.
If no, name the missing proof.
```

A claimable seam card should include:

- seam summary
- reviewed date, repo commit, milestone/current links
- compact source path
- ownership and boundary markers
- current supported claims
- not proven items
- drift sensors
- verification surface
- small diagram or path sketch

It should be evidence-heavy, scoped, and uncertainty-aware. It should not try to become a whole-project essay.

### Pass 2: Human Map

Purpose: give the Human a wider project impression after the agent has enough footing.

Starts from:

- the Overseer Map
- added source/context only where needed
- the domain being reviewed
- the Human's current concern or drift signal

Outputs:

- Domain View
- Pipeline Spine
- Seam Lens
- growth marks
- fog cleared
- fog exposed
- unresolved questions for Human or project Overseer

The Human Map is allowed to be wider than the Overseer Map because the Human's role includes vision, drift detection, and project coherence. Its Domain View is still an impression map, not exhaustive source coverage.

The Human Map should show living pipes and boundary pressure in a comparative form.

A useful Human row shape is:

```txt
Pipeline | Enters From | Becomes | Shown As | Owner | Live/Private Risk | Boundary Pressure | Confidence | Next Question
```

The Human Map should also preserve a boundary-bleed view:

- meaning bleed
- authority bleed
- privacy bleed
- interpretation bleed
- product bleed

Its confidence layer should distinguish:

- verified from code
- verified from docs/current
- accepted by Human/Overseer
- inferred from conversation
- unknown / needs trace

The Human Map should not hide uncertainty to feel cleaner. It should help the Human see whether the project shape still matches the intended vision.

## Map Sizes

Trace Impression can use three map sizes.

### S - Seam Lens

A narrow route or join.

Answers:

```txt
Where does this join go?
```

Use when the question is urgent, precise, or narrow.

### M - Pipeline Spine

The default.

Answers:

```txt
How does this lane move end to end?
```

It should include the main path, nearby risk branches, boundaries, knots, broken ends, and not-mapped areas.

### L - Domain View

A broader orientation map for a mature domain area.

Answers:

```txt
What is the larger local shape around this domain?
```

Use carefully. Domain View should show impression and orientation, not pretend to be complete system truth.

## What The Maps Expose

Trace Impression maps shape and boundary.

It should expose:

- root paths
- boundaries
- handoff points
- state carriers
- display endpoints
- source citations
- missing links
- tangled knots
- broken ends
- unproven assumptions
- not mapped areas

Meaning remains unresolved unless source-project authority resolves it.

## Living Documents

Trace Impression should prefer living current maps over audit piles.

For a given domain or trace subject:

- Human Map: living continuity document, revised carefully.
- Overseer Map: current operational trace, replaced as focus changes.

The Human Map may accumulate small orientation marks:

- `new`
- `changed`
- `unclear`
- `tangled`
- `stable`
- `parked`
- `missing`
- `watch`
- `drift?`

These are orientation marks, not task statuses or implementation authority.

## Output Landing Model

Trace Impression should use two stable output homes.

### Project-Local Operational Map

The tool runs local to the source project and writes an operational map inside that project.

Purpose:

- Overseer orientation
- runway shaping
- review support
- current/recent milestone recovery
- source-cited discussion near `workspace/current.md`

Suggested local shape:

```txt
workspace/trace-impression/current-overseer-map.md
workspace/trace-impression/history/
```

The Project-Local Operational Map is the current work-facing map. It can be replaced as focus shifts.

It acts like a navigation lamp, but `navigation lamp` is explanatory shorthand, not durable terminology.

### Central Human Orientation Map

The Human-facing map should live in central deep-knowledge synthesis rather than inside active project folders.

Purpose:

- Human vision support
- cross-project inspection
- project growth tracking
- drift and boundary-pressure detection
- big-picture recovery for future Overseers

Suggested central shape:

```txt
F:\Projects\Docs\Aura-Project-Orchestration\deep-knowledge\synthesis\trace-impression\human-maps\AURA-Sense.md
F:\Projects\Docs\Aura-Project-Orchestration\deep-knowledge\synthesis\trace-impression\human-maps\AURA-Atlas.md
F:\Projects\Docs\Aura-Project-Orchestration\deep-knowledge\synthesis\trace-impression\human-maps\AURA-Lab.md
```

The Central Human Orientation Map is for vision and recovery, not project-local authority.

It acts like a growth map, but `growth map` is explanatory shorthand, not durable terminology.

Core rule:

```txt
Project-local maps steer work.
Central human maps support vision and recovery.
Source citations support trust.
Owning projects decide meaning.
```

## Deployment Behavior

Trace Impression should be deployed as a project-local workflow bundle, not as a standing cross-project worker.

The shared workflow may be developed in Lab, but rollout should place enough instructions and templates inside each consuming project that an agent can run from the project root without first finding a remote maze.

Suggested project-local bundle:

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

The distributed bundle should stay project-agnostic. It should get project meaning from `workspace/trace-impression/context.md`.

That context file should define:

- project purpose in one paragraph
- main domains and pipelines
- project-owned terms
- source folders to prefer
- folders to avoid
- live/private boundaries
- usual verification commands
- current local output path
- central Human map target path
- local validation owner
- what must never be inferred

## Invocation Commands

Trace Impression commands are factual orientation commands, not fuzzy discussion.

They should work only after local initialization or local documentation exists. If command meaning is unclear, the agent should stop and ask.

Accepted command pair:

```txt
\
```

Trace Impression local-map mode.

- project-local only
- update Project-Local Operational Map
- no central Human map write
- no source edits
- no Dev runway
- no project authority change

```txt
|
```

Trace Impression human-sync mode.

- requires a current Project-Local Operational Map
- may update Central Human Orientation Map from cited/local-map basis only
- no source edits
- no project authority change
- no strong growth indicators from a first run

Core command rule:

```txt
\ is factual local orientation.
| is explicit cross-boundary Human map sync.
Neither is fuzzy discussion.
```

## Source Priority

For local-map mode, the seam of interest is defined by project documents, not conversational guessing.

Priority order:

1. `workspace/current.md`
   - active milestone
   - current focus
   - expected output
   - stop conditions
   - recent accepted handoff if named
   - explicit seam or focus if present
2. `workspace/trace-impression/context.md`
   - project-specific trace settings
   - domains and pipelines
   - source folders
   - boundaries
3. `workspace/overview.md`
   - general scoping
   - milestone/domain background
   - surrounding terrain, not primary focus
4. Recent accepted handoffs
   - only when referenced by `current.md` or needed to understand the current focus

Working rule:

```txt
current.md defines the seam of interest.
overview.md defines the surrounding terrain.
context.md defines how Trace Impression behaves locally.
```

## Run Modes

### Local Mode

Default mode.

- reads local workflow
- reads local context
- traces local source
- writes local Project-Local Operational Map
- does not write to Orchestration

### Human Map Sync Mode

Explicit mode.

- requires current Project-Local Operational Map
- requires configured central path
- writes or updates Central Human Orientation Map
- records the local map basis
- updates gap/growth indicators only when evidence has enough basis
- does not alter source-project meaning

No central Human map update should happen without a current project-local operational map as basis.

## First Run And Growth Indicators

First run creates a baseline.

It should not claim:

- stable
- resolved
- recurring knot
- maturity

Growth indicators should be earned from repeated local maps, accepted milestones, or deliberate review.

Examples:

- `stable`: same shape across multiple maps or accepted state
- `recurring knot`: appears in more than one run or accepted handoff
- `drift?`: current shape conflicts with accepted direction or Human intent
- `resolved`: previous knot now has source-cited closure

Guardrail:

```txt
Do not assign maturity from a single impression.
```

## Deployment Stop Conditions

Stop and ask if:

- command meaning is unclear or not locally documented
- project context file is missing
- source path is too broad
- central sync is requested without a current local operational map
- central path is not configured
- private/live boundary appears and scope did not authorize handling it
- map would require target-project meaning decisions
- output would imply verification for layers not inspected
- generated files would exceed the expected local output paths

## Cleanup And Retraceability

Trace Impression should leave a trail, not a sediment layer.

Working shape:

```txt
current map = where we are now
run-log = how we got here
history = only the snapshots worth preserving
human map = living synthesis of what the journey revealed
```

Default behavior:

```txt
Replace the current Project-Local Operational Map.
Record the run in current/run-log.md.
Keep history only when it explains change, risk, or growth.
```

Keep a historical snapshot when:

- a major milestone changes the seam
- a significant refactor changes the pipeline
- a drift, knot, or broken end was discovered
- Human or Overseer explicitly says to keep it
- it supports a Central Human Orientation Map growth indicator
- it may help explain a future regression

Do not keep a historical snapshot just because a run happened.

Useful run-log row shape:

```txt
Date | Mode | Basis | Output | Replaced | History Kept | Why Kept | Notes
```

History statuses may include:

- `superseded`
- `kept-for-drift`
- `kept-for-milestone`
- `kept-for-regression`
- `parked`

Durable rules:

```txt
Default replacement prevents audit sediment.
Selective history preserves retraceability.
A kept snapshot must say why it was kept.
```

## Replacement Rule

Use one current trace per trace subject.

New current trace output replaces the previous current output of its kind. Older traces move to history only when useful.

Trace Impression should create:

```txt
current blueprint
not audit pile
```

## Not Proven From Source

`not proven from source` must be first-class.

Every map should distinguish:

- code-observed
- doc-stated
- accepted-state
- human-context
- source-cited
- inferred
- not found
- not mapped
- unclear owner
- requires owning-project review

Silence must not imply coverage.

If a map did not inspect tests, runtime calls, bridge files, or target-specific paths, it must not imply verification for those layers.

## Future Tooling Shape

A future workbench should turn:

```txt
bounded source question
-> source-cited orientation map
-> durable project-local reference
-> owning-project review
```

The tool may automate:

- file search
- import/reference discovery
- IPC/event/channel name discovery
- route and command name discovery
- verifier reference discovery
- simple call graph hints

The agent still synthesizes:

- path explanation
- proven vs inferred separation
- boundary risks
- knot/broken-end labels
- Human-readable impression
- owning-project validation questions

## Overload Controls

Trace Impression should stay boring and stable.

Use:

- one primary seam or domain focus at a time
- stable headings
- stable table shapes
- source/provenance labels on claims
- explicit missing links
- top findings only, with the rest parked
- diff mode later, once current maps exist

Do not auto-open work.

The utility may suggest:

- needs trace
- needs review
- candidate boundary drift
- missing proof

It must not create tasks, rewrite `workspace/current.md`, or treat generated maps as accepted truth.

## Non-Goals

Trace Impression must not become:

- source-project authority
- universal project truth
- architecture approval
- a replacement for code review
- a replacement for bounded source traces
- a hidden backlog
- an audit pile
- a reason to read less source when source proof is needed

If the map is disputed, stale, or too impressionistic, run a bounded source trace.
