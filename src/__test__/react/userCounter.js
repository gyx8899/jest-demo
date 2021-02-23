import React, {useCallback, useContext, useState} from 'react';

const CounterStepContext = React.createContext(1);
// eslint-disable-next-line react/prop-types
export const CounterStepProvider = ({step, children}) => (
		// eslint-disable-next-line react/jsx-filename-extension
		<CounterStepContext.Provider value={step}>{children}</CounterStepContext.Provider>
);

export function useCounter(initialValue = 0) {
	const [count, setCount] = useState(initialValue);

	const reset = useCallback(() => setCount(initialValue), [initialValue]);
	const increment = useCallback(() => setCount((x) => x + 1), []);
	const incrementAsync = useCallback(() => setTimeout(increment, 100), [increment]);
	const decrement = useCallback(() => setCount(count - 1), [count]);

	if (count > 9000) {
		throw Error("It's over 9000!");
	}

	return {
		count, reset, increment, incrementAsync, decrement,
	};
}

export function useCounterWithContext(initialValue = 0) {
	const [count, setCount] = useState(initialValue);
	const step = useContext(CounterStepContext);

	const reset = useCallback(() => setCount(initialValue), [initialValue]);
	const increment = useCallback(() => setCount((x) => x + step), [step]);
	const decrement = useCallback(() => setCount(count - step), [count, step]);

	return {
		count, reset, increment, decrement,
	};
}
