// Copyright (c) 2014-present, Facebook, Inc. All rights reserved.

const path = require('path');

const fs = jest.genMockFromModule('fs');

// This is a custom function that our tests can use during setup to specify
// what the files on the "mock" filesystem should look like when any of the
// `fs` APIs are used.
let mockFiles = Object.create(null);
// eslint-disable-next-line no-underscore-dangle
function __setMockFiles(newMockFiles) {
  mockFiles = Object.create(null);
  // eslint-disable-next-line guard-for-in,no-restricted-syntax
  for (const file in newMockFiles) {
    const dir = path.dirname(file);

    if (!mockFiles[dir]) {
      mockFiles[dir] = [];
    }
    mockFiles[dir].push(path.basename(file));
  }
}

// A custom version of `readdirSync` that reads from the special mocked out
// file list set via __setMockFiles
function readdirSync(directoryPath) {
  return mockFiles[directoryPath] || [];
}

// eslint-disable-next-line no-underscore-dangle
fs.__setMockFiles = __setMockFiles;
fs.readdirSync = readdirSync;

module.exports = fs;
