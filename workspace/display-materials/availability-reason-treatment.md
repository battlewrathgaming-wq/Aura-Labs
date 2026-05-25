# Availability Reason Treatment

Status: pending
Material id: `mat-availability-reason-treatment`
Schema source: `workspace/UIUXHS123-guided-display-material-expansion.md`

## Purpose

Keep absence and limited-availability states distinct without turning every case into an alarm.

## Slots

- `state label`
- `status light`
- `availability note`
- `readout basis`
- `fallback basis`
- `authority note`
- `source-owned label`
- `detail row`
- `warnings`
- `narrow summary`

## States

- no data
- unavailable
- blocked / source-owned placeholder
- failed
- degraded / source-owned placeholder
- fallback
- aged
- no-scan / source-owned placeholder

## Content Lanes

- identity / label: availability case or parent material label
- primary value: short state or previous value for fallback only
- secondary values: reason text, last read, missing item count
- state / availability: visible state plus reason
- basis / source-owned placeholder: current basis, fallback basis, or owner/layer note
- freshness / age: last read, fallback age, or unavailable current read
- coverage / known fields: what is present or absent
- gaps: what prevents a fuller display
- warnings: only when limitation needs caution
- detail rows: reason, basis, owner/layer note, fallback note
- long text: optional explanation in detail only
- narrow summary: state plus one reason

## Interaction / Reveal

Primary surfaces should show a one-line reason. Detail reveal carries owner/layer notes, fallback basis, and longer explanation. No unavailable case should show a fake primary value.

## Narrow Behavior

Keep state and reason visible before any supporting explanation. Fallback should keep previous/fallback status clear. Source-owned no-scan or blocked placeholders must stay qualified.

## Staged Material Needs

- no data
- unavailable
- blocked
- failed
- fallback
- aged
- source-owned no-scan placeholder

## Verification Minimum

- `npm.cmd run verify:all`
- distinct no data, unavailable, blocked, failed, fallback, and aged cases
- non-color-only status
- narrow one-line reason
- detail row review for fallback and owner/layer notes

## Risks / Parked Notes

- `blocked`, `degraded`, and `no scan` may be source-owned by context.
- Failed, unavailable, blocked, fallback, and no data must not collapse into one UI treatment.
- Strong warning styling can overstate normal absence.

## Examples / Screenshots

None yet.
