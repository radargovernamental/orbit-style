import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Textarea from '../Textarea';

configure({ adapter: new Adapter() });

describe('Textarea', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Textarea id="test" name="test" />);
    expect(wrapper).toMatchSnapshot();
  });
});
