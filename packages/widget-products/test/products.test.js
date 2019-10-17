import React from 'react';
import { Products } from '../src';
import { render, fireEvent } from '@testing-library/react';

describe('<Root />', () => {
  const state = {
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
  const requiredProps = {
    products: Object.values(state),
    toggle: id => {
      state[id].selected = !state[id].selected;
    },
  };

  it('should match snapshot', () => {
    const { asFragment } = render(<Products {...requiredProps} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should have buttons', () => {
    const { container } = render(<Products {...requiredProps} />);
    expect(container.getElementsByTagName('button').length).toEqual(Object.values(state).length);
  });
  it('should disabled button once clicked', () => {
    const { container, rerender } = render(<Products {...requiredProps} />);
    const button = container.getElementsByTagName('button')[0];

    expect(button.disabled).toEqual(false);
    fireEvent.click(button);
    rerender(<Products {...requiredProps} />);
    expect(button.disabled).toEqual(true);
  });
});
