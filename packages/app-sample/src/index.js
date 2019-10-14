import React from 'react';
import { Provider } from 'react-redux';
import { justRender } from 'react-union';
import createStore from '@skytv/store';

import Root from './components/Root';

const store = createStore();

const app = (
	<Provider store={store}>
		<Root />
	</Provider>
);

if ('Liferay' in window) {
	window.AUI().ready(
		/*
          This function gets loaded when all the HTML, not including the portlets, is
          loaded.
          */

		function() {
			console.log('ready');
		}
	);

	window.Liferay.Portlet.ready(
		/*
          This function gets loaded after each and every portlet on the page.

          portletId: the current portlet's id
          node: the Alloy Node object of the current portlet
          */

		function(portletId, node) {}
	);

	window.Liferay.on(
		'allPortletsReady',

		/*
          This function gets loaded when everything, including the portlets, is on
          the page.
          */
		function() {
			console.log('allPortletsReady !!!!!!!');
			justRender(app);
		}
	);
} else {
	justRender(app);
}
