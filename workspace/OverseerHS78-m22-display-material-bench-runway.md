# OverseerHS78 - M22 Display Material Bench Runway

Date: 2026-05-25
Role: Overseer
Milestone: M22 - Display Material Bench
Status: Active runway

## Decision

Open M22 as a documentation and material-design milestone.

M21 answered what display types are worth considering. M22 should create the hard content that pressures those display types before Lab asks Dev to build more UI. This keeps future implementation grounded in realistic bridge-fed display problems instead of pretty empty shells.

## Source Of Intent

Accepted input:

- Human direction that display material means the hard content used to test display types.
- Human agreement to build material before a lightweight SmokeFlash harness.
- M21 accepted artifact: `workspace/DisplayTypeLibraryHS76-display-pattern-research.md`
- M21 acceptance: `workspace/OverseerHS77-m21-acceptance.md`
- M20 accepted artifact: `workspace/DisplayTaxonomyHS73-terminology-to-slot-map.md`
- Active contract: `workspace/display-asset-documentation-owner-contract.md`

## Current Executor

UI development owner / display asset documentor.

This is not a Dev implementation packet.

## Expected Artifact

```txt
workspace/reference/display-material-bench-2026-05-25.md
```

## Ordered Runway

1. Read the M20 slot taxonomy, M21 display type library, M21 acceptance, workshop README, and Lab critical terminology guidance.
2. Define the material bench purpose: reusable staged content that pressures display types without becoming runtime fixture doctrine.
3. Build material sets for the near-term display types accepted by M21: Readout Detail Reveal, Availability Reason Treatment, Source Coverage Marker, Gap / Warning Marker, Long Text Detail Block, Status Chip, Value Rail, Empty / Unavailable Panel, and Grouped Pips / Status Constellation.
4. For each material set, include realistic field values, long text, narrow summaries, absence/availability cases, source-owned label placeholders, basis/freshness cases, gaps, warnings, and expected display pressure.
5. Include collision cases for `source`, `sample`, `state`, `gateway`, `report`, and `snapshot` as owner/layer qualification problems, not shared terminology decisions.
6. Add a staged-ingest shape that a future light SmokeFlash harness could replay, but do not implement the harness.
7. Recommend the next packet after M22: likely display inventory scaffold, SmokeFlash harness feasibility, or first material-backed primitive selection.

## Required Material Coverage

Include at least:

- long readout label
- long readout basis
- source-owned label placeholder
- source-owned basis placeholder
- no data
- unavailable
- blocked
- failed
- degraded
- fallback
- partial sample
- capped sample
- stale / aged read
- missing known fields
- warning explanation
- gap list
- one long unbroken token
- mixed short/long detail rows
- numeric value rail rows
- narrow summary copy

## Acceptance Criteria

M22 can be accepted if the artifact:

- creates reusable material samples for the near-term display types named by M21
- maps every material set to M20 slots and M21 display types
- distinguishes material from bridge contracts, runtime fixtures, source-project meaning, and target adoption
- includes staged-ingest shape suitable for a future harness without implementing tooling
- includes hard text-containment and narrow-shell pressure
- includes absence/availability distinctions without collapsing them into one generic state
- qualifies source-owned placeholders instead of importing Atlas/Sense meaning as Lab default copy
- gives a future UI/UX, Dev, or SmokeFlash packet enough concrete material to work from

Reject or redirect if the artifact:

- is only copywriting samples with no slot/type mapping
- becomes a universal glossary
- defines bridge fields, payload contracts, or target-project semantics
- asks Dev to implement
- uses Atlas/Sense terms as Lab-owned defaults
- treats SmokeFlash tooling as the M22 product
- lacks long text, narrow, absence, gap, warning, and source-owned pressure cases

## Guardrails

- Do not implement code.
- Do not edit Atlas, Sense, Core, or shared protected-word files.
- Do not create runtime fixtures or bridge contracts.
- Do not define source-project meaning.
- Do not open a repeat implementation cycle.
- Do not make SmokeFlash active work yet.
- Do not require live, private, network, GUI, or Electron smoke.
- Do not turn reference material into requirements.

## Stop Conditions

Stop and return to Human / Overseer if:

- material samples require source-project meaning decisions
- source-owned words cannot be safely represented as placeholders
- the artifact starts defining a data contract instead of content pressure
- the work becomes a build task or harness task
- target-project edits would be needed
- terminology risk cannot be handled through owner/layer notes

## Verification

Required after writing the artifact:

```powershell
npm.cmd run verify:all
```

Advisory shared terminology check:

```powershell
cd F:\Projects\Docs\Aura-Project-Orchestration
npm.cmd run verify:terminology
```

No Electron smoke is required because M22 is documentation/material only.

## Support

Support files:

- `workspace/current.md`
- `workspace/overview.md`
- `workspace/DisplayTaxonomyHS73-terminology-to-slot-map.md`
- `workspace/DisplayTypeLibraryHS76-display-pattern-research.md`
- `workspace/OverseerHS77-m21-acceptance.md`
- `workspace/display-asset-documentation-owner-contract.md`
- `workspace/workshop/README.md`
- `workspace/critical/README.md`
- `workspace/critical/critical-terms.md`
- `F:\Projects\Docs\Aura-Project-Orchestration\terminology`
- `F:\Projects\Docs\Aura-Project-Orchestration\critical`

## Handoff

Expected handoff should include:

- files and references reviewed
- material bench purpose
- material set table or sections
- slot/type mapping for each material set
- staged-ingest shape for future harness work
- narrow-shell and text-containment pressure
- absence/availability cases
- source-owned placeholder notes
- parked tooling notes, including SmokeFlash
- verification commands and results
- recommended next packet

## Parked Until After M22

- SmokeFlash HTML harness
- cannibalizing Sense log-reader shape for Lab-local staged ingest
- display inventory scaffold
- repeat implementation cycle
- target-project adoption packets
