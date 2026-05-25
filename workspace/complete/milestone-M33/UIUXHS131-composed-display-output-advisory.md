# UIUXHS131 - Composed Display Output Advisory

Date: 2026-05-26
Project: Aura Lab
Milestone: M33 - Composed Display Output
Role: UI/UX advisor / composed display designer
Status: Advisory artifact

## Request Received

Produce the M33 composed display output advisory for Aura Lab.

Define one concrete, product-agnostic, Lab-local composed display output using accepted display materials. The advisory must avoid implementation, Dev runway creation, export, split, seeding, target-project adapters, durable bridge/runtime contracts, and Atlas/Sense/Core doctrine.

The expected artifact is:

```txt
workspace/UIUXHS131-composed-display-output-advisory.md
```

## Files Reviewed

- `AGENTS.md`
- `workspace/current.md`
- `workspace/overview.md`
- `workspace/critical/README.md`
- `workspace/critical/critical-terms.md`
- `workspace/critical/critical-assets.md`
- `workspace/OverseerHS131-m33-composed-display-output-runway.md`
- `docs/roadmap/m33-composed-display-output.md`
- `docs/adr/0001-smokeflash-split-timing.md`
- `docs/adr/0002-target-owned-presentation-adapters.md`
- `workspace/complete/milestone-M32/EngineeringHS129-export-boundary-review.md`
- `workspace/complete/milestone-M32/OverseerHS130-engineeringhs129-export-boundary-acceptance.md`
- `workspace/display-materials/README.md`
- `workspace/display-schema-ledger.md`
- `workspace/display-materials/authority-window-ttl-strip.md`
- `workspace/display-materials/long-text-detail-block.md`
- `workspace/display-materials/availability-reason-treatment.md`
- `workspace/display-materials/warning-gap-edge.md`
- `workspace/display-materials/expandable-status-card.md`
- `workspace/display-materials/table-row-detail-drawer.md`
- `workspace/display-materials/source-basis-coverage-marker.md`
- `workspace/display-materials/compact-value-rail.md`
- `workspace/display-outputs/README.md`
- `package.json`
- `F:\Projects\Docs\Aura-Agent-Coordination\roles\common-role-contract.md`
- `F:\Projects\Docs\Aura-Agent-Coordination\roles\ui-ux\README.md`
- `F:\Projects\Docs\Aura-Agent-Coordination\roles\ui-ux\prompt.md`

## Current-State Understanding

Aura Lab has accepted multiple individual display materials and has not yet accepted any combined display output.

Accepted materials currently include:

- Authority Window TTL Strip
- Expandable Status Card
- Table Row Detail Drawer
- Warning / Gap Edge
- Long Text Detail Block
- Availability Reason Treatment

Pending materials exist but are not active for this advisory:

- Source / Basis Coverage Marker
- Compact Value Rail

M32 accepted that Lab should define a composed Lab-local display output before split/export work. ADR 0001 keeps SmokeFlash/material harness as Lab-local support until export/seeding/target consumption requires a split. ADR 0002 keeps target-project adapters and source-project meaning outside Lab ownership.

Therefore M33 should define a single composed output reference that answers:

```txt
What does a reusable Lab display look like when accepted materials work together?
```

It should not answer:

```txt
How does Atlas, Sense, or another target project adapt its data into this surface?
```

## Composed Output Name

Recommended name:

```txt
Instrument Readout Panel
```

Rationale:

- `Instrument` fits the existing status-band direction without importing target-project doctrine.
- `Readout` is accepted Lab vocabulary.
- `Panel` makes this larger than a strip/band but smaller than a product page.
- The name does not imply a bridge schema, runtime contract, target adapter, or source-project output.

## Purpose

The Instrument Readout Panel is a compact composed display for one post-bridge readout.

It presents:

- the readout identity
- current display state
- primary value or absence state
- freshness / last read
- readout basis
- availability reason
- warnings and gaps
- long detail content behind reveal

It is meant to be a reusable Lab-local display reference for bridge-fed information after source meaning has already been preserved by the emitting project.

## Selected Accepted Materials And Why

| Material | Use in the composed output | Why selected |
| --- | --- | --- |
| Status / state band behavior | Top first-read surface with state, primary value, freshness, basis cue, and warning/gap marker. | This is the strongest existing Lab primitive for a calm first read. |
| Availability Reason Treatment | Primary absence and limited-availability language. | Keeps no data, unavailable, blocked, failed, fallback, aged, and source-owned no-scan distinct. |
| Long Text Detail Block | Detail body for basis, warning explanation, gap list, paths, and long tokens. | Prevents long content from bloating the first-read surface. |
| Warning / Gap Edge | Muted warning/gap treatment attached to the panel edge or marker row. | Makes gaps and warnings visible without turning the whole panel into an alarm. |

Not selected for the first composed output:

- Authority Window TTL Strip: useful when a short authority window is the central display problem; not required for a general readout panel.
- Expandable Status Card: useful for multiple sibling cards; this output is one composed panel, not a card stack.
- Table Row Detail Drawer: useful for dense multi-row displays; this output should not begin as a table.
- Source / Basis Coverage Marker: pending, so it should not be treated as an accepted ingredient.
- Compact Value Rail: pending, so it should not be treated as an accepted ingredient.

## Output Structure

Recommended structure:

```txt
[Readout label]                                      [state chip/light]
[primary value or absence state]
[freshness / last read] [basis cue]                  [warning/gap marker]
[availability reason line, only when needed]
---------------------------------------------------------------
[Readout Detail reveal]
  Basis
  Availability
  Freshness
  Known fields / coverage note
  Gaps
  Warnings
  Long text / source-owned note
```

The first read should fit in a compact panel. The detail reveal holds any long explanation.

## Slots

Required slots:

- `readout label`
- `primary value`
- `state label`
- `status light`
- `readout age`
- `readout basis`
- `availability note`
- `warnings`
- `gaps`
- `detail reveal`
- `detail row`
- `long text block`
- `narrow summary`

Conditional slots:

- `fallback basis`
- `source-owned label`
- `source-owned basis`
- `known fields`
- `cap marker`
- `authority note`

Do not treat these slots as bridge fields or runtime payload fields. They are presentation slots for the composed Lab output.

## States

The Instrument Readout Panel should support the following Lab presentation states:

- `CURRENT`
- `UPDATING`
- `AGED`
- `PARTIAL`
- `UNAVAILABLE`
- `FALLBACK`
- `NO DATA`

The panel may display qualified source-owned placeholders when supplied by a source project or staged Lab material:

- blocked / source-owned placeholder
- degraded / source-owned placeholder
- no-scan / source-owned placeholder

These placeholders must not become Lab-owned default enums. They should appear only with owner/layer qualification.

## View Intent / Reading Order

The output should support the existing Lab view-intent direction without adding a new mode.

### Summary

Primary reading order:

1. readout label
2. state label and status light
3. primary value or absence state
4. freshness / last read
5. basis cue
6. warning/gap marker
7. detail affordance

Summary should be the default.

### Basis

Primary reading order:

1. readout label
2. basis cue
3. freshness / last read
4. availability reason
5. known fields / coverage note if present
6. warnings/gaps
7. primary value remains visible

Basis should reorder emphasis, not replace the panel.

### Details

Primary reading order:

1. readout label and state remain visible
2. detail reveal opens or receives emphasis
3. basis, availability, freshness, gaps, warnings, and long text rows become the main read
4. primary value remains available for orientation

Details should not create a separate product page.

## Interaction And Detail Reveal Path

The panel should have one main detail affordance:

```txt
Readout Detail
```

The detail reveal should contain:

- readout basis
- availability reason
- freshness / last read
- known fields / coverage note when present
- gaps
- warnings
- fallback basis when present
- source-owned note when present
- long text content

Interaction rules:

- Detail reveal is not navigation.
- Detail reveal does not imply source-project adoption.
- Detail reveal should be keyboard reachable.
- Closed detail must still leave warning/gap presence visible.
- Open detail must not hide the state label or primary value.
- Long text must stay inside the panel and avoid horizontal overflow.

## Narrow / Constrained Behavior

Narrow priority order:

1. state label and status light
2. readout label
3. primary value or absence state
4. freshness / last read
5. availability reason or basis cue
6. warning/gap count or marker
7. detail affordance

Narrow behavior rules:

- Stack lanes rather than shrinking text below readability.
- Keep the primary value and state visible.
- Move long basis, warning explanation, and source-owned notes into detail.
- Keep warning/gap marker non-color-only.
- Break or wrap long tokens safely.
- Preserve stable dimensions for state chip, status light, and marker rows.
- Do not require motion to communicate state.

## Source / Freshness / Basis / Availability Language Rules

Use Lab-owned slim vocabulary for defaults:

- readout
- basis
- readout basis
- readout age
- freshness
- availability
- coverage
- known fields
- gaps
- warnings
- last read

Avoid Lab-owned default copy that implies proof or source authority:

- verified
- trust
- certainty
- proof
- truth
- source of truth
- authoritative
- evidence
- intel
- tactical
- combat
- operator
- watch
- monitoring
- listening
- snapshot
- report
- record
- finding
- schema
- Core
- Seed

Rules:

- `source` should be qualified as source-owned, provider source, display source, or readout basis when needed.
- `coverage` means display coverage only, not complete upstream source meaning.
- `known fields` means fields present in the readout, not a shared schema.
- `warnings` are display cautions unless source-owned wording says otherwise.
- `blocked`, `degraded`, and `no scan` should stay qualified when source-owned.
- `fallback` must name that the panel is showing a fallback basis, not a current value.
- `NO DATA` means no presentable display fields, not proof of absence upstream.

## What Remains Lab-Local

The following remain Lab-local:

- composed output definition
- material composition rules
- view-intent behavior
- staged Lab material examples
- visual review expectations
- SmokeFlash / material harness support
- Electron visual smoke support
- fixture pressure cases
- presentation slot names as Lab display vocabulary

## What Must Not Become Target Doctrine

The Instrument Readout Panel must not become:

- an Atlas or Sense feature
- a target-project adapter
- a bridge/runtime payload contract
- a shared source enum set
- a source-project terminology replacement
- a route/navigation doctrine
- a product settings surface
- a SmokeFlash product surface
- a claim that Lab owns source-project meaning

Target projects may later choose to adapt the pattern through their own authority, but that decision stays outside this advisory.

## What Should Be Implemented First If Accepted

If Human / Overseer accepts this advisory and later opens a Dev packet, the first prototype should implement the smallest useful Instrument Readout Panel:

1. Outer panel with readout label, state label/light, primary value, readout age, basis cue, and warning/gap marker.
2. Availability reason line for `NO DATA`, `UNAVAILABLE`, `FALLBACK`, `PARTIAL`, and source-owned placeholder cases.
3. Single Readout Detail reveal with long text detail block.
4. Warning / Gap Edge treatment that stays visible when detail is closed.
5. Narrow layout behavior for the same panel.

Do not begin with:

- multiple panels
- table rows
- route behavior
- target adapters
- export/split work
- pending materials as required ingredients

## Verification Expectations For A Later Dev Prototype

A later Dev prototype should verify:

- state labels remain visible across `CURRENT`, `UPDATING`, `AGED`, `PARTIAL`, `UNAVAILABLE`, `FALLBACK`, and `NO DATA`
- availability reason does not collapse blocked, unavailable, failed, fallback, and no data
- warning/gap marker remains visible with detail closed
- long text detail content wraps safely
- long unbroken tokens do not overflow
- basis and freshness remain visible in Summary and Basis view intent
- detail reveal is keyboard reachable
- narrow layout keeps state, value, age/basis cue, warning/gap marker, and detail affordance visible
- reduced-motion mode does not remove state meaning
- normal launch remains free of visible workshop controls

Suggested commands for a future Dev packet, if implementation occurs:

```powershell
npm.cmd run verify:renderer-shell
npm.cmd run verify:vocabulary
npm.cmd run verify:all
```

Electron smoke should be opened only by a future Dev packet that changes renderer behavior. This advisory should not run Electron smoke.

## Risks

- The panel can become too broad if it tries to include table/list/card behaviors immediately.
- Source/basis wording can imply source authority if layer qualifiers are weak.
- Availability states can collapse if the primary surface only shows a generic unavailable label.
- Warning/gap treatment can become alarm-heavy if edge styling dominates the panel.
- Detail content can become product doctrine if source-owned notes are copied as Lab defaults.
- Pending materials could be accidentally treated as accepted if compact value or coverage features are pulled in too early.
- SmokeFlash can drift toward product direction if the material harness becomes the organizing surface.

## Parked Alternatives

Parked for now:

- Multi-card status stack using Expandable Status Card.
- Dense table/list output using Table Row Detail Drawer.
- Authority Window Panel using TTL Strip as the central behavior.
- Compact Value Rail as a required ingredient.
- Source / Basis Coverage Marker as a required ingredient.
- Map / radius / spatial display output.
- Timeline or bead-strip output.
- Export-ready clean head.
- Target-project adapter trial.

These may become useful later, but they should not distract from the first combined output reference.

## Acceptance Criteria

This advisory is acceptable if:

- it defines one concrete composed output: Instrument Readout Panel
- it composes accepted materials rather than inventing an unrelated surface
- it uses accepted material pages as ingredients
- it avoids pending materials as required ingredients
- it gives a later Dev enough specificity to build a bounded prototype
- it keeps source-project meaning and adapters out of Lab
- it keeps SmokeFlash/workshop tooling as support
- it does not authorize implementation, export, split, seeding, packaging, or target adoption
- it keeps typography, text containment, narrow behavior, and first-read clarity central

## Recommended Overseer Integration

Overseer can accept this as the M33 composed output advisory if Human agrees with the selected output.

Recommended next packet, only after acceptance:

```txt
Dev prototype: Instrument Readout Panel, Lab-local, fixture-fed, no export/split/adapters.
```

Alternative disposition:

- accept the advisory but park Dev implementation until Human wants another visible prototype
- request a naming adjustment if `Instrument Readout Panel` feels too broad
- reject expansion into card stacks, tables, maps, or value rails for this M33 output

## Verification

No verification was required because this task changed only the expected advisory artifact and did not edit renderer/source files.
