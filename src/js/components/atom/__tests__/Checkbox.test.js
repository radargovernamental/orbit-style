import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Checkbox from '../Checkbox';

configure({ adapter: new Adapter() });

describe('Checkbox', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Checkbox id="test" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with text inside it', () => {
    const wrapper = shallow(<Checkbox id="test">Lorem Ipsum</Checkbox>);
    expect(wrapper.text()).toBe('Lorem Ipsum');
  });

  it('renders with a child label', () => {
    const wrapper = shallow(<Checkbox id="test"><div>Lorem <strong>Ipsum</strong></div></Checkbox>);
    expect(wrapper.is('label')).toBe(true);
  });

  it('renders with an input child of same id', () => {
    const wrapper = shallow(<Checkbox id="test"><div>Lorem <strong>Ipsum</strong></div></Checkbox>);
    expect(wrapper.find('input#test').exists()).toBe(true);
  });

  it('renders with an input of type checkbox', () => {
    const wrapper = shallow(<Checkbox id="test"><div>Lorem <strong>Ipsum</strong></div></Checkbox>);
    expect(wrapper.find('input[type="checkbox"]').exists()).toBe(true);
  });

  it('renders with a container span to hold its children', () => {
    const wrapper = shallow(<Checkbox id="test"><div>Lorem <strong>Ipsum</strong></div></Checkbox>);
    expect(wrapper.find('input#test + span').exists()).toBe(true);
  });
});
