# Numbered Spatial Handles Workflow

Status: Lab sandpit concept
Context: Pane Board / meaning-geometry handoff
Owner: Human / Overseer direction

## Purpose

Use numbered handles such as `#1`, `#2`, and `#3` in Pane Board sketches so spatial work can move quickly without importing source-project terms into Lab-owned layout language.

A number is a spatial handle, not meaning.

Meaning stays in the owning project artifact. Pane Board arranges the handles.

## Core Rule

Do not create a new Lab table of meaning for Pane Board sketches.

Instead, each `#num` should point back to an existing project artifact, request, or meaning-geometry note where the owning project already defines what the item means.

Pane Board may show:

- `#1`
- `#2`
- `#3`
- position
- scale
- grouping
- nearness
- visual weight
- human or agent notes

Pane Board must not become the owner of:

- source-project terminology
- source-project lane meaning
- bridge fields
- runtime state
- product copy
- adoption decisions

## Intended Use

The numbered handles are useful when the Human wants to say:

- this belongs near that
- this should feel primary
- this can sit lower
- this should be quieter
- this shape feels right
- save this arrangement
- compare this alternate arrangement

They are deliberately slim. The board can carry spatial intent without forcing every sketch to restate source-project language.

## Workflow

1. Source or meaning owner creates the upstream artifact.
2. The artifact identifies the display pieces that need spatial treatment.
3. The handoff assigns temporary handles, such as `#1` through `#5`.
4. Pane Board sketches use those handles on panes.
5. Agents may propose alternate geometry using the same handles.
6. Human reviews the feel and may accept, adapt, park, or reject the sketch.
7. Any product adoption still returns to the source project through its normal review and runway.

## Example Shape

For a source-owned Passive Telemetry meaning-geometry artifact:

- `#1` could refer to the current context anchor.
- `#2` could refer to the freshness or usability cue.
- `#3` could refer to activity texture.
- `#4` could refer to sample completeness.
- `#5` could refer to an availability or blocked-state cue.

Those descriptions are examples only. The source artifact owns the exact meaning.

In the Pane Board, the sketch can then focus on whether `#1` is dominant, whether `#2` is close enough to be read with it, whether `#4` needs edge treatment, and whether `#5` should sit as a shadow or warning lane.

## Agent Rules

Agents may:

- move numbered panes
- resize numbered panes
- group numbered panes
- propose alternate arrangements
- describe visual relationships
- flag crowding, weak hierarchy, or unclear proximity
- ask for the source artifact when the number map is missing

Agents must not:

- rename source meaning
- infer hidden meaning from a number
- turn a number into a product label
- treat a Pane Board sketch as implementation authority
- merge two source concepts because their panes are nearby
- create a new contract from the numbered map
- use archived sketches as active tasks without Human or Overseer direction

## Human Role

The Human is the vision owner for spatial feel.

Human comments such as "that side feels right," "save that one," "make this quieter," or "this should sit closer" are valid Pane Board steering input. They do not need to be converted into formal product language during the sketching pass.

The goal is to reduce chat-heavy UI explanation by giving the Human and agents a shared visible surface.

## Resting State

The resting record can be:

- the upstream project artifact that maps `#num` to meaning
- the Pane Board JSON sketch
- the exported screenshot
- a short note explaining why the arrangement was liked, parked, or rejected

The resting record is design conversation memory. It is not a renderer contract, bridge contract, fixture schema, product component, or Dev authorization.

## Acceptance For This Workflow

This workflow is healthy when:

- the numbered sketch can be understood without restating every source term
- the source artifact still owns meaning
- an agent can recreate or alter the spatial relationship from the screenshot and JSON
- Human review can say "yes, this feels closer" or "no, try the other direction"
- no extra Lab meaning table is needed
- no source-project terms are silently generalized into Lab doctrine

