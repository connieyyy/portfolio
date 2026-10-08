# Connie's Portfolio

Personal portfolio built with React. It includes an about page, a project
gallery with individual project pages, and links to experience and a resume.

**Live site:** [connieyyy.github.io/portfolio](https://connieyyy.github.io/portfolio)

## Getting started

You’ll need Node.js and npm installed.

```bash
git clone https://github.com/connieyyy/portfolio.git
cd portfolio
npm install
npm start
```

The development server opens at [http://localhost:3000](http://localhost:3000)
and reloads as you edit files.

## Available commands

| Command | Description |
| --- | --- |
| `npm start` | Start the local development server. |
| `npm test` | Run tests with Create React App’s test runner. |
| `npm run build` | Create an optimized production build in `build/`. |
| `npm run deploy` | Build the site and publish `build/` to the `gh-pages` branch. |

## Deploying

Deployment is manual; pushing a commit to `main` does not publish the site.
From the project directory, run:

```bash
npm run deploy
```

This runs the production build and uses `gh-pages` to publish it. Make sure
you have permission to push to the GitHub repository. The deploy command
handles the `gh-pages` branch; you do not need to push to it directly.

To push source-code changes to the main branch, use:

```bash
git push origin main
```
