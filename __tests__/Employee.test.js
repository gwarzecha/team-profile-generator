const Employee = require('../lib/Employee');


test('can accept employee name', () => {
  const name = 'Garrett';
  const employee = new Employee(name);

  expect(employee.name).toBe(name);
});


test('can accept employee id', () => {
  const testId = 777;
  const employee = new Employee('bar', testId);

  expect(employee.id).toBe(testId);
});

test('can accept employee email', () => {
  const testEmail = 'email@me.com';
  const employee = new Employee('bar', 7, testEmail);

  expect(employee.email).toBe(testEmail);
});

