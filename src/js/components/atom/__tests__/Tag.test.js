import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Tag from '../Tag';

configure({ adapter: new Adapter() });

describe('Tag', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Tag />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with text inside it', () => {
    const wrapper = shallow(<Tag>Lorem Ipsum</Tag>);
    expect(wrapper.text()).toBe('Lorem Ipsum');
  });

  it('renders with children inside it', () => {
    const wrapper = shallow(<Tag><div>Lorem <strong>Ipsum</strong></div></Tag>);
    expect(wrapper.children().html()).toBe('<span><div>Lorem <strong>Ipsum</strong></div></span>');
  });
});
