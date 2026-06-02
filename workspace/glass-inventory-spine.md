# Glass Inventory Spine

Status: Advisory framework
Owner: Aura Lab

## Purpose

This page records the primitive framework for Lab's future glass inventory.

The framework helps Lab, Human, UI/UX, and target projects reason from the same starting point when shaping future presentation surfaces. It is not a Dev runway, implementation spec, target adapter, target adoption record, React component contract, bridge/runtime contract, or final product UI.

Core distinction:

```txt
Lab provides composable visual primitives.
Projects assemble and authorize product surfaces.
```

The inventory should let a project ask for reusable glass building blocks without requiring Lab to know whether the final surface becomes Atlas evidence review, Sense Passive Telemetry, or another project-owned UI.

Example request shape:

```txt
Boundary with narrow scale, rimmed edge, recessed depth, docked attachment, stacked segment/readout content.
```

That request names primitive assembly, not product meaning.

## Framework

The glass inventory is an assembly library, not a final-state library.

It should reduce cold-start UI work and avoid one-off pane proliferation by giving projects a small, reusable set of coded materials, boundaries, treatments, and sizing behaviors.

Shape See can help with positional relationships:

- what sits beside what
- what wraps what
- what remains primary or secondary
- what hides, reveals, docks, or recedes
- what feels too dominant or too weak

The glass inventory helps with surface language:

- what materials exist
- what boundaries exist
- what seams, strips, rows, markers, drawers, and readouts exist
- how those primitives can be sized and composed

## Lab Provides

### Material

Glass, metal, matte terminal, texture, glow, opacity.

Material controls surface feel. It must not become the only carrier of product meaning or source state.

### Boundary

Frames, rims, recessed fields, docked edges, attention zones.

Boundary separates attention and gives content a surface. It should define reusable containment behavior, not final product panes.

### Seam

Gaps, pane dividers, mounting rims, dashed borders, registration ticks.

Seam clarifies adjacency, separation, docking, or assembly. It should support relationships without becoming decorative clutter.

### Segment

Small grouped content areas inside a boundary or strip.

Segment is a primitive for compact grouped information. It can later become a notice cell, tool cell, label block, or condition slot depending on project meaning.

### Readout

Compact key/value text grammar, short console dialects.

Readout provides dense information grammar: labels, values, small rhythms, and compact display language. Projects own what the values mean.

### Marker

Ports, pips, lights, tags, highlight marks, row-end affordances.

Markers point, qualify, or draw attention. They must not be the sole carrier of product meaning.

### Row

Dense sample row, unresolved row, highlighted row, quiet row.

Row provides repeated horizontal record structure. Highlighting, promotion, unresolved status, and action meaning remain project-owned.

### Drawer

Dormant tray, detail reveal, locked-open panel.

Drawer supports depth without first-read clutter. It should make detail available without forcing diagnostics or raw fields into the default read.

### Grid / Topology

Structural display surfaces for relative position, scope, relation, or adjacency: coordinate grids, radial scope fields, node-link maps, range rings, clustered point fields, relation lines, legends, and marker grammar.

Lab does not decide what the grid means.

### Motion / Attention

Wake, dull, pulse, fade, unfold, settle, rare redraw.

Motion and attention cues should orient, confirm touch, or show transition. They must not become the only carrier of product state or authority.

### Sizing

Compact, narrow, broad, dense, dormant, expanded.

Sizing defines scale ranges and spacing behaviors, not final project dimensions. Its purpose is to prevent bespoke pane sprawl and keep surfaces composable.

## Project Owns

Target projects own:

- source meaning
- state meaning
- terminology
- labels and copy
- data mapping
- runtime behavior
- authority and safety decisions
- final product layout
- adoption decision

Lab should not infer that a primitive implies a target state, target workflow, target data contract, or target UI requirement.

## Primitive Assembly

The framework should let future work describe surfaces as assemblies of primitives:

```txt
compact companion readout
= material + compact boundary + marker + readout + drawer + quiet attention
```

```txt
investigation evidence surface
= matte material + broad boundary + row grammar + segment strip + marker + drawer + dense sizing
```

These are examples only. The project decides the product surface and meaning.

## Constraints

- Define reusable surface primitives and sizing behaviors, not final project panes.
- Keep primitive names meaning-light.
- Keep examples concrete enough to code against.
- Do not turn Atlas, Sense, Lab, or other project mockups into implementation authority.
- Do not encode bridge/runtime contracts.
- Do not define target source states.
- Do not let motion, color, glow, or material be the only carrier of meaning.
- Do not create a new bespoke pane for every visual idea.
- Prefer assemblies from a small primitive vocabulary.

## Relation To Existing Lab Assets

Existing Lab glass and material work remains the accepted reference base:

- `workspace/display-assets.md`
- `workspace/display-selection-shelf.md`
- `workspace/display-materials/`
- `workspace/display-outputs/`
- `workspace/GlassDefinitionHS173-presentation-glass-value-definition.md`

This spine is a framework for future glass inventory digestion. It does not supersede accepted display materials, accepted glass outputs, target-trial selection rules, or Overseer runways.

## Working Line

```txt
Lab provides the primitive vocabulary.
Shape See explores spatial relationship.
Projects decide meaning and adoption.
```
