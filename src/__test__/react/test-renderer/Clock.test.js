import React from 'react';
import renderer from 'react-test-renderer';
// eslint-disable-next-line sort-imports
import Clock from '../Clock';

jest.useFakeTimers();
Date.now = jest.fn(() => 1482363367071);

it('renders correctly', () => {
	// eslint-disable-next-line react/jsx-filename-extension
	const component = renderer.create(<Clock />);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();

	// Fast-forward 1 second
	jest.advanceTimersByTime(1000);

	tree = component.toJSON();
	expect(tree).toMatchSnapshot();

	component.unmount();
});
