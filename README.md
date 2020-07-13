# Credello NextJS

- [Typescript](https://www.typescriptlang.org/)
- Linting with [ESLint](https://eslint.org/)
- Formatting with [Prettier](https://prettier.io/)
- Linting, typechecking and formatting on by default using [`husky`](https://github.com/typicode/husky) for commit hooks
- Testing with [Jest](https://jestjs.io/) and [`react-testing-library`](https://testing-library.com/docs/react-testing-library/intro)

Install it and run:

```bash
yarn
yarn next build
yarn start

// To run tests
yarn test -u
yarn test
```

## Other third party libraries

- styled-components - For everything styling.
- material-ui - For specific components and icons.
- next-optimised-images - For image optimisation in nextjs.
- sharp - For optimising images
- imagemin-svgo - For optimising svgs
- responsive-loader - For conditional rendering components (this should be avoided as much
as possible, instead responsiveness should be in media queries)
