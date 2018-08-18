import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import FormItem from '../FormItem';

configure({ adapter: new Adapter() });

describe('FormItem', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<FormItem>Lorem</FormItem>);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with a child div', () => {
    const wrapper = shallow(<FormItem>Lorem</FormItem>);
    expect(wrapper.is('div')).toBe(true);
  });

  it('renders with children inside it', () => {
    const wrapper = shallow(<FormItem><div>Lorem <strong>Ipsum</strong></div></FormItem>);
    expect(wrapper.children().html()).toBe('<div>Lorem <strong>Ipsum</strong></div>');
  });
});
