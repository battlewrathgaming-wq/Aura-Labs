const fs = require('node:fs');
const path = require('node:path');
const { projectRoot } = require('../src/util/tempPaths');

const root = projectRoot();

const riskyVocabulary = [
  ['verified', /\bverified\b/i],
  ['trust', /\btrust\b/i],
  ['certainty', /\bcertainty\b/i],
  ['proof', /\bproof\b/i],
  ['truth', /\btruth\b/i],
  ['source of truth', /\bsource\s+of\s+truth\b/i],
  ['authoritative', /\bauthoritative\b/i],
  ['evidence', /\bevidence\b/i],
  ['intel', /\bintel\b/i],
  ['intelligence', /\bintelligence\b/i],
  ['tactical', /\btactical\b/i],
  ['combat', /\bcombat\b/i],
  ['operator', /\boperator\b/i],
  ['watch', /\bwatch\b/i],
  ['monitoring', /\bmonitoring\b/i],
  ['listening', /\blistening\b/i],
  ['snapshot', /\bsnapshot\b/i],
  ['report', /\breport(?:ed|ing|s)?\b/i],
  ['record', /\brecord(?:ed|ing|s)?\b/i],
  ['finding', /\bfinding(?:s)?\b/i],
  ['schema', /\bschema(?:s)?\b/i],
  ['Core', /\bCore\b/],
  ['Seed', /\bSeed\b/]
];

const allowedRiskyPhrases = new Set();

const copySurface = [
  {
    file: 'src/renderer/index.html',
    strings: [
      'Aura Lab',
      'Pin',
      'Bridge read pending',
      'Source coverage',
      'Bridge State Readout',
      'UPDATING',
      'Updating from the local bridge.',
      'Last read pending',
      '0/0 sources',
      'Readout Detail',
      'Needs Attention',
      'Reading project attention items.',
      'Presentation family',
      'Review state',
      'Development-only fixture preview',
      'Bridge Diagnostics',
      'Runtime',
      'Commands',
      'Registered Services'
    ]
  },
  {
    file: 'src/renderer/app.js',
    strings: [
      'Bridge read pending',
      'CURRENT',
      'Current bridge read is ready for display.',
      'Current local sources available.',
      'UPDATING',
      'Updating from the local bridge.',
      'Awaiting first bridge response.',
      'AGED',
      'Showing the last successful bridge read.',
      'Last successful local source read.',
      'PARTIAL',
      'Available fields are still displayed.',
      'UNAVAILABLE',
      'Current bridge read is unavailable.',
      'Bridge read unavailable.',
      'FALLBACK',
      'Using fallback display posture.',
      'Fallback presentation path.',
      'NO DATA',
      'Bridge responded with no presentable data.',
      'No presentation payload available.',
      'Updating now',
      'No data returned',
      'Last read unknown',
      'Last read unavailable',
      'Last attempt now',
      'Acquiring fields',
      'No fields',
      'No data: no presentable fields were returned.',
      'Updating: waiting for the first local response.',
      'No gaps or warnings shown.',
      'Reading',
      'Unavailable',
      'Not provided',
      'None shown',
      'No attention items shown.',
      'Read from source',
      'Showing last successful read',
      'Partial view',
      'Last read pending',
      'Last read unavailable'
    ]
  },
  {
    file: 'src/services/serviceRegistry.js',
    strings: [
      'Briefing',
      'Neutral Sample',
      'Return populated presentation data from local fixture sources.',
      'Return an empty presentation state.',
      'Return presentation data with an old last-read time.',
      'Return a failed fixture-read state.',
      'Return presentation data with one expected field omitted.',
      'Return populated review data with overflow-prone presentation text.',
      'No attention items shown.',
      'No sample items shown.',
      'Display basis: fixture-backed sample.',
      'Display basis: fixture-backed sample for typography, source labeling, and containment review only.',
      'Presentation boundary: sample data exercises display mapping only and does not define product meaning or an upstream bridge contract.',
      'Display note: this neutral family uses generic sample slots to keep basis, freshness, and availability copy visible under longer text pressure.',
      'Display basis',
      'Presentation boundary',
      'Display note',
      'Current focus',
      'Expected handoff',
      'Deferred',
      'Implement the first bounded fixture-backed presentation family prototype while keeping Briefing behavior, source language, state grammar, diagnostics hierarchy, and narrow-window text containment intact.',
      'workspace/DevHS30-fixture-backed-presentation-family-prototype.md with family and state behavior, visual smoke notes, screenshot notes, process cleanup, and residual risk captured for Overseer review.',
      'Partial readout; available fields include source labels.',
      'Read from local workspace sources.'
    ]
  }
];

function main() {
  const failures = [];
  for (const surface of copySurface) {
    const text = read(surface.file);
    for (const copy of surface.strings) {
      if (!text.includes(copy)) {
        failures.push(`${surface.file}: expected guarded copy is missing: ${copy}`);
        continue;
      }
      const risky = riskyHits(copy);
      if (risky.length > 0 && !allowedRiskyPhrases.has(copy)) {
        failures.push(`${surface.file}: risky Lab-owned default copy "${copy}" contains ${risky.join(', ')}`);
      }
    }
  }

  if (failures.length > 0) {
    throw new Error(`Lab vocabulary guardrail failed:\n${failures.join('\n')}`);
  }

  console.log('lab vocabulary verified');
}

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), 'utf8');
}

function riskyHits(copy) {
  return riskyVocabulary
    .filter(([, pattern]) => pattern.test(copy))
    .map(([label]) => label);
}

main();
