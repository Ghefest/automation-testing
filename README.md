# Task Management System

## Project Setup Guide

### Prerequisites

1. Install NVM (Node Version Manager)

   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

2. Install and use Node.js version

   nvm install 16
   nvm use 16

3. Install required packages

   npm install

### Project Structure

src/
├── tasks/
│ ├── task3/
│ │ ├── index.ts
│ │ └── array-sum.ts
│ └── task5/
│ ├── index.ts
│ └── data.ts
├── resources/
│ ├── input.json
│ └── input.xml
└── runTask.ts

### Running the Application

The project uses a task runner system that allows you to execute different tasks using a simple command structure.

To run a specific task, use:

```bash
npm run task <taskId>
```

For example, to run task 3:

```bash
npm run task 3
```

This will execute the task located in `src/tasks/task3/index.ts`.

### Troubleshooting

If you encounter any issues:

1. Make sure all required packages are installed
2. Check if MongoDB is running
3. Verify environment variables are set correctly
4. Clear npm cache if needed:

   npm cache clean --force
