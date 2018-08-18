import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Sidebar from '../Sidebar';

configure({ adapter: new Adapter() });

describe('Sidebar', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Sidebar>Lorem</Sidebar>);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with a child aside', () => {
    const wrapper = shallow(<Sidebar>Lorem</Sidebar>);
    expect(wrapper.is('aside')).toBe(true);
  });

  it('renders with children inside it', () => {
    const wrapper = shallow(<Sidebar><div>Lorem <strong>Ipsum</strong></div></Sidebar>);
    expect(wrapper.children().html()).toBe('<div>Lorem <strong>Ipsum</strong></div>');
  });
});
