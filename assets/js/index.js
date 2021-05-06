// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);


function renderLicenseBadge(license) { if (license !=="none"){
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
    
}
return ""
}





const writeReadMe = () => {
    return inquirer.prompt([
    {
        type: 'input',
        message: 'What is your name?',
        name: 'uname',
    },
    {
        type: 'checkbox',
        message: 'What liecence would you like to use?',
        name: 'license',
        choices: ['vim-mode', 'android-studio',]
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
        name: 'install',
    },
    {
        type: 'input',
        message: 'Why did you build the application? What does it do?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Who helped build this application?',
        name: 'contributors',
    },
    {
        type: 'input',
        message: 'What does your test prove or solve?',
        name: 'test',
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
    }
 ]);
};

const genReadMe = (response) => 

`
##License
${renderLicenseBadge(response.license)}

This is a ReadME for ${response.uname} application created by ${response.projectname}

- [Description](#Description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Questions:](#Questions:
- [Contributing](#Contributing)
- [Tests](#Tests)


##Description:
${response.description}



##Installation:
${response.install}



##Usage: 
${response.usage}


##Contributing: 
${response.contributors}


##Tests:
${response.test}



##Questions:
Feel free to get more infomation by contacting me on github or email

GitHub: ${response.github}    Email: ${response.email}






`






const init = () => {
    writeReadMe()
      .then((answers) => writeFileAsync('README.md', genReadMe(answers)))
      .then(() => console.log('Successfully wrote to README.md'))
      .catch((err) => console.error(err));
  };
  


// TODO: Create a function to write README file

init();
// TODO: Create a function to initialize app


// Function call to initialize app

    