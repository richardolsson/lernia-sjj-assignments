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
import { RegisterPostBody } from '@/app/api/register/route';

type RegistrationFormProps = {
  onRegistrationComplete: (user: User) => void;
};

const RegistrationForm: FC<RegistrationFormProps> = ({
  onRegistrationComplete,
}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <Typography level="h2" mb={2}>
        Register user
      </Typography>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          apiRequest<User, RegisterPostBody>('POST', '/api/register', {
            firstName,
            lastName,
            email,
            password,
          }).then((user) => {
            onRegistrationComplete(user);
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
    </>
  );
};

export default RegistrationForm;
