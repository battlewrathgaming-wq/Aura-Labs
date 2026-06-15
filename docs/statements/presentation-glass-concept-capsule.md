# Presentation Glass Concept Capsule

Status: Accepted concept capsule
Date: 2026-06-15

## Purpose

This page preserves the core idea of Lab presentation glass.

It is not a runway, ADR, contract, package specification, component API, target adoption record, or implementation guide. It exists so the concept can be rebuilt if chat context is lost.

## Core Idea

Glass is Lab's name for the visual presentation layer after source meaning has already been preserved.

```txt
Glass is a prepared window, not the thing seen through it.
```

Lab makes the window easier to look through. The target project decides what is being looked at.

## What Glass Is

Glass is:

- display grammar
- display primitives
- CSS/token surface language
- composed display references
- static examples
- source/freshness/basis/gap/warning presentation treatments
- optional future wrappers when earned
- a way to reduce UI cold starts across projects

Glass helps a project start from known presentation material instead of a blank surface.

## What Glass Is Not

Glass is not:

- a project body
- a target adapter
- a renderer mandate
- a bridge/runtime contract
- a source schema
- product doctrine
- target state semantics
- target adoption
- a promise that future Lab heads force upgrades

Taking Lab glass does not mean taking Lab sample data, example meanings, state labels, tooling, roadmap, or maintenance burden.

## Ownership Split

Lab provides:

- display primitives
- static examples
- CSS tokens
- composed display references
- safety and polish floor notes
- optional future wrappers

Target projects provide:

- source meaning
- mapper / adapter
- runtime behavior
- product copy
- final composition
- local review
- acceptance

## Language Spine

Lab UI/display primitive terms should keep the display lane marker:

- display material
- display boundary
- display seam
- display segment
- display readout
- display marker
- display row
- display drawer
- display grid
- display motion
- display sizing

These are Bridge -> Interface / presentation vocabulary only. They do not define target source meaning, target state enums, adapter constants, runtime behavior, product surfaces, or adoption requirements.

## Rebuild Path

If context is lost, restart from:

1. `docs/statements/presentation-warm-start-package.md`
2. `workspace/display-selection-shelf.md`
3. `portable-presentation-starter/primitives/README.md`
4. `docs/adr/0002-target-owned-presentation-adapters.md`
5. `docs/statements/presentation-head-handoff-standard.md`

Then ask:

```txt
Which display primitives or glass features does this project want to try?
```

Do not ask first:

```txt
What does Lab own in the target project?
```

Lab owns the glass. The project owns the broadcast.

## Working Lines

```txt
Targets translate themselves; Lab makes the window worth looking through.
```

```txt
Lab provides composable display primitives.
Projects assemble and authorize product surfaces.
```

```txt
New windows are offers, not leashes.
```
