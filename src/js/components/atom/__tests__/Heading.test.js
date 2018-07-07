import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Heading from '../Heading';

configure({ adapter: new Adapter() });

describe('Heading', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Heading level={1}>Lorem Ipsum</Heading>);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with children inside it', () => {
    const wrapper = shallow(<Heading level={1}><div>Lorem <strong>Ipsum</strong></div></Heading>);
    expect(wrapper.children().html()).toBe('<div>Lorem <strong>Ipsum</strong></div>');
  });

  it('renders with text inside it', () => {
    const wrapper = shallow(<Heading level={1}>Lorem Ipsum</Heading>);
    expect(wrapper.text()).toBe('Lorem Ipsum');
  });

  it('renders a h1', () => {
    const wrapper = shallow(<Heading level={1}>Lorem Ipsum</Heading>);
    expect(wrapper.is('h1')).toBe(true);
  });

  it('renders a h2', () => {
    const wrapper = shallow(<Heading level={2}>Lorem Ipsum</Heading>);
    expect(wrapper.is('h2')).toBe(true);
  });

  it('renders a h3', () => {
    const wrapper = shallow(<Heading level={3}>Lorem Ipsum</Heading>);
    expect(wrapper.is('h3')).toBe(true);
  });

  it('renders a h4', () => {
    const wrapper = shallow(<Heading level={4}>Lorem Ipsum</Heading>);
    expect(wrapper.is('h4')).toBe(true);
  });

  it('renders a h5', () => {
    const wrapper = shallow(<Heading level={5}>Lorem Ipsum</Heading>);
    expect(wrapper.is('h5')).toBe(true);
  });

  it('renders a h6', () => {
    const wrapper = shallow(<Heading level={6}>Lorem Ipsum</Heading>);
    expect(wrapper.is('h6')).toBe(true);
  });
});
