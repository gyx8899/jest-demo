import React from 'react';

// eslint-disable-next-line sort-imports
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, {mount} from 'enzyme';
// eslint-disable-next-line sort-imports
import Counter from '../counter';

Enzyme.configure({adapter: new Adapter()});

// incorrect function assignment in the onClick method
// will still pass the tests.

test('the increment method increments count', () => {
	// eslint-disable-next-line react/jsx-filename-extension
	const wrapper = mount(<Counter />);

	expect(wrapper.instance().state.count).toBe(0);

	wrapper.find('button.counter-button').simulate('click');
	// alternatives
	// wrapper.setState({count: 1})
	// wrapper.instance().increment()
	expect(wrapper.instance().state.count).toBe(1);
});
