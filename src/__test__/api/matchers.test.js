describe('Matchers', () => {
	// Demos from jestjs.io
	test('two plus two is four', () => {
		expect(2 + 2).toBe(4);
	});

	test('object assignment', () => {
		const data = {one: 1};
		data.two = 2;
		expect(data).toEqual({one: 1, two: 2});
	});

	test('adding positive numbers is not zero', () => {
		for (let a = 1; a < 10; a += 1) {
			for (let b = 1; b < 10; b += 1) {
				expect(a + b).not.toBe(0);
			}
		}
	});

	test('null', () => {
		const n = null;
		expect(n).toBeNull();
		expect(n).toBeDefined();
		expect(n).not.toBeUndefined();
		expect(n).not.toBeTruthy();
		expect(n).toBeFalsy();
	});

	test('zero', () => {
		const z = 0;
		expect(z).not.toBeNull();
		expect(z).toBeDefined();
		expect(z).not.toBeUndefined();
		expect(z).not.toBeTruthy();
		expect(z).toBeFalsy();
	});

	test('two plus two', () => {
		const value = 2 + 2;
		expect(value).toBeGreaterThan(3);
		expect(value).toBeGreaterThanOrEqual(3.5);
		expect(value).toBeLessThan(5);
		expect(value).toBeLessThanOrEqual(4.5);

		// toBe and toEqual are equivalent for numbers
		expect(value).toBe(4);
		expect(value).toEqual(4);
	});

	test('两个浮点数字相加', () => {
		const value = 0.1 + 0.2;
		// expect(value).toBe(0.3);           这句会报错，因为浮点数有舍入误差
		expect(value).toBeCloseTo(0.3); // 这句可以运行
	});

	test('there is no I in team', () => {
		expect('team').not.toMatch(/I/);
	});

	test('but there is a "stop" in Christoph', () => {
		expect('Christoph').toMatch(/stop/);
	});

	const shoppingList = [
		'diapers',
		'kleenex',
		'trash bags',
		'paper towels',
		'beer',
	];

	test('the shopping list has beer on it', () => {
		expect(shoppingList).toContain('beer');
		expect(new Set(shoppingList)).toContain('beer');
	});

	function compileAndroidCode() {
		throw new Error('you are using the wrong JDK');
	}

	test('compiling android goes as expected', () => {
		expect(compileAndroidCode).toThrow();
		expect(compileAndroidCode).toThrow(Error);

		// You can also use the exact error message or a regexp
		expect(compileAndroidCode).toThrow('you are using the wrong JDK');
		expect(compileAndroidCode).toThrow(/JDK/);
	});
});
