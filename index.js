// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'What is your GitHub Username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'what',
        message: 'Describe your project and the problem it solves:',
    },
    {
        type: 'input',
        name: 'why',
        message: 'What motivated you to create this project?',
    },
    {
        type: 'input',
        name: 'how',
        message: 'Explain how someone can use this project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide step-by-step installation instructions:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions and usage examples:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license will you use for your project?',
        choices: [
            'MIT',
            'Apache',
            'IBM',
            'Mozilla',
            'Unlicensed',
        ]
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'How can others contribute to this project?',
    },
    {
        type: 'input',
        name: 'applicationTests',
        message: 'Does this project have any test conditions?',
    },    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data), (err) =>{
        if(err){
          console.log('Error!');
        } else {
          console.log('Success!');
        }
      };
  }

// TODO: Create a function to initialize app
function init() {
    // Prompt the user with questions
    inquirer.prompt(questions).then((answers) => {
        // Generate the markdown content
        const markdownContent = generateMarkdown(answers);

        // Write the markdown content to a README file
        writeToFile('README.md', markdownContent);
    });
}

// Function call to initialize app
init();
