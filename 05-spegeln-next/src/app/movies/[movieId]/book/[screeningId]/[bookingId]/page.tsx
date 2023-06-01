'use client';

import SeatMap from '@/features/booking/components/SeatMap';
import useMovie from '@/features/movies/hooks/useMovie';
import { Screening, SeatInfo } from '@/features/movies/types';
import apiRequest from '@/utils/apiRequest';
import { Box, CircularProgress, Typography } from '@mui/joy';
import { useEffect, useState } from 'react';

type BookProps = {
  params: {
    bookingId: string;
    movieId: string;
    screeningId: string;
  };
};

export default function Book({ params }: BookProps) {
  const { bookingId, movieId, screeningId } = params;
  const [screening, setScreening] = useState<Screening | null>(null);
  const [screeningLoading, setScreeningLoading] = useState(true);
  const { movie, loading } = useMovie(parseInt(movieId));
  const [seats, setSeats] = useState<SeatInfo[]>([]);

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

    apiRequest<{ seats: SeatInfo[] }>(
      'GET',
      `/api/screenings/${screeningId}/seats?booking=${bookingId}`
    ).then((payload) => {
      setSeats(payload.seats);
    });
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
      <Box>
        <SeatMap seats={seats}/>
      </Box>
    </Box>
  );
}