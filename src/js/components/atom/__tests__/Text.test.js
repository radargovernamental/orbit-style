import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Text from '../Text';

configure({ adapter: new Adapter() });

describe('Text', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Text>Lorem</Text>);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with a child p', () => {
    const wrapper = shallow(<Text>Lorem</Text>);
    expect(wrapper.is('p')).toBe(true);
  });

  it('renders with children inside it', () => {
    const wrapper = shallow(<Text><div>Lorem <strong>Ipsum</strong></div></Text>);
    expect(wrapper.children().html()).toBe('<div>Lorem <strong>Ipsum</strong></div>');
  });
});
