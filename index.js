// fs is Node standard library package for reading and writing files
// bringing the inquirer library into the file 
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'team.html')


const generateHTML = require('./src/generateHTML');
const { request } = require('http');

const teamMembers  = [];

function newManager() {
// Questions for user
inquirer
    .prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is the team manager\'s name?',
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the team manager\'s id?',
        
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the team manager\'s email?',
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the team manager\'s office number?',
    },

])

.then((answers) => {
    const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
    teamMembers.push(manager);
    newMember();
     
    // const htmlPageContent = generateHTML(answers)

    // fs.writeFile('team.html', htmlPageContent, (err) =>
    //     err ? console.log(err) : console.log('Successfully created team.html!')
    // );
});

}
function buildTeam() {
    const htmlPageContent = generateHTML(teamMembers)

    fs.writeFile('team.html', htmlPageContent, (err) =>
        err ? console.log(err) : console.log('Successfully created team.html!')
    );
}



function newMember() {
    inquirer
        .prompt ([
            {
                type: 'list',
                name: 'role',
                message: 'Which type of team member would you like to add?',
                choices: ['Manager', 'Engineer', 'Intern', 'none'],
            }
        ])
        .then(answers => {
            if (answers.role === 'Manager') {
                newManager();
            } else if (answers.role == 'Engineer') {
                newEngineer();
            }
             else if (answers.role == 'Intern') {
                newIntern();
            } else {
                buildTeam();
            }

        });
}

function newEngineer() {
    // Questions for user
    inquirer
        .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the team engineer\'s name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the team engineer\'s id?',
            
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the team engineer\'s email?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the team engineer\'s github?',
        },
    
    ])
    
    .then((answers) => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        teamMembers.push(engineer);
        console.log(teamMembers);

        newMember();
         
        // const htmlPageContent = generateHTML(answers)
    
        // fs.writeFile('team.html', htmlPageContent, (err) =>
        //     err ? console.log(err) : console.log('Successfully created team.html!')
        // );
    });
    
    }


    function newIntern() {
        // Questions for user
        inquirer
            .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the team intern\'s name?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the team intern\'s id?',
                
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the team intern\'s email?',
            },
            {
                type: 'input',
                name: 'school',
                message: 'What is the team engineer\'s school?',
            },
        
        ])
        
        .then((answers) => {
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            teamMembers.push(intern);
            newMember();
             
            // const htmlPageContent = generateHTML(answers)
        
            // fs.writeFile('team.html', htmlPageContent, (err) =>
            //     err ? console.log(err) : console.log('Successfully created team.html!')
            // );
        });
        
        }
//generateHTML();
newManager();

