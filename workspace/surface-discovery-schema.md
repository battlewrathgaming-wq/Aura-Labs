# Surface Discovery Schema

Status: Advisory intake schema
Owner: Aura Lab Overseer
Date: 2026-05-27

## Purpose

Use this schema when a source project wants to describe a user-facing surface for Lab presentation comparison.

This captures what needs to be displayed without making Lab the owner of source-project meaning. It is not a bridge contract, not a Dev runway, not an adapter, and not product adoption.

## Direction

Source project meaning comes first:

```txt
source-owned meaning
-> user-facing surface
-> primary boundary
-> anchor
-> support
-> readout states
-> Lab material candidates
```

Lab may compare Bridge -> Interface presentation methods after the source project has stated what the surface means.

## Schema

```md
# Surface Discovery: [Project] / [Surface Name]

Status: Discovery only
Source project: [Atlas / Sense / Core / Other]
Prepared by: [Role / person]
Date: [YYYY-MM-DD]

## 1. Surface Summary

Surface name:
Current location, if any:
User need:
One-sentence read:

## 2. Source Ownership

Project-owned terms:
Project-owned states:
Project-owned data meaning:
Terms Lab must preserve exactly:
Terms Lab may translate for presentation:
Terms Lab must avoid:

## 3. Primary Boundary

What is the display surface's boundary?

Boundary type:
- panel
- strip
- row
- card
- drawer
- rail
- overlay
- board zone
- other: [name]

Boundary role:
- glance
- inspection
- comparison
- queue
- status
- warning
- detail
- other: [name]

Boundary must communicate:
Boundary must not imply:
What belongs inside:
What belongs outside:

## 4. Anchor

What is the first thing the user should lock onto?

Anchor label:
Anchor value or object:
Anchor question answered:
Anchor priority:
- primary
- strong support
- quiet support

Anchor examples:
Empty anchor behavior:
Long/awkward anchor behavior:

## 5. Support

What helps the anchor make sense?

Support items:

| Item | Meaning | Importance | Source/basis | Freshness need | Can hide in detail? |
| --- | --- | --- | --- | --- | --- |
| [name] | [meaning] | primary/support/quiet | [source] | [yes/no] | [yes/no] |

Support grouping:
Support that must stay visible:
Support that may collapse:
Support that should never lead:

## 6. Readout States

What conditions must the surface communicate?

| State | Source-project meaning | User-facing wording now | Lab may reword? | Required visual treatment | Detail needed |
| --- | --- | --- | --- | --- | --- |
| loading | [meaning] | [wording] | yes/no | [treatment] | [detail] |
| empty | [meaning] | [wording] | yes/no | [treatment] | [detail] |
| current | [meaning] | [wording] | yes/no | [treatment] | [detail] |
| stale/aged | [meaning] | [wording] | yes/no | [treatment] | [detail] |
| partial | [meaning] | [wording] | yes/no | [treatment] | [detail] |
| blocked/gated | [meaning] | [wording] | yes/no | [treatment] | [detail] |
| failed/unavailable | [meaning] | [wording] | yes/no | [treatment] | [detail] |
| other | [meaning] | [wording] | yes/no | [treatment] | [detail] |

State ordering:
Most common state:
Most dangerous state to overstate:
State that needs the calmest treatment:

## 7. Basis, Freshness, And Gaps

Basis/source cue:
Last-read/freshness cue:
Coverage cue:
Known fields:
Gaps:
Warnings:
What must be visible in the first read:
What may live in detail:

## 8. Display Pressure

Pressure points:
- narrow width
- long copy
- missing key field
- many support values
- stale with newer diagnostic
- partial primary / complete support
- failed primary / usable fallback
- other: [name]

Worst-case content:
Smallest useful viewport:
What can be sacrificed first:
What cannot be sacrificed:

## 9. Candidate Lab Materials

Likely useful materials:
- Instrument Readout Strip
- Freshness / Basis Rail
- Warning / Gap Edge
- Progressive Detail Drawer
- Compact Value Stack
- Long Text Detail Block
- Availability Reason Treatment
- other: [name]

Material fit notes:
Material risks:
Parked material ideas:

## 10. Acceptance Shape

A good Lab response should provide:
- up to three presentation methods
- what each method improves
- what each method risks
- what source terms must remain untouched
- what states are covered
- what remains parked

This discovery becomes a request only when the source project or Human explicitly submits it.
```

## Minimum Useful Entry

If credits or time are tight, fill only:

- Surface name
- User need
- Project-owned terms
- Primary boundary
- Anchor
- Support items
- Readout states
- Display pressure

That is enough for Lab to compare presentation methods without guessing meaning.

