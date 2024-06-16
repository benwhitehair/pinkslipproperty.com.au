import { mauve, mauveDark, pink, pinkDark } from '@radix-ui/colors';
import typographyPlugin from '@tailwindcss/typography';
import colors, { current, white } from 'tailwindcss/colors';
import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';

export const fontStackDisplayArray = [
	'Barlow Condensed',
	...defaultTheme.fontFamily.sans,
];

export const fontStackSansArray = [
	'Open Sans Variable',
	...defaultTheme.fontFamily.sans,
];

const typography = {
	heading: {
		1: {
			fontSize: '3rem',
			fontWeight: '600',
			letterSpacing: '-0.02em',
			lineHeight: '1',
			textTransform: 'uppercase',
			textWrap: 'pretty',
		},
		2: {
			fontSize: '2.25rem',
			fontWeight: '600',
			letterSpacing: '-0.02em',
			lineHeight: '2.5rem',
			textTransform: 'uppercase',
			textWrap: 'pretty',
		},
		3: {
			fontSize: '1.875rem',
			fontWeight: '600',
			letterSpacing: '-0.02em',
			lineHeight: '2.25rem',
			textTransform: 'uppercase',
			textWrap: 'pretty',
		},
	},
};

export function createTypographyPlugin() {
	return plugin(({ addComponents, addUtilities }) => {
		const headingUtilities = Object.fromEntries(
			Object.entries(typography.heading).map(([key, value]) => [
				`.text-heading-${key}`,
				{
					fontFamily: fontStackDisplayArray.join(', '),
					...value,
				},
			]),
		);

		addComponents({
			...headingUtilities,
		});
	});
}

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			current: 'currentColor',
			inherit: colors.inherit,
			pink_1: '#fffcfd',
			pink_2: '#fef7f8',
			pink_3: '#feeaee',
			pink_4: '#fedde4',
			pink_5: '#facfd8',
			pink_6: '#f2c0cc',
			pink_7: '#e9adbc',
			pink_8: '#df96a8',
			pink_9: '#eb5286',
			pink_10: '#dc457a',
			pink_11: '#c42e67',
			pink_12: '#601b33',
			pink_contrast: '#fff',
			pink_surface: '#fef5f6cc',
			pink_indicator: '#eb5286',
			pink_track: '#eb5286',
			gray_1: '#ebeef1',
			gray_2: '#aab5bf',
			gray_3: '#6f7d8a',
			gray_4: '#61707d',
			gray_5: '#536270',
			gray_6: '#3e4953',
			gray_7: '#323b43',
			gray_8: '#2b3238',
			gray_9: '#242a30',
			gray_10: '#1e2327',
			gray_11: '#16191c',
			gray_12: '#0e1114',
			gray_contrast: '#ffffff',
			gray_surface: '#ffffffcc',
			gray_indicator: '#7f8f9d',
			gray_track: '#7f8f9d',
			indigo_1: '#fcfdff',
			indigo_2: '#f7f9ff',
			indigo_3: '#eef1ff',
			indigo_4: '#e3e9ff',
			indigo_5: '#d5ddfe',
			indigo_6: '#c5cffa',
			indigo_7: '#b1bdf1',
			indigo_8: '#95a3e7',
			indigo_9: '#2f365f',
			indigo_10: '#404873',
			indigo_11: '#5762a2',
			indigo_12: '#2b325a',
			indigo_contrast: '#fff',
			indigo_surface: '#f5f8ffcc',
			indigo_indicator: '#2f365f',
			indigo_track: '#2f365f',
			transparent: colors.transparent,
			white: colors.white,
		},
		extend: {
			fontFamily: {
				display: fontStackDisplayArray,
				sans: fontStackSansArray,
			},
			typography: ({ theme }) => ({
				DEFAULT: {
					css: {
						'--tw-prose-headings': theme('colors.gray_7'),
						'--tw-prose-links': theme('colors.pink_9'),
						'--tw-prose-bullets': theme('colors.pink_9'),
						fontFamily: fontStackSansArray.join(', '),
						h1: {
							fontFamily: fontStackSansArray.join(', '),
							textWrap: 'pretty',
						},
						h2: {
							fontFamily: fontStackSansArray.join(', '),
							textWrap: 'pretty',
						},
						a: {
							fontWeight: '700',
							textDecoration: 'none',
							'&:hover': {
								textDecoration: 'underline',
							},
						},
						strong: {
							fontWeight: '700',
						},
					},
				},
			}),
		},
	},
	plugins: [typographyPlugin, createTypographyPlugin()],
};
