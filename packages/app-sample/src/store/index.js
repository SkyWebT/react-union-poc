import { createStore, combineReducers } from 'redux';
import products from './products';
import counter from './counter';

const reducers = combineReducers({ counter, products });

export default () => createStore(reducers);
