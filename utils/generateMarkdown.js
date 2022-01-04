// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return `![badge](https://img.shields.io/badge/license-MIT-success)`;

    case "MPL-2.0":
      return `![badge](https://img.shields.io/badge/license-MPL2.0-success)`;

    case "Apache-2.0":
      return `![badge](https://img.shields.io/badge/license-Apache2.0-success)`;

    case "BSD-3-Clause":
      return `![badge](https://img.shields.io/badge/license-BSD3Clause-success)`;

    case "BSD-2-Clause":
      return `![badge](https://img.shields.io/badge/license-BSD2Clause-success)`;

    case "GPL":
      return `![badge](https://img.shields.io/badge/license-GPL-success)`;

    case "LGPL":
      return `![badge](https://img.shields.io/badge/license-LGPL-success)`;

    default:
      return "";
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
  if (license) {
    const link = renderLicenseLink(license);
    return `${link}`;
  } else {
    return ``;
  }
}

// TODO: Create a function to generate markdown for README
//This is how the README will be styled. # = h1, ## = h2, etc.
function generateMarkdown(responses) {
  const badge = renderLicenseBadge(responses.license);
  const licenseSection = renderLicenseSection(responses.license);
  return `# Project Title: ${responses.title}
  ## Description
  ${badge}

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
  This application is covered under the ${responses.license} license.
  ${licenseSection}
  ## Questions
  The creator's github profile is github.com/${responses.github}.
  You can reach out to their email, ${responses.email}, if you have any questions.

`;
}
//Add a badge and a notice for license
module.exports = generateMarkdown;
