'use client';

import { User } from '@/features/account/types';
import apiRequest from '@/utils/apiRequest';
import { CircularProgress, Typography } from '@mui/joy';
import { useEffect, useState } from 'react';

export default function Welcome() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiRequest<User>('GET', '/api/user')
      .then((user) => {
        setUser(user);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  return (
    <Typography level="h2">
      {user && <>Welcome, {user.firstName}!</>}
      {!user && !loading && <>Welcome!</>}
      {loading && <CircularProgress/>}
    </Typography>
  );
}
