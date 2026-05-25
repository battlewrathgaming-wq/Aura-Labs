# OverseerProposalHS72 - Lab Display Inventory And Material Contract

Date: 2026-05-25
Role: Direction / Overseer proposal
Project: Aura Lab
Status: Proposal for Human / Overseer review

## Purpose

Aura Lab needs a stronger post-M19 direction:

```txt
An inventory and workshop for "you can now display information like this."
```

This proposal covers two connected areas:

1. A display inventory/workshop for reusable presentation assets.
2. A shared display material library with structured snippets, long-form text, awkward values, and state cases.

It also proposes an agent operating contract for how Lab workers develop, document, verify, and graduate display assets without turning Lab into a target adapter, fixture taxonomy, or bridge contract owner.

## Direction Statement

Aura Lab should operate as a presentation primitive workshop.

Lab's product is not a dashboard, adapter, fixture taxonomy, or diagnostic suite. Lab's product is a growing inventory of portable HTML presentation assets and treatments that answer:

```txt
You can now display information like this.
```

Accepted assets should be small enough to understand, test, review, and potentially adapt later under another project's authority.

## What Counts As A Display Asset

A display asset is a reusable presentation unit or treatment that helps bridge-fed information become readable to a human.

Display assets can be:

- **Primitive modules**: Instrument Status Band, Readout Detail Reveal, compact value strip.
- **Slot treatments**: primary value, readout basis, readout age, source coverage, gap marker.
- **State treatments**: current, updating, aged, partial, unavailable, fallback, no data.
- **Surface/material treatments**: band, inset panel, rail, divider, muted warning edge, status light.
- **Text treatments**: long-form detail copy, warning explanation, unavailable explanation, dense list treatment.
- **Responsive treatments**: narrow-shell stack, compact drawer behavior, clipped-but-readable rows.
- **Composition patterns**: one primitive nested with another, such as a status band opening a detail reveal.

Display assets are not:

- upstream bridge fields
- source-project meanings
- target adoption claims
- product features by themselves
- screenshot matrices
- fixture taxonomies
- generic inspiration references
- broad UI themes

An idea becomes a display asset only when it has a clear display purpose, expected slots or behavior, and at least one known use in Lab presentation work.

## Metadata Each Asset Needs

Each inventory asset page should carry enough metadata for a fresh worker to understand and use it without inventing product direction.

Required metadata:

- **Name**: stable Lab display name.
- **Status**: proposed, in progress, accepted, parked, retired.
- **Asset type**: primitive module, slot treatment, state treatment, material treatment, text treatment, responsive treatment, or composition pattern.
- **Purpose**: what display problem it solves.
- **Human read**: what the user should understand first.
- **Supported slots**: primary value, label, status light, readout basis, readout age, gaps, warnings, detail reveal, etc.
- **Supported states**: current, updating, aged, partial, unavailable, fallback, no data, or narrower set.
- **Display material used**: links to snippet/text entries used to shape or test it.
- **Implementation location**: source files if implemented; otherwise advisory/source artifact only.
- **Screenshots/examples**: links or paths, if available.
- **Accessibility/readability constraints**: text containment, contrast, non-color-only status, stable dimensions.
- **Responsive behavior**: wide, medium, narrow expectations.
- **Verification/support**: commands and outcomes that support acceptance.
- **Known limits**: what it does not display yet.
- **Parked extensions**: adjacent ideas intentionally not included.
- **Authority notes**: what remains Lab-owned, Human-owned, Overseer-owned, or target-owned.

Recommended short header:

```md
Status:
Asset type:
Accepted in:
Implemented in:
Display material:
Verification:
Owner notes:
```

The metadata should stay useful. If a field is not known, write `Not established` rather than forcing speculative detail.

## Where Inventory Docs Live

Recommended folder:

```txt
workspace/display-inventory/
```

Recommended initial files:

```txt
workspace/display-inventory/README.md
workspace/display-inventory/instrument-status-band.md
```

Future examples:

```txt
workspace/display-inventory/readout-detail-reveal.md
workspace/display-inventory/readout-age-treatment.md
workspace/display-inventory/gaps-warning-marker.md
workspace/display-inventory/narrow-shell-stack.md
```

Why `workspace/display-inventory/`:

- It is active Lab coordination material, not durable project doctrine yet.
- It is distinct from `workspace/reference/`, which remains inspiration and material.
- It can mature before anything is promoted into `docs/`.

Promotion rule:

- `workspace/display-inventory/` holds active accepted/proposed asset pages.
- `docs/` receives only durable project knowledge after Human / Overseer acceptance.
- `workspace/reference/` holds display material, inspiration, screenshots, and examples that do not themselves create product direction.

## Shared Display Material Library

Recommended file:

```txt
workspace/reference/display-material-library-2026-05-25.md
```

This library should contain reusable display inputs for testing and shaping Lab assets.

It should include:

- structured snippets
- long-form text
- awkward values
- hostile containment cases
- dense lists
- empty/unavailable/fallback explanations
- source/basis/age copy variants
- warning and gap wording
- narrow-shell stress material

It should not be runtime fixture doctrine. If Dev needs a subset in code, Overseer should explicitly identify the subset and bound the implementation.

## How Workshop Ideas Graduate Into Inventory Entries

Use a simple four-stage path:

1. **Workshop idea**
   - Lives in a proposal, advisory, reference note, or current packet.
   - Has a display problem but may not have implementation.

2. **Candidate asset**
   - Has a name, purpose, slots, states, and material to test against.
   - Can receive an inventory stub with status `proposed`.

3. **Implemented asset**
   - Exists in visible HTML/CSS/JS or a focused prototype.
   - Has Dev handoff support notes and verification.
   - Inventory page is updated with source files, states, material, and limits.

4. **Accepted asset**
   - Overseer accepts the implementation or advisory as Lab inventory.
   - Inventory page status becomes `accepted`.
   - Page can be used as source input for future primitive or composition work.

Graduation should require:

- a named display purpose
- a bounded scope
- display material or real fixture data used for review
- at least one accessibility/readability note
- verification or review support
- explicit parked items

Ideas should not graduate merely because they appear in a reference library or inspiration sweep.

## How Screenshots And Examples Are Referenced

Screenshots and examples should support asset understanding without becoming acceptance by themselves.

Recommended location for Lab-created screenshots:

```txt
workspace/reference/screenshots/
```

Suggested naming:

```txt
YYYY-MM-DD-asset-name-state-or-view.png
```

Asset pages should reference screenshots like:

```md
Examples:
- `workspace/reference/screenshots/2026-05-25-instrument-status-band-current.png`
- Smoke result: `.tmp/electron-visual-smoke/visual-smoke-result.json`
```

Rules:

- Screenshots are examples, not product direction.
- External screenshots remain reference material and should be summarized, not copied into asset doctrine.
- Each screenshot reference should state what it demonstrates: state treatment, narrow behavior, long text containment, drawer behavior, etc.
- Do not require screenshots for every small asset page; require them when visual behavior is hard to understand from text.

## How To Keep This Useful Instead Of Bureaucratic

Keep the inventory small, practical, and acceptance-driven.

Useful:

- one page per accepted or serious candidate asset
- short metadata
- direct links to implementation and material
- clear "what this displays"
- clear "what remains parked"
- verification commands named plainly
- examples only when they teach something

Not useful:

- asset pages for every CSS class
- filling unknown fields with invented detail
- turning reference notes into a backlog
- requiring screenshots for minor text-only updates
- duplicating Dev handoffs verbatim
- writing adoption claims for target projects
- expanding verification just to fill a template

Suggested page length:

- Candidate asset: 1 to 2 pages.
- Accepted implemented asset: 2 to 4 pages.
- Anything longer should probably be split or summarized.

## How Dev Handoffs Update Inventory

Dev should not independently create product direction, but Dev handoffs should provide inventory-ready facts.

Each Dev handoff for display work should include:

- files changed
- asset name touched or created
- visible behavior
- slots supported
- states covered
- display material or fixture data used
- narrow behavior notes
- accessibility/readability notes
- screenshots or smoke outputs, if run
- verification commands and results
- internal names preserved
- parked items and residual risks

After Dev handoff:

1. Overseer reviews the Dev output.
2. If accepted, Overseer either updates the inventory page or directs a documentation worker to update it.
3. If redirected, the inventory page remains proposed/in progress and notes the redirect.
4. If parked, the inventory page is either not created or marked `parked` with a reason.

Dev may update inventory only when the active packet explicitly asks for it. Otherwise, Dev should leave inventory-ready material in the handoff.

## Verification And Support On An Asset Page

Asset pages should not claim quality without named support.

Useful verification/support:

- exact verification commands run
- pass/fail result
- visual smoke result path, when relevant
- states exercised
- display material entries exercised
- narrow-shell review notes
- long-text containment notes
- reduced-motion note if motion is used
- known warning-only terminology candidates
- manual review notes from Overseer or Human

Recommended format:

```md
## Verification / Support

Commands:
- `npm.cmd run verify:vocabulary` - passed
- `npm.cmd run verify:renderer-shell` - passed
- `npm.cmd run verify:all` - passed
- `npm.cmd run smoke:electron` - passed

Display material:
- Partial readout with long basis
- No-data explanation

Observed:
- Closed band kept state, age, basis, and gap marker visible.
- Narrow layout stacked without horizontal overflow.

Remaining risk:
- Fallback example is Lab-local review material, not upstream meaning.
```

Do not paste full smoke output into the page. Summarize and link/path-reference it.

## What Remains Overseer-Owned

Overseer owns:

- whether a workshop idea becomes a packet
- milestone boundaries
- which assets can enter inventory
- whether an asset is accepted, redirected, parked, or retired
- whether display material can be promoted into runtime fixtures
- whether an inventory page should move into durable `docs/`
- whether target-project review is appropriate
- whether verification scope is enough
- whether terminology risk is bounded
- how `workspace/current.md` reflects active work

Overseer also protects Lab from:

- becoming a target adapter
- inventing source-project meaning
- treating display material as bridge contract
- letting verification become the product
- letting reference libraries become task queues

## What Remains Human-Owned

Human owns:

- Lab vision and intended experience
- priority between primitives
- acceptance of direction
- final call on whether an asset feels worth developing
- naming decisions when names affect product feel
- permission to make larger strategic moves
- whether Lab pauses for target-project review
- whether a primitive should become a more durable project statement
- whether composition/nesting becomes the next development theme

Human is not bound by the agent operating contract. The contract binds agents so they develop Lab in a coherent, useful way.

## Agent Operating Contract

Name:

```txt
Lab Presentation Asset Development Contract
```

This contract binds future Lab agents, including UI/UX, UI developer, Dev, documentation worker, and Overseer-support roles.

Working loop:

```txt
Name the display asset.
Choose or create display material.
Define slots, states, and narrow behavior.
Build or document one bounded asset.
Verify readability, state behavior, and containment.
Summarize what can now be displayed.
Update or prepare the inventory entry.
Park everything else.
```

Agent obligations:

- Work from `workspace/current.md` when implementation is active.
- Treat display material as review input, not upstream doctrine.
- Use Lab-owned default vocabulary.
- Preserve source-project meaning.
- Keep asset pages short enough to remain useful.
- Name verification and supporting material.
- Separate accepted assets from workshop ideas.
- Do not expand into composition work until Human / Overseer opens that direction.

Stop conditions:

- an asset requires source-project meaning decisions
- display material begins to act like a bridge contract
- a target-project term is needed as Lab default copy
- implementation requires broad renderer restructuring
- examples or screenshots start becoming requirements
- verification scope starts expanding beyond the asset

## Recommended Next Packets

### M20 - Display Material Library

Create:

```txt
workspace/reference/display-material-library-2026-05-25.md
```

Scope:

- structured snippets
- long-form text samples
- hostile containment material
- state and availability cases
- guidance for use without turning material into runtime doctrine

No runtime implementation required.

### M21 - Display Inventory Scaffold

Create:

```txt
workspace/display-inventory/README.md
workspace/display-inventory/instrument-status-band.md
```

Scope:

- define display asset page format
- add accepted M19 Instrument Status Band as first asset
- reference M19 handoff and accepted verification
- note parked composition questions

### M22 - Next Primitive Candidate

Recommended next primitive after material and inventory scaffolding:

```txt
Readout Detail Reveal
```

Reason:

The accepted Instrument Status Band already depends on `Readout Detail`. The reveal is the natural next asset for long-form text, dense rows, gaps, warnings, basis, age, availability, and narrow-shell behavior.

## Composition Direction, Later

Once Lab has a better understanding of what content types it can render, the next theme can be composition:

- how assets nest
- which slots can contain other assets
- when a detail reveal can hold a status band or compact list
- how hierarchy survives narrow shells
- how repeated assets avoid visual noise
- which combinations should be forbidden because they confuse state or meaning

Composition should remain parked until the material library and inventory scaffold exist.

## Proposal Close

This proposal gives Lab a way to develop documentation and implementation together without drowning in process.

The aim is simple:

```txt
Build a useful library of ways information can be displayed, prove them against real display pressure, and keep authority clear.
```
