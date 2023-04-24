<!-- layout.svelte -->
<script lang="ts">
	import { onMount } from 'svelte';
	import Footer from '../components/footers/Footer.svelte';
	import Mainheader from '../components/headers/Mainheader.svelte';
	import Mobileheader from '../components/headers/Mobileheader.svelte';
	import { getTheme, setDarkTheme, setLightTheme } from '../utils/theme';
	import 'swiper/swiper-bundle.css';
	import '../styles/app.css';
	import { store } from '../store';
	import BottomNav from '../components/elements/BottomNav.svelte';

	let theme = getTheme();

	const changeThemeOnLoad = () => {
		if (theme === 'dark') {
			setLightTheme();
			store.update((currentState) => {
				return { ...currentState, isDarkMode: false };
			});
		} else {
			setDarkTheme();
			store.update((currentState) => {
				return { ...currentState, isDarkMode: true };
			});
		}
		theme = getTheme();
	};

	onMount(() => {
		changeThemeOnLoad();
	});

	export let title = '';
	export let description = '';
	export let imageUrl = '';
</script>

<Mainheader />
<Mobileheader />
<div class="min-h-[100vh] bg-gray-100 dark:bg-gray-800 dark:text-gray-100 dark:border-b-gray-800">
	<slot />
</div>
<BottomNav />
<Footer />
