import React from 'react';
import { Counter } from '../src/index';
import { render } from '@testing-library/react';
describe('<Counter />', () => {
  const requiredProps = {
    counter: 1,
    increment: () => {},
    decrement: () => {},
  };
  it('should match snapshot', () => {
    const { asFragment } = render(<Counter {...requiredProps} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should show text 1', () => {
    const { getByText } = render(<Counter {...requiredProps} />);
    getByText('1');
  });
});
