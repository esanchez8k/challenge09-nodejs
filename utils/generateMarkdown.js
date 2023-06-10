// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return `![License](https://img.shields.io/badge/license-${license}-brightgreen)`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    return `* [License](#license)`;
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `## License
This project is licensed under the ${license} license.`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let markdownContent = `# ${data.title}\n`;

  if (data.license) {
    markdownContent += `\n${renderLicenseBadge(data.license)}`;
  }

  if (data.what) {
    markdownContent += `\n\n## Description\n\n${data.what}`;
  }

  markdownContent += `\n\n## Table of Contents\n`;

  if (data.installation) {
    markdownContent += `\n* [Installation](#installation)`;
  }

  if (data.usage) {
    markdownContent += `\n* [Usage](#usage)`;
  }

  if (data.license) {
    markdownContent += `\n* [License](#license)`;
  }

  if (data.contribute) {
    markdownContent += `\n* [Contribute](#contribute)`;
  }

  if (data.applicationTests) {
    markdownContent += `\n* [Tests](#tests)`;
  }

  markdownContent += `\n* [Questions](#questions)`;

  if (data.installation) {
    markdownContent += `\n\n## Installation\n\n${data.installation}`;
  }

  if (data.usage) {
    markdownContent += `\n\n## Usage\n\n${data.usage}`;
  }

  if (data.license) {
    markdownContent += `\n\n${renderLicenseSection(data.license)}`;
  }

  if (data.contribute) {
    markdownContent += `\n\n## Contribute\n\n${data.contribute}`;
  }

  if (data.applicationTests) {
    markdownContent += `\n\n## Tests\n\n${data.applicationTests}`;
  }

  markdownContent += `\n\n## Questions\n\nIf you have any questions, please contact me:\n\n* GitHub: [${data.githubUsername}](https://github.com/${data.githubUsername})\n* Email: ${data.email}\n`;

  return markdownContent;
}


module.exports = generateMarkdown;