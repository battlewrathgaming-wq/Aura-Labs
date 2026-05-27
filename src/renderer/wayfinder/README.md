# Aura Wayfinder Renderer

Status: scaffold only
Boundary: Lab-only tooling renderer

## Purpose

Aura Wayfinder is a proposed visual orientation surface for the Human.

It should help answer:

- where are we?
- what needs attention?
- what advice is waiting?
- what is active, parked, or historical?
- what did the recent milestone journey look like?

## Relationship To Other Lab Surfaces

Pane Board is for spatial Shape See work: panes, sketches, coordinates, screenshots, and visual relationships.

Wayfinder is for coordination state: current picture, gates, specialist advice, seed cases, and milestone journeys.

The two tools may share Lab tooling posture, but they should not share renderer state or become one tool.

## Renderer Boundary

If this renderer is implemented later, it must:

- be launched only through an explicit Lab-only Wayfinder path
- avoid dependency from the clean presentation head
- use readout/orientation language, not source-project authority language
- treat prompt garden content as linked/reference-only unless Human opens a separate scoped task
- show project state as a readout, not as authority

## Not A Product Surface

This renderer is not:

- the portable presentation offer
- a target-project UI
- an Orchestration authority surface
- a Dev runner
- a prompt execution surface
- a replacement for `workspace/current.md`

## Current State

No HTML/CSS/JS runtime lives here yet.

