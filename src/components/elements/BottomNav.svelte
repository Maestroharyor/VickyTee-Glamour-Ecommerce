<script>
	import Icon from '@iconify/svelte';
</script>

<div
	class="btm-nav lg:hidden  bg-gray-50 dark:bg-secondary border-t border-gray-700 opacity-100 text-gray-600 dark:text-gray-50 z-30"
>
	<button class="text-3xl">
		<Icon icon="mdi:menu" />
		<span class="btm-nav-label text-sm">Menu</span>
	</button>
	<button class="text-3xl">
		<Icon icon="material-symbols:format-list-bulleted" />
		<span class="btm-nav-label text-sm">Categories</span>
	</button>
	<button class="text-3xl">
		<Icon icon="material-symbols:search" />
		<span class="btm-nav-label text-sm">Search</span>
	</button>
	<a class="text-3xl text-gray-600" href="/cart">
		<Icon icon="material-symbols:shopping-bag-outline" />
		<span class="btm-nav-label text-sm">Cart</span>
	</a>
</div>
