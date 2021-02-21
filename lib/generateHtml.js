const generateHtml = (employees) => {
  console.log(employees);

  let container = ''

  employees.forEach(employee => {
    switch (employee.constructor.name) {
      case 'Engineer':
        let engineerCard = `
          <div>
            <h1>Engineer: ${employee.name}</h1>
            <h2>Employee ID: ${employee.id}</h2>
            <h2>Email: ${employee.email}</h2>
            <h2>GitHub Username: ${employee.github}</h2>
          </div>
        `
        container += engineerCard;
        break;

      case 'Manager':
        let managerCard = `
          <div>
            <h1>Manager: ${employee.name}</h1>
            <h2>Employee ID: ${employee.id}</h2>
            <h2>Email: ${employee.email}</h2>
            <h2>Office Number: ${employee.officeNumber}</h2>
          </div>
        `
        container += managerCard;
        break;

      case 'Intern':
        let internCard = `
            <div>
              <h1>Intern: ${employee.name}</h1>
              <h2>Employee ID: ${employee.id}</h2>
              <h2>Email: ${employee.email}</h2>
              <h2>school: ${employee.school}</h2>
            </div>
          `
        container += internCard;
        break;

    }
  })

  finalString = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <div>
      ${container}
    </div>
  </body></html>`

  return finalString;

}



module.exports = generateHtml