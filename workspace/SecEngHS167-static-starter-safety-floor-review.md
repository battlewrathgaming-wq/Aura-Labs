# SecEngHS167 - Static Starter Safety Floor Review

Status: Complete
Role: Security / Engineering reviewer
Date: 2026-06-01

## 1. Files Reviewed

- `AGENTS.md`
- `HUMAN.md`
- `workspace/current.md`
- `workspace/overview.md`
- `docs/statements/presentation-head-handoff-standard.md`
- `docs/statements/lab-presentation-head-posture.md`
- `docs/statements/post-bridge-presentation-boundary.md`
- `docs/roadmap/m43-presentation-head-handoff-standard.md`
- `docs/roadmap/m42-static-portable-presentation-starter-reference.md`
- `workspace/OverseerHS166-m43-presentation-head-handoff-standard.md`
- `workspace/OverseerHS164-m42-static-starter-reference-acceptance.md`
- `workspace/OverseerHS165-static-starter-visual-review.md`
- `portable-presentation-starter/README.md`
- `portable-presentation-starter/examples/static/index.html`
- `portable-presentation-starter/examples/static/instrument-readout-panel.css`
- `portable-presentation-starter/examples/static/instrument-readout-panel.js`
- `portable-presentation-starter/examples/static/example-readouts.json`
- `scripts/verify-static-starter.js`
- `scripts/verify-all.js`
- `package.json`

## 2. Review Scope

This was an expert safety-floor review of the static portable presentation starter against the M43 Presentation Head Handoff Standard.

Scope was limited to the static starter, its README, its example files, and the relevant verifier wiring. This review did not implement code, did not run live provider tests, did not run Electron smoke, did not inspect target projects, and did not broaden into a full renderer export or app-wide security review.

Primary question:

```txt
Is the static starter safe enough to offer as a display-only presentation head reference without creating avoidable downstream hardening work?
```

## 3. Current-State Understanding

The static starter is a Lab-local, framework-neutral reference for:

```txt
neutral display example input -> Instrument Readout Panel -> Readout Detail reveal
```

It is separate from the current Lab renderer and uses plain `index.html`, CSS, JavaScript, and JSON example data. The accepted M42/M43 records present it as a recoverable presentation reference, not a target adapter, bridge contract, runtime contract, React scaffold, renderer export, or target adoption package.

Manual inspection of the static JavaScript found that display values are rendered through explicit DOM construction, `textContent`, `createTextNode`, and `replaceChildren`. I did not find use of `innerHTML`, `eval`, `new Function`, remote scripts, clipboard APIs, Electron APIs, IPC, preload APIs, filesystem writes, screenshot/capture behavior, or live provider calls in the starter files.

The only `fetch` in the starter is a relative load of `./example-readouts.json`, with an embedded fallback copy so the page still renders when local `file://` JSON fetches are blocked. I treat this as a local convenience, not a network dependency, because the reference remains inspectable without the fetch succeeding and no remote URL is used.

## 4. Safety-Floor Verdict

Verdict: pass with cautions.

The static starter is safe enough in current implementation shape to offer as a display-only presentation head reference for a recoverable target trial. It does not appear to introduce avoidable downstream runtime, privilege, network, script, adapter, or Lab-tooling hardening work.

Before an actual target relay, I recommend one small documentation clarification and one small verifier hardening pass so the package itself states the M43 safety floor in the same language the durable docs already use.

## 5. Findings Table

| Category | Severity | File / location | Finding | Recommendation |
| --- | --- | --- | --- | --- |
| Documentation boundary | caution | `portable-presentation-starter/README.md` | The README clearly says the starter is a static reference, excludes privileged/runtime/tooling surfaces, and says example input is non-contractual. It does not explicitly use M43's exact "display-only" and "not a trust boundary" language. | Before target relay, add a short safety note stating the starter is display-only and not a trust boundary. |
| Verification coverage | caution | `scripts/verify-static-starter.js` | The verifier checks required files, labels, boundary language, source-owned qualification, and excluded Lab/runtime/tooling terms. It does not currently check low-cost safety patterns such as `innerHTML`, `outerHTML`, `insertAdjacentHTML`, `eval`, `new Function`, remote `http(s)` assets/scripts, clipboard APIs, storage APIs, or filesystem-write strings in the static starter files. | Add explicit static-pattern checks for unsafe HTML injection, dynamic execution, remote assets, clipboard/storage access, and write/capture terms. Keep this scoped to the starter files. |
| Network boundary | note | `portable-presentation-starter/examples/static/instrument-readout-panel.js` | The starter uses `fetch('./example-readouts.json', { cache: 'no-store' })` and falls back to embedded data if blocked. No remote URL or live provider call was found. | Accept as safe for static reference. Optional verifier can allow only the exact local JSON fetch while rejecting remote URLs or broader network APIs. |
| Data rendering boundary | note | `portable-presentation-starter/examples/static/instrument-readout-panel.js` | Display data is rendered through DOM APIs and `textContent` / text nodes rather than arbitrary HTML. No obvious unsafe HTML injection path was found. | Preserve this pattern. If future richer text is needed, require an explicit sanitizer or structured renderer review. |
| Adapter boundary | note | `portable-presentation-starter/README.md`, static examples | Source-owned placeholders are qualified and the starter repeatedly says examples are not target enums, source states, target adapters, bridge contracts, or runtime contracts. | Safe to offer as structure only. Target projects must provide their own adapter and source meaning. |
| Tooling boundary | note | Static starter files and verifier | No SmokeFlash, Pane Board, Wayfinder, Lab service registry, current renderer, Electron/preload/IPC, or React dependency was found in the starter implementation files. | Keep the offered package limited to `portable-presentation-starter/` static files and boundary notes. |
| Visual / browser evidence | parked | HS165 / this review | HS165 accepted Human manual visual review. This review did not produce automated browser, screenshot, or Electron evidence. | Park automated visual evidence unless a future target relay requires it. Do not claim automated screenshot/browser acceptance from this review. |

## 6. Safety Floor Checklist

### Privilege Boundary

Result: pass.

- No preload dependency found.
- No IPC dependency found.
- No Electron-only dependency found in starter files.
- No filesystem writes found in starter files.
- No clipboard access found.
- No screenshot/capture behavior found.
- No live provider calls found.
- No secrets or private data found.

Note: `package.json` contains Lab-level Electron scripts and dependency, but the static starter package does not depend on them and the README excludes Electron/preload/IPC.

### Network / Script Boundary

Result: pass with note.

- No remote scripts found.
- No CDN or external asset dependency found.
- No remote `http://` or `https://` usage found in starter files.
- No `eval`, `new Function`, `innerHTML`, or similar dynamic HTML/script execution found.
- The only fetch is the relative local JSON fetch with embedded fallback data.

### Data Rendering Boundary

Result: pass.

- Example data is treated as display input.
- Text is rendered with `textContent` or `createTextNode`.
- DOM nodes are created with `document.createElement`.
- No arbitrary HTML injection path was found.
- The selector and detail toggle are local/inert UI controls.
- No outbound links or action links are present.
- Source-owned placeholder terms are qualified through `sourceOwned`.

### Adapter Boundary

Result: pass.

- Adapter mapping remains outside the head.
- No target adapter is implemented.
- Example `state`, `availability`, `NO DATA`, and `UNAVAILABLE` are documented as display example fields/labels, not target states or shared source enums.
- No bridge/runtime contract is implied by the README, JSON metadata, page boundary note, or detail rows.

### Tooling Boundary

Result: pass.

- SmokeFlash does not travel in the starter.
- Pane Board does not travel in the starter.
- Wayfinder does not travel in the starter.
- Lab service registry does not travel in the starter.
- Current Lab renderer does not travel in the starter.
- React does not travel in the starter.

### Documentation Boundary

Result: pass with caution.

- README and example files say the input is display example input only and non-contractual.
- README and accepted docs say target adapters, bridge/runtime contracts, source-project mappings, Lab tooling, and source-project meanings are excluded.
- Durable M43 docs say a head is display-only and not a trust boundary, and that adoption does not imply Lab sample data, example meanings, state enums, roadmap, tooling, or future upgrade path.
- Starter README should repeat "display-only" and "not a trust boundary" directly before relay so the package carries that boundary without requiring the reader to cross-load M43.

### Verification Coverage

Result: pass with caution.

- `verify:static-starter` checks required starter files, README boundary language, HTML/CSS/JS expected structure, example states, source-owned placeholder qualification, and excluded runtime/tooling families.
- `verify:all` includes `verify:static-starter`.
- Missing low-cost coverage: explicit rejection of unsafe HTML injection APIs, dynamic execution, remote URLs/scripts/assets, clipboard/storage APIs, and write/capture behavior in the static starter files.

## 7. What Is Safe To Offer

Safe to offer as a recoverable trial:

- The static `portable-presentation-starter/` reference as a display-only Instrument Readout Panel example.
- The plain HTML/CSS/JS pattern for rendering text through DOM APIs.
- The example JSON as non-contractual display example input.
- The source, freshness, basis, coverage, gaps, warnings, and Readout Detail treatment as presentation grammar.
- The source-owned placeholder qualification pattern as a display boundary example.
- CSS custom properties as replaceable presentation tokens.

## 8. What Must Not Be Offered

Must not be offered as adoption:

- Lab sample data as target sample data.
- Lab example meanings as target meanings.
- Lab display labels or example `state` values as target enums.
- Lab roadmap or future upgrade path.
- Lab tooling: SmokeFlash, Pane Board, Wayfinder, service registry, fixture selector controls, visual smoke tooling, current renderer, Electron shell, preload, or IPC.
- A target adapter.
- A bridge/runtime/schema contract.
- Sense, Atlas, Core, or other source-project meaning.
- Any claim of automated screenshot/browser visual evidence from this review.

## 9. Suggested Low-Cost Verifier / Doc Improvements

Before target relay:

- Add README language: "This starter is display-only and is not a trust boundary."
- Add README language that adoption does not imply Lab sample data, example meanings, state enums, roadmap, tooling, or future upgrade path.
- Extend `scripts/verify-static-starter.js` to reject `innerHTML`, `outerHTML`, `insertAdjacentHTML`, `document.write`, `eval`, `new Function`, remote `http(s)` URLs, remote scripts/assets, clipboard APIs, storage APIs, write-file terms, screenshot/capture terms, and live-provider-ish terms in the static starter files.
- Optionally make the verifier explicitly allow only `fetch('./example-readouts.json', ...)` and reject other `fetch` or `XMLHttpRequest` usage in the starter.
- Optionally verify README contains the exact M43 phrases "display-only" and "not a trust boundary."

## 10. What Remains Parked For Target Integration

- Target-owned adapter mapping.
- Target-owned source meaning and product language.
- Target runtime behavior and trust boundary decisions.
- Target-specific security review.
- Target-specific accessibility and browser-support review.
- Any React scaffold.
- Any renderer export or current Lab renderer reuse.
- Any automated screenshot/browser visual acceptance unless a future packet asks for it.
- Any source-project interpretation for Atlas, Sense, Core, or another target.

## 11. Commands Run And Results

From `F:\Projects\AURA- Lab`:

```txt
npm.cmd run verify:static-starter
```

Result:

```txt
static starter verified
```

From `F:\Projects\AURA- Lab`:

```txt
npm.cmd run verify:all
```

Result:

```txt
core utilities verified
services verified
lab vocabulary verified
HTTP client verified
SDE source bundle utility verified
Frame module verified
renderer shell verified
Pane Board verified
static starter verified
all checks verified
```

The command also reported existing warning-only protected-term discovery candidates in Lab renderer/service files. These were not starter-specific failures.

From `F:\Projects\Docs\Aura-Project-Orchestration`:

```txt
npm.cmd run verify:terminology
```

Result:

```txt
Terminology verification: 62/62 resource checks passed.
Warnings (24)
```

The warnings were existing Lab tripwires in `src/renderer` and `src/services`, not failures in the static starter.

Additional inspection searches:

- `rg -n eval ...` found no matches in the starter review surface.
- `rg -n innerHTML ...` found no matches in the starter review surface.
- `rg -n fetch ...` found only the documented local JSON fetch and README explanation.
- `rg -n clipboard ...` found no matches in the starter review surface.
- `rg -n electron ...` found only verifier/package-level Lab references, not starter implementation dependency.
- `rg -n http ...` found only Lab verifier/package script names, not starter network URLs.

One broad regex search attempt failed due PowerShell quoting and is not used as evidence.

## 12. Final Recommendation

Final recommendation: ready after small docs/verifier fix.

The current static starter passes the M43 safety floor in implementation substance and is safe enough to inspect as a display-only presentation head reference. For a clean target relay, make the starter package carry the M43 safety language directly and harden the static verifier against obvious HTML injection, dynamic execution, remote asset, clipboard/storage, write, and capture patterns.

No blocker was found.
