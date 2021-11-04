// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

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
  ##Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing] (#contributing)
- [Tests] (#tests)
- [License](#license)
- [Questions] (#questions)

  ##Installation
  ${responses.installation}
  ##Usage
  ${responses.usage}
  ##Contributing
  ${responses.contributing}
  ##Tests
  ${responses.tests}
  ##License
  ${responses.license}
  ##Questions
  ${responses.github}
  ${responses.email}

`;
}

module.exports = generateMarkdown;
