'use client';

import useLoggedInUser from '@/features/account/hooks/useLoggedInUser';
import { CircularProgress, Typography } from '@mui/joy';

export default function Welcome() {
  const { user, loading, anon } = useLoggedInUser();

  return (
    <Typography level="h2">
      {user && <>Welcome, {user.firstName}!</>}
      {loading && <CircularProgress />}
      {anon && <>Welcome!</>}
    </Typography>
  );
}
