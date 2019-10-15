import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import { actions } from '@skytv/store';
import style from './style.css';

const Root = () => {
  const { counter } = useSelector(s => s.counter);
  const d = useDispatch();
  const inc = () => {
    d(actions.counter.increment());
  };
  const dec = () => {
    d(actions.counter.decrement());
  };
  return (
    <div className={style.counter}>
      <div>hello typescript counter</div>
      <div>{counter}</div>
      <button onClick={inc}>+++</button>
      <button onClick={dec}>---</button>
    </div>
  );
};

export default Root;
