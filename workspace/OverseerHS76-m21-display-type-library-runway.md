# OverseerHS76 - M21 Display Type Library Runway

Date: 2026-05-25
Role: Overseer
Milestone: M21 - Display Type Library Research Sweep
Status: Active runway

## Decision

Open M21 as a research and documentation milestone before any repeat implementation cycle.

The next useful Lab move is to expand the type-to-display library: what kinds of display elements exist, what information pressures they handle, what slots they can carry, and which ones deserve material-bench pressure before development.

The previously suggested material bench remains valid, but it should follow this research sweep. Lab should not start a repeat cycle until the type library and material bench give UI/UX and Dev enough structure to choose well.

## Source Of Intent

Accepted input:

- Human direction that Lab should focus on portable display mapping and presentation past the bridge.
- Human direction to develop robust primitive slots before tailoring elements to product visions.
- Human direction to expand the type-to-display library before entering a repeat cycle.
- M20 accepted artifact: `workspace/DisplayTaxonomyHS73-terminology-to-slot-map.md`
- Active contract: `workspace/display-asset-documentation-owner-contract.md`
- Workshop guidance: `workspace/workshop/README.md`

## Current Executor

UI development owner / display asset documentor.

This is not a Dev implementation packet.

## Expected Artifact

```txt
workspace/DisplayTypeLibraryHS76-display-pattern-research.md
```

## Ordered Runway

1. Read the M20 taxonomy, the display asset documentation owner contract, the workshop README, Lab critical terms, and the shared terminology / critical indexes referenced by the current packet.
2. Review existing local references and accepted Lab presentation artifacts for display pressures that need better type coverage.
3. Research display types that could serve Lab's accepted slots. External reference research is allowed only when the working environment permits it; cite URLs if used.
4. Build a type-to-display table with practical fields: display type, purpose, best-fit slots, pressures handled, examples or references, strengths, failure modes, narrow behavior, text containment, motion suitability, terminology risks, candidate Lab asset family, and disposition.
5. Map the display types back to the accepted M20 slot vocabulary and note which slots still need material samples.
6. Prioritize near-term display types for the next material bench and park types that are too broad, too semantic-heavy, or too target-specific.
7. Recommend the next packet, expected to be material bench first, inventory scaffold second, repeat implementation cycle later.

## Minimum Display-Type Coverage

Cover at least:

- status band
- status chip
- value rail
- gauge or meter
- counter or reel
- timeline or bead strip
- activity surface
- compact table or list
- detail reveal
- source coverage marker
- gap / warning marker
- availability reason treatment
- compare strip
- diagnostic panel
- map / sensor display
- matrix / heatmap
- progress strip
- empty / unavailable panel

Additional types are welcome when they help Lab's display library.

## Acceptance Criteria

M21 can be accepted if the artifact:

- expands the display type library enough to guide future primitive selection
- maps display types back to accepted M20 slots instead of inventing a detached taxonomy
- distinguishes display structure from source-project meaning
- names which types are near-term candidates and which are parked
- includes failure modes, narrow behavior, and text containment concerns
- explains how each useful type helps bridge-fed presentation without becoming a bridge contract
- uses reference material as inspiration and source notes, not requirements
- gives the next material-bench packet enough concrete material pressure to begin
- avoids hidden backlog behavior by giving every major candidate a disposition

Reject or redirect if the artifact:

- is only an inspiration gallery
- primarily describes visual style rather than display function
- asks Dev to build before material pressure is understood
- imports Atlas, Sense, or Core meaning as Lab default language
- turns terminology indexes into a universal glossary
- creates a target-project adoption plan
- expands screenshot or smoke tooling as the product direction
- cannot support the next material-bench packet

## Guardrails

- Do not implement code.
- Do not edit target projects.
- Do not define source-project meaning.
- Do not define a durable bridge contract.
- Do not create a shared Aura doctrine.
- Do not use archived docs as active task queues.
- Do not require live, private, or network data.
- Do not treat web examples, screenshots, or reference images as specs.
- Do not promote repeat-cycle development until M21 and the material bench are accepted.

## Stop Conditions

Stop and return to Human / Overseer if:

- the research requires source-project meaning decisions
- target-project files would need edits
- the artifact cannot map display types to Lab slots
- external research becomes necessary but the working environment does not permit it
- terminology risk cannot be resolved by owner/layer qualification
- the work turns into a backlog of build tasks instead of a display library

## Verification

Required after writing the artifact:

```powershell
npm.cmd run verify:all
```

Advisory shared terminology check:

```powershell
cd F:\Projects\Docs\Aura-Project-Orchestration
npm.cmd run verify:terminology
```

No Electron smoke is required because this is documentation-only unless files outside docs/workspace are changed.

## Support

Support files:

- `workspace/current.md`
- `workspace/overview.md`
- `workspace/DisplayTaxonomyHS73-terminology-to-slot-map.md`
- `workspace/display-asset-documentation-owner-contract.md`
- `workspace/workshop/README.md`
- `workspace/critical/README.md`
- `workspace/critical/critical-terms.md`
- `F:\Projects\Docs\Aura-Project-Orchestration\terminology`
- `F:\Projects\Docs\Aura-Project-Orchestration\critical`

## Handoff

Expected handoff should include:

- files and references reviewed
- research method
- display type table
- slot mapping back to M20 vocabulary
- source or URL notes when external references are used
- near-term display types for material bench
- parked display types and reason
- terminology and owner/layer risks
- acceptance checklist
- recommended next packet

## Parked Until After M21

- Display Material Bench
- Display inventory scaffold
- repeat implementation cycle
- target-project adoption packets
- new runtime or smoke tooling
