export type Movie = {
  id: number;
  attributes: {
    title: string;
    image: {
      url: string;
    },
  }
}