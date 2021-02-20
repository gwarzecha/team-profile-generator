// Properties needed: name; id; email; school
// Methods needed: getName(); getId(); getEmail(); getRole()-- returns 'Intern'; getSchool()

const Employee = require('./Employee');

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  getRole(){
    return "Intern";
  }
  getSchool() {
    return this.school;
  }
};




module.exports = Intern