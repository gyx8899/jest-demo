import {useEffect} from 'react';
import {cleanup, renderHook} from '@testing-library/react-hooks';

describe('cleanup tests', () => {
  test('should flush effects on cleanup', async () => {
    let cleanupCalled = false;

    const hookWithCleanup = () => {
      useEffect(() => () => {
          cleanupCalled = true;
        });
    };

    renderHook(() => hookWithCleanup());

    await cleanup();

    expect(cleanupCalled).toBe(true);
  });

  test('should cleanup all rendered hooks', async () => {
    const cleanupCalled = [];
    const hookWithCleanup = (id) => {
      useEffect(() => () => {
          cleanupCalled[id] = true;
        });
    };

    renderHook(() => hookWithCleanup(1));
    renderHook(() => hookWithCleanup(2));

    await cleanup();

    expect(cleanupCalled[1]).toBe(true);
    expect(cleanupCalled[2]).toBe(true);
  });
});
