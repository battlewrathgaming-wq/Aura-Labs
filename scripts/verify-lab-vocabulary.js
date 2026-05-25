const fs = require('node:fs');
const path = require('node:path');
const { projectRoot } = require('../src/util/tempPaths');

const root = projectRoot();
const protectedWordsRoot = 'F:\\Projects\\Docs\\Aura-Project-Orchestration\\terminology\\protected-words';

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
      'Reading local bridge',
      'Updating from the local bridge.',
      'Last read pending',
      '0/0 sources',
      'Awaiting first bridge response.',
      'Updating',
      'Readout Detail',
      'SmokeFlash material harness',
      'Authority Window TTL Strip',
      'Material state',
      'No active window',
      'Awaiting staged authority window.',
      'Details',
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
      'Fallback basis active',
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
      'Band marker',
      'Ready when an authority interval is supplied.',
      'Bounded interval is open.',
      'Do not imply background behavior.',
      'Display-only handoff marker is present.',
      'Interval ended without capture.',
      'Waiting for next eligible interval.',
      'Required authority path is unavailable.',
      'Shortcut unavailable; manual path remains visible.',
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
      'Return a calm pending presentation state.',
      'Return an empty presentation state.',
      'Return presentation data with an old last-read time.',
      'Return a failed fixture-read state.',
      'Return an unavailable readout with fallback display basis.',
      'Return presentation data with one expected field omitted.',
      'Return populated review data with overflow-prone presentation text.',
      'No attention items shown.',
      'No sample items shown.',
      'Reading presentation state',
      'Reading neutral fixture through the local service bridge.',
      'Reading sample slots.',
      'Fallback display basis available.',
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
      'Review fallback state treatment for the Instrument Status Band.',
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

  reportProtectedTermDiscovery();

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

function reportProtectedTermDiscovery() {
  const lookup = loadProtectedLookups();
  const candidates = discoverCandidates(lookup);

  if (lookup.warnings.length > 0) {
    console.log('Lab protected-term discovery lookup warnings:');
    lookup.warnings.forEach((warning) => console.log(`- ${warning}`));
  }

  if (candidates.length === 0) {
    console.log('Lab protected-term discovery: 0 candidates');
    return;
  }

  console.log(`Lab protected-term discovery: ${candidates.length} warning-only candidate(s)`);
  for (const candidate of candidates.slice(0, 15)) {
    console.log(
      `- ${candidate.term} | owner=${candidate.owner} | layer=${candidate.layer} | ` +
        `file=${candidate.file} | reason=${candidate.reason} | disposition=${candidate.disposition}`
    );
  }

  if (candidates.length > 15) {
    console.log(`- ${candidates.length - 15} additional candidate(s) omitted from console output`);
  }
}

function loadProtectedLookups() {
  const warnings = [];
  const files = [
    'atlas-protected.json',
    'sense-protected.json',
    'lab-protected.json',
    'lab-quarantine.json',
    'shared-collisions.json',
    'pending-candidates.json'
  ];
  const lookup = {
    warnings,
    protectedTerms: [],
    labAllowed: new Set(),
    labQuarantine: [],
    collisions: []
  };

  for (const filename of files) {
    const fullPath = path.join(protectedWordsRoot, filename);
    if (!fs.existsSync(fullPath)) {
      warnings.push(`missing shared lookup file: ${fullPath}`);
      continue;
    }

    let parsed;
    try {
      parsed = JSON.parse(fs.readFileSync(fullPath, 'utf8'));
    } catch (error) {
      warnings.push(`could not parse shared lookup file ${fullPath}: ${error.message}`);
      continue;
    }

    if (filename === 'lab-protected.json') {
      for (const entry of parsed.terms || []) {
        lookup.labAllowed.add(entry.term.toLowerCase());
        lookup.protectedTerms.push(entry);
      }
      continue;
    }

    if (filename === 'lab-quarantine.json') {
      lookup.labQuarantine.push(...(parsed.terms || []));
      continue;
    }

    if (filename === 'shared-collisions.json') {
      lookup.collisions.push(...(parsed.terms || []));
      continue;
    }

    lookup.protectedTerms.push(...(parsed.terms || []));
  }

  return lookup;
}

function discoverCandidates(lookup) {
  const seen = new Set();
  const candidates = [];
  for (const surface of copySurface) {
    for (const copy of surface.strings) {
      const detected = classifyCopyCandidate(copy, surface.file, lookup);
      if (!detected) continue;

      const key = `${detected.term}|${detected.file}|${detected.reason}`;
      if (seen.has(key)) continue;
      seen.add(key);
      candidates.push(detected);
    }
  }

  return candidates.sort((left, right) => {
    const leftRank = dispositionRank(left.disposition);
    const rightRank = dispositionRank(right.disposition);
    if (leftRank !== rightRank) return leftRank - rightRank;
    return left.term.localeCompare(right.term);
  });
}

function classifyCopyCandidate(copy, file, lookup) {
  const normalized = copy.trim();
  if (!looksMeaningful(normalized)) return null;

  const protectedHit = lookup.protectedTerms.find((entry) => includesTerm(normalized, entry.term));
  if (protectedHit && protectedHit.owner !== 'Lab') {
    return {
      term: normalized,
      owner: protectedHit.owner,
      layer: inferLayer(normalized, file),
      file,
      reason: `matches ${protectedHit.owner}-protected term "${protectedHit.term}"`,
      disposition: 'ask Human/Overseer before Lab default use'
    };
  }

  const quarantineHit = lookup.labQuarantine.find((entry) => includesTerm(normalized, entry.term));
  if (quarantineHit) {
    return {
      term: normalized,
      owner: 'Lab review',
      layer: inferLayer(normalized, file),
      file,
      reason: `contains Lab quarantine term "${quarantineHit.term}"`,
      disposition: 'review as source-owned, internal/support, or replacement'
    };
  }

  const collisionHit = lookup.collisions.find((entry) => includesTerm(normalized, entry.term));
  if (collisionHit && !lookup.labAllowed.has(normalized.toLowerCase())) {
    return {
      term: normalized,
      owner: (collisionHit.owners || ['shared collision']).join('/'),
      layer: inferLayer(normalized, file),
      file,
      reason: `matches shared collision term "${collisionHit.term}"`,
      disposition: 'qualify owner/layer or leave as reviewed Lab copy'
    };
  }

  if (isCandidatePhrase(normalized) && !lookup.labAllowed.has(normalized.toLowerCase())) {
    return {
      term: normalized,
      owner: 'Lab candidate',
      layer: inferLayer(normalized, file),
      file,
      reason: 'meaningful UI/service phrase not in Lab protected list',
      disposition: 'leave, protect, or mark support-only after Overseer review'
    };
  }

  return null;
}

function looksMeaningful(copy) {
  if (copy.length < 4 || copy.length > 140) return false;
  if (!/[A-Za-z]/.test(copy)) return false;
  if (/^[A-Z0-9_\-./:]+$/.test(copy)) return false;
  if (/^workspace[\\/]/i.test(copy)) return false;
  return true;
}

function isCandidatePhrase(copy) {
  if (copy.includes(';') || copy.endsWith('.')) return false;
  const words = copy.split(/\s+/).filter(Boolean);
  if (words.length < 2 || words.length > 5) return false;
  return words.some((word) => /^[A-Z][a-z]/.test(word));
}

function includesTerm(copy, term) {
  const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return new RegExp(`\\b${escaped}\\b`, 'i').test(copy);
}

function inferLayer(copy, file) {
  if (file.includes('renderer')) return 'UI-facing';
  if (file.includes('serviceRegistry')) {
    if (/^Return\b/.test(copy)) return 'service command description';
    if (/basis|boundary|note|family|state/i.test(copy)) return 'bridge-facing presentation fixture';
    return 'service/support copy';
  }
  return 'unresolved';
}

function dispositionRank(disposition) {
  if (disposition.startsWith('ask')) return 0;
  if (disposition.startsWith('review')) return 1;
  if (disposition.startsWith('qualify')) return 2;
  return 3;
}

main();
