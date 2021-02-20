const Intern = require('../lib/Intern');

test('can set intern school', () => {
  const testSchool = 'school'
  const intern = new Intern('bar', 7, 'email@me.com', testSchool);

  expect(intern.school).toBe(testSchool);
});