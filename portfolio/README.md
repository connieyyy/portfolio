# Connie's Portfolio

Personal portfolio built with React. It includes an about page, a project
gallery with individual project pages, and links to experience and a resume.

**Live site:** [connieyyy.github.io/portfolio](https://connieyyy.github.io/portfolio)

## Getting started

You’ll need Node.js and npm installed.

```bash
git clone https://github.com/connieyyy/portfolio.git
cd portfolio/portfolio
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

## Deploying

GitHub Actions builds and deploys the site automatically when changes are
pushed to the `main` branch. The workflow uses the app in this `portfolio/`
directory and publishes its production build to GitHub Pages.

You can also start a deployment manually from the repository’s **Actions** tab
by selecting **Deploy to GitHub Pages** and choosing **Run workflow**. GitHub
Pages must be configured to use **GitHub Actions** as its deployment source.

The `npm run deploy` script is also available for publishing the build to the
`gh-pages` branch directly, but it is separate from the Actions deployment.

To publish source changes through the workflow, push them to `main` from the
repository root:

```bash
git push origin main
```
