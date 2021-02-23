import React, {useEffect, useState} from 'react';
// eslint-disable-next-line import/no-unresolved
import axios from 'axios';

const TestAxios = (props) => {
	const [state, setState] = useState();

	useEffect(() => {
		// eslint-disable-next-line react/prop-types
		axios.get(props.url)
				.then((res) => setState(res.data));
	}, []);

	return (
			<div>
				<h1> Axios Test </h1>
				{state
						? <p data-testid="title">{state.title}</p>
						: <p>...Loading</p>}
			</div>
	);
};


export default TestAxios;
