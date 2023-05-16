import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{ts,tsx}'],
	theme: {
		extend: {
			spacing: {
				13: '3.25rem',
			},
			aspectRatio: {
				banner: '3 / 1',
			},
		},
		colors: {
			accent: 'rgb(var(--accent))',
			background: 'rgb(var(--background))',
			primary: {
				DEFAULT: 'rgb(var(--primary))',
				fg: 'rgb(var(--primary-fg))',
			},
			secondary: {
				DEFAULT: 'rgb(var(--secondary))',
				fg: 'rgb(var(--secondary-fg))',
			},
			hinted: {
				DEFAULT: 'rgb(var(--hinted))',
				fg: 'rgb(var(--hinted-fg))',
			},
			muted: {
				DEFAULT: 'rgb(var(--muted))',
				fg: 'rgb(var(--muted-fg))',
			},
			input: 'rgb(var(--input))',
			divider: 'rgb(var(--divider))',
		},
		fontFamily: {
			sans: `"Roboto", ui-sans-serif, sans-serif`,
			mono: `"JetBrains Mono NL", ui-monospace, monospace`,
		},
	},
	plugins: [
		// forms(),
	],
};