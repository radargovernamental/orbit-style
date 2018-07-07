import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ContentLoading from '../ContentLoading';

configure({ adapter: new Adapter() });

describe('ContentLoading', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<ContentLoading />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with children inside it', () => {
    const wrapper = shallow(<ContentLoading><svg /></ContentLoading>);
    expect(wrapper.find('svg').exists()).toBe(true);
  });

});
