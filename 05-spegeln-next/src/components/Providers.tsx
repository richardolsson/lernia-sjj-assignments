'use client';

import UserProvider from '@/features/account/components/UserProvider';
import MoviesProvider from '@/features/movies/components/MoviesProvider';
import { CssVarsProvider } from '@mui/joy';
import { FC, ReactNode } from 'react';

type ProvidersProps = {
  children: ReactNode;
};

const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <CssVarsProvider>
      <UserProvider>
        <MoviesProvider>{children}</MoviesProvider>
      </UserProvider>
    </CssVarsProvider>
  );
};

export default Providers;
