//Have to import the external modules fs for writing files, and inquirer, for prompting the user.
const fs = require("fs");
const inquirer = require("inquirer");
// Have to import the local javascript generateMarkdown.js module given to us.
const generateMarkdown = require("./utils/generateMarkdown.js");

//An array of questions that the user will have to respond to to generate content for their README.
const questions = [
  {
    name: "title",
    type: "input",
    message: "What is your project title?",
  },
  {
    name: "description",
    type: "input",
    message: "A brief summary of your project:",
  },
  {
    name: "installation",
    type: "input",
    message: "Any installation instructions?",
  },
  {
    name: "usage",
    type: "input",
    message: "How does one use your project?",
  },
  {
    name: "contributing",
    type: "input",
    message: "Any contribution guidelines?",
  },
  {
    name: "tests",
    type: "input",
    message: "Any tests for your project?",
  },
  {
    name: "license",
    type: "list",
    choices: [
      "MIT",
      "MPL-2.0",
      "Apache-2.0",
      "BSD-3-Clause",
      "BSD-2-Clause",
      "GPL",
      "LGPL",
    ],
    message: "What license are you using?",
  },
  {
    name: "github",
    type: "input",
    message: "What is your Github username?",
  },
  {
    name: "email",
    type: "input",
    message: "What is your email address?",
  },
];

// TODO: Create a function to write README file
// This function's sole purpose is to create a file (fileName) and write (data) to it.
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err
      ? console.error(err)
      : console.log("Your README.md file has been created :)")
  );
}

// TODO: Create a function to initialize app
// This function's sole purpose is to prompt the user by iterating through the array of questions created earlier in this document. Once the user has gone through the entire question bank, the file will then use the generateMarkdown to turn the responses into one long README string. That string is stored in the variable 'markdown'. That string will then be written to a file 'README.md'using the writetoFile function created above.
function init() {
  inquirer.prompt(questions).then((responses) => {
    let markdown = generateMarkdown(responses);
    writeToFile(`README.md`, markdown);
  });
}

// Function call to initialize app
//Now that we've created both the function to generate a file/write to it, as well as prompt the user to respond to the questions, we have to call the function that will start the process. Just because you've created a function doesn't mean it will automatically run. You have to call it. init() will run the function above, and that function will run the function above it as well.
init();

//Add sections Title, Description, Table of Contents, Installation, Usage, License, Contributing, Tests, Questions

//Project title is displayed as title of README (#Project title is written first)

// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README

// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
