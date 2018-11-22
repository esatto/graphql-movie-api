# Apollo GraphQL Movie API

Example GraphQL API created as an intro to GraphQL and Apollo. Presented during the meetup [React & GraphQL Sundsvall](https://www.meetup.com/React-GraphQL-Sundsvall/).

You can find an example app using this API in the repo [esatto/graphql-movie-app](https://github.com/esatto/graphql-movie-app).

DEMO - Coming soon

## Technology used

- [Apollo Server](https://www.apollographql.com/docs/apollo-server/) - GraphQL server implementation in JavaScript
- [TypeScript](https://www.typescriptlang.org/) - Static types
- [graphqlgen](https://oss.prisma.io/graphqlgen/) - Generate types and resolvers from GraphQL

## Getting started

We're using `yarn` in these examples, but `npm` should work as well.

1. Run `yarn` to install packages
2. Run `yarn start` to start compilation and server
3. Run `yarn graphqlgen` to generate TypeScript definitions for resolvers using [graphqlgen](https://oss.prisma.io/graphqlgen/).

## Recommended plugins for VS Code

For syntax highlighting in `.graphql`-files, use the [Apollo VSCode](https://marketplace.visualstudio.com/items?itemName=apollographql.vscode-apollo) plugin.

## License

This example project is [MIT licensed](./LICENSE).
