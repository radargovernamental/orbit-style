import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import BadgeWithText from '../BadgeWithText';

configure({ adapter: new Adapter() });

describe('BadgeWithText', () => {
  it('renders default color', () => {
    const wrapper = shallow(<BadgeWithText number={10}>Default</BadgeWithText>);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders primary color', () => {
    const wrapper = shallow(<BadgeWithText badgePrimary number={10}>badgePrimary</BadgeWithText>);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders success color', () => {
    const wrapper = shallow(<BadgeWithText badgeSuccess number={10}>badgeSuccess</BadgeWithText>);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders danger color', () => {
    const wrapper = shallow(<BadgeWithText badgeDanger number={10}>badgeDanger</BadgeWithText>);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders grayLight color', () => {
    const wrapper = shallow(<BadgeWithText badgeGrayLight number={10}>badgeGrayLight</BadgeWithText>);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with children inside it', () => {
    const wrapper = shallow(<BadgeWithText badgeGrayLight number={10}><div>Lorem <strong>Ipsum</strong></div></BadgeWithText>);
    expect(wrapper.children().html()).toBe('<span><span class="undefined">10</span><p class=" \"><div>Lorem <strong>Ipsum</strong></div></p></span>');
  });
});
