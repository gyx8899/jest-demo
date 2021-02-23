import React, {useReducer} from 'react';
import * as ACTIONS from '../store/actions';
import * as Reducer from '../store/reducer';


const TestHookReducer = () => {
	const [reducerState, dispatch] = useReducer(Reducer.Reducer1, Reducer.initialState);

	const dispatchActionSuccess = () => {
		dispatch(ACTIONS.SUCCESS);
	};

	// eslint-disable-next-line no-unused-vars
	const dispatchActionFailure = () => {
		dispatch(ACTIONS.FAILURE);
	};


	return (
			// eslint-disable-next-line react/jsx-filename-extension
			<div>
				<div>
					{reducerState.stateprop1
							? <p>stateprop1 is true</p>
							: <p>stateprop1 is false</p>}
				</div>
				<button type="button" onClick={dispatchActionSuccess}>
					Dispatch Success
				</button>
			</div>
	);
};


export default TestHookReducer;
