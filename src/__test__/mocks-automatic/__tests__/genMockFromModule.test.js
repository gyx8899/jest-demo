// Copyright 2004-present Facebook. All Rights Reserved.

import utils from '../utils';

// Remove below jest.mock if jest's automock value is true
jest.mock('../utils');

test('implementation created by automock', () => {
  expect(utils.authorize('wizzard')).toBeUndefined();
  expect(utils.isAuthorized()).toBeUndefined();
});

test('implementation created by jest.genMockFromModule', () => {
  // eslint-disable-next-line no-shadow
  const utils = jest.genMockFromModule('../utils').default;
  utils.isAuthorized = jest.fn((secret) => secret === 'not wizard');

  expect(utils.authorize.mock).toBeTruthy();
  expect(utils.isAuthorized('not wizard')).toEqual(true);
});
