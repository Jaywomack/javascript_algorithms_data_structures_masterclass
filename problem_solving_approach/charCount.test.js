const charCount = require('./charCount.js');

test('Creates object with key value pairs to count chars in a string', () => {
  expect(charCount('My name is Jared!')).toBe({
    m: 2,
    y: 1,
    n: 1,
    a: 2,
    e: 2,
    i: 1,
    s: 1,
    j: 1,
    r: 1,
    d: 1
  });
});
