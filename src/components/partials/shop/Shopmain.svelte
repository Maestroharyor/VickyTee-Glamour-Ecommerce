<script lang="ts">
	import type { Product } from '../../../types/woocommerce';
	import { productList } from '../../../data/products';
	import ProductCard from '../../elements/cards/ProductCard.svelte';
	import ShopSelectSort from '../../elements/shop/ShopSelectSort.svelte';
	import Pagination from '../../elements/shop/Pagination.svelte';
</script>

<section class=" md:col-span-8 lg:col-span-9">
	<div class="flex flex-col sm:flex-row sm:items-end sm:justify-between mt-6 mb-8">
		<span class="text-sm font-semibold">1-16 of 148 Products</span>
		<ShopSelectSort />
	</div>
	<div class="grid grid-cols-1  lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-10">
		{#each productList as product}
			<ProductCard {product} />
		{/each}
	</div>
	<Pagination />
</section>
