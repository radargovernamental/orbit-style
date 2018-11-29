import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Tooltip from '../Tooltip';

configure({ adapter: new Adapter() });

describe('Tooltip', () => {
  it('should correctly render the element', () => {
    const wrapper = mount(
      <Tooltip title="Cool information!">
        <span>element</span>
      </Tooltip>,
    );
    expect(wrapper.html()).toMatchSnapshot();
  });
});
