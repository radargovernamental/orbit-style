import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Timeline from '../Timeline';

configure({ adapter: new Adapter() });

describe('Timeline', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Timeline>Lorem</Timeline>);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with a child div', () => {
    const wrapper = shallow(<Timeline>Lorem</Timeline>);
    expect(wrapper.is('div')).toBe(true);
  });

  it('renders with children inside it', () => {
    const wrapper = shallow(<Timeline><div>Lorem <strong>Ipsum</strong></div></Timeline>);
    expect(wrapper.children().html()).toBe('<div>Lorem <strong>Ipsum</strong></div>');
  });
});
