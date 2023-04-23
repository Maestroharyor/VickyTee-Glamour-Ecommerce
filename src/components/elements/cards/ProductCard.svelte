<script lang="ts">
	import Icon from '@iconify/svelte';
</script>

<div
	class="bg-gray-100 dark:bg-gray-700 rounded-lg m-h-64 p-2 hover:shadow-xl transition duration-300 relative group"
>
	<figure class="lg:max-h-64 aspect-square overflow-hidden">
		<img
			src="https://srv-cdn.onedio.com/store/bf2cbc886120f284ef46fd92a48f5fb58c62e6a50fbdf8fa796d057dd0ddc242.png"
			alt=""
			class="h-full ml-auto mr-auto object-cover group-hover:scale-150 transition-all duration-300 ease-in-out"
		/>
	</figure>
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
	<div class="rounded-lg p-4 bg-purple-700 flex flex-col">
		<div>
			<h5 class="text-white text-2xl font-bold leading-none">iPhone 11 Pro Max</h5>
			<span class="text-xs text-gray-400 leading-none">And then there was Pro.</span>
		</div>
		<div class="flex items-center">
			<div class="text-lg text-white font-light">$1099,00</div>
			<button
				class="rounded-full bg-purple-900 text-white hover:bg-white hover:text-purple-900 hover:shadow-xl focus:outline-none w-10 h-10 ml-auto transition duration-300 flex items-center justify-center"
			>
				<Icon icon="mdi-cart-outline" />
			</button>
		</div>
	</div>
</div>
