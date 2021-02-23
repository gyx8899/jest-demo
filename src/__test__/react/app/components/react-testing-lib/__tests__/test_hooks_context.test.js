import React from 'react';
import {
act, cleanup, fireEvent, render,
} from '@testing-library/react';
// eslint-disable-next-line import/extensions,sort-imports
import TestHookContext from '../test_hook_context.jsx';
// eslint-disable-next-line sort-imports
import App from '../../../App';

import Context from '../../store/context';

afterEach(cleanup);

it('Context value is updated by child component', async () => {
	// eslint-disable-next-line react/jsx-filename-extension
	const {getByText} = render(<App>
		<Context.Provider>
			<TestHookContext />
		</Context.Provider>
                            </App>);

	expect(getByText(/Some/i).textContent).toBe('Some Text');

	act(() => {
		fireEvent.click(getByText('Change Text'));
	});

	expect(getByText(/Some/i).textContent).toBe('Some Other Text');
});
