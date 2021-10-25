const { test, expect } = require("@jest/globals");

const { sum0, sum1 } = require('./functions');

test('result should be equal', () => {
  expect(+sum0(1).toFixed(8)).toBe(+sum1(1, 1).toFixed(8));
});
