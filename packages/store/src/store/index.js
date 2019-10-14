import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import products from './products';
import counter from './counter';

const reducers = combineReducers({ counter, products });

export default () => createStore(reducers, applyMiddleware(logger));
