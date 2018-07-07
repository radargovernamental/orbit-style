import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Spacer from '../Spacer';

configure({ adapter: new Adapter() });

describe('Spacer', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Spacer>Lorem</Spacer>);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with a child div', () => {
    const wrapper = shallow(<Spacer>Lorem</Spacer>);
    expect(wrapper.is('div')).toBe(true);
  });

  it('renders with children inside it', () => {
    const wrapper = shallow(<Spacer><div>Lorem <strong>Ipsum</strong></div></Spacer>);
    expect(wrapper.children().html()).toBe('<div>Lorem <strong>Ipsum</strong></div>');
  });
});
