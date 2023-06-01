'use client';

import RegistrationForm from '@/features/account/components/RegistrationForm';
import useLoggedInUser from '@/features/account/hooks/useLoggedInUser';
import { Box, Card, Typography } from '@mui/joy';
import { useRouter } from 'next/navigation';

export default function Register() {
  const router = useRouter();
  const { anon, user } = useLoggedInUser();

  return (
    <Box display="flex" justifyContent="space-around">
      <Card
        sx={{
          maxWidth: 600,
        }}
      >
        {user && (
          <Typography level="h2">
            Silly {user.firstName}, you already have an account!
          </Typography>
        )}
        {anon && (
          <RegistrationForm
            onRegistrationComplete={(user) => {
              router.push('/welcome');
            }}
          />
        )}
      </Card>
    </Box>
  );
}
