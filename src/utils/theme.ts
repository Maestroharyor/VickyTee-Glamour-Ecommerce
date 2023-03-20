// theme.js
export function setLightTheme() {
	if (typeof window !== 'undefined') {
		console.log('Set to light');
		localStorage.setItem('theme', 'light');
		document.querySelector('html')!.classList.remove('dark');
	}
}

export function setDarkTheme() {
	if (typeof window !== 'undefined') {
		console.log('Set to dark');
		localStorage.setItem('theme', 'dark');
		document.querySelector('html')!.classList.add('dark');
	}
}

export function getTheme() {
	if (typeof window !== 'undefined') {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			return 'dark';
		} else {
			return 'light';
		}
	}
}
