'use client';

import RegistrationForm from '@/features/account/components/RegistrationForm';
import { Box, Card } from '@mui/joy';
import { useRouter } from 'next/navigation';

export default function Register() {
  const router = useRouter();
  return (
    <Box display="flex" justifyContent="space-around">
      <Card
        sx={{
          maxWidth: 600,
        }}
      >
        <RegistrationForm
          onRegistrationComplete={(user) => {
            router.push('/welcome');
          }}
        />
      </Card>
    </Box>
  );
}