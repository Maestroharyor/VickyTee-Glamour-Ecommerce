<script lang="ts">
	import { setContext } from 'svelte';
	import Testimonial from '../../elements/testimonial/Testimonial.svelte';
	import tanyaImg from '../../../assets/image-tanya.jpg';
	import johnImg from '../../../assets/image-john.jpg';
	import bobImg from '../../../assets/image-bob.jpg';

	let testimonials = [
		{
			id: crypto.randomUUID(),
			image: tanyaImg,
			name: 'Bisi Adekunle',
			job: 'Online Store Owner',
			message:
				'I had a great experience working with this ecommerce platform. It has all the features I need to manage my inventory and orders, and the customer support team is always available to assist me with any issues I encounter. I highly recommend this platform to other online store owners.',
			position: 'current'
		},
		{
			id: crypto.randomUUID(),
			image: johnImg,
			name: 'Chinedu Eze',
			job: 'Marketing Manager',
			message:
				'This ecommerce platform has helped our company increase sales and improve customer engagement. The user interface is easy to navigate and the analytics tools have given us valuable insights into our customers’ behaviors. The platform’s integrations with other marketing tools have also been a huge plus for us.',
			position: 'next'
		},
		{
			id: crypto.randomUUID(),
			image: bobImg,
			name: 'Abdullahi Ibrahim',
			job: 'Fashion Designer',
			message:
				'I’ve been using this ecommerce platform to sell my clothing designs for over a year now and I have to say it has been a great experience. The platform is user-friendly and the payment system is secure. The customizable design options also make it easy for me to showcase my brand’s unique style.',
			position: 'prev'
		}
	];
	let loading = false;

	setContext('updateCurrent', updateCurrent);

	function onKeydown(e: any): void {
		const valid = ['ArrowLeft', 'ArrowRight'];
		if (!valid.includes(e.key)) return;
		if (loading) return;

		switch (e.key) {
			case 'ArrowLeft':
				updateCurrent('decrement');
				break;
			case 'ArrowRight':
				updateCurrent('increment');
				break;
		}
	}

	function updateCurrent(type: 'increment' | 'decrement'): void {
		loading = true;
		const currentIndex = testimonials.findIndex((item) => item.position === 'current');

		let current: number, prev: number;

		testimonials = testimonials.map((item) => {
			return { ...item, position: 'next' };
		});

		if (type === 'increment') {
			current = currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
		} else {
			current = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
		}

		prev = current === 0 ? testimonials.length - 1 : current - 1;

		testimonials[current].position = 'current';
		testimonials[prev].position = 'prev';

		setTimeout(() => {
			loading = false;
		}, 1000);
	}

	function onScroll(e: any): void {
		if (loading) return;
		let event: 'increment' | 'decrement';

		if (e.deltaX === -0) {
			event = e.deltaY > 0 ? 'increment' : 'decrement';
		} else {
			event = e.deltaX > 0 ? 'increment' : 'decrement';
		}

		updateCurrent(event);
	}
</script>

<svelte:window on:keydown={onKeydown} on:wheel={onScroll} />
<section class="bg-white dark:bg-gray-900 py-20">
	<div class="mb-10 max-w-[600px] mx-auto text-center">
		<h2 class="text-4xl font-bold text-gray-700 dark:text-gray-200 mb-1">Reviews</h2>
		<p class="text-xl">This is what our customers have to say</p>
	</div>
	<div
		class="grid min-h-[700px] lg:min-h-[500px] grid-rows-[auto_1fr] place-items-center overflow-x-hidden "
	>
		<ul class="relative h-full w-full">
			{#each testimonials as item (item.id)}
				{@const position = item.position}
				<li
					class="absolute inset-0 z-20 grid place-items-center opacity-0 transition-all duration-1000"
					class:translate-x-0={position === 'current'}
					class:translate-x-full={position === 'next'}
					class:-translate-x-full={position === 'prev'}
					class:opacity-100={position === 'current'}
				>
					<Testimonial {...item} />
				</li>
			{/each}
		</ul>
	</div>
</section>
