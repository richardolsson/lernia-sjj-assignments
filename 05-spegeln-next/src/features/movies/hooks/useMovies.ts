import { useContext } from 'react';
import { MoviesContext } from '../components/MoviesProvider';

export default function useMovies() {
  const { loading,movies } = useContext(MoviesContext);

  return {
    loading,
    movies,
  };
}
