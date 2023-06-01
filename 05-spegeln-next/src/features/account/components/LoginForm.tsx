'use client';

import apiRequest from '@/utils/apiRequest';
import {
  Alert,
  Button,
  FormControl,
  FormLabel,
  Grid,
  Input,
  Typography,
} from '@mui/joy';
import { FC, useState } from 'react';
import { User } from '../types';
import { LoginPostBody } from '@/app/api/login/route';

type LoginFormProps = {
  onLoginComplete?: (user: User) => void;
};

const LoginForm: FC<LoginFormProps> = ({ onLoginComplete }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  return (
    <>
      <Typography level="h2">Log in</Typography>
      <form
        onSubmit={(event) => {
          setError(false);
          event.preventDefault();
          apiRequest<User, LoginPostBody>('POST', '/api/login', {
            email,
            password,
          })
            .then((user) => {
              if (onLoginComplete) {
                onLoginComplete(user);
              }
            })
            .catch(() => {
              setError(true);
            });
        }}
      >
        <Grid container spacing={2}>
          <Grid xs={12} md={6}>
            <FormControl>
              <FormLabel>Email address</FormLabel>
              <Input
                value={email}
                onChange={(ev) => {
                  setEmail(ev.target.value);
                  setError(false);
                }}
              />
            </FormControl>
          </Grid>
          <Grid xs={12} md={6}>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input
                value={password}
                onChange={(ev) => {
                  setPassword(ev.target.value);
                  setError(false);
                }}
                type="password"
              />
            </FormControl>
          </Grid>
          {error && (
            <Alert color="danger" variant="soft">
              We could not log you in. Check your email and password and try
              again.
            </Alert>
          )}
          <Grid xs={12}>
            <Button type="submit">Log in</Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default LoginForm;
