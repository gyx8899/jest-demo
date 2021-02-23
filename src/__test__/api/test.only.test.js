function inchesOfRain() {
	return 1;
}
function inchesOfSnow() {
	return 0;
}

describe('test.only', () => {
	test.only('it is raining', () => {
		expect(inchesOfRain()).toBeGreaterThan(0);
	});

	test('it is not snowing', () => {
		expect(inchesOfSnow()).toBe(0);
	});
});
