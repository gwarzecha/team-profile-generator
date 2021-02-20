const Manager = require('../lib/Manager');

test('can set office number', () => {
  const testNum = 13;
  const manager = new Manager('bar', 7, 'email@me.com', testNum);

  expect(manager.officeNumber).toBe(testNum);
});