const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const fs = require('fs');
const inquirer = require('inquirer');

const generateHtml = require('./lib/generateHtml');


const employees = [];

function newEmployee() {
  inquirer.prompt([
    {
      type: 'list',
      name: 'role',
      message: 'Choose a role:',
      choices: ['Engineer', 'Intern', 'Manager',],
    },
    {
      type: 'input',
      name: 'name',
      message: 'Enter employee name:',
    },
    {
      type: 'input',
      name: 'id',
      message: 'Enter employee ID:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter employee email address:'
    }
  ])
    .then((responses) => {
      if (responses.role === 'Engineer') {
        inquirer.prompt([
          {
            type: 'input',
            name: 'github',
            message: 'Enter employee GitHub username:'
          }
        ])
          .then((additional) => {
            const engineer = new Engineer(responses.name, responses.id, responses.email, additional.github);
            employees.push(engineer);  
            addAnother();
          })
      } else if (responses.role === 'Intern') {
        inquirer.prompt([
          {
            type: 'input',
            name: 'school',
            message: 'Enter employee school:'
          }
        ])
        .then((additional) => {
          const intern = new Intern(responses.name, responses.id, responses.email, additional.school);
          employees.push(intern);
          addAnother();
        })
      } else if (responses.role === 'Manager') {
        inquirer.prompt([
          {
            type: 'input',
            name: 'office',
            message: 'Enter employee office number:'
          }
        ])
        .then((additional) => {
          const manager = new Manager(responses.name, responses.id, responses.email, additional.office);
          employees.push(manager);         
          addAnother();
        })
      }
    })
};

function addAnother() {
  inquirer.prompt([
    {
      type: 'confirm',
      name: 'another',
      message: 'Add another employee?'
    }
  ])
  .then((answer) => {
    if (answer.another) {
      newEmployee()
    } else {
      console.log('Employees added')
      // pass employee array to generateHtml
      const employeeString = generateHtml(employees);
      fs.writeFile('./dist/output.html', employeeString, function(err) {
        console.error(err);

      });
    }
  })
};

newEmployee();