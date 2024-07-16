// Script to run tests in a Node.js project using Jest.
// If no tests are defined, the script will exit with a message.
// This is so that the CI/CD pipeline does not fail when no tests are defined.

import { execSync } from 'child_process';
import { readdirSync } from 'fs';
import path from 'path';

import process from 'process';

const __dirname = path.resolve();
const testDir = path.join(__dirname, 'src');
const testFiles = readdirSync(testDir).filter(file => file.endsWith('.test.js'));

if (testFiles.length === 0) {
  console.log("No tests defined");
  process.exit(0);
} else {
  execSync('jest', { stdio: 'inherit' });
}