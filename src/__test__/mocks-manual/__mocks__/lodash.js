// Copyright 2004-present Facebook. All Rights Reserved.

const lodash = jest.genMockFromModule('lodash');

// eslint-disable-next-line no-unused-vars
lodash.head = (arr) => 5;

export default lodash;
