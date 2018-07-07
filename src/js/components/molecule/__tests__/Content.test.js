import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Content from '../Content';

configure({ adapter: new Adapter() });

describe('Content', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Content>Lorem</Content>);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with a child section', () => {
    const wrapper = shallow(<Content>Lorem</Content>);
    expect(wrapper.is('section')).toBe(true);
  });

  it('renders with children inside it', () => {
    const wrapper = shallow(<Content><div>Lorem <strong>Ipsum</strong></div></Content>);
    expect(wrapper.children().html()).toBe('<div>Lorem <strong>Ipsum</strong></div>');
  });
});
