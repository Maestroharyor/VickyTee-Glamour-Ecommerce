<script lang="ts">
	import Icon from '@iconify/svelte';
</script>

<div class="relative card card-compact w-96 bg-base-100 shadow-xl">
	<figure>
		<img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
		<div class="absolute top-0 right-0 flex flex-col items-center p-4">
			<button class="btn btn-ghost text-gray-400 hover:text-gray-500"
				><Icon icon="mdi-heart-outline" /></button
			>
			<button class="btn btn-ghost text-gray-400 hover:text-gray-500"
				><Icon icon="mdi-cart-outline" /></button
			>
		</div>
	</figure>
	<div class="card-body">
		<h2 class="card-title">Shoes!</h2>
		<p>If a dog chews shoes whose shoes does he choose?</p>
		<div class="flex items-center">
			<div class="flex gap-1">
				<Icon icon="mdi-star" class="text-yellow-400" />
				<Icon icon="mdi-star" class="text-yellow-400" />
				<Icon icon="mdi-star" class="text-yellow-400" />
				<Icon icon="mdi-star" class="text-yellow-400" />
				<Icon icon="mdi-star" class="text-gray-400" />
			</div>
			<span class="ml-2 text-gray-500 text-sm">(10)</span>
		</div>
		<div class="card-actions justify-end">
			<button class="btn btn-primary">Buy Now</button>
		</div>
	</div>
</div>
