export interface Movie {
  id: string;
  title: string;
  posterImageUrl: string;
  description: string;
  genres: string[];
  releaseDate: string;
  runtime: number;
  ratings: {
    mpaa: string;
    swedish: string;
  };
  roles: string[];
  reviews: string[];
}

export interface MovieRole {
  id: string;
  actor: string;
  roles: string[];
}

export interface Actor {
  id: string;
  name: string;
  birthday: string;
  shortBio: string;
  imageUrl: string;
  nationality: string;
}

export interface ActorRole {
  id: string;
  movie: string;
  roles: string[];
}

export interface Review {
  id: string;
  rating: number;
  title: string;
  reviewer: string;
}

export interface Genre {
  id: string;
  name: string;
}
