describe('describe.skip.each', () => {
	describe.skip.each([
		[1, 1, 2],
		[1, 2, 3],
		[2, 1, 3],
	])('.add(%i, %i)', (a, b, expected) => {
		test(`returns ${expected}`, () => {
			expect(a + b).toBe(expected); // will not be ran
		});
	});

	test('will be ran', () => {
		expect(1 / 0).toBe(Infinity);
	});

	describe.skip.each`
  a    | b    | expected
  ${1} | ${1} | ${2}
  ${1} | ${2} | ${3}
  ${2} | ${1} | ${3}
`('returns $expected when $a is added $b', ({a, b, expected}) => {
		test(`${a} + ${b} = ${expected} will not be ran`, () => {
			expect(a + b).toBe(expected); // will not be ran
		});
	});
});
