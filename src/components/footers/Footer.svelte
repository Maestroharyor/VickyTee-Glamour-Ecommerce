<script lang="ts">
	import VickyTeeLogo from '../../assets/svgs/vickyteeLogo.svg';
	import VickyTeeLogoDark from '../../assets/svgs/vickyteeLogoDark.svg';
	import { accountHelpMenu, contactMenu, storeMenu } from '../../data/menu';
	import { store } from '../../store';
	import { getTheme } from '../../utils/theme';

	let theme = getTheme();
	let isDarkTheme = theme === 'light' ? false : true;

	store.subscribe((data) => {
		isDarkTheme = data.isDarkMode;
	});
</script>

<div
	class=" bg-gray-50 dark:bg-base-200 text-gray-700 dark:text-base-content border-t border-gray-50"
>
	<footer class="footer grid grid-cols-1 md:grid-cols-12 p-10  gap-x-10 max-w-[1200px] mx-auto">
		<div class="md:col-span-5">
			<a href="/" class="text-xl font-bold text-gray-800 uppercase hover:text-gray-700 w-36">
				{#if isDarkTheme}
					<img src={VickyTeeLogoDark} alt="Vicky Tee's Logo Dark" />
				{:else}
					<img src={VickyTeeLogo} alt="Vicky Tee's Logo" />
				{/if}
			</a>
			<p>
				Vicky Tee's Glamour is a fashion destination offering trendy and affordable clothing, shoes,
				and accessories from premium brands. Enjoy hassle-free delivery, flexible payment options,
				and exclusive promotions when you shop with us. Stay stylish with Vicky Tee's Glamour - your
				one-stop-shop for all your fashion needs!
			</p>
		</div>
		<div class="md:col-span-3">
			<span class="footer-title">Store</span>
			{#each storeMenu as item}
				<a class="link link-hover" href={item.link}>{item.title}</a>
			{/each}
		</div>
		<div class="md:col-span-3">
			<span class="footer-title">Account and Help</span>
			{#each accountHelpMenu as item}
				<a class="link link-hover" href={item.link}>{item.title}</a>
			{/each}
		</div>
		<div class="md:col-span-3">
			<span class="footer-title">Contact</span>
			{#each contactMenu as item}
				<a class="link link-hover" href={item.link}>{item.title}</a>
			{/each}
		</div>
	</footer>
</div>
