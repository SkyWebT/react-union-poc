import React from 'react';
import { connect } from 'react-redux';
import { createSelector, PayloadActionCreator } from 'redux-starter-kit';

import { actions, AppState, T_Product } from '@skytv/store';

const selectSelected = (state: AppState) => Object.values(state.products).filter(p => p.selected);

const selector = createSelector(
  selectSelected,
  products => ({
    total: products.reduce((acc, cur) => {
      acc += cur.price;
      return acc;
    }, 0),
    products,
  })
);

interface Props {
  products: T_Product[];
  total: number;
  toggle: PayloadActionCreator<string>;
}
const Root: React.FC<Props> = ({ products, total, toggle }) => {
  const removeFromCart = (id: string) => {
    toggle(id);
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

export default connect(
  selector,
  actions.prodducts
)(Root);
