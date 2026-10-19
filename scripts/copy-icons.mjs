#!/usr/bin/env node
/**
 * Copies node and credential icons (png/svg) into dist, preserving directory structure.
 */
import { readdirSync, mkdirSync, copyFileSync } from 'node:fs';
import { resolve, dirname, join, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const ICON_EXTENSIONS = new Set(['.png', '.svg']);

for (const dir of ['nodes', 'credentials']) {
	const sourceDir = resolve(root, dir);
	const destDir = resolve(root, 'dist', dir);

	for (const file of readdirSync(sourceDir, { recursive: true })) {
		if (!ICON_EXTENSIONS.has(extname(file).toLowerCase())) continue;

		const destination = join(destDir, file);
		mkdirSync(dirname(destination), { recursive: true });
		copyFileSync(join(sourceDir, file), destination);
	}
}
