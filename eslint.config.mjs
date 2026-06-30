import { n8nCommunityNodesPlugin } from '@n8n/eslint-plugin-community-nodes';
import tsParser from '@typescript-eslint/parser';

/** @type {import('eslint').Linter.Config[]} */
export default [
	{
		ignores: ['**/dist/**', '**/node_modules/**', '**/*.js', 'scripts/**'],
	},
	n8nCommunityNodesPlugin.configs.recommended,
	{
		files: ['**/*.ts'],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				project: './tsconfig.json',
				ecmaVersion: 'latest',
				sourceType: 'module',
			},
		},
	},
	{
		files: ['package.json'],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				project: './tsconfig.json',
				extraFileExtensions: ['.json'],
			},
		},
	},
	{
		files: ['**/ITGlueApi.credentials.ts'],
		rules: {
			'@n8n/community-nodes/icon-validation': 'off',
			'@n8n/community-nodes/cred-class-field-icon-missing': 'off',
		},
	},
	{
		files: ['**/ITGlue.node.ts'],
		rules: {
			'@n8n/community-nodes/require-continue-on-fail': 'off',
			'@n8n/community-nodes/icon-prefer-themed-variants': 'off',
		},
	},
	{
		files: [
			'**/nodes/ITGlue/transport.ts',
			'**/nodes/ITGlue/actions/router.ts',
			'**/nodes/ITGlue/actions/organization/bulkUpdate/execute.ts',
		],
		rules: {
			'@n8n/community-nodes/require-node-api-error': 'off',
		},
	},
];
