import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const taskNumber = process.argv[2];

if (!taskNumber) {
  console.error('Please provide a task number.');
  process.exit(1);
}

const taskFile = path.resolve(__dirname, `tasks/task${taskNumber}/index.ts`);

const child = spawn('tsx', [taskFile], {
  stdio: 'inherit', // This allows the child process to use the parent's stdio
});

child.on('error', (error) => {
  console.error(`Error executing task${taskNumber}:`, error);
  process.exit(1);
});

child.on('exit', (code) => {
  if (code !== 0) {
    console.error(`Task${taskNumber} exited with code ${code}`);
  }
});
