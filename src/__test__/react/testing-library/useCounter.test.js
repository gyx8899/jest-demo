import React from 'react';
import {act, renderHook} from '@testing-library/react-hooks';
// eslint-disable-next-line sort-imports
import {CounterStepProvider, useCounter, useCounterWithContext} from '../userCounter';

describe('custom hook tests', () => {
	test('should increment counter', () => {
		const initialCounter = 0;
		const {result} = renderHook(({initialValue}) => useCounter(initialValue), {
			initialProps: {
				initialValue: initialCounter,
			},
		});

		expect(result.current.count).toBe(0);

		act(() => result.current.increment());

		expect(result.current.count).toBe(initialCounter + 1);
		expect(typeof result.current.increment).toBe('function');
	});

	test('should decrement counter', () => {
		const {result} = renderHook(() => useCounter());

		expect(result.current.count).toBe(0);

		act(() => result.current.decrement());

		expect(result.current.count).toBe(-1);
		expect(typeof result.current.decrement).toBe('function');
	});

	test('should reset counter', () => {
		const initialCounter = 100;
		const {result} = renderHook(({initialValue}) => useCounter(initialValue), {
			initialProps: {
				initialValue: initialCounter,
			},
		});
		expect(result.current.count).toBe(initialCounter);

		act(() => result.current.decrement());
		expect(result.current.count).toBe(initialCounter - 1);

		act(() => result.current.reset());
		expect(result.current.count).toBe(initialCounter);
		expect(typeof result.current.reset).toBe('function');
	});

	test('should incrementAsync counter', async () => {
		const initialCounter = 100;
		const {result, waitForNextUpdate} = renderHook(({initialValue}) => useCounter(initialValue), {
			initialProps: {
				initialValue: initialCounter,
			},
		});
		expect(result.current.count).toBe(initialCounter);

		act(() => result.current.incrementAsync());
		await waitForNextUpdate();
		expect(result.current.count).toBe(initialCounter + 1);

		expect(typeof result.current.reset).toBe('function');
	});

	test('should incrementAsync waitForValueToChange counter', async () => {
		const initialCounter = 100;
		const {result, waitForValueToChange} = renderHook(
				({initialValue}) => useCounter(initialValue),
				{
					initialProps: {
						initialValue: initialCounter,
					},
				},
);
		expect(result.current.count).toBe(initialCounter);

		act(() => result.current.incrementAsync());
		await waitForValueToChange(() => result.current.count);

		expect(result.current.count).toBe(initialCounter + 1);

		expect(typeof result.current.reset).toBe('function');
	});

	test('should incrementAsync wait counter', async () => {
		const initialCounter = 100;
		const {result, wait} = renderHook(({initialValue}) => useCounter(initialValue), {
					initialProps: {
						initialValue: initialCounter,
					},
				});
		expect(result.current.count).toBe(initialCounter);

		act(() => result.current.incrementAsync());
		await wait(() => {
			// console.log('result.current.count', result.current.count);
			expect(result.current.count).toBe(initialCounter + 1);
		}, {timeout: 200});

		expect(typeof result.current.reset).toBe('function');
	});

	it('should throw when over 9000', () => {
		const {result} = renderHook(() => useCounter(9000));
		act(() => {
			result.current.increment();
		});
		expect(result.error).toEqual(Error("It's over 9000!"));
	});

	test('should context step counter', () => {
		const initialCounter = 100;
		const externalStep = 2;
		// eslint-disable-next-line react/jsx-filename-extension,max-len,react/react-in-jsx-scope
		const wrapper = ({children}) => <CounterStepProvider step={externalStep}>{children}</CounterStepProvider>;
		const {result} = renderHook(({initialValue}) => useCounterWithContext(initialValue), {
			initialProps: {
				initialValue: initialCounter,
			},
			wrapper,
			// wrapper: ({children}) => <CounterStepProvider step={2}>{children}</CounterStepProvider>,
		});
		expect(result.current.count).toBe(initialCounter);

		act(() => result.current.decrement());
		expect(result.current.count).toBe(initialCounter - externalStep);

		act(() => result.current.reset());
		expect(result.current.count).toBe(initialCounter);
		expect(typeof result.current.reset).toBe('function');
	});
});
