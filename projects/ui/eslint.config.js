// @ts-check
const eslint = require('@eslint/js');
const { defineConfig } = require('eslint/config');
const tseslint = require('typescript-eslint');
const angular = require('angular-eslint');

module.exports = (async () => {
	const stylistic = await import('@stylistic/eslint-plugin');

	return defineConfig([
		{
			files: ['**/*.ts'],
			extends: [
				eslint.configs.recommended,
				tseslint.configs.recommended,
				tseslint.configs.stylistic,
				angular.configs.tsRecommended,
			],
			plugins: {
				'@stylistic': stylistic.default,
			},
			processor: angular.processInlineTemplates,
			rules: {
				'@stylistic/indent': ['error', 'tab'],
				'@stylistic/no-tabs': 'off',
				'@stylistic/no-mixed-spaces-and-tabs': 'error',
				'@angular-eslint/directive-selector': [
					'error',
					{
						type: 'attribute',
						prefix: 'plim',
						style: 'camelCase',
					},
				],
				'@angular-eslint/component-selector': [
					'error',
					{
						type: 'element',
						prefix: 'plim',
						style: 'kebab-case',
					},
				],
			},
		},
		{
			files: [
				'**/button/button.ts',
				'**/input/input.ts',
		'**/textarea/textarea.ts',
		'**/checkbox/checkbox.ts',
				'**/radio/radio.ts',
		'**/slider/slider.ts',
		'**/datepicker/datepicker.ts',
		'**/timepicker/timepicker.ts',
		'**/switch/switch.ts',
		'**/select/native-select.ts',
		'**/button-toggle/button-toggle.ts',
	],
			rules: {
				'@angular-eslint/component-selector': [
					'error',
					{
						type: 'attribute',
						prefix: 'plim',
						style: 'camelCase',
					},
				],
			},
		},
		{
			files: ['**/*.html'],
			extends: [angular.configs.templateRecommended, angular.configs.templateAccessibility],
			rules: {},
		},
	]);
})();
