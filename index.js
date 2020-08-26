const inquirer = require("inquirer");
const fs = require ("fs");
const util = require ("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer.prompt([
      {
        type: "input",
        name: "username",
        message: "What is your GitHub username?"
      },
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

//do I put info here?
# Username: ${answers.username}

# Title: ${answers.title}

## Description: ${answers.description}

## Installation: ${answers.installation}

## License: ${answers.license}

## Contributors: ${answers.contributors}`
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