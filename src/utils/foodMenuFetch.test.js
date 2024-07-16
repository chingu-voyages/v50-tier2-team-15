import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import process from 'process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const testDir = path.join(__dirname, 'src');
const testFiles = fs.readdirSync(testDir).filter(file => file.endsWith('.test.js'));

console.log("Found test files:", testFiles);

if (testFiles.length === 0) {
  console.log("No tests defined");
  process.exit(0);
} else {
  execSync('jest', { stdio: 'inherit' });
}