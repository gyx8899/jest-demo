import React from 'react';

const Basic = (props) => (
			<div>
				<h1>
{' '}
Basic Test
{props.data}
    </h1>
				<p>
{' '}
This is a basic Test Component
{props.data}
    </p>
			</div>
	);

export default Basic;
