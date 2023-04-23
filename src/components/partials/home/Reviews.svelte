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
			name: 'Tanya Sinclair',
			job: 'UX Engineer',
			message:
				'“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”',
			position: 'current'
		},
		{
			id: crypto.randomUUID(),
			image: johnImg,
			name: 'John Tarkpor',
			job: 'Junior Front-end Developer',
			message:
				'“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”',
			position: 'next'
		},
		{
			id: crypto.randomUUID(),
			image: bobImg,
			name: 'Bob Smith',
			job: 'Web Developer',
			message:
				'“ My advice to future bootcampers is that if you love analyzing data and problem solving, then you are in the right track. Since it takes determination to reach your dream to become a web developer ”',
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
<section class="bg-white py-20">
	<div class="mb-10 max-w-[600px] mx-auto text-center">
		<h2 class="text-4xl font-bold text-gray-700 dark:text-gray-200 mb-1">Trending Collection</h2>
		<p class="text-xl">Check out most promising product bought by our buyers</p>
	</div>
	<div class="grid min-h-[500px] grid-rows-[auto_1fr] place-items-center overflow-x-hidden ">
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
