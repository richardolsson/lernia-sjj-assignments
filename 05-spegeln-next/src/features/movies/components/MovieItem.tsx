import { FC } from 'react';
import { Movie } from '../types';
import { Box, Card, Typography } from '@mui/joy';
import Image from 'next/image';
import Link from 'next/link';

type MovieItemProps = {
  movie: Movie;
};

const MovieItem: FC<MovieItemProps> = ({ movie }) => {
  return (
    <Card sx={{ my: 2 }}>
      <Link href={`/movies/${movie.id}`}>
        <Typography level="h3">{movie.attributes.title}</Typography>
        <Image
          alt={movie.attributes.title}
          src={movie.attributes.image.url}
          width={200}
          height={300}
        />
      </Link>
    </Card>
  );
};

export default MovieItem;
