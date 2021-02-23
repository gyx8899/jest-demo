import React from 'react';
import {render, unmountComponentAtNode} from 'react-dom';
// eslint-disable-next-line sort-imports
import {act} from 'react-dom/test-utils';
// eslint-disable-next-line sort-imports
import User from '../User';

let container = null;
beforeEach(() => {
	// eslint-disable-next-line no-undef
	global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

	// 创建一个 DOM 元素作为渲染目标
	container = document.createElement('div');
	document.body.appendChild(container);
});

afterEach(() => {
	// 退出时进行清理
	unmountComponentAtNode(container);
	container.remove();
	container = null;

	global.fetch.mockClear();
	delete global.fetch;
});

it('渲染用户数据', async () => {
	const fakeUser = {
		name: 'Joni Baez',
		age: '32',
		address: '123, Charming Avenue',
	};

	jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({
				json: () => Promise.resolve(fakeUser),
			}));

	// 使用异步的 act 应用执行成功的 promise
	await act(async () => {
		// eslint-disable-next-line react/jsx-filename-extension
		render(<User id="123" />, container);
	});

	expect(container.querySelector('summary').textContent).toBe(fakeUser.name);
	expect(container.querySelector('strong').textContent).toBe(fakeUser.age);
	expect(container.textContent).toContain(fakeUser.address);

	// 清理 mock 以确保测试完全隔离
	global.fetch.mockRestore();
});
