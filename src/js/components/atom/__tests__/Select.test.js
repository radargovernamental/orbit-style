import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Select from '../Select';

configure({ adapter: new Adapter() });

describe('Select', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Select name="test" />);
    expect(wrapper).toMatchSnapshot();
  });
});
