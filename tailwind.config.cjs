/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#EB3F67',
				secondary: '#2A2B2E'
			}
		}
	},
	plugins: [require('daisyui')]
};
