import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import products from './products';
import counter from './counter';

const reducers = combineReducers({ counter: counter.reducer, products });

export const create = () => createStore(reducers, applyMiddleware(logger));

export const actions = {
	counter: counter.actions,
};
