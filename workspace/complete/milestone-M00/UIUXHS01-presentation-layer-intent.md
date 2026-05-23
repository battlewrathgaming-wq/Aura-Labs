# UIUXHS01: Presentation Layer Intent

Date: 2026-05-23
Role: UI/UX
Project: Aura Lab
Milestone: M00 - Aura Lab Boot
Sequence: HS01
Source packet: workspace/current.md
Status: Advisory, pending Human/Overseer acceptance

## Scope

This artifact defines the first-pass UI/UX intent for Aura Lab's light HTML presentation layer before Dev implementation begins.

It focuses on first-screen purpose, at-a-glance project-data meaning, bridge-aware data states, trust and certainty language, source and freshness visibility, visual hierarchy, milestone shape, non-goals, and open Human/Overseer questions.

This is advisory only. It does not define a binding bridge contract, implementation runway, product doctrine, or durable project truth unless accepted by the Human or Overseer.

## Source Files Read

- `AGENTS.md`
- `workspace/overview.md`
- `workspace/current.md`
- `workspace/00-dot-protocol.md`
- `docs/README.md`
- `package.json`
- `F:\Projects\Docs\Aura-Agent-Coordination\roles\README.md`
- `F:\Projects\Docs\Aura-Agent-Coordination\roles\ui-ux\README.md`
- `F:\Projects\Docs\Aura-Agent-Coordination\roles\ui-ux\prompt.md`
- `F:\Projects\Docs\Aura-Agent-Coordination\relay\terms.md`
- `F:\Projects\Docs\Aura-Agent-Coordination\workspace-structure-authority.md`
- Supplemental context: `README.md`, `INITIALIZE.md`, `src/main/preload.js`, `src/renderer/index.html`, `src/renderer/app.js`

## Intent Read

Aura Lab is booting as a lean presentation surface for Aura project data. The first experience should make the current state of a project understandable without asking the user to inspect files, logs, or bridge internals.

The inherited Aura Core scaffold is useful local rigging: Electron shell, narrow preload bridge, service registry, verification scripts, and renderer shell. It is not the product direction by itself.

The UI's first responsibility is trust. It should show what it knows, where that information came from, how fresh it is, and whether any part of the view is loading, empty, stale, failed, or incomplete.

## First-Screen Purpose

The first screen should answer: "What is this Aura project, what is its current coordination state, and how confident is the app about that view?"

At a glance, the user should understand:

- Project identity: project name, active milestone, current packet, current executor, current focus.
- Work state: current sequence, expected handoff or artifact, previous accepted handoff if available.
- Freshness: when the bridge last read project data and whether the view is live, stale, partial, or unavailable.
- Source visibility: which local source or bridge path supplied the displayed state.
- Action posture: whether the screen is informational only, ready for review, blocked, or waiting for Human/Overseer acceptance.

The first screen should feel like a compact operational briefing, not a marketing page and not a dense admin console.

## Core UI/UX Principles

- Make certainty visible. Do not present inferred, missing, stale, or partially loaded data as settled truth.
- Lead with human meaning. Show "Current focus: presentation-layer intent" before lower-level implementation details.
- Keep the first viewport scan-friendly. Use a clear page title, one state summary, and grouped facts with concise labels.
- Separate project state from app health. "Bridge failed" is not the same as "project blocked."
- Keep inherited scaffold quiet. Window controls and service readiness can remain visible, but should not dominate the project presentation surface.
- Avoid hidden background meaning. If data is refreshed, stale, filtered, or partly unavailable, the UI should say so.
- Use restrained visual state grammar. Reserve strong color for failure, blocked, stale, or user-attention states.
- Prefer plain labels over clever labels. This surface is for trust and orientation.

## Bridge-Aware Data Presentation Model

Recommended first-pass model:

- View status: a top-level state for the bridge read: loading, ready, empty, stale, failed, or partial.
- Project summary: project name, root path if appropriate, active milestone, current packet, current executor, current focus, expected artifact.
- Coordination summary: sequence, previous accepted handshake, archive target, status of advisory or execution work.
- Source summary: source file or bridge endpoint names, last successful read time, read scope, and any skipped or unavailable sources.
- Confidence summary: plain-language certainty level for the view, such as "verified from workspace/current.md" or "partially available; source file missing."
- Details area: expandable or lower-priority source list, bridge diagnostics, and scaffold service information.

The UI should treat bridge data as source-attested project state, not as anonymous app memory. Each important fact should be traceable to a source label or source group, even if the source is initially just "workspace/current.md via bridge."

## Required UI States

Loading:
Show the project shell immediately with stable layout. Use copy like "Reading project state..." and keep last-known data out of primary prominence unless explicitly labeled as previous data.

Empty:
Use this when the bridge succeeds but finds no project packet or no presentable project data. Copy should say "No current project packet found" or "No presentation data available yet" rather than "Ready."

Populated:
Show the project briefing, source labels, freshness timestamp, and any current status. Avoid burying stale or partial warnings below the fold.

Stale:
Use this when displayed data is from a previous successful read or exceeds an accepted freshness threshold. Copy should say "Showing last read from [time]" and avoid implying the current packet is definitely unchanged.

Failed:
Use this when the bridge or required read fails. Show a concise failure state, the failed source or operation if safe, and whether any previous data is being shown. Do not replace project state with raw stack traces.

Partial:
Use this when some sources load and others do not, or when optional fields are missing. Keep available facts visible, but label the view "Partial" and identify what is missing.

## Trust And Certainty Language

Recommended labels:

- "Verified from source" for values directly read from a named local source.
- "Reported by bridge" for values supplied through bridge output where the underlying source is not visible in the UI.
- "Not provided" for absent optional values.
- "Unavailable" for values that could not be read because a source or bridge call failed.
- "Last read" for freshness timestamps.
- "Showing last successful read" for stale retained data.
- "Partial view" when any important source is missing or failed.
- "Pending acceptance" for advisory artifacts not yet accepted by Human or Overseer.

Avoid:

- "Synced" unless two-way or continuous synchronization exists.
- "Live" unless the bridge actively refreshes and the UI communicates the cadence.
- "Complete" unless required sources and fields were successfully read.
- "Approved" unless Human or Overseer acceptance is recorded.
- "Source of truth" for bridge output unless a durable contract establishes it.

## Bridge Assumptions And Unknowns

Repo-observed facts:

- `src/main/preload.js` exposes `window.aura.listServices`, `window.aura.invokeService`, and `window.auraWindow` methods.
- The current renderer asks for service list and `seed.readiness`.
- The current renderer does not prove a stable project-data bridge shape.
- `package.json` identifies a minimal Electron app and renderer verification scripts.

Assumptions to avoid treating as binding:

- That project data will arrive as a single object.
- That bridge data will include timestamps, source paths, freshness, or confidence fields.
- That the first UI will run only inside Electron rather than plain HTML or both.
- That service readiness equals project-data readiness.

Unknowns requiring Human or Overseer decision:

- Which project fields are mandatory for the first screen.
- Whether freshness is based on wall-clock age, file mtime, bridge read time, or explicit source metadata.
- Whether the UI should show full local paths, short source labels, or both.
- Whether the first surface is read-only briefing, review cockpit, or a hybrid with actions later.
- Whether bridge failures should offer retry controls in M00 or only display state.

## Recommended First Milestone Shape

The first milestone should produce a small, inspectable presentation slice:

- A first screen that displays a project briefing from bridge-provided or fixture-backed data.
- A visible bridge status band with state, freshness, and source labels.
- State-specific UI for loading, empty, populated, stale, failed, and partial data.
- Copy that distinguishes source-verified data, bridge-reported data, unavailable data, and advisory/pending acceptance status.
- A compact details area for source/read diagnostics without overwhelming the first viewport.

This milestone should prove the state grammar before chasing polish or broad feature coverage.

## Non-Goals

- No code implementation in this advisory packet.
- No Dev runway in this artifact.
- No binding bridge schema or API contract.
- No speculative docs hierarchy.
- No imported Atlas, Sense, or unrelated product doctrine.
- No editing model, task queue, automation control, or multi-project dashboard unless later accepted.
- No claim that the existing Core scaffold defines final product UX.

## Acceptance Checks

Overseer can use these as advisory checks before converting this into a Dev packet:

- The first screen answers project identity, active milestone, current packet, current executor, and expected artifact.
- The UI has explicit visual and copy states for loading, empty, populated, stale, failed, and partial data.
- Freshness and source visibility appear in the first viewport or immediately adjacent detail.
- The UI distinguishes project state from bridge/app health.
- The UI avoids overclaiming "live", "synced", "complete", or "approved."
- Missing or failed data remains visible as an honest state, not a blank or misleading success view.
- Any bridge shape used by Dev is framed as provisional unless accepted separately.

## Questions For Human / Overseer

- Should Aura Lab feel more like a briefing board, a compact operational dashboard, or a presentation surface with minimal controls?
- What are the mandatory first-screen project facts: milestone, packet, executor, expected handoff, source files, verification, risks, or something else?
- Should the first screen show absolute local paths, short labels, or both?
- What freshness threshold should count as stale for a local project-data read?
- Should M00 include a retry control for failed bridge reads, or only display failure truth?
- Should service registry health remain visible in the first product screen, or move into a secondary diagnostics area?

## Recommended Overseer Integration

Overseer should decide which recommendations become Dev-facing acceptance criteria in `workspace/current.md`.

Recommended integration:

- Accept the six required UI states as first-pass presentation requirements.
- Ask Human to choose the first-screen feel: briefing board, operational dashboard, or hybrid.
- Keep bridge shape provisional until Dev or Overseer can point to source files or a contract.
- Route any durable bridge contract or UI state grammar into `docs/` only after acceptance.
- Keep this artifact in `workspace/` as advisory transaction evidence for M00.

## Risks And Uncertainty

- The current bridge proves service and window APIs, not project-data semantics.
- The UI could accidentally imply authority if it labels bridge output too strongly.
- Without a freshness rule, stale and populated states may be visually indistinguishable.
- Without source labels, users may not know whether they are seeing file-backed state, bridge memory, fixture data, or fallback text.
- The first screen could become too diagnostic if service registry details compete with project meaning.
