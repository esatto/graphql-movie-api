import { db } from '../data';
import { QueryResolvers } from '../generated/graphqlgen';

interface PaginationArgs {
  first: number | null;
  offset: number | null;
}

const paginate = <T>(inputArray: T[], args: PaginationArgs) => {
  if (args.first) {
    const offset = args.offset || 0;

    return inputArray.slice(offset, args.first + offset);
  }

  return inputArray;
};

export const Query: QueryResolvers.Type = {
  ...QueryResolvers.defaultResolvers,
  movies: (_, args) => paginate(db.movies.getAll(), args),
  actors: (_, args) => paginate(db.actors.getAll(), args),
  movie: (_, args) => db.movies.getById(args.id),
  actor: (_, args) => db.actors.getById(args.id)
};
