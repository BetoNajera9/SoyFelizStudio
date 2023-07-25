const defaultTheme = require('tailwindcss/defaultTheme')
// const plugin = require('tailwindcss/plugin')

module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,vue}'],
	plugins: [],
	theme: {
		colors: {
			...defaultTheme.colors,
			white: { DEFAULT: '#fff' },
			black: { DEFAULT: '#000' },
			transparent: {
				DEFAULT: 'rgba(0, 0, 0, 0)',
				dark: 'rgba(0, 0, 0, 0.8)',
			},
		},
	},
	variants: {},
}
