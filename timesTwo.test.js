// Import the function
const timesTwo = require('./timesTwo');

// Test case
test('returns the number times 2', () => {
  expect(timesTwo(10)).toBe(20);
});