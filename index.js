const inquirer=require('inquirer');
const fs=require('fs');
const licensetext=require('./licensetext.js');

const generateReadMe=({fullname, title, github, badge, description,installation, usage, credits, contribute, tests, phone, email})=>

`# ${title}
![Static Badge](https://img.shields.io/badge/License-${license.split(' ')[0]}-green)
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

## Questions
${fullname}

${phone}

${email}

[Github](https://github.com/${github})`


inquirer
.prompt([
    {
        type: 'input',
        name: 'fullname',
        message: 'Please enter your first and last name separated by a space.'
    },
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
        message: 'What sources did you use for your project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What tests have you run?'
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
    },
    {
        type: 'input',
        name: 'phone',
        message: 'Please type in your phone number using format: (xxx) xxx-xxxx.'
        
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please type in your email address.'
        
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?'
        
    },

])

.then((answers) => {
    let licenseChoice=answers.license;
    
    if (licenseChoice==='MIT') {
        console.log('MIT');
        
        license=`MIT License
        Copyright (C) 2023 ${answers.fullname}
        ${licensetext.mitLicense}`;
        var badge=license.split(' ')[0];
        
    }
    else if (licenseChoice==='Apache 2.0') {
        console.log('AP2');
        license=`Apache 2.0 
        Copyright (C) 2023 ${answers.fullname}
        ${licensetext.apache}`;
        
    }
    else if (licenseChoice==='GPL 3.0'){
        console.log('GPL');
        license=`GPL 3.0
        Copyright (C) 2023 ${answers.fullname}
        ${licensetext.gpl}`;
    }

    else {
        console.log('BSD3');
        license=`BSD3 
        Copyright (C) 2023 ${answers.fullname}
        ${licensetext.apache}`;
    }
    const readMeContent = generateReadMe(answers, badge);
    fs.writeFile('reamdme.md', readMeContent, (err) =>
        err ? console.error(err) : console.log(`Success! Your README has been gnerated for your project, ${answers.title}`)
    );
    // console.log(answers);

});



