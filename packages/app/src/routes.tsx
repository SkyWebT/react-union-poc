import universal from 'react-universal-component';
import React from 'react';
import ErrorBoundary from '@skytv/component-error-boundary';

const enhance = routes => {
  return routes.map(route => {
    const Comp = route.component;
    const CompEnhanded = props => (
      <ErrorBoundary>
        <Comp {...props} />
      </ErrorBoundary>
    );
    return {
      ...route,
      component: CompEnhanded,
    };
  });
};

const routes = [
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

export default enhance(routes);
