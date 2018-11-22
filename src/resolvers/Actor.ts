import { db } from '../data';
import { ActorResolvers } from '../generated/graphqlgen';
import { ActorRole } from '../models';

export const Actor: ActorResolvers.Type = {
  ...ActorResolvers.defaultResolvers,
  rolesInMovies: parent => {
    const roles = db.roles.getAll();
    const movies = db.movies.getAll();

    const roleIdsForActor = roles
      .filter(role => role.actor === parent.id)
      .map(role => role.id);

    const moviesForActor = movies.filter(
      movie => movie.roles.find(role => roleIdsForActor.includes(role)) != null
    );

    const result: ActorRole[] = moviesForActor.map(movie => {
      const roleId = movie.roles.find(role => roleIdsForActor.includes(role));

      if (!roleId) return { id: '', roles: [], movie: '' };

      const role = db.roles.getById(roleId);

      return {
        id: roleId,
        roles: role.roles,
        movie: movie.id
      };
    });

    return result;
  }
};
