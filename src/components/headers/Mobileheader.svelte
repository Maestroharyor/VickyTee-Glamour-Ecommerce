<script lang="ts">
	import { slide } from 'svelte/transition';
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

	let isMenuOpen = false;

	const openMenu = () => {
		isMenuOpen = true;
	};

	const closeMenu = () => {
		isMenuOpen = false;
	};

	const logTest = () => {
		console.log('test');
	};
</script>

<div class="navbar flex lg:hidden bg-gray-50 dark:bg-secondary shadow-lg sticky top-0 z-[40] ">
	<div class="navbar-start">
		<div class="dropdown">
			<div class="btn btn-ghost btn-circle" on:click={openMenu} on:keydown={openMenu}>
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

<!-- content here -->
<div
	class={` lg:hidden fixed left-0 top-0 z-30 w-full h-screen transition-all duration-300 ease-in-out ${
		isMenuOpen ? 'translate-x-0 ' : '-translate-x-[200vw]'
	} `}
	on:click|self={closeMenu}
	on:keydown={closeMenu}
>
	<nav
		class="w-[300px] sm:w-[70%] md:w-[350px] bg-gray-50 dark:bg-gray-900 h-full shadow relative "
	>
		<div
			class={`fixed w-full h-full backdrop-blur z-[-1] transition-all duration-500 ease-in ${
				isMenuOpen ? 'opacity-100' : 'opacity-0 transition-none'
			}`}
			on:click|self={closeMenu}
			on:keydown={closeMenu}
		/>
		<div class="flex justify-between py-3 px-3 items-center">
			<a href="/" class="text-xl font-bold text-gray-800 uppercase hover:text-gray-700 w-36">
				{#if isDarkTheme}
					<img src={VickyTeeLogoDark} alt="Vicky Tee's Logo Dark" />
				{:else}
					<img src={VickyTeeLogo} alt="Vicky Tee's Logo" />
				{/if}
			</a>
			<button
				class="btn btn-ghost btn-circle text-2xl"
				on:click={closeMenu}
				aria-label="Close button"
			>
				<Icon icon="material-symbols:close-rounded" />
			</button>
		</div>
		<ul class="flex flex-col divide-y px-2 divide-gray-200 dark:divide-gray-800">
			{#each mainMenuItems as item}
				<li>
					<a href={item.link} class="px-2 py-4  inline-block ">{item.title}</a>
				</li>
			{/each}
		</ul>
	</nav>
</div>
