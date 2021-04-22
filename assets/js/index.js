// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [ 
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'projectname',
    },
    {
        type: 'input',
        message: 'What is this application used for?, How do i test it?',
        name: 'usage',
    },

    {
        type: 'input',
        message: 'How do you install this application?',
        name: 'app',
    },
    {
        type: 'input',
        message: 'Why did you build the application? What does it do?',
        name: 'Description',
    },

    {
        type: 'input',
        message: 'Who helped build this application?',
        name: 'contributors',
    },

    {
        type: 'input',
        message: 'What is what is ur GitHub URL?',
        name: 'github',
    },

    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    },

    
  

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your user name?',
      name: 'username',
    },
    {
      type: 'password',
      message: 'What is your password?',
      name: 'password',
    },
    {
      type: 'password',
      message: 'Re-enter password to confirm:',
      name: 'confirm',
    },
  ])
  .then((response) =>
    response.confirm === response.password
      ? console.log('Success!')
      : console.log('You forgot your password already?!')
  );