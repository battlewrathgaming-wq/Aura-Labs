# OverseerHS153 - Stale Context Restart Snapshot

Status: Resting-state snapshot
Date: 2026-05-27
Role: Aura Lab Overseer

## Purpose

Preserve the current Lab picture before a low-credit pause so future sessions can restart from disk without relying on chat memory.

This is not a Dev runway, not acceptance of new feature work, and not a new milestone.

## Current Project State

Aura Lab is idle after M40.

Last accepted milestone:

```txt
M40 / HS152 - Pane Board Collaboration Loop Acceptance
```

Current executor:

```txt
Human / Overseer
```

No active Dev runway is open.

## Recent Accepted Work

- M40 accepted Pane Board collaboration loop.
- Pane Board now has Human/Labs note lanes, board-local guidance commands, revision-check redraw, and resting capture.
- Overseer corrected one small redraw-loop edge case during acceptance.
- ADR 0004 records automation role/context boundaries after the Pane Board heartbeat experiment.
- Aura Wayfinder has only scaffold folders and README boundary notes; it has no runtime code, no launch flag, and no active packet.

## Current Dirty Working Files

At snapshot time, these Pane Board files are modified:

```txt
workspace/pane-board/current-board.json
workspace/pane-board/board-events.ndjson
workspace/pane-board/concepts/labs-shape-insights.md
```

They appear to be real Pane Board session output, not unrelated code work.

Meaning:

- `current-board.json` holds the latest Sense Passive Telemetry Shape See arrangement.
- `board-events.ndjson` records the recent Human/Labs board session events.
- `labs-shape-insights.md` adds a useful lesson: Shape See passes are perception training, not performance tests.

## Current Pane Board Read

Latest board state:

- status: `human-sketch`
- source project: Aura Lab board, using Sense `#NN` handles
- Human note: asks Labs to trim the sides and make expansion space below
- Labs note: describes an assembly pass that places `#02` and `#07` on the `#1` tower, stacks `#06/#05` below, and leaves two `#--` panes as lower body/detail reserve

This should be treated as board-local spatial reasoning, not product UI and not Sense meaning.

## Current Concept Insight

The latest `labs-shape-insights.md` addition says Labs should not treat every Shape See pass as a performance test.

Useful loop:

```txt
try honestly
notice what problem Labs actually solved
compare it with the problem Human intended
let the correction teach the next read
record the insight
```

This matters because some Human tasks are designed to teach perception, not to request a clean layout.

## Wayfinder Direction

Wayfinder is the likely next exploratory direction, but it is not active.

Current V1 concept:

- Current State Strip
- Next Gate Queue
- Specialist Advice Tracker
- Seed Case Collector

Core boundary:

- Wayfinder is a Lab-only orientation/readout surface.
- It is not Relay, not an authority layer, not an agent runner, and not a prompt garden blender.
- Early implementation should be manual/read-only first.

## Automation Lesson

The Pane Board Labs heartbeat was paused because it triggered role-specific work inside the Overseer thread and risked context contamination.

ADR 0004 now governs future automation posture:

- no role-specific work heartbeats in the main Overseer thread
- prefer explicit user-driven triggers
- isolate role lanes when role contamination is possible
- automation must have exact read/write boundaries and a no-op path

## Recommended Restart Posture

On restart:

1. Read `AGENTS.md`, `workspace/current.md`, `workspace/overseer.md`, and this snapshot.
2. Check `git status --short`.
3. Preserve or commit the current Pane Board session files if Human wants a clean tree.
4. Do not open Dev work unless Human explicitly asks.
5. Likely next discussion choices:
   - Wayfinder V1 scoping
   - Pane Board feel/tuning from current board state
   - presentation material/faces discussion
   - Atlas/Sense presentation-pressure intake

## Not Active

- Dev runway
- target adapters
- export/seeding
- SmokeFlash split
- generated UI
- automation heartbeat
- Wayfinder runtime
- source-project adoption

