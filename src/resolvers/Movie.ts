import { db } from '../data';
import { MovieResolvers } from '../generated/graphqlgen';

export const Movie: MovieResolvers.Type = {
  ...MovieResolvers.defaultResolvers,
  genres: parent => db.genres.getByIds(parent.genres).map(genre => genre.name),
  roles: parent => db.roles.getByIds(parent.roles),
  reviews: parent => db.reviews.getByIds(parent.reviews),
  rating: (parent, args) => {
    const ratings = {
      MPAA: parent.ratings.mpaa,
      SWEDISH: parent.ratings.swedish
    };

    return ratings[args.type || 'MPAA'];
  }
};
