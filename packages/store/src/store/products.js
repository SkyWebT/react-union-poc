import { createActions, handleActions } from 'redux-actions';

const defaultState = {
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

const actions = createActions({
  TOGGLE: id => ({ id }),
});
const { toggle } = actions;

const reducer = handleActions(
  {
    [toggle]: (state, { payload: { id } }) => {
      return {
        ...state,
        [id]: { ...state[id], selected: !state[id].selected },
      };
    },
  },
  defaultState
);

export default {
  reducer,
  actions,
};
