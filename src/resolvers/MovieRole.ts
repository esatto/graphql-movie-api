import { db } from '../data';
import { MovieRoleResolvers } from '../generated/graphqlgen';

export const MovieRole: MovieRoleResolvers.Type = {
  ...MovieRoleResolvers.defaultResolvers,
  actor: parent => db.actors.getById(parent.actor)
};
