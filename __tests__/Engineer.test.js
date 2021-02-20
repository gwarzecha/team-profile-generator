
const Engineer = require('../lib/Engineer');


test('can accept engineer Github', () => {
  const testGit = 'GitHub'; 
  const engineer = new Engineer('bar', 7, 'email@me.com', testGit);

  expect(engineer.github).toBe(testGit);
});
