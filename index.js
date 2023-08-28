const inquirer=require('inquirer');
const fs=require('fs');

const generateReadMe=({title, description,installation, usage, credits, contribute})=>

`# ${title}

## Description
${description}

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Credits](#credits)
4. [How to Contribute](#how-to-contribute)
5. [Tests](#tests)
6. [Questions](#questions)

## Installation
${installation}

## Usage
${usage}

## Credits
${credits}

## How to Contribute
${contribute}

## Tests
${tests}

## License
${license}

## Questions`

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
        message: 'Did you use any sources for your project?  If so, please include them here '
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'How can someone contribute to this project?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please use the arrow keys to select the license used for this project.',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3']
    }

])

.then((answers) => {
    const readMeContent = generateReadMe(answers);
    fs.writeFile('reamdme.md', readMeContent, (err) =>
        err ? console.error(err) : console.log(`Success! Your README has been gnerated for your project, ${title}`)
    );

});


