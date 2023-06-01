'use client';

import LoginForm from '@/features/account/components/LoginForm';
import { Box, Card } from '@mui/joy';

export default function Login() {
  return (
    <Box>
      <Card sx={{ maxWidth: 600 }}>
        <LoginForm />
      </Card>
    </Box>
  );
}
