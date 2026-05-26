# Surface Parts Capture Workflow

Status: Lab sandpit concept
Owner: Human / Overseer direction
Context: Pane Board adjacent, non-authoritative collaboration workflow

## Purpose

Surface Parts Capture is a pre-layout advisory step for turning one named presentation surface into meaningful display parts before any Pane Board sketching begins.

It exists to help Human, Overseer, Project UX, and Labs reason from source-owned meaning toward rough spatial story without turning labels, backend fields, or Pane Board shapes into implementation authority.

Pane Board should arrange interpreted parts, not raw detached labels.

## Workflow

1. Human opens the activity.
   - Names the surface or state family.
   - Describes the user task and why the surface matters.
   - Names known risks, preserved terms, avoided terms, and authority boundaries.

2. Overseer scopes the slice.
   - Confirms this is one bounded surface/state family.
   - Confirms no Dev runway, adapter work, bridge contract, or product adoption is implied.
   - Shapes the prompt for Project UX.

3. Project UX creates the Surface Parts Capture advisory.
   - Interprets what the surface needs to display.
   - Curates meaningful parts.
   - Assigns display roles and risks.
   - Allows bounded shadow states only where they prevent misread.
   - Produces a Pane Board handoff, not a layout mandate.

4. Labs uses Pane Board as the sandpit.
   - Pulls interpreted parts into rough spatial groups.
   - Tests read order, adjacency, separation, shadows, and "almost" tensions.
   - Keeps all shapes advisory.
   - Records observations, not implementation requirements.

5. Project UX reviews the sketch output.
   - Accepts, rejects, reshapes, or questions the rough spatial story.
   - Confirms whether parts, shadows, wording, and hierarchy still preserve source meaning.
   - Identifies what should remain parked.

6. Overseer reviews for adoption readiness.
   - Decides whether the advisory and sketch are accepted as Lab evidence.
   - Decides whether a later Dev runway, UX revision, or project-owned adoption path is appropriate.
   - Keeps source-project adoption under source-project authority.

## Passive Telemetry First Target

Surface: Passive Telemetry compact readout / current-system context

Reason: This is a useful pressure test for Shape See because it carries many state distinctions without the high authority risk of Clipboard Acquisition.

User task: Help the operator understand current-system context at a glance while staying in EVE flow.

Must not imply:

- complete system awareness
- background Threat Intel
- tactical risk score
- provider truth

Principle: Universalize structure, not meaning.

## Core Parts To Capture

Likely first-read or supporting parts:

- Passive Telemetry
- Current system
- Kills
- Jumps
- Ratio
- Fresh context
- Stale context
- Partial sample
- Capped sample
- Live IO blocked
- Degraded
- No observation
- No provider sample yet
- source / basis / freshness
- ESI activity
- zKill system context
- local/static resolver status

Preserve:

- Passive Telemetry
- Current system
- Fresh context
- Stale context
- Partial sample
- Capped sample
- Live IO blocked
- Degraded
- No observation

Avoid or qualify:

- No data
- bare Current
- Threat
- Intel
- Evidence
- Watch
- Monitoring
- Truth
- Verified
- Certainty
- Fallback
- Pulse

## Shadow State Rule

Shadow states are allowed for context, not full capture.

Use shadow panes only to prevent misread of Passive Telemetry.

Allowed shadow panes:

- Combat Witness summary shadow
- Threat Intel / No scan shadow
- Clipboard Acquisition authority shadow
- Runtime IO authority shadow
- Diagnostics shadow

For each shadow pane, include only:

- shadow pane id
- why it matters
- one-line meaning
- what must not be confused with Passive Telemetry
- adjacency / separation / hidden-in-narrow recommendation

Highest priority shadows:

- Runtime IO authority shadow: separates Live IO blocked from provider failure or no observation.
- Threat Intel shadow: separates Passive context from deliberate scan / No scan.

## Pane Board Group Vocabulary

Recommended groups:

- status-band
- central-readout
- context-rail
- warning-gap-edge
- detail-drawer
- diagnostics
- actions
- shadow-context

## Authority Boundary

This concept and any derived advisory are:

- advisory only
- not implementation
- not adapter work
- not a bridge/runtime contract
- not product adoption
- not generated UI
- not a Dev runway

Sense keeps source meaning and final adoption.

## Request Schema

```json
{
  "type": "object",
  "required": [
    "activity",
    "surface",
    "sourceOwner",
    "userTask",
    "authority",
    "knownParts",
    "termPolicy",
    "shadowPolicy",
    "requestedOutput"
  ],
  "properties": {
    "activity": {
      "type": "string",
      "const": "surface-parts-capture"
    },
    "surface": {
      "type": "object",
      "required": ["name", "stateFamily", "whyThisSlice"],
      "properties": {
        "name": { "type": "string" },
        "stateFamily": { "type": "string" },
        "whyThisSlice": { "type": "string" },
        "currentPresentation": { "type": "string" }
      }
    },
    "sourceOwner": {
      "type": "string"
    },
    "userTask": {
      "type": "object",
      "required": ["summary", "mustUnderstand", "mustDecideOrDo"],
      "properties": {
        "summary": { "type": "string" },
        "mustUnderstand": { "type": "array", "items": { "type": "string" } },
        "mustDecideOrDo": { "type": "array", "items": { "type": "string" } }
      }
    },
    "authority": {
      "type": "object",
      "required": ["notThis", "sourceRetains"],
      "properties": {
        "notThis": {
          "type": "array",
          "items": {
            "type": "string",
            "enum": [
              "implementation",
              "adapter-work",
              "bridge-runtime-contract",
              "product-adoption",
              "generated-ui",
              "dev-runway",
              "pane-board-authority"
            ]
          }
        },
        "sourceRetains": { "type": "string" }
      }
    },
    "knownParts": {
      "type": "array",
      "items": {
        "type": "object",
        "required": ["part_id", "label", "owner", "candidateRole"],
        "properties": {
          "part_id": { "type": "string" },
          "label": { "type": "string" },
          "owner": { "type": "string" },
          "candidateRole": {
            "type": "string",
            "enum": [
              "first-read",
              "supporting-context",
              "detail-reveal",
              "diagnostic-only",
              "action-readiness",
              "parked",
              "unknown"
            ]
          },
          "meaningHint": { "type": "string" },
          "riskHint": { "type": "string" },
          "pane_id": { "type": "string" }
        }
      }
    },
    "termPolicy": {
      "type": "object",
      "required": ["preserve", "avoidOrQualify"],
      "properties": {
        "preserve": { "type": "array", "items": { "type": "string" } },
        "avoidOrQualify": { "type": "array", "items": { "type": "string" } }
      }
    },
    "shadowPolicy": {
      "type": "object",
      "required": ["allowed", "rule", "fields"],
      "properties": {
        "rule": { "type": "string" },
        "allowed": { "type": "array", "items": { "type": "string" } },
        "highestPriority": { "type": "array", "items": { "type": "string" } },
        "fields": {
          "type": "array",
          "items": {
            "type": "string",
            "enum": [
              "shadow pane id",
              "why it matters",
              "one-line meaning",
              "what must not be confused with the surface",
              "adjacency / separation / hidden-in-narrow recommendation"
            ]
          }
        }
      }
    },
    "requestedOutput": {
      "type": "object",
      "required": ["artifactKind", "sections"],
      "properties": {
        "artifactKind": {
          "type": "string",
          "const": "Surface Parts Capture advisory"
        },
        "suggestedArtifactPath": { "type": "string" },
        "sections": {
          "type": "array",
          "items": {
            "type": "string",
            "enum": [
              "surface-readback",
              "display-need",
              "curated-parts-table",
              "first-read-hierarchy",
              "detail-diagnostics-split",
              "spatial-grouping-recommendation",
              "risk-and-avoidance-notes",
              "pane-board-handoff",
              "authority-statement"
            ]
          }
        }
      }
    }
  }
}
```

## Example Part Entry

```yaml
part_id: sense-status
label: Scan status
role: first-read
owner: Sense
risk: Do not detach from scan context.
pane_id: status-band
```
