// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return;

    case "MPL-2.0":

    case "Apache-2.0":

    case "BSD-3-Clause":

    case "BSD-2-Clause":

    case "GPL":

    case "LGPL":
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return "https://opensource.org/licenses/MIT";
    case "MPL-2.0":
      return "https://opensource.org/licenses/MPL-2.0";
    case "Apache-2.0":
      return "https://opensource.org/licenses/Apache-2.0";
    case "BSD-3-Clause":
      return "https://opensource.org/licenses/BSD-3-Clause";
    case "BSD-2-Clause":
      return "https://opensource.org/licenses/BSD-2-Clause";
    case "GPL":
      return "https://opensource.org/licenses/gpl-license";
    case "LGPL":
      return "https://opensource.org/licenses/lgpl-license";
    default:
      "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return;
}

// TODO: Create a function to generate markdown for README
//This is how the README will be styled. # = h1, ## = h2, etc.
function generateMarkdown(responses) {
  return `# Project Title: ${responses.title}
  ## Description
  ${responses.description}
  ## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

  ## Installation
  ${responses.installation}
  ## Usage
  ${responses.usage}
  ## Contributing
  ${responses.contributing}
  ## Tests
  ${responses.tests}
  ## License
  ${responses.license}
  //Add notice here

  ## Questions
  The creator's github profile is github.com/${responses.github}.
  You can reach out to their email, ${responses.email}, if you have any questions.

`;
}
//Add a badge and a notice for license
module.exports = generateMarkdown;
