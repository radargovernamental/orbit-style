import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import TimelineContent from '../TimelineContent';

configure({ adapter: new Adapter() });

describe('TimelineContent', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<TimelineContent>Lorem</TimelineContent>);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with a child div', () => {
    const wrapper = shallow(<TimelineContent>Lorem</TimelineContent>);
    expect(wrapper.is('div')).toBe(true);
  });

  it('renders with children inside it', () => {
    const wrapper = shallow(<TimelineContent><div>Lorem <strong>Ipsum</strong></div></TimelineContent>);
    expect(wrapper.children().html()).toBe('<div>Lorem <strong>Ipsum</strong></div>');
  });
});
