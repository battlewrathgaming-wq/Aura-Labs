# UIUXHS170 - Static Starter Presentation Pressure Polish

Status: Advisory / polish specification
Role: Aura Lab UI/UX advisor
Date: 2026-06-01
Milestone: M45 - Static Starter Presentation Pressure Polish

## Request Answered

This artifact answers:

```txt
What bounded polish, examples, or inspection-shape changes should Lab make before wider target relay, based on the Sense presentation pressure extract?
```

Recommendation: open one small Dev polish packet now.

The packet should refine example states, absence/unavailable distinction, source-owned visible-label handling, and target-relay inspection shape inside the static starter only. React, export, target adapters, bridge/runtime contracts, current renderer changes, SmokeFlash split, Pane Board, Wayfinder, and target-project work should remain parked.

## Files Reviewed

- `AGENTS.md`
- `HUMAN.md`
- `workspace/current.md`
- `workspace/overview.md`
- `workspace/critical/README.md`
- `workspace/critical/critical-terms.md`
- `workspace/critical/critical-assets.md`
- `workspace/HS168-sense-relay-lab-static-starter-head-presentation-pressure-extract.md`
- `workspace/OverseerHS170-m45-static-starter-presentation-pressure-polish-runway.md`
- `docs/statements/lab-presentation-head-posture.md`
- `docs/statements/presentation-head-handoff-standard.md`
- `docs/statements/post-bridge-presentation-boundary.md`
- `docs/roadmap/m43-presentation-head-handoff-standard.md`
- `docs/roadmap/m44-static-starter-safety-floor-corrections.md`
- `docs/roadmap/m45-static-starter-presentation-pressure-polish.md`
- `portable-presentation-starter/README.md`
- `portable-presentation-starter/examples/static/index.html`
- `portable-presentation-starter/examples/static/instrument-readout-panel.css`
- `portable-presentation-starter/examples/static/instrument-readout-panel.js`
- `portable-presentation-starter/examples/static/example-readouts.json`
- `workspace/DevHS163-static-portable-presentation-starter-reference.md`
- `workspace/OverseerHS164-m42-static-starter-reference-acceptance.md`
- `workspace/OverseerHS165-static-starter-visual-review.md`
- `workspace/OverseerHS166-m43-presentation-head-handoff-standard.md`
- `workspace/SecEngHS167-static-starter-safety-floor-review.md`
- `workspace/OverseerHS168-m44-static-starter-safety-floor-corrections-runway.md`
- `workspace/DevHS168-static-starter-safety-floor-corrections.md`
- `workspace/OverseerHS169-m44-static-starter-safety-floor-acceptance.md`
- `package.json`

## Current-State Understanding

The static starter is a Lab-local, framework-neutral presentation reference:

```txt
neutral display example input -> Instrument Readout Panel -> Readout Detail reveal
```

It is accepted as a clean baseline reference and carries the safety floor directly in its README and verifier. It uses plain HTML, CSS, JavaScript, and display example JSON. It excludes React, target adapters, Electron/preload/IPC, SmokeFlash, Pane Board, Wayfinder, the Lab service registry, live providers, network dependency, and bridge/runtime contracts.

The current starter is useful enough to inspect, but it is still visually plain and reference-shaped. The Sense relay pressure shows that the next polish should protect meaning under target-shaped content, not make the surface more decorative.

## Sense Pressure Summary

This is Lab-facing presentation pressure only. It is not Sense adoption, a Sense implementation request, a request to rename Sense terms, or authority for Lab to define Sense meaning.

The pressure says:

- `NO DATA` and `UNAVAILABLE` currently read too close together.
- Lab should show reason-first absence examples so no observation, blocked, degraded, and unavailable do not collapse into generic `NO DATA`.
- Source-owned labels sometimes need to be visible near the primary read, not only buried in detail.
- `Coverage` / `Known fields` is useful in a reference, but can feel dense or diagnostic when target-shaped content needs a compact glance.
- The selector and top boundary note are good Lab reference scaffolding, but target relay needs a way to see what the travelling head itself looks like.
- React is not the next useful move.

## Recommended Polish Set

### Required Before Wider Target Relay

1. Strengthen visual and copy distinction between `NO DATA` and `UNAVAILABLE`.
2. Add or revise reason-first absence examples:
   - display absence / no presentable fields
   - source-owned no observation placeholder
   - source-owned blocked placeholder
   - degraded / partial provider placeholder
   - unavailable current read
3. Add one source-owned visible-label example where the source-owned label is primary or near-primary and owner/layer qualification remains visible.
4. Add a compact inspection treatment where `Coverage` / `Known fields` moves behind `Readout Detail`.
5. Add a relay inspection shape or note that distinguishes Lab demo scaffolding from the offered head.

### Optional Polish

- Reduce repeated basis text in the main panel when the same basis appears in header, meta, and detail.
- Add a subtle state-specific surface cue for absence vs unavailable, such as different left-edge styles or state row treatment.
- Tighten vertical spacing in the default `CURRENT` state so it feels less like a diagnostic card.
- Add one long source-owned label/token stress example for target identifiers and provider wording.

### Parked

- React scaffold.
- Target adapter examples.
- Sense-specific product copy.
- Target-specific compact HUD redesign.
- Current Lab renderer polish.
- SmokeFlash split execution.
- Automated screenshot/browser evidence unless a later packet asks for it.
- New bridge/runtime input shape.
- Any source-project state normalization.

## Proposed Example / State Revisions

Keep Lab display labels as example labels only. Source-owned words should appear only with owner/layer qualification.

| Example id | Primary purpose | Suggested visible state label | Primary/absence line | Detail requirement |
| --- | --- | --- | --- | --- |
| `no-data` | Generic display absence. | `NO DATA` | `No presentable fields` | Say this is display absence only, not proof of upstream absence. |
| `unavailable` | Current read cannot provide display fields. | `UNAVAILABLE` | `Current read unavailable` | Explain attempt/freshness and why no current value is shown. |
| `source-no-observation` | Source-owned no-observation placeholder. | Lab state may be `NO DATA` or `UNAVAILABLE`, but visible source label should read `No observation` with owner/layer. | `No observation` | Qualify as source-owned placeholder and state that Lab does not define its meaning. |
| `source-blocked` | Source-owned blocked/authority-off placeholder. | `UNAVAILABLE` with marker such as `SRC` or `BLOCK` only if qualified. | `Source-owned blocked` or exact source placeholder. | Explain owner/layer, blocked reason, and why this is not generic no data. |
| `source-degraded` | Source-owned degraded/limited read. | `PARTIAL` or source-owned visible label `Degraded`. | `Degraded source read` | Show what remains presentable, what is missing, and where coverage moved. |
| `source-owned-primary-label` | Demonstrate pass-through of a source-owned label near primary read. | Source-owned label near primary; Lab state chip remains display-scoped. | Exact placeholder term plus owner/layer note. | Must include qualification row and non-contract boundary. |

Do not add source-owned examples by making `blocked`, `no observation`, or `degraded` Lab states. They are pressure examples and placeholders, not Lab-owned enums.

## Copy And Visual Distinction Guidance

### `NO DATA`

Meaning in Lab examples:

```txt
No presentable display fields are available to render.
```

Use when the display has no presentable fields. It should feel calm, blank, and non-accusatory.

Suggested visible treatment:

- neutral/quiet state chip
- primary line: `No presentable fields`
- basis line: `Display input returned no presentable fields.`
- freshness can still be visible if the read happened
- gaps can say what is missing
- warnings should say this is not proof of upstream absence
- avoid "failed", "blocked", or source-owned reason words unless qualified

### `UNAVAILABLE`

Meaning in Lab examples:

```txt
A current display value cannot be provided for a reason that should be named or inspected.
```

Use when there is a reason, attempt, source condition, or availability posture to inspect.

Suggested visible treatment:

- more structured state surface than `NO DATA`
- primary line: `Current read unavailable` or source-owned reason if qualified
- availability line should carry the reason first
- freshness should show attempt timing rather than successful read timing
- warning/gap edge should make the blocked/unavailable posture visible without looking broken
- detail should include reason, owner/layer if source-owned, and boundary language

### Source-Owned Visible Labels

When a source-owned term matters to the user, the static starter should show it near the primary read without making Lab own it.

Recommended pattern:

```txt
Primary line: <source-owned label>
Small qualifier: Source-owned placeholder - <owner/layer>
Lab state chip: display-scoped state such as UNAVAILABLE, PARTIAL, or NO DATA
Detail: owner/layer, qualification, boundary, and reason
```

This prevents two bad outcomes:

- hiding important source meaning behind a generic Lab label
- turning source-owned labels into Lab defaults

### Avoided Copy

Avoid these as Lab-owned example copy in the starter polish:

- proof
- truth
- source of truth
- verified
- trust
- certainty
- evidence
- watch
- monitoring
- listening
- report
- record
- schema

If a source project emits a protected or project-owned term, show it only as source-owned and qualified.

## Coverage / Known Fields Handling

Current behavior shows `Coverage` in the meta grid and `Known fields` in detail. That is useful for a reference, but dense for target-shaped glance use.

Recommendation: make this a display policy/example variant, not a new view mode.

### Default Reference Example

Keep `Coverage` visible in the meta grid for baseline reference states:

- `CURRENT`
- `PARTIAL`
- `FALLBACK`
- source-owned placeholder demonstration where coverage is the point

### Compact Inspection Example

Add one compact example where coverage summary is not in the visible meta grid. In that example:

- visible meta shows only age/freshness and basis
- `Gaps` / `Warnings` pills remain visible
- `Readout Detail` contains `Coverage` and `Known fields`
- detail toggle label remains `Readout Detail`

This lets target reviewers see that the head can be less diagnostic without losing the coverage information.

### Copy Guidance

Prefer:

- `Coverage`
- `Known fields`
- `Fields shown`
- `Present fields`

Avoid making coverage sound like target schema, completeness proof, or source authority.

## Target Relay Inspection Shape

The current selector and top boundary note are useful reference scaffolding. They should remain in the Lab demo path.

Before wider target relay, add either:

1. a no-selector inspection page, or
2. a visible note in README and/or page copy naming what is scaffolding and what is the offered head.

Preferred smallest path: add a no-selector inspection page under the static examples folder that renders one selected example directly.

Suggested page purpose:

```txt
Show only the travelling head surface and its local boundary note, without the Lab example selector.
```

It should not become target UI. It is an inspection shape for reviewers.

If Dev chooses a note instead of a page, the note should say:

- selector is Lab reference scaffolding
- top boundary note is relay scaffolding
- the travelling head is the Instrument Readout Panel surface, CSS/JS rendering pattern, example data boundary, and README safety language
- target projects own local adapter, source meaning, product copy, and adoption timing

## React Recommendation

React remains parked.

The pressure is about presentation semantics, example coverage, and inspection clarity. A React scaffold would add framework posture before the head has resolved its absence/unavailable/source-owned-label pressure. The current static starter is the right place to learn this cheaply.

## Dev Packet Recommendation

Recommendation: implement now as one small static starter polish packet.

Do not split first. Do not wait for more target pressure. Do not open React. Do not touch target projects.

Suggested packet name:

```txt
M46 - Static Starter Absence And Relay Polish
```

Scope:

- `portable-presentation-starter/examples/static/example-readouts.json`
- `portable-presentation-starter/examples/static/instrument-readout-panel.js`
- `portable-presentation-starter/examples/static/instrument-readout-panel.css`
- optionally `portable-presentation-starter/examples/static/index.html`
- optionally one no-selector inspection page in the same static folder
- `portable-presentation-starter/README.md`
- `scripts/verify-static-starter.js`
- Dev handoff artifact

Do not touch:

- target projects
- current Lab renderer
- Electron/preload/IPC
- SmokeFlash
- Pane Board
- Wayfinder
- Lab service registry
- bridge/runtime contracts
- React package/scaffold

## Future Dev Acceptance Criteria

A future Dev packet is acceptable if:

- `NO DATA` and `UNAVAILABLE` are visibly and textually distinct.
- At least one reason-first absence example exists for generic display absence.
- At least one source-owned absence/unavailability example exists with owner/layer qualification.
- At least one degraded/partial source-owned placeholder example exists without becoming a Lab state.
- At least one source-owned label is shown primary or near-primary while qualified.
- At least one compact example moves `Coverage` / `Known fields` behind `Readout Detail`.
- Lab demo scaffolding vs offered head is clarified through a no-selector inspection page or explicit relay note.
- Existing safety-floor README language remains intact.
- Existing local JSON fallback behavior remains intact.
- Text is still rendered as text.
- No external URL, privileged runtime, target adapter, or bridge/runtime contract is introduced.
- React remains absent.
- Verification passes with the packet's named commands.

Suggested verification:

- `node --check portable-presentation-starter\examples\static\instrument-readout-panel.js`
- `node --check scripts\verify-static-starter.js`
- `npm.cmd run verify:static-starter`
- `npm.cmd run verify:all`
- `npm.cmd run verify:terminology` from `F:\Projects\Docs\Aura-Project-Orchestration`

Browser or screenshot evidence is optional only if the packet explicitly asks for it and the evidence is actually produced.

## Risks And Boundary Cautions

- If source-owned labels become too prominent without qualification, target reviewers may read them as Lab-owned vocabulary.
- If `NO DATA` absorbs blocked/no-observation/degraded examples, Lab will encourage unsafe adapter shortcuts.
- If `UNAVAILABLE` looks like a broken card, the head will punish recoverable or authority-bound states visually.
- If `Coverage` stays foregrounded everywhere, compact target surfaces may read like diagnostics instead of display.
- If target relay includes only the selector demo, reviewers may mistake Lab scaffolding for target UI.
- If React starts now, framework evaluation will distract from the sharper presentation pressure.
- If examples become too Sense-shaped, the starter may look like Sense adoption rather than product-agnostic Lab pressure learning.

## Final UI/UX Position

The static starter is good enough to try, but one small polish packet would make it safer and clearer before wider relay.

Do the bounded polish now. Keep it static, local, and example-driven. Let the head demonstrate that Lab can handle absence, unavailable source reasons, source-owned labels, and compact detail pressure without stealing meaning from the target project.
