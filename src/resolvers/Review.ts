import { db } from '../data';
import { ReviewResolvers } from '../generated/graphqlgen';
import { Movie } from '../models';

export const Review: ReviewResolvers.Type = {
  ...ReviewResolvers.defaultResolvers,

  movie: parent => {
    const movie = db.movies
      .getAll()
      .find(movie => movie.reviews.includes(parent.id)) as Movie;

    return movie;
  }
};
