import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Bullet from '../Bullet';

configure({ adapter: new Adapter() });

describe('Bullet', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Bullet />);
    expect(wrapper).toMatchSnapshot();
  });
});
