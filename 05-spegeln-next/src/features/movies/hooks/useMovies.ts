import { useEffect, useState } from "react";
import { Movie } from "../types";
import apiRequest from "@/utils/apiRequest";

export default function useMovies() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    apiRequest<{ data: Movie[] }>(
      'GET',
      'https://plankton-app-xhkom.ondigitalocean.app/api/movies'
    ).then((payload) => {
      setMovies(payload.data);
    });
  }, []);

  return {
    movies
  };
}