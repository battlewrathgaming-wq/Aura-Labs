# Overseer HS112 - HS111 Focus/Reveal Correction

Status: Redirected
Date: 2026-05-25
Role: Overseer

## Files Reviewed

- `workspace/current.md`
- `workspace/DevHS111-focus-reveal-controller.md`
- `src/renderer/app.js`
- `src/renderer/styles.css`
- `scripts/verify-renderer-shell.js`

## Review Summary

HS111 is not accepted yet.

The implementation is well-scoped and uses the existing Readout Detail surface, but the current focus/click interaction has a likely activation flaw:

- rows open on `focus`
- rows also toggle on `click`
- on a normal mouse activation, focus may open the row before the click handler runs
- the click handler can then immediately toggle the row closed

That means a closed row may fail to reveal on first click, even though keyboard focus and keyboard toggle are present. This is small, but it is exactly the kind of interaction roughness the controller should avoid before acceptance.

## What Is Accepted In Principle

These parts look directionally correct:

- renderer-local `setupSlotRevealController(...)`
- existing Readout Detail proof path
- no new drawer, modal, panel, navigation surface, or view mode
- compact default rows
- hydrated detail rendered inside existing rows
- local `data-presentation-reveal`
- `aria-expanded`
- keyboard support for `Enter` / `Space`
- Electron smoke was correctly run because visible CSS/interaction changed

## Required Correction

Dev should revise the controller so a first mouse click on a closed row reveals detail and leaves it open.

Acceptable approaches include:

- make click open-only when the row was closed before pointer activation
- use pointer/mouse state to avoid focus-open followed by click-close
- put toggle behavior on a dedicated existing-row affordance if that stays inside the current surface and does not add a new panel or mode

Do not broaden the feature.

## Verification Expected

Run:

```powershell
npm.cmd run verify:renderer-shell
npm.cmd run verify:vocabulary
npm.cmd run verify:all
npm.cmd run smoke:electron
```

Run shared terminology verification only if durable docs or visible copy changes:

```powershell
cd F:\Projects\Docs\Aura-Project-Orchestration
npm.cmd run verify:terminology
```

## Decision

Redirect HS111 to Dev for a narrow interaction correction.

Expected handoff:

```txt
workspace/DevHS112-focus-reveal-controller-correction.md
```

The correction handoff should say how first-click reveal behaves and whether keyboard focus/toggle still works.
