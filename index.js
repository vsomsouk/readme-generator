


function promptUser() {
    return inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "What is your GitHub username?"
      },
      {
        type: "input",
        name: "email",
        message: "What is your email?"
      },
      {
        type: "input",
        name: "protect-title",
        message: "What is your project title?"
      },
      {
        type: "input",
        name: "url",
        message: "Add in your URl to your project"
      },
      {
        type: "input",
        name: "license",
        message: "What kind of license is this?"
      },
      {
        type: "input",
        name: "contributors",
        message: "Contributors?"
      }
      {
        type: "input",
        name: "test",
        message: "Tests?"
      }

      promptUser()
    .then(function(answers) {
    const html = generateHTML(answers);

    return writeFileAsync("readme", html);
    })
    .then(function() {
    console.log("A README has successfully been created);
     })
     .catch(function(err) {
    console.log(err);
     });