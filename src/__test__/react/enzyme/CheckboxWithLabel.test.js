import React from 'react';
import {shallow} from 'enzyme';
// eslint-disable-next-line sort-imports
import CheckboxWithLabel from '../CheckboxWithLabel';

test('CheckboxWithLabel changes the text after click', () => {
	// Render a checkbox with label in the document
	// eslint-disable-next-line react/jsx-filename-extension
	const checkbox = shallow(<CheckboxWithLabel labelOn="On" labelOff="Off" />);

	expect(checkbox.text()).toEqual('Off');

	checkbox.find('input').simulate('change');

	expect(checkbox.text()).toEqual('On');
});
