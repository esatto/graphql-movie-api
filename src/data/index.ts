import fs from 'fs';
import path from 'path';
import { Actor, Genre, Movie, MovieRole, Review } from '../models';

export const createDataLayer = <T extends { id: string }>(fileName: string) => {
  const file = fs.readFileSync(
    path.join(__dirname, '../../data/', fileName),
    'utf-8'
  );

  const data: { [id: string]: T } = JSON.parse(file);

  return {
    getAll: () => Object.values(data),
    getById: (id: string) => data[id],
    getByIds: (id: (string | number)[]) => id.map(i => data[i]),
    updateById: (id: string, input: Partial<T>) =>
      (data[id] = Object.assign({}, data[id], input)),
    getNextId: () =>
      Math.max(...Object.keys(data).map(key => parseInt(key, 10))) + 1 + ''
  };
};

export const db = {
  actors: createDataLayer<Actor>('./actors.json'),
  genres: createDataLayer<Genre>('./genres.json'),
  movies: createDataLayer<Movie>('./movies.json'),
  reviews: createDataLayer<Review>('./reviews.json'),
  roles: createDataLayer<MovieRole>('./roles.json')
};
