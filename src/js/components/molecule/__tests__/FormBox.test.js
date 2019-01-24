import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import FormBox from '../FormBox';

configure({ adapter: new Adapter() });

describe('FormBox', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<FormBox>Lorem</FormBox>);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with a child fieldset', () => {
    const wrapper = shallow(<FormBox>Lorem</FormBox>);
    expect(wrapper.is('fieldset')).toBe(true);
  });

  it('renders with children inside it', () => {
    const wrapper = shallow(<FormBox><div>Lorem <strong>Ipsum</strong></div></FormBox>);
    expect(wrapper.children().html()).toBe('<div>Lorem <strong>Ipsum</strong></div>');
  });
});
