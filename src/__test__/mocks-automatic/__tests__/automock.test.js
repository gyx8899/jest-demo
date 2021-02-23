// Copyright 2004-present Facebook. All Rights Reserved.

import utils from '../utils';

// Test auto mock need add setting to jest config in package.json or jest.config.js
// "jest": {
//   "automock": true
// }

// Remove below jest.mock if jest's automock value is true
jest.mock('../utils');

test('if utils are mocked', () => {
  expect(utils.authorize.mock).toBeTruthy();
  expect(utils.isAuthorized.mock).toBeTruthy();
});

test('mocked implementation', () => {
  utils.authorize.mockReturnValue('mocked_token');
  utils.isAuthorized.mockReturnValue(true);

  expect(utils.authorize()).toBe('mocked_token');
  expect(utils.isAuthorized('not_wizard')).toBeTruthy();
});
