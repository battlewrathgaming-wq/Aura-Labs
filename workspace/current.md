# Current Workspace Packet

Status: Active
Updated: 2026-05-25
Owner: Overseer

## Coordination State

Active milestone: M29 - Presentation Head Improvement Rail
Last completed milestone: M29 / HS109 - Detail Hydration
Current executor: Dev
Current focus: Correct first-click reveal behavior for hydrated presentation slots.
Expected artifact filename: `workspace/DevHS112-focus-reveal-controller-correction.md`

## Current State

Aura Lab is in M29, the Presentation Head Improvement Rail.

Accepted M29 slices:

- H02 Loading State Parity.
- H03 View Intent Axis.
- HS97 Basis-First Expressive View.
- HS99 Basis Rail Polish.
- HS102 Details View Inspection.
- HS105 Presentation Slot Registry.
- HS107 View-Intent Slot Policy.
- HS109 Detail Hydration.

HS111 focus/reveal controller landed but is redirected for a narrow interaction correction.

Review finding:

- rows open on focus
- rows also toggle on click
- a normal mouse click may focus the row open and then immediately click-toggle it closed
- first-click reveal should leave a closed row open

The correction should preserve the existing surface and avoid broadening scope.

## Source Of Intent

Accepted source of intent:

- Human direction to hammer in the presentation feature set.
- `workspace/OverseerHS105-follow-on-feature-candidates.md`
- `workspace/DevHS111-focus-reveal-controller.md`
- `workspace/OverseerHS112-hs111-focus-reveal-correction.md`
- `docs/roadmap/m29-presentation-head-improvement-rail.md`
- `docs/roadmap/future-candidate-bank.md`
- `docs/adr/0001-smokeflash-split-timing.md`
- `docs/adr/0002-target-owned-presentation-adapters.md`

Read first:

- `AGENTS.md`
- `workspace/current.md`
- `workspace/overview.md`
- `workspace/critical/README.md`
- `workspace/critical/critical-terms.md`
- `workspace/critical/critical-assets.md`
- `workspace/DevHS111-focus-reveal-controller.md`
- `workspace/OverseerHS112-hs111-focus-reveal-correction.md`
- `src/renderer/app.js`
- `src/renderer/styles.css`
- `scripts/verify-renderer-shell.js`
- `package.json`

## Ordered Dev Runway

1. Inspect the current `setupSlotRevealController(...)` focus/click/keyboard behavior.
2. Fix first-click reveal so a closed hydrated row opens and remains open after mouse activation.
3. Preserve keyboard access: focus should still reveal, and `Enter` / `Space` should still toggle intentionally.
4. Keep hydrated detail inside the existing Readout Detail row; do not create a new drawer, modal, panel, navigation surface, or view mode.
5. Keep Summary, Basis, and Details as the only visible view options.
6. Update renderer-shell verification if needed so the interaction contract is represented.
7. Run the required verification, including Electron smoke because visible interaction/CSS behavior is involved.
8. Create `workspace/DevHS112-focus-reveal-controller-correction.md`.

## Acceptance Criteria

This correction is acceptable if:

- first mouse click on a closed hydrated row reveals detail and leaves it open
- focus reveal still works
- `Enter` / `Space` keyboard toggle still works
- default readout density remains compact
- no new drawer/modal/panel/navigation surface is introduced
- no bridge/runtime/source-project contract is introduced
- no target-project meaning, adapter, or adoption claim is introduced
- follow-on features remain parked
- verification commands and results are recorded in the DevHS

## Guardrails And Non-Goals

Allowed:

- renderer-local code changes
- small CSS only if needed for the existing Readout Detail row reveal behavior
- small verification updates
- small handoff updates

Not allowed:

- bridge payload changes
- preload/IPC/service command changes
- source-project semantics
- target-project adapters
- durable key-term promotion for reveal state
- lazy-loaded visual slot implementation
- virtualized list helper implementation
- row facets implementation
- overflow sentinel implementation
- reduced-motion gate implementation
- Lab fixture adapter implementation
- new drawer/modal/navigation surface
- production tooling implementation
- renderer security review
- live/private/network work
- destructive or git history operations

## Stop Conditions

Stop and return to Human / Overseer if:

- first-click reveal requires a broader interaction redesign
- the correction would make the default readout visibly denser
- the correction requires changing bridge payloads, IPC, preload, service commands, or fixture contracts
- verification failures point to Electron/runtime installation rather than this correction

## Required Verification

Run:

```powershell
npm.cmd run verify:renderer-shell
npm.cmd run verify:vocabulary
npm.cmd run verify:all
npm.cmd run smoke:electron
```

Run shared terminology verification if durable docs or visible copy change:

```powershell
cd F:\Projects\Docs\Aura-Project-Orchestration
npm.cmd run verify:terminology
```

## Evidence

Dev should fill this after work:

- Files changed:
- Interaction correction:
- First-click behavior:
- Keyboard behavior:
- Commands run:
- Results:
- Remaining risks:

## Dev Handoff

Expected output:

```txt
workspace/DevHS112-focus-reveal-controller-correction.md
```

The handoff must state whether the corrected focus/reveal controller is ready for Overseer acceptance and whether it remains ready to support a later lazy-loaded visual slot.

## Advisory Disposition

- Accepted: HS109 Detail Hydration.
- Redirected: HS111 Focus/Reveal Controller pending first-click correction.
- Deferred: renderer security review until closer to split/export readiness.
- Parked: lazy-loaded visual slot until registry/policy/hydration/reveal are accepted.
- Parked: virtualized list helper until registry/list pressure is clearer.
- Parked: row facets, overflow sentinel, reduced-motion gate, and Lab fixture adapter.
- Parked: Lab-only draggable layout board and screenshot comparison index as support tooling.
- Parked: target-project adapters and export/seeding.

## Residual Risks

- Existing inherited naming tripwires remain.
- `viewIntent` remains local renderer/test state only, not a durable bridge/runtime contract.
- M29 presentation-head work is still proven only on the Briefing family.
- Slot ids, lanes, emphasis, hydration keys, and reveal state are local renderer implementation details, not durable key terms.
- SmokeFlash/material harness code remains in the renderer bundle under ADR 0001 Lab-local allowance.
- SmokeFlash must still be split before export, seeding, or target-project consumption.
