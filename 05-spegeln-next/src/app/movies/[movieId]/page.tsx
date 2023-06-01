'use client';

import useMovies from '@/features/movies/hooks/useMovies';
import { Box, CircularProgress, Typography } from '@mui/joy';
import Image from 'next/image';

type MovieProps = {
  params: {
    movieId: string;
  };
};

export default function Movie({ params }: MovieProps) {
  const { movieId } = params;
  const { loading, movies } = useMovies();

  if (loading) {
    return <CircularProgress />;
  }

  const movie = movies.find((candidate) => candidate.id.toString() == movieId);

  if (!movie) {
    return <Typography>Not found!</Typography>;
  }

  return (
    <Box>
      <Typography level="h2">{movie?.attributes.title}</Typography>
      <Image
        alt={movie.attributes.title}
        src={movie.attributes.image.url}
        width={200}
        height={300}
      />
    </Box>
  );
}
