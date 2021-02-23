function inchesOfRain() {
	return 1;
}
function inchesOfSnow() {
	return 0;
}

describe('test.skip', () => {
	test('it is raining', () => {
		expect(inchesOfRain()).toBeGreaterThan(0);
	});

	test.skip('it is not snowing', () => {
		expect(inchesOfSnow()).toBe(0);
	});
});

describe('test.skip.each', () => {
	test.skip.each([
		[1, 1, 2],
		[1, 2, 3],
		[2, 1, 3],
	])('.add(%i, %i)', (a, b, expected) => {
		expect(a + b).toBe(expected); // will not be ran
	});

	test('will be ran', () => {
		expect(1 / 0).toBe(Infinity);
	});
});

describe('test.skip.each', () => {
	test.skip.each`
  a    | b    | expected
  ${1} | ${1} | ${2}
  ${1} | ${2} | ${3}
  ${2} | ${1} | ${3}
`('returns $expected when $a is added $b', ({a, b, expected}) => {
		expect(a + b).toBe(expected); // will not be ran
	});

	test('will be ran', () => {
		expect(1 / 0).toBe(Infinity);
	});
});
