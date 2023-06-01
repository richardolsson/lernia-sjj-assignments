'use client';

import apiRequest from '@/utils/apiRequest';
import {
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
  onLoginComplete: (user: User) => void;
};

const LoginForm: FC<LoginFormProps> = ({ onLoginComplete }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <Typography level="h2">Log in</Typography>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          apiRequest<User, LoginPostBody>('POST', '/api/login', {
            email,
            password,
          }).then((user) => {
            onLoginComplete(user);
          });
        }}
      >
        <Grid container spacing={2}>
          <Grid xs={12} md={6}>
            <FormControl>
              <FormLabel>Email address</FormLabel>
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
                value={password}
                onChange={(ev) => setPassword(ev.target.value)}
                type="password"
              />
            </FormControl>
          </Grid>
          <Grid xs={12}>
            <Button type="submit">Log in</Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default LoginForm;
