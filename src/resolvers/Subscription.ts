import { SubscriptionResolvers } from '../generated/graphqlgen';
import { pubsub, REVIEW_ADDED } from '../pubsub';

export const Subscription: SubscriptionResolvers.Type = {
  ...SubscriptionResolvers.defaultResolvers,
  reviewAdded: {
    subscribe: () => pubsub.asyncIterator([REVIEW_ADDED])
  }
};
