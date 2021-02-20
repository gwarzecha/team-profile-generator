// Properties needed: name; id; email; github (username)
// Methods needed: getName(); getId(); getEmail(); getRole()-- returns 'Engineer'; getGithub()

const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    
    this.github = github;
  }
  getRole() {
    return 'Engineer';
  }
  getGithub() {
    return this.github;
  }
};


module.exports = Engineer