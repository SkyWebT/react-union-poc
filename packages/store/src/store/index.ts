import { combineReducers } from 'redux';
import logger from 'redux-logger';
import { configureStore } from 'redux-starter-kit';

import counter from './counter';
import products from './products';

const reducer = { counter: counter.reducer, products: products.reducer };
const reducerFunc = combineReducers(reducer);
export type AppState = ReturnType<typeof reducerFunc>;

const middleware = [logger];

export const create = () => configureStore({ reducer, middleware, devTools: true });

export const actions = {
  counter: counter.actions,
  prodducts: products.actions,
};
