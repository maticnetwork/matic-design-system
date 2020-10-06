# matic-design-system

## Project setup
```
npm install
```

## Storybook
### Viewing storybook
```
npm run storybook
```
### Generate storybook build for publishing
```
npm run build-storybook
```

## npm
### Build library for release
```
npm run build-library
```
This generates CommonJS and unpkg modules in /dist. (Using common js here).
Update `main` field in `package.json` to change between CommonJS and unpkg. 

**Don't miss to change the version for new release** (`version` field in `package.json`).
Refer [semantic versioning spec](https://docs.npmjs.com/about-semantic-versioning).

## Usage

### Setup
```
npm install matic-design-system
```

### Implementation
```
import { MButton, MHeader } from "matic-design-system";
```
