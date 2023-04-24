<script lang="ts">
	import Metadata from '../../components/SEO/Metadata.svelte';
	import ShopSidebar from '../../components/partials/shop/ShopSidebar.svelte';
	import Shopmain from '../../components/partials/shop/Shopmain.svelte';
</script>

<Metadata title="Shop" />
<main
	class="grid grid-cols-1 md:grid-cols-12 gap-10 px-5 md:px-20 py-20 relative bg-white dark:bg-gray-900"
>
	<ShopSidebar />
	<Shopmain />
</main>
