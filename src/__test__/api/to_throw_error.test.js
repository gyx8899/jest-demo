const binaryStringToNumber = (binString) => {
	if (!/^[01]+$/.test(binString)) {
		throw new Error('Not a binary number.');
	}

	return parseInt(binString, 2);
};

describe('binaryStringToNumber', () => {
	describe('given an invalid binary string', () => {
		test('composed of non-numbers throws CustomError', () => {
			expect(() => binaryStringToNumber('abc')).toThrowError(Error);
		});
		// test('composed of non-numbers throws CustomError', () => {
		// eslint-disable-next-line no-tabs
		// 	expect(binaryStringToNumber('abc')).toThrowError(Error);
		// });

		test('with extra whitespace throws CustomError', () => {
			expect(() => binaryStringToNumber('  100')).toThrowError(Error);
		});
		// test('with extra whitespace throws CustomError', () => {
		// eslint-disable-next-line no-tabs
		// 	expect(binaryStringToNumber('  100')).toThrowError(Error);
		// });
	});

	describe('given a valid binary string', () => {
		test('returns the correct number', () => {
			expect(binaryStringToNumber('100')).toBe(4);
		});
	});
});
