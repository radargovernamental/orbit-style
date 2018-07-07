import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Badge from '../Badge';

configure({ adapter: new Adapter() });

describe('Badge', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Badge />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with text inside it', () => {
    const wrapper = shallow(<Badge>Lorem Ipsum</Badge>);
    expect(wrapper.text()).toBe('Lorem Ipsum');
  });

  it('renders with children inside it', () => {
    const wrapper = shallow(<Badge><div>Lorem <strong>Ipsum</strong></div></Badge>);
    expect(wrapper.children().html()).toBe('<div>Lorem <strong>Ipsum</strong></div>');
  });
});
