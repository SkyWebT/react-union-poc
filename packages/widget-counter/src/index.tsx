import React from 'react';
import { connect } from 'react-redux';

import { actions, AppState } from '@skytv/store';

import style from './style.css';

interface Props {
  counter: number;
  increment: () => void;
  decrement: () => void;
}

export const Counter: React.FC<Props> = ({ counter, increment, decrement }) => {
  if(counter==1){
    throw 'err'
  }
  return (
    <div className={style.counter}>
      <div>hello typescript counter</div>
      <div>{counter}</div>

      <button onClick={increment}>+++</button>
      <button onClick={decrement}>---</button>
    </div>
  );
};

export default connect(
  (s: AppState) => ({ counter: s.counter }),
  actions.counter
)(Counter);
