#!/usr/bin/env node

import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const libDir = path.join(root, 'projects', 'ui', 'src', 'lib');
const allowedFiles = new Set([
	path.normalize('projects/ui/src/styles/_primitives.scss'),
	path.normalize('projects/ui/src/styles/_theme.scss'),
]);

const hexPattern = /#[0-9a-fA-F]{3,8}\b/g;
const violations = [];

async function walk(dir) {
	const entries = await readdir(dir, { withFileTypes: true });

	for (const entry of entries) {
		const fullPath = path.join(dir, entry.name);

		if (entry.isDirectory()) {
			await walk(fullPath);
			continue;
		}

		if (!entry.name.endsWith('.scss')) {
			continue;
		}

		const relative = path.relative(root, fullPath);

		if (allowedFiles.has(path.normalize(relative))) {
			continue;
		}

		const content = await readFile(fullPath, 'utf8');
		const matches = content.match(hexPattern);

		if (matches?.length) {
			violations.push({ file: relative, count: matches.length, samples: [...new Set(matches)].slice(0, 3) });
		}
	}
}

await walk(libDir);

if (violations.length > 0) {
	console.error('Hardcoded hex colours found in library component styles:\n');
	for (const violation of violations) {
		console.error(`  ${violation.file} (${violation.count}) e.g. ${violation.samples.join(', ')}`);
	}
	console.error('\nUse --plim-* design tokens instead.');
	process.exit(1);
}

console.log('Token validation passed: no hardcoded hex in projects/ui/src/lib/**/*.scss');
