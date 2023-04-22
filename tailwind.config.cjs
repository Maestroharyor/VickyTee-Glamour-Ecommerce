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
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				secondary: {
					...require('daisyui/src/colors/themes')['[data-theme=light]'],
					primary: '#EB3F67'
				}
			}
		]
	}
};
