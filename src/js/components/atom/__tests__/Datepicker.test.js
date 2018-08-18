import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Datepicker from '../Datepicker';

configure({ adapter: new Adapter() });

describe('Datepicker', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Datepicker id="test" name="test" />);
    expect(wrapper).toMatchSnapshot();
  });
});
