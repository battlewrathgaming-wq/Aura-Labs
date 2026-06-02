const fs = require('node:fs');
const path = require('node:path');
const { projectRoot } = require('../src/util/tempPaths');

const root = projectRoot();
const starterRoot = path.join(root, 'portable-presentation-starter');
const staticRoot = path.join(starterRoot, 'examples', 'static');
const sensePackageRoot = path.join(starterRoot, 'packages', 'sense-trial-glass');
const primitivesRoot = path.join(starterRoot, 'primitives');
const primitivesExamplesRoot = path.join(primitivesRoot, 'examples');

const requiredFiles = [
  path.join(starterRoot, 'README.md'),
  path.join(staticRoot, 'index.html'),
  path.join(staticRoot, 'inspect-head.html'),
  path.join(staticRoot, 'instrument-readout-panel.css'),
  path.join(staticRoot, 'instrument-readout-panel.js'),
  path.join(staticRoot, 'example-readouts.json'),
  path.join(sensePackageRoot, 'README.md'),
  path.join(sensePackageRoot, 'MANIFEST.md'),
  path.join(sensePackageRoot, 'index.html'),
  path.join(sensePackageRoot, 'inspect-head.html'),
  path.join(sensePackageRoot, 'instrument-readout-panel.css'),
  path.join(sensePackageRoot, 'instrument-readout-panel.js'),
  path.join(sensePackageRoot, 'example-readouts.json'),
  path.join(primitivesRoot, 'README.md'),
  path.join(primitivesRoot, 'glass-tokens.css'),
  path.join(primitivesRoot, 'glass-primitives.css'),
  path.join(primitivesExamplesRoot, 'primitive-readout.html'),
  path.join(primitivesExamplesRoot, 'primitive-row-drawer.html')
];

const excludedPatterns = [
  ['React', /\bReact\b|react-dom|jsx/i],
  ['Electron/preload/IPC', /\belectron\b|\bpreload\b|\bipc\b/i],
  ['SmokeFlash', /\bSmokeFlash\b/i],
  ['Pane Board', /\bPane Board\b|\bpane-board\b/i],
  ['Wayfinder', /\bWayfinder\b/i],
  ['Lab service registry', /\bserviceRegistry\b|\bfixture selector\b/i],
  ['target adapter implementation', /\badapter implementation\b/i]
];

const unsafeImplementationPatterns = [
  ['HTML injection API innerHTML', /\binnerHTML\b/],
  ['HTML injection API outerHTML', /\bouterHTML\b/],
  ['HTML injection API insertAdjacentHTML', /\binsertAdjacentHTML\b/],
  ['HTML injection API document.write', /\bdocument\.write\b/],
  ['dynamic execution eval', /\beval\s*\(/],
  ['dynamic execution new Function', /\bnew\s+Function\b/],
  ['remote URL', /\bhttps?:\/\//i],
  ['remote script or asset element', /<(?:script|link|img)[^>]+\b(?:src|href)\s*=\s*["']https?:\/\//i],
  ['clipboard API', /\bclipboard\b|\bClipboardItem\b|\bexecCommand\s*\(\s*['"]copy['"]/i],
  ['storage API', /\blocalStorage\b|\bsessionStorage\b|\bindexedDB\b|\bcaches\b|\bcookie\b/i],
  ['write-file term', /\bwriteFile\b|\bcreateWriteStream\b|\bFileSystemWritableFileStream\b|\bshowSaveFilePicker\b|\bsaveAs\b/i],
  ['screenshot/capture term', /\bscreenshot\b|\bcapture\b|\bgetDisplayMedia\b|\bcaptureStream\b|\btoDataURL\b/i],
  ['live-provider-ish term', /\bWebSocket\b|\bEventSource\b|\bXMLHttpRequest\b|\bsendBeacon\b|\blive provider\b|\bprovider call\b/i]
];

const requiredLabels = ['CURRENT', 'UPDATING', 'AGED', 'PARTIAL', 'UNAVAILABLE', 'FALLBACK', 'NO DATA'];
const allowedFetchCall = "fetch('./example-readouts.json', { cache: 'no-store' })";

function main() {
  const failures = [];

  for (const file of requiredFiles) {
    if (!fs.existsSync(file)) failures.push(`Missing required starter file: ${relative(file)}`);
  }
  if (failures.length > 0) fail(failures);

  const readme = read(path.join(starterRoot, 'README.md'));
  const html = read(path.join(staticRoot, 'index.html'));
  const inspectHtml = read(path.join(staticRoot, 'inspect-head.html'));
  const css = read(path.join(staticRoot, 'instrument-readout-panel.css'));
  const js = read(path.join(staticRoot, 'instrument-readout-panel.js'));
  const jsonText = read(path.join(staticRoot, 'example-readouts.json'));
  const senseReadme = read(path.join(sensePackageRoot, 'README.md'));
  const senseManifest = read(path.join(sensePackageRoot, 'MANIFEST.md'));
  const senseHtml = read(path.join(sensePackageRoot, 'index.html'));
  const senseInspectHtml = read(path.join(sensePackageRoot, 'inspect-head.html'));
  const senseCss = read(path.join(sensePackageRoot, 'instrument-readout-panel.css'));
  const senseJs = read(path.join(sensePackageRoot, 'instrument-readout-panel.js'));
  const senseJsonText = read(path.join(sensePackageRoot, 'example-readouts.json'));
  const primitiveReadme = read(path.join(primitivesRoot, 'README.md'));
  const primitiveTokens = read(path.join(primitivesRoot, 'glass-tokens.css'));
  const primitiveCss = read(path.join(primitivesRoot, 'glass-primitives.css'));
  const primitiveReadoutHtml = read(path.join(primitivesExamplesRoot, 'primitive-readout.html'));
  const primitiveRowHtml = read(path.join(primitivesExamplesRoot, 'primitive-row-drawer.html'));
  const data = JSON.parse(jsonText);

  requireIncludes(readme, [
    'display example input only',
    'not a bridge contract',
    'not a Sense bridge or runtime contract',
    'React scaffold',
    'target-project adapters',
    'source-owned placeholder',
    'display-only',
    'not a trust boundary',
    'Adopting the Lab head does not adopt Lab sample data, example meanings, state enums, roadmap, tooling, or future upgrade path'
  ], 'README', failures);

  requireIncludes(html, ['Instrument Readout Panel', 'readout-root', 'not bridge contracts'], 'HTML', failures);
  requireIncludes(inspectHtml, ['Head inspection', 'data-readout-id="source-degraded"', 'removes the Lab state selector'], 'inspection HTML', failures);
  requireIncludes(css, ['overflow-wrap: anywhere', '@media (max-width: 640px)', 'prefers-reduced-motion', 'state-no-data', 'state-unavailable'], 'CSS', failures);
  requireIncludes(js, ['Readout Detail', 'aria-expanded', 'example-readouts.json', 'sourceOwned', 'coverageInDetailOnly', 'source-owned-inline'], 'JS', failures);
  verifySensePackage({ senseReadme, senseManifest, senseHtml, senseInspectHtml, senseCss, senseJs, senseJsonText }, failures);
  verifyPrimitiveStarter({ primitiveReadme, primitiveTokens, primitiveCss, primitiveReadoutHtml, primitiveRowHtml }, failures);

  if (!Array.isArray(data.readouts) || data.readouts.length < requiredLabels.length) {
    failures.push('example-readouts.json: expected multiple display example states');
  }

  const labels = new Set((data.readouts || []).map((readout) => readout.state && readout.state.label));
  for (const label of requiredLabels) {
    if (!labels.has(label)) failures.push(`example-readouts.json: missing display label ${label}`);
  }

  verifyPolishExamples(data, failures);

  const implementationText = [
    html,
    inspectHtml,
    css,
    js,
    jsonText,
    senseHtml,
    senseInspectHtml,
    senseCss,
    senseJs,
    senseJsonText,
    primitiveTokens,
    primitiveCss,
    primitiveReadoutHtml,
    primitiveRowHtml
  ].join('\n');
  for (const [label, pattern] of excludedPatterns) {
    if (pattern.test(implementationText)) {
      failures.push(`Starter static reference appears to include excluded ${label}`);
    }
  }

  for (const [label, pattern] of unsafeImplementationPatterns) {
    if (pattern.test(implementationText)) {
      failures.push(`Starter static reference contains unsafe implementation pattern: ${label}`);
    }
  }

  enforceLocalFetchOnly(js, failures);
  enforceLocalFetchOnly(senseJs, failures);

  if (failures.length > 0) fail(failures);
  console.log('static starter verified');
}

function requireIncludes(text, snippets, label, failures) {
  for (const snippet of snippets) {
    if (!text.includes(snippet)) failures.push(`${label}: missing "${snippet}"`);
  }
}

function read(file) {
  return fs.readFileSync(file, 'utf8');
}

function relative(file) {
  return path.relative(root, file);
}

function verifyPolishExamples(data, failures) {
  const readouts = data.readouts || [];
  const byId = new Map(readouts.map((readout) => [readout.id, readout]));

  requireReadout(byId, 'no-data', failures);
  requireReadout(byId, 'unavailable', failures);
  requireReadout(byId, 'source-no-observation', failures);
  requireReadout(byId, 'source-blocked', failures);
  requireReadout(byId, 'source-degraded', failures);

  const noData = byId.get('no-data');
  const unavailable = byId.get('unavailable');
  if (noData && unavailable) {
    if (noData.absenceLabel === unavailable.absenceLabel) {
      failures.push('example-readouts.json: NO DATA and UNAVAILABLE absence labels must be distinct');
    }
    if (!String(noData.availability.reason).startsWith('No presentable fields:')) {
      failures.push('example-readouts.json: no-data must use reason-first generic display absence copy');
    }
    if (!String(unavailable.availability.reason).startsWith('Current read unavailable:')) {
      failures.push('example-readouts.json: unavailable must use reason-first unavailable current-read copy');
    }
  }

  const sourceText = JSON.stringify(readouts.filter((readout) => readout.sourceOwned));
  for (const term of ['no observation', 'no-scan', 'blocked', 'degraded']) {
    if (!sourceText.includes(term)) {
      failures.push(`example-readouts.json: sourceOwned examples missing ${term}`);
    }
  }
  requireIncludes(sourceText, ['owner', 'layer', 'Lab does not define'], 'sourceOwned', failures);

  const sourceBlocked = byId.get('source-blocked');
  if (sourceBlocked && sourceBlocked.state.label !== 'UNAVAILABLE') {
    failures.push('example-readouts.json: source-blocked should keep Lab display label UNAVAILABLE');
  }

  const sourceDegraded = byId.get('source-degraded');
  if (sourceDegraded) {
    if (sourceDegraded.state.label !== 'PARTIAL') {
      failures.push('example-readouts.json: source-degraded must not make degraded a Lab state label');
    }
    if (!sourceDegraded.displayPolicy || sourceDegraded.displayPolicy.coverageInDetailOnly !== true) {
      failures.push('example-readouts.json: source-degraded must move Coverage / Known fields behind Readout Detail');
    }
    if (sourceDegraded.primaryValue !== sourceDegraded.sourceOwned.visibleLabel) {
      failures.push('example-readouts.json: source-degraded must show source-owned label primary or near-primary');
    }
  }
}

function requireReadout(byId, id, failures) {
  if (!byId.has(id)) failures.push(`example-readouts.json: missing required polish example ${id}`);
}

function verifySensePackage(packageFiles, failures) {
  const { senseReadme, senseManifest, senseHtml, senseInspectHtml, senseCss, senseJs, senseJsonText } = packageFiles;
  requireIncludes(senseReadme, [
    'This package is a Lab presentation bundle for local Sense trial.',
    'It is display-only.',
    'Sense owns mapper behavior, source meaning, runtime behavior, product copy, review, and adoption.',
    'Lab example data is not Sense data.',
    'Lab display labels are not Sense state enums.',
    'Availability Reason Treatment',
    'Long Text Detail Block',
    'Warning / Gap Edge',
    'Expandable Status Card'
  ], 'Sense package README', failures);

  requireIncludes(senseManifest, [
    'Instrument Readout Panel Glass',
    'Availability Reason Treatment',
    'Long Text Detail Block',
    'Warning / Gap Edge',
    'Lab example data is not Sense data',
    'Lab display labels are not Sense state enums'
  ], 'Sense package manifest', failures);

  if (!senseHtml.includes('readout-root') || !senseInspectHtml.includes('readout-root')) {
    failures.push('Sense package HTML: expected static readout roots');
  }
  if (!senseCss.includes('state-no-data') || !senseJs.includes('example-readouts.json')) {
    failures.push('Sense package static files: expected copied glass CSS/JS behavior');
  }
  if (!senseJsonText.includes('source-no-observation') || !senseJsonText.includes('source-degraded')) {
    failures.push('Sense package example data: expected selected source-owned trial examples');
  }
}

function verifyPrimitiveStarter(primitiveFiles, failures) {
  const { primitiveReadme, primitiveTokens, primitiveCss, primitiveReadoutHtml, primitiveRowHtml } = primitiveFiles;

  requireIncludes(primitiveReadme, [
    'workspace/glass-inventory-spine.md',
    'CSS/tokens first; optional thin React wrappers later.',
    'Lab provides composable visual primitives.',
    'Projects assemble and authorize product surfaces.',
    'display material',
    'display boundary',
    'display seam',
    'display segment',
    'display readout',
    'display marker',
    'display drawer',
    'display row',
    'display sizing',
    'safe display motion / reduced-motion',
    'These are Bridge -> Interface / presentation vocabulary only.',
    'They do not define target source meaning, target state enums, adapter constants, runtime behavior, product surfaces, or adoption requirements.',
    'Target projects own',
    'State labels such as `CURRENT`, `PARTIAL`, and `UNAVAILABLE` are Lab display labels only.'
  ], 'primitive README', failures);

  requireIncludes(primitiveTokens, [
    '--glass-surface',
    '--glass-ink',
    '--glass-line',
    '--glass-current',
    '--glass-no-data',
    '--glass-space-',
    '--glass-motion-duration',
    'prefers-reduced-motion'
  ], 'primitive tokens', failures);

  requireIncludes(primitiveCss, [
    '.glass-material',
    '.glass-boundary',
    '.glass-seam',
    '.glass-segment',
    '.glass-readout',
    '.glass-marker',
    '.glass-drawer',
    '.glass-row',
    '.glass-size-compact',
    '.glass-motion-soft',
    'overflow-wrap: anywhere',
    'prefers-reduced-motion'
  ], 'primitive CSS', failures);

  requireIncludes(primitiveReadoutHtml, [
    'Display example only',
    'not target enums or source states',
    'Source-owned placeholder - example owner / display layer',
    'Readout Detail',
    'primitive-readout-token'
  ], 'primitive readout example', failures);

  requireIncludes(primitiveRowHtml, [
    'Display example only',
    'UNAVAILABLE is a Lab display label here, not a target state enum',
    'Readout Detail',
    'Owner/layer qualified'
  ], 'primitive row example', failures);

  const primitiveImplementation = [primitiveTokens, primitiveCss, primitiveReadoutHtml, primitiveRowHtml].join('\n');
  if (/\bReact\b|jsx|tsx|react-dom/i.test(primitiveImplementation)) {
    failures.push('primitive starter implementation must not include React or JSX');
  }
}

function enforceLocalFetchOnly(text, failures) {
  const fetchMatches = text.match(/\bfetch\s*\([^)]*\)/g) || [];
  for (const match of fetchMatches) {
    if (match !== allowedFetchCall) {
      failures.push(`Starter static reference uses a fetch other than the allowed local JSON fetch: ${match}`);
    }
  }

  if (!fetchMatches.includes(allowedFetchCall)) {
    failures.push(`Starter static reference is missing the documented local JSON fetch allowance: ${allowedFetchCall}`);
  }
}

function fail(failures) {
  throw new Error(`Static starter verification failed:\n${failures.join('\n')}`);
}

main();
