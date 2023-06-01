import { useContext } from 'react';
import { UserContext } from '../components/UserProvider';

export default function useLoggedInUser() {
  const {user, loading} = useContext(UserContext);

  return {
    anon: !user && !loading,
    user,
    loading,
  };
}
