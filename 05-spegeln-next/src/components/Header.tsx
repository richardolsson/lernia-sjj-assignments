'use client';

import { Box } from '@mui/joy';
import Link from 'next/link';
import { FC } from 'react';

const Header: FC = () => {
  return (
    <Box component="header" display="flex" gap={3}>
      <Link href="/register">Register</Link>
      <Link href="/welcome">Welcome</Link>
    </Box>
  );
};

export default Header;
