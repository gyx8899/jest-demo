import React from 'react';
import {render, unmountComponentAtNode} from 'react-dom';
// eslint-disable-next-line sort-imports
import {act} from 'react-dom/test-utils';

// eslint-disable-next-line sort-imports
import Toggle from '../Toggle';

let container = null;
beforeEach(() => {
	// 创建一个 DOM 元素作为渲染目标
	container = document.createElement('div');
	// container *必须* 附加到 document，事件才能正常工作。
	document.body.appendChild(container);
});

afterEach(() => {
	// 退出时进行清理
	unmountComponentAtNode(container);
	container.remove();
	container = null;
});

it('点击时更新值', () => {
	const onChange = jest.fn();
	act(() => {
		// eslint-disable-next-line react/jsx-filename-extension
		render(<Toggle onChange={onChange} />, container);
	});

	// 获取按钮元素，并触发点击事件
	const button = document.querySelector('[data-testid=toggle]');
	expect(button.innerHTML).toBe('Turn on');

	act(() => {
		button.dispatchEvent(new MouseEvent('click', {bubbles: true}));
	});

	expect(onChange).toHaveBeenCalledTimes(1);
	expect(button.innerHTML).toBe('Turn off');

	act(() => {
		for (let i = 0; i < 5; i += 1) {
			button.dispatchEvent(new MouseEvent('click', {bubbles: true}));
		}
	});

	expect(onChange).toHaveBeenCalledTimes(6);
	expect(button.innerHTML).toBe('Turn on');
});
