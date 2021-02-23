import React, {useEffect, useState} from 'react';

export default function User(props) {
	const [user, setUser] = useState(null);

	async function fetchUserData(id) {
		const response = await fetch(`/${id}`);
		setUser(await response.json());
	}

	useEffect(() => {
		// eslint-disable-next-line react/prop-types
		fetchUserData(props.id);
		// eslint-disable-next-line react/destructuring-assignment,react/prop-types
	}, [props.id]);

	if (!user) {
		return '加载中...';
	}

	return (
			// eslint-disable-next-line react/jsx-filename-extension
			<details>
				<summary>{user.name}</summary>
				<strong>{user.age}</strong>
{' '}
岁
				<br />
				住在
{' '}
{user.address}
			</details>
	);
}
