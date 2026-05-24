# UIUXHS39: Tactical Signal Readout Alignment

Date: 2026-05-24
Role: UI/UX
Project: Aura Lab
Milestone: Proposed next presentation milestone
Sequence: HS39
Source packet: workspace/current.md
Status: Advisory alignment, pending Human / Overseer acceptance

## Scope

This artifact aligns the next Aura Lab UI direction around a visible HTML/Electron presentation feature:

```txt
Tactical Signal Readout
```

Aura Lab is exploring high-quality presentation features for a combat-game-style app. The goal is not enterprise confidence reporting. The goal is to help the player/operator quickly understand the state of bridge-fed information under pressure.

This note does not implement code, write a Dev runway, define a durable bridge contract, create target-project adapters, add new presentation families, or import Atlas/Sense doctrine.

## Recommended Visible Feature Shape

The next prototype should be a combined:

```txt
Signal Readout Strip + Inset Feed Detail Drawer
```

The strip should sit near the primary reading path and function like a tactical instrument band. It gives the immediate answer:

```txt
Is this feed live, scanning, aged, partial, lost, fallback, or no contact?
```

The detail drawer should be secondary and inspectable. It should expand or reveal more feed/source/freshness detail without turning the first screen into a debug panel.

Recommended visible elements:

- signal state label
- embedded status light
- small pips or bars for feed health/completeness
- last-read or last-known timestamp
- compact source/feed count
- tactical summary line
- secondary detail drawer for feed/source/diagnostic facts

This should feel like a physical instrument mounted into the presentation surface: inset, layered, compact, and readable at a glance.

## What To Accept From Confidence / Trust Direction

Keep the useful presentation intent, but rename and restyle it.

Accept:

- the need to show whether bridge-fed information is usable right now
- clear freshness and last-known communication
- distinction between live, stale, partial, failed, loading, and empty
- source/feed visibility in the primary reading path
- compact diagnostics as secondary instrumentation
- progressive disclosure for detail
- restrained motion for state changes

Reject the enterprise framing:

- `confidence`
- `trust`
- `certainty`
- `verified`
- `score`
- `rank`
- `authority`

The player-facing/readout-facing question should become:

```txt
What is the signal state?
```

Not:

```txt
How confident is the system?
```

## Combat-Game Terminology Recommendations

Use language that sounds like tactical feed state, not compliance reporting.

Recommended visible language:

| Current / Enterprise Term | Tactical Replacement |
| --- | --- |
| confidence | signal |
| trust | feed state |
| certainty | readout status |
| verified | live feed |
| stale | aged intel |
| failed | signal lost |
| loading | scanning |
| empty | no contact |
| partial | feed gaps |
| source | feed |
| freshness | signal age |
| last read | last ping |
| missing fields | gaps |
| diagnostics | instruments |
| fallback | last known |

Recommended state labels:

```txt
LIVE
SCANNING
AGED
PARTIAL
LOST
NO CONTACT
FALLBACK
```

Recommended short summaries:

- `Live feed. Current bridge read is available.`
- `Scanning. Waiting for feed lock.`
- `Aged intel. Showing last known read.`
- `Partial feed. Some fields are missing.`
- `Signal lost. Current feed unavailable.`
- `No contact. No presentable feed returned.`
- `Fallback. Last known data is displayed.`

Use this language as Lab-local presentation copy. Do not promote it into a target product or durable bridge vocabulary.

## State-By-State Visual Treatment

### Live / Normal

Visual posture:

- cool cyan or green-blue status light
- stable pips or short signal bars
- crisp title and summary
- source/feed count visible but compact
- last ping reads current

Behavior:

- should feel active but calm
- no constant alarm animation
- optional faint sweep mark only if it does not distract

Message:

```txt
LIVE
Current feed available.
```

### Scanning / Loading

Visual posture:

- low-intensity scanning line or subtle shimmer
- pending pips, not filled bars
- skeleton/inset placeholders that preserve layout
- no fake populated data

Behavior:

- should feel like acquiring signal, not blank or broken
- motion should be short, soft, and disabled/reduced under `prefers-reduced-motion`

Message:

```txt
SCANNING
Acquiring feed.
```

### Aged / Stale

Visual posture:

- amber signal light
- clock/age treatment in the strip
- last-known band or inset tag
- content remains readable but visually marked as aged

Behavior:

- should feel usable but time-risk aware
- avoid red alarm unless feed is actually lost

Message:

```txt
AGED
Showing last known read.
```

### Partial / Feed Gaps

Visual posture:

- segmented bars or pips with visible gaps
- amber/cyan mixed treatment
- known items stay bright; missing/gap items are subdued
- missing details can sit in the drawer

Behavior:

- should show incomplete information without panic
- should make known versus missing scannable

Message:

```txt
PARTIAL
Feed gaps detected.
```

### Lost / Failed

Visual posture:

- restrained red or muted red-orange signal light
- broken signal line, disconnected pips, or dimmed bars
- last-known/fallback slot if data exists
- content should not look current

Behavior:

- should communicate loss clearly without noisy alarmism
- should not overclaim cause or recovery

Message:

```txt
LOST
Current feed unavailable.
```

If fallback data exists:

```txt
FALLBACK
Displaying last known read.
```

### No Contact / Empty

Visual posture:

- dim neutral light or hollow status marker
- quiet empty instrument surface
- no contact line in the primary area
- no fake detail density

Behavior:

- should feel intentionally empty, not broken
- should avoid failed-state red unless a failure occurred

Message:

```txt
NO CONTACT
No presentable feed returned.
```

## Interaction And Disclosure Recommendations

Use a combined strip and detail drawer.

The strip is always visible. The drawer opens for inspection.

Recommended drawer contents:

- feed/source list
- last ping / signal age
- known fields
- feed gaps
- fallback/last-known note
- compact instrument diagnostics

Recommended interaction:

- single explicit disclosure control
- no hover-only critical information
- drawer opening should not resize the entire shell in a surprising way
- drawer should preserve text containment at narrow widths
- diagnostics should remain below or beside feed facts, not above the primary signal readout

Native `<details>` / `<summary>` may be enough if it can be styled as an inset tactical drawer. If custom behavior is needed later, it should remain small and accessible.

## Motion Guidance

Use motion only when it clarifies state.

Good motion:

- scanning sweep for loading/acquiring
- brief pulse when state changes to live
- subtle amber pulse for aged intel
- drawer reveal transition
- pips filling or dimming when feed state changes

Avoid:

- constant decorative glows
- fast blinking alarms
- looping background motion
- motion that makes text harder to read
- relying on motion as the only state cue

Respect reduced-motion preferences. In reduced motion, use static status lights, bars, and text labels.

## Physical Surface And Visual Design Guidance

The readout should feel physically embedded into the Aura surface.

Recommended material language:

- inset bands
- layered panels
- dark glass or translucent material with fallback
- field-grid texture used subtly
- hairline borders
- small illuminated pips
- low-depth shadows
- restrained glow around active signal only
- diagonal or sweep marks used as instrument detailing

Avoid generic dashboard cards. The readout should not look like enterprise analytics. It should feel like a combat-game information surface: compact, legible, physical, and calm under pressure.

## Layout Guidance For Narrow Desktop Shells

Narrow shells should preserve the readout before secondary detail.

Recommended narrow behavior:

- strip stacks label, summary, and pips cleanly
- state label and status light remain visible without truncation
- source/feed details move into the drawer
- long feed/source labels wrap or compress
- title scale should not dominate the first screen
- diagnostics collapse into compact instrument rows
- no horizontal scrolling

The first read at narrow width should still answer:

```txt
What is the signal state, and is this feed usable?
```

## Suggested Data / Fixture Needs

Use existing fixture payloads first. If small presentation helpers are needed, keep them Lab-local and provisional.

Useful existing or derived fields:

```txt
state
view_status
last_read_at
sources
source_labels
missing_fields
warnings
fields
attention_items
error
family
```

Possible Lab-local presentation helpers:

```txt
signal_state
signal_summary
signal_age_label
feed_count
gap_count
fallback_label
instrument_notes
```

These are display helpers only. They should not be documented as a durable bridge contract.

## What To Reject Or Park

Reject:

- enterprise confidence reporting
- confidence scores
- trust rankings
- source authority levels
- generic dashboard-card treatment
- broad visual-smoke matrices as the milestone goal
- elaborate fixture taxonomy
- durable bridge/data contracts
- target-project adapters
- Aura Core ownership claims
- Atlas or Sense doctrine

Park:

- new presentation families
- full tactical HUD family
- Operator Workbench
- timeline/activity surface
- comparison/delta readout
- source-first standalone view
- attention-first standalone view
- broad scenario packs
- screenshot review workbench
- shared component extraction
- framework migration
- heavy animation system

The future ideas are still promising. They should wait until the Tactical Signal Readout proves the physical presentation language.

## Suggested Dev Acceptance Criteria Focused On Visual Presentation Quality

A future Dev slice should be accepted if:

- Tactical Signal Readout is visible near the primary reading path.
- The readout uses tactical signal language, not enterprise confidence language.
- Live, scanning, aged, partial, lost, and no-contact states are visually distinguishable.
- The readout includes meaningful status lights, pips, bars, sweep marks, or similar embedded signals.
- Source/feed freshness reads like live intel: last ping, last known, feed count, or signal age.
- Failed/stale states provide last-known or fallback posture where available.
- Feed Detail Drawer is visible or clearly reachable.
- Diagnostics read as compact instruments, not a debug dump.
- Motion, if present, clarifies state and respects reduced motion.
- Narrow desktop layout remains readable with no horizontal overflow.
- Neutral Seed remains Lab-local and generic.
- No new family, target adapter, bridge contract, or Core ownership claim is introduced.

Minimum verification can stay small:

- `npm.cmd run verify:all`
- `npm.cmd run smoke:electron`
- process cleanup check
- a small representative screenshot review for normal/live, stale/aged, failed/lost, and one long/narrow case

Verification supports the presentation. It should not become the acceptance story.
