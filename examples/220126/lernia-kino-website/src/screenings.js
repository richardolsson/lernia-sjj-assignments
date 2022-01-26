import { loadScreenings } from "./movies.js";

export async function getScreenings() {
  const now = new Date();
  const screenings = (await loadScreenings())
    .filter(obj => {
      const screeningTime = new Date(obj.attributes.start_time);
      return screeningTime > now;
    })
    .slice(0, 10);

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
