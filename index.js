const inquirer=require('inquirer');
const fs=require('fs');

inquirer
.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please give an introduction and description of your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What are the intstructions or guidelines for usage?'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'What are the installation instructions?'
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'How can someone contribute to this project?'
    }

])


