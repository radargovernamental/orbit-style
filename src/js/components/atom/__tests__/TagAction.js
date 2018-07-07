import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import TagAction from '../TagAction';

configure({ adapter: new Adapter() });

describe('TagAction', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<TagAction />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with text inside it', () => {
    const wrapper = shallow(<TagAction>x</TagAction>);
    expect(wrapper.text()).toBe('x');
  });

  it('renders with children inside it', () => {
    const wrapper = shallow(<TagAction><div>Lorem <strong>Ipsum</strong></div></TagAction>);
    expect(wrapper.children().html()).toBe('<div>Lorem <strong>Ipsum</strong></div>');
  });

  it('renders with button inside it', () => {
    const wrapper = shallow(<TagAction>x</TagAction>);

    expect(wrapper.is('button')).toBe(true);
  });
});
