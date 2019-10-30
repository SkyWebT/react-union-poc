import React from 'react';
import universal from 'react-universal-component';

import ErrorBoundary from '@sky/component-error-boundary';

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
    component: universal(import('@sky/widget-hero')),
  },
  {
    path: 'counter',
    component: universal(import('@sky/widget-counter')),
  },

  {
    path: 'products',
    component: universal(import('@sky/widget-products')),
  },

  {
    path: 'cart',
    component: universal(import('@sky/widget-cart')),
  },
  {
    path: 'rn',
    component: universal(import('@sky/widget-react-native-view')),
  },
  {
    path: 'playground',
    component: universal(import('@sky/widget-playground')),
  },
];

export default enhance(routes);
