# HS168 - Sense Relay Presentation Pressure Extract - Lab Static Starter Head

Role: Sense relay reviewer / presentation-boundary auditor
Status: Lab-facing presentation pressure extract
Source review: `F:\Projects\AURA-Sense\workspace\RelayReviewHS65-lab-static-starter-head.md`
Date: 2026-06-01

## Boundary

This is feedback to Lab about the static starter head as a presentation surface.

It does not decide Sense adoption, create Sense implementation work, reinterpret Sense source meaning for Lab, or make Lab owner of Sense adapter behavior, lane semantics, runtime behavior, product language, or adoption timing.

Sense-shaped content used as pressure only:

- Passive Telemetry adapter output is the best current pressure source because Sense already has a Passive adapter landing pad.
- Sense terms and states remain Sense-owned.
- Lab examples remain examples, not Sense bridge/runtime contracts.

## What Read Well Through The Lab Head

- The head was clear as a display-only reference: the boundary note, README language, and example metadata consistently say the input is not a bridge contract, runtime contract, target enum set, or source-project state model.
- The panel hierarchy was stable at desktop width in the manually captured `CURRENT`, `PARTIAL`, `NO DATA`, and `UNAVAILABLE` states.
- The state chip stayed visible and readable without relying only on color.
- The basis line was useful. It gave the operator a quick reason for what the readout was based on without turning the surface into a diagnostic dump.
- The warning/gap count pills were compact and calm.
- The detail reveal pattern is a good fit for long basis, freshness, warning, gap, provider/cache, and source-owned qualification material.
- Long-token handling appears intentionally designed through wrapping rules, which matters for target-project identifiers, paths, provider labels, and source notes.
- The static package itself reads as recoverable: plain HTML/CSS/JS, local example data, and no visible Lab tooling bleed in the offered head.

## What Became Unclear, Dense, Clunky, Or Visually Weak

- `NO DATA` and `UNAVAILABLE` looked visually close in the desktop screenshots. Both use muted absence copy, similar chip treatment, similar warning/gap counts, and similar meta structure. For Sense-shaped content, that similarity could collapse important distinctions such as no observation, I/O-off authority block, degraded provider/resolver state, and true display absence.
- `Coverage` / `Known fields` was readable but leaned dashboard/report/debug rather than tactical viewport. It may be better behind detail for target projects like Sense unless the surface is explicitly a review/detail panel.
- The basis appears in multiple places: header line, meta grid, and detail. That repetition is useful in a reference, but can feel heavy with real source copy.
- The selector and top boundary note are good Lab reference scaffolding, but should not be mistaken for target product UI.
- The panel is calm and clean, but it reads more like a single instrument/detail panel than a compact HUD element. That is not a flaw, but it shapes where the head is most useful.

## Useful Material Treatments

Strong fits:

- availability reason treatment
- warning/gap edge treatment
- long text detail block
- source-owned qualification in detail
- readout age/freshness line
- narrow-friendly stacking and long-token wrapping
- non-color-only state marker
- display-only static package boundary

Use with care:

- `Coverage` / `Known fields`: useful for reference clarity, but likely too schema-flavored for primary target-product glance.
- uppercase display states: readable, but easy to mistake for enums if copied without boundary notes.
- absence states: useful, but need stronger visual/copy separation when target source meaning distinguishes multiple kinds of absence.

## State / Source / Freshness / Basis / Gap / Warning Treatments

Held up well:

- `PARTIAL` was the strongest example. The primary value, availability line, gap count, warning count, and basis all reinforced limited coverage without implying failure or complete truth.
- Freshness/age placement was useful and did not dominate the readout.
- Basis treatment supported confidence without forced certainty.
- Gap/warning counts were compact enough to stay visible without turning the panel into an alert surface.
- Source-owned placeholder support is the right concept for target terms that Lab should display but not own.

Needs refinement:

- `NO DATA` should remain a display absence label only; the head should make it harder for target projects to map source-owned blocked/no-observation/degraded states into it by convenience.
- `UNAVAILABLE` needs clearer separation from `NO DATA`, especially where the target has exact source reasons.
- Source-owned placeholders might benefit from one example where the source-owned term itself is primary and qualified, rather than visually represented through a generic Lab state label.

## Lab Assumptions That Did Not Fit Sense-Shaped Content

No unsafe hard assumption was found, but several default presentation assumptions need care under Sense pressure:

- A single generic absence vocabulary does not fit Sense-shaped content well. Sense distinguishes `No observation`, `I/O off - ingest blocked`, `Degraded`, `Unavailable`, stale context, partial sample, and capped sample.
- `Coverage` as a primary concept feels too display/schema-oriented for Sense's tactical viewport. Sense needs source/basis/freshness/gaps available, but not always foregrounded.
- Generic Lab uppercase state labels are useful as examples, but Sense-shaped data often needs source-owned visible labels rather than Lab-normalized labels.
- A large readout panel is useful for detail/instrument review, but may not fit Sense's compact tactical glance without a denser variant.

## Healthy Deviations Suggested By Sense Pressure

These deviations should be treated as target-pressure feedback, not Lab failures:

- Keep source-owned state labels visible when meaning matters.
- Move coverage/known-fields behind detail for compact tactical use.
- Preserve reason-first absence copy rather than mapping to generic `NO DATA`.
- Use the head as a detail/instrument panel before trying it as a compact HUD replacement.
- Let target projects supply local fixture adapters that bend the input shape while preserving source meaning.
- Keep warning/gap count treatment, but allow target projects to choose which warnings deserve primary visibility.

## What Lab Should Not Infer

Lab should not infer:

- Sense adoption approval.
- A request to implement or own a Sense adapter.
- A request to rename Sense states or terms.
- That Lab `state` labels are Sense enums.
- That Lab sample data, example meanings, roadmap, or future upgrade path are accepted by Sense.
- That Passive Telemetry pressure applies automatically to Combat Witness, Threat Intel, Clipboard Acquisition, Atlas, or all Aura projects.
- That Sense wants a dashboard, report, evidence workstation, or broad Lab demo surface.
- That future Lab head upgrades should force synchronization into Sense.

## Suggested Lab Actions

Recommended: polish and add more examples.

Most useful next Lab refinements:

1. Add clearer visual/copy distinction between `NO DATA` and `UNAVAILABLE`.
2. Add a source-owned reason-first absence example that distinguishes blocked, no observation, unavailable, and degraded without collapsing them into `NO DATA`.
3. Add a compact/detail-mode variant where `Coverage` / `Known fields` moves fully behind detail.
4. Add an example where a source-owned state label passes through visibly with qualification, instead of being represented mainly by a Lab uppercase label.
5. Add a no-selector/no-reference-scaffold view or note for target relay inspection, so target projects can see what would travel versus what is only Lab demo scaffolding.

React scaffold recommendation: not yet.

The pressure does not suggest React as the next Lab move. The static head is already enough to expose the important target-pressure questions. More examples and small polish are more valuable before adding framework posture.

No Lab action yet would also be acceptable if Lab's current goal is only to offer a recoverable trial reference. The current head is useful enough to try; the refinements above would make it safer and clearer under target-project pressure.
