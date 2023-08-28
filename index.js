const inquirer=require('inquirer');
const fs=require('fs');
const licensetext=require('./licensetext.js')

const generateReadMe=({title, description,installation, usage, credits, contribute, tests})=>

`# ${title}
![Static Badge](https://img.shields.io/badge/License-MIT-green)
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
        name: 'tests',
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
    let licenseChoice=answers.license;
    
    if (licenseChoice==='MIT') {
        console.log('MIT');
        license='MIT'
        
    }
    else if (licenseChoice==='Apache 2.0') {
        console.log('AP2');
        license="Apache 2.0";
        
    }
    else if (licenseChoice==='GPL 3.0'){
        console.log('GPL');
        license='I chose GPL License';
    }

    else {
        console.log('BSD3');
        license="I chose a BSD3 License"
    }
    const readMeContent = generateReadMe(answers);
    fs.writeFile('reamdme.md', readMeContent, (err) =>
        err ? console.error(err) : console.log(`Success! Your README has been gnerated for your project, ${answers.title}`)
    );
    // console.log(answers);

});


