'use client';

import LoginForm from '@/features/account/components/LoginForm';
import { Box, Card } from '@mui/joy';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();
  return (
    <Box>
      <Card sx={{ maxWidth: 600 }}>
        <LoginForm
          onLoginComplete={() => {
            router.push('/welcome');
          }}
        />
      </Card>
    </Box>
  );
}
