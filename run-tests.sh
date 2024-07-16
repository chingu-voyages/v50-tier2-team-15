# Script to run tests in a Node.js project using Jest.
# If no tests are defined, the script will exit with a message.
# This is so that the CI/CD pipeline does not fail when no tests are defined.

const { execSync } = require('child_process');
const { existsSync, readdirSync } = require('fs');
const path = require('path');

const testDir = path.join(__dirname, 'src');
const testFiles = readdirSync(testDir).filter(file => file.endsWith('.test.js'));

if (testFiles.length === 0) {
  console.log("No tests defined");
  process.exit(0);
} else {
  execSync('jest', { stdio: 'inherit' });
}