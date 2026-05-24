# Current Workspace Packet

Status: Waiting for Human / Overseer direction
Updated: 2026-05-24
Owner: Overseer

## Coordination State

Active milestone: None
Last completed milestone: M08 - Fixture-Backed Presentation Family Prototype
Roadmap source: Human direction and accepted post-bridge presentation boundary
Sequence: HS31
Previous accepted handshake: `workspace/complete/milestone-M08/OverseerHS31-m08-closure.md`
Current executor: Human / Overseer
Current focus: choose the next Aura Lab direction after the accepted family/state proof
Expected DevHS filename: None
Archive target on next milestone completion: TBD

## Purpose

This packet intentionally contains no Dev runway.

Aura Lab has closed M08. The project now has:

- accepted post-bridge presentation boundary documentation
- accepted one-screen Briefing visual prototype
- project-local Electron smoke wrapper
- deterministic state grammar including long-text
- accepted separate `family` and `state` axes
- accepted Briefing and Neutral Seed family proof
- family-aware visual smoke evidence

The next step needs Human / Overseer direction because it determines classification and sequencing, not immediate implementation.

## Source Of Intent

Accepted:

- `docs/statements/post-bridge-presentation-boundary.md`: Aura Lab focuses on portable post-bridge display mapping and presentation tooling.
- `docs/current-state/m07-fixture-backed-presentation-family-spec-current-state.md`: accepted Briefing plus Neutral Seed spec.
- `docs/current-state/m08-fixture-backed-presentation-family-prototype-current-state.md`: accepted implementation of the first family/state proof.
- `workspace/complete/milestone-M08/OverseerHS31-m08-closure.md`: M08 accepted and closed.

Deferred:

- Neutral Seed stale/partial smoke screenshots beyond fixture-command support
- Tactical HUD family
- Operator Workbench family
- packaging review
- target-project adapter work
- durable post-bridge presentation contract
- durable upstream bridge/data contract
- framework or stack choice
- Aura Core transfer

Rejected:

- treating Neutral Seed as Aura Core doctrine, ownership, architecture, or contract
- treating Lab fixtures as target-project doctrine
- treating `aura.projectBriefing` or `aura.presentationFixture` as durable bridge contracts
- starting target-project adapter work from Lab without target-owned review

Escalated: None.

Promoted into durable docs:

- `docs/current-state/m08-fixture-backed-presentation-family-prototype-current-state.md`

## Current Decision Space

Human / Overseer should choose one next direction:

- pause Aura Lab with the family/state proof accepted
- run a packaging review to classify Lab-local, Core-neutral candidate, target-adaptable, and do-not-port outputs
- add Neutral Seed stale/partial smoke screenshots
- request UI/UX review of the implemented prototype screenshots
- prepare a Core-neutral transfer candidate in an Aura Core-owned session
- request target-owned Atlas/Sense review later

## Guardrails

- Do not execute Dev work from this packet.
- Do not infer a new milestone from completed handshakes.
- Do not treat Lab fixture content as product direction.
- Do not promote Lab terminology into Atlas, Sense, or Core.
- Do not define a durable bridge contract without Human / Overseer acceptance.
- Do not edit sibling projects from this packet.
- Do not run live/private/destructive actions.

## Stop Conditions

Stop and ask for Human / Overseer direction if:

- a new implementation task is requested but no runway has been written
- target-project adoption is proposed from Lab
- bridge or schema ownership is unclear
- the next action would require Atlas, Sense, or Core edits
- a live/private/destructive action is needed

## Verification

No verification is required while this packet waits for direction.

Latest accepted M08 verification:

```powershell
npm.cmd run verify:all
npm.cmd run smoke:electron
$env:AURA_LAB_ELECTRON_VISUAL_SMOKE='1'; $env:AURA_LAB_VISUAL_SMOKE_DIR='F:\Projects\AURA- Lab\.tmp\electron-visual-smoke'; npm.cmd start
Get-Process electron -ErrorAction SilentlyContinue
```

Accepted result:

```txt
verify:all passed
smoke:electron passed
direct visual smoke passed
no Electron process remained
visual-smoke-result.json status: passed
families_checked: briefing, neutral-seed
states_checked.briefing: normal, empty, stale, failed, partial, long-text
states_checked.neutral-seed: normal, empty, failed, long-text
viewports_checked: desktop, narrow
long-text and narrow captures overflowing: []
```

## Evidence

No active executor evidence is required.

## Handoff

Current executor is Human / Overseer.

Next expected action is a direction choice, not Dev execution.
