/* eslint-disable */
class CityDatabase {
	init() {
		this.cities = {
			Vienna: 'Wiener Schnitzel',
			'San Juan': 'Mofongo',
		};
	}

	isCity(name) {
		return !!this.cities[name];
	}

	isCityFoodPair(name, food) {
		return this.isCity(name) && this.cities[name] === food;
	}

	clear() {
		this.cities = null;
	}

	destroy() {
		super.destroy();
	}
}

describe('为多次测试重复设置', () => {
	const cities = new CityDatabase();
	beforeEach(() => {
		cities.init();

		// Case: async
		// return initializeCityDatabase();
	});

	afterEach(() => {
		cities.clear();
	});

	test('city database has Vienna', () => {
		expect(cities.isCity('Vienna')).toBeTruthy();
	});

	test('city database has San Juan', () => {
		expect(cities.isCity('San Juan')).toBeTruthy();
	});
});

describe('一次性设置', () => {
	const cities = new CityDatabase();
	beforeAll(() => cities.init());

	afterAll(() => cities.destroy());

	test('city database has Vienna', () => {
		expect(cities.isCity('Vienna')).toBeTruthy();
	});

	test('city database has San Juan', () => {
		expect(cities.isCity('San Juan')).toBeTruthy();
	});
});

describe('作用域', () => {
	// Applies to all tests in this file
	const cities = new CityDatabase();
	beforeEach(() => cities.init());

	test('city database has Vienna', () => {
		expect(cities.isCity('Vienna')).toBeTruthy();
	});

	test('city database has San Juan', () => {
		expect(cities.isCity('San Juan')).toBeTruthy();
	});

	describe('matching cities to foods', () => {
		// Applies only to tests in this describe block
		// eslint-disable-next-line no-shadow
		const cities = new CityDatabase();
		beforeEach(() => cities.init());

		test('Vienna <3 sausage', () => {
			expect(cities.isCityFoodPair('Vienna', 'Wiener Schnitzel')).toBe(true);
		});

		test('San Juan <3 plantains', () => {
			expect(cities.isCityFoodPair('San Juan', 'Mofongo')).toBe(true);
		});
	});
});

describe('desribe和test块的执行顺序', () => {
	describe('outer', () => {
		console.log('describe outer-a');

		describe('describe inner 1', () => {
			console.log('describe inner 1');
			test('test 1', () => {
				console.log('test for describe inner 1');
				expect(true).toEqual(true);
			});
		});

		console.log('describe outer-b');

		test('test 1', () => {
			console.log('test for describe outer');
			expect(true).toEqual(true);
		});

		describe('describe inner 2', () => {
			console.log('describe inner 2');
			test('test for describe inner 2', () => {
				console.log('test for describe inner 2');
				expect(false).toEqual(false);
			});
		});

		console.log('describe outer-c');
	});

	// describe outer-a
	// describe inner 1
	// describe outer-b
	// describe inner 2
	// describe outer-c
	// test for describe inner 1
	// test for describe outer
	// test for describe inner 2
});

describe('如果测试失败，第一件要检查的事就是，当仅运行这条测试时，它是否仍然失败。', () => {
	// test.only('this will be the only test that runs', () => {
	//   expect(true).toBe(false);
	// });

	test('this test will not run', () => {
		expect('A').toBe('A');
	});
});
