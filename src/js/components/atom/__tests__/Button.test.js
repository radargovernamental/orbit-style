import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Button from '../Button';

configure({ adapter: new Adapter() });

describe('Button', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with text inside it', () => {
    const wrapper = shallow(<Button>Lorem Ipsum</Button>);
    expect(wrapper.text()).toBe('Lorem Ipsum');
  });

  it('renders with children inside it', () => {
    const wrapper = shallow(<Button><div>Lorem <strong>Ipsum</strong></div></Button>);
    expect(wrapper.children().html()).toBe('<div>Lorem <strong>Ipsum</strong></div>');
  });

  it('renders with button inside it', () => {
    const wrapper = shallow(<Button>Lorem Ipsum</Button>);
    expect(wrapper.is('button')).toBe(true);
  });
});
