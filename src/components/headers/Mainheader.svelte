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

			<a
				href="/cart"
				class="flex h-10 items-center px-2 rounded-lg border border-gray-200 hover:border-gray-300 focus:outline-none hover:shadow-inner"
			>
				<svg
					class="h-6 w-6 leading-none text-gray-300 stroke-current"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
					/>
				</svg>
				<span class="pl-1 text-gray-500 text-md">0</span>
			</a>
			<button
				class="flex h-10 items-center px-2 rounded-lg border border-gray-200 hover:border-gray-300 focus:outline-none hover:shadow-inner text-2xl"
			>
				<Icon icon="mdi:account" />
			</button>
			<Switch />
		</div>
	</div>
</header>
