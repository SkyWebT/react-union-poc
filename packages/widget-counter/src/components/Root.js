import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import { actions } from '@skytv/store';

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
		<div style={{ border: '1px solid grey', margin: 20, padding: 20 }}>
			<div>{counter}</div>

			<button onClick={inc}>+</button>
			<button onClick={dec}>-</button>
		</div>
	);
};

export default Root;
