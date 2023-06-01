import useMovies from './useMovies';

export default function useMovie(movieId: number) {
  const { loading, movies } = useMovies();

  const movie = movies.find((candidate) => candidate.id == movieId);

  return {
    loading,
    movie,
  };
}
