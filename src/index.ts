import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { importSchema } from 'graphql-import';
import { makeExecutableSchema } from 'graphql-tools';
import http from 'http';
import { resolvers } from './resolvers';

const PORT = process.env.PORT || 5000;

const typeDefs = importSchema('./src/schema.graphql');

const schema = makeExecutableSchema({ typeDefs, resolvers: resolvers as any });

const app = express();

const server = new ApolloServer({ schema });

server.applyMiddleware({ app });

const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);

httpServer.listen(PORT, () => {
  console.log(
    `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
  );
  console.log(
    `🚀 Subscriptions ready at ws://localhost:${PORT}${
      server.subscriptionsPath
    }`
  );
});
