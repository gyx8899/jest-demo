import React from 'react';
import {
act, cleanup, fireEvent, render, wait,
} from '@testing-library/react';
// eslint-disable-next-line import/extensions,sort-imports
import TestHook from '../test_hook.jsx';
// eslint-disable-next-line sort-imports
import App from '../../../App';

afterEach(cleanup);

it('Text in state is changed when button clicked', async () => {
	// eslint-disable-next-line react/jsx-filename-extension
	const {getByText} = render(<TestHook />);

	expect(getByText(/Initial/i).textContent).toBe('Initial State');

	act(() => {
		fireEvent.click(getByText('State Change Button'));
	});

	await wait(() => {
		expect(getByText(/Initial/i).textContent).toBe('Initial State Changed');
	});
});


it('button click changes props', async () => {
	const {getByText} = render(<App>
		<TestHook />
                            </App>);

	expect(getByText(/Moe/i).textContent).toBe('Moe');

	act(() => {
		fireEvent.click(getByText('Change Name'));
	});
	await wait(() => {
		expect(getByText(/Steve/i).textContent).toBe('Steve');
	});
});
