'use client';

import { Booking } from '@/features/booking/types';
import apiRequest from '@/utils/apiRequest';
import { CircularProgress } from '@mui/joy';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

type BookingStartProps = {
  params: {
    movieId: string;
    screeningId: string;
  };
};

export default function BookingStart({ params }: BookingStartProps) {
  const router = useRouter();
  const { movieId, screeningId } = params;

  useEffect(() => {
    apiRequest<Booking, {}>(
      'POST',
      `/api/screenings/${screeningId}/bookings`,
      {}
    ).then((booking) => {
      router.push(`/movies/${movieId}/book/${screeningId}/${booking.id}`);
    });
  }, []);

  return <CircularProgress/>;
}
