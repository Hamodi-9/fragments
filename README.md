# DPS955-Lab1

# Project Name: Fragments

## Running the Project

This project includes several scripts for development and testing purposes:

### `npm start`

- **Description**: Runs the server normally.
- **Command**: `npm start`
- **Usage**: Use this command to start the server without automatic restarts on file changes.

### `npm run dev`

- **Description**: Runs the server in development mode with `nodemon`. It watches the `src/` folder for any changes and restarts the server whenever something is updated.
- **Command**: `npm run dev`
- **Usage**: Ideal for development. When you make changes to your source files, the server will automatically restart to reflect these changes.

### `npm run debug`

- **Description**: Similar to `dev`, but also starts the Node.js inspector on port 9229, allowing you to attach a debugger.
- **Command**: `npm run debug`
- **Usage**: Use this when you need to debug your application using a debugger like the one in VSCode. This script enables you to set breakpoints, inspect variables, etc.

### `npm run lint`

- **Description**: Runs ESLint to check for code quality and style issues.
- **Command**: `npm run lint`
- **Usage**: To ensure code consistency and to identify common coding issues. Run this script to see if your code conforms to the set linting rules.

## Note on ESLint Errors

Currently, when im running `npm run lint`, there are a few ESLint errors:

1. `'next' is defined but never used` in `src/app.js`.
2. `'process' is not defined` in both `src/logger.js` and `src/server.js`.