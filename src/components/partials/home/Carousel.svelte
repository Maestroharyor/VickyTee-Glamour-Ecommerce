<script>
	import CarouselElement from '../../elements/carousel/CarouselElement.svelte';
	import Image1 from '../../../assets/images/banners/banner1.jpg';
	import Image2 from '../../../assets/images/banners/banner2.jpg';
	import Image3 from '../../../assets/images/banners/banner3.jpg';

	// import Swiper core and required modules
	import { Navigation, Pagination, A11y, Autoplay, Lazy } from 'swiper';

	import { Swiper, SwiperSlide } from 'swiper/svelte';

	// Import Swiper styles
	import 'swiper/css';
	import 'swiper/css/navigation';
	import 'swiper/css/pagination';
	import 'swiper/css/autoplay';
</script>

<Swiper
	modules={[Navigation, Pagination, Autoplay, A11y, Lazy]}
	navigation
	autoplay={true}
	lazy={true}
	pagination={{ clickable: true }}
	scrollbar={{ draggable: true }}
	class={'home_carousel_slider'}
	on:slideChange={() => {
		//
	}}
	loop={true}
>
	<SwiperSlide><CarouselElement image={Image1} title={'Get Your Shine On!!!'} /></SwiperSlide>
	<SwiperSlide
		><CarouselElement image={Image2} title={'Most Affordable Fashion Products'} /></SwiperSlide
	>
	<SwiperSlide
		><CarouselElement
			image={Image3}
			title={'Get Ready to Be Classy without Spending Much'}
		/></SwiperSlide
	>
</Swiper>
