const myBeverage = {
	delicious: true,
	sour: false,
};
describe.only('my beverage', () => {
	test('is delicious', () => {
		expect(myBeverage.delicious).toBeTruthy();
	});

	test('is not sour', () => {
		expect(myBeverage.sour).toBeFalsy();
	});
});

describe('my other beverage', () => {
	// ... will be skipped
	test('Another is delicious', () => {
		expect(myBeverage.delicious).toBeTruthy();
	});
});
