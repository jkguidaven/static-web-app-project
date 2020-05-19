## Project

This project is built using Nunjucks templates and rendered to static file.

## Prerequisites

- [Node](https://nodejs.org/en/) (at least the latest LTS)
- [Yarn](https://yarnpkg.com/lang/en/docs/install/) (at least 1.0)

## Setting Up

```bash
# 1. Clone this repository.
git clone git@github.com:jkguidaven/static-web-app-project.git

# 2. cd to folder
cd static-web-app-project

# 3. Install dependencies
yarn install

# 4. Build template and watch new changes in
yarn start
```

## To build

```bash
yarn build
```

Output files are generated in dist folder

## Continuous Integration

The project uses tools such as `eslint`, `prettier` & `editorconfig` to ensure quality of
codes are properly check.
