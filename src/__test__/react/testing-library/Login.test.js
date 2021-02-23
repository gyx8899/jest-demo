// again, these first two imports are something you'd normally handle in
// your testing framework configuration rather than importing them in every file.
import '@testing-library/jest-dom';
// eslint-disable-next-line sort-imports
import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
// eslint-disable-next-line sort-imports
import Login from '../Login';

beforeEach(() => {
	// eslint-disable-next-line no-undef
	global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);
});

afterEach(() => {
	// 退出时进行清理
	global.fetch.mockClear();
	delete global.fetch;
});

test('allows the user to login successfully', async () => {
	// mock out window.fetch for the test
	const fakeUserResponse = {token: 'fake_user_token'};
	jest.spyOn(window, 'fetch').mockImplementationOnce(() => Promise.resolve({
			json: () => Promise.resolve(fakeUserResponse),
		}));

	// eslint-disable-next-line react/jsx-filename-extension
	render(<Login />);

	// fill out the form
	fireEvent.change(screen.getByLabelText(/username/i), {
		target: {value: 'chuck'},
	});
	fireEvent.change(screen.getByLabelText(/password/i), {
		target: {value: 'norris'},
	});

	fireEvent.click(screen.getByText(/submit/i));

	// just like a manual tester, we'll instruct our test to wait for the alert
	// to show up before continuing with our assertions.
	const alert = await screen.findByRole('alert');

	// .toHaveTextContent() comes from jest-dom's assertions
	// otherwise you could use expect(alert.textContent).toMatch(/congrats/i)
	// but jest-dom will give you better error messages which is why it's recommended
	expect(alert).toHaveTextContent(/congrats/i);
	expect(window.localStorage.getItem('token')).toEqual(fakeUserResponse.token);
});
