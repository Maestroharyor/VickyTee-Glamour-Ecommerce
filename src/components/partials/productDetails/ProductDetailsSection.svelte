<script lang="ts">
	import { productList } from '../../../data/products';

	import ImageModal from '../../elements/product/ImageModal.svelte';
	import ProductDetailsRight from './ProductDetailsRight.svelte';

	const images: string[] = productList.splice(0, 4).map((product) => product.images[0]?.src ?? '');

	let activeIndex = 0;
</script>

<div class="container mt-10 grid grid-cols-2 gap-6">
	<div>
		<figure class="h-[400px] flex items-center overflow-hidden">
			<!-- <img src={selectedImage} alt="product" class="w-full cursor-pointer" /> -->
			<ImageModal alt="product" {images} {activeIndex} />
		</figure>

		<div class="grid grid-cols-4 gap-4 mt-4">
			{#each images as image, index}
				<img
					src={image}
					alt="product"
					class="w-full h-32 cursor-pointer"
					on:click={() => (activeIndex = index)}
					on:keypress={() => (activeIndex = index)}
				/>
			{/each}
		</div>
	</div>

	<ProductDetailsRight />
</div>
