'use client';

import MovieItem from '@/features/movies/components/MovieItem';
import { Movie } from '@/features/movies/types';
import apiRequest from '@/utils/apiRequest';
import { Box } from '@mui/joy';
import { useEffect, useState } from 'react';

export default function Movies() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    apiRequest<{ data: Movie[] }>(
      'GET',
      'https://plankton-app-xhkom.ondigitalocean.app/api/movies'
    ).then((payload) => {
      setMovies(payload.data);
    });
  }, []);

  return (
    <Box>
      {movies.map((movie) => {
        return <MovieItem key={movie.id} movie={movie} />;
      })}
    </Box>
  );
}
