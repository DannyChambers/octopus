
import React from 'react';
import { mount } from 'enzyme';
import QuantityBox from './index'

describe('Quantity box', () => {

	it('Does not decrease when at specified minimum', () => {
		const wrapper  = mount(<QuantityBox />);
		const btn = wrapper.find('.dec')
		btn.simulate("click")
	    const value = wrapper.find('input').props().value
	    expect(value).toEqual(1);
  	});

	it('Increases when increase button is clicked', () => {
		const wrapper  = mount(<QuantityBox />);
		const btn = wrapper.find('.inc')
		btn.simulate("click")
	    const value = wrapper.find('input').props().value
	    expect(value).toEqual(2);
  	});

	it('Does not increase beyond the avalable amount', () => {
		const wrapper  = mount(<QuantityBox />);
		const btn = wrapper.find('.inc')

		btn.simulate("click")
		btn.simulate("click")//Mad but there doesn't currently seem to be a way to simulate multiple clicks!

	    const value = wrapper.find('input').props().value
	    expect(value).toEqual(3);
  	});


});


