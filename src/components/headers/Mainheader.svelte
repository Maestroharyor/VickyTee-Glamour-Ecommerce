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

<header class="bg-gray-50 dark:bg-secondary shadow-lg hidden lg:block sticky top-0 z-[40]">
	<div class="container flex items-center justify-between px-6 py-2 mx-auto">
		<div class="flex items-center">
			<!-- Logo -->
			<a href="/" class="text-xl font-bold text-gray-800 uppercase hover:text-gray-700 w-36">
				{#if isDarkTheme}
					<img src={VickyTeeLogoDark} alt="Vicky Tee's Logo Dark" />
				{:else}
					<img src={VickyTeeLogo} alt="Vicky Tee's Logo" />
				{/if}
			</a>
		</div>

		<!-- Nav menu -->
		<nav class="hidden md:block">
			<ul class="inline-flex items-center">
				{#each mainMenuItems as item}
					<li>
						<a href={item.link} class="px-4 py-2   ">{item.title}</a>
					</li>
				{/each}
			</ul>
		</nav>

		<!-- Third section with search input, cart icon, and user icon -->
		<div class="flex gap-4 items-center">
			<button
				class="text-gray-800 hover:text-primary dark:text-gray-100 dark:hover:text-primary transition-all duration-300 ease-in-out text-2xl"
			>
				<Icon icon="mdi:magnify" />
			</button>
			<button
				class="text-gray-800 hover:text-primary dark:text-gray-100 dark:hover:text-primary transition-all duration-300 ease-in-out text-2xl"
			>
				<Icon icon="mdi:cart" />
			</button>
			<button
				class="text-gray-800 hover:text-primary dark:text-gray-100 dark:hover:text-primary transition-all duration-300 ease-in-out text-2xl"
			>
				<Icon icon="mdi:account" />
			</button>
			<Switch />
		</div>
	</div>
</header>
