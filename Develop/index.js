// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your project title?",
    name: "title",
  },
  {
    type: "input",
    message: "What does your project do?",
    name: "description",
  },
  {
    type: "input",
    message: "How does one use your project?",
    name: "usage",
  },
  {
    type: "input",
    message: "What are the guidelines for contributing to your project?",
    name: "contributing",
  },
  {
    type: "input",
    message: "How does one test your project?",
    name: "tests",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err
      ? console.error(err)
      : console.log("Success! Your README.md file has been created :)")
  );
}

inquirer
  .prompt(questions)
  .then((responses) => writeToFile(`README.md`, responses));

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

//Add sections Title, Description, Table of Contents, Installation, Usage, Lisence, Contributing, Tests, Questions

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
