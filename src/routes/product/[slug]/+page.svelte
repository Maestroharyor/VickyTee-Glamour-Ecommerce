<script lang="ts">
	import Breadcrumbs from '../../../components/partials/productDetails/Breadcrumbs.svelte';
	import ProductDescriptionSection from '../../../components/partials/productDetails/ProductDescriptionSection.svelte';
	import ProductDetailsSection from '../../../components/partials/productDetails/ProductDetailsSection.svelte';
	import RelatedProducts from '../../../components/partials/productDetails/RelatedProducts.svelte';
</script>

<main class="py-10 max-w-[1200px] mx-auto">
	<Breadcrumbs />
	<ProductDetailsSection />
	<ProductDescriptionSection />
	<RelatedProducts />
</main>
