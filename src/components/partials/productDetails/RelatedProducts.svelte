<script lang="ts">
	import { productList } from '../../../data/products';
	import ProductCardTwo from '../../elements/cards/ProductCardTwo.svelte';

	let relatedProducts = productList.splice(4, 8);
</script>

<div class="container pb-16">
	<h2 class="text-2xl font-medium text-gray-800 uppercase mb-6">Related products</h2>
	<div class="grid grid-cols-4 gap-6">
		{#each relatedProducts as product}
			<ProductCardTwo {product} />
		{/each}
	</div>
</div>
