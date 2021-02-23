import React from 'react';
// eslint-disable-next-line no-unused-vars
import ReactDOM from 'react-dom';
import {cleanup, fireEvent, render} from '@testing-library/react';
// eslint-disable-next-line import/extensions,sort-imports
import TestHookReducer from '../test_hook_reducer.jsx';
// eslint-disable-next-line sort-imports
import * as Reducer from '../../store/reducer';
// eslint-disable-next-line sort-imports
import * as ACTIONS from '../../store/actions';


afterEach(cleanup);

describe('test the reducer and actions', () => {
	it('should return the initial state', () => {
		expect(Reducer.initialState).toEqual({stateprop1: false});
	});

	it('should change stateprop1 from false to true', () => {
		expect(Reducer.Reducer1(Reducer.initialState, ACTIONS.SUCCESS))
				.toEqual({stateprop1: true});
	});
});

it('Reducer changes stateprop1 from false to true', () => {
	// eslint-disable-next-line react/jsx-filename-extension
	const {getByText} = render(<TestHookReducer />);

	expect(getByText(/stateprop1 is/i).textContent).toBe('stateprop1 is false');

	fireEvent.click(getByText('Dispatch Success'));

	expect(getByText(/stateprop1 is/i).textContent).toBe('stateprop1 is true');
});
