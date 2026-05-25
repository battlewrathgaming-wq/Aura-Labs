# OverseerProposalHS72 - Lab Display Elements Workshop And Material Bench

Date: 2026-05-25
Role: Direction / Overseer proposal
Project: Aura Lab
Status: Proposal for Human / Overseer review

## Purpose

Aura Lab needs a stronger direction after M19:

```txt
An inventory and workshop for "you can now display information like this."
```

This proposal covers three connected areas:

1. A Lab display element inventory for reusable presentation primitives.
2. A skunkworks/workshop lane for trying display ideas before they become milestones.
3. A display material bench of structured snippets, long-form text, awkward values, and state cases that Lab can test those primitives against.

It also proposes a working contract so future Lab development is bounded and repeatable rather than one-off.

## Drive Review Findings

Reviewed local project state and reference material:

- `workspace/current.md`
- `workspace/overview.md`
- `docs/current-state/m19-instrument-status-band-current-state.md`
- `workspace/complete/milestone-M18/UIUXHS64-presentation-concept-pack.md`
- `workspace/reference/README.md`
- `workspace/reference/portable-face-expansion-support-2026-05-24.md`
- `workspace/reference/resource-sites-library-2026-05-24.md`
- `workspace/reference/atlas-operational-surface-reference-2026-05-25.md`
- existing reference sweeps under `workspace/reference/`

The drive already points toward a useful Lab role:

- Lab has a working, verified primitive in M19.
- The reference folder is healthy as inspiration, but it is not an accepted work queue.
- The project has strong conformance boundaries for Atlas and Sense.
- Sense has already validated the "adapt, do not adopt wholesale" model with Passive Telemetry.
- Lab now needs a way to catalog what it can display and a way to try new display ideas without turning every sketch into a milestone.

## Current Context

M19 accepted the Instrument Status Band as a visible presentation primitive. It proved that Lab can build a compact, bridge-fed readout module with:

- primary value/status
- state light
- readout age
- readout basis
- source coverage
- gaps/warnings marker
- compact `Readout Detail`
- narrow layout behavior

Sense then proved the portability model by adapting the instrument grammar into a Passive Telemetry instrument band while preserving Sense-owned lane labels and sample/live-IO meaning.

That external proof matters. It shows the valuable unit is not a Lab screen, a Lab state enum, or a Lab fixture shape. The valuable unit is the display element grammar.

The next step should not be a full product face. The next step should make Lab better at producing, cataloging, and testing display elements.

## Direction Statement

Aura Lab should operate as a display elements workshop.

Lab's product is not a dashboard, adapter, fixture taxonomy, or diagnostic suite. Lab's product is a growing inventory of portable HTML presentation elements and treatments that answer:

```txt
You can now display information like this.
```

Each accepted element should be small enough to understand, test, review, and potentially adapt later under another project's authority.

## Area 1 - Display Element Inventory

### What This Area Owns

The inventory owns named display elements and their implementation notes:

- status bands
- readout detail reveals
- readout age treatments
- readout basis treatments
- coverage displays
- gap and warning markers
- value displays
- compact lists
- inset panels
- rails and dividers
- narrow-shell layouts
- empty/unavailable/fallback treatments

The inventory is the reviewable catalog of what exists and what it can display.

### Recommended Inventory Shape

Create a small index once Human / Overseer accepts the direction:

```txt
workspace/display-inventory/README.md
```

Possible per-primitive entries:

```txt
workspace/display-inventory/instrument-status-band.md
workspace/display-inventory/readout-detail-reveal.md
workspace/display-inventory/readout-age-treatment.md
workspace/display-inventory/gaps-warning-marker.md
workspace/display-inventory/compact-value-rail.md
workspace/display-inventory/source-coverage-chip.md
```

Each entry should be short and practical:

- element name
- purpose
- what it displays
- expected slots
- supported states
- material/surface notes
- narrow behavior
- accessibility constraints
- where implemented
- what display material it has been tested against
- verification commands
- parked extensions

### Inventory Rules

- Inventory entries describe accepted or proposed presentation elements, not upstream contracts.
- Entries should reference implementation files only after implementation exists.
- Entries should avoid target-project adoption claims.
- Entries may say "candidate for later target review"; they should not say another project should adopt it.
- Entries should use Lab-owned display vocabulary.

## Area 2 - Skunkworks / Workshop Lane

### What This Area Owns

The workshop lane owns experiments before they become accepted display elements.

This is where Lab can try an odd surface, motion behavior, material treatment, or information shape without pretending it is ready for target projects.

The workshop should be allowed to be playful and exploratory, but it must stay honest:

- no target-project meaning claims
- no hidden task queue
- no durable bridge contract
- no live/private data
- no "adopt this" language

### Recommended Workshop Shape

Use lightweight artifacts before code unless Human explicitly opens a build packet:

```txt
workspace/workshop/README.md
workspace/workshop/ideas/YYYY-MM-DD-short-name.md
workspace/workshop/sketches/
```

If a workshop experiment becomes compelling, Overseer can promote it into a normal milestone through `workspace/current.md`.

### Workshop Idea Entry

Each idea should fit on one page:

- display idea
- what information it helps present
- visual hook
- interaction hook, if any
- data/material needed
- why it might be useful
- what could go wrong
- target-project risks
- recommended disposition

### Skunkworks Candidate Themes

Good workshop candidates:

- compact value rail
- source coverage chip
- warning edge / attention tooth
- readout detail reveal
- rolling counter / telemetry reel
- timeline bead strip
- state-change pulse
- compare strip
- stale/aged wash
- low-power diagnostics panel
- dense list compression
- long-basis containment
- status constellation / grouped pips

Poor workshop candidates:

- full target-product skins
- target adapters
- domain labels copied from Atlas or Sense
- bridge contracts
- broad framework migration
- visual smoke systems as product

## Area 3 - Display Material Bench

### What This Area Owns

The material bench owns reusable display inputs for testing and shaping Lab display elements.

It should include both structured snippets and long-form text. Lab has often used slim wording; this library should deliberately include fuller, messier, realistic display material so modules prove typography, containment, detail rhythm, and narrow behavior.

This bench is not a fixture taxonomy, bridge contract, source-project payload model, or hidden task queue.

### Recommended Library Shape

Create:

```txt
workspace/reference/display-material-bench-2026-05-25.md
```

Keep it in `workspace/reference/` at first because it is shared test material and inspiration, not accepted runtime code.

If it later becomes operational fixture data, Human / Overseer should explicitly promote a small subset into implementation.

### Material Categories

Structured display snippets:

- simple current readout
- updating with pending first read
- aged readout
- partial readout with gaps
- unavailable readout
- fallback readout
- no-data readout
- mixed freshness slots
- repeated warning/gap lines
- source coverage variations
- compact numeric values
- long path-like labels
- one long unbroken token

Long-form display text:

- one-sentence summary
- multi-paragraph detail explanation
- dense list of available fields
- warning explanation
- gap explanation
- fallback explanation
- no-data explanation
- aged readout explanation
- unavailable explanation
- long basis line
- long source label
- narrow-shell stress paragraph
- mixed short and long rows

### Suggested Material Entry Format

```md
### Partial Readout With Long Basis

Use for:
- status band
- readout detail reveal
- narrow-shell containment

Slots:
- label: Relay status
- primary value: Limited
- state: PARTIAL
- readout age: Last read 8 minutes ago
- readout basis: Read from local display material with one unavailable source and one long basis explanation.
- known fields: label, primary value, state, last read
- gaps: secondary value, detail note
- warnings: One source did not return a displayable value.

Long text:
The readout is based on the available local display material. The display should keep the usable fields visible while making the gaps clear before detail is opened.

Stress notes:
- Basis wraps without horizontal overflow.
- Gap count remains visible in the closed primitive.
- Detail text should not obscure the state label or readout age.
```

### Material Rules

- Use neutral Lab display material by default.
- Include long-form text early, not only after visual issues appear.
- Mark hostile material as stress material, not product copy.
- Do not import target-project semantics as Lab defaults.
- Do not treat material fields as bridge fields.
- Do not require every primitive to support every material entry.
- Do not make this library a task queue.

## Proposed Contract

Name:

```txt
Lab Display Element Development Contract
```

This contract should bind future Lab work to a repeatable loop:

```txt
Name the display element.
Choose the display material.
Build or refine one bounded implementation.
Verify readability, state behavior, and narrow layout.
Catalog what can now be displayed.
Park everything else.
```

### Contract Roles

Human:

- owns vision, priority, and acceptance
- decides whether an element is worth Lab development
- decides when an element should be reviewed by a target project

Overseer:

- owns packet boundaries and milestone meaning
- chooses the next element, workshop, inventory, or material-bench packet
- protects Lab from becoming a target adapter or contract owner
- accepts, redirects, or parks outputs

UI/UX or UI Developer advisory:

- defines element structure, slots, states, surface behavior, text constraints, and material needs
- recommends what should be built first
- identifies risks and parked ideas

Dev:

- implements only the active packet
- uses accepted display material or narrowly scoped fixture data
- preserves compatibility names unless the packet says otherwise
- verifies and summarizes behavior

### Contract Inputs

Every element packet should name:

- element name
- existing source of intent
- display material to test against
- required states
- required slots
- required narrow behavior
- verification commands
- expected handoff file

### Contract Outputs

Every completed element should leave:

- implementation changes
- visible behavior summary
- display material used
- supported states
- supported slots
- narrow behavior notes
- accessibility/readability notes
- verification results
- residual risks
- inventory entry or inventory update, if accepted

### Acceptance Criteria

An element can be accepted when:

- it is visible HTML/CSS/JS presentation work
- it stays bounded to one element or one element family
- it uses Lab-owned default copy
- it displays basis, freshness, availability, gaps, or warnings honestly where relevant
- it survives at least one long-form or hostile display material case if text is part of the element
- it has narrow-shell behavior
- it avoids target-project adoption claims
- it does not define an upstream contract
- verification is named and passed or explicitly explained

### Stop Conditions

Stop and ask Human / Overseer if:

- an element requires source-project meaning decisions
- display material starts becoming a bridge/data contract
- implementation requires broad renderer restructuring
- a reference starts becoming product direction
- a target-project term is needed as Lab default copy
- verification scope starts becoming the product

## Recommended Next Milestones

### M20 - Display Material Bench

Recommended first packet:

```txt
Create the reference display-material bench with structured snippets and long-form text samples for Lab element testing.
```

Expected artifact:

```txt
workspace/reference/display-material-bench-2026-05-25.md
```

No runtime implementation should be required. Verification can be vocabulary review plus Human / Overseer review.

### M21 - Display Inventory Scaffold

Recommended second packet:

```txt
Create the display inventory scaffold and add the accepted Instrument Status Band as the first entry.
```

Expected artifacts:

```txt
workspace/display-inventory/README.md
workspace/display-inventory/instrument-status-band.md
```

This should document what the accepted M19 primitive can display and what remains parked.

### M22 - Workshop Lane Scaffold

Recommended third packet:

```txt
Create the workshop/skunkworks lane and seed it with 5-8 bounded display ideas from existing reference sweeps.
```

Expected artifacts:

```txt
workspace/workshop/README.md
workspace/workshop/ideas/2026-05-25-display-element-candidates.md
```

No implementation should happen in this packet.

### M23 - Next Element

Recommended next build after the library and inventory scaffold:

```txt
Readout Detail Reveal
```

Reason:

The Instrument Status Band already depends on `Readout Detail`. Making the detail reveal a stronger element would exercise long-form text, dense rows, gaps, warnings, basis, age, and narrow behavior without requiring a full face.

Alternate if Human wants motion:

```txt
Rolling Counter / Telemetry Reel
```

Only choose this if the display material bench already has numeric, aged, partial, and no-data values to keep motion honest.

## Risks

- The display material bench could become a fixture taxonomy if it grows without review.
- The inventory could become a product catalog with adoption claims if entries are not careful.
- Long-form text can pull Lab toward content strategy; keep the purpose to display testing and readability.
- The contract could become too heavy if every small visual tweak needs the full loop.
- Target projects may want immediate adoption before primitives have enough display material coverage.
- The skunkworks lane could become a hidden backlog if ideas are not explicitly parked, promoted, or rejected.
- Workshop experiments could accidentally import Atlas/Sense meaning if they use target screenshots without translation.

## Human / Overseer Decisions Needed

- Should Lab open M20 as the Display Material Bench packet?
- Should the material bench live under `workspace/reference/` first, or under a new `workspace/display-material/` folder?
- Should the inventory scaffold be created before or after the material library?
- Should `Readout Detail Reveal` be the next primitive after inventory scaffolding?
- Should the workshop lane be created before the next build, or only after the inventory exists?
- Should the proposed contract be promoted into `workspace/README.md`, `workspace/current.md` packet templates, or a standalone `workspace/display-element-contract.md`?

## Proposal Close

The useful direction is not "make more demos." The useful direction is:

```txt
Build a library of ways information can be displayed, a workshop where new display ideas can be tested without overcommitting, and a material bench that proves those ways hold up under real display pressure.
```

That gives Aura Lab a durable role: a calm, careful workshop for portable display elements.
