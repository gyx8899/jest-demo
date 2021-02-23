describe('test.each', () => {
	test.each([
		[1, 1, 2],
		[1, 2, 3],
		[2, 1, 3],
	])('.add(%i, %i)', (a, b, expected) => {
		expect(a + b).toBe(expected);
	});

	test.each`
  a    | b    | expected
  ${1} | ${1} | ${2}
  ${1} | ${2} | ${3}
  ${2} | ${1} | ${3}
`('returns $expected when $a is added $b', ({a, b, expected}) => {
		expect(a + b).toBe(expected);
	});
});
