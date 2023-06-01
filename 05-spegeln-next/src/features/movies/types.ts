export type Movie = {
  id: number;
  attributes: {
    title: string;
    image: {
      url: string;
    },
  }
}

export type Screening = {
  id: number;
  attributes: {
    start_time: string;
    room: string;
  },
}

export type SeatInfo = {
  seatId: string;
  status: 'available' | 'unavailable' | 'reservedByUser';
}