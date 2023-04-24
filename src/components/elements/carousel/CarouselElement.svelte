<script lang="ts">
	import { goto } from '$app/navigation';

	export let image: any;
	export let title: string;
</script>

<div class="relative h-full lg:h-[600px] overflow-hidden">
	<img src={image} class="w-full" alt="" srcset="" />
	<div class="absolute inset-0 flex justify-center items-center bg-black opacity-60" />
	<div
		class="text-center absolute z-10 left-0 top-0 w-full h-full flex items-center justify-center flex-col gap-3 px-5"
	>
		<h2 class="text-white text-2xl lg:text-5xl font-bold mb-4">{title}</h2>
		<button class="bg-white text-black py-2 px-4 rounded" on:click={() => goto('/shop')}
			>Shop Now</button
		>
	</div>
</div>
