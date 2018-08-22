import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Message from '../Message';

configure({ adapter: new Adapter() });

describe('Message', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Message>Lorem</Message>);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with children inside it', () => {
    const wrapper = shallow(<Message><div>Lorem <strong>Ipsum</strong></div></Message>);
    expect(wrapper.children().html()).toBe('<div>Lorem <strong>Ipsum</strong></div>');
  });
});
