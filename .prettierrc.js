/** @type {import("prettier").Options} */
export default {
	arrowParens: 'always',
	bracketSameLine: false,
	bracketSpacing: true,
	embeddedLanguageFormatting: 'auto',
	endOfLine: 'lf',
	htmlWhitespaceSensitivity: 'css',
	insertPragma: false,
	jsxSingleQuote: false,
	overrides: [{ files: '*.astro', options: { parser: 'astro' } }],
	plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
	printWidth: 80,
	proseWrap: 'always',
	quoteProps: 'as-needed',
	requirePragma: false,
	semi: true,
	singleAttributePerLine: false,
	singleQuote: true,
	tabWidth: 2,
	tailwindAttributes: ['class', 'className', 'ngClass', 'class:list'],
	tailwindFunctions: ['clsx', 'cn'],
	trailingComma: 'all',
	useTabs: true,
};