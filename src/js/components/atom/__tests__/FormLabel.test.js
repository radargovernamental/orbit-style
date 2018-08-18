import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import FormLabel from '../FormLabel';

configure({ adapter: new Adapter() });

describe('FormLabel', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<FormLabel htmlFor="test" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with text inside it', () => {
    const wrapper = shallow(<FormLabel htmlFor="test">Lorem Ipsum</FormLabel>);
    expect(wrapper.text()).toBe('Lorem Ipsum');
  });

  it('renders with a child label', () => {
    const wrapper = shallow(<FormLabel htmlFor="test"><div>Lorem <strong>Ipsum</strong></div></FormLabel>);
    expect(wrapper.is('label')).toBe(true);
  });
});
