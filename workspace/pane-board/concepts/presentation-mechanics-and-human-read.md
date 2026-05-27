# Presentation Mechanics And Human Read

Status: Lab sandpit concept
Context: Shape See / Pane Board vocabulary refinement

## Purpose

This note separates two layers that often get blurred during UI shaping:

1. How the system mechanically controls the presentation layer.
2. How the Human experiences that presentation in the moment.

The split is useful because agents and renderers often reason in states, basis, source, freshness, gates, and replacement rules. Humans usually do not experience a surface that way. Humans tend to read whether something works, feels current, feels janky, feels blocked, asks for action, or can be ignored.

Pane Board and Shape See should let both layers exist without forcing one to masquerade as the other.

## Mechanical Presentation Layer

This layer is useful for agents, Dev, verification, and renderer behavior.

It answers questions like:

- What input, source, or payload controls this display?
- When does text change?
- When does a visual cue appear?
- What happens when data is stale, partial, capped, missing, blocked, or degraded?
- What authority gate affects the readout?
- Which terms are source-owned and must be preserved or qualified?
- What belongs in diagnostics or detail reveal?

Common mechanical concepts:

- state
- basis
- source
- freshness
- authority gate
- provider sample
- partial sample
- capped sample
- fallback or degraded behavior
- replacement rules
- hidden diagnostics
- verification evidence

Mechanical meaning matters. It protects correctness, source ownership, and non-misleading display behavior.

But mechanical meaning is not automatically the Human first read.

## Human Read Layer

This layer is useful for UI/UX, Pane Board sketching, and Human intent.

It answers questions like:

- What does the Human look at first?
- Does this feel current enough to use?
- Does this look old, waiting, blocked, unavailable, or broken?
- Does this invite action, waiting, inspection, or ignoring?
- Does this feel calm, noisy, scary, janky, or over-certain?
- Does the surface imply more awareness or authority than it really has?
- Does the arrangement make the story legible?

Common Human read concepts:

- first attention
- confidence feel
- waiting feel
- blocked feel
- old or stale feel
- missing feel
- action feel
- jank risk
- calmness
- interruption
- curiosity for detail
- "almost" tension
- visual order
- story flow

Humans may not think "the basis is stale." They may think:

```txt
this looks old
this looks wrong
this looks unavailable
this looks buggy
this can wait
this needs my attention
```

## Translation Boundary

Shape See should translate mechanical facts into Human-readable cues without adopting source meaning or flattening nuance.

Examples:

| Mechanical fact | Human read risk | Better presentation aim |
| --- | --- | --- |
| `Fresh context` | May imply complete truth. | Feels usable within a scoped lane. |
| `Stale context` | May look broken if too loud. | Feels aged or needs caution, not failed. |
| `Partial sample` | May be ignored if hidden. | Feels limited, with detail available. |
| `Capped sample` | May imply the total is known. | Feels intentionally bounded. |
| `Live IO blocked` | May look like provider failure. | Feels authority-blocked, not broken data. |
| `No observation` | May collapse into generic no data. | Feels like quiet absence in this lane. |
| `Ratio` | May become a risk score. | Feels like support context only. |

## Pane Board Use

Pane Board should primarily arrange Human-read cues and story relationships.

It can carry mechanical notes, but those notes should usually live in:

- detail panes
- diagnostics shadows
- source/basis notes
- risk annotations
- parked parts

Pane Board should avoid turning backend fields or technical states directly into first-read UI blocks unless Project UX has interpreted them as meaningful display parts.

## Material Boundary Read

Shapes and positions alone do not always tell the full story.

Lab may use literal visual material, including generic PNG backing, color, contrast, texture, opacity, shadow, and occlusion, to help a Human and agents see why a spatial relationship works.

This is imagination paint:

```txt
plain geometry
-> material-enriched sketch
-> notice what makes it read
-> strip the material back out or make it optional
-> preserve the portable relationship
```

The PNG or material is not representative of the data. It is not target-project style, bridge meaning, state meaning, source truth, or adopted UI. It is a temporary surface quality that helps reveal:

- what recedes
- what advances
- what acts as a backing plane
- what feels like the active foreground
- what belongs together
- why a simple arrangement pops

Lab can own this scouting tool because Lab owns the proving bench. Lab does not own the target project's final face.

Cross-project adoption should preserve the relationship, not the material:

```txt
Lab shows: this relationship works.
Source project decides: this fits our surface.
Source project rebuilds it in its own language.
```

Useful portable output:

- lower plane reads as backing/container
- upper plate reads as active foreground
- contrast separates anchor from support
- occlusion or shadow carries hierarchy
- material is optional or replaceable
- state meaning remains text, structure, and source-project semantics supported

Working rule:

```txt
Material can explain shape relationship.
Material must not become the only carrier of data state or product meaning.
```

## Working Rule

Use mechanical language to protect behavior.

Use Human-read language to shape the experience.

When the two conflict, pause and ask:

```txt
Is this a renderer/control concern, or is this what the Human needs to feel and understand first?
```

## Open Vocabulary

Potential Shape See terms to prefer for Human-facing work:

- focus
- cue
- read
- relationship
- boundary
- shadow
- action feel
- confidence feel
- attention-hot
- story
- jank risk
- order
- almost

Potential terms to keep mostly mechanical:

- state
- basis
- source
- freshness
- gate
- provider
- sample
- fallback
- diagnostic
- contract

This is not a final terminology authority. It is a Lab sandpit note for improving how Humans and agents discuss presentation work.
