import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Textfield from '../Textfield';

configure({ adapter: new Adapter() });

describe('Textfield', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Textfield id="test" name="test" />);
    expect(wrapper).toMatchSnapshot();
  });
});
