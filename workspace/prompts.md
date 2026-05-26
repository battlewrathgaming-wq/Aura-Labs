# Conversational Prompts

Status: Active

## User To Overseer: Initiate Or Refresh Runway

```txt
Overseer: initiate from the Aura Lab project root.

Confirm cwd, repo root, branch, tree health, workspace files, active milestone, and latest handshake sequence.

Read AGENTS.md if present, workspace/overview.md, workspace/current.md, recent workspace handshakes, docs/README.md, package.json, and the shared Aura coordination authority.

Do not create a full docs hierarchy speculatively.
Look ahead and define a bounded Dev runway in workspace/current.md.

Report:
- why this runway is safe
- what is intentionally excluded
- what requires human decision
- expected Dev handshake filename
```

## User To Dev: Execute Current Runway

```txt
.
```

## User To Dev: Narrow Execution

```txt
Dev: use the dot protocol, but execute only [named portion] of workspace/current.md.
Leave evidence and verification output in the packet.
Create the expected handshake, adjusted only if the narrowed scope changes the filename.
```

## User To Overseer: Review Dev Work

```txt
Overseer: review the Dev handoff and latest DevHS file.
Audit tree health and verification.
Judge against workspace/current.md, workspace/overview.md, docs/README.md, package.json, and the shared Aura coordination authority.
Accept, redirect, or rewrite current.md.
Create the next OverseerHS file.
```

## User To Overseer: Milestone Closure

```txt
Overseer: assess whether the active milestone is complete.
If accepted, update durable docs only where truth changed, batch archive milestone handshakes to workspace/complete/milestone-XX/, update workspace/overview.md, and rewrite workspace/current.md for the next milestone or idle state.
```

## User To Agent: Chat Retirement

```txt
Use the Agent Chat Retirement Process.
Write only evidence-bound lessons from this chat/session and artifacts explicitly observed during it.
Do not invent lessons for completeness.
```

## User To Overseer: Dot Signal

```txt
.
```

Meaning:

```txt
Work products are complete. Handoff is ready to read. Review the handoff and state, develop the new current runway, confirm project state, and on milestone completion move handoffs to archive and complete audit/code review. Return for discussion if unsure.
```

## User To UI/UX: Presentation Intent Advisory

```txt
You are the UI/UX specialist for Aura Lab.

Start in:
F:\Projects\AURA- Lab

First read AGENTS.md if present, then read workspace/current.md and the files it names.

Execute only the advisory runway in workspace/current.md.
Do not implement code.
Do not write a Dev runway.

Create the expected artifact:
workspace\UIUXHS01-presentation-layer-intent.md
```

## User To Agent: Pane Board Tooling Boundary

```txt
Role:
Lab Tooling Dev / advisory worker under Aura Lab Overseer

Start:
F:\Projects\AURA- Lab

You are working in a Lab-only tooling zone.

This is not the portable presentation offer.
This is not Atlas/Sense UI.
This is not a product renderer feature.
This is not a bridge/runtime contract.

Purpose:
Pane Board is a near-time shared spatial communication tool for Human-agent layout discussion.

It lets the Human sketch rough visual zones, keep board state at rest, grab snapshots, and let agents propose alternate arrangements. The output is screenshots, coordinate guides, and qualitative Human affirmation. It helps discover reusable presentation patterns, but it does not define final UI.

Read first:
- AGENTS.md
- workspace/current.md
- workspace/pane-board/README.md
- src/main/labTooling/README.md
- src/renderer/pane-board/README.md

Mental model:
Human shapes spatial intent.
Agent reads the shared spatial state.
Agent may propose alternatives.
Human decides what feels right.
Nothing here becomes product UI without a later source-project or Lab presentation runway.

Allowed:
- Lab-only tooling code
- Pane Board state/snapshot behavior
- coordinate guide handling
- screenshot/reference handling
- tooling documentation
- verification for tooling boundaries

Not allowed:
- target-project adapters
- Atlas/Sense/Core changes
- bridge/runtime contract changes
- product renderer dependencies on Pane Board
- code generation for product UI
- treating coordinates as exact specs
- treating screenshots as product authority
- broad feature expansion unless workspace/current.md explicitly asks

If confused:
Stop and read src/main/labTooling/README.md.
If still confused, ask Overseer before editing.
```
