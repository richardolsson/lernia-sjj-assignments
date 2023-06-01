import { useEffect, useState } from "react";
import { User } from "../types";
import apiRequest from "@/utils/apiRequest";

export default function useLoggedInUser() {
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

  return {
    anon: !user && !loading,
    user,
    loading,
  };
}