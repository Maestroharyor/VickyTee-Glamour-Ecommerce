<script lang="ts">
	import Icon from '@iconify/svelte';
	import type { Product } from '../../../types/woocommerce';

	export let product: Product;
</script>

<div
	class="bg-gray-100 dark:bg-gray-700 rounded-lg m-h-64 p-2 hover:shadow-xl transition duration-300 relative group"
>
	<a href={`/product/${product.slug}`}>
		<figure class="lg:max-h-64 aspect-square overflow-hidden">
			<img
				src={product.images[0].src}
				alt=""
				class="h-full ml-auto mr-auto object-cover group-hover:scale-150 transition-all duration-300 ease-in-out"
			/>
		</figure>
	</a>

	<div class="absolute top-0 right-0 flex flex-col gap-3 items-center p-4 z-10">
		<button
			class="rounded-full bg-pink-900 text-white hover:bg-white hover:text-pink-900 hover:shadow-xl focus:outline-none w-10 h-10 ml-auto transition duration-300 flex items-center justify-center"
		>
			<Icon icon="mdi-heart-outline" />
		</button>
		<button
			class="rounded-full bg-gray-900 text-white hover:bg-white hover:text-gray-900 hover:shadow-xl focus:outline-none w-10 h-10 ml-auto transition duration-300 flex items-center justify-center"
		>
			<Icon icon="mdi:magnify" />
		</button>
	</div>
	<a class="rounded-lg p-4 bg-purple-700 flex flex-col" href={`/product/${product.slug}`}>
		<div>
			<a href={`/product/${product.slug}`}>
				<h5 class="text-white text-2xl font-bold leading-none">
					{product.name.length <= 15 ? product.name : product.name.substring(0, 15)}...
				</h5>
			</a>

			<a href={`/shop?category=${product.categories[0].slug}`}>
				<span class="text-xs text-gray-400 leading-none">{product.categories[0].name}</span>
			</a>
		</div>
		<div class="flex items-center">
			<div class="text-lg text-white font-light">₦{product.price}</div>
			<button
				class="rounded-full bg-purple-900 text-white hover:bg-white hover:text-purple-900 hover:shadow-xl focus:outline-none w-10 h-10 ml-auto transition duration-300 flex items-center justify-center"
			>
				<Icon icon="mdi-cart-outline" />
			</button>
		</div>
	</a>
</div>
