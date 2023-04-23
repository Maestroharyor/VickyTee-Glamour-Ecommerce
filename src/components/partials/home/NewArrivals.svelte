<script lang="ts">
	// import Swiper core and required modules
	import { Navigation, Pagination, A11y, Autoplay, Lazy, Thumbs } from 'swiper';

	import { Swiper, SwiperSlide } from 'swiper/svelte';

	// Import Swiper styles
	import 'swiper/css';
	import 'swiper/css/navigation';
	import 'swiper/css/pagination';
	import 'swiper/css/autoplay';
	import ProductCard from '../../elements/cards/ProductCard.svelte';
	import { productList } from '../../../data/products';

	// your script goes here
	interface Tab {
		title: string;
		value: string;
	}

	export let tabs: Tab[] = [
		{ title: 'All', value: 'all' },
		{ title: 'Men', value: 'men' },
		{ title: 'Women', value: 'women' },
		{ title: 'Kids', value: 'kids' }
	];
	export let activeTab = 0;

	function setActiveTab(index: number) {
		console.log(index);
		activeTab = index;
	}

	console.log(productList.map((product) => product.name));
</script>

<section class="py-24 px-5 bg-white dark:bg-transparent">
	<div class="max-w-[1200px] mx-auto text-center">
		<div class="mb-4">
			<h2 class="text-4xl font-bold text-gray-700 dark:text-gray-200 mb-1">New Arrivals</h2>
			<p class="text-xl">Check out the latest products for you...</p>
		</div>
		<div>
			<div class="tab-section flex items-center justify-center gap-4 max-w-[500px] mx-auto my-6">
				<div class="flex flex-wrap items-center gap-4 justify-center">
					{#each tabs as tab, i}
						<button
							class="btn border-0 rounded-full text-white py-2 px-8  {i === activeTab
								? 'bg-gradient-to-b from-[#FF7D1E] to-[#FBD103]'
								: 'text-gray-500'}"
							on:click={() => setActiveTab(i)}>{tab.title}</button
						>
					{/each}
				</div>
			</div>

			<div class="pt-10">
				<Swiper
					modules={[Navigation, Pagination, Autoplay, A11y, Lazy]}
					navigation
					lazy={true}
					slidesPerView={1}
					breakpoints={{
						// when window width is >= 320px
						640: {
							slidesPerView: 2,
							spaceBetween: 30
						},
						// when window width is >= 480px
						768: {
							slidesPerView: 3,
							spaceBetween: 30
						},
						// when window width is >= 640px
						1024: {
							slidesPerView: 4,
							spaceBetween: 40
						}
					}}
					spaceBetween={30}
					on:slideChange={() => {
						//
					}}
					loop={true}
				>
					<SwiperSlide><ProductCard /></SwiperSlide>
					<SwiperSlide><ProductCard /></SwiperSlide>
					<SwiperSlide><ProductCard /></SwiperSlide>
					<SwiperSlide><ProductCard /></SwiperSlide>
				</Swiper>
			</div>
		</div>
	</div>
</section>
