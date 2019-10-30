import React from 'react';
import { connect } from 'react-redux';
import { PayloadActionCreator } from 'redux-starter-kit';

import { actions, AppState, T_Product } from '@sky/store';

interface Props {
  products: T_Product[];
  toggle: PayloadActionCreator<string>;
}
export const Products: React.FC<Props> = ({ products, toggle }) => {
  const addToCart = (id: string) => {
    toggle(id);
  };
  return (
    <div style={{ border: '1px solid grey', padding: 20, width: '40vw' }}>
      <h2>Product list</h2>

      {products.map(({ id, name, price, selected }) => (
        <div key={id} style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h3>
            {name} - ${price}
          </h3>
          <div>
            <button disabled={selected} onClick={() => addToCart(id)}>
              buy
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default connect(
  (state: AppState) => ({ products: Object.values(state.products) }),
  actions.prodducts
)(Products);
