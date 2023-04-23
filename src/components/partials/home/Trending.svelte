<script lang="ts">
	import { productList } from '../../../data/products';
	import ProductCardTwo from '../../elements/cards/ProductCardTwo.svelte';
</script>

<section class="py-24 px-5 dark:bg-gray-700">
	<div class="max-w-[1200px] mx-auto text-center">
		<div class="mb-4">
			<h2 class="text-4xl font-bold text-gray-700 dark:text-gray-200 mb-1">Trending Collection</h2>
			<p class="text-xl">Check out most promising product bought by our buyers</p>
		</div>
		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-5">
			<ProductCardTwo />
			<ProductCardTwo />
			<ProductCardTwo />
			<ProductCardTwo />
		</div>
	</div>
</section>
