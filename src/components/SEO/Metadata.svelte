<script>
	const DEFAULT_TITLE = "Vicky Tee's Website";
	const DEFAULT_DESCRIPTION =
		"Vicky Tee's Glamour is a fashion destination offering trendy and affordable clothing, shoes, and accessories from premium brands. Enjoy hassle-free delivery, flexible payment options, and exclusive promotions when you shop with us. Stay stylish with Vicky Tee's Glamour - your one-stop-shop for all your fashion needs!";
	const DEFAULT_IMAGE = '/default-image.png';

	export let title = DEFAULT_TITLE;
	export let description = DEFAULT_DESCRIPTION;
	export let imageUrl = '';
</script>

<svelte:head>
	<link rel="icon" href="/img/logo/favicon.png" />
	<meta charSet="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maxiumum-scale=1" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="description" content={`${description}`} />
	<title>{title}</title>

	<meta name="twitter:card" content="summary" />
	<meta name="twitter:creator" content={'vickytee'} />

	<!-- <meta property="og:url" content={router.pathname} key="ogurl" /> -->
	<meta property="og:image" content={imageUrl} />
	<meta property="og:site_name" content={'Braandly'} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<link rel="icon" href="/img/logo/favicon.png" />
</svelte:head>
