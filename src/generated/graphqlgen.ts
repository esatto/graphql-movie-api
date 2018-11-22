// Code generated by github.com/prisma/graphqlgen, DO NOT EDIT.

import { GraphQLResolveInfo } from "graphql";
import { Movie, MovieRole, Actor, ActorRole, Review } from "../models";
type Context = any;

type Rating = "MPAA" | "SWEDISH";

export namespace QueryResolvers {
  export const defaultResolvers = {};

  export interface ArgsMovie {
    id: string;
  }

  export interface ArgsMovies {
    first: number | null;
    offset: number | null;
  }

  export interface ArgsActor {
    id: string;
  }

  export interface ArgsActors {
    first: number | null;
    offset: number | null;
  }

  export type MovieResolver = (
    parent: undefined,
    args: ArgsMovie,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Movie | null | Promise<Movie | null>;

  export type MoviesResolver = (
    parent: undefined,
    args: ArgsMovies,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Movie[] | Promise<Movie[]>;

  export type ActorResolver = (
    parent: undefined,
    args: ArgsActor,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Actor | null | Promise<Actor | null>;

  export type ActorsResolver = (
    parent: undefined,
    args: ArgsActors,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Actor[] | Promise<Actor[]>;

  export interface Type {
    movie: (
      parent: undefined,
      args: ArgsMovie,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Movie | null | Promise<Movie | null>;

    movies: (
      parent: undefined,
      args: ArgsMovies,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Movie[] | Promise<Movie[]>;

    actor: (
      parent: undefined,
      args: ArgsActor,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Actor | null | Promise<Actor | null>;

    actors: (
      parent: undefined,
      args: ArgsActors,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Actor[] | Promise<Actor[]>;
  }
}

export namespace MovieResolvers {
  export const defaultResolvers = {
    id: (parent: Movie) => parent.id,
    title: (parent: Movie) => parent.title,
    posterImageUrl: (parent: Movie) => parent.posterImageUrl,
    description: (parent: Movie) => parent.description,
    genres: (parent: Movie) => parent.genres,
    releaseDate: (parent: Movie) => parent.releaseDate,
    runtime: (parent: Movie) => parent.runtime,
    roles: (parent: Movie) => parent.roles,
    reviews: (parent: Movie) => parent.reviews
  };

  export interface ArgsRating {
    type: Rating | null;
  }

  export type IdResolver = (
    parent: Movie,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type TitleResolver = (
    parent: Movie,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type PosterImageUrlResolver = (
    parent: Movie,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type DescriptionResolver = (
    parent: Movie,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type GenresResolver = (
    parent: Movie,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string[] | Promise<string[]>;

  export type ReleaseDateResolver = (
    parent: Movie,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type RuntimeResolver = (
    parent: Movie,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => number | Promise<number>;

  export type RatingResolver = (
    parent: Movie,
    args: ArgsRating,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type RolesResolver = (
    parent: Movie,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => MovieRole[] | Promise<MovieRole[]>;

  export type ReviewsResolver = (
    parent: Movie,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Review[] | Promise<Review[]>;

  export interface Type {
    id: (
      parent: Movie,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    title: (
      parent: Movie,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    posterImageUrl: (
      parent: Movie,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    description: (
      parent: Movie,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    genres: (
      parent: Movie,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string[] | Promise<string[]>;

    releaseDate: (
      parent: Movie,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    runtime: (
      parent: Movie,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => number | Promise<number>;

    rating: (
      parent: Movie,
      args: ArgsRating,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    roles: (
      parent: Movie,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => MovieRole[] | Promise<MovieRole[]>;

    reviews: (
      parent: Movie,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Review[] | Promise<Review[]>;
  }
}

export namespace MovieRoleResolvers {
  export const defaultResolvers = {
    actor: (parent: MovieRole) => parent.actor,
    roles: (parent: MovieRole) => parent.roles
  };

  export type ActorResolver = (
    parent: MovieRole,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Actor | Promise<Actor>;

  export type RolesResolver = (
    parent: MovieRole,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string[] | Promise<string[]>;

  export interface Type {
    actor: (
      parent: MovieRole,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Actor | Promise<Actor>;

    roles: (
      parent: MovieRole,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string[] | Promise<string[]>;
  }
}

export namespace ActorResolvers {
  export const defaultResolvers = {
    id: (parent: Actor) => parent.id,
    name: (parent: Actor) => parent.name,
    birthday: (parent: Actor) => parent.birthday,
    shortBio: (parent: Actor) => parent.shortBio,
    imageUrl: (parent: Actor) => parent.imageUrl,
    nationality: (parent: Actor) => parent.nationality
  };

  export type IdResolver = (
    parent: Actor,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type NameResolver = (
    parent: Actor,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type BirthdayResolver = (
    parent: Actor,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type ShortBioResolver = (
    parent: Actor,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type ImageUrlResolver = (
    parent: Actor,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type RolesInMoviesResolver = (
    parent: Actor,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => ActorRole[] | Promise<ActorRole[]>;

  export type NationalityResolver = (
    parent: Actor,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export interface Type {
    id: (
      parent: Actor,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    name: (
      parent: Actor,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    birthday: (
      parent: Actor,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    shortBio: (
      parent: Actor,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    imageUrl: (
      parent: Actor,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    rolesInMovies: (
      parent: Actor,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => ActorRole[] | Promise<ActorRole[]>;

    nationality: (
      parent: Actor,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
  }
}

export namespace ActorRoleResolvers {
  export const defaultResolvers = {
    movie: (parent: ActorRole) => parent.movie,
    roles: (parent: ActorRole) => parent.roles
  };

  export type RolesResolver = (
    parent: ActorRole,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string[] | Promise<string[]>;

  export type MovieResolver = (
    parent: ActorRole,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Movie | Promise<Movie>;

  export interface Type {
    roles: (
      parent: ActorRole,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string[] | Promise<string[]>;

    movie: (
      parent: ActorRole,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Movie | Promise<Movie>;
  }
}

export namespace ReviewResolvers {
  export const defaultResolvers = {
    id: (parent: Review) => parent.id,
    rating: (parent: Review) => parent.rating,
    title: (parent: Review) => parent.title,
    reviewer: (parent: Review) => parent.reviewer
  };

  export type IdResolver = (
    parent: Review,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type RatingResolver = (
    parent: Review,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => number | Promise<number>;

  export type TitleResolver = (
    parent: Review,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type ReviewerResolver = (
    parent: Review,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type MovieResolver = (
    parent: Review,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Movie | Promise<Movie>;

  export interface Type {
    id: (
      parent: Review,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    rating: (
      parent: Review,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => number | Promise<number>;

    title: (
      parent: Review,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    reviewer: (
      parent: Review,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    movie: (
      parent: Review,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Movie | Promise<Movie>;
  }
}

export namespace MutationResolvers {
  export const defaultResolvers = {};

  export interface ReviewInput {
    movieId: string;
    rating: number;
    title: string;
    reviewer: string;
  }

  export interface ArgsAddReview {
    review: ReviewInput;
  }

  export type AddReviewResolver = (
    parent: undefined,
    args: ArgsAddReview,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Review | Promise<Review>;

  export interface Type {
    addReview: (
      parent: undefined,
      args: ArgsAddReview,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Review | Promise<Review>;
  }
}

export namespace SubscriptionResolvers {
  export const defaultResolvers = {};

  export type ReviewAddedResolver = {
    subscribe: (
      parent: undefined,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => AsyncIterator<Review | null> | Promise<AsyncIterator<Review | null>>;
    resolve?: (
      parent: undefined,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Review | null | Promise<Review | null>;
  };

  export interface Type {
    reviewAdded: {
      subscribe: (
        parent: undefined,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => AsyncIterator<Review | null> | Promise<AsyncIterator<Review | null>>;
      resolve?: (
        parent: undefined,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => Review | null | Promise<Review | null>;
    };
  }
}

export interface Resolvers {
  Query: QueryResolvers.Type;
  Movie: MovieResolvers.Type;
  MovieRole: MovieRoleResolvers.Type;
  Actor: ActorResolvers.Type;
  ActorRole: ActorRoleResolvers.Type;
  Review: ReviewResolvers.Type;
  Mutation: MutationResolvers.Type;
  Subscription: SubscriptionResolvers.Type;
}
