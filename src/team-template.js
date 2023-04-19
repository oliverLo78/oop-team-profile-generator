const Employee = require("../lib/Employee");

// create the team
const generateTeam = team => {

    // create the manager html
    const generateManager = (manager) => {
        return `
        <div class="container">
        <div class="row">
        <div class="card m-4 bg-primary1 style="width: 18rem;">
          <div class="card-body">
          <h3 class="card-title">${manager.getName()}</h3>
          <h4 class="card-subtitle"><i class="fa-solid fa-mug-hot fa-lg"></i> ${manager.getRole()}</h4>
                    <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID:${manager.getId()}</li>
                    <li class="list-group-item">Email:${manager.getEmail()}</li>
                    <li class="list-group-item">Office number:${manager.getOfficeNumber()}</li>
                    </ul>
              </div>
            </div>
        `;
    };

    // create the html for engineers
    const generateEngineer = engineer => {
        return `
          <div class="row">
          <div class="card m-4 bg-primary" style="width: 18rem;">
          <div class="card-body">
            <h3 class="card-title">${engineer.getName()}</h3>
            <h4 class="card-subtitle"><i class="fa-solid fa-glasses fa-lg"></i> ${engineer.getRole()}</h4>
              <ul class="list-group list-group-flush">
              <li class="list-group-item">ID:${engineer.getId()}</li>
              <li class="list-group-item">Email:${engineer.getEmail()}<a href="mailto: email@example.com">Send Email</a></li>
              <li class="list-group-item">Github: ${engineer.getGithub()}<a href="https://github.com/oliverLo78" target="_blank" rel="nooponer noreferrer"></a></div>
            </ul>
        </div>
      </div>
        `;
    };

    // create the html for interns
    const generateIntern = intern => {
        return `
            <div class="row">
            <div class="card m-4 bg-primary" style="width: 18rem;" >
            <div class="card-body">
              <h3 class="card-title">${intern.getName()}</h3>
              <h4 class="card-subtitle"><i class="fa-solid fa-user-graduate fa-lg"></i> ${intern.getRole()}</h4>
                  <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID: ${intern.getId()}</li>
                  <li class="list-group-item">Email:${intern.getEmail()}
                  <a href="mailto:email@example.com?subject=Mail from our Website">Send Email</a>
                  </li>
                  <li class="list-group-item">School: ${intern.getSchool()}</li>
                  </ul>
            </div>
          </div>
        `;
    };

    // use the team array to generate pieces of html based on the employee role
    // team members from html searches for the employee type that exists in array and for each employee
    // runs the appropriate card function and then creates the html cards pushes to existing html array
    // here and joined version of that array of cards
    const teamMembers = [];

    teamMembers.push(team).filter(Employee => 
        Employee.getRole() === 'Manager')
            .map(manager => generateManager(manager));

    teamMembers.push(team).filter(Employee => 
        Employee.getRole() === 'Engineer')
            .map(engineer => generateEngineer(engineer));

    teamMembers.push(team).filter(Employee => 
        Employee.getRole() === 'Intern')
            .map(intern => generateIntern(intern));
    return teamMembers.join('')
}

module.exports = team => {
    // template literal = html that calls the generate team function
    return `
    
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>
        
        <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        />
        <link rel="stylesheet" href="./dist/style.css">
        <title>My Team</title>
        <script src="https://kit.fontawesome.com/7c84e92252.js" crossorigin="anonymous"></script>
    </head>
    <!-- header jumbotron -->
    <div class="jumbotron jumbotron-fluid bg-danger">
        <div class="container">
          <h1 class="display-4">My Team</h1>
        </div>
      </div>
    <body>
        
        <!-- card for each employee in the Team -->
    ${generateTeam(team)}
    </body>
    </html>
    
    `


}