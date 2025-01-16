# Personal Portfolio

This portfolio was created using **React**, **TypeScript**, and **Vite** to build a fast, modular, and maintainable application.

## Key Features
- Fully responsive design for all devices.
- Multilingual support with translations (English and French).
- Modular and reusable components.
- Hosted on Vercel with continuous deployment.

## Project Structure

The project is organized as follows:

```plaintext
portfolio/
├── src/                 # Main source code
│   ├── assets/          # Contains images and other static assets for the projects
│   ├── components/      # Contains reusable components of the project
│   ├── interface/       # Defines TypeScript interfaces and types used in the project
│   ├── locales/         # Stores language files (English and French)
│   ├── pages/           # Contains individual pages of the project
│   ├── utils/           # Includes utility functions and icons used in the project
│   ├── i18n.tsx         # Handles translations and internationalization for the site
│   └── App.tsx          # The root component of the application

├── public/              # Static assets (where the logo is located for example)
├── tsconfig.json        # TypeScript configuration file
├── eslint.config.js     # ESLint configuration file
├── package.json         # Contains project metadata and dependencies
├── vercel.json          # Configuration file for Vercel deployment, defining file organization
└── README.md            # Project documentation

