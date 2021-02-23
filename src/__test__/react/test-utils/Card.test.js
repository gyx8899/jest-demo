import React from 'react';
import {render, unmountComponentAtNode} from 'react-dom';
// eslint-disable-next-line sort-imports
import {act} from 'react-dom/test-utils';
// eslint-disable-next-line sort-imports
import Card from '../Card';

jest.useFakeTimers();

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

describe('Card onSelect', () => {
	it('超时后应选择 null', () => {
		const onSelect = jest.fn();
		act(() => {
			// eslint-disable-next-line react/jsx-filename-extension
			render(<Card onSelect={onSelect} />, container);
		});

		// 提前 100 毫秒执行
		act(() => {
			jest.advanceTimersByTime(100);
		});
		expect(onSelect).not.toHaveBeenCalled();

		// 然后提前 5 秒执行
		act(() => {
			jest.advanceTimersByTime(5000);
		});
		expect(onSelect).toHaveBeenCalledWith(null);
	});

	it('移除时应进行清理', () => {
		const onSelect = jest.fn();
		act(() => {
			render(<Card onSelect={onSelect} />, container);
		});

		act(() => {
			jest.advanceTimersByTime(100);
		});
		expect(onSelect).not.toHaveBeenCalled();

		// 卸载应用程序
		act(() => {
			render(null, container);
		});

		act(() => {
			jest.advanceTimersByTime(5000);
		});
		expect(onSelect).not.toHaveBeenCalled();
	});

	it('应接受选择', () => {
		const onSelect = jest.fn();
		act(() => {
			render(<Card onSelect={onSelect} />, container);
		});

		act(() => {
			container
					.querySelector("[data-testid='2']")
					.dispatchEvent(new MouseEvent('click', {bubbles: true}));
		});

		expect(onSelect).toHaveBeenCalledWith(2);
	});
});
