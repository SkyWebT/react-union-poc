import { createSlice, PayloadAction } from 'redux-starter-kit';

import { T_Products } from '../types';

const defaultState:T_Products = {
  '1': {
    id: '1',
    name: 'SKY Starter',
    price: 125,
    selected: false,
  },
  '2': {
    id: '2',
    name: 'SKY Entertainment',
    price: 35,
    selected: false,
  },
  '3': {
    id: '3',
    name: 'SKY Sport',
    price: 99,
    selected: false,
  },
};

const counter = createSlice({
  name: 'product',
  initialState: defaultState,
  reducers: {
    toggle: (state, action:PayloadAction<string>) => {
      state[action.payload].selected = !state[action.payload].selected;
    } ,
  },
});

export default counter;
