import React from 'react';
import {
 cleanup, render, waitForElement,
} from '@testing-library/react';
// eslint-disable-next-line import/no-unresolved,sort-imports
import axiosMock from 'axios';
// eslint-disable-next-line import/extensions,sort-imports
import TestAxios from '../test_axios.jsx';

afterEach(cleanup);

it('Async axios request works', async () => {
	axiosMock.get.mockResolvedValue({data: {title: 'some title'}});

	const url = 'https://jsonplaceholder.typicode.com/posts/1';
	// eslint-disable-next-line react/jsx-filename-extension
	const {getByText, getByTestId} = render(<TestAxios url={url} />);

	expect(getByText(/...Loading/i).textContent).toBe('...Loading');

	const resolvedEl = await waitForElement(() => getByTestId('title'));

	expect((resolvedEl).textContent).toBe('some title');

	expect(axiosMock.get).toHaveBeenCalledTimes(1);
	expect(axiosMock.get).toHaveBeenCalledWith(url);
});
