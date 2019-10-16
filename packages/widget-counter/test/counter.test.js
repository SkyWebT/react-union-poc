import React from 'react';
import { shallow } from 'enzyme';
import { Counter } from '../src/index';

describe('<Counter />', () => {
  const requiredProps = {
    counter: 1,
    increment: () => {},
    decrement: () => {},
  };

  it('should match snapshot', () => {
    const wrapper = shallow(<Counter {...requiredProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});
