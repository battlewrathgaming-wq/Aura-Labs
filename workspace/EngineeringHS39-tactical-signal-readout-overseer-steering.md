# EngineeringHS39: Tactical Signal Readout Overseer Steering

Date: 2026-05-24
Role: Engineering specialist
Project: Aura Lab
Status: Steering note for Overseer

## Purpose

This note is not a UI/UX prompt and not a Dev runway.

It gives Overseer steering context for correcting Aura Lab's next presentation direction around a combat-game information-display feature.

## Steering Correction

Aura Lab should frame the next visible presentation feature as:

```txt
Tactical Signal Readout
```

The previous `Trust Ribbon` / `Confidence View` language should be treated as an internal stepping stone, not the product-facing direction.

For a combat-game-style app, the presentation problem is not:

```txt
How confident are we?
```

It is:

```txt
What is the tactical state of this feed, and how should the player/operator read it under pressure?
```

## Why This Is Useful

Bridge-fed game data needs fast visual interpretation.

The player/operator should be able to understand at a glance:

- whether a feed is live
- whether data is scanning/acquiring
- whether intel is aged or last-known
- whether only partial feed data is available
- whether signal is lost
- whether the UI is showing fallback information
- where more feed/source detail lives if needed

This makes the feature directly useful to a combat-game interface instead of feeling like enterprise trust reporting.

## Recommended Visible Feature Shape

Recommended next prototype:

```txt
Tactical Signal Readout
```

Likely physical form:

- a compact HUD/readout strip near the primary content
- embedded signal pips or status lights
- feed/source count rendered as tactical markers
- short status labels such as `LIVE`, `SCANNING`, `AGED`, `PARTIAL`, `LOST`, `FALLBACK`
- a secondary feed detail panel or drawer for source/freshness/diagnostic detail
- subtle scan/sweep/pulse only where it clarifies state

This can replace or absorb the earlier Trust Ribbon + Confidence Detail Panel idea.

## Suggested Game-Facing Vocabulary

Prefer:

- signal
- feed
- live
- scanning
- acquiring
- aged
- last known
- partial
- feed gap
- lost
- fallback
- contact
- readout
- telemetry
- source feed

Avoid in visible UI:

- confidence
- trust score
- certainty score
- evidence authority
- source rank
- verified truth

`source`, `freshness`, and `certainty` can remain internal or technical concepts, but the visible presentation should use tactical readout language.

## State Treatment Direction

### Live / Normal

- calm active signal
- cool/cyan or green signal light
- source/feed count visible
- concise status phrase: `LIVE FEED` or `SIGNAL CLEAN`

### Scanning / Loading

- acquisition tone
- restrained sweep or pulse
- no empty-state confusion
- phrase such as `SCANNING` or `ACQUIRING FEED`

### Aged / Stale

- amber tone
- last-known emphasis
- phrase such as `AGED INTEL` or `LAST KNOWN`
- avoid alarm unless the state is actually lost

### Partial / Feed Gaps

- amber segmented signal
- feed count such as `2/3 FEEDS`
- phrase such as `PARTIAL FEED` or `GAPS DETECTED`

### Lost / Failed

- restrained red or muted danger tone
- phrase such as `SIGNAL LOST`
- fallback state visible if available
- avoid noisy failure theatrics

### No Contact / Empty

- intentional absence
- phrase such as `NO CONTACT` or `NO FEED`
- should not look like broken UI

## What Overseer Should Ask UI/UX To Resolve

If Overseer routes this to UI/UX, the useful questions are:

- Should the readout be a strip, panel, HUD band, inset module, or strip plus detail drawer?
- What visible vocabulary should replace confidence/trust language?
- What status colors, lights, pips, and motion should represent live/scanning/aged/partial/lost/no-contact?
- How should source/freshness detail appear without feeling like debug output?
- How should this remain game-like without becoming noisy decoration?
- What is the minimum visual acceptance bar for "cool, readable, calm, useful"?

## What Should Remain Parked

Park:

- broad view-intent framework
- new presentation families
- timeline/activity implementation
- comparison/readout implementation
- source-first or attention-first standalone views
- screenshot diagnostic systems
- broad visual-smoke matrices
- fixture taxonomy expansion
- durable bridge/data contracts
- Atlas/Sense target doctrine
- Core ownership claims

Timelines remain promising, especially as a future `Signal History` or `Last Known Timeline`, but they should not displace the first Tactical Signal Readout prototype.

## Recommended Overseer Action

Overseer should amend or replace the current M11 direction so the next packet is presentation-first and combat-game framed.

Recommended milestone framing:

```txt
M11 - Tactical Signal Readout
```

Recommended next role:

```txt
UI/UX alignment pass before Dev, unless Overseer already has enough direction to write a tightly bounded Dev runway.
```

Recommended acceptance posture:

- judge the work primarily by visual presentation quality and usefulness
- keep verification minimal and supportive
- do not let fixture axes, smoke coverage, or diagnostics define the feature

