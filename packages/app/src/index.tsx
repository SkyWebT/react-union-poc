import React from 'react';
import { Provider } from 'react-redux';
import { justRender } from 'react-union';

import { create } from '@sky/store';

import Root from './Root';

const store = create();

const app = (
  <Provider store={store}>
    <Root />
  </Provider>
);

declare global {
  interface Window {
    Liferay: any;
  }
}
if ('Liferay' in window) {
  window.Liferay.on('allPortletsReady', function() {
    console.log('allPortletsReady !!!!!!!');
    justRender(app);
  });
} else {
  justRender(app);
}
