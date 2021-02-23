/* eslint-disable */
beforeAll(() => {
	// 预处理操作
	console.log('beforeAll0');
});

beforeEach(() => {
	console.log('beforeEach0');
});

afterEach(() => {
	console.log('afterEach0');
});
afterAll(() => {
	// 后处理操作
	console.log('afterAll0');
});

describe('test testObject', () => {
	beforeAll(() => {
		// 预处理操作
		console.log('beforeAll');
	});

	beforeEach(() => {
		console.log('beforeEach');
	});

	test('is true', () => {
		console.log('is true');
		expect(true).toBeTruthy();
	});

	describe('inner', () => {
		beforeAll(() => {
			// 预处理操作
			console.log('beforeAll1');
		});

		beforeEach(() => {
			console.log('beforeEach1');
		});

		afterEach(() => {
			console.log('afterEach1');
		});
		afterAll(() => {
			// 后处理操作
			console.log('afterAll1');
		});
	});

	test('is not true', () => {
		console.log('is not true');
		expect(false).toBeFalsy();
	});

	afterEach(() => {
		console.log('afterEach');
	});
	afterAll(() => {
		// 后处理操作
		console.log('afterAll');
	});
});
