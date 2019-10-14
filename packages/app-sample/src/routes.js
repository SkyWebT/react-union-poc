import universal from 'react-universal-component';

export default [
	{
		path: 'hero',
		component: universal(import('@union-monorepo/widget-hero')),
	},
	{
		path: 'content',
		component: universal(import('@union-monorepo/widget-content')),
	},
	{
		path: 'counter',
		component: universal(import('@union-monorepo/widget-counter')),
	},

	{
		path: 'products',
		component: universal(import('@union-monorepo/widget-products')),
	},

	{
		path: 'cart',
		component: universal(import('@union-monorepo/widget-cart')),
	},
];
