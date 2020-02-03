import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button component', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(<Button text="My Button" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('matches a snapshot with type prop passed', () => {
    const wrapper = shallow(<Button type="button" text="My Button" />);
    expect(wrapper).toMatchSnapshot();
  });
});

