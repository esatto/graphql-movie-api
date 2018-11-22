import { Resolvers } from '../generated/graphqlgen';
import { Actor } from './Actor';
import { ActorRole } from './ActorRole';
import { Movie } from './Movie';
import { MovieRole } from './MovieRole';
import { Mutation } from './Mutation';
import { Query } from './Query';
import { Review } from './Review';
import { Subscription } from './Subscription';

export const resolvers: Resolvers = {
  Query,
  Movie,
  MovieRole,
  Actor,
  ActorRole,
  Review,
  Mutation,
  Subscription
};
