'use client';

import useMovie from '@/features/movies/hooks/useMovie';
import useMovies from '@/features/movies/hooks/useMovies';
import { Screening } from '@/features/movies/types';
import apiRequest from '@/utils/apiRequest';
import {
  Box,
  Button,
  CircularProgress,
  List,
  ListItem,
  Typography,
} from '@mui/joy';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type MovieProps = {
  params: {
    movieId: string;
  };
};

export default function Movie({ params }: MovieProps) {
  const { movieId } = params;
  const [screenings, setScreenings] = useState<Screening[]>([]);
  const { loading, movie } = useMovie(parseInt(movieId));

  useEffect(() => {
    const now = new Date();
    const url =
      'https://plankton-app-xhkom.ondigitalocean.app/api/screenings' +
      `?filters[movie]=${movieId}` +
      `&filters[start_time][$gte]=${now.toISOString()}`;

    apiRequest<{ data: Screening[] }>('GET', url).then((payload) => {
      setScreenings(payload.data);
    });
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

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
      <List>
        {screenings.map((screening) => {
          const date = new Date(screening.attributes.start_time);
          return (
            <ListItem
              key={screening.id}
              sx={{ justifyContent: 'space-between' }}
            >
              <Box display="flex" flexDirection="column">
                <Typography fontWeight="bold" display="block">
                  {date.toLocaleString()}
                </Typography>
                <Typography display="block">
                  {screening.attributes.room}
                </Typography>
              </Box>
              <Link href={`/movies/${movieId}/book/${screening.id}`} passHref>
                <Button>Book</Button>
              </Link>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}
