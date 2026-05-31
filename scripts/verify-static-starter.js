const fs = require('node:fs');
const path = require('node:path');
const { projectRoot } = require('../src/util/tempPaths');

const root = projectRoot();
const starterRoot = path.join(root, 'portable-presentation-starter');
const staticRoot = path.join(starterRoot, 'examples', 'static');

const requiredFiles = [
  path.join(starterRoot, 'README.md'),
  path.join(staticRoot, 'index.html'),
  path.join(staticRoot, 'instrument-readout-panel.css'),
  path.join(staticRoot, 'instrument-readout-panel.js'),
  path.join(staticRoot, 'example-readouts.json')
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

const requiredLabels = ['CURRENT', 'UPDATING', 'AGED', 'PARTIAL', 'UNAVAILABLE', 'FALLBACK', 'NO DATA'];

function main() {
  const failures = [];

  for (const file of requiredFiles) {
    if (!fs.existsSync(file)) failures.push(`Missing required starter file: ${relative(file)}`);
  }
  if (failures.length > 0) fail(failures);

  const readme = read(path.join(starterRoot, 'README.md'));
  const html = read(path.join(staticRoot, 'index.html'));
  const css = read(path.join(staticRoot, 'instrument-readout-panel.css'));
  const js = read(path.join(staticRoot, 'instrument-readout-panel.js'));
  const jsonText = read(path.join(staticRoot, 'example-readouts.json'));
  const data = JSON.parse(jsonText);

  requireIncludes(readme, [
    'display example input only',
    'not a bridge contract',
    'not a Sense bridge or runtime contract',
    'React scaffold',
    'target-project adapters',
    'source-owned placeholder'
  ], 'README', failures);

  requireIncludes(html, ['Instrument Readout Panel', 'readout-root', 'not bridge contracts'], 'HTML', failures);
  requireIncludes(css, ['overflow-wrap: anywhere', '@media (max-width: 640px)', 'prefers-reduced-motion'], 'CSS', failures);
  requireIncludes(js, ['Readout Detail', 'aria-expanded', 'example-readouts.json', 'sourceOwned'], 'JS', failures);

  if (!Array.isArray(data.readouts) || data.readouts.length < requiredLabels.length) {
    failures.push('example-readouts.json: expected multiple display example states');
  }

  const labels = new Set((data.readouts || []).map((readout) => readout.state && readout.state.label));
  for (const label of requiredLabels) {
    if (!labels.has(label)) failures.push(`example-readouts.json: missing display label ${label}`);
  }

  const sourceOwned = (data.readouts || []).find((readout) => readout.sourceOwned);
  if (!sourceOwned) {
    failures.push('example-readouts.json: expected a sourceOwned qualification example');
  } else {
    const sourceOwnedText = JSON.stringify(sourceOwned.sourceOwned);
    for (const term of ['blocked', 'no-scan', 'degraded']) {
      if (!sourceOwnedText.includes(term)) {
        failures.push(`example-readouts.json: sourceOwned example missing ${term}`);
      }
    }
    requireIncludes(sourceOwnedText, ['owner', 'layer', 'Lab does not define'], 'sourceOwned', failures);
  }

  const implementationText = [html, css, js, jsonText].join('\n');
  for (const [label, pattern] of excludedPatterns) {
    if (pattern.test(implementationText)) {
      failures.push(`Starter static reference appears to include excluded ${label}`);
    }
  }

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

function fail(failures) {
  throw new Error(`Static starter verification failed:\n${failures.join('\n')}`);
}

main();
