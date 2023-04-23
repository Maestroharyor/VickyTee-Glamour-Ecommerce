import type { MenuType } from '../types/menu';

export const mainMenuItems: MenuType[] = [
	{ title: 'Hair and Wigs', link: '/shop?category=hair-and-wigs' },
	{ title: 'Natural Hair Products', link: '/shop?category=natural-hair-products' },
	{ title: 'Clothings', link: '/shop?category=clothings' },
	{ title: 'Accessories', link: '/shop?category=accessories' }
];

export const storeMenu: MenuType[] = [
	{ title: 'Store', link: '/shop' },
	{ title: 'Hair and Wigs', link: '/category/hair-and-wigs' },
	{ title: 'Natural Hair Products', link: '/category/natural-hair-products' },
	{ title: 'Clothings', link: '/category/clothings' },
	{ title: 'Accessories', link: '/category/accessories' }
];

export const accountHelpMenu: MenuType[] = [
	{ title: 'My Account', link: '/account' },
	{ title: 'Cart', link: '/cart' },
	{ title: 'Terms and Conditiona', link: '/legal/terms' },
	{ title: 'Privacy Policy', link: '/legal/privacy-policy' },
	{ title: 'Cookie Policy', link: '/legal/cookie-policy' }
];
export const contactMenu: MenuType[] = [
	{ title: 'Contact Us', link: 'httsp://facebook.com/vickyteesglamour' },
	{ title: 'Facebook', link: 'httsp://facebook.com/vickyteesglamour', external: true },
	{ title: 'Instagram', link: 'httsp://instagram.com/vickytees_glamour', external: true },
	{ title: 'WhatsApp', link: 'https://chat.whatsapp.com/HYcuPuouGW884b8MxQAZt9', external: true },
	{ title: 'Telegram', link: 'https://t.me/vickyteeswholesales', external: true }
];
