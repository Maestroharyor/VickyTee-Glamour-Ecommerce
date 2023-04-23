<script lang="ts">
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
		transition:fade={{ duration: 300 }}
	>
		<!-- Modal content with fade transition -->
		<div class="bg-white p-4 rounded-lg relative" transition:fade={{ duration: 300, delay: 100 }}>
			<button
				class="absolute left-0 top-1/2 transform -translate-y-1/2"
				on:click|stopPropagation={prev}
			>
				&lt;
			</button>
			<button
				class="absolute right-0 top-1/2 transform -translate-y-1/2"
				on:click|stopPropagation={next}
			>
				&gt;
			</button>
			<img src={images[activeIndex]} {alt} class="w-full" on:click|stopPropagation />
			<button class="absolute top-0 right-0 m-2" on:click={close}> &times; </button>
		</div>
	</div>
{/if}

<!-- Thumbnail image -->
<img
	src={images[activeIndex]}
	{alt}
	class="w-full cursor-pointer"
	on:click={() => (showModal = true)}
/>
