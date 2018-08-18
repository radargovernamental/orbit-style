import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Blockquote from '../Blockquote';

configure({ adapter: new Adapter() });

describe('Blockquote', () => {
  it('renders with text inside it', () => {
    const wrapper = shallow(<Blockquote>Lorem Ipsum</Blockquote>);
    expect(wrapper.text()).toBe('Lorem Ipsum');
  });

  it('renders with children inside it', () => {
    const wrapper = shallow(<Blockquote><div>Lorem <strong>Ipsum</strong></div></Blockquote>);
    expect(wrapper.children().html()).toBe('<div>Lorem <strong>Ipsum</strong></div>');
  });

  it('renders with button inside it', () => {
    const wrapper = shallow(<Blockquote>Lorem Ipsum</Blockquote>);
    expect(wrapper.is('blockquote')).toBe(true);
  });
});
