import React from 'react';

const withConditional = (Component) => function withConditionalComponent({condition, ...props}) {
			if (condition) {
				return <Component {...props} />;
			}
			return null;
		};
export default withConditional;
