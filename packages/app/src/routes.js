import universal from 'react-universal-component';

export default [
  {
    path: 'hero',
    component: universal(import('@skytv/widget-hero')),
  },
  {
    path: 'counter',
    component: universal(import('@skytv/widget-counter')),
  },

  {
    path: 'products',
    component: universal(import('@skytv/widget-products')),
  },

  {
    path: 'cart',
    component: universal(import('@skytv/widget-cart')),
  },
];
