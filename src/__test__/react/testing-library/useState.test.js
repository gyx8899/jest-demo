import {useState} from 'react';
import {act, renderHook} from '@testing-library/react-hooks';

describe('useState tests', () => {
  test('should use setState value', () => {
    const {result} = renderHook(() => useState('foo'));

    const [value] = result.current;

    expect(value).toBe('foo');
  });

  test('should update setState value using setter', () => {
    const {result} = renderHook(() => useState('foo'));

    // eslint-disable-next-line no-unused-vars
    const [_, setValue] = result.current;

    act(() => setValue('bar'));

    const [value] = result.current;

    expect(value).toBe('bar');
  });
});
