# Overseer HS105 - Follow-On Feature Candidates

Status: Staged candidate note
Date: 2026-05-25
Role: Overseer

## Files Reviewed

- `workspace/current.md`
- `docs/roadmap/future-candidate-bank.md`

## Human Steering

Human added further presentation-head candidates:

- view-intent slot policy
- detail hydration
- focus/reveal controller
- row facets
- virtualized list helper
- overflow sentinel
- reduced-motion gate
- schema-to-fixture adapter

## Overseer Disposition

These are accepted as staged candidates, not active work.

They do not expand the active HS105 Dev runway. HS105 remains focused on the presentation slot registry scaffold. The new items are better treated as follow-on capability slices that can use the registry once it exists.

## Candidate Grouping

| Group | Candidate Items | Reason |
| --- | --- | --- |
| Slot behavior | view-intent slot policy, focus/reveal controller | Defines how slots change emphasis, reveal detail, and preserve identity across views. |
| Content depth | detail hydration, row facets | Helps a slot move from compact readout to deeper inspection without making every view dense. |
| Pressure handling | virtualized list helper, overflow sentinel | Keeps long or dense readouts readable and performant. |
| Accessibility and calm motion | reduced-motion gate | Lets animation/responsive behavior support clarity without becoming mandatory. |
| Fixture support | schema-to-fixture adapter | Helps Lab pressure presentation shapes without turning fixtures into product contracts. |

## Recommended Sequence After HS105

1. View-intent slot policy.
2. Focus/reveal controller.
3. Detail hydration.
4. Overflow sentinel.
5. Row facets.
6. Reduced-motion gate.
7. Virtualized list helper.
8. Lab-local schema-to-fixture adapter.

The sequence can change if Dev finds a dependency during HS105.

## Guardrails

- Do not implement these in HS105.
- Do not make `schema` visible Lab default copy.
- Do not create a durable bridge/runtime contract.
- Do not add target-project adapters.
- Do not make fixtures authoritative.
- Do not make motion required for comprehension.
- Do not turn list virtualization into the product direction.

## Current Packet Impact

No direct change to the active Dev runway beyond clarifying that these items are parked follow-ons.
