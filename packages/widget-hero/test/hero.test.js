import React from 'react';
import { shallow } from 'enzyme';
import Root from '../src/components/Root';

describe('<Root />', () => {
  const requiredProps = {};

  it('should match snapshot', () => {
    const wrapper = shallow(<Root {...requiredProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});
