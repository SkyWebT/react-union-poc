import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import { actions } from '@skytv/store';
const Root = () => {
  const products = useSelector(s => s.products);
  const dispatch = useDispatch();
  console.log(products);
  const addToCart = id => {
    dispatch(actions.prodducts.toggle(id));
  };
  return (
    <div style={{ border: '1px solid grey', padding: 20, width: '40vw' }}>
      <h2>Product list</h2>

      {Object.values(products).map(({ id, name, price, selected }) => (
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

export default Root;
