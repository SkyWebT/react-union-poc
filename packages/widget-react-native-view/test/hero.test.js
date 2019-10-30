import React from 'react';
import Root from '../src/components/Root';
import { render } from '@testing-library/react';

describe('<Root />', () => {
  const requiredProps = {};

  it('should match snapshot', () => {
    const { asFragment } = render(<Root {...requiredProps} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
