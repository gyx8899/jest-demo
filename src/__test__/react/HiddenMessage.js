import React from 'react';

// NOTE: React Testing Library works with React Hooks _and_ classes just as well
// and your tests will be the same however you write your components.
function HiddenMessage({children}) {
	const [showMessage, setShowMessage] = React.useState(false);
	return (
			// eslint-disable-next-line react/jsx-filename-extension
			<div>
				{/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
				<label htmlFor="toggle">Show Message</label>
				<input
					id="toggle"
					type="checkbox"
					onChange={(e) => setShowMessage(e.target.checked)}
					checked={showMessage}
				/>
				{showMessage ? children : null}
			</div>
	);
}

export default HiddenMessage;
