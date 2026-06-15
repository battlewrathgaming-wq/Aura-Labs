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

- source-cited
- inferred
- not found
- not mapped
- unclear owner
- requires owning-project review

Silence must not imply coverage.

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

