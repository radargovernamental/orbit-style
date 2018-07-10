import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import TimelineItem from '../TimelineItem';

configure({ adapter: new Adapter() });

describe('TimelineItem', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<TimelineItem>Lorem</TimelineItem>);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with a child div', () => {
    const wrapper = shallow(<TimelineItem>Lorem</TimelineItem>);
    expect(wrapper.is('div')).toBe(true);
  });

  it('renders with children inside it', () => {
    const wrapper = shallow(<TimelineItem><div>Lorem <strong>Ipsum</strong></div></TimelineItem>);
    expect(wrapper.children().html()).toBe('<div>Lorem <strong>Ipsum</strong></div>');
  });

  it('renders with a time tag', () => {
    const wrapper = shallow(<TimelineItem date="01/01/2018">Lorem Ipsum</TimelineItem>);
    expect(wrapper.find('time').exists()).toBe(true);
  });
});
