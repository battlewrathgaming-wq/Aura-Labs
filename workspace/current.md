# Current Workspace Packet

Status: Active Engineering advisory runway
Updated: 2026-05-24
Owner: Overseer

## Coordination State

Active milestone: M06 - Fixture-Backed Presentation Family Feasibility
Roadmap source: UIUXHS27 advisory accepted by Overseer
Sequence: HS28
Previous accepted handshake: `workspace/complete/milestone-M05/OverseerHS26-m05-closure.md`
Current executor: Engineering
Current focus: assess safe implementation shape for fixture-backed presentation families
Expected EngineeringHS filename: `workspace/EngineeringHS28-fixture-backed-presentation-family-feasibility.md`
Archive target on milestone completion: `workspace/complete/milestone-M06/`

## Purpose

This is the only active executable work packet for Aura Lab.

Aura Lab has accepted a durable project boundary: portable post-bridge display mapping and presentation tooling. M04 proved one visual surface. M05 hardened visual smoke and long-text pressure. UI/UX HS27 recommends the next milestone as fixture-backed presentation families, but specifically recommends Engineering feasibility first so implementation shape is understood before UI/UX writes a detailed family spec or Dev prototypes family switching.

This packet asks Engineering to advise on how fixture-backed presentation families could be modeled safely. It does not ask for code implementation.

## Source Of Intent

Accepted into this packet:

- `workspace/UIUXHS27-non-authoritative-milestone-recommendations.md`: recommends Engineering feasibility before UI/UX family spec and Dev prototype.
- `docs/statements/post-bridge-presentation-boundary.md`: Aura Lab focuses on portable post-bridge display mapping and presentation tooling.
- `docs/current-state/m04-visual-prototype-current-state.md`: accepted one-screen visual prototype.
- `docs/current-state/m05-visual-smoke-hardening-current-state.md`: accepted smoke wrapper and long-text visual smoke hardening.
- `workspace/complete/milestone-M05/OverseerHS26-m05-closure.md`: M05 closed and no Dev runway active afterward.

Deferred:

- UI/UX Presentation Family Spec.
- Dev prototype for family switching.
- Packaging review.
- target-project adapter work.
- durable post-bridge presentation contract.
- durable upstream bridge/data contract.
- framework or stack choice.
- Aura Core transfer.

Rejected:

- jumping directly to Dev implementation.
- implementing all proposed families at once.
- treating Lab fixtures as target-project doctrine.
- treating `aura.projectBriefing` as a durable bridge contract.

Escalated: None.

Promoted into durable docs: None for M06 yet.

## Required Reading

Engineering must read:

- `AGENTS.md`
- `workspace/README.md`
- `workspace/overview.md`
- `workspace/00-dot-protocol.md`
- `workspace/current.md`
- `workspace/UIUXHS27-non-authoritative-milestone-recommendations.md`
- `docs/index.md`
- `docs/README.md`
- `docs/statements/post-bridge-presentation-boundary.md`
- `docs/current-state/m04-visual-prototype-current-state.md`
- `docs/current-state/m05-visual-smoke-hardening-current-state.md`
- `workspace/complete/milestone-M05/OverseerHS26-m05-closure.md`
- `package.json`
- `src/main/main.js`
- `src/services/serviceRegistry.js`
- `src/renderer/index.html`
- `src/renderer/styles.css`
- `scripts/electron-visual-smoke.ps1`
- `scripts/verify-renderer-shell.js`
- `scripts/verify-services.js`

Optional read-only references inside Aura Lab:

- `.tmp\electron-visual-smoke\visual-smoke-result.json` if present

Do not inspect or edit sibling projects for this packet.

## Ordered Engineering Runway

1. Confirm cwd is `F:\Projects\AURA- Lab`, inspect git tree health, and read all required sources before writing the advisory.
2. Summarize the current post-bridge presentation architecture:
   - service command / bridge boundary
   - fixture/test mode shape
   - renderer mapping shape
   - visual smoke selection shape
   - verification hooks
3. Evaluate safe modeling options for fixture-backed presentation families:
   - separate service commands
   - separate fixture modes
   - neutral fixture registry
   - renderer-level family switch
   - any smaller option already implied by the code
4. Recommend the smallest implementation path that could later prove family switching without framework migration or durable bridge-contract work.
5. Define how visual smoke should select and report:
   - family
   - state
   - viewport
   - long-text pressure
   - overflow evidence
   - screenshots/result JSON
6. Classify likely outputs as:
   - Lab-local
   - Core-neutral candidate
   - target-adaptable only after target-owned review
   - do-not-port
7. Create `workspace/EngineeringHS28-fixture-backed-presentation-family-feasibility.md` with findings, recommendation, risks, stop conditions for Dev, and suggested next role/action.

## Guardrails And Non-Goals

- Do not implement code.
- Do not redesign UI.
- Do not write a Dev runway.
- Do not define a durable bridge/data contract.
- Do not create a shared component library.
- Do not choose a UI framework or migrate stack.
- Do not edit Atlas, Sense, Aura Core, EVE-Threat-Overlay, or Bughunt.
- Do not import Atlas evidence doctrine or Sense tactical doctrine.
- Do not treat Lab fixture content as product direction.
- Do not run live/private/destructive actions.
- Do not stage generated `.tmp`, screenshots, result JSON, cache, or dependency artifacts.

## Stop Conditions

Stop and report back if:

- safe family modeling appears to require a durable bridge contract
- target-project doctrine is needed to answer the feasibility question
- implementation would require a framework migration
- sibling-project inspection or edits become necessary
- live/private/destructive actions become necessary
- the current code shape contradicts the accepted post-bridge presentation boundary

## Required Verification

No runtime verification is required.

Engineering should perform read-only source inspection and cite files reviewed.

Optional non-mutating checks are allowed if useful:

```powershell
npm.cmd run verify:all
```

If run, record the result in the advisory. Do not run GUI/Electron smoke unless specifically needed for the feasibility read.

## Evidence

Engineering updates this section only if this packet is executed in-place.

Verification or checks run:

```txt
Not yet run.
```

Files reviewed:

```txt
Not yet recorded.
```

Findings:

```txt
Not yet recorded.
```

## Engineering Handoff

Engineering must create:

```txt
workspace/EngineeringHS28-fixture-backed-presentation-family-feasibility.md
```

The handoff must include:

- files reviewed
- current architecture summary
- modeling options considered
- recommended smallest path
- visual smoke strategy
- classification of Lab-local / Core-neutral / target-adaptable / do-not-port outputs
- risks
- stop conditions for any later Dev packet
- recommended next role/action
