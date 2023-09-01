const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: [
		'./components/**/*.{js,vue,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./nuxt.config.{js,ts}',
		'./app.vue',
	],
	theme: {
		colors: {
			...defaultTheme.colors,
			white: { DEFAULT: '#fff' },
			black: { DEFAULT: '#000' },
			red: { DEFAULT: '#f00' },
			transparent: {
				DEFAULT: 'rgba(0, 0, 0, 0)',
				dark: 'rgba(0, 0, 0, 0.8)',
			},
		},

		extend: {
			fontFamily: {
				'grold-thin': ['GroldThin'],
				'grold-semi-light': ['GroldSemiLight'],
				grold: ['Grold'],
				'grold-medium': ['GroldMedium'],
				'grold-bold': ['GroldBold'],
				'grold-black': ['GroldBlack'],
			},
			lineHeight: {
				'extra-none': '0.75',
			},
		},
	},
	plugins: [],
}
