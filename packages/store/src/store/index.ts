import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

import counter from './counter';
import products from './products';

const reducers = combineReducers({ counter: counter.reducer, products: products.reducer });

export type AppState = ReturnType<typeof reducers>

export const create = () => createStore(reducers, applyMiddleware(logger));

export const actions = {
  counter: counter.actions,
  prodducts: products.actions,
};
