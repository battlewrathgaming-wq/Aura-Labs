# Pane Board Development Record

Status: development evidence summary
Audience: Lab Overseer / rollout reviewer

This file is the landing record for Pane Board development evidence.

It is not the product mirror and not a shippable bundle.

## Current Anchors

- `workspace/pane-board/`
- `workspace/bug-catchment.md`
- `docs/adr/0003-shared-visual-thinking-surfaces.md`
- `docs/adr/0004-automation-role-and-context-boundaries.md`
- `workspace/decision-trail/cross-cutting.md`

Candidate internal/tooling mirror:

```txt
lab-development/pane-board/product-mirror/
```

Possible future externalized tool shelf, only if explicitly opened:

```txt
lab-products/pane-board/
```

## Current Assessment

Pane Board has proven value as a Lab-local Human/agent spatial collaboration tool.

It has accepted split/stabilization work, ownership/view clarity, collaboration loop, orientation cues, and PNG material cue support.

It is not intended as a consumable product by default.

## Accepted Development Chain

| Range | High Note | Current Meaning |
| --- | --- | --- |
| M35 | Layout capture concept | Accepted Pane Board as Lab-only, human-led, agent-cooperative layout reference tooling. |
| M36 | V1 prototype | Built a stateful-at-rest board with grid-unit panes, snapshots, PNG export, and a "grab that state" path. |
| M37 | Tooling split | Stabilized an in-repo Lab-only tooling boundary with gated preload API and source-code firewall READMEs. |
| M38 | Capability stabilization | Added normalized board load, Human sketch protection, separate agent proposals, gated capture, and verifier coverage. |
| M39 | Ownership/view clarity | Added current/proposal clarity, refresh/redraw, and Back to sketch recovery. |
| M40 | Collaboration loop | Accepted a bounded board-native collaboration loop while keeping future affordances Lab-tooling-only. |
| HS146-HS147 | Feel test / bug hunt | Proved the communication model and surfaced next collaboration risks before feature expansion. |
| HS151-HS158 | Orientation and capture | Landed quiet saved/resting cues, last-change line, changed-pane glow, capture hygiene, and at-rest screenshot posture. |
| PNG material cue pass | Visual material enrichment | Added optional local PNG material cues to make spatial sketches communicate surface quality as well as geometry. |

## High Notes

- Pane Board became the first strong Human/agent Shape See surface in Lab.
- It reduced chat-heavy spatial explanation by making positions, proportions, and intent visible.
- The board established a healthy two-way loop: Human sketch, agent proposal, Human review, optional acceptance.
- Orientation cues were framed around continuity, not spectacle: saved state, last change, changed pane, capture hygiene.
- The tool stayed advisory and Lab-local instead of becoming product UI, code generation, or target adoption.
- PNG material cues added "why this pops" texture without making the image a data claim.
- Pane Board is the shadow puppet show; captures, notes, and screenshots are the shadows/reference material, not product UI.

## Filing Posture

Keep live board state and tool source where they are.

Use this record to summarize accepted Pane Board development. Move old HS handoffs only after a dedicated filing pass and only if their conclusions are already indexed here.

## Main Readiness Gap

The next useful proof is keeping Pane Board stable as Lab-only tooling while preventing live board state, captures, collaboration notes, and material cues from polluting presentation products.

## Packaging Rule

If Pane Board is ever externalized, the clean candidate must not include:

- active `current-board.json`
- session-specific sketches
- smoke/capture dust
- Human private notes
- target-project UI claims
- generated board outputs as product defaults

The candidate should include only neutral tool code/docs, local storage rules, ownership/provenance boundaries, and clear generated-output cleanup policy.
