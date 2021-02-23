// Copyright 2004-present Facebook. All Rights Reserved.

import utils from '../utils';

test('if utils are not mocked', () => {
  expect(utils.authorize.mock).not.toBeTruthy();
  expect(utils.isAuthorized.mock).not.toBeTruthy();
});
