# matic-design-system

[![Netlify Status](https://api.netlify.com/api/v1/badges/cbed49d4-ef6a-48ed-a2b8-d0810b1a71e5/deploy-status)](https://matic-design-system.netlify.app)

Design system for matic products.

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
### Build library for publishing
```
npm run build-library
```
This generates CommonJS and unpkg modules in /dist. (Using common js here).
Update `main` field in `package.json` to change the entry point of published package.

For versoning, refer [semantic versioning spec](https://docs.npmjs.com/about-semantic-versioning).

### Publishing to npm
```
npm run release
```
This will take care of build, versioning and publishing.

## Usage

### Setup
```
npm install @maticnetwork/matic-design-system
```

### Implementation
```
import { Button, Icon } from "@maticnetwork/matic-design-system";

<Button label="Click Me!">
<Icon name="login/metamask">
```
