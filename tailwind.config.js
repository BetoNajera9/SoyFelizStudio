const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,vue}'],
	plugins: [],
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
				grold: ['Grold'],
			},
			lineHeight: {
				'extra-none': '0.75',
			},
		},
	},
	variants: {},
}
