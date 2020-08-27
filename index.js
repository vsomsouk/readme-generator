const inquirer = require("inquirer");
const fs = require ("fs");
const util = require ("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer.prompt([
      {
        type: "input",
        name: "title",
        message: "What is the project title?"
      },
      {
        type: "input",
        name: "description",
        message: "What is your description?"
      },
      {
        type: "input",
        name: "installation",
        message: "Installation"
      },
      {
        type: "input",
        name: "usage",
        message: "Usage"
      },
      {
        type: "list",
        name: "license",
        message: "License",
        choices: ["MIT", "Apache", "GPL"]
      },
      {
        type: "input",
        name: "contributors",
        message: "Contributors"
      }
    ])
  };

  function generateReadMe(answers) {
    return `


# Title: ${answers.title}

## Description: ${answers.description}

## Table of Contents
* Installation
* Usage
* License
* Contributors
* Tests
* Questions

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
${answers.license}

## Contributors
${answers.contributors}

## Tests
* npm run test

## Questions:
If you have any questions, please feel free to email me at vsomsouk@gmail.com.
<img src="./src/bioimg.jpg">
`
}

promptUser()
  .then(function(answers) {
    const readme = generateReadMe(answers);

    return writeFileAsync("README.md", readme);
  })
  .then(function () {
    console.log("A README has successfully been created");
  })
  .catch(function (err) {
    console.log(err);
  });