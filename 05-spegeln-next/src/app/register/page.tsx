'use client';

import { User, UserPostBody } from '@/features/account/types';
import apiRequest from '@/utils/apiRequest';
import {
  Box,
  Button,
  Card,
  FormControl,
  FormLabel,
  Grid,
  Input,
  Typography,
} from '@mui/joy';
import { useState } from 'react';

export default function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Box display="flex" justifyContent="space-around">
      <Card
        sx={{
          maxWidth: 600,
        }}
      >
        <Typography level="h2" mb={2}>
          Register user
        </Typography>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            apiRequest<User, UserPostBody>('POST', '/api/register', {
              firstName,
              lastName,
              email,
              password,
            }).then((user) => {
              console.log('done!', user);
            });
          }}
        >
          <Grid container spacing={1} rowSpacing={2}>
            <Grid xs={12} md={6}>
              <FormControl>
                <FormLabel>First name</FormLabel>
                <Input
                  value={firstName}
                  onChange={(ev) => setFirstName(ev.target.value)}
                />
              </FormControl>
            </Grid>
            <Grid xs={12} md={6}>
              <FormControl>
                <FormLabel>Last name</FormLabel>
                <Input
                  value={lastName}
                  onChange={(ev) => setLastName(ev.target.value)}
                />
              </FormControl>
            </Grid>
            <Grid xs={12} md={6}>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input
                  value={email}
                  onChange={(ev) => setEmail(ev.target.value)}
                />
              </FormControl>
            </Grid>
            <Grid xs={12} md={6}>
              <FormControl>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  value={password}
                  onChange={(ev) => setPassword(ev.target.value)}
                />
              </FormControl>
            </Grid>
            <Grid xs={12} mt={2}>
              <Button type="submit">Create user account</Button>
            </Grid>
          </Grid>
        </form>
      </Card>
    </Box>
  );
}
