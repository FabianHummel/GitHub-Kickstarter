module.exports = {
	mode: 'jit',
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}',
	],
	darkMode: 'class',
	theme: {
		extend: {
			keyframes: {
				
			},
			animation: {
				
			}
		},
		fontFamily: {
			'main': ["Inter", "Segoe UI", "sans-serif"],
		},
		fontWeight: {
			'light': 200,
			'normal': 400,
			'bold': 800,
		},
		colors: {
			'light': '#161b22',
			'dark': '#0d1117',
			'primary': '#58a6ff',
			'borders': '#30363d',
			'font': '#c9d1d9',
			'white': '#f0f6fc',
			'muted': '#8b949e',
		},
		fontSize: {
			'base': '1rem',
			'xs': '.75rem',
			'sm': '.875rem',
			'lg': '1.125rem',
			'xl': '1.25rem',
		},
		screens: {
			'sm': '520px',
			'lg': '768px',
		}
	}
};