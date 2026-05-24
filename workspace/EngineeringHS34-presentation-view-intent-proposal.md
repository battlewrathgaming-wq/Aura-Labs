# EngineeringHS34: Presentation View Intent Proposal

Date: 2026-05-24
Role: Engineering specialist
Project: Aura Lab
Status: Advisory proposal for Human / Overseer review

## Scope

This proposal evaluates whether Aura Lab should add `viewIntent` as a third review axis after `family` and `state`.

It is not a Dev runway and does not authorize implementation. It does not add new families, define a durable bridge contract, create target-project adapters, import Atlas/Sense doctrine, choose a framework, or promote Lab fixture content into product direction.

## Source State Reviewed

- `AGENTS.md`
- `workspace/current.md`
- `workspace/overview.md`
- `docs/statements/post-bridge-presentation-boundary.md`
- `docs/current-state/m08-fixture-backed-presentation-family-prototype-current-state.md`
- `docs/current-state/m09-packaging-review-current-state.md`
- `docs/current-state/m10-implemented-family-screenshot-review-current-state.md`

Relevant accepted state:

- Aura Lab owns post-bridge display mapping, state grammar, typography, containment, source/freshness/certainty language, diagnostics, and visual smoke evidence.
- M08 accepted `family` and `state` as separate review axes.
- M08 accepted two Lab-local families: `briefing` and `neutral-seed`.
- M10 accepted the implemented proof but noted loading coverage, Neutral Seed stale/partial parity, title/source/narrow rhythm, and polish as the next local risks.
- M09 classified current family/state fixture mechanics as Lab-local with some Core-neutral candidate structure.

## Evaluation

### Family + State + View Intent

Engineering recommends adding `viewIntent` as a third Lab-local review axis, but only after it is kept clearly distinct from data shape and product doctrine.

The three axes should mean:

| Axis | Meaning | Example Values | Boundary |
| --- | --- | --- | --- |
| `family` | Presentation surface family | `briefing`, `neutral-seed` | Lab-local fixture family, not product navigation |
| `state` | Bridge/presentation condition | `loading`, `normal`, `empty`, `stale`, `failed`, `partial`, `long-text` | Presentation state grammar, not upstream bridge contract |
| `viewIntent` | Human reading priority | `summary`, `confidence` | Renderer mapping choice, not product doctrine |

This is a strong next step because it introduces a genuinely new presentation mode without adding another family. The Lab can prove whether the same family/state fixture can be remapped toward a different human question.

Recommended initial vocabulary:

```txt
summary
confidence
```

Do not start with `attention`, `source`, `comparison`, or target-like terms yet. Those are promising but more likely to pull in product semantics.

### Confidence View As First New Mode

Engineering recommends **Confidence View** as the first new `viewIntent`.

Why it fits:

- It is squarely post-bridge presentation work.
- It uses already accepted slots: status, certainty, freshness, sources, missing fields, warnings, diagnostics.
- It does not require a new family.
- It does not require target doctrine.
- It gives Aura Lab a new evidence mode: "what can be trusted, what is partial, what is stale, and what is unavailable?"

What Confidence View should prove:

- populated data reads as known and source-backed
- empty data reads intentional, not broken
- stale data makes freshness risk obvious without alarmism
- failed data is restrained and actionable without overclaiming
- partial data distinguishes known fields from unavailable ones
- long-text data remains contained while confidence signals stay legible

What Confidence View should not do:

- invent a scoring model
- rank truth
- define source authority
- claim Core or target semantics
- introduce Atlas evidence or Sense tactical language

### Loading As First-Class State

Engineering recommends promoting `loading` into first-class visual smoke coverage.

Current architecture already renders a loading state in the renderer before service results resolve. The gap is that loading is not fixture-backed or captured in the accepted screenshot set.

Small safe approach:

- Keep loading as a presentation state, not a bridge contract.
- Capture it through a controlled smoke pause or fixture delay, not by adding fake product semantics.
- Verify that loading has calm visual tone, stable layout, visible family/state/view review context, and no text jump that breaks the first screen.

Loading should be included in visual smoke before adding more families because it is an accepted boundary state in `docs/statements/post-bridge-presentation-boundary.md`.

### Neutral Seed Stale/Partial Parity

Engineering recommends adding Neutral Seed stale/partial screenshot coverage.

This is not new product behavior. The accepted M08 state says Neutral Seed stale and partial states exist in the fixture command but were not required in the first smoke subset.

Adding parity is useful because Confidence View will be weak unless stale and partial are visible across both accepted families.

Small safe approach:

- Add Neutral Seed stale and partial captures to smoke.
- Preserve current Briefing coverage.
- Do not require pixel-perfect parity between families.
- Verify that stale/partial affordances remain legible and restrained in both `summary` and `confidence` view intents if Confidence View is implemented.

### Fixture Scenario Packs

Engineering recommends defining fixture scenario packs as a review mechanism, but not implementing a broad scenario system in the first slice.

Useful scenario pack concepts:

```txt
baseline-readable
source-heavy
missing-critical-field
stale-with-known-content
failed-primary-read
long-human-copy
narrow-pressure
```

For the next milestone, scenario packs should remain light:

- use them as smoke/report labels or internal fixture notes
- do not create a schema
- do not expose them as product concepts
- do not multiply every family/state/view combination

The first implementation can get most of the value by naming scenarios in the smoke result JSON and screenshot labels where helpful.

### Family/State/View-Aware Visual Smoke

Engineering recommends extending visual smoke to understand all three axes.

Result JSON should remain reviewable and should avoid full matrix explosion.

Recommended shape:

```txt
families_checked
states_checked
view_intents_checked
viewports_checked
screenshots
observations
```

Each observation should include:

```txt
family
state
viewIntent
viewport
screenshot
selected_family
selected_state
selected_view_intent
status
certainty
freshness
sources
missing_fields or unavailable_count
warnings_count
diagnostics_visible
frame_controls_visible
overflowing
```

Recommended first matrix:

| Family | View Intent | States | Viewports |
| --- | --- | --- | --- |
| briefing | summary | loading, normal, empty, stale, failed, partial, long-text | desktop; narrow for partial |
| neutral-seed | summary | loading, normal, empty, stale, failed, partial, long-text | desktop; narrow for long-text |
| briefing | confidence | loading, normal, stale, failed, partial, long-text | desktop; narrow for long-text |
| neutral-seed | confidence | loading, normal, stale, failed, partial, long-text | desktop; narrow for long-text |

If this is too many captures for a first Dev slice, reduce by keeping all summary coverage and testing Confidence View against only:

```txt
loading, normal, stale, failed, partial, long-text
```

Empty can be added to Confidence View once placeholder grammar is tuned.

## Recommended Milestone Shape

Recommended next milestone:

```txt
M11 - Presentation View Intent And State Hardening
```

Purpose:

Prove that Aura Lab can keep `family`, `state`, and `viewIntent` separate while adding one new presentation mode and closing accepted smoke gaps from M10.

Milestone goal:

```txt
Make the existing Briefing + Neutral Seed proof more complete and more expressive before adding any new family.
```

Recommended scope:

- add `viewIntent` as a Lab-local review axis
- implement only `summary` and `confidence`
- make `loading` first-class in visual smoke
- add Neutral Seed stale/partial smoke parity
- improve placeholder grammar enough that Confidence View reads intentional
- keep existing families only
- update visual smoke result JSON and screenshots for family/state/view intent
- run full static and Electron smoke verification

## Smallest Safe Implementation Slice

The smallest safe Dev slice should be:

1. Preserve current `family` and `state` controls.
2. Add a clearly labeled `View intent` review control with:

```txt
Summary
Confidence
```

3. Keep `summary` as the current presentation mapping.
4. Add `confidence` as a renderer-level mapping for the same fixture payloads.
5. Treat `confidence` as a presentation lens over existing fields:

- status
- certainty
- freshness
- sources
- missing fields
- warnings
- unavailable/not provided/none states

6. Add loading capture to smoke.
7. Add Neutral Seed stale and partial smoke captures.
8. Extend smoke JSON with `view_intents_checked` and observation-level `viewIntent`.
9. Keep all fixture commands Lab-local and provisional.

This avoids durable schema work because the fixture payload already carries enough state for a first Confidence View. If implementation discovers the existing payload cannot support Confidence View without inventing source authority or scoring, Dev should stop.

## Verification Expectations

Required verification for a later Dev milestone should include:

```powershell
npm.cmd run verify:all
npm.cmd run smoke:electron
```

Recommended direct smoke confirmation:

```powershell
$env:AURA_LAB_ELECTRON_VISUAL_SMOKE='1'; $env:AURA_LAB_VISUAL_SMOKE_DIR='F:\Projects\AURA- Lab\.tmp\electron-visual-smoke'; npm.cmd start
Get-Process electron -ErrorAction SilentlyContinue
```

Static verification should assert:

- `viewIntent` remains a Lab review control
- `summary` and `confidence` are available
- no new family is introduced
- loading is represented in smoke capture logic
- Neutral Seed stale/partial screenshots are included
- smoke result JSON includes `view_intents_checked`
- observations include family, state, view intent, viewport, screenshot, and overflow evidence
- renderer still avoids `innerHTML`
- source/freshness/certainty remain visible

Visual smoke should assert:

- loading capture exists and is calm/stable
- stale and partial are captured for Neutral Seed
- Confidence View renders for both existing families
- long-text and narrow captures have no horizontal overflow
- placeholder grammar does not collapse into repetitive unexplained `Unavailable` / `Not provided` / `None reported`
- diagnostics remain visible but secondary
- review controls remain visibly Lab-local and secondary to the presentation

## Risks

- `viewIntent` could become product navigation if labels drift away from review intent.
- Confidence View could accidentally imply a truth score or source authority model.
- Loading can be hard to capture deterministically without adding brittle timing.
- The smoke matrix can grow too large to review.
- Placeholder grammar changes can become copy design instead of presentation grammar.
- Static tests can overfit exact text instead of protecting behavior.
- A third axis may create control clutter unless UI/UX defines hierarchy.

## Stop Conditions

Stop a later Dev packet if:

- Confidence View requires a durable bridge/data contract
- implementation needs a scoring model, ranking model, or source authority doctrine
- target-project semantics are needed to explain confidence
- a new family becomes necessary to complete the slice
- loading capture requires unstable sleeps instead of a controlled state
- smoke output becomes too broad for practical review
- Atlas, Sense, or Core terminology is needed

## Parked Items

Keep parked for now:

- new presentation families such as compact status board, event timeline, comparison panel, dossier/list view
- source-first view
- attention-first view
- comparison/delta view
- broad fixture scenario pack system
- side-by-side screenshot review workbench
- presentation candidate sheet generator
- motion and animation beyond possible static loading treatment
- Core-owned transfer prompt
- target-owned Atlas/Sense review
- durable post-bridge presentation contract
- shared component extraction
- framework or stack migration

These are promising, but they should come after Aura Lab proves that `family + state + viewIntent` works cleanly with the two accepted families.

## Recommendation

Engineering recommends opening a bounded next milestone for:

```txt
Presentation View Intent And State Hardening
```

The first new mode should be:

```txt
Confidence View
```

The implementation should keep only the existing Briefing and Neutral Seed families, make loading first-class in smoke, add Neutral Seed stale/partial parity, and make visual smoke family/state/view-aware.

This is ambitious in the right place: it expands Aura Lab from "multiple surfaces under state pressure" into "multiple reading intents over the same post-bridge fixture pressure" without crossing into target doctrine or durable bridge-contract work.

