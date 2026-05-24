# Resource Sites Library

Status: Reference only
Date: 2026-05-24
Scope: Web resources for Aura Lab presentation research, deep reference sweeps, and future materials/slots library work

## Purpose

Collect useful public resource sites for Lab presentation research.

This file is a starting library for idle/reference workers. It is not product direction, not a Dev runway, not a bridge contract, and not an adoption claim for Atlas, Sense, Core, or any future project.

Use this library to find reference material for:

- instrument panels
- cockpit/HUD hierarchy
- telemetry displays
- status history
- data visualization
- surface/material language
- compact diagnostics
- narrow/overlay UI
- sci-fi atmosphere
- human factors guidance

## Use Rules

- Treat resources as inspiration and research input.
- Summarize patterns; do not copy product text, proprietary visuals, or project-owned semantics.
- Classify each useful find as portable structure, interaction pattern, state treatment, motion pattern, material treatment, or non-portable semantics.
- Add local notes under `workspace/reference/`, not hidden task queues.
- Do not create Dev work from a resource unless Human / Overseer accepts a concept into `workspace/current.md`.

## High-Trust Human Factors / Space Display Sources

### NASA Human Systems Integration - Cockpit Display Design

Source:

- https://www.nasa.gov/human-systems-integration-division/cockpit-display-design-intelligent-spacecraft-interface-systems/

Use For:

- spacecraft display research framing
- crew interface studies
- cockpit display atmosphere grounded in real human-systems work
- thinking about displays as operational tools, not decorative dashboards

Portable Ideas:

- display concepts should support operator understanding under pressure
- cockpit/instrument surfaces should prioritize legibility and state clarity
- advanced interface research can inspire hierarchy without making Lab a spacecraft simulator

Do Not Copy:

- NASA mission semantics
- aerospace certification language as Lab doctrine
- literal cockpit labels unless Lab owns the meaning

Disposition:

- use in concept research

### NASA Human Integration Design Processes

Source:

- https://www.nasa.gov/wp-content/uploads/2015/03/human_integration_design_processes.pdf

Use For:

- human-centered design process
- spacecraft display standards thinking
- rationale for shared display frameworks and iterative evaluation

Portable Ideas:

- interfaces benefit from common display standards when multiple surfaces need consistent interpretation
- evaluate displays through use and integration risk, not only aesthetic quality

Do Not Copy:

- contractual/process weight
- certification-style bureaucracy
- the assumption that Lab needs full formal display standards now

Disposition:

- use as high-trust process reference

### NASA Human Integration Design Handbook

Source:

- https://www.nasa.gov/sites/default/files/atoms/files/human_integration_design_handbook_revision_1.pdf

Use For:

- display and control guidance
- labels, coding, human factors, and crew interface principles
- background support for status/state readability

Portable Ideas:

- labels and controls must aid error-free operation
- warning/caution/emergency coding should be meaningful and consistent
- human factors can guide motion, state, and display density decisions

Do Not Copy:

- aviation/space domain meanings
- handbook rules as mandatory Lab process

Disposition:

- use as deep research source

### FAA Human Factors Design Standard

Source:

- https://hf.tc.faa.gov/publications/2016-12-human-factors-design-standard/full_text.pdf

Use For:

- high-trust human factors guidance
- display, alert, label, and HCI considerations
- backup reference when Lab needs clarity around warning/status display

Portable Ideas:

- alerts and statuses should be distinguishable, consistent, and readable
- display design must support task performance, not just presentation polish

Do Not Copy:

- FAA-specific operational/certification assumptions
- heavyweight compliance framing

Disposition:

- use as deep research source

## Mission Control / Telemetry Frameworks

### NASA Open MCT

Sources:

- https://nasa.github.io/openmct/docs/about-open-mct/
- https://www.openmct.com/

Use For:

- telemetry visualization
- composable mission-control layouts
- display objects, timelines, plots, tables, imagery, and flexible view composition
- long-term pattern study for modular presentation faces

Portable Ideas:

- views can be composed from reusable objects
- timelines, telemetry points, plots, tables, and layouts can coexist without one monolithic dashboard
- plugin/extensibility thinking may inspire future Lab module boundaries

Do Not Copy:

- Open MCT architecture as Lab architecture
- mission-control terminology as Lab default copy
- live telemetry assumptions

Disposition:

- use as key reference site

### Grafana Visualizations And Status History

Sources:

- https://grafana.com/docs/grafana/latest/visualizations/panels-visualizations/visualizations/
- https://grafana.com/docs/grafana/latest/panels-visualizations/visualizations/status-history/

Use For:

- status history
- panel selection
- dashboard visualizations
- state-over-time treatment
- operational monitoring patterns

Portable Ideas:

- status history can show state changes compactly over time
- different data shapes need different visualization forms
- panel libraries can help think about slots and module types

Do Not Copy:

- generic dashboard look
- metric/observability semantics as Lab meaning
- broad panel catalog as Lab product direction

Disposition:

- use for state/time/status treatment research

## Data Visualization / Graphical Grammar

### Observable Plot

Sources:

- https://observablehq.com/plot/
- https://observablehq.com/plot/what-is-plot

Use For:

- exploratory data visualization
- simple chart grammar
- quick visual experiments with tabular data
- future rolling counters, timelines, and compact data views

Portable Ideas:

- concise chart grammar can support fast concept exploration
- simple marks/scales can keep data displays honest
- useful for research even if Lab does not adopt the library

Do Not Copy:

- chart library choice as implementation decision
- exploratory-analysis framing as Lab product direction

Disposition:

- use as data-viz research and possible future prototyping reference

### IBM Data Visualization Design

Source:

- https://www.ibm.com/design/language/data-visualization/design/basics/

Use For:

- data visualization basics
- axes, grids, ticks, indicators, and visual clarity
- enterprise-grade visual discipline

Portable Ideas:

- grids and indicators should help readers understand scale and proportion
- visual elements work together as a system
- restraint can improve readability

Do Not Copy:

- IBM brand styling
- enterprise dashboard tone as Lab default

Disposition:

- use as visual-discipline reference

### Dashboard Design Patterns Research

Source:

- https://arxiv.org/abs/2205.00757

Use For:

- dashboard pattern vocabulary
- research-backed thinking about dashboard design workshops
- identifying reusable pattern categories without adopting a specific UI

Portable Ideas:

- pattern libraries can help designers reason about recurring dashboard structures
- useful as background for Lab's future slots/materials vocabulary

Do Not Copy:

- dashboard as default Lab framing
- academic pattern names without testing fit

Disposition:

- use as research background

## Sci-Fi / HUD / Game UI Inspiration

### HUDS+GUIS

Source:

- https://fountn.design/resource/hudsguis/

Use For:

- film, game, automotive, consumer-tech UI inspiration
- sci-fi interface atmosphere
- visual language references

Portable Ideas:

- layered micro-detail
- distinct surface roles
- status clusters
- cinematic information hierarchy

Do Not Copy:

- exact visuals
- film/game product semantics
- overdecorated HUD framing

Disposition:

- use as visual reference source

### ARWES

Source:

- https://next.arwes.dev/docs

Use For:

- sci-fi web UI framework reference
- animation, sound, and futuristic component vocabulary
- studying how sci-fi UI can be componentized

Portable Ideas:

- component-level sci-fi effects can be studied separately from product meaning
- motion and sound should be optional and purposeful

Do Not Copy:

- framework adoption as a given
- heavy effects as Lab default
- sound effects without explicit product need

Disposition:

- keep watching; do not adopt by default

### Interface In Game

Source:

- https://interfaceingame.com/

Use For:

- searchable game UI screenshot reference
- HUD, menu, status, map, inventory, and cockpit examples
- broad taste pool for visual research

Portable Ideas:

- game UIs often solve dense information and state-under-pressure problems
- useful for comparing how first-read hierarchy is handled across genres

Do Not Copy:

- game-specific terminology
- copyrighted art direction
- target-game product semantics

Disposition:

- use for broad visual sweeps

### Game UI Database

Source:

- https://www.gameuidatabase.com/

Use For:

- searchable game UI references by genre, platform, and screen type
- HUD and interface pattern comparison
- finding examples for narrow overlays and cockpit/status displays

Portable Ideas:

- pattern comparison across many games can reveal reusable slot structures
- useful for learning what makes dense UI readable

Do Not Copy:

- screenshots as specs
- game labels or icons
- copyrighted compositions

Disposition:

- use for broad visual sweeps

## Operational / Instrument-Like Dashboard References

### Grafana Status Panel Plugin

Source:

- https://grafana.com/grafana/plugins/benjaminfourmaux-status-panel/

Use For:

- status-card/panel patterns
- simple resource state visualization
- thinking about how not to overcomplicate status

Portable Ideas:

- simple status panels can be useful when state needs to be recognized quickly
- color-only status needs supporting labels/shapes

Do Not Copy:

- big colored cards as Lab default
- observability semantics

Disposition:

- use cautiously for status panel research

### NASA / Open MCT User Guide

Source:

- https://nasa.github.io/openmct/static/files/Open_MCT_Users_Guide.pdf

Use For:

- concrete screenshots and patterns for telemetry tables, plots, and display layouts
- limit/violation visual treatment
- composite display examples

Portable Ideas:

- multiple view types can serve different inspection depths
- highlighted values can indicate state without overwhelming all surfaces

Do Not Copy:

- mission-control workflow as Lab workflow
- telemetry table density as default for all Lab modules

Disposition:

- use as screenshot/reference source

## Suggested Worker Tasks

Idle reference workers can use this library for:

1. Source-site sweep:
   - collect 5-10 good references from one source
   - summarize portable ideas
   - mark terminology/semantic risks

2. Slot extraction:
   - identify recurring slots such as title, primary value, status light, basis line, detail reveal, timeline marker, warning edge

3. Material extraction:
   - identify material roles such as matte panel, inset band, smoked glass, rail divider, status pip, warning edge

4. State treatment extraction:
   - compare how sources show stale, partial, failed, unavailable, blocked, degraded, empty, quiet, and updating

5. Narrow-layout extraction:
   - collect examples that survive compact shells or overlays

## Source Quality Notes

High-trust sources:

- NASA
- FAA
- established design system documentation
- established open-source framework documentation
- academic/research papers

Useful but lower-authority sources:

- curated inspiration galleries
- game UI screenshot databases
- framework marketing sites
- community examples

Lower-authority sources are still valuable for taste, but they should not decide Lab product direction.

## Immediate Research Priorities

For M19 and near-future Lab work:

1. Instrument Status Band:
   - NASA cockpit/display references
   - Grafana status history/status panels
   - Open MCT display layouts

2. Materials / Slots Library:
   - HUDS+GUIS
   - Interface In Game
   - Game UI Database
   - IBM data visualization basics

3. Future telemetry/timeline modules:
   - Open MCT
   - Observable Plot
   - Grafana status history

## References Are Not Requirements

This library exists to make future Lab work more imaginative and more disciplined.

It does not create work by itself.

Accepted work still goes through `workspace/current.md`.
