<script>
	import Icon from '@iconify/svelte';
</script>

<div
	class="bg-white dark:bg-gray-800 shadow-md hover:scale-105 hover:shadow-xl duration-500 rounded-xl overflow-hidden relative"
>
	<a href="https://">
		<img
			src="https://images.unsplash.com/photo-1526947425960-945c6e72858f?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTgzODM0NDU&ixlib=rb-1.2.1&q=80"
			alt="Product"
			class="h-80 w-72 object-cover"
		/>
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
	<div class="px-4 py-3 w-72">
		<span class="text-gray-400  dark:text-gray-100 mr-3 uppercase text-xs">Brand</span>
		<p class="text-lg font-bold text-black truncate block capitalize  dark:text-gray-100">
			Product Name
		</p>
		<div class="flex items-center">
			<p class="text-lg font-semibold text-black cursor-auto my-3 dark:text-gray-100">$149</p>
			<del>
				<p class="text-sm text-gray-600  dark:text-gray-100 cursor-auto ml-2">$199</p>
			</del>
			<button
				class="rounded-full bg-pink-500 text-white hover:bg-gray-700 hover:text-purple-900 hover:shadow-xl focus:outline-none w-10 h-10 ml-auto transition duration-300 flex items-center justify-center"
			>
				<a href="#">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						fill="white"
						class="bi bi-bag-plus"
						viewBox="0 0 16 16"
					>
						<path
							fill-rule="evenodd"
							d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
						/>
						<path
							d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"
						/>
					</svg>
				</a>
			</button>
		</div>
	</div>
</div>
