import React from 'react';
import { Provider } from 'react-redux';
import { justRender } from 'react-union';
import { create } from '@skytv/store';

import Root from './components/Root';

const store = create();

const app = (
	<Provider store={store}>
		<Root />
	</Provider>
);

if ('Liferay' in window) {
	window.Liferay.on('allPortletsReady', function() {
		console.log('allPortletsReady !!!!!!!');
		justRender(app);
	});
} else {
	justRender(app);
}
