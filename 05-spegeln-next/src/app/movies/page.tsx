'use client';

import MovieItem from '@/features/movies/components/MovieItem';
import useMovies from '@/features/movies/hooks/useMovies';
import { Box } from '@mui/joy';

export default function Movies() {
  const { movies } = useMovies();

  return (
    <Box>
      {movies.map((movie) => {
        return <MovieItem key={movie.id} movie={movie} />;
      })}
    </Box>
  );
}
