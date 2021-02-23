export const SUCCESS = {
	type: 'SUCCESS',
};

export const FAILURE = {
	type: 'FAILURE',
};

// eslint-disable-next-line camelcase
export const success_creator = (data) => ({
		type: 'SUCCESS_CREATOR',
		payload: data,
	});

// eslint-disable-next-line camelcase
export const failure_creator = () => ({
		type: 'FAILURE_CREATOR',
	});
