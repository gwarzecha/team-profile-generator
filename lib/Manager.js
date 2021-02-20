// Properties needed: name; id; email; officeNumber
// Methods needed: getName(); getId(); getEmail(); getRole()-- returns 'Manager'

const Employee = require('./Employee');

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getRole() {
    return 'Manager';
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
}
  



module.exports = Manager