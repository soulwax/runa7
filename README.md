# Runa7

A 2D top-down RPG game written in TypeScript.

## Table of Contents

- [Runa7](#runa7)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Features](#features)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Usage](#usage)
  - [Development](#development)
    - [Project Structure](#project-structure)
    - [Available Scripts](#available-scripts)
    - [Code Style and Linting](#code-style-and-linting)
  - [Contributing](#contributing)
  - [License](#license)

## Overview

Runa7 is a 2D top-down RPG game developed using TypeScript. [Add a brief description of your game, its core concept, and what makes it unique.]

## Features

[List the key features of your game. For example:]

- Engaging 2D top-down graphics
- Character customization
- Turn-based combat system
- Inventory management
- Quest system
- [Add any other unique features of your game]

## Getting Started

### Prerequisites

- Node.js (version X.X.X or higher)
- npm (version X.X.X or higher)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/runa7.git
   ```

2. Navigate to the project directory:

   ```sh
   cd runa7
   ```

3. Install dependencies:

   ```sh
   npm install
   ```

## Usage

To start the game in development mode:

```sh
npm run dev
```

This will start the game with hot-reloading enabled.

## Development

### Project Structure

```plaintext
runa7/
├── src/
│   └── app.ts
├── dist/
├── .eslintrc.js
├── .prettierrc
├── package.json
├── tsconfig.json
└── README.md
```

### Available Scripts

- `npm start`: Run the compiled JavaScript (make sure to build first)
- `npm run build`: Compile TypeScript to JavaScript
- `npm run dev`: Start the development server with hot reloading
- `npm run pm2`: Start the application with PM2 (for production use)
- `npm run lint`: Run ESLint to check for code issues
- `npm run lint:fix`: Run ESLint and automatically fix issues
- `npm run format`: Run Prettier to format all files

### Code Style and Linting

This project uses ESLint with TypeScript support and Prettier for code formatting and linting. The configurations are defined in `.eslintrc.js` and `.prettierrc` respectively.

To maintain code quality and consistency, make sure to run linting and formatting before committing your changes:

```sh
npm run lint
npm run format
```

## Contributing

We welcome contributions to improve Runa7! Please follow these steps to contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Make your changes
4. Run linting and formatting (`npm run lint:fix && npm run format`)
5. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
6. Push to the branch (`git push origin feature/AmazingFeature`)
7. Open a Pull Request

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.
