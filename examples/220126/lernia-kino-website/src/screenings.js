import { loadScreenings } from "./movies.js";

export async function getScreenings() {
  const screenings = await loadScreenings();

  // TODO: Filter screenings

  return {
    data: screenings.map(obj => {
      return {
        time: obj.attributes.start_time,
        room: obj.attributes.room,
        movie: {
          id: obj.attributes.movie.data.id,
          title: obj.attributes.movie.data.attributes.title,
        }
      };
    }),
  };
}
