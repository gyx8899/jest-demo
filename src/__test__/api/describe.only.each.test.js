describe('describe.only.each', () => {
	describe.only.each([
		[1, 1, 2],
		[1, 2, 3],
		[2, 1, 3],
	])('.add(%i, %i)', (a, b, expected) => {
		test(`returns ${expected}`, () => {
			expect(a + b).toBe(expected);
		});
	});

	test('will not be ran', () => {
		expect(1 / 0).toBe(Infinity);
	});
});

describe('describe.only.each', () => {
	describe.only.each`
  a    | b    | expected
  ${1} | ${1} | ${2}
  ${1} | ${2} | ${3}
  ${2} | ${1} | ${3}
`('returns $expected when $a is added $b', ({a, b, expected}) => {
		test('passes', () => {
			expect(a + b).toBe(expected);
		});
	});

	test('will not be ran', () => {
		expect(1 / 0).toBe(Infinity);
	});
});
