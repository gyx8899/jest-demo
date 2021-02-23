import React, {useState} from 'react';

export default function Toggle(props) {
	const [state, setState] = useState(false);
	return (
			// eslint-disable-next-line react/button-has-type,react/jsx-filename-extension
			<button
				onClick={() => {
						setState((previousState) => !previousState);
					// eslint-disable-next-line react/prop-types
						props.onChange(!state);
					}}
				data-testid="toggle"
			>
				{state === true ? 'Turn off' : 'Turn on'}
			</button>
	);
}
