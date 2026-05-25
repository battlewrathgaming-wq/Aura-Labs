# Display Material Repeat Cycle Candidate

Status: Deferred candidate

## Outcome

Use the M29 proving-bench rules to produce a small batch of reusable display materials without turning each material into a separate milestone.

This was previously staged as M30. After M29 closure, M30 was redirected to a smaller presentation resilience gate. This candidate remains useful, but it is not the active M30 milestone.

## Likely Runways

- Choose two or three material candidates from the accepted library.
- Produce or refine them through the same material acceptance pattern.
- Keep each worker packet bounded to one material or one closely related pair.
- Update material pages and the ledger only when acceptance is reached.
- Park weak or unclear candidates without forcing them into implementation.

## Acceptance Criteria

This candidate is complete when promoted into a future milestone and:

- a small batch of materials has been accepted, adapted, or parked
- each accepted material has a canonical material page
- the ledger can direct a future worker to the right material without rereading milestone history
- acceptance criteria remained consistent across the batch
- workshop tooling stayed support-only

## Non-Goals

- target-project adapter work
- composed display output work unless explicitly opened after material acceptance
- export/seeding
- broad workflow refactor

## Dependencies

- M29 accepted proving-bench rules
- stable material library structure
- Human or UI/UX direction on which material candidates matter next
