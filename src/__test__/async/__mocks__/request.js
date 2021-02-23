// Copyright (c) 2014-present, Facebook, Inc. All rights reserved.


const users = {
  4: {name: 'Mark'},
  5: {name: 'Paul'},
};

export default function request(url) {
  return new Promise((resolve, reject) => {
    const userID = parseInt(url.substr('/users/'.length), 10);
    process.nextTick(() => (users[userID]
        ? resolve(users[userID])
        // eslint-disable-next-line prefer-promise-reject-errors
        : reject({
            error: `User with ${userID} not found.`,
          })));
  });
}
