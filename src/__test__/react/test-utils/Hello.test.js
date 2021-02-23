import React from 'react';
import {render, unmountComponentAtNode} from 'react-dom';
// eslint-disable-next-line sort-imports
import {act} from 'react-dom/test-utils';

// eslint-disable-next-line import/no-unresolved,sort-imports
import Hello from '../Hello';

let container = null;
beforeEach(() => {
	// 创建一个 DOM 元素作为渲染目标
	container = document.createElement('div');
	document.body.appendChild(container);
});

afterEach(() => {
	// 退出时进行清理
	unmountComponentAtNode(container);
	container.remove();
	container = null;
});

it('渲染有或无名称', () => {
	act(() => {
		// eslint-disable-next-line react/jsx-filename-extension
		render(<Hello />, container);
	});
	expect(container.textContent).toBe('嘿，陌生人');

	act(() => {
		render(<Hello name="Jenny" />, container);
	});
	expect(container.textContent).toBe('你好，Jenny！');

	act(() => {
		render(<Hello name="Margaret" />, container);
	});
	expect(container.textContent).toBe('你好，Margaret！');
});
