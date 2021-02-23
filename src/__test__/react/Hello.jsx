import React from 'react';

export default function Hello(props) {
	// eslint-disable-next-line react/destructuring-assignment,react/prop-types
	if (props.name) {
		return (
<h1>
你好，
{props.name}
！
</h1>
);
	}
	return <span>嘿，陌生人</span>;
}
