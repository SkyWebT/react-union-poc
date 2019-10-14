import '@babel/polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import { justRender } from 'react-union';
import Root from './components/Root';
import createStore from './store';

const store = createStore();

const app = (
	<Provider store={store}>
		<Root />
	</Provider>
);
justRender(app);
