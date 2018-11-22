import { db } from '../data';
import { ActorRoleResolvers } from '../generated/graphqlgen';

export const ActorRole: ActorRoleResolvers.Type = {
  ...ActorRoleResolvers.defaultResolvers,
  movie: parent => db.movies.getById(parent.movie)
};
