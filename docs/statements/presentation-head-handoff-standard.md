# Presentation Head Handoff Standard

Status: Accepted handoff standard
Date: 2026-06-01

## Purpose

This standard defines the minimum polish and safety floor for offering a Lab presentation head to a target project.

It should be read with:

- `docs/statements/post-bridge-presentation-boundary.md`
- `docs/statements/lab-presentation-head-posture.md`
- `docs/roadmap/m43-presentation-head-handoff-standard.md`

## Intent

Lead with intent.

Drive attention, not people.

Confidence, not forced certainty.

Bounded motion remains humane.

Aura does not seek perfection. It seeks recovery.

## Scope

This standard applies before Lab decides what head package is fit to offer.

It does not:

- authorize implementation
- authorize target adoption
- create a target adapter
- define bridge/runtime contracts
- make Lab owner of target meaning
- require target projects to upgrade

## Polish Floor

A head should be fit to inspect before it is offered.

Minimum polish means:

- the first view is readable
- hierarchy is stable
- text does not visibly overflow
- state treatment is calm and legible
- source, basis, freshness, gaps, and warnings are visible enough to support confidence without forced certainty
- detail reveal is usable
- narrow or constrained layout behavior is not obviously broken
- Lab tooling is not visible in the offered head
- the face feels intentional, not like a raw diagnostic surface

This is not a perfection gate. It is a usefulness gate.

## Safety Floor

A head should be safe to inspect before it is offered.

Minimum safety means:

- no privileged runtime access
- no preload, IPC, filesystem, clipboard, screenshot, or live provider dependency
- no network dependency in the reference package
- no `eval` or remote scripts
- incoming display fields are treated as untrusted display input
- text is rendered as text, not arbitrary HTML
- adapter mapping stays outside the head
- SmokeFlash, Pane Board, Wayfinder, Lab service registry, and Lab fixture tooling do not travel
- no secrets or private data are included
- the package says it is display-only and not a trust boundary

This is not a full target-product security review. It is the shared floor that saves repeated obvious hardening work.

## Handoff Contents

A handoff package may include:

- static reference files
- README and boundary notes
- example display input
- styling primitives or CSS variables
- display grammar notes
- source, basis, freshness, gap, and warning treatment notes
- polish notes
- safety-floor notes
- optional migration or difference notes for newer head versions

## Adoption Boundary

A target project adopting a Lab head does not adopt Lab's sample data, example meanings, state enums, roadmap, tooling, or future upgrade path.

Target projects own:

- source meaning
- adapter mapping
- product language
- runtime behavior
- local refinement
- adoption timing

Lab owns:

- the reference head
- the exploration bench
- future optional offers
- Lab-owned tooling

## Ready To Offer

A head is ready to offer when Lab can say:

- it is useful enough to try
- it is clear what travels and what does not
- source-owned placeholders are qualified
- display examples cannot reasonably be mistaken for target contracts
- a target can feed it through a local adapter without Lab deciding source meaning
- target-local deviation can become feedback instead of forced convergence
- Lab can shelf the reference and continue exploration

## Not Ready

A head is not ready for clean handoff when:

- Lab must interpret target source meaning
- Lab must rename or normalize target-owned states
- Lab must own adapter behavior
- Lab tooling is entangled with the offered files
- the examples look like bridge/runtime contracts
- text containment or detail reveal is visibly broken
- privileged runtime access is needed for the head to render

## Shipping Question

Do not start with "what ships?"

Start with:

```txt
Is the head polished enough and safe enough to offer as a recoverable trial?
```

Only after that should Lab decide which files, notes, and optional examples travel.
