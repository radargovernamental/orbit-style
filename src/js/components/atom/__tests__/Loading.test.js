import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Loading from '../Loading';

configure({ adapter: new Adapter() });

describe('Loading', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Loading />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with text inside it', () => {
    const wrapper = shallow(<Loading>Lorem Ipsum</Loading>);
    expect(wrapper.text()).toBe('Lorem Ipsum');
  });

  it('renders with children inside it', () => {
    const wrapper = shallow(<Loading><div>Lorem <strong>Ipsum</strong></div></Loading>);
    expect(wrapper.children().html()).toBe('<span><div>Lorem <strong>Ipsum</strong></div></span>');
  });
});
