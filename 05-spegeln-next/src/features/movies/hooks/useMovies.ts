import { useContext } from 'react';
import { MoviesContext } from '../components/MoviesProvider';

export default function useMovies() {
  const { movies } = useContext(MoviesContext);

  return {
    movies,
  };
}
