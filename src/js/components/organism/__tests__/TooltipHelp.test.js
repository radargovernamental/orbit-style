import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import TooltipHelp from '../TooltipHelp';

configure({ adapter: new Adapter() });

describe('TooltipHelp', () => {
  it('should correctly render the element', () => {
    const wrapper = mount(<TooltipHelp title="Cool information!" />);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
