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
