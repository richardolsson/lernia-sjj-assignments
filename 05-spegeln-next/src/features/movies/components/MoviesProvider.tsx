import { FC, ReactNode, createContext, useEffect, useState } from 'react';
import { Movie } from '../types';
import apiRequest from '@/utils/apiRequest';

type MoviesContextValue = {
  loading: boolean;
  movies: Movie[];
};

export const MoviesContext = createContext<MoviesContextValue>({
  loading: true,
  movies: [],
});

type MoviesProviderProps = {
  children: ReactNode;
};

const MoviesProvider: FC<MoviesProviderProps> = ({ children }) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiRequest<{ data: Movie[] }>(
      'GET',
      'https://plankton-app-xhkom.ondigitalocean.app/api/movies'
    )
      .then((payload) => {
        setLoading(false);
        setMovies(payload.data);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <MoviesContext.Provider
      value={{
        loading,
        movies,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesProvider;
