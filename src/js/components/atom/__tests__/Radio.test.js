import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Radio from '../Radio';

configure({ adapter: new Adapter() });

describe('Radio', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Radio id="test" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with text inside it', () => {
    const wrapper = shallow(<Radio id="test">Lorem Ipsum</Radio>);
    expect(wrapper.text()).toBe('Lorem Ipsum');
  });

  it('renders with a child label', () => {
    const wrapper = shallow(<Radio id="test"><div>Lorem <strong>Ipsum</strong></div></Radio>);
    expect(wrapper.is('label')).toBe(true);
  });

  it('renders with an input child of same id', () => {
    const wrapper = shallow(<Radio id="test"><div>Lorem <strong>Ipsum</strong></div></Radio>);
    expect(wrapper.find('input#test').exists()).toBe(true);
  });

  it('renders with an input of type radio', () => {
    const wrapper = shallow(<Radio id="test"><div>Lorem <strong>Ipsum</strong></div></Radio>);
    expect(wrapper.find('input[type="radio"]').exists()).toBe(true);
  });

  it('renders with a container span to hold its children', () => {
    const wrapper = shallow(<Radio id="test"><div>Lorem <strong>Ipsum</strong></div></Radio>);
    expect(wrapper.find('input#test + span').exists()).toBe(true);
  });
});
