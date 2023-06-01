'use client';

import UserProvider from '@/features/account/components/UserProvider';
import { CssVarsProvider } from '@mui/joy';
import { FC, ReactNode } from 'react';

type ProvidersProps = {
  children: ReactNode;
};

const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <CssVarsProvider>
      <UserProvider>{children}</UserProvider>
    </CssVarsProvider>
  );
};

export default Providers;
