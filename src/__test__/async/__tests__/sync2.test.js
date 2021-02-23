const users = {
	4: {name: 'Mark'},
	5: {name: 'Paul'},
};

const request = jest.fn((url) => new Promise((resolve, reject) => {
		const userID = parseInt(url.substr('/users/'.length), 10);
		process.nextTick(() => (users[userID]
						? resolve(users[userID])
				// eslint-disable-next-line prefer-promise-reject-errors
						: reject({
							error: `User with ${userID} not found.`,
						})));
	}));
const user = {
	async getUserName(userID) {
		// eslint-disable-next-line no-shadow
		return request(`/users/${userID}`).then((user) => user.name);
	},
};

// 断言必须返回一个primose
it('works with promises', () => {
	expect.assertions(1);
	return user.getUserName(4).then((data) => expect(data).toEqual('Mark'));
});

it('works with resolves', () => {
	expect.assertions(1);
	return expect(user.getUserName(5)).resolves.toEqual('Paul');
});

// 使用async/await
it('works with async/await', async () => {
	expect.assertions(1);
	const data = await user.getUserName(4);
	expect(data).toEqual('Mark');
});
// async/await 也可以和 `.resolves` 一起使用.
it('works with async/await and resolves', async () => {
	expect.assertions(1);
	await expect(user.getUserName(5)).resolves.toEqual('Paul');
});

// 用 Promise.catch 测试一个异步的错误
it('tests error with promises', async () => {
	expect.assertions(1);
	return user.getUserName(2).catch((e) => expect(e).toEqual({
				error: 'User with 2 not found.',
			}));
});

// Or using async/await.
it('tests error with async/await', async () => {
	expect.assertions(1);
	try {
		await user.getUserName(1);
	} catch (e) {
		expect(e).toEqual({
			error: 'User with 1 not found.',
		});
	}
});

// 用`.rejects`.来测试一个异步的错误
it('tests error with rejects', () => {
	expect.assertions(1);
	return expect(user.getUserName(3)).rejects.toEqual({
		error: 'User with 3 not found.',
	});
});

// 或者与async/await 一起使用 `.rejects`.
it('tests error with async/await and rejects', async () => {
	expect.assertions(1);
	await expect(user.getUserName(3)).rejects.toEqual({
		error: 'User with 3 not found.',
	});
});
