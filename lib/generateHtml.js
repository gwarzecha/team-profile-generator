const generateHtml = (employees) => {
  console.log(employees);

  let container = ''

  employees.forEach(employee => {
    switch (employee.constructor.name) {
      case 'Engineer':
        let engineerCard = `
          <div class="card col s12 m8 l3 small" id="eng">
            <div class="card-content">
              <h1 class="card-name">${employee.name}</h1>
              <p class="card-title"><i class="material-icons">computer</i> Engineer</p>
              <hr>
              <p class="card-text">Employee ID: ${employee.id}</p>
              <p class="card-text">Email: <a href="mailto: ${employee.email}" target="_blank">${employee.email}</a></p>
              <p class="card-text">GitHub: <a href="https://github.com/${employee.github}" target="_blank">${employee.github}</a></p>
            </div>
          </div>
        `
        container += engineerCard;
        break;

      case 'Manager':
        let managerCard = `
          <div class="card col s12 m8 l3 small" id="man">
            <div class="card-content">
              <h1 class="card-name">${employee.name}</h1>
              <p class="card-title"><i class="material-icons">remove_red_eye</i> Manager</p>
              <hr>
              <p class="card-text">Employee ID: ${employee.id}</p>
              <p class="card-text">Email: <a href="mailto: ${employee.email}" target="_blank">${employee.email}</a></p>
              <p class="card-text">Office Number: ${employee.officeNumber}</p>
            </div>
          </div>
        `
        container += managerCard;
        break;

      case 'Intern':
        let internCard = `
          <div class="card col s12 m8 l3 small" id="int">
            <div class="card-content">
              <h1 class="card-name">${employee.name}</h1>
              <p class="card-title"><i class="material-icons">assignment_ind</i> Intern</p>
              <hr>
              <p class="card-text">Employee ID: ${employee.id}</p>
              <p class="card-text">Email: <a href="mailto: ${employee.email}" target="_blank">${employee.email}</a></p>
              <p class="card-text">School: ${employee.school}</p>
            </div>
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
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!-- Compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <!-- Google Fonts -->
    <link
    href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300&family=Jost:wght@200&family=Raleway:wght@800&display=swap"
    rel="stylesheet">
    <!-- Compiled and minified JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    <link rel="stylesheet" href="./stylesheet.css" />
    <title>Document</title>
  </head>
  <body>
    <nav>
      <div class="nav-wrapper teal">
        <a href="#" class="brand-logo center">Employee Roster</a>
      </div>
    </nav>
    <div class="container flexbox">
      <div class="row center-align flexbox">
            ${container} 
      </div>
    </div>
  </body></html>`

  return finalString;

}



module.exports = generateHtml