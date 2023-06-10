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
        message: 'What is your project and what problem will it solve?',
    },
    {
        type: 'input',
        name: 'why',
        message: 'Why did you create this project?',
    },
    {
        type: 'input',
        name: 'how',
        message: 'How will someone use this?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide step-by-step installation instructions for your project.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions and examples for use.',
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
        message: 'How can someone contribute?',
    },
    {
        type: 'input',
        name: 'ApplicationTests',
        message: 'Does this project have any test conditions?',
      },    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
