export type Review = {
  id: number;
  rating: number;
  comment: string;
};

export type Movie = {
  id: number;
  title: string;
  description: string;
  reviews: Review[];
};
