import { db } from '../data';
import { MutationResolvers } from '../generated/graphqlgen';
import { pubsub, REVIEW_ADDED } from '../pubsub';

export const Mutation: MutationResolvers.Type = {
  ...MutationResolvers.defaultResolvers,
  addReview: (_, args) => {
    const input = args.review;

    const nextId = db.reviews.getNextId();

    const movie = db.movies.getById(input.movieId);

    if (!movie) {
      throw new Error(`Movie not found ${input.movieId}`);
    }

    const review = db.reviews.updateById(nextId, {
      id: nextId,
      ...input
    });

    db.movies.updateById(movie.id, {
      reviews: [...movie.reviews, nextId]
    });

    pubsub.publish(REVIEW_ADDED, { reviewAdded: review });

    return review;
  }
};
