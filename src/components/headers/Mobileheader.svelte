<script lang="ts">
	import Icon from '@iconify/svelte';
	import VickyTeeLogo from '../../assets/svgs/vickyteeLogo.svg';
	import VickyTeeLogoDark from '../../assets/svgs/vickyteeLogoDark.svg';
	import { mainMenuItems } from '../../data/menu';
	import { store } from '../../store';
	import { getTheme } from '../../utils/theme';
	import Switch from '../elements/Switch.svelte';

	let theme = getTheme();
	let isDarkTheme = theme === 'light' ? false : true;

	store.subscribe((data) => {
		isDarkTheme = data.isDarkMode;
	});
</script>

<div class="navbar flex lg:hidden bg-gray-50 dark:bg-secondary shadow-lg sticky top-0 z-20">
	<div class="navbar-start">
		<div class="dropdown">
			<div class="btn btn-ghost btn-circle">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h7"
					/></svg
				>
			</div>
		</div>
	</div>
	<div class="navbar-center">
		<!-- Logo -->
		<a href="/" class="text-xl font-bold text-gray-800 uppercase hover:text-gray-700 w-36">
			{#if isDarkTheme}
				<img src={VickyTeeLogoDark} alt="Vicky Tee's Logo Dark" />
			{:else}
				<img src={VickyTeeLogo} alt="Vicky Tee's Logo" />
			{/if}
		</a>
	</div>
	<div class="navbar-end flex gap-3">
		<Switch />
	</div>
</div>
