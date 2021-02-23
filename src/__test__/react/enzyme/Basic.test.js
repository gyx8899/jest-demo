import React from 'react';

import Enzyme, {mount, shallow} from 'enzyme';
// eslint-disable-next-line sort-imports
import toJson from 'enzyme-to-json';
// eslint-disable-next-line sort-imports
import Adapter from 'enzyme-adapter-react-16';
import Basic from '../Basic';

Enzyme.configure({adapter: new Adapter()});

// import TestRenderer from 'react-test-renderer';
// import ShallowRenderer from 'react-test-renderer/shallow';


// Basic Test with React-test-renderer
// it('renders correctly react-test-renderer', () => {
//   const renderer = new ShallowRenderer();
//   renderer.render(<Basic />);
//   const result = renderer.getRenderOutput();
//
//   expect(result).toMatchSnapshot();
// });


// Basic Test with Enzyme
it('renders correctly enzyme', () => {
	// eslint-disable-next-line react/jsx-filename-extension
	const wrapper = shallow(<Basic />);

	expect(toJson(wrapper)).toMatchSnapshot();
});

it('renders correctly enzyme', () => {
	const wrapper = mount(<Basic />);

	expect(toJson(wrapper)).toMatchSnapshot();
});
