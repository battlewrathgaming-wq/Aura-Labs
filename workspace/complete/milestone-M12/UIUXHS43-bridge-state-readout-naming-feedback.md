# UIUXHS43: Bridge State Readout Naming Feedback

Date: 2026-05-24
Role: UI/UX
Project: Aura Lab
Sequence: HS43
Status: Advisory feedback for Overseer

## Scope

This note answers the open UI/UX naming question after M11 acceptance:

```txt
Should Presentation State Readout be renamed to Bridge State Readout or Source State Readout?
```

This is naming and presentation-boundary feedback only. It does not implement code, write a Dev runway, define a bridge contract, or create target-project adoption claims.

## Recommendation

Recommend renaming:

```txt
Presentation State Readout
```

to:

```txt
Bridge State Readout
```

## Reasoning

`Bridge State Readout` is the most accurate name because Aura Lab is presenting information after it has crossed an abstraction layer between backend/source systems and the front-end presentation surface.

The name fits the accepted Aura Lab boundary:

- Aura Lab owns post-bridge presentation.
- The readout displays the condition of bridge-fed information.
- The UI does not own backend truth.
- The component does not define a durable bridge contract.
- The name remains neutral enough for later project-owned adaptation.

`Presentation State Readout` is safe but too generic. It sounds like an internal UI state component rather than a meaningful post-bridge information display.

`Source State Readout` is less accurate because the readout should not imply direct source ownership or source-truth authority. It shows what the bridge-fed presentation can say about freshness, availability, gaps, fallback, and basis.

## Recommended Visible Meaning

The component should mean:

```txt
A physical/HUD-like readout that presents the current bridge-fed information state without claiming ownership of the underlying truth.
```

Keep accepted visible labels:

- `CURRENT`
- `UPDATING`
- `AGED`
- `PARTIAL`
- `UNAVAILABLE`
- `FALLBACK`
- `NO DATA`

Avoid reintroducing tactical/combat default wording.

## Acceptance Checks

Overseer can accept this naming feedback if:

- the name reinforces Aura Lab's post-bridge presentation boundary
- it does not imply a durable bridge schema or contract
- it does not claim backend/source truth
- it remains portable across future target-owned review
- it preserves the accepted neutral state labels from M11

## Parked

- Code rename or implementation work
- Durable terminology docs
- Target-project adoption language
- Core-owned transfer prompt
- Source authority or confidence model
