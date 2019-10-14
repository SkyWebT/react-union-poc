import { useSelector, useDispatch } from 'react-redux';
import React from 'react';

const getSelected = state => Object.values(state.products).filter(p => p.selected);
const getTotal = state => {
	const products = getSelected(state);
	return products.reduce((acc, cur) => {
		acc += cur.price;
		return acc;
	}, 0);
};
const Root = () => {
	const { products, total } = useSelector(state => ({ products: getSelected(state), total: getTotal(state) }));
	const d = useDispatch();

	const removeFromCart = id => {
		d({
			type: 'TOGGLE',
			payload: { id },
		});
	};
	return (
		<div style={{ border: '1px solid grey', padding: 20, width: '40vw' }}>
			<h2>Cart </h2>
			{products.length > 0 ? (
				products.map(({ id, name, price }) => (
					<div key={id} style={{ display: 'flex', justifyContent: 'space-between' }}>
						<h3>
							{name} - ${price}
						</h3>
						<div>
							<button onClick={() => removeFromCart(id)}>remove</button>
						</div>
					</div>
				))
			) : (
				<div> empty </div>
			)}
			<h3>Total: ${total}</h3>
		</div>
	);
};

export default Root;
