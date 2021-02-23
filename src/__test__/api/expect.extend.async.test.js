const getExternalValueFromRemoteSource = async () => Promise.resolve(100);

expect.extend({
	async toBeDivisibleByExternalValue(received) {
		const externalValue = await getExternalValueFromRemoteSource();
		const pass = received % externalValue === 0;
		if (pass) {
			return {
				message: () => `expected ${received} not to be divisible by ${externalValue}`,
				pass: true,
			};
		}
		return {
			message: () => `expected ${received} to be divisible by ${externalValue}`,
			pass: false,
		};
	},
});

test('is divisible by external value', async () => {
	await expect(100).toBeDivisibleByExternalValue();
	await expect(101).not.toBeDivisibleByExternalValue();
});
