<script lang="ts">
	import Icon from '@iconify/svelte';
	import { fade } from 'svelte/transition';

	export let images: string[] = [];
	export let alt: string;
	export let showModal = false;

	export let activeIndex = 0;

	const close = () => {
		showModal = false;
		if (typeof window !== 'undefined') {
			document.body.classList.remove('modal-open');
		}
	};

	const next = () => {
		activeIndex = (activeIndex + 1) % images.length;
	};

	const prev = () => {
		activeIndex = (activeIndex - 1 + images.length) % images.length;
	};

	const handleKeyDown = (event: KeyboardEvent) => {
		if (event.key === 'ArrowLeft') {
			prev();
		} else if (event.key === 'ArrowRight') {
			next();
		}
	};

	// $: {
	// 	if (showModal) {
	// 		document.body.classList.add('modal-open');
	// 		window.addEventListener('keydown', handleKeyDown);
	// 	} else {
	// 		document.body.classList.remove('modal-open');
	// 		window.removeEventListener('keydown', handleKeyDown);
	// 	}
	// }
</script>

{#if showModal}
	<!-- Modal backdrop with fade transition -->
	<div
		class="fixed z-50 inset-0 bg-black bg-opacity-50 flex items-center justify-center"
		on:click|self={close}
		on:keypress|self={close}
		transition:fade={{ duration: 300 }}
	>
		<!-- Modal content with fade transition -->
		<div
			class="bg-white p-4 rounded-lg relative max-w-[900px] w-full flex flex-col"
			transition:fade={{ duration: 300, delay: 100 }}
		>
			<button class="self-end border px-3 py-1 mb-2" on:click={close}>Close &times; </button>
			<div class="flex gap-3 items-center">
				<button
					class="flex items-center justify-center w-[40px] h-[40px] text-4xl font-black bg-gray-200 rounded-full shadow-lg"
					on:click|stopPropagation={prev}
				>
					<Icon icon="mdi:chevron-left" />
				</button>

				<img
					src={images[activeIndex]}
					{alt}
					class="w-full flex-1 h-[400px] object-cover"
					on:click|stopPropagation
					on:keypress|stopPropagation
					in:fade={{ duration: 300 }}
					out:fade={{ duration: 300 }}
				/>
				<button
					class="flex items-center justify-center w-[40px] h-[40px] text-4xl font-black bg-gray-200 rounded-full shadow-lg"
					on:click|stopPropagation={next}><Icon icon="mdi:chevron-right" /></button
				>
			</div>
			<div class={`grid grid-cols-${images.length} gap-4 mt-4 max-w-[500px] mx-auto`}>
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
	</div>
{/if}

<!-- Thumbnail image -->
<img
	src={images[activeIndex]}
	{alt}
	class="w-full cursor-pointer"
	on:click={() => (showModal = true)}
	on:keypress={() => (showModal = true)}
/>
