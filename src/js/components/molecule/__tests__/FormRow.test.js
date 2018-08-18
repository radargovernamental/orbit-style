import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import FormRow from '../FormRow';

configure({ adapter: new Adapter() });

describe('FormRow', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<FormRow>Lorem</FormRow>);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with a child div', () => {
    const wrapper = shallow(<FormRow>Lorem</FormRow>);
    expect(wrapper.is('div')).toBe(true);
  });

  it('renders with children inside it', () => {
    const wrapper = shallow(<FormRow><div>Lorem <strong>Ipsum</strong></div></FormRow>);
    expect(wrapper.children().html()).toBe('<div>Lorem <strong>Ipsum</strong></div>');
  });
});
