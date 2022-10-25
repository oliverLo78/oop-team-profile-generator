// fs is Node standard library package for reading and writing files
// bringing the inquirer library into the file 
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateProfile = require('');
const { Console } = require('console');

.then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('index.html', htmlPageContent, (err) =>
        err ? console.log(err) : Console.log('Successfully created index.html!')
    );
});