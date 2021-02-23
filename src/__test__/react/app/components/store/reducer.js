// eslint-disable-next-line no-unused-vars

export const initialState = {
	stateprop1: false,
};

// eslint-disable-next-line consistent-return
export const Reducer1 = (state = initialState, action) => {
	switch (action.type) {
		case 'SUCCESS':
			return {
				...state,
				stateprop1: true,
			};
		case 'FAILURE':
			return {
				...state,
				stateprop1: false,
			};
		default:
			// eslint-disable-next-line no-console
			console.log(state);
	}
};
