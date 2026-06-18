# Trace Impression Warm Start

Status: warm start note
Audience: Human / Overseer
Updated: 2026-06-16

## Purpose

This note preserves the current Trace Impression landing so the next session can resume without replaying the full shaping thread.

It is not a Dev runway, operator prompt, acceptance record, or deployment instruction.

## Current Shape

Trace Impression is a workflow first.

A future callable skill should be only an invocation wrapper around the workflow, not a replacement authority.

Core commands:

- `\` = project-local seam trace
- `|` = Human orientation frame

Core distinction:

```txt
\ is the local seam lamp.
| is the Human steering frame.
```

## What Has Been Proven

- `\` can produce a useful source-cited local seam card.
- `|` can produce a Human-readable orientation frame.
- The Human can infer source-code body shape from `Source Code Inspection Body`.
- The Human can detect drift or boundary discomfort from the frame.
- A dry-run agent handled sparse context by lowering confidence and keeping gaps visible.
- A dry-run agent resisted unsupported target-adoption wording.
- Project-local and project deep-knowledge memory surfaces are separated.
- Fresh-source-first ordering prevents old maps from anchoring new traces.

## Current Resting Files

Primary workflow:

- `workspace/trace-impression/README.md`
- `workspace/trace-impression/context.md`
- `workspace/trace-impression/templates/project-local-operational-map.md`
- `workspace/trace-impression/templates/project-human-orientation-frame.md`
- `workspace/trace-impression/templates/overseer-snippet.md`

Current outputs:

- `workspace/trace-impression/current/project-local-operational-map.md`
- `workspace/trace-impression/current/project-human-orientation-frame.md`
- `workspace/trace-impression/current/run-log.md`

Human-facing shelf copy:

- `F:\Projects\Docs\Aura-Project-Orchestration\deep-knowledge\Aura-Lab\trace-impression\current-human-orientation-frame.md`

Rollout / assurance:

- `workspace/trace-impression/portable-shipping-and-memory-surfaces.md`
- `workspace/trace-impression/assurance-test-ledger.md`
- `workspace/trace-impression/overseer-quality-indicators.md`
- `workspace/trace-impression/fresh_agent_bootup_artefact.md`
- `workspace/trace-impression/test-fixtures/`

## Important Refinements

### Fresh Source First

For a new `\` run:

1. read `workspace/current.md`
2. read `workspace/trace-impression/context.md`
3. inspect current local source/body
4. build fresh source-basis view
5. only then read existing Trace Impression outputs for comparison/replacement/history

Existing maps are not primary source basis for new claims.

### Source Body vs Supporting Context

`|` frames must distinguish:

- `Project Structure`
- `Source Code Inspection Body`
- `Supporting Context`
- `Current Focus`

This prevents supporting shelves, statements, or concepts from being mistaken for the inspected source-code body.

### Comparison Discipline

Frame comparison must separate:

- `source-body-change`
- `support-context-change`
- `interpretation-change`
- `map-framing-change`
- `unknown-change`

Do not report interpretation changes as project movement.

## Open Decision

The next Human / Overseer decision is whether the Trace Impression settling artifacts are accepted enough to package as a portable workflow / skill-wrapper candidate.

If yes, next likely lane:

```txt
Shape the callable skill wrapper around the accepted workflow.
```

If not, next likely lane:

```txt
Refine the workflow docs or run one more focused assurance test.
```

## Do Not Reopen By Accident

Do not open implementation work from this note alone.

Do not run another trace merely because this note exists.

Do not deploy into Atlas, Sense, Core, or Orchestration without a fresh Human / Overseer decision.

Do not treat the static starter verifier warm-start seed as Trace Impression-owned work. It belongs to the presentation-head lane if reopened.
