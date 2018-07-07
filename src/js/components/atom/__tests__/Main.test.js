import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Main from '../Main';

configure({ adapter: new Adapter() });

describe('Main', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Main>Lorem</Main>);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with a child main', () => {
    const wrapper = shallow(<Main>Lorem</Main>);
    expect(wrapper.is('main')).toBe(true);
  });

  it('renders with children inside it', () => {
    const wrapper = shallow(<Main><div>Lorem <strong>Ipsum</strong></div></Main>);
    expect(wrapper.children().html()).toBe('<div>Lorem <strong>Ipsum</strong></div>');
  });
});
