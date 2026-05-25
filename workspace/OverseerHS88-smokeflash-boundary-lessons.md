# OverseerHS88 - SmokeFlash Boundary Lessons

Date: 2026-05-25
Project: Aura Lab
Status: Lessons learned

## Purpose

Record the product-direction lesson surfaced after M26: Aura Lab must keep a clear boundary between the presentation layer it offers and the workshop tooling it uses to design, pressure, and verify that presentation layer.

## Lesson

Aura Lab's offered product is the presentation layer.

SmokeFlash, staged material ingest, state switching, fixture controls, and rough visual workbench affordances are Lab workshop tooling. They may be essential for making better presentation materials, but they should not quietly become part of the offered presentation surface.

The risk is not that tooling exists. The risk is shipping or shaping the offered layer around tooling needs until the product becomes a harness with a polished face.

## Product Boundary

Normal presentation launch should be:

- polished
- portable
- focused on bridge-fed display
- free of rough workshop controls
- free of fixture/state switchers unless explicitly offered
- clear in Lab slim language
- suitable as a presentation reference for source-project review

Workshop / SmokeFlash launch may include:

- staged material ingest
- state switching
- rough controls
- fixture/sample selection
- visual pressure cases
- screenshot or visual review support
- fast iteration affordances

## Current Implication

Aura Lab currently has SmokeFlash inside the app. M27 should not assume that is wrong, but it should inspect whether that path is isolated enough.

The correct question is:

```txt
Is in-app SmokeFlash harmlessly isolated workshop tooling, or is it degrading the offered presentation layer?
```

## M27 Direction

Recommended next packet:

```txt
M27 - SmokeFlash Boundary Review And Minimal Material Harness
```

The packet should allow conditional outcomes:

1. Keep in-app SmokeFlash if it is clearly workshop-only and does not affect normal presentation launch.
2. Harden it lightly around the first material, likely `mat-authority-window-ttl-strip`, if the path is small and local.
3. Clone/split it into a separate Lab-only harness if it is entangled with the offered surface and the split is cheap.
4. Stop with a split recommendation if cloning pulls Electron/runtime complexity into the packet.

## Decision Criteria

Keep in-app SmokeFlash only if:

- it does not load in normal presentation mode
- it does not add visible rough controls to the offered surface
- it does not complicate normal renderer state
- it does not affect polish, launch behavior, or user-facing wording
- it remains clearly marked as Lab workshop tooling

Clone/split SmokeFlash if:

- it increases normal app load or route complexity
- it adds rough/demo UI to the polished surface
- it makes staged material states feel like product states
- it causes verification or runtime behavior to revolve around harness needs
- it creates recurring confusion about what Lab offers

Stop instead of cloning if:

- the split requires broad Electron/runtime changes
- the split becomes larger than a small local harness task
- the work would delay the first material prototype without improving the product boundary

## Guardrails For Future Workers

- The presentation layer is the thing Lab offers.
- SmokeFlash is the bench used to pressure the presentation layer.
- Verification and staged ingest support the product; they are not the product.
- Do not let fixture controls, state choosers, or screenshot needs define the normal experience.
- Do not turn staged material shapes into bridge contracts.
- Do not edit source projects for this decision.

## Useful First Material

The first material to pressure through SmokeFlash should remain:

```txt
mat-authority-window-ttl-strip
```

It is small, timing-sensitive, narrow-friendly, and useful for testing whether SmokeFlash can switch material states without becoming the offered surface.

## Acceptance Use

This lesson should be used when opening M27. It is not a Dev runway by itself.

M27 should produce either:

- a confirmed boundary and minimal SmokeFlash hardening
- a cloned/split harness if cheap and clearly beneficial
- or a stop note explaining why the split should be planned separately

