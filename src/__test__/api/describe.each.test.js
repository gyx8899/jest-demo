describe('describe.each need to be wrapped with describe to have arrow button!', () => {
	describe.each([
		[1, 1, 2],
		[1, 2, 3],
		[2, 1, 3],
	])('.add(%i, %i)', (a, b, expected) => {
		test(`returns ${expected}`, () => {
			expect(a + b).toBe(expected);
		});

		test(`returned value not be greater than ${expected}`, () => {
			expect(a + b).not.toBeGreaterThan(expected);
		});

		test(`returned value not be less than ${expected}`, () => {
			expect(a + b).not.toBeLessThan(expected);
		});
	});

	describe.each([
		[1, 1, 2, 'toBe'],
		[1, 2, 3, 'toEqual'],
		[2, 1, 3, 'toBeLessThan', true],
	])('.add(%i, %i)', (a, b, expected, matcher, matcherNot) => {
		test(`returns ${expected}`, () => {
			expect(a + b).toBe(expected);
		});

		test(`returned value not be greater than ${expected}`, () => {
			expect(a + b).not.toBeGreaterThan(expected);
		});

		test(`returned value not be less than ${expected}`, () => {
			expect(a + b).not.toBeLessThan(expected);
		});

		test(`test matcher: ${matcher}`, () => {
			if (!matcherNot) {
				expect(a + b)[matcher](expected);
			} else {
				expect(a + b).not[matcher](expected);
			}
		});
	});

	describe.each`
  a    | b    | expected
  ${1} | ${1} | ${2}
  ${1} | ${2} | ${3}
  ${2} | ${1} | ${3}
`('$a + $b', ({a, b, expected}) => {
		test(`returns ${expected}`, () => {
			expect(a + b).toBe(expected);
		});

		test(`returned value not be greater than ${expected}`, () => {
			expect(a + b).not.toBeGreaterThan(expected);
		});

		test(`returned value not be less than ${expected}`, () => {
			expect(a + b).not.toBeLessThan(expected);
		});
	});
});
