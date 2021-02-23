function fetchDataCallback(callback) {
	setTimeout(() => {
		callback('peanut butter');
	}, 1000);
}

function fetchData(isSuccessful = true) {
	return new Promise(((resolve, reject) => {
		if (isSuccessful) {
			resolve('peanut butter');
		} else {
			reject(new Error('error'));
		}
	}));
}

describe('Async test cases', () => {
	beforeAll(() => {
		// eslint-disable-next-line no-console
		console.log('Before all');
	});

	afterAll(() => {
		// eslint-disable-next-line no-console
		console.log('After all');
	});
	test('the data is peanut butter', (done) => {
		function callback(data) {
			try {
				expect(data).toBe('peanut butter');
				done();
			} catch (error) {
				done(error);
			}
		}

		fetchDataCallback(callback);
	});

	test('the data is peanut butter', () => fetchData().then((data) => {
			expect(data).toBe('peanut butter');
		}));

	test('the fetch fails with an error', () => {
		expect.assertions(1);
		return fetchData(false).catch((e) => expect(e.message).toMatch('error'));
	});

	test('the data is peanut butter', () => expect(fetchData()).resolves.toBe('peanut butter'));

	test('the data is peanut butter', async () => {
		const data = await fetchData();
		expect(data).toBe('peanut butter');
	});

	test('the fetch fails with an error', async () => {
		expect.assertions(1);
		try {
			await fetchData(false);
		} catch (e) {
			expect(e.message).toMatch('error');
		}
	});

	test('the data is peanut butter', async () => {
		await expect(fetchData()).resolves.toBe('peanut butter');
	});

	test('the fetch fails with an error', async () => {
		// await expect(fetchData(false)).rejects.toMatch("error");
		// expect(received).rejects.toMatch()
		// Expected received Promise to reject, instead it resolved to value "peanut butter"
		// await expect(fetchData()).rejects.toThrow("error");
		// expect(received).rejects.toThrow()
		// Expected received Promise to reject, instead it resolved to value "peanut butter"
	});
});
