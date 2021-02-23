import {useImperativeHandle, useRef} from 'react';
// eslint-disable-next-line sort-imports
import {renderHook} from '@testing-library/react-hooks';

describe('useHook tests', () => {
  test('should handle useRef hook', () => {
    const {result} = renderHook(() => useRef());

    const refContainer = result.current;

    expect(Object.keys(refContainer)).toEqual(['current']);
    expect(refContainer.current).toBeUndefined();
  });

  test('should handle useImperativeHandle hook', () => {
    const {result} = renderHook(() => {
      const ref = useRef();
      useImperativeHandle(ref, () => ({
        fakeImperativeMethod: () => true,
      }));
      return ref;
    });

    const refContainer = result.current;

    expect(refContainer.current.fakeImperativeMethod()).toBe(true);
  });
});
