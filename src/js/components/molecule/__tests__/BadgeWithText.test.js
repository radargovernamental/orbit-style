import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import BadgeWithText from '../BadgeWithText';

configure({ adapter: new Adapter() });

describe('BadgeWithText', () => {
  it('renders with number', () => {
    const wrapper = shallow(<BadgeWithText badgePrimary number={121} />);
    const findingText = wrapper.find('Badge');
    expect(findingText.html())
      .toBe('<span class="\">121</span>');
  });

  it('renders with text', () => {
    const wrapper = shallow(<BadgeWithText badgePrimary number={121}>Lorem ipsum.</BadgeWithText>);
    const findingText = wrapper.find('Text');
    expect(findingText.html())
      .toBe('<p class=" ">Lorem ipsum.</p>');
  });

  it('renders with children inside it (number/text)', () => {
    const wrapper = shallow(
      <BadgeWithText badgeDanger number={10}>
        <div>Lorem <strong>Ipsum</strong></div>
      </BadgeWithText>,
    );
    expect(wrapper.children()
      .html())
      .toBe('<span><span class="\">10</span><p class=" \"><div>Lorem <strong>Ipsum</strong></div></p></span>');
  });
});
