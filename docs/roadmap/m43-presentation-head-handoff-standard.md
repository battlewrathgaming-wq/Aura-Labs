# M43 - Presentation Head Handoff Standard

Status: Complete
Owner: Aura Lab Overseer

## Purpose

Define the lightweight standard Lab uses before deciding what presentation head package is fit to offer to a target project.

This milestone answers the pre-shipping question:

```txt
What polish and safety floor must a Lab head meet before it is useful enough to try elsewhere?
```

It does not decide that a head ships, require target adoption, create a target adapter, or harden a shared runtime contract.

## Intent

Lead with intent.

Drive attention, not people.

Confidence, not forced certainty.

Bounded motion remains humane.

Aura does not seek perfection. It seeks recovery.

## Handoff Model

Lab offers refined presentation heads.

Target projects adopt and adapt them through their own authority.

Lab may later offer newer heads, materials, or visual features, but those upgrades remain optional offers. A target project adopting one Lab head does not adopt Lab's sample data, example meanings, state enums, roadmap, tooling, or future upgrade path.

## Polish Floor

A presentation head is fit for handoff consideration when it is:

- readable on first view
- stable in hierarchy
- free of obvious text overflow
- calm in state treatment
- clear about source, basis, freshness, gaps, and warnings
- usable in detail reveal
- tolerable under narrow or constrained layout pressure
- free of visible Lab tooling bleed
- visually intentional enough to feel like a reference, not a raw diagnostic demo

The polish floor is not final product beauty. It is the minimum threshold where a target project can evaluate the head without mistaking roughness for product direction.

## Safety Floor

A presentation head is fit for handoff consideration when it:

- has no privileged runtime dependency
- has no preload, IPC, filesystem, clipboard, screenshot, or live provider dependency
- has no network requirement for the reference package
- does not use `eval` or remote scripts
- treats incoming display fields as untrusted display input
- renders text as text rather than arbitrary HTML
- keeps adapter mapping outside the head
- excludes SmokeFlash, Pane Board, Wayfinder, Lab service registry, and Lab fixture tooling
- contains no secrets or private data
- states that the head is display-only and not a trust boundary

The safety floor is not a full target-product security review. It is the minimum shared boundary that prevents obvious double work and keeps the handoff safe enough to inspect.

## What Can Be Offered

A handoff package may include:

- static reference files
- README and boundary notes
- example display input
- CSS variables or styling primitives
- display grammar notes
- source/basis/freshness/gap/warning treatment notes
- polish notes
- safety-floor notes
- optional migration or difference notes for newer head versions

## What Must Not Be Offered As Adoption

A handoff package must not imply adoption of:

- Lab sample data
- Lab example meanings
- Lab state enums
- Lab roadmap
- Lab tooling
- Lab future upgrade path
- target adapters
- bridge/runtime contracts
- source-project terms or meaning
- final UI authority for the target

## Readiness Test

Before asking what ships, Lab should be able to answer:

- Is the head useful enough to try?
- Is it clear what travels and what does not?
- Can a target feed it through a local adapter without Lab deciding source meaning?
- Are source-owned placeholders qualified?
- Are visible boundaries clear enough to prevent sample data becoming contract?
- Can the target bend it locally without breaking Lab's reference?
- Can Lab shelf the reference and return to exploration?

## Not Ready Signals

The head is not ready for clean handoff if:

- target adoption would require Lab to interpret source meaning
- target adoption would require Lab to rename or normalize target-owned states
- target adoption would require Lab to own adapter behavior
- Lab tooling is still entangled with the offered head
- display examples could be mistaken for bridge/runtime contracts
- basic text containment or detail reveal behavior is visibly broken
- the head needs privileged runtime access to render

## Verification Expectation

Minimum documentation verification:

- `npm.cmd run verify:all`
- `npm.cmd run verify:terminology` from `F:\Projects\Docs\Aura-Project-Orchestration`

If a future packet changes code, package shape, or shipped files, it must name the relevant additional static, renderer, or security checks in `workspace/current.md`.

## Closure

M43 is complete when:

- this standard exists as durable guidance
- `workspace/current.md` names the current idle state after the standard
- roadmap and overview pointers are updated
- verification passes

Closed accepted in HS166.
