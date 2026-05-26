# OverseerHS147 - Pane Board Bug Hunt Acceptance

Status: Accepted review
Date: 2026-05-26
Role: Overseer
Milestone Context: Post-M38 Pane Board capability pause

## Source

Human / Lab-local bug hunt after HS146 feel-test acceptance.

No code edits were made by the bug hunt.

## Acceptance Decision

The bug-hunt report is accepted.

Pane Board is safe for supervised proof-of-concept use, but not yet safe for regular Lab collaboration. The next work should focus on ownership clarity and saved-state/view navigation before adding more expressive features.

## Accepted Findings

Bugs:

- `current-board.json` can enter an invalid ownership state: `status: agent-proposal`, `source.createdBy: agent`, but `source.basedOn: null`.
- `verify:pane-board` passes despite that invalid current-board ownership state.
- External/manual proposal viewing is unsafe while the UI is open: the live UI can later save stale in-memory board state over `current-board.json`.
- The State dropdown allows direct switch to `agent-proposal` without requiring or setting lineage.

Confusing states:

- "Current board" can mean Human sketch, viewed proposal, or edited proposal.
- There is no explicit "view saved state" model.
- "Grab as" exists, but there is no paired "view mine / view yours / return to sketch."
- UI does not clearly show whether the board is Human sketch, agent proposal, accepted, parked, or working view.

Tiny fixes:

- Add explicit Refresh / Redraw button.
- Make verifier fail if current board is `agent-proposal` without `basedOn`.
- Prevent direct `agent-proposal` status changes without lineage.
- Add a clear visible chip/banner when viewing proposal state.

Bigger runway items:

- Saved-state navigation: load Human sketches/proposals without replacing each other.
- Save states as distinct views rather than swapping current-board files.
- Compare two saved states.
- Accept / park / reject with provenance.
- One-way Human note and Agent note lanes.
- Soft "intent lamps" for Human/Agent wants-to-show-something.

## Boundary

This acceptance does not authorize:

- product renderer work
- target-project adapters
- bridge/runtime contract changes
- code generation
- CSS export
- product-authoritative layout semantics
- broad Pane Board expansion

## Recommended Next Milestone

Open:

```txt
M39 - Pane Board Ownership And View Clarity
```

Goal:

Make Pane Board safer for regular Lab collaboration by preventing ownership lies and making the current working state distinct from saved sketches/proposals.

Do this before expressive collaboration affordances such as comparison, note lanes, or intent lamps.
