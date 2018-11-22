import { db } from '../data';
import { QueryResolvers } from '../generated/graphqlgen';

export const Query: QueryResolvers.Type = {
  ...QueryResolvers.defaultResolvers,
  movies: (_, args) => {
    const movies = db.movies.getAll();

    if (args.first) {
      const offset = args.offset || 0;

      return movies.slice(offset, args.first + offset);
    }

    return movies;
  },
  movie: (_, args) => db.movies.getById(args.id),
  actor: (_, args) => db.actors.getById(args.id)
};
