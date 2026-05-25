# Authority Window TTL Strip

Status: accepted
Material id: `mat-authority-window-ttl-strip`
Schema source: `workspace/DisplayMaterialSchemasHS86-guided-material-production.md`

## Purpose

Show a bounded authority window in one compact strip: state, short active interval, cooldown or blocked reason, and a detail path.

## Slots

- `source-owned label`
- `state label`
- `status light`
- `authority note`
- `availability note`
- `effect note`
- `readout age`
- `warnings`
- `detail reveal`
- `narrow summary`

## States

- idle
- active-window
- captured
- rejected
- unchanged
- timeout
- cancelled
- cooldown
- blocked
- shortcut-unavailable
- manual-path

## Content Lanes

- identity / label: short material label plus optional source-owned label
- primary value: current state
- secondary values: TTL, cooldown, manual path, handoff marker
- state / availability: text state plus non-color-only status light
- basis / source-owned placeholder: short authority cue
- freshness / age: TTL or cooldown interval
- gaps: missing shortcut, unavailable authority, no active interval
- warnings: bounded authority warning when active state could be overread
- detail rows: reason, manual path, blocked basis, next eligible moment
- narrow summary: state plus TTL/reason

## Visual Structure

```txt
[status light] [state label] [TTL/cooldown chip] [short reason or handoff] [detail affordance]
```

The TTL/cooldown chip should avoid layout jump while time changes.

## Interaction/reveal

- Detail reveal opens reason, authority note, manual path, and warnings.
- Captured/handoff marker is display-only.
- No dead detail affordance when no detail exists.

## Narrow Behavior

Priority order:

1. state label
2. TTL/cooldown chip
3. blocked/manual reason
4. detail affordance
5. longer basis/source-owned label

## Staged Material Needs

- idle
- active-window with 3s TTL
- captured
- timeout
- cooldown with 5s TTL
- blocked
- manual path
- long shortcut text

## Verification Minimum

- `npm.cmd run verify:all`
- visual review for idle, active, timeout, cooldown, blocked, manual-path
- narrow viewport screenshot review
- reduced-motion check if countdown animation exists

## Risks / Parked Notes

- Active/listening-like states can imply background behavior if TTL is hidden.
- Blocked state can look like failure unless authority reason is visible.
- Source-owned lifecycle labels remain source-owned examples.
- Runtime behavior and SmokeFlash implementation are parked.

## Examples / Screenshots

None yet.
