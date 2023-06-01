'use client';

import useMovie from '@/features/movies/hooks/useMovie';
import { Screening } from '@/features/movies/types';
import apiRequest from '@/utils/apiRequest';
import { Box, CircularProgress, Typography } from '@mui/joy';
import { useEffect, useState } from 'react';

type BookProps = {
  params: {
    movieId: string;
    screeningId: string;
  };
};

export default function Book({ params }: BookProps) {
  const { movieId, screeningId } = params;
  const [screening, setScreening] = useState<Screening | null>(null);
  const [screeningLoading, setScreeningLoading] = useState(true);
  const { movie, loading } = useMovie(parseInt(movieId));

  useEffect(() => {
    apiRequest<{ data: Screening }>(
      'GET',
      `https://plankton-app-xhkom.ondigitalocean.app/api/screenings/${screeningId}`
    )
      .then((payload) => {
        setScreening(payload.data);
        setScreeningLoading(false);
      })
      .catch(() => setScreeningLoading(false));
  }, [screeningId]);

  if (loading || screeningLoading) {
    return <CircularProgress />;
  }

  if (!movie || !screening) {
    return <Typography>Not found</Typography>;
  }

  const date = new Date(screening.attributes.start_time);

  return (
    <Box>
      <Typography level="h2">Book: {movie.attributes.title}</Typography>
      <Typography>
        {date.toLocaleString()} ({screening.attributes.room})
      </Typography>
    </Box>
  );
}